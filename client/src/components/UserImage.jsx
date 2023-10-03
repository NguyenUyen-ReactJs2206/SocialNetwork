import { Box } from "@mui/material";
import React from "react";

export default function UserImage({ image, size = "60px" }) {
  console.log(image);
  const imageLink = `http://localhost:3001/assets/${image}`;
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        src={imageLink}
        alt="user"
      />
    </Box>
  );
}
