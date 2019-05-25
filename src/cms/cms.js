import CMS from "netlify-cms";
//import "netlify-cms/dist/cms.css";
//import "../styles/all.scss"
import styles from '!css-loader!sass-loader!../styles/all.scss'

// image services
//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

// templates
import BlogPostPreview from './preview-templates/BlogPostPreview'

// widgets
import { CustomPathImageControl, CustomPathImagePreview } from "./widgets/customPathImage";

// register image services
//CMS.registerMediaLibrary(uploadcare);
//CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewStyle(styles.toString(), { raw: true })

// register templates
CMS.registerPreviewTemplate('posts', BlogPostPreview)
CMS.registerPreviewTemplate('pages', BlogPostPreview)

// register widgets
CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);
