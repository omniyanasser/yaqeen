
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      dir="rtl"
      sx={{
        bgcolor: "#6d4c41",
        color: "#fff",
        py: 3,
        mt: 4,
      }}
    >
      <Container maxWidth="lg" sx={{
          textAlign: "center",
          color: "white",
        }}>
         

        {/* حقوق النشر */}
        <Box>
          <Typography variant="body2" sx={{ textAlign: "center" , color :"whitesmoke", fontSize:"20px"}}>
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة - تطبيق يقين
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
