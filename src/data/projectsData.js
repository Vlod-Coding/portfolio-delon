import { assets } from "../assets";

export const projectsData = [
  {
    id: 1,
    title: "Delon Pratama - Portfolio",
    image: assets.portfolio,
    type: "Web App",
    link: "https://deloooonp.vercel.app/",
    skills: [{ img: assets.react }, { img: assets.gsap }],
  },
  {
    id: 2,
    title: "iPhone 15 Pro - Website Clone",
    image: assets.iphone15,
    type: "Web App",
    link: "https://iphone15-deloooonp.vercel.app/",
    skills: [
      { img: assets.react },
      { img: assets.gsap },
      { img: assets.threejs },
      { img: assets.tailwindcss },
    ],
  },
  {
    id: 3,
    title: "CakeBahagia - Cake Store Web",
    image: assets.cakebahagia,
    type: "Web App",
    link: "https://deloooonp.github.io/cakebahagia/",
    skills: [
      { img: assets.html5 },
      { img: assets.css3 },
      { img: assets.javascript },
      { img: assets.alpinejs },
    ],
  },
  {
    id: 4,
    title: "Prolific - Clothing Store Web",
    image: assets.prolific,
    type: "Web App",
    link: "https://github.com/deloooonp/prolific_website",
    skills: [
      { img: assets.codeigniter },
      { img: assets.bootstrap },
      { img: assets.mysql },
      { img: assets.sql },
    ],
  },
  {
    id: 5,
    title: "Laravel Book API - RESTful API",
    image: assets.restapi,
    type: "RESTful API",
    link: "https://github.com/deloooonp/laravel-12-bookapi",
    skills: [{ img: assets.laravel }, { img: assets.sql }],
  },
];
