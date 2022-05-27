import { Box, Button, ButtonGroup, Grid, Stack, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

// import Categories from './Categories';



const Categories = [
    {
        img: 'https://i2.milimaj.com/i/milliyet/75/0x410/6058ad9086b2471c8cdccaf3.jpg',
        title: 'siyah',
        category: 'siyah',
    },
    {
        img: 'https://www.wellesclinic.com/wp-content/uploads/2021/08/shutterstock_592789712-1024x683.jpg',
        title: 'yesil',
        category: 'yesil',
    },
    {
        img: 'https://i2.milimaj.com/i/milliyet/75/0x410/6058ad9086b2471c8cdccaf3.jpg',
        title: 'yesil',
        category: 'yesil',
    },
    {
        img: 'https://www.tekcan.av.tr/wp-content/uploads/2019/08/Yeni-Proje-74.jpg',
        title: 'siyah',
        category: 'siyah',
    },
    {
        img: 'https://www.tekcan.av.tr/wp-content/uploads/2019/08/Yeni-Proje-74.jpg',
        title: 'yesil',
        category: 'yesil',
    },
    {
        img: 'https://maltepehastanesi.com.tr/Content/Media/Article/Temp/10042018034932399-dolgu@335x335.jpg',
        title: 'kırmızı',
        category: 'kırmızı',
    },
    {
        img: 'https://www.tekcan.av.tr/wp-content/uploads/2019/08/Yeni-Proje-74.jpg',
        title: 'beyaz',
        category: 'beyaz',
    },
    {
        img: 'https://maltepehastanesi.com.tr/Content/Media/Article/Temp/10042018034932399-dolgu@335x335.jpg',
        title: 'kırmızı',
        category: 'kırmızı',
    },
    {
        img: 'https://www.simyahukuk.com/wp-content/uploads/2018/10/estetik-ameliyat-tazminat-davas%C4%B1-500x350.jpg',
        title: 'kırmızı',
        category: 'kırmızı',
    },
    {
        img: 'https://www.simyahukuk.com/wp-content/uploads/2018/10/estetik-ameliyat-tazminat-davas%C4%B1-500x350.jpg',
        title: 'siyah',
        category: 'siyah',
    },
    {
        img: 'https://www.koruhastanesi.com/images/bolumler/main/275202119955713.jpg',
        title: 'siyah',
        category: 'siyah',
    },
    {
        img: 'https://www.koruhastanesi.com/images/bolumler/main/275202119955713.jpg',
        title: 'beyaz',
        category: 'beyaz',
    },
    {
        img: 'https://www.apexcerrahi.com.tr/wp-content/uploads/2021/06/burun-estetigi-rinoplasti-nedir-kimlere-yapilabilir-apex-cerrahi-1140x445.jpg',
        title: 'kırmızı',
        category: 'kırmızı',
    },
    {
        img: 'https://www.apexcerrahi.com.tr/wp-content/uploads/2021/06/burun-estetigi-rinoplasti-nedir-kimlere-yapilabilir-apex-cerrahi-1140x445.jpg',
        title: 'siyah',
        category: 'siyah',
    },
    {
        img: 'https://irmethospital.com/wp-content/uploads/2018/11/plastikcerrahi2019-1200x438.jpg',
        title: 'kırmızı',
        category: 'kırmızı',
    },
    {
        img: 'https://irmethospital.com/wp-content/uploads/2018/11/plastikcerrahi2019-1200x438.jpg',
        title: 'beyaz',
        category: 'beyaz',
    },
    {
        img: 'https://irmethospital.com/wp-content/uploads/2018/11/plastikcerrahi2019-1200x438.jpg',
        title: 'siyah',
        category: 'siyah',
    },
    {
        img: 'https://www.apexcerrahi.com.tr/wp-content/uploads/2021/06/burun-estetigi-rinoplasti-nedir-kimlere-yapilabilir-apex-cerrahi-1140x445.jpg',
        title: 'siyah',
        category: 'siyah',
    },

];

// export default Categories;

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));



const Portfolio = () => {
    const [data, setData] = useState(Categories);
    const filterResult = (catItem) => {

        const result = Categories.filter(item => item.category === catItem);
        setData(result);
    }
    return (
        <>
            <Typography marginTop="50px" textAlign="center" fontWeight={700} variant='h3'>Portfolio Gallery</Typography>
            <Box sx={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => setData(Categories)} sx={{ color: "#fff", padding: { xs: "5px", sm: "20px 35px 20px 35px" } }}>All</Button>
                    <Button onClick={() => filterResult("kırmızı")} sx={{ color: "#fff", padding: { xs: "5px", sm: "20px 35px 20px 35px" } }}>kırmızı</Button>
                    <Button onClick={() => filterResult("yesil")} sx={{ color: "#fff", padding: { xs: "5px", sm: "20px 35px 20px 35px" } }}>yeşil</Button>
                    <Button onClick={() => filterResult("siyah")} sx={{ color: "#fff", padding: { xs: "5px", sm: "20px 35px 20px 35px" } }}>siyah</Button>
                    <Button onClick={() => filterResult("beyaz")} sx={{ color: "#fff", padding: { xs: "5px", sm: "20px 35px 20px 35px" } }}>beyaz</Button>
                </ButtonGroup>
            </Box>

            <Grid container
            // sx={{
            //     marginTop: "25px",
            //     display: 'grid',
            //     // rowGap: { xs: 4, md: 5 },
            //     columnGap: 4,
            //     gridTemplateColumns: {
            //         xs: 'repeat(1, 1fr)',
            //         sm: 'repeat(2, 1fr)',
            //         md: 'repeat(3, 1fr)',
            //     },

            // }}
            // sx={{ rowGap: "4px", }}
            >
                {data.map((item) => (
                    <Grid padding={5} item xs={12} sm={6} md={4}>
                        <Box component="img" width="100%"
                            height="100%" src={item.img} alt={item.title} ratio="1/1" style={{ borderRadius: "15px", filter: "grayScale(50%)", }} />

                        <Stack spacing={1} sx={{ p: 2.5 }}>
                            <Typography variant="body1" sx={{ color: 'text.disabled' }}>
                                {item.category}
                            </Typography>


                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </>

    )
}

export default Portfolio




