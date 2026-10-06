import React from 'react'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import mobile from "../../assets/mobile1.png";

const Userorderitem = () => {
  return (
<>
  <Box
        sx={{ display: "flex", alignItems: "center",gap:5, justifyContent: "start" }}
      >
        <img src={mobile} alt="" width="100px" />

        <Box>
          <Typography  sx={{color:'grey'}}>
            آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس
          </Typography>
          <Box  sx={{display:'flex',gap:2}}>
            <Typography sx={{color:'grey'}}>احمر</Typography>
             <Typography sx={{color:'wheat'}}>4,5</Typography>
              <Typography sx={{color:'grey'}}>(160تقييم)</Typography>
          </Box>

           <Box  sx={{display:'flex',gap:2,marginTop:'10px'}}>
            <Typography sx={{color:'grey'}}>الكمية</Typography>
            <input type="number"  style={{width:'10%',height:'20px'}} />
          </Box>
        </Box>
      </Box>

</>
  )
}

export default Userorderitem
