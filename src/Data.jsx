import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

const pageLinks = [
  { id: 1, name: "home", href: "#home" },
  { id: 2, name: "about", href: "#about" },
  { id: 3, name: "services", href: "#services" },
  { id: 4, name: "tours", href: "#tours" },
];

const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

const tourData = [
  {
    img: tour1,
    date: "august 26th, 2022",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    destination: "china",
    duration: "6 days",
    price: "$2100",
  },
  {
    img: tour2,
    date: "September 26th, 2021",
    title: "Java Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    destination: "Indonesia",
    duration: "6 days",
    price: "$3100",
  },
  {
    img: tour3,
    date: "May 26th, 2020",
    title: "China Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    destination: "Japan",
    duration: "10 days",
    price: "$5100",
  },
  {
    img: tour4,
    date: "March 26th, 2019",
    title: "Malaysia Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    destination: "malaysia",
    duration: "6 days",
    price: "$2100",
  },
];

const services = [
  {
    id: 1,
    title: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    title: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    title: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

export { pageLinks, tourData, socialLinks, services };
