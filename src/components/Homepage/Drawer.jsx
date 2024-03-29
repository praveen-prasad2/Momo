import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const DrawerWithNavigation = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const location = useLocation();

  const allBlack = location.pathname === "/" ? "text-white" : "text-black";

  return (
    <React.Fragment>
      <IoMenu
        size={50}
        className={`cursor-pointer mt-2 ${allBlack}`}
        onClick={openDrawer}
      />
      <Drawer
        overlay={false}
        placement={"right"}
        className="bg-momo-primary text-white"
        open={open}
        onClose={closeDrawer}
      >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" className="text-momo-red">
            Momo Wagon
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div
          className={`flex flex-col px-6 items-start justify-center gap-10 text-white`}
        >
          <Link onClick={closeDrawer} to={"/"} className="cursor-pointer">
            Home
          </Link>
          <Link
            onClick={closeDrawer}
            to={"/about-us"}
            className="cursor-pointer"
          >
            About Us
          </Link>
          <Link onClick={closeDrawer} to={"/menu"} className="cursor-pointer">
            Menu
          </Link>
          {/* <Link
            onClick={closeDrawer}
            to={"#contact"}
            className="cursor-pointer"
          >
            Contact
          </Link> */}
          <Link onClick={closeDrawer} to={"/team"} className="cursor-pointer">
            Team
          </Link>
          <Link
            onClick={closeDrawer}
            to={"/company"}
            className="cursor-pointer"
          >
            Company
          </Link>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerWithNavigation;
