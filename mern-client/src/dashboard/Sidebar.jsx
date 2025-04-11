import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { AuthContext } from "../contacts/AuthProvider";
import { useContext } from "react";

const SideBar = () => {
  const {user} = useContext(AuthContext)
  // Check if this logs valid user data:
  // console.log("User from context:", user);

  console.log(user);
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" >
        {user?.photoURL ? (
          <div className="ml-2">{`Mr ${user.email?.charAt(0).toUpperCase()}`}</div>
        ) : (
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
              {user?.email?.charAt(0).toUpperCase() || "D"}
            </div>
            <div className="ml-2">
              {user ? `Mr ${user.email?.charAt(0).toUpperCase()}` : "Demo User"}
            </div>
          </div>
        )}
      </Sidebar.Logo>

    <Sidebar.Items>
      <Sidebar.ItemGroup>

        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>

        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          UploadBook
        </Sidebar.Item>

        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          ManageBooks
        </Sidebar.Item>

        <Sidebar.Item href="#" icon={HiUser}>
          Users
        </Sidebar.Item>

        <Sidebar.Item href="#" icon={HiShoppingBag}>
          Products
        </Sidebar.Item>

        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item>

        <Sidebar.Item href="/logout" icon={HiTable}>
          Log Out
        </Sidebar.Item>

      </Sidebar.ItemGroup>

      <Sidebar.ItemGroup>
        <Sidebar.Item href="#" icon={HiChartPie}>
          Upgrade to Pro
        </Sidebar.Item>

        <Sidebar.Item href="#" icon={HiViewBoards}>
          Documentation
        </Sidebar.Item>

        <Sidebar.Item href="#" icon={BiBuoy}>
          Help
        </Sidebar.Item>

      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}

export default SideBar


// import { Sidebar } from "flowbite-react";
// import {
//   BiBuoy,
//   HiArrowSmRight,
//   HiChartPie,
//   HiInbox,
//   HiOutlineCloudUpload,
//   HiShoppingBag,
//   HiTable,
//   HiUser,
//   HiViewBoards,
// } from "react-icons/bi";
// import { AuthContext } from "../contacts/AuthProvider";
// import { useContext } from "react";

// const SideBar = () => {
//   const { user } = useContext(AuthContext);
//   const userInitial = user?.email?.charAt(0).toUpperCase() || "D";
//   const userLabel = user ? `Mr ${userInitial}` : "Demo User";

//   return (
//     <Sidebar aria-label="Sidebar with content separator example">
//       <Sidebar.Logo
//         href="/"
//         img={user?.photoURL || undefined}
//         imgAlt="User Avatar"
//         className="w-16 h-16"
//       >
//         {user?.photoURL ? (
//           <div className="ml-2">
//             <p>{userLabel}</p>
//           </div>
//         ) : (
//           <div className="flex items-center">
//             <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
//               {userInitial}
//             </div>
//             <div className="ml-2">
//               <p>{userLabel}</p>
//             </div>
//           </div>
//         )}
//       </Sidebar.Logo>

//       <Sidebar.Items>
//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
//             Dashboard
//           </Sidebar.Item>

//           <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
//             UploadBook
//           </Sidebar.Item>

//           <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
//             ManageBooks
//           </Sidebar.Item>

//           <Sidebar.Item href="#" icon={HiUser}>
//             Users
//           </Sidebar.Item>

//           <Sidebar.Item href="#" icon={HiShoppingBag}>
//             Products
//           </Sidebar.Item>

//           <Sidebar.Item href="/login" icon={HiArrowSmRight}>
//             Sign In
//           </Sidebar.Item>

//           <Sidebar.Item href="/logout" icon={HiTable}>
//             Log Out
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>

//         <Sidebar.ItemGroup>
//           <Sidebar.Item href="#" icon={HiChartPie}>
//             Upgrade to Pro
//           </Sidebar.Item>

//           <Sidebar.Item href="#" icon={HiViewBoards}>
//             Documentation
//           </Sidebar.Item>

//           <Sidebar.Item href="#" icon={BiBuoy}>
//             Help
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// };

// export default SideBar;
