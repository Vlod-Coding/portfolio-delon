import { assets } from "../assets";

export const projectsData = [
  {
    title: "Delon Pratama - Portfolio",
    image: assets.portfolio,
    type: "Web App",
    link: "https://deloooonp.vercel.app/",
    skills: [
      { img: assets.react },
      { img: assets.gsap },
      { img: assets.nodejs },
    ],
  },
  {
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
    title: "Laravel Book API - RESTful API",
    image: assets.restapi,
    type: "RESTful API",
    link: "https://github.com/deloooonp/laravel-12-bookapi",
    skills: [{ img: assets.laravel }, { img: assets.sql }],
  },
];
