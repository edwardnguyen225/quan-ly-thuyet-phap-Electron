import React, { useState } from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LinearProgressWithLabel from "../../shared/LinearProgressWithLabel";

const CopyThuyetPhap = () => {
  const [thuyetPhapNumber, setThuyetPhapNumber] = useState<number>(1);
  const [isCopying, setIsCopying] = useState<boolean>(false);

  const handleChangeThuyetPhapNumber = (e: any) => {
    const newNumber = e.target?.value || 1;
    setThuyetPhapNumber(newNumber);
  };

  const doCopy = () => {
    if (isCopying) return;

    setIsCopying(true);

    setTimeout(() => {
      !isCopying && setIsCopying(false);
    }, 2000);
  };

  const cancelCopy = () => {
    setIsCopying(false);
  };

  const renderButton = () => {
    if (isCopying)
      return (
        <Button variant="contained" color="error" onClick={cancelCopy}>
          Hủy sao chép
        </Button>
      );

    return (
      <Button variant="contained" onClick={doCopy}>
        Bắt đầu sao chép
      </Button>
    );
  };

  const renderProgress = () => {
    return (
      <Box marginTop="2rem">
        <LinearProgressWithLabel value={69} />
      </Box>
    );
  };

  return (
    <Box m="1rem 1rem">
      <Typography textAlign="center" variant="h6" marginBottom="2.5rem">
        Sao chép thuyết pháp
      </Typography>
      <Box marginBottom="2rem">
        <FormControl fullWidth>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography marginRight="1rem">
              Chọn danh sách thuyết pháp cần sao chép
            </Typography>
            <Select
              labelId="pick-thuyet-phap-list"
              id="pick-thuyet-phap-list"
              value={thuyetPhapNumber}
              label=""
              onChange={handleChangeThuyetPhapNumber}
              disabled={isCopying}>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </Box>
        </FormControl>
      </Box>
      {renderButton()}
      {isCopying && renderProgress()}
    </Box>
  );
};

export default CopyThuyetPhap;
