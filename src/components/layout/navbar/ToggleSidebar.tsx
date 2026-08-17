import { MenuIcon } from "@/icons";

interface ToggleSidebarProps {
  toggleSidebar: () => void;
}

export default function ToggleSidebar({ toggleSidebar }: ToggleSidebarProps) {
  return (
    <div className="flexCenter lg:hidden">
      <button
        aria-label="Toggle navigation menu"
        title="Toggle navigation menu"
        onClick={toggleSidebar}
      >
        <div className="bg-secondary cursor-pointer rounded-md p-2">
          <MenuIcon />
        </div>
      </button>
    </div>
  );
}
