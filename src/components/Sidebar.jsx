import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`primary w-[100px] bg-[#1E62D7] flex flex-col items-start justify-start py-8 pl-[26px] pr-0 box-border gap-[64px] z-[1] mq750:pt-[26px] mq750:pb-[26px] mq750:box-border mq1125:hidden ${className}`}
    >
      <div className="w-[100px] h-[900px] relative bg-gray-900 hidden gap-4" />
      <Link to="/">
        <img
          className=" h-6 relative z-[1] shrink-0 overflow-hidden pl-2"
          loading="lazy"
          alt=""
          src="/public/Logo (1).png"
        />
      </Link>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[244px] pl-2 pr-0 mq750:pb-[159px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
          <NavLink to="/" className="relative group " activeClassName="active">
            {({ isActive }) => (
              <div className="relative group flex items-center ">
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Home"
                  src="/public/Main.png"
                />
              </div>
            )}
          </NavLink>
          <NavLink
            to="/Profile"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Profile"
                  src="/public/Profile.png"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Calendar"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Calendar"
                  src="/public/Calendar.png"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Analytics"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Analytics"
                  src="/public/Analytics.png"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Uploads"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Uploads"
                  src="/public/Uploads.png"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Map"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Map"
                  src="/public/Map.png"
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Settings"
            className="relative group"
            activeClassName="active"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute right-[55px] top-1/2 transform -translate-y-1/2 h-8 w-1 rounded-lg bg-cornflowerblue z-[1]" />
                )}
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt="Settings"
                  src="/public/Settings.png"
                />
              </>
            )}
          </NavLink>
        </div>
      </div>
      <img
        className=" relative z-[1] pl-2 pb-2"
        loading="lazy"
        alt="Exit"
        src="/Exit.svg"
      />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
