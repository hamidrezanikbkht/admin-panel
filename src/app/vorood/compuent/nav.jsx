"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import ClearIcon from "@mui/icons-material/Clear";
import Pro from "./pro";
import Input from "./input";
import PeopleIcon from "@mui/icons-material/People";
import OutputIcon from "@mui/icons-material/Output";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BlindIcon from "@mui/icons-material/Blind";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from '@mui/icons-material/Person';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#f4f6f8",
    minHeight: "100vh",
    // فقط در حالت دسکتاپ:
    [theme.breakpoints.up("md")]: {
      marginRight: open ? 0 : -drawerWidth,
    },
    // فقط در حالت موبایل:
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "linear-gradient(90deg, #0ea5e9, #0d9488)",
  color: "#ffffff",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // حالت دسکتاپ
  [theme.breakpoints.up("md")]: {
    width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
    marginRight: open ? drawerWidth : 0,
  },
  // حالت موبایل
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginRight: 0,
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const data = [
    { name: "فروردین", بیماران: 30 },
    { name: "اردیبهشت", بیماران: 45 },
    { name: "خرداد", بیماران: 60 },
    { name: "تیر", بیماران: 50 },
    { name: "مرداد", بیماران: 70 },
    { name: "شهریور", بیماران: 40 },
  ];

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const dark = () => {
    console.log("sasdasad");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
            style={{  display: "flex", alignItems: "center",padding:'10px' }}
          >
            <span style={{ margin: "0 10px" }}>
              <SettingsIcon />
            </span>
            
            <span>
              <Pro />
            </span>
            <span
              style={{ padding: "0 10px", position: "absolute", right: "30px" }}
            >
              <Input />
            </span>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <div className="w-full flex justify-center flex-wrap *:w-full  *:flex *:justify-center *:gap-x-4 *:gap-y-5 gap-5">
          <div className=" w-full lg:*:w-1/2   ">
            {/* کارت اول */}
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4  mt-4  ">
              <div className="flex flex-col justify-center items-start">
                <p className="text-gray-500 text-sm">سال جاری</p>
                <p className="text-2xl font-bold">1.43%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-xl font-bold">20</p>
                  <p className="text-gray-500 text-sm">  اتاق ها</p>
                </div>
                <span className="w-20 h-20 bg-blue-100 flex justify-center items-center rounded-full">
                  <DomainAddIcon
                    sx={{ width: "50px", height: "50px", color: "#2196f3" }}
                  />
                </span>
              </div>
            </div>
            {/* کارت دوم */}
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4 space-y-4 mt-5">
              <div className="flex flex-col justify-center items-start">
                <p className="text-gray-500 text-sm">سال جاری</p>
                <p className="text-2xl font-bold">0.67%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-xl font-bold">120</p>
                  <p className="text-gray-500 text-sm"> پزشکان در دسترس</p>
                </div>
                <span className="w-20 h-20 bg-green-100 flex justify-center items-center rounded-full">
                  <MedicalServicesIcon
                    sx={{ width: "50px", height: "50px", color: "#4caf50" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:*:w-1/2 ">
            {/* کارت سوم */}
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4 space-y-4">
              <div className="flex flex-col justify-center items-start">
                <p className="text-gray-500 text-sm">سال جاری</p>
                <p className="text-2xl font-bold">1.43%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-xl font-bold">256</p>
                  <p className="text-gray-500 text-sm">قرار ملاقات ها</p>
                </div>
                <span className="w-20 h-20 bg-purple-100 flex justify-center items-center rounded-full">
                  <PersonIcon
                    sx={{ width: "50px", height: "50px", color: "#9c27b0" }}
                  />
                </span>
              </div>
            </div>
            {/* کارت چهارم */}
            <div className="flex justify-between bg-white rounded-lg shadow-md p-4 space-y-4 mt-5">
              <div className="flex flex-col justify-center items-start">
                <p className="text-gray-500 text-sm">سال جاری</p>
                <p className="text-2xl font-bold">0.67%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center">
                  <p className="text-xl font-bold">150</p>
                  <p className="text-gray-500 text-sm">مجموع بیماران</p>
                </div>
                <span className="w-20 h-20 bg-pink-100 flex justify-center items-center rounded-full">
                  <AssistWalkerIcon
                    sx={{ width: "50px", height: "50px", color: "#e91e63" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="bg-white rounded-lg shadow-md p-4 mt-5">
            <Typography variant="h6" gutterBottom>
              آمار ماهانه بیماران
            </Typography>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="بیماران" fill="#4caf50" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#ffffff",
            boxShadow: 3,
          },
        }}
        variant={isDesktop ? "persistent" : "temporary"}
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ClearIcon /> : <ClearIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          <Link href={"./vorood"}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#e3f2fd" },
                }}
              >
                <ListItemIcon sx={{ color: "#1976d2" }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"صحفه اصلی "} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"./list"}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#e3f2fd" },
                }}
              >
                <ListItemIcon sx={{ color: "#1976d2" }}>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary={"لیست بیماران"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": { backgroundColor: "#e3f2fd" },
              }}
            >
              <ListItemIcon sx={{ color: "#1976d2" }}>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText primary={"بیمارستان"} />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List>
          {/* آیتم اول */}
          <Link href={"./LatestVisits"}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#fce4ec" },
                }}
              >
                <ListItemIcon sx={{ color: "#d81b60" }}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="آخرین قرار ملاقات ها" />
              </ListItemButton>
            </ListItem>
          </Link>

          {/* آیتم دوم */}
          <Link href={"./"}>
            {" "}
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#fce4ec" },
                }}
              >
                <ListItemIcon sx={{ color: "#d81b60" }}>
                  <OutputIcon />
                </ListItemIcon>
                <ListItemText primary="خروج" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
