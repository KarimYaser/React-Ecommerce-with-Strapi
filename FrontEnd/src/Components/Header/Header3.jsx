import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricBikeOutlinedIcon from "@mui/icons-material/ElectricBikeOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Drawer from "@mui/material/Drawer";
import { Close } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import Links from "./Links";

function Header3() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            color: theme.palette.text.primary,
            width: "222px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
          }}
        >
          <WindowIcon />
          <Typography
            sx={{
              padding: "0",
              color: "#fff",
              textTransform: "capitalize",
              mx: 1,
              // @ts-ignore
              color: theme.palette.text.primary,
            }}
          >
            Categories
          </Typography>
          <Box flexGrow={1} />
          <ChevronRightOutlinedIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: "220px",
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LaptopChromebookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      {useMediaQuery("(min-width:1000px)") && (
        <>
          <Links title={"Home"} />
          <Links title={"Mega Menu"} />
          <Links title={"Full Screen Menu"} />
          <Links title={"Pages"} />
          <Links title={"User Account"} />
          <Links title={"Vendor Account"} />
        </>
      )}

      {useMediaQuery("(max-width:1000px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{
          ".css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
            width: "100%",
            height: "100%",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
          },
        }}
      >
        <Box
          sx={{
            width: "444px",
            mx: "auto",
            mt: 6,
            position: "relative",
          }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              display: "block",
              marginBottom: "200px",
              paddingBottom: "200px",
              // @ts-ignore
              right: 8,
            }}
          >
            <Close
              sx={{
                ":hover": {
                  rotate: "180deg",
                  transition: "0.3s",
                  color: "red",
                },
              }}
            />
          </IconButton>
          {[
            { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Home2", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Home3", subLink: ["Link1", "Link2", "Link3"] },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial", margin: "30px 0px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ p: 0, m: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ p: 0, m: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
export default Header3;
