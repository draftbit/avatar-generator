open Helmet;

[@bs.module "gatsby"] external useStaticQuery: string => 'a = "useStaticQuery";

%bs.raw
{|
    import  {graphql}  from "gatsby"
    import 'normalize.css'
    import './layout.css'
    import './fonts.css'
    import './text.css'
|};

type siteMetadataType = {title: string};
type siteType = {siteMetadata: siteMetadataType};
type queryResponseType = {site: siteType};

type metaItem =
  | MetaWithName(string, string)
  | MetaWithProperty(string, string);

type meta = array(metaItem);

let meta = [|
  MetaWithName(
    "description",
    "A playful avatar generator for the modern age.",
  ),
  MetaWithName("twitter:card", "summary"),
  MetaWithName("twitter:site", "@draftbit"),
  MetaWithName("twitter:title", "Personas by Draftbit"),
  MetaWithName(
    "twitter:image",
    "https://personas.draftbit.com/web-preview-1x1.png",
  ),
  MetaWithName(
    "twitter:description",
    "A playful avatar generator for the modern age.",
  ),
  MetaWithName(
    "keywords",
    "Avatar, Avatar Generator, Personas, Draftbit, Avatars",
  ),
  MetaWithProperty("fb:app_id", "292869531545861"),
  MetaWithProperty("og:type", "website"),
  MetaWithProperty(
    "og:image",
    "https://personas.draftbit.com/web-preview.png",
  ),
  MetaWithProperty("og:title", "Personas by Draftbit"),
  MetaWithProperty("og:url", "https://personas.draftbit.com"),
  MetaWithProperty(
    "og:description",
    "A playful avatar generator for the modern age.",
  ),
|];

let link = [|{rel: "canonical", href: "https://personas.draftbit.com"}|];

let metaToHelmet = (item: metaItem) =>
  switch (item) {
  | MetaWithName(name, content) => finalMetaItem(~name, ~content, ())
  | MetaWithProperty(property, content) =>
    finalMetaItem(~property, ~content, ())
  };

[@react.component]
let make = (~children: ReasonReact.reactElement) => {
  let data: queryResponseType =
    useStaticQuery(
      [%bs.raw
        {|
                graphql`
                    query SiteTitleQuery {
                      site {
                        siteMetadata {
                          title
                        }
                      }
                    }
                  `
                |}
      ],
    );

  <>
    <Helmet
      title={data.site.siteMetadata.title}
      link
      meta={meta |> Array.map(metaToHelmet)}>
      <html lang="en" />
    </Helmet>
    children
  </>;
};

let default = make;
