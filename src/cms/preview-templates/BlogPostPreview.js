import React from "react";
import PropTypes from "prop-types";
import BlogPostTemplate from "../../templates/post.tsx";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);

  return (
    <BlogPostTemplate
      data={data}
    />
  )
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
