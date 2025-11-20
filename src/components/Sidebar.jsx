import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">Tianyi</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Publications"
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          Publications
        </NavLink>
        <NavLink
          to="/Hobbies"
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          Hobbies
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            "nav-item" + (isActive ? " nav-item-active" : "")
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

