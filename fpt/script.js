let listFilm = [
    {
        id : 1,
        name :"mưa đỏ",
        year :"2025",
        phanloaidotuoi:"15 tuổi",
        hour :"1 giờ 45 phút",
        nation: "Việt Nam",
        type :"Phim chiếu rạp",
        banner : "mđ.jpg",
        trailer : "https://www.youtube.com/embed/BD6PoZJdt_M?si=KVMXaTjSeVidwPcd",
    },
     {
        id : 2,
        name :"bố già",
        year :"2020",
        phanloaidotuoi:"15 tuổi",
        hour :"1 giờ 45 phút",
        nation: "Việt Nam",
        type :"Phim chiếu rạp",
        banner : "bố già.jpg",
        trailer : "https://www.youtube.com/embed/jluSu8Rw6YE?si=0acCeZTDEPLzz6HS",
    },
    {
        id : 3,
        name :"làm giàu với ma",
        year :"2025",
        phanloaidotuoi:"15 tuổi",
        hour :"1 giờ 45 phút",
        nation: "Việt Nam",
        type :"Phim chiếu rạp",
        banner : "làm giàu với ma.jpg",
        trailer : "https://www.youtube.com/embed/GAV25aB_1KE?si=7uVH-oGFPnl4gzpI",
    },
    {
        id : 4,
        name :"bộ tứ báo thủ",
        year :"2025",
        phanloaidotuoi:"15 tuổi",
        hour :"1 giờ 45 phút",
        nation: "Việt Nam",
        type :"Phim chiếu rạp",
        banner : "bộ tứ báo thủ.jpg",
        trailer : "https://www.youtube.com/embed/zKMOgOWn8lQ?si=j5YYG6YlPPehv6Ed",
    },
    {
        id : 5,
        name :"tử chiến trên không",
        year :"2025",
        phanloaidotuoi:"15 tuổi",
        hour :"1 giờ 45 phút",
        nation: "Việt Nam",
        type :"Phim chiếu rạp",
        banner : "tử chiến.jpg",
        trailer :"https://www.youtube.com/embed/Q-Zf8KhyS6E?si=bRj9HbH_63eRxZ1h",
    },

];

let bannerElement = document.getElementsByClassName("banner")[0];   
let filmYearElment = document.getElementsByClassName("tt-year")[0];
let filmPhanloaidotuoiElment = document.getElementsByClassName("tt-phanloaidotuoi")[0];
let filmHourElment = document.getElementsByClassName("tt-hour")[0];
let filmNationElement = document.getElementsByClassName("tt-nation")[0];
function viewTrailer() {
      let TrailerELement = document.getElementsByClassName("trailer")[0];
      bannerElement.style.display = "none";
      TrailerELement.style.display = "block";
}
function chooseFilm(filmId) {
    let selectedFilm = listFilm.find(film => film.id === filmId);
    bannerElement.src = selectedFilm.banner;
    filmNationElement.innerText = selectedFilm.nation;
    filmYearElment.innerText = selectedFilm.year;
    filmPhanloaidotuoiElment.innerText = selectedFilm.phanloaidotuoi;
    filmHourElment.innerText = selectedFilm.hour;
}