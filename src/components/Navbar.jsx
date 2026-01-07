import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-15 items-center justify-between">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-semibold text-gray-900"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-lg  text-white">
              <img
                src="https://cdn-images.prepp.in/public/college_data/images/logos/SSC_Logo.png"
                alt=""
              />
            </div>

            {/* Title */}
            <span className="tracking-tight">SSC quiz</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative text-l sm:text-sm  font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Home
              {({ isActive }) =>
                isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-blue-600" />
                )
              }
            </NavLink>

            <NavLink
              to="/browse"
              className={({ isActive }) =>
                `relative text-l font-medium transition ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              Browse
              {({ isActive }) =>
                isActive && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-blue-600" />
                )
              }
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
