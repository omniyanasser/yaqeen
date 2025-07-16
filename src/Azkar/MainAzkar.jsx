
import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

const azkarSections = [
  {
    title: "أذكار الصباح",
    image: "/images/mountain-dawn-svgrepo-com.svg",
    link: "/azkar/morning"
  },
  {
    title: "أذكار المساء",
    image: "/images/moon-svgrepo-com.svg",
    link: "/azkar/evening"
  },
  {
    title: "أذكار متنوعة",
    image: "/images/pray-night-islam-svgrepo-com.svg",
    link: "/azkar/general"
  },
  {
    title: "التسبيح",
    image: "/images/prayer-beads-svgrepo-com.svg",
    link: "/azkar/tasbeeh"
  }
];


const MainAzkar = () => {
  const navigate = useNavigate();

  return (
    <Box dir="rtl" sx={{ fontFamily: "'Cairo', sans-serif", bgcolor: "#f8f9fa", minHeight: "75vh" }}>
      {/* فضل الأذكار */}
      <Container sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="#6d4c41" gutterBottom>
          فضل الأذكار
        </Typography>
        <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
          الأذكار تحصّن المسلم، تطمئن القلب، وتحميه من الشرور. حافظ عليها في الصباح والمساء،
          فهي نور في القلب وبركة في اليوم.
        </Typography>
      </Container>

      {/* أقسام الأذكار */}
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {azkarSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={4}  key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                <CardActionArea onClick={() => navigate(section.link)}>
                  <CardMedia
                    component="img"
                    image={section.image}
                    alt={section.title}
                    height="150"
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {section.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MainAzkar;
