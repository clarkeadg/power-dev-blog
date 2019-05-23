import CMS from 'netlify-cms-app'

// image services
//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

// templates
import BlogPostPreview from './preview-templates/BlogPostPreview'

// register image services
//CMS.registerMediaLibrary(uploadcare);
//CMS.registerMediaLibrary(cloudinary);

// register templates
CMS.registerPreviewTemplate('posts', BlogPostPreview)