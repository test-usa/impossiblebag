/* eslint-disable react/prop-types */

const CommonWrapper = ({ children, Class }) => {
  return (
    <div className={`max-w-[1520px] mx-auto px-4 ${Class}`}>{children}</div>
  );
};

export default CommonWrapper;
