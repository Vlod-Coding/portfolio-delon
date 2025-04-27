import { assets } from "../assets";

export const projectsData = [
  {
    id: 1,
    title: "Delon Pratama - Portfolio",
    image: assets.portfolio,
    type: "Web App",
    link: "https://deloooonp.vercel.app/",
    skills: [
      { id: "react", img: assets.react },
      { id: "gsap", img: assets.gsap },
      { id: "nodejs", img: assets.nodejs },
    ],
  },
  {
    id: 2,
    title: "CakeBahagia - Cake Store Web",
    image: assets.cakebahagia,
    type: "Web App",
    link: "https://deloooonp.github.io/cakebahagia/",
    skills: [
      { id: "html5", img: assets.html5 },
      { id: "css3", img: assets.css3 },
      { id: "javascript", img: assets.javascript },
      { id: "alpinejs", img: assets.alpinejs },
    ],
  },
  {
    id: 3,
    title: "Prolific - Clothing Store Web",
    image: assets.prolific,
    type: "Web App",
    link: "https://github.com/deloooonp/prolific_website",
    skills: [
      { id: "codeigniter", img: assets.codeigniter },
      { id: "bootstrap", img: assets.bootstrap },
      { id: "mysql", img: assets.mysql },
      { id: "sql", img: assets.sql },
    ],
  },
  {
    id: 4,
    title: "Laravel Book API - RESTful API",
    image: assets.restapi,
    type: "RESTful API",
    link: "https://github.com/deloooonp/laravel-12-bookapi",
    skills: [
      { id: "laravel", img: assets.laravel },
      { id: "sql", img: assets.sql },
    ],
  },
];
