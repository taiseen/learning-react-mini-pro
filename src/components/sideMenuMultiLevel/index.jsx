import sideBarMenu from "./json/menu.json";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="w-[300px] bg-gray-300 h-screen overflow-auto">
      {sideBarMenu.map((data, idx) => (
        <SidebarItem key={idx} data={data} />
      ))}
    </div>
  );
};

export default Sidebar;
