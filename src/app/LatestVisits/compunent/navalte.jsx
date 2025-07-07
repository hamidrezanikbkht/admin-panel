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
import ListItem from "@mui/material/ListItem";
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
import {
  Pie,
  PieChart,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import Link from "next/link";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";

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
    [theme.breakpoints.up("md")]: {
      marginRight: open ? 0 : -drawerWidth,
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      padding: theme.spacing(2),
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
  [theme.breakpoints.up("md")]: {
    width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
    marginRight: open ? drawerWidth : 0,
  },
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

const COLORS = ["#ef4444", "#8b5cf6", "#3b82f6"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
  const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={12}
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-md text-right">
        <p className="font-bold">{payload[0].payload.name}</p>
        <p className="text-sm">{payload[0].value} ویزیت</p>
        <p className="text-xs text-gray-500">
          {((payload[0].payload.uv / (50 + 590 + 868)) * 100).toFixed(1)}% از کل
        </p>
      </div>
    );
  }
  return null;
};

const visitData = [
  { name: "۱ فروردین", "ویزیت عمومی": 20, "ویزیت آنلاین": 15 },
  { name: "۵ فروردین", "ویزیت عمومی": 25, "ویزیت آنلاین": 18 },
  { name: "۱۰ فروردین", "ویزیت عمومی": 30, "ویزیت آنلاین": 22 },
  { name: "۱۵ فروردین", "ویزیت عمومی": 28, "ویزیت آنلاین": 25 },
  { name: "۲۰ فروردین", "ویزیت عمومی": 35, "ویزیت آنلاین": 30 },
  { name: "۲۵ فروردین", "ویزیت عمومی": 40, "ویزیت آنلاین": 35 },
  { name: "۳۰ فروردین", "ویزیت عمومی": 45, "ویزیت آنلاین": 40 },
];

const StatCard = ({ title, value, change, isPositive, icon }) => (
  <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm  border-gray-100 flex flex-col items-center transition-all hover:shadow-md">
    <div className="text-indigo-500 mb-1 sm:mb-2">{icon}</div>
    <h3 className="text-gray-600 text-xs sm:text-sm font-medium">{title}</h3>
    <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">{value}</p>
    <p
      className={`text-xs sm:text-sm mt-1 flex items-center ${
        isPositive ? "text-green-500" : "text-red-500"
      }`}
    >
      {change}
      {isPositive ? (
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      ) : (
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </p>
  </div>
);

const MedicalIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 14l-7 7m0 0l-7-7m7 7V3"
    />
  </svg>
);

const OnlineIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15l8-8m0 0l-8-8m8 8H4"
    />
  </svg>
);

const EmergencyIcon = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export default function Navalte() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const dark = () => {
    console.log("Dark mode toggle");
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
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <span style={{ margin: "0 5px" }}>
              <SettingsIcon fontSize={isSmallScreen ? "small" : "medium"} />
            </span>

            <span>
              <Pro size={isSmallScreen ? "small" : "medium"} />
            </span>
            <span
              style={{
                padding: "0 5px",
                position: "absolute",
                right: isSmallScreen ? "15px" : "30px",
              }}
            >
              <Input size={isSmallScreen ? "small" : "medium"} />
            </span>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
            size={isSmallScreen ? "small" : "medium"}
          >
            <MenuIcon fontSize={isSmallScreen ? "small" : "medium"} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <div
          className="
            w-full
            max-w-4xl
            mx-auto
            flex
            justify-center
            items-center
            p-4 sm:p-6
            flex-col
            gap-4 sm:gap-6
            bg-gradient-to-br from-white via-indigo-50 to-blue-100
            rounded-xl sm:rounded-3xl
            shadow-[0_4px_20px_rgba(0,0,0,0.1)]
             border-indigo-200
            overflow-hidden
          "
        >
          <h2 className="text-xl text-indigo-800 sm:text-2xl font-bold  text-center">
            داشبورد آماری ویزیت‌ها
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <StatCard
              title="ویزیت امروز"
              value="124"
              change="+12%"
              isPositive={true}
              icon={<MedicalIcon />}
            />
            <StatCard
              title="ویزیت آنلاین"
              value="86"
              change="+23%"
              isPositive={true}
              icon={<OnlineIcon />}
            />
            <StatCard
              title="ویزیت اورژانسی"
              value="15"
              change="-5%"
              isPositive={false}
              icon={<EmergencyIcon />}
            />
          </div>

          <div className="w-full">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 text-center">
              توزیع انواع ویزیت‌ها
            </h3>
            <div className="flex justify-center">
              <div
                className="w-full"
                style={{ maxWidth: isSmallScreen ? "100%" : "350px" }}
              >
                <ResponsiveContainer
                  width="100%"
                  height={isSmallScreen ? 250 : 350}
                >
                  <PieChart>
                    <Pie
                      data={[
                        { name: "ویزیت اورژانسی", uv: 50, fill: "#ef4444" },
                        { name: "ویزیت آنلاین", uv: 590, fill: "#8b5cf6" },
                        { name: "ویزیت عمومی", uv: 868, fill: "#3b82f6" },
                      ]}
                      dataKey="uv"
                      cx="50%"
                      cy="50%"
                      innerRadius={isSmallScreen ? 40 : 60}
                      outerRadius={isSmallScreen ? 80 : 120}
                      paddingAngle={5}
                      label={renderCustomizedLabel}
                      labelLine={false}
                      animationBegin={0}
                      animationDuration={1000}
                      animationEasing="ease-out"
                    >
                      {[
                        { name: "ویزیت اورژانسی", uv: 50 },
                        { name: "ویزیت آنلاین", uv: 590 },
                        { name: "ویزیت عمومی", uv: 868 },
                      ].map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      content={<CustomTooltip />}
                      wrapperStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                        padding: "8px 12px",
                        direction: "rtl",
                      }}
                    />
                    <Legend
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="center"
                      wrapperStyle={{ paddingTop: "10px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="w-full mt-4 sm:mt-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4 text-center">
              روند ویزیت‌ها در یک ماه اخیر
            </h3>
            <div
              className="w-full"
              style={{ height: isSmallScreen ? "200px" : "300px" }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={visitData}
                  margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                  <XAxis
                    dataKey="name"
                    tick={{
                      fill: "#6b7280",
                      fontSize: isSmallScreen ? 10 : 12,
                    }}
                    tickMargin={5}
                  />
                  <YAxis
                    tick={{
                      fill: "#6b7280",
                      fontSize: isSmallScreen ? 10 : 12,
                    }}
                    tickMargin={5}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      direction: "rtl",
                      fontSize: isSmallScreen ? "12px" : "14px",
                    }}
                  />
                  <Legend
                    layout="horizontal"
                    verticalAlign="top"
                    align="center"
                    wrapperStyle={{
                      paddingBottom: "10px",
                      fontSize: isSmallScreen ? "12px" : "14px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ویزیت عمومی"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: isSmallScreen ? 2 : 4 }}
                    activeDot={{ r: isSmallScreen ? 4 : 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="ویزیت آنلاین"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ r: isSmallScreen ? 2 : 4 }}
                    activeDot={{ r: isSmallScreen ? 4 : 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </Main>

      <Drawer
        sx={{
          width: isSmallScreen ? "60%" : drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isSmallScreen ? "50%" : drawerWidth,
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
          <IconButton
            onClick={handleDrawerClose}
            size={isSmallScreen ? "small" : "medium"}
          >
            <ClearIcon fontSize={isSmallScreen ? "small" : "medium"} />
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List >
          <Link href={"./vorood"}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  
                  "&:hover": { backgroundColor: "#e3f2fd" },
                  padding: isSmallScreen ? "8px 16px" : "12px 24px",
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#1976d2",
                    minWidth: "36px",
                   
                  }}
                >
                  <HomeIcon fontSize={isSmallScreen ? "small" : "medium"} />
                </ListItemIcon>
                <ListItemText
                  primary={"صحفه اصلی"}
                  primaryTypographyProps={{
                    fontSize: isSmallScreen ? "14px" : "16px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link href={"./list"}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  
                  px: { xs: "12px", sm: "16px", md: "25px" }, // ریسپانسیو: موبایل ← تبلت ← دسکتاپ
                  "&:hover": { backgroundColor: "#e3f2fd" },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#1976d2",
                    minWidth: "36px",
                    
                  }}
                >
                  <AssignmentIcon
                    fontSize={isSmallScreen ? "small" : "medium"}
                  />
                </ListItemIcon>
                <ListItemText primary={"لیست بیماران"} />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": { backgroundColor: "#e3f2fd" },
                padding: isSmallScreen ? "8px 16px" : "12px 24px",
              }}
            >
              <ListItemIcon sx={{ color: "#1976d2", minWidth: "36px" }}>
                <LocalHospitalIcon
                  fontSize={isSmallScreen ? "small" : "medium"}
                />
              </ListItemIcon>
              <ListItemText
                primary={"بیمارستان "}
                primaryTypographyProps={{
                  fontSize: isSmallScreen ? "14px" : "16px",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        <List>
          <Link href={"./LatestVisits"}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#fce4ec" },
                  padding: isSmallScreen ? "8px 16px" : "12px 24px",
                }}
              >
                <ListItemIcon sx={{ color: "#d81b60", minWidth: "36px" }}>
                  <PeopleIcon fontSize={isSmallScreen ? "small" : "medium"} />
                </ListItemIcon>
                <ListItemText
                  primary="آخرین قرار ملاقات ها"
                  primaryTypographyProps={{
                    fontSize: isSmallScreen ? "14px" : "16px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"./"}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": { backgroundColor: "#fce4ec" },
                  padding: isSmallScreen ? "8px 16px" : "12px 24px",
                }}
              >
                <ListItemIcon sx={{ color: "#d81b60", minWidth: "36px" }}>
                  <OutputIcon fontSize={isSmallScreen ? "small" : "medium"} />
                </ListItemIcon>
                <ListItemText
                  primary="خروج"
                  primaryTypographyProps={{
                    fontSize: isSmallScreen ? "14px" : "16px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
