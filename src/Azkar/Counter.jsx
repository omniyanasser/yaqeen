import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useLocation } from "react-router-dom";
import data from "./tasbeehList.json"


const Counter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const id = parseInt(searchParams.get("id"));
 const zekrObj = data.find((item) => item.id === id);
 
  const storageKey = `count-${id}`;


  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? parseInt(saved) : 0;
  });
  useEffect(() => {
    localStorage.setItem(storageKey, count.toString());
  }, [count, storageKey]);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box
      sx={{
        px: 3,
        py: 5,
        minHeight: "80vh",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* دائرة الذكر */}
      <Box
        onClick={handleClick}
        sx={{
          bgcolor: "#fffcf7",
          boxShadow: 2,
          outline: "10px solid #8a6644",
          outlineOffset: "10px",
        //   border: "5px solid #6d4c41",
          borderRadius: "50%",
          width: 230,
          height: 230,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          textAlign: "center",
          mb: 4,
          transition: "transform 0.2s",
          "&:active": {
            transform: "scale(0.99)",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: 26,
            fontWeight: "bold",
            color: "#46433b",
            px: 2,
          }}
        >
          {zekrObj?.zekr || "سبحان الله"}
        </Typography>
      </Box>

      {/* العداد */}
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#46433b",
          mb: 3,
         textAlign: "center"

        }}
      >
        مجموع التسبيحات 
        <br/>
         {count}
      </Typography>

      {/* زر إعادة */}
      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{
            color: "#fff",
            border: "none",
            outline: "none",
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            bgcolor: "#856b51",
            py:1,
            width: { xs: "80%", sm: "80%", md: "30%" }, 
          "&:hover": {
            bgcolor: "#856b51d7",
          },
        }}
        startIcon={<RestartAltIcon />}
      >
        أبدأ من جديد
      </Button>
    </Box>
  );
};

export default Counter;
