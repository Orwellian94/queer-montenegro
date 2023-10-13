import React from "react";
import Slider from "react-slick";

import styles from "./Blog.module.css";
import "./slick.css";
import "./slick-theme.css";
import BlogCard from "./BlogCard";

import blogImg from "../../images/blog/blog1.png";
import blogImg2 from "../../images/blog/blog2.png";
import blogImg3 from "../../images/blog/blog3.png";
import blogImg4 from "../../images/blog/blog4.png";
import blogImg5 from "../../images/blog/blog5.png";
import blogImg6 from "../../images/blog/blog6.png";

const blogs = [
  {
    id: 1,
    imageUrl: blogImg,
    title: "Coming Out",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    author: "Enes Pucurica",
    date: "June 25, 2023.",
  },
  {
    id: 2,
    imageUrl: blogImg2,
    title: "How to tell your parents?",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

    author: "Balsa Dragojevic",
    date: "June 27, 2023.",
  },
  {
    id: 3,
    imageUrl: blogImg3,
    title: "Living with HIV",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

    author: "Milos Knezevic",
    date: "June 30, 2023.",
  },
  {
    id: 4,
    imageUrl: blogImg4,
    title: "How to tell your parents?",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

    author: "Danijel Kalezic",
    date: "July 7, 2023.",
  },
  {
    id: 5,
    imageUrl: blogImg5,
    title: "Dysphoria",
    author: "Jovan Ulicevic",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

    date: "July 16, 2023.",
  },
  {
    id: 6,
    imageUrl: blogImg6,
    title: "Pride Week",
    author: "Danijel Kalezic",
    intro:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",

    date: "July 29, 2023.",
  },
];

const Blog = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          settings: "unslick",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.header}>The Blog</h1>
      <Slider {...settings}>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </Slider>
    </div>
  );
};

export default Blog;
