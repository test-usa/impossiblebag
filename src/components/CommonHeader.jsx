import CommonWrapper from "./CommonWrapper";

const CommonHeader = ({ title, heading }) => {
  return (
    <CommonWrapper>
      <div className="flex flex-col gap-2 items-center justify-center  w-full py-10 ">
        <h2 className="font-bold text-[72px] font-Geist capitalize">
          {heading}
        </h2>
        <p className=" font-Poppins  ">Home / {title}</p>
      </div>
    </CommonWrapper>
  );
};

export default CommonHeader;
