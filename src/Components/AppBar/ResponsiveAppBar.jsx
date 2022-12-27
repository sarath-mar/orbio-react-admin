import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";

import MuiAppBar from "@mui/material/AppBar";
import Dashboard from "../Auditing/Dashboard/Dashboard";
import RunAudit from "../Auditing/RunAudit/RunAudit";
// import { Avatar } from '@mui/material';
// import { useTheme } from '@emotion/react';

const drawerWidth = 120;

export default function PermanentDrawerLeft(props) {
  const notificationSvg = (
    <svg
      width="38"
      height="37"
      viewBox="0 0 38 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.075 25.3923C22.4401 28.6417 20.6075 31.597 11.4478 29.2286C5.65458 28.2895 0.879297 27.035 2.11985 21.2977C2.75477 18.0483 7.96044 16.3307 13.747 17.4614C19.5337 18.5921 23.7099 22.1428 23.075 25.3923Z"
        fill="#29368E"
      />
      <path
        d="M22.2878 16.8798C21.0006 28.9733 28.7769 24.9632 13.1611 19.8523C-2.54102 17.6223 3.58104 24.2194 5.93821 13.6852C6.57635 10.4193 11.2756 7.20533 15.472 8.02529C19.6685 8.84526 22.926 13.6139 22.2878 16.8798Z"
        fill="#29368E"
      />
      <path
        d="M14.4079 33.3499C14.2531 34.7541 12.2227 35.6723 10.3786 35.3119C8.53455 34.9516 6.97783 33.4468 7.14557 32.5884C7.264 30.7587 9.23197 31.3823 11.0761 31.7427C12.9201 32.103 14.5756 32.4915 14.4079 33.3499Z"
        fill="#29368E"
      />
      <circle cx="26.4999" cy="11.5" r="11.5" fill="#EF2A2A" />
      <path
        d="M21.6198 15.412V8.596L22.0638 9.616L20.2638 10.468L19.9158 8.644L22.3038 7.48H23.6238V15.412H21.6198ZM20.0838 16V14.2H25.1958V16H20.0838ZM29.8584 16.12C29.1064 16.12 28.4624 15.948 27.9264 15.604C27.3984 15.26 26.9944 14.768 26.7144 14.128C26.4344 13.48 26.2944 12.704 26.2944 11.8C26.2944 10.896 26.4344 10.124 26.7144 9.484C26.9944 8.836 27.3984 8.34 27.9264 7.996C28.4624 7.652 29.1064 7.48 29.8584 7.48C30.6104 7.48 31.2544 7.652 31.7904 7.996C32.3264 8.34 32.7344 8.836 33.0144 9.484C33.2944 10.124 33.4344 10.896 33.4344 11.8C33.4344 12.704 33.2944 13.48 33.0144 14.128C32.7344 14.768 32.3264 15.26 31.7904 15.604C31.2544 15.948 30.6104 16.12 29.8584 16.12ZM29.8584 14.392C30.3784 14.392 30.7784 14.168 31.0584 13.72C31.3464 13.272 31.4904 12.632 31.4904 11.8C31.4904 10.944 31.3464 10.288 31.0584 9.832C30.7784 9.368 30.3784 9.136 29.8584 9.136C29.3384 9.136 28.9344 9.368 28.6464 9.832C28.3664 10.288 28.2264 10.944 28.2264 11.8C28.2264 12.632 28.3664 13.272 28.6464 13.72C28.9344 14.168 29.3384 14.392 29.8584 14.392Z"
        fill="white"
      />
    </svg>
  );
  const maSvg = (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="46" height="46" rx="10" fill="#EBEDF9" />
      <path
        d="M10.494 29V16.4H13.608L18.198 23.87L15.768 23.852L20.412 16.4H23.418V29H19.98V25.634C19.98 24.554 20.004 23.582 20.052 22.718C20.112 21.854 20.208 20.996 20.34 20.144L20.736 21.206L17.514 26.192H16.326L13.176 21.206L13.572 20.144C13.704 20.948 13.794 21.776 13.842 22.628C13.902 23.468 13.932 24.47 13.932 25.634V29H10.494ZM24.6922 29L29.7142 16.4H32.5942L37.5802 29H34.0342L31.8742 23.15C31.7542 22.826 31.6462 22.526 31.5502 22.25C31.4542 21.974 31.3642 21.704 31.2802 21.44C31.1962 21.176 31.1122 20.906 31.0282 20.63C30.9562 20.354 30.8902 20.054 30.8302 19.73L31.4062 19.712C31.3342 20.06 31.2562 20.372 31.1722 20.648C31.1002 20.924 31.0222 21.188 30.9382 21.44C30.8542 21.692 30.7582 21.956 30.6502 22.232C30.5542 22.508 30.4462 22.814 30.3262 23.15L28.1662 29H24.6922ZM27.1402 26.912L28.2022 24.392H34.0342L35.0242 26.912H27.1402Z"
        fill="#212121"
      />
    </svg>
  );
  const backIcon = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#EBEDF9" />
      <path
        d="M17.76 11L11 17.5L17.76 24M11.715 17.5H22.7H25.95"
        stroke="#212121"
        stroke-width="2.275"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const clientIcon = (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="18" fill="#EBEDF9" />
      <path
        d="M13.782 23.14C12.97 23.14 12.242 23.014 11.598 22.762C10.954 22.51 10.4033 22.1553 9.946 21.698C9.498 21.2407 9.15733 20.6993 8.924 20.074C8.69067 19.4487 8.574 18.772 8.574 18.044C8.574 17.3067 8.7 16.63 8.952 16.014C9.21333 15.3887 9.58667 14.8473 10.072 14.39C10.5573 13.9327 11.1267 13.578 11.78 13.326C12.4427 13.074 13.1753 12.948 13.978 12.948C14.5287 12.948 15.0467 13.018 15.532 13.158C16.0267 13.298 16.47 13.4893 16.862 13.732C17.254 13.9747 17.59 14.2453 17.87 14.544L16.218 16.308C16.0127 16.112 15.7933 15.944 15.56 15.804C15.336 15.664 15.0887 15.552 14.818 15.468C14.5567 15.384 14.2627 15.342 13.936 15.342C13.572 15.342 13.236 15.412 12.928 15.552C12.6293 15.6827 12.368 15.8693 12.144 16.112C11.92 16.3453 11.7427 16.63 11.612 16.966C11.4907 17.2927 11.43 17.652 11.43 18.044C11.43 18.4267 11.4953 18.786 11.626 19.122C11.7567 19.4487 11.9387 19.7333 12.172 19.976C12.4053 20.2187 12.6807 20.41 12.998 20.55C13.3247 20.6807 13.6747 20.746 14.048 20.746C14.3093 20.746 14.552 20.704 14.776 20.62C15 20.536 15.1913 20.424 15.35 20.284C15.518 20.1347 15.6487 19.962 15.742 19.766C15.8353 19.5607 15.882 19.3413 15.882 19.108V18.716L16.246 19.304H13.67V17.288H18.402C18.4113 17.3907 18.4207 17.5493 18.43 17.764C18.4487 17.9693 18.458 18.1747 18.458 18.38C18.4673 18.5853 18.472 18.73 18.472 18.814C18.472 19.4393 18.3553 20.018 18.122 20.55C17.8887 21.082 17.562 21.5393 17.142 21.922C16.722 22.3047 16.2273 22.6033 15.658 22.818C15.0887 23.0327 14.4633 23.14 13.782 23.14ZM20.1952 23V13.2H24.5352C25.1792 13.2 25.7532 13.3447 26.2572 13.634C26.7705 13.914 27.1719 14.3013 27.4612 14.796C27.7599 15.2907 27.9092 15.86 27.9092 16.504C27.9092 17.1667 27.7599 17.7593 27.4612 18.282C27.1719 18.7953 26.7705 19.2013 26.2572 19.5C25.7532 19.7987 25.1792 19.948 24.5352 19.948H22.9672V23H20.1952ZM22.9252 17.554H24.0592C24.2552 17.554 24.4279 17.5167 24.5772 17.442C24.7265 17.358 24.8432 17.2413 24.9272 17.092C25.0205 16.9427 25.0672 16.7607 25.0672 16.546C25.0672 16.3313 25.0205 16.154 24.9272 16.014C24.8432 15.874 24.7265 15.7713 24.5772 15.706C24.4279 15.6313 24.2552 15.594 24.0592 15.594H22.9252V17.554Z"
        fill="#212121"
      />
    </svg>
  );

  const dashBoardData = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9"
            y="11"
            width="8.90473"
            height="18"
            rx="3.5"
            fill="white"
          />
          <rect
            x="30.9999"
            y="11"
            width="7.71428"
            height="11"
            rx="3.5"
            transform="rotate(90 30.9999 11)"
            fill="white"
          />
          <rect
            x="20.0001"
            y="20.7714"
            width="11"
            height="8.22857"
            rx="3.5"
            fill="white"
          />
        </svg>
      ),
      text: "Dashboard",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="10" fill="#7481D7" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 11.5C9 9.567 10.567 8 12.5 8H24.4V9.5V12V13.5H25.9H29.5H31V28.7C31 30.633 29.433 32.2 27.5 32.2H12.5C10.567 32.2 9 30.633 9 28.7V11.5ZM27.5 9.5H25.9V12H29.5V11.5C29.5 10.3954 28.6046 9.5 27.5 9.5ZM16.3501 12.4C16.3501 11.9858 16.0143 11.65 15.6001 11.65C15.1859 11.65 14.8501 11.9858 14.8501 12.4V13.85H13.4001C12.9859 13.85 12.6501 14.1858 12.6501 14.6C12.6501 15.0142 12.9859 15.35 13.4001 15.35H14.8501V16.8C14.8501 17.2142 15.1859 17.55 15.6001 17.55C16.0143 17.55 16.3501 17.2142 16.3501 16.8V15.35H17.8001C18.2143 15.35 18.5501 15.0142 18.5501 14.6C18.5501 14.1858 18.2143 13.85 17.8001 13.85H16.3501V12.4ZM17.686 23.4747C17.9789 23.1818 17.9789 22.7069 17.686 22.414C17.3931 22.1211 16.9182 22.1211 16.6253 22.414L15.5999 23.4394L14.5745 22.414C14.2816 22.1211 13.8067 22.1211 13.5138 22.414C13.2209 22.7069 13.2209 23.1818 13.5138 23.4747L14.5392 24.5001L13.514 25.5253C13.2211 25.8182 13.2211 26.2931 13.514 26.586C13.8069 26.8789 14.2818 26.8789 14.5747 26.586L15.5999 25.5608L16.6251 26.586C16.918 26.8789 17.3929 26.8789 17.6858 26.586C17.9787 26.2931 17.9787 25.8182 17.6858 25.5253L16.6606 24.5001L17.686 23.4747ZM26.2972 23.286C26.5901 22.9931 26.5901 22.5182 26.2972 22.2253C26.0043 21.9324 25.5294 21.9324 25.2365 22.2253L22.1252 25.3366C21.8324 25.6295 21.8324 26.1043 22.1252 26.3972C22.4181 26.6901 22.893 26.6901 23.1859 26.3972L26.2972 23.286ZM23.3 22.3C23.3 22.9075 22.8075 23.4 22.2 23.4C21.5925 23.4 21.1 22.9075 21.1 22.3C21.1 21.6925 21.5925 21.2 22.2 21.2C22.8075 21.2 23.3 21.6925 23.3 22.3ZM26.5999 27.8C27.2074 27.8 27.6999 27.3075 27.6999 26.7C27.6999 26.0925 27.2074 25.6 26.5999 25.6C25.9924 25.6 25.4999 26.0925 25.4999 26.7C25.4999 27.3075 25.9924 27.8 26.5999 27.8Z"
            fill="white"
          />
        </svg>
      ),
      text: "Auditing",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2593 34.2049V25.9259C12.2593 25.3736 12.707 24.9259 13.2593 24.9259H26.6329C27.6399 24.9259 28.0154 26.2462 27.1593 26.7762L13.7856 35.0551C13.1194 35.4675 12.2593 34.9884 12.2593 34.2049Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5 13C9.567 13 8 14.567 8 16.5V28.2407C8 30.1737 9.567 31.7407 11.5 31.7407H27.5C29.433 31.7407 31 30.1737 31 28.2407V16.5C31 14.567 29.433 13 27.5 13H11.5ZM13.537 24.0741C14.7132 24.0741 15.6667 23.1206 15.6667 21.9444C15.6667 20.7683 14.7132 19.8148 13.537 19.8148C12.3609 19.8148 11.4074 20.7683 11.4074 21.9444C11.4074 23.1206 12.3609 24.0741 13.537 24.0741ZM21.6296 21.9444C21.6296 23.1206 20.6762 24.0741 19.5 24.0741C18.3238 24.0741 17.3704 23.1206 17.3704 21.9444C17.3704 20.7683 18.3238 19.8148 19.5 19.8148C20.6762 19.8148 21.6296 20.7683 21.6296 21.9444ZM25.463 24.0741C26.6391 24.0741 27.5926 23.1206 27.5926 21.9444C27.5926 20.7683 26.6391 19.8148 25.463 19.8148C24.2868 19.8148 23.3333 20.7683 23.3333 21.9444C23.3333 23.1206 24.2868 24.0741 25.463 24.0741Z"
            fill="white"
          />
        </svg>
      ),
      text: "Messages",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 32L31 32"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.5 9C11.567 9 10 10.567 10 12.5V31H29V12.5C29 10.567 27.433 9 25.5 9H13.5ZM22.238 12.381C21.6858 12.381 21.238 12.8287 21.238 13.381C21.238 13.9332 21.6858 14.381 22.238 14.381H24.4285C24.9808 14.381 25.4285 13.9332 25.4285 13.381C25.4285 12.8287 24.9808 12.381 24.4285 12.381H22.238ZM21.238 17.7619C21.238 17.2096 21.6858 16.7619 22.238 16.7619H24.4285C24.9808 16.7619 25.4285 17.2096 25.4285 17.7619C25.4285 18.3142 24.9808 18.7619 24.4285 18.7619H22.238C21.6858 18.7619 21.238 18.3142 21.238 17.7619ZM22.238 21.1429C21.6858 21.1429 21.238 21.5906 21.238 22.1429C21.238 22.6951 21.6858 23.1429 22.238 23.1429H24.4285C24.9808 23.1429 25.4285 22.6951 25.4285 22.1429C25.4285 21.5906 24.9808 21.1429 24.4285 21.1429H22.238ZM13.5715 13.381C13.5715 12.8287 14.0192 12.381 14.5715 12.381H16.762C17.3143 12.381 17.762 12.8287 17.762 13.381C17.762 13.9332 17.3143 14.381 16.762 14.381H14.5715C14.0192 14.381 13.5715 13.9332 13.5715 13.381ZM14.5715 16.7619C14.0192 16.7619 13.5715 17.2096 13.5715 17.7619C13.5715 18.3142 14.0192 18.7619 14.5715 18.7619H16.762C17.3143 18.7619 17.762 18.3142 17.762 17.7619C17.762 17.2096 17.3143 16.7619 16.762 16.7619H14.5715ZM13.5715 22.1429C13.5715 21.5906 14.0192 21.1429 14.5715 21.1429H16.762C17.3143 21.1429 17.762 21.5906 17.762 22.1429C17.762 22.6951 17.3143 23.1429 16.762 23.1429H14.5715C14.0192 23.1429 13.5715 22.6951 13.5715 22.1429ZM18.8572 26.5238C18.3049 26.5238 17.8572 26.9715 17.8572 27.5238V30.9048H21.1429V27.5238C21.1429 26.9715 20.6952 26.5238 20.1429 26.5238H18.8572Z"
            fill="white"
          />
          <path
            d="M24.5 10V6"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      text: "Your Clients",
    },
  ];
  const LowerData = [
    {
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3094 11.9286C17.3197 10.4927 14.5416 11.9226 14.5538 14.3762L14.5574 15.1013C14.5642 16.4528 13.6664 17.6419 12.3648 18.0056L11.6665 18.2007C9.30333 18.861 8.68911 21.9245 10.615 23.4448L11.1842 23.8941C12.245 24.7314 12.6149 26.1747 12.0877 27.4191L11.8049 28.0868C10.8478 30.346 12.8599 32.7363 15.2493 32.1784L15.9555 32.0136C17.2715 31.7063 18.6306 32.3169 19.2748 33.505L19.6204 34.1424C20.7901 36.2993 23.9134 36.2165 24.967 34.0006L25.2784 33.3457C25.8587 32.1252 27.1835 31.4433 28.514 31.6804L29.2279 31.8076C31.6435 32.238 33.5261 29.7444 32.4505 27.539L32.1326 26.8873C31.5402 25.6726 31.8331 24.2117 32.848 23.3193L33.3925 22.8405C35.2351 21.2202 34.4593 18.1936 32.0645 17.6595L31.3568 17.5017C30.0377 17.2075 29.0782 16.0677 29.0133 14.7178L28.9784 13.9935C28.8605 11.5427 26.0105 10.2622 24.0998 11.8015L23.5351 12.2564C22.4827 13.1043 20.9933 13.1438 19.8974 12.3529L19.3094 11.9286ZM22 27C24.2091 27 26 25.2091 26 23C26 20.7909 24.2091 19 22 19C19.7908 19 18 20.7909 18 23C18 25.2091 19.7908 27 22 27Z"
            fill="white"
          />
        </svg>
      ),
      text: "Settings",
    },
    {
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="15.9678"
            cy="20.5833"
            rx="4.6129"
            ry="4.58333"
            fill="white"
          />
          <ellipse
            cx="28.5484"
            cy="18.9167"
            rx="2.93548"
            ry="2.91667"
            fill="white"
          />
          <path
            d="M23.9355 33.9167C23.9355 32.9865 23.7294 32.0654 23.329 31.206C22.9286 30.3466 22.3417 29.5658 21.6018 28.908C20.8619 28.2503 19.9836 27.7285 19.0169 27.3725C18.0502 27.0166 17.0141 26.8333 15.9677 26.8333C14.9214 26.8333 13.8853 27.0166 12.9186 27.3725C11.9519 27.7285 11.0736 28.2503 10.3337 28.908C9.59382 29.5658 9.00692 30.3466 8.60651 31.206C8.20609 32.0654 8 32.9865 8 33.9167L15.9677 33.9167H23.9355Z"
            fill="white"
          />
          <path
            d="M34 28.0833C34 27.4814 33.859 26.8854 33.585 26.3294C33.3111 25.7733 32.9095 25.268 32.4033 24.8424C31.8971 24.4168 31.2961 24.0792 30.6347 23.8489C29.9732 23.6186 29.2643 23.5 28.5484 23.5C27.8325 23.5 27.1236 23.6186 26.4622 23.8489C25.8008 24.0792 25.1998 24.4168 24.6935 24.8424C24.1873 25.268 23.7858 25.7733 23.5118 26.3294C23.2378 26.8854 23.0968 27.4814 23.0968 28.0833L28.5484 28.0833H34Z"
            fill="white"
          />
        </svg>
      ),
      text: "Users",
    },
  ];
  const [open, setOpen] = React.useState(false);
  const [showAuditing, setShowAuditing] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ bgcolor: "primary.white" }}
        open={open}
        // sx={{ bgcolor: 'primary.white', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <div > */}
          <div style={{ display: "flex" }}>
            {
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon color="primary" />
              </IconButton>
            }
            <span onClick={()=>{setShowAuditing(x=>!x)}}>{backIcon}</span>
            
            <Typography
              sx={{ ml: 3 }}
              color={"primary.textColor"}
              variant="h6"
              noWrap
              component="div"
            >
              Audit Findings
            </Typography>
          </div>
          <div>
            <span style={{ marginRight: "20px" }}>{notificationSvg}</span>
            <span>{clientIcon}</span>
          </div>
          {/* </div> */}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "primary.main",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        {/* <Toolbar /> */}
        <IconButton
          style={{ marginLeft: "auto", color: "white" }}
          onClick={handleDrawerClose}
        >
          {<ChevronLeftIcon />}
        </IconButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* <div style={{ marginTop: "15px", marginLeft: "auto", marginRight: "auto", marginBottom: "60px" }}> */}
          {/* <Avatar sx={{ bgcolor: "white", color: "black", mt: 2 }} variant="rounded">
                        MA
                    </Avatar> */}
          <div style={{ marginTop: "15px", marginBottom: "-40px" }}>
            {maSvg}
          </div>
          {/* </div> */}
          {/* <div> */}

          <List>
            {dashBoardData.map((data, index) => (
              <ListItem key={data} disablePadding sx={{ mb: 2 }}>
                <ListItemButton
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {data.icon}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "white",
                      textAlign: "center",
                      margin: "0px",
                    }}
                  >
                    {data.text}
                  </p>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <List>
            {LowerData.map((data, index) => (
              <ListItem key={data} disablePadding sx={{ mb: 2 }}>
                <ListItemButton
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  {data.icon}
                  <p
                    style={{
                      fontSize: "14px",
                      color: "white",
                      textAlign: "center",
                      margin: "0px",
                    }}
                  >
                    {data.text}
                  </p>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* </div> */}
        </div>
      </Drawer>
      <Main open={open}>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, pt: 4 }}
        >
          {showAuditing ?  <RunAudit/> : <Dashboard showAudit={()=>{setShowAuditing(true)}} /> } 
          {/* {props.children} */}
        </Box>
      </Main>
    </Box>
  );
}
