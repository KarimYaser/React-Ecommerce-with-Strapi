import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";

function IconSection() {
  const theme = useTheme();
  return (
    <Container sx={{ bgcolor: theme.palette.bg.secondary, mt: 5 }}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        direction={"row"}
        alignItems={"center"}
        sx={{
          flexWrap: "wrap",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <MyBox icon={<ElectricBoltIcon />} /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: useMediaQuery("(min-width:600px)")
              ? "center"
              : "left",
            alignItems: "center",
          }}
        >
          <ElectricBoltIcon sx={{ mr: 2 }} />
          <Box sx={{ pl: "3px" }}>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "18px" }}
            >
              Fast Delivery
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 300,
                color: theme.palette.text.secondary,
                // color: "#ccc",
              }}
            >
              Start from $10
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: useMediaQuery("(min-width:600px)")
              ? "center"
              : "left",
            alignItems: "center",
          }}
        >
          <CreditScoreOutlinedIcon sx={{ mr: 2 }} />
          <Box sx={{ ml: "10px" }}>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "18px" }}
            >
              Money Guarantee
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 300,
                color: theme.palette.text.secondary,
              }}
            >
              7 Days Back
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: useMediaQuery("(min-width:600px)")
              ? "center"
              : "left",
            alignItems: "center",
          }}
        >
          <WorkspacePremiumOutlinedIcon sx={{ mr: 2 }} />
          <Box sx={{ pl: "3px" }}>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "18px" }}
            >
              365 Days
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 300,
                color: theme.palette.text.secondary,
              }}
            >
              For free return
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: useMediaQuery("(min-width:600px)")
              ? "center"
              : "left",
            alignItems: "center",
          }}
        >
          <AccessAlarmOutlinedIcon sx={{ mr: 2 }} />
          <Box sx={{ pl: "3px" }}>
            <Typography
              sx={{ color: theme.palette.text.primary, fontSize: "18px" }}
            >
              Payment
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 300,
                color: theme.palette.text.secondary,
              }}
            >
              Secure system
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
export default IconSection;

// function MyBox(icon) {
//   return (
//     <>
//       <Box>{icon}</Box>
//     </>
//   );
// }
