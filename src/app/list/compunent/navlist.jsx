"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import PeopleIcon from "@mui/icons-material/People";
import OutputIcon from "@mui/icons-material/Output";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import useMediaQuery from "@mui/material/useMediaQuery";
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

const drawerWidth = 240;

// Fixed data (not randomly generated)
const patientsData = [
  {
    id: 1,
    name: "محمد حسینی",
    gender: "مرد",
    phone: "۰۹۱۲۱۲۳۴۵۶۷",
    lastAppointment: "۱۴۰۲/۰۵/۱۵",
    medicalRecord: "دیابت نوع ۲ - تحت درمان با متفورمین",
    code: "B-1001",
  },
  {
    id: 2,
    name: "فاطمه محمدی",
    gender: "زن",
    phone: "۰۹۳۵۵۶۷۸۹۱۰",
    lastAppointment: "۱۴۰۲/۰۴/۲۸",
    medicalRecord: "فشار خون بالا - کنترل شده با لوزارتان",
    code: "B-1002",
  },
  {
    id: 3,
    name: "علی رضایی",
    gender: "مرد",
    phone: "۰۹۱۸۹۰۱۲۳۴۵",
    lastAppointment: "۱۴۰۲/۰۶/۰۳",
    medicalRecord: "آسم آلرژیک - اسپری سالبوتامول",
    code: "B-1003",
  },
  {
    id: 4,
    name: "زهرا کریمی",
    gender: "زن",
    phone: "۰۹۳۳۴۵۶۷۸۹۰",
    lastAppointment: "۱۴۰۲/۰۵/۲۰",
    medicalRecord: "میگرن مزمن - تحت نظر نورولوژیست",
    code: "B-1004",
  },
  {
    id: 5,
    name: "امیر احمدی",
    gender: "مرد",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    lastAppointment: "۱۴۰۲/۰۶/۱۰",
    medicalRecord: "کم کاری تیروئید - لووتیروکسین ۵۰",
    code: "B-1005",
  },
  {
    id: 6,
    name: "نازنین قاسمی",
    gender: "زن",
    phone: "۰۹۳۷۸۹۰۱۲۳۴",
    lastAppointment: "۱۴۰۲/۰۴/۱۵",
    medicalRecord: "آرتروز زانو - فیزیوتراپی در حال انجام",
    code: "B-1006",
  },
  {
    id: 7,
    name: "رضا موسوی",
    gender: "مرد",
    phone: "۰۹۱۵۶۷۸۹۰۱۲",
    lastAppointment: "۱۴۰۲/۰۶/۰۵",
    medicalRecord: "اضطراب و افسردگی - تحت رواندرمانی",
    code: "B-1007",
  },
  {
    id: 8,
    name: "مریم اکبری",
    gender: "زن",
    phone: "۰۹۳۴۱۲۳۴۵۶۷",
    lastAppointment: "۱۴۰۲/۰۵/۳۰",
    medicalRecord: "کولیت اولسراتیو - درمان با مزالازین",
    code: "B-1008",
  },
  {
    id: 9,
    name: "حسین نجفی",
    gender: "مرد",
    phone: "۰۹۱۶۷۸۹۰۱۲۳",
    lastAppointment: "۱۴۰۲/۰۶/۱۲",
    medicalRecord: "کم خونی فقر آهن - مکمل آهن",
    code: "B-1009",
  },
  {
    id: 10,
    name: "سارا امیری",
    gender: "زن",
    phone: "۰۹۳۲۳۴۵۶۷۸۹",
    lastAppointment: "۱۴۰۲/۰۴/۲۵",
    medicalRecord: "هایپرلیپیدمی - آتورواستاتین ۲۰",
    code: "B-1010",
  },
];

const PatientList = () => {
  
  
  const [patients, setPatients] = React.useState(patientsData);
  const [selectedCount, setSelectedCount] = React.useState(0);

  const handleSelectPatient = (id) => {
    const updatedPatients = patients.map((patient) =>
      patient.id === id ? { ...patient, selected: !patient.selected } : patient
    );
    setPatients(updatedPatients);
    setSelectedCount(updatedPatients.filter((p) => p.selected).length);
  };

  const handleDeleteSelected = () => {
    const remainingPatients = patients.filter((patient) => !patient.selected);
    setPatients(remainingPatients);
    setSelectedCount(0);
  };

  const columns = [
    "عملیات",
    "نوبت دهی",
    "سوابق پزشکی",
    "آخرین نوبت",
    "شماره تماس",
    "جنسیت",
    "نام",
    "کد بیمار",
    "انتخاب",
  ];

  return (
    <div className="w-full py-5 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 shadow-md">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-5 pb-4 gap-4">
        <div className="flex items-center gap-2">
          <select className="border border-blue-200 rounded-xl px-3 py-1 text-sm bg-white text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <option value="جدید">جدید</option>
            <option value="محبوب">محبوب</option>
            <option value="مرتبط">مرتبط</option>
          </select>
          <input
            type="search"
            className="border border-blue-200 rounded-xl px-3 py-1 text-sm bg-white text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="جستجو بیمار..."
          />
          {selectedCount > 0 && (
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteSelected}
              size="small"
              className="bg-red-500 hover:bg-red-600"
            >
              حذف ({selectedCount})
            </Button>
          )}
        </div>
        <Typography
          variant="h6"
          className="text-lg font-semibold text-blue-800"
        >
          لیست بیماران
        </Typography>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[800px]">
          <div className="w-full flex py-4 border-t border-b border-blue-100 bg-blue-50 rounded-t-lg">
            {columns.map((column, index) => (
              <div
                key={index}
                className={`px-2 font-bold text-center text-blue-700 ${
                  index === columns.length - 1 ? "w-16" : "w-32"
                }`}
              >
                {column}
              </div>
            ))}
          </div>

          {patients.map((patient) => (
            <div
              key={patient.id}
              className={`w-full flex py-4 border-b border-blue-50 hover:bg-blue-100 transition-colors duration-200 ${
                patient.selected ? "bg-blue-50" : ""
              }`}
            >
              <div className="w-32 px-2 text-center">
                <Button
                  variant="outlined"
                  size="small"
                  className="text-xs border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  عملیات
                </Button>
              </div>
              <div className="w-32 px-2 text-center">
                <Button
                  variant="contained"
                  size="small"
                  className="text-xs bg-green-500 hover:bg-green-600"
                >
                  نوبت دهی
                </Button>
              </div>
              <div
                className="w-32 px-2 text-center text-sm"
                style={{
                  color: "#065f46",
                  fontFamily: "Vazirmatn, sans-serif",
                  fontWeight: 500,
                }}
              >
                {patient.medicalRecord}
              </div>
              <div
                className="w-32 px-2 text-center text-sm"
                style={{
                  color: "#854d0e",
                  fontFamily: "Vazirmatn, sans-serif",
                  fontWeight: 500,
                }}
              >
                {patient.lastAppointment}
              </div>
              <div
                className="w-32 px-2 text-center text-sm"
                style={{
                  color: "#075985",
                  fontFamily: "Vazirmatn, sans-serif",
                  direction: "ltr",
                  letterSpacing: "0.5px",
                  fontWeight: 600,
                }}
              >
                {patient.phone}
              </div>
              <div
                className="w-24 px-2 text-center text-sm"
                style={{
                  color: patient.gender === "مرد" ? "#1e40af" : "#9d174d",
                  fontFamily: "Vazirmatn, sans-serif",
                  fontWeight: 600,
                }}
              >
                {patient.gender}
              </div>
              <div
                className="w-32 px-2 text-center"
                style={{
                  color: "#4c1d95",
                  fontFamily: "Vazirmatn, sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                }}
              >
                {patient.name}
              </div>
              <div
                className="w-32 px-2 text-center"
                style={{
                  color: "#7c3aed",
                  fontFamily: "Vazirmatn-FD, monospace",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                {patient.code}
              </div>
              <div className="w-16 px-2 flex justify-center">
                <input
                  type="checkbox"
                  checked={patient.selected || false}
                  onChange={() => handleSelectPatient(patient.id)}
                  className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "linear-gradient(90deg, #0ea5e9, #0d9488)",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  [theme.breakpoints.up("md")]: {
    width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
    marginRight: open ? drawerWidth : 0,
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginRight: 0,
  },
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#f8fafc",
    minHeight: "100vh",
    [theme.breakpoints.up("md")]: {
      marginRight: open ? 0 : -drawerWidth,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function Navlist() {

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h6" className="text-white">
                سیستم مدیریت بیماران
              </Typography>
              
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Main open={open}>
        <DrawerHeader />
        <PatientList />
      </Main>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background:'linear-gradient(to bottom, #f8fafc, #e0f2fe)',
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
            <ClearIcon className="text-blue-600" />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          <Link href="./vorood" passHref>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#e0f2fe" },
                }}
              >
                <ListItemIcon sx={{ color: "#0369a1" }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="صفحه اصلی"
                  primaryTypographyProps={{ style: { color: "black" } }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href="./list" passHref>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#e0f2fe" },
                }}
              >
                <ListItemIcon sx={{ color: "#0369a1" }}>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="لیست بیماران"
                  primaryTypographyProps={{ style: { color: "black" } }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": { backgroundColor: "#e0f2fe" },
              }}
            >
              <ListItemIcon sx={{ color: "#0369a1" }}>
                <LocalHospitalIcon />
              </ListItemIcon>
              <ListItemText
                primary="بیمارستان"
                primaryTypographyProps={{ style: { color: "black" } }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List>
          <Link href="./LatestVisits" passHref>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#fee2e2" },
                }}
              >
                <ListItemIcon sx={{ color: "#b91c1c" }}>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText
                  primary="آخرین قرار ملاقات ها"
                  primaryTypographyProps={{ style: { color: "#b91c1c" } }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href="./" passHref>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#fee2e2" },
                }}
              >
                <ListItemIcon sx={{ color: "#b91c1c" }}>
                  <OutputIcon />
                </ListItemIcon>
                <ListItemText
                  primary="خروج"
                  primaryTypographyProps={{ style: { color: "#b91c1c" } }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
