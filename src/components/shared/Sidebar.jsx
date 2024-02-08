import { DASHBOARD_SIDEBAR_LINKS } from "../lib/const/navigation";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
            {/* <a 
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            > <FaChartLine/>

              <span class="ms-3">Dashboard</span>
            </a> */}
          </li>
        </ul>
      </div>
    </aside>
  );
}

function SidebarLink({ item }) {
  return (
    <Link to={item.path}>
      <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <span className="flex gap-4 items-center -2g ms-3">
          {item.icon} {item.label}
        </span>
      </span>
    </Link>
  );
}
