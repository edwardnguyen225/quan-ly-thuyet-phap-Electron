import React from "react";
import PropTypes from "prop-types";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Props extends LinearProgressProps {
  value: number;
}

const LinearProgressWithLabel = (props: Props) => {
  const valueText = `${Math.round(props.value)}%`;

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {valueText}
        </Typography>
      </Box>
    </Box>
  );
};

export default LinearProgressWithLabel;
