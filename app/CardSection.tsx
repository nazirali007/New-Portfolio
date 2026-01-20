"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Dating App Admin Panel",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Created a web application an adult dating platform facilitating client-provider matchmaking",
    url: "https://github.com/nazirali007/Roses-Web-Panel",
  },
  {
    name: "Bowling Web Application",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Developed a bowling game website featuring live scoring for multiple leagues and teams",
    url: "https://github.com/nazirali007/Bowing-Web-Application",
  },
  {
    name: "Essential Apartment Parking",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Designed and executed a multi-story commercial real estateproject catering to diverse businesses on a rental basis",
    url: "https://github.com/nazirali007/Essential-Apartment-Parking",
  },
  {
    name: "Buy And Sell Web Admin Panel",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Discover great deals on pre-owned items and for sellers to connect with a wide audience of potential buyers",
    url: "https://github.com/nazirali007/Buy-And-Sell-Web-Admin-Panel",
  },
  {
    name: "Social Media",
    technology: "Javascript,ReactJs ,Redux",
    Author: "Nazir Ali Siddiqui",
    description:
      "Our personal social media application offers a private, secure, and user-friendly space to connect with close friends and family .",
    url: "https://github.com/nazirali007/Social-Media-Web-Application",
  },
];

export default function CardSection() {
  //   const navigate = useNavigate();
  const router = useRouter();

  const handleCardClick = (url: string) => {
    // navigate(url);
    router.push(url);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        {projects.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card
              sx={{
                minWidth: {
                  xs: "100%",
                  sm: 250,
                  cursor: "pointer",
                },
                maxWidth: 500,
                borderRadius: "0.6rem",
                position: "relative",
                overflow: "hidden",
                backgroundImage:
                  "url(https://v2-statics.s3.ap-south-1.amazonaws.com/banners/homeBanner/github-new-image.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                opacity: 0.8,
                height: {
                  xs: "auto",
                  sm: "100%",
                },
                transition: "transform 0.3s, box-shadow 0.3s",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 75%, rgba(0,0,0,0.85) 100%)",
                  zIndex: 0,
                },
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                },
              }}
              onClick={() => handleCardClick(item?.url)}
            >
              <CardContent
                sx={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "rgba(0, 0, 0, 0.35)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "0.5rem",
                  m: 2,
                  px: 2.5,
                  py: 2,
                  backdropFilter: "blur(1.5px)",
                }}
              >
                <Typography sx={{ fontSize: "1rem", fontWeight: 600 }} gutterBottom>
                  {item?.name}
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>{item?.Author}</Typography>
                <Typography variant="body2" sx={{ my: 1.5, color: "#f0f0f0" }}>
                  {item?.technology}
                </Typography>
                <Typography variant="body2" component="div" sx={{ color: "#e8e8e8" }}>
                  {item?.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
