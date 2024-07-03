import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface FAQuestionProps {
  title: string;
  text: string;
}

const FAQuestion: React.FC<FAQuestionProps> = ({ title, text }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQuestion;
