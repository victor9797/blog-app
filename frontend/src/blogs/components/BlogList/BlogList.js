import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import BlogItem from "../BlogItem/BlogItem";

const BlogList = (props) => {
  if (props.items.length === 0) {
    return (
      <Alert key="primary" variant="primary">
        No blogs found for user {props.user} 
        <Link to={`/blogs/new`}> Create one?</Link>
      </Alert>
    );
  }

  return (
    <ul>
      {props.items.map((item) => {
        return <BlogItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          caption={item.caption}
          text={item.text}
          author={item.author}
          location={item.location}
          coordinates={item.coordinates}
        />;
      })}
    </ul>
  );
};

export default BlogList;
