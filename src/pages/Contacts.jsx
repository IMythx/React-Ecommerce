import { Box, Typography } from "@mui/material";
import { memo } from "react";

const Contacts = () => {
  return (
    <Box>
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13949.944298449387!2d31.108014146804212!3d29.061778189218252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a266d31fb501b%3A0x2185275ada65760c!2z2YLYs9mFINio2YbZiiDYs9mI2YrZgdiMINmF2LHZg9iyINio2YbZiSDYs9mI2YrZgdiMINmF2K3Yp9mB2LjYqSDYqNmG2Yog2LPZiNmK2YHYjCDZhdi12LE!5e0!3m2!1sar!2sus!4v1671219812802!5m2!1sar!2sus"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          frameBorder="0"
        ></iframe>
      </Box>
      <Box>
        <Typography variant="h4" color={"secondary.main"}>
          WRITE TO US
        </Typography>
      </Box>
    </Box>
  );
};

export default memo(Contacts);
