import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

// MongoDB Connection
const uri = process.env.MONGO_URI ;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to DB and define routes
client.connect().then(() => {
  console.log("Connected to MongoDB");

  const bookCollection = client.db("BookInventory").collection("books");

  // Upload book
  app.post("/upload-book", async (req, res) => {
    try {
      const result = await bookCollection.insertOne(req.body);
      res.status(201).send({ message: "Book uploaded successfully", result });
    } catch (error) {
      res.status(500).send({ message: "Failed to upload book", error });
    }
  });

  // Get all books (optionally by category)
  app.get("/all-books", async (req, res) => {
    try {
      const query = req.query.category ? { category: req.query.category } : {};
      const books = await bookCollection.find(query).toArray();
      res.send(books);
    } catch (error) {
      res.status(500).send({ message: "Failed to fetch books", error });
    }
  });

  // Get single book
  app.get("/book/:id", async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) return res.status(400).send({ message: "Invalid ID" });

    try {
      const book = await bookCollection.findOne({ _id: new ObjectId(id) });
      if (!book) return res.status(404).send({ message: "Book not found" });
      res.send(book);
    } catch (error) {
      res.status(500).send({ message: "Failed to fetch book", error });
    }
  });

  // Update book
  app.patch("/book/:id", async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) return res.status(400).send({ message: "Invalid ID" });

    try {
      const result = await bookCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: req.body }
      );
      if (result.matchedCount === 0) {
        return res.status(404).send({ message: "Book not found" });
      }
      res.send({ message: "Book updated successfully", result });
    } catch (error) {
      res.status(500).send({ message: "Failed to update book", error });
    }
  });

  // Delete book
  app.delete("/book/:id", async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) return res.status(400).send({ message: "Invalid ID" });

    try {
      const result = await bookCollection.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 0) {
        return res.status(404).send({ message: "Book not found" });
      }
      res.send({ message: "Book deleted successfully", result });
    } catch (error) {
      res.status(500).send({ message: "Failed to delete book", error });
    }
  });

  // Ping the DB
  client.db("admin").command({ ping: 1 })
    .then(() => console.log("Pinged MongoDB successfully"))
    .catch((err) => console.error("Ping failed:", err));

}).catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
