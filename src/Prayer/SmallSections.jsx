import "./Time.css"
import {
  Box,
  Typography,
 
} from "@mui/material";

function SmallSections({name, time}) {
  return (
    <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 25px",
      marginBottom: "25px",
      background : "#c0583e75",
      borderRadius: "8px",
      border: "1px solid #d7d7d74e",
      color: "#fff",
     fontSize: "24px",
    }}>
       <Typography variant="h6" sx={{ fontFamily: "Cairo, sans-serif" }}>
              {name}
        </Typography>

         <Typography variant="h6" sx={{ fontFamily: "Cairo, sans-serif" }}>
              {time}
        </Typography>

    </Box>
  )
}

export default SmallSections
