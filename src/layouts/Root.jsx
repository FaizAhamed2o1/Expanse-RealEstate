import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="font-urbanist bg-bg-primary-black text-primaryCustomText">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
