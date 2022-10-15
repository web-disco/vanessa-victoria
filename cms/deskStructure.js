// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = (listItem) =>
  !["home", "about", "gallery", "websiteSettings"].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Home Page")
        .child(
          S.editor().id("home").schemaType("home").documentId("singleton-home")
        ),
      S.listItem()
        .title("About Page")
        .child(
          S.editor()
            .id("about")
            .schemaType("about")
            .documentId("singleton-about")
        ),
      S.listItem()
        .title("Gallery Page")
        .child(
          S.editor()
            .id("gallery")
            .schemaType("gallery")
            .documentId("singleton-gallery")
        ),
      S.listItem()
        .title("Website Settings")
        .child(
          S.editor()
            .id("websiteSettings")
            .schemaType("websiteSettings")
            .documentId("singleton-websiteSettings")
        ),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
