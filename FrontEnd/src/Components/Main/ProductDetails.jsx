/* eslint-disable react/no-unescaped-entities */
import { Stack, Box, Typography, Button } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ProductDetails(clickedProduct) {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  const [selectedImg, setSelectedImg] = useState(0);
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2.5}
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            width={300}
            height={"100%"}
            src={
              clickedProduct.clickedProduct.attributes.productImg.data[
                selectedImg
              ].attributes.url
            }
            alt=""
          />
        </Box>
        <Box sx={{ textAlign: { xs: "center", sm: "left" }, width: "100%" }}>
          <Typography variant="h5">
            {clickedProduct.clickedProduct.attributes.productTitle}
          </Typography>
          <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
            ${clickedProduct.clickedProduct.attributes.productPrice}
          </Typography>
          <Typography>
            {clickedProduct.clickedProduct.attributes.productDescription}
          </Typography>
          <Stack
            direction={"row"}
            gap={1}
            my={2}
            sx={{ justifyContent: { xs: "center", sm: "left" } }}
          >
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              sx={{
                ".Mui-selected": {
                  border: "1px solid royable !important",
                  borderRadius: "5px !important",
                  opacity: 1,
                  bgcolor: "initial",
                },
                float: "left",
              }}
            >
              {clickedProduct.clickedProduct.attributes.productImg.data.map(
                (item, index) => {
                  return (
                    <>
                      <ToggleButton
                        key={item.id}
                        value={selectedImg}
                        aria-label="left aligned"
                        sx={{
                          width: 90,
                          mx: 1,
                          p: 0,
                          opacity: 1,
                        }}
                        onClick={() => {
                          setSelectedImg(index);
                        }}
                      >
                        <img
                          style={{ borderRadius: 3 }}
                          height={"100%"}
                          width={"100%"}
                          src={item.attributes.url}
                          alt=""
                        />
                      </ToggleButton>
                    </>
                  );
                }
              )}
            </ToggleButtonGroup>
          </Stack>
          <Button
            sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
            size="large"
          >
            <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
            Buy Now
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default ProductDetails;
