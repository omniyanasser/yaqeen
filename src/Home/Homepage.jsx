import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Divider,
  Fade,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const sections = [
  {
    title: "القرآن الكريم",
    desc: "استمع لقراءة القرآن الكريم بأصوات كبار المشايخ في روايات متعددة.",
    desc2: "اختر السورة والمقرئ المفضل لديك بكل سهولة، لتحافظ على وردك اليومي.",
    img: "/images/defrino-maasy-0TwA0UDKHl8-unsplash.jpg",
    link: "/quran",
  },
  {
    title: "الصلاة",
    desc: "تعلم كيفية أداء الصلوات الخمس بشكل صحيح ومفصل، مع شرح عملي.",
    desc2: "مدعوم بالصور والفيديوهات، لتتقن كل حركة وتحقق الخشوع الكامل.",
    img: "/images/imad-alassiry-Vgf_yv3OBsA-unsplash.jpg",
    link: "/prayer",
  },
  {
    title: "الأذكار",
    desc: "تابع أذكار الصباح والمساء، وأذكار ما بعد الصلاة.",
    desc2:
      "وغيرها من الأدعية المأثورة من السنة النبوية لتتقرّب إلى الله يوميًا.",
    img: "/images/masjid-pogung-dalangan-DBsQFuIbXg4-unsplash.jpg",
    link: "/azkar",
  },
  
  {
    title: "العلوم الشرعية ",
    desc: "استمع إلى دروس قيمة في الفقه والعقيدة والسيرة النبوية.",
    desc2: "يقدمها نخبة من العلماء والدعاة لزيادة وعيك الديني والمعرفي.",
    img: "/images/aldin-nasrun-BHaTwTh-6g8-unsplash.jpg",
    link: "/lessons",
  },
 
];

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <Box
      dir="rtl"
      sx={{ fontFamily: "'Cairo', sans-serif", bgcolor: "#f8f9fa" }}
    >
      {/* Hero Section */}
      <Box
        style={{
          backgroundImage: `linear-gradient(to right, rgba(141, 110, 99, 0.51), rgba(109, 76, 65, 0.31)), url(${process.env.PUBLIC_URL}/images/abdullah-arif-Dxi6KbpvUgA-unsplash.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "360px",
        }}
        sx={{
          textAlign: "center",
          py: 8,
          color: "#fff",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          مرحبًا بك في تطبيق يقين
        </Typography>
        <Typography variant="h6">
          دليلك اليومي لمعرفة الدين، الصلاة، والقرآن
        </Typography>
      </Box>

      {/* Sections */}
      <Container sx={{ py: 5 }}>
        {sections.map((section, idx) => (
          <Fade in={true} timeout={1000} key={section.title}>
            <Box>
              <Grid
                container
                spacing={4}
                alignItems="center"
                direction={idx % 2 === 0 ? "row" : "row-reverse"}
                sx={{ my: 5 }}
              >
                {/* Image */}
                <Grid item xs={12} md={6} sx={{ mx: "auto" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mx: "auto",
                      textAlign: "center",
                    }}
                  ></Box>
                  <Box
                    component="img"
                    src={section.img}
                    alt={section.title}
                    sx={{
                      width: { xs: "330px", sm: "550px", md: "500px" },
                      height: { xs: "auto", sm: 250, md: 300 },
                      borderRadius: 2,
                      boxShadow: 3,
                      maxHeight: 300,
                      mx: "auto",
                      px: "auto",
                      textAlign: "center",
                      objectFit: "cover",
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                </Grid>

                {/* Text */}
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    wordBreak: "break-word",
                    height: "100%",
                    minHeight: { xs: "auto", md: 300 },
                    mx: "auto",
                  }}
                >
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {section.desc}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {section.desc2}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#6d4c41",
                      "&:hover": { bgcolor: "#6d4c41cf", color: "#f8f9fa" },
                      mx: "auto",
                      mt: 1,
                      px:3,
                      alignItems: "center",
                      gap:1,
                      color: "#fff",
                    }} onClick={() => navigate(section.link)}
                  
                  >
                    
                    <i className="bi bi-chevron-right" style={{ fontSize: 16, color: "#fff" }}></i>
                    ادخل ركن {section.title}
                  
                  </Button>
                </Grid>
              </Grid>

              {/* Divider between sections */}
              {idx < sections.length - 1 && (
                <Divider
                  sx={{
                    my: 3,
                    borderColor: "#c7a27c",
                    width: "50%",
                    mx: "auto",
                  }}
                />
              )}
            </Box>
          </Fade>
        ))}
      </Container>
    </Box>
  );
};

export default Homepage;
