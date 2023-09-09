import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/Product";
import CircularProgress from "@mui/material/CircularProgress";
import { AnimatePresence, motion } from "framer-motion";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Main() {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyData(newValue);
    }
  };
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const allProductsApi = "products?populate=*";
  const menProductsApi =
    "products?populate=*&filters[productCategory][$eq]=men";
  const womenProductsApi =
    "products?populate=*&filters[productCategory][$eq]=women";
  const [myData, setmyData] = useState(allProductsApi);
  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const [clickedProduct, setClickedProduct] = useState({});

  if (isLoading) {
    return (
      <Box sx={{ p: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Container sx={{ py: 17, textAlign: "center" }}>
        <Typography variant="h6">{error.error}</Typography>
        <Typography variant="h6">Please Try Again Later</Typography>
      </Container>
    );
  }
  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography>Selected Products</Typography>
            <Typography>
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(22,69,96,0.5)!important",
                color: "#e94560",
                bgcolor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="My-Button"
              value={allProductsApi}
              aria-label="left aligned"
            >
              All Products{" "}
            </ToggleButton>
            <ToggleButton
              sx={{ mx: "16px !important", color: theme.palette.text.primary }}
              className="My-Button"
              value={menProductsApi}
              aria-label="centered"
            >
              Men Category{" "}
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="My-Button"
              value={womenProductsApi}
              aria-label="right aligned"
            >
              Women category{" "}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  key={item.id}
                  sx={{
                    maxWidth: 333,
                    mt: 6,
                    ":hover .MuiCardMedia-root": {
                      rotate: "5deg",
                      scale: "1.1",
                      transition: "0.35s",
                    },
                    width: "100%",
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    component="img"
                    height="194"
                    // @ts-ignore
                    image={`${item.attributes.productImg.data[0].attributes.formats.small.url}`}
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      alignContent={"center"}
                      justifyContent={"space-between"}
                    >
                      <Typography variant="h6" component="div">
                        {item.attributes.productTitle}
                      </Typography>
                      <Typography variant="subtitle1">
                        {" "}
                        ${item.attributes.productPrice}
                      </Typography>
                    </Stack>
                    <Typography
                      sx={{ color: theme.palette.text.secondary }}
                      variant="body2"
                      component="div"
                    >
                      {item.attributes.productDescription}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      display: "felx",
                      justifyContent: "space-between",
                      textAlign: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        handleClickOpen();
                        setClickedProduct(item);
                        console.log(item);
                      }}
                      sx={{ textTransform: "capitalize" }}
                      size="large"
                    >
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      add to cart
                    </Button>
                    <Rating
                      precision={0.5}
                      name="read-only"
                      value={item.attributes.productRating}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            //   position: "relative",
            ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              top: 0,
              right: 15,
              position: "absolute",
              width: 25,
              height: 25,
              ":hover": { rotate: "180deg", transition: "0.3s", color: "red" },
            }}
          >
            <Close />
          </IconButton>
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
}
export default Main;
