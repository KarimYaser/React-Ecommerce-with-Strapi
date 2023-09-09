import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import hero1 from "../../imgs/banner-17.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";
import IconSection from "./IconSection";

function Hero() {
  const theme = useTheme();
  return (
    <>
      <Container sx={{ bgcolor: theme.palette.bg.main }}>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "Center",
            justifyContent: "space-between",
          }}
        >
          <Swiper
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide
              className="parent-slider"
              sx={{ position: "relative" }}
            >
              <img src="src\imgs\banner-15.jpg" />
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 15,
                  transform: "translateY(-50%)",
                  textAlign: "left",
                  //   display: "block",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#283445",
                    fontSize: "20px",
                  }}
                >
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#283445",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  MEN
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#283445",
                    fontSize: "25px",
                  }}
                >
                  SALE UP TO <span className="span-men">30% OFF</span>
                </Typography>
                <Link
                  sx={{
                    color: "#283445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",
                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                >
                  GET FREE SHIPPING OM REDERS OVER 99$
                </Link>
                <Button
                  sx={{
                    padding: "10px 2px",
                    bgcolor: "black",
                    mt: 3,
                    width: "150px",
                    color: "#fff",
                    "&:hover": { bgcolor: "#555" },
                    position: "absolute",
                    top: "91%",
                  }}
                >
                  <a>SHOP NOW</a>
                </Button>
              </Stack>
            </SwiperSlide>
            <SwiperSlide
              className="parent-slider"
              sx={{ position: "relative" }}
            >
              <img src="src\imgs\banner-25.jpg" />
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 15,
                  transform: "translateY(-50%)",
                  textAlign: "left",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: "#283445",
                    fontSize: "20px",
                  }}
                >
                  LIFESTYLE COLLECTION
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#283445",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  WOMEN
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#283445",
                    fontSize: "25px",
                  }}
                >
                  SALE UP TO <span className="span-men">30% OFF</span>
                </Typography>
                <Link
                  sx={{
                    color: "#283445",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",
                    "&:hover": {
                      color: "#D23F57",
                    },
                  }}
                >
                  GET FREE SHIPPING OM REDERS OVER 99$
                </Link>
                <Button
                  sx={{
                    padding: "10px 2px",
                    bgcolor: "black",
                    mt: 3,
                    width: "150px",
                    color: "#fff",
                    "&:hover": { bgcolor: "#555" },
                    position: "absolute",
                    top: "91%",
                  }}
                >
                  <a>SHOP NOW</a>
                </Button>
              </Stack>
            </SwiperSlide>
          </Swiper>
          {useMediaQuery("(min-width:1000px)") && (
            <>
              <Box sx={{ ml: 3 }}>
                <Box sx={{ position: "relative" }}>
                  <img src="src\imgs\banner-17.jpg" />
                  <Stack
                    className="stack"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 15,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#283445",
                        fontSize: "18px",
                      }}
                    >
                      NEW ARRIVALS
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#283445",
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      SUMMER
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#283445",
                        fontSize: "20px",
                      }}
                    >
                      SALE 20% OFF
                    </Typography>
                    <Link
                      sx={{
                        color: "#283445",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        transition: "0.2s",
                        "&:hover": {
                          color: "#D23F57",
                        },
                      }}
                    >
                      shop now
                      <ArrowForwardIcon />
                    </Link>
                  </Stack>
                </Box>
                <Box sx={{ position: "relative" }}>
                  <img src="src\imgs\banner-16.jpg" />
                  <Stack
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: 15,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#283445",
                        fontSize: "18px",
                      }}
                    >
                      GAMING 4K
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#283445",
                        fontSize: "22px",
                        fontWeight: "bold",
                      }}
                    >
                      DESKTOPS &<br /> LAPTOPS
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#283445",
                        fontSize: "20px",
                      }}
                    >
                      SALE 20% OFF
                    </Typography>
                    <Link
                      sx={{
                        color: "#283445",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        transition: "0.2s",
                        "&:hover": {
                          color: "#D23F57",
                        },
                      }}
                    >
                      shop now
                      <ArrowForwardIcon />
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </>
          )}
        </Box>
        <IconSection />
      </Container>
    </>
  );
}
export default Hero;
