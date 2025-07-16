import { useState } from "react";
import { useAzkar } from "../contexts/AzkarContext";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

import data from "./azkarVariety.json";

const VarietyAzkarList = () => {
  const { completedAzkar, toggleZekr } = useAzkar();
  const [openPopup, setOpenPopup] = useState(false);
  const [popupText, setPopupText] = useState("");


  const handleShowFaeda = (faeda) => {
    setPopupText(faeda);
    setOpenPopup(true);
  };

  return (
    <Box sx={{ px: 2, py: 4 }}>
      {data.map((zekr) => (
        <Card
          key={zekr.id}
          sx={{
            mb: 3,
            borderTopLeftRadius: 40,
            borderBottomRightRadius: 40,
            // backgroundColor: "#fff",

            border: 3,
            borderColor: "hsl(29.39deg 24.62% 60.98%)",
          }}
        >
          <CardContent>
            {/* الذكر نفسه */}
            <Typography
              variant="body1"
              sx={{
                fontSize: 26,
                fontWeight: "bold",
                textAlign: "center",
                color: "#414140ff",
                mb: 2,
              }}
            >
              {zekr.zekr}
            </Typography>

            {/* الأسفل: الوقت + صح + ؟ */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                bgcolor: "#896444",
                borderTopLeftRadius: 24,
                borderBottomRightRadius: 24,
                padding: 1,
                boxShadow: 2,
              }}
            >
              {/* ؟ */}
              <Tooltip title="فوائد الذكر" arrow>
                <IconButton onClick={() => handleShowFaeda(zekr.faeda)}>
                  <HelpOutlineIcon sx={{ color: "#fff" }} />
                </IconButton>
              </Tooltip>

              {/*  الوقت */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#fff",
                  textAlign:"center"
                }}
              >
                 الوقت : {zekr.time}
              </Typography>

              {/* صح */}
              <Checkbox
                icon={<CheckCircleOutlineIcon sx={{ color: "#fff" }} />}
                checkedIcon={<CheckCircleIcon sx={{ color: "#4caf50" }} />}
               checked={!!completedAzkar[zekr.id]}
                onChange={() => toggleZekr(zekr.id)}
              />
            </Box>
          </CardContent>
        </Card>
      ))}

      {/* Dialog للفائدة */}
      <Dialog
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        
        maxWidth="sm"
      >
        <DialogTitle
          sx={{
            fontWeight: "bold",
            color: "#6d4c41",
            textAlign: "center",
            position: "relative",
            fontSize: "20px",
            pb: 1,
          }}
        >
          فائدة الذكر
          <IconButton
            aria-label="close"
            onClick={() => setOpenPopup(false)}
            sx={{
              position: "absolute",
              left: 8,
              top: 8,
              color: "#de1111ff",
            
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ px: 4, pb: 3 }}>
          <Typography sx={{ fontSize: "16px", lineHeight: 1.7, textAlign: "center" }}>
            {popupText}
          </Typography>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default VarietyAzkarList;
