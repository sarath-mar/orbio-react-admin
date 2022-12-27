import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import moment from "moment/moment";
import { Button } from "@mui/material";
import Assests from "./Assests";
import TopExpenses from "./TopExpenses";
import Revenue from "./Revenue";
import TopData from "./TopData";
function Dashboard() {
  const runAuditSvg = (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_7_714)">
        <circle cx="28" cy="28" r="23" fill="#EBEDF9" />
        <path
          d="M34.5 25.4019C36.5 26.5566 36.5 29.4434 34.5 30.5981L27 34.9282C25 36.0829 22.5 34.6395 22.5 32.3301L22.5 23.6699C22.5 21.3605 25 19.9171 27 21.0718L34.5 25.4019Z"
          fill="#212121"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_7_714"
          x="0"
          y="0"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7_714"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7_714"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
  return (
    <Box sx={{ flexGrow: 1, m: 1, pt: 6 }}>
      <Grid
        container
        spacing={1}
        justifyContent="space-between"
        alignItems={{ sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Grid>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <h4>Star Technologies, Mumbai</h4>
              <p style={{ fontSize: "14px", marginTop: "-10px" }}>
                {moment("2022-4-1").format("DD-MMM-YYYY")} To{" "}
                {moment().format("DD-MMM-YYYY")}
              </p>
            </div>
            <div
              style={{
                marginLeft: "10px",
                marginRight: "10px",
                height: "60px",
                width: "3px",
                backgroundColor: "black",
              }}
            ></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ marginRight: "10px" }}>Run Audit</h4>
              {runAuditSvg}
            </div>
          </div>
        </Grid>
        <Grid xsOffset={"auto"} smOffset={"auto"}>
          <Button
            sx={{
              "&:hover": { bgcolor: "primary.main", color: "primary.white" },
              bgcolor: "primary.white",
              color: "primary.main",
              fontWeight: "700",
            }}
            variant="outlined"
            size="large"
          >
            Audit Manually
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid xs={12} md={7}>
          <Assests />
          <TopExpenses />
        </Grid>
        <Grid xs={12} md={5}>
          <Revenue />
        </Grid>
        <Grid xs={12} md={6}>
          <TopData heading={"Top Debitors"} />
        </Grid>
        <Grid xs={12} md={6}>
        <TopData heading={"Top Creditors"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
