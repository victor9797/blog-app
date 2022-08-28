import React from "react";
import BlogList from "../components/BlogList/BlogList";
import { useParams } from "react-router-dom";

const dummyBlogs = [
  {
    id: "p1",
    image:
      "https://images.squarespace-cdn.com/content/v1/592a3ccad2b857159c817d9a/1634072814176-1FVB83JZHMX9EH25QNQ2/20211012_Estadio_Azteca.jpg",
    title: "The biggest football stadium in America",
    text: "El Estadio Azteca (popularmente conocido como El Coloso de Santa Úrsula) es un estadio de fútbol en México (futbol, en ese país), ubicado en la colonia Santa Úrsula Coapa, en la alcaldía Coyoacán, en la zona sur de la Ciudad de México, con capacidad para 87 000 espectadores, lo que lo convierte en el más grande del país,",
    author: "u1",
    location: "Mexico City",
    coordinates: {
      lat: 19.3028607,
      lon: -99.1505277,
    },
  },
  {
    id: "p2",
    image:
      "https://images.squarespace-cdn.com/content/v1/592a3ccad2b857159c817d9a/1634072814176-1FVB83JZHMX9EH25QNQ2/20211012_Estadio_Azteca.jpg",
    title: "The biggest football stadium in America",
    text: " It is the official home of football club Club América, Cruz Azul and the Mexico national football team. The stadium sits at an altitude of 2,200 m (7,200 feet) above sea level",
    author: "u2",
    location: "Mexico City",
    coordinates: {
      lat: 19.3028607,
      lon: -99.1505277,
    },
  },
  {
    id: "p3",
    image:
      "https://images.squarespace-cdn.com/content/v1/592a3ccad2b857159c817d9a/1634072814176-1FVB83JZHMX9EH25QNQ2/20211012_Estadio_Azteca.jpg",
    title: "The biggest football stadium in America",
    text: " It is the official home of football club Club América, Cruz Azul and the Mexico national football team. The stadium sits at an altitude of 2,200 m (7,200 feet) above sea level",
    author: "u2",
    location: "Mexico City",
    coordinates: {
      lat: 19.3028607,
      lon: -99.1505277,
    },
  },
];

const UserBlogs = () => {
  const userId = useParams().userId;
  const filterResults = dummyBlogs.filter((item) => item.author === userId);
  return <BlogList items={filterResults} user={userId} />;
};

export default UserBlogs;
