import { Pagination } from "@heroui/pagination";
import React from "react";
import { IoArrowForwardSharp, IoArrowBackOutline } from "react-icons/io5";

const CustomPagination = () => {
  return (
    <div>
      <div className="flex items-center gap-4 text-[#141414]">
        <button className="p-2  ring-1 ring-[#141414] rounded-md hover:bg-[#141414] hover:text-white transition-all">
          <IoArrowBackOutline />
        </button>
        <div className="flex items-center gap-4 text-[#A6A6A6] text-xl">
          <span className="text-[#141414] font-bold">1</span>
          <span className="">2</span>
          <span className="">3</span>
        </div>
        <button className="p-2  ring-1 ring-[#141414] rounded-md hover:bg-[#141414] hover:text-white transition-all">
          <IoArrowForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;

// import React from "react";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// const Pagination = ({
//   totalPost,
//   postPerPage,
//   currentPage,
//   setCurrentPage,
// }) => {
//   let pages = [];
//   for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
//     pages.push(i);
//   }
//   const handleLeft = () => {
//     if (currentPage > 1) {
//       setCurrentPage((pre) => pre - 1);
//     }
//   };
//   const handleRight = () => {
//     if (pages.length > currentPage) {
//       setCurrentPage((pre) => pre + 1);
//     }
//   };

//   return (
//     <div className="w-fit mx-auto p-4 rounded-md bg-white shadow">
//       <div className="flex items-center gap-4">
//         <div
//           onClick={handleLeft}
//           className={`text-2xl p-2 rounded ${
//             currentPage > 1 ? "bg-blue-50 cursor-pointer" : ""
//           } `}
//         >
//           <IoIosArrowBack />
//         </div>

//         {pages.map((page, index) => {
//           return (
//             <button
//               className={
//                 page == currentPage
//                   ? "bg-primary w-6 h-6 text-white flex items-center justify-center rounded"
//                   : ""
//               }
//               onClick={() => {
//                 setCurrentPage(page);
//               }}
//               key={index}
//             >
//               {page}
//             </button>
//           );
//         })}

//         <div
//           onClick={handleRight}
//           className={`text-2xl p-2 rounded  ${
//             pages.length > currentPage ? "bg-blue-50 cursor-pointer" : ""
//           } `}
//         >
//           <IoIosArrowForward />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
