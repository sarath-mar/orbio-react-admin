import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./RunAudit.css";
export default function DropDown() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  let content = (
    <ul className="list-items">
      <li>
        <WarningIcon color="warning" />
        <p>The opening balance is wrong as it is a credit balance</p>{" "}
      </li>
      <li>
        <CheckCircleIcon color="secondary" />
        <p>Cash deposit into bank where there is insufficient balance</p>{" "}
      </li>
      <li>
        <WarningIcon color="warning" />
        <p>Cash deposited by owner but cash receipt entry not passed</p>{" "}
      </li>
      <li>
        <WarningIcon color="warning" />
        <p>The opening balance is wrong as it is a credit balance</p>{" "}
      </li>
    </ul>
  );
  const data = [
    { id: 1, text: "Negative Cash Balance", status: "ERROR" },
    { id: 2, text: "Intrest Not Accounted", status: "WARNING" },
    { id: 3, text: "Assest Charged to Revenue", status: "SUCCESS" },
    { id: 4, text: "Suspected Missing Bills", status: "WARNING" },
    { id: 5, text: "Personal Expense Accounted", status: "ERROR" },
    { id: 6, text: "Unusual Expense", status: "ERROR" },
    { id: 7, text: "Unusual Income", status: "ERROR" },
  ];
  const style = {
    successStyle: { backgroundColor: "green" },
    errorStyle: { backgroundColor: "red" },
    warningStyle: { backgroundColor: "yellow" },
  };

  return (
    <div>
      {data.map((x) => (
        <Accordion
          expanded={expanded === `panel${x.id}`}
          onChange={handleChange(`panel${x.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${x.id}bh-content`}
            id={`panel${x.id}bh-header`}
          >
            <Typography sx={{ width: "13%", flexShrink: 0 }}>
              <div
                className="rounded"
                style={
                  x.status === "SUCCESS"
                    ? style.successStyle
                    : x.status === "WARNING"
                    ? style.warningStyle
                    : style.errorStyle
                }
              ></div>
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              {x.text}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography> */}
            {content}
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Personal data
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
