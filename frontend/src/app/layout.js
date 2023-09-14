"use client";
import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeIcon from "@mui/icons-material/Home";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { ListItemIcon } from "@mui/material";
import "./globals.css";
const DRAWER_WIDTH = 240;

const LINKS = [
  { text: "Início", href: "/", icon: HomeIcon },
  { text: "Exercício 01", href: "/exercise-1", icon: ChecklistIcon },
  { text: "Exercício 02", href: "/exercise-2", icon: ChecklistIcon },
  { text: "Exercício 03", href: "/exercise-3", icon: ChecklistIcon },
  { text: "Exercício 04", href: "/exercise-4", icon: ChecklistIcon },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ToastContainer />
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar
              className="bg-black"
              style={{
                backgroundColor: "black",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                className="text-center"
                variant="h5"
                noWrap
                component="div"
              >
                Bem vindo
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: DRAWER_WIDTH,
                boxSizing: "border-box",
                top: ["48px", "56px", "64px"],
                height: "auto",
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem
                  className="hover:bg-gray-300"
                  key={href}
                  disablePadding
                >
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: "auto" }} />
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              ml: `${DRAWER_WIDTH}px`,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
