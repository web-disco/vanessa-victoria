// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import home from "./home";
import about from "./about";
import testimonial from "./testimonial";
import galleries from "./galleries";
import services from "./services";
import gallery from "./gallery";
import contact from "./contact";
import websiteSettings from "./website-settings";
import twoImageGalleryBlock from "./two-image-gallery-block";
import threeImageGalleryBlock from "./three-image-gallery-block";
import fourImageGalleryBlock from "./four-image-gallery-block";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    home,
    about,
    gallery,
    contact,
    galleries,
    testimonial,
    twoImageGalleryBlock,
    threeImageGalleryBlock,
    fourImageGalleryBlock,
    services,
    websiteSettings,
  ]),
});
