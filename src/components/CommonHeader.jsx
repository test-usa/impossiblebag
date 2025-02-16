const CommonHeader = ({ title, heading }) => {
  return (
    <div className="flex flex-col gap-2 items-center  w-full py-10">
      <h2 className="font-bold text-[72px] font-Geist capitalize">{heading}</h2>
      <p className=" font-Poppins  ">Home / {title}</p>
    </div>
  );
};

export default CommonHeader;
