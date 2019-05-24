import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/post.tsx";

const BlogPostPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  console.log("BlogPostPreview", data)
  
  return (
    <BlogPostTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      tags={entry.getIn(['data', 'tags'])}
      title={entry.getIn(['data', 'title'])}
      image={entry.getIn(['data', 'image'])}
      author={entry.getIn(['data', 'author'])}
      date={entry.getIn(['data', 'date'])}
      layout={entry.getIn(['data', 'layout'])}
    />
   ) 
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
