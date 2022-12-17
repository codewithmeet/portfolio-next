import ReactMovielyImage from "./public/portfolio-img/moviely.png";
import ReactWeatherlyImage from "./public/portfolio-img/weatherly.png";
import NevittaImage from "./public/portfolio-img/nevitta.png";
import TroopixelImage from "./public/portfolio-img/Troopixel.png";
import MyPortfolioImage from "./public/portfolio-img/myportfolio.png";

export default {
  navlinks: [
    {
      id: 1,
      title: "Home",
      url: "#home",
    },
    {
      id: 2,
      title: "About Me",
      url: "#about",
    },
    {
      id: 3,
      title: "Work",
      url: "#work",
    },
    {
      id: 4,
      title: "Hire Me",
      url: "#hire-me",
    },
  ],

  about: [
    "Build web applications, marketing automations, chatbots and more from scratch.",
    "Develop high-quality Backend Architectures, RESTful APIs, Socket Architecture and web services that can scale accordingly.",
    "Integrate third-party services like (Twilio, Stripe, MailChimp & many more).",
    "Configure and deploy web applications on any cloud-based environment.",
    " Communicate clearly. And it's OK if you are far from the technical knowledge and terms.",
  ],

  skills: [
    "ReactJs",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "MongoDb",
    "Redux",
    "Recoil",
    "GraphQL",
  ],

  works: [
    {
      id: 0,
      title:
        "Nevitta - Indian manufacturer of the finest architectural hardware",
      description:
        "Nevitta is a leading architectural manufacturer known for its high-quality products and innovative design solutions. Their website, built using the popular JavaScript library ReactJS, offers a sleek and modern user interface that makes it easy for customers to browse and analyze their products. The site also utilizes SCSS (Sassy CSS), a powerful CSS preprocessor, to help style and customize the look and feel of the site. In addition to its attractive design and easy-to-use features, the website also includes an email API that allows customers to contact Nevitta directly with any questions or inquiries. This helps to enhance the customer experience and ensures that Nevitta is always available to provide the excellent service that they are known for.",
      image: NevittaImage,
      techs: [
        "ReactJs",
        "My creativity",
        "Netlify",
        "Styled Components",
        "SCSS",
      ],
      github_url: null,
      live_url: "https://www.nevitta.in/",
    },

    {
      id: 1,
      title: "Troopixel - Your Imagination Our Pixels",
      description:
        "Troopixel is a creative agency that specializes in bringing their clients' imaginations to life through the use of pixels. Their website, built using ReactJS and styled components, offers a visually stunning user experience that showcases their work and capabilities. The website also utilizes Framer Motion, a powerful animation library for React, to add smooth and engaging animations to the site. In addition to its visually appealing design, Troopixel's website also includes a custom mapping feature powered by the Google Maps API. This allows visitors to easily find the agency's location and get directions to their office. The website also includes an email API that allows visitors to contact the agency directly with any questions or inquiries they may have. Overall, Troopixel's website is a testament to their dedication to creativity and excellence in their work. If you are looking for a creative agency that can bring your ideas to life, Troopixel is an excellent choice.",
      image: TroopixelImage,
      techs: [
        "ReactJs",
        "My creativity",
        "Netlify",
        "Styled Components",
        "SCSS",
        "Framer Motion",
        "Google Maps API",
      ],
      github_url: null,
      live_url: "https://www.nevitta.in/",
    },
    {
      id: 2,
      title: "React Moviely",
      description:
        "My react movie analysis app is a web application built using React and a combination of Firebase and The Movie DB API. The purpose of the project was to create a platform where users can search for and analyze movies and TV shows. The main feature of the app is the ability to search for movies and TV shows by title or actor, and view detailed information about each one, including ratings, cast and crew, plot summary, and more. Users can also save their favorite movies and TV shows to a personal watchlist and leave reviews for other users to see. To build the app, I used a variety of technologies and tools, including the React JavaScript library, Firebase for user authentication and data storage, and the Movie DB API for movie and TV show data.",
      image: ReactMovielyImage,
      techs: [
        "ReactJS",
        "Firebase",
        "MovieDB API",
        "Styled Components",
        "Netlify",
      ],
      github_url: null,
      live_url: "https://react-moviely.web.app",
    },
    {
      id: 3,
      title: "React Weatherly",
      description:
        "My weather analytics project was a web application built using React.js and a weather API. The purpose of the project was to provide users with up-to-date weather data and insights for a given location. The main feature of the project is the ability to search for and display weather data for a specific city or region. This data includes current conditions, as well as forecasted temperatures {and} {precipitation} for the next several days. To build the application, I used a variety of technologies and tools, including the React JavaScript library and Axios for API calls. I also implemented various design and user experience elements, such as a responsive layout and intuitive navigation, to make the application easy to use and visually appealing.",
      image: ReactWeatherlyImage,
      techs: [
        "ReactJS",
        "Firebase",
        "Weather API",
        "Styled Components",
        "SCSS",
        "Netlify",
      ],
      github_url: null,
      live_url: "https://react-weatherly-6421.web.app",
    },
    {
      id: 4,
      title: "My Portfoilio",
      description:
        "My portfolio project is a website built using Next.js, a popular JavaScript framework for building server-rendered applications. The purpose of the project was to create a professional online presence that showcases my skills and experience as a developer.One of the key features of the site is its responsive design, which ensures that it looks great and is easy to navigate on any device, from desktop to mobile. I also incorporated some interactive elements, such as smooth scrolling and hover effects, to make the user experience more engaging. To build the site, I also utilized various tools and libraries, such as Styled Components and Vercel, to streamline the development process and ensure the site was fast and reliable.",
      image: MyPortfolioImage,
      techs: [
        "NextJs",
        "Vercel",
        "Styled Components",
        "SCSS",
        "My creativity",
        "Framer Motion",
        "React hook forms",
      ],
      github_url: null,
      live_url: "#",
    },
  ],

  sizes: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
};
