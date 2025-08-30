import "./Time.css"
import SmallSections from "./SmallSections"
import { Link } from "react-router-dom";
 import { Home } from "lucide-react"; 
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Footer from "../SharedComponents/Footer";
 import ArabicNavbar from "../SharedComponents/ArabicNavbar"

function Time() {

const [city, setCity] = useState("Cairo");
const [prayerTimes, setPrayerTimes] = useState({});
const [date, setDate] = useState("");

console.log(city)
  const cities = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الإسكندرية", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "اسوان", value: "Aswan" },
    { name: "الاقصر", value: "Luxor" },
    { name: "طنطا", value: "Tanta" },
    { name: "السويس", value: "Suez" },
    { name: "دمياط", value: "Damietta" },
    { name: "المنيا", value: "Minya" },
    { name: "بني سويف", value: "Beni Suef" },
    { name: "الفيوم", value: "Faiyum" },
    { name: "الشرقية", value: "Sharqia" },
    { name: "الغربية", value: "Gharbia" },
    { name: "الدقهلية", value: "Dakahlia" },
    { name: "كفر الشيخ", value: "Kafr El Sheikh" },
    { name: "المنوفية", value: "Menoufia" },
    { name: "البحيرة", value: "Beheira" },
    { name: "الاسماعيلية", value: "Ismailia" },
    { name: "السويس", value: "Suez" },
  ];

  useEffect(() => {
   const fetchData = async () => {
    try {
     const response = await fetch(
  `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=EG`
);

      const data = await response.json();
      setPrayerTimes(data.data.timings);
      setDate(data.data.date.gregorian.date);
      console.log(data);

    } catch (error) {
      console.error("Error fetching prayer times:", error);
    }
   }

  fetchData();
  
    setCity(cities[0].value);
  }, [city]);

const formatTime = (time) => {
  if (!time) return "00:00";
  let [hours, minutes] = time.split(":").map(Number);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};


  return (
    <Box
     sx=
     {{ 
       display: "flex",
       flexDirection:  { xs: "column-reverse", sm: "row" },
        alignItems: "center",
         justifyContent: { xs: "center", sm: "flex-start" },
         backgroundImage: ` url(${process.env.PUBLIC_URL}/images/bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          fontFamily: "Cairo, sans-serif",
          direction: "rtl",
          px: 2,
          // mt: "100px",
      }}> 
       {/* <ArabicNavbar className='bg-transparent'/> */}

      <Box
       sx={{
            width: { xs: "100%", sm: "90%", md: "550px" },
            backgroundColor: "#332a224e",
            borderRadius: "10px",
            border: "1px solid #d7d7d74e",
            p: "30px 25px",
            backdropFilter: "blur(10px)",
            mr: { xs: "10px", sm: "10%" },
            marginLeft: { xs: "10px"},
            fontFamily: "Cairo, sans-serif"
           
          }}
      >

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "Cairo, sans-serif",
            paddingBottom: "40px",
            borderBottom: "1px solid #d7d7d74e",
            marginBottom: "40px",
            
            gap: { xs: 3, sm: 0 },
          }}
        >
         

        

           {/* اختيار المدينة */}
          <Box>
            <Typography variant="h6" sx={{  fontSize: { xs: "20px", md: "26px" }, color:"#fff",fontFamily: "Cairo, sans-serif" }}>
              المدينة
            </Typography>

           <FormControl>
  <Select
    onChange={(e) => setCity(e.target.value)}
    defaultValue="Cairo" 
    sx={{
      width: { xs: "150px", sm: "220px" },
      backgroundColor: "#a54f3a",
      borderRadius: "5px",
      color: "#fff",
      height: "40px",
      fontSize: { xs: "18px", md: "22px" },
      mt: "10px",
      fontFamily: "Cairo, sans-serif",
      border: "none",
      direction: "rtl"
    }}
  

  >
    {cities.map((city) => (
      <MenuItem key={city.value} value={city.value}  sx={{ direction: "rtl",  }}>
        {city.name} 
      </MenuItem>
    ))}
  </Select>
</FormControl>

          </Box>

            {/* التاريخ */}
          <Box textAlign="center">
            <Typography variant="h5" sx={{  fontSize: { xs: "20px", md: "26px" }, color:"#fff",fontFamily: "Cairo, sans-serif" }}>
              التاريخ
            </Typography>
            <Typography variant="h6" sx={{  fontSize: { xs: "20px", md: "26px" }, color:"#fff",  width: { xs: "100%", sm: "220px" },fontFamily: "Cairo, sans-serif",marginTop: "10px", direction: "rtl" }}>
              {date}
            </Typography>
          </Box>
        </Box>

        <SmallSections name=" الفجر :" time={formatTime(prayerTimes.Fajr)} />
        <SmallSections name=" الظهر :" time={formatTime(prayerTimes.Dhuhr)} />
        <SmallSections name=" العصر :" time={formatTime(prayerTimes.Asr)} />
        <SmallSections name=" المغرب :" time={formatTime(prayerTimes.Maghrib)} />
        <SmallSections name=" العشاء :" time={formatTime(prayerTimes.Isha)} />


      </Box>

 

<Box
  sx={{
    position: "fixed",
    top: { xs: "90%", sm: "5%" },   
    left: { xs: "auto", sm: "5%" },
    backgroundColor: "#c0583e75",
    p: 1,
    borderRadius: "50%",
  }}
>
  <Link to="/" >
    <ArrowLeft className="w-6 h-6 text-white"
    style={{
      fontSize: "30px",
      width: "50px",
      height: "50px",
    }}
    />
  </Link>
</Box>


    </Box>
    
  );
}

export default Time;
