import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import { useNavigate } from "react-router-dom";

const MorningNavbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: 2,
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: 1,
        borderBottom: "1px solid #f0e5da",
        position: "fixed",
        width: "100%",
        zIndex: 333,
      }}
    >
      
      <IconButton onClick={() => navigate("/azkar")}>
        <ArrowBackIosNewIcon sx={{ color: "#6d4c41" }} />
      </IconButton>

     
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <WbSunnyRoundedIcon sx={{ color: "#fbc02d" }} />
        <Typography variant="h6" fontWeight="bold" color="#6d4c41">
          أذكار الصباح
        </Typography>
      </Box>
    </Box>
  );
};

export default MorningNavbar;
