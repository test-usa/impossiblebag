import React from "react";
import { Pagination } from "@nextui-org/react";

const CustomPagination = ({ initialPage, total, setInitialPage }) => {
  return (
    <>
      <Pagination
        color="warning"
        showShadow
        loop
        showControls
        onChange={setInitialPage}
        initialPage={initialPage}
        total={total}
      />
    </>
  );
};

export default CustomPagination;
