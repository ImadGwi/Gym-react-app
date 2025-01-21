import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const NavBar = () => {
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{
          gap: { sm: "122px", xs: "40px" }, //sm:small device /// x:extra small device
          mt: { sm: "32px", xs: "20px" },
        }}
        px={"20px"}
      >
        <Link>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", margin: "0  20px" }}
          />
        </Link>
      </Stack>

      <Stack
        direction={"row"}
        gap={"40px"}
        fontSize={"24px"}
        alignItems={"flex-end"}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #ff6655",
          }}
        >
          {" "}
          Home{" "}
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "3A1212" }}
        >
          Execrcise
        </a>
      </Stack>
    </div>
  );
};

export default NavBar;
