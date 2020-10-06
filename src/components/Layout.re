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

  let meta = [|
    {
      name: Some("description"),
      property: None,
      content: "A playful avatar generator for the modern age.",
    },
    {
      name: Some("twitter:card"),
      property: None,
      content: "summary"
    },
    {
      name: Some("twitter:site"),
      property: None,
      content: "@draftbit"
    },
    {
      name: Some("twitter:title"),
      property: None,
      content: "Personas by Draftbit",
    },
    {
      name: Some("twitter:image"),
      property: None,
      content: "https://personas.draftbit.com/web-preview-1x1.png",
    },
    {
      name: Some("twitter:description"),
      property: None,
      content: "A playful avatar generator for the modern age.",
    },
    {
      name: Some("keywords"),
      property: None,
      content: "Avatar, Avatar Generator, Personas, Draftbit, Avatars",
    },
    {
      name: None,
      property: Some("fb:app_id"),
      content: "292869531545861"
    },
    {
      name: None,
      property: Some("og:type"),
      content: "website"
    },
    {
      name: None,
      property: Some("og:image"),
      content: "https://personas.draftbit.com/web-preview.png",
    },
    {
      name: None,
      property: Some("og:title"),
      content: "Personas by Draftbit",
    },
    {
      name: None,
      property: Some("og:url"),
      content: "https://personas.draftbit.com",
    },
    {
      name: None,
      property: Some("og:description"),
      content: "A playful avatar generator for the modern age.",
    },
  |];

  let link = [|
  {
    rel: "canonical",
    href: "https://personas.draftbit.com"
  }
  |];

  <>
    <Helmet title={data.site.siteMetadata.title} link meta>
      <html lang="en" />
    </Helmet>
    children
  </>;
};

let default = make;
