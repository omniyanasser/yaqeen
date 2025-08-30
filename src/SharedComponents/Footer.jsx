
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
          
        <Typography
  variant="body2"
  sx={{
    textAlign: "center",
    color: "gray",
    fontSize: "16px",
    direction: "ltr",
  }}
>
  &copy; {new Date().getFullYear()} All rights reserved - Omniya Nasser
</Typography>

        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
