import { Dashboard, ExpandMore } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
// import './Links.css'

function Links({ title }) {
  return (
    <Box
      className="Links"
      sx={{
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .Show-when-hover": { display: "block" },
        ":hover ": { cursor: "pointer" },
      }}
    >
      <Typography>{title}</Typography>

      <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
      <Box
        className="Show-when-hover"
        sx={{
          //   border: "1px solid red",
          position: "absolute",
          top: "100%",
          left: "50%",
          width: "170px",
          transform: "translateX(-50%)",
          display: "none",
        }}
      >
        <Paper className="" sx={{ mt: 3 }}>
          <nav>
            <List>
              {/* {["Dashboard", "Products", "Orders", "Profile"].map((item) => {
                return (
                  <ListItem disablePadding key={item}>
                    <ListItemButton>
                      <ListItemText
                        sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                        primary={item}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })} */}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>
              <Box
                sx={{
                  position: "relative",
                  //   border: "1px solid red",
                  ":hover .Show-when": { display: "block" },
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText
                      sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                      primary="Products"
                    />
                    <KeyboardArrowRightOutlinedIcon />
                  </ListItemButton>
                </ListItem>
                <Box
                  className="Show-when"
                  sx={{
                    // border: "1px solid red",
                    position: "absolute",
                    top: "0%",
                    left: "150%",
                    width: "170px",
                    transform: "translateX(-50%)",
                    display: "none",
                  }}
                >
                  <Paper>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                          primary="Add Product"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText
                          sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                          primary="Edit Product"
                        />
                      </ListItemButton>
                    </ListItem>
                  </Paper>
                </Box>
              </Box>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "15px" } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
export default Links;
