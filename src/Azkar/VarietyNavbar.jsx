import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import { useNavigate } from "react-router-dom";

const VarietyNavbar = () => {
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
        
      }}
    >
      {/* السهم ← */}
      <IconButton onClick={() => navigate("/azkar")}>
        <ArrowBackIosNewIcon sx={{ color: "#6d4c41" }} />
      </IconButton>

      {/* العنوان + أيقونة */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EmojiObjectsRoundedIcon sx={{ color: "#f9a825" }} />
        <Typography variant="h6" fontWeight="bold" color="#6d4c41">
          أذكار متنوعة
        </Typography>
      </Box>
    </Box>
  );
};

export default VarietyNavbar;





