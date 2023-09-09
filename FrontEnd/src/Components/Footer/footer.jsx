import { Box, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        display={"felx"}
        justifyContent={"center"}
        alignItems={"center"}
        variant="h6"
        color={"HighlightText"}
        sx={{ fontSize: 18, textAlign: "center" }}
      >
        Designed and Developed by
        <a href="https://www.google.com/" className="karim-link">
          {" "}
          Karim Yasser{" "}
        </a>
        @2023
      </Typography>
    </Box>
  );
}
export default Footer;
