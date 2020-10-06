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

  let meta = [%bs.raw
    {|
            [
                {
                  name: `description`,
                  content: `A playful avatar generator for the modern age.`,
                },
                {
                  name: `twitter:card`,
                  content: `summary`,
                },
                {
                  name: `twitter:site`,
                  content: `@draftbit`,
                },
                {
                  name: `twitter:title`,
                  content: `Personas by Draftbit`,
                },
                {
                  name: `twitter:image`,
                  content: `https://personas.draftbit.com/web-preview-1x1.png`,
                },
                {
                  name: `twitter:description`,
                  content: `A playful avatar generator for the modern age.`,
                },
                {
                  name: `keywords`,
                  content: `Avatar, Avatar Generator, Personas, Draftbit, Avatars`,
                },
                {
                    property: `fb:app_id`,
                    content: `292869531545861`
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                  property: `og:image`,
                  content: `https://personas.draftbit.com/web-preview.png`,
                },
                {
                    property: `og:title`,
                    content: `Personas by Draftbit`
                },
                {
                    property: `og:url`,
                    content: `https://personas.draftbit.com`
                },
                {
                  property: `og:description`,
                  content: `A playful avatar generator for the modern age.`,
                },
            ]
        |}
  ];

  let link = [%bs.raw
    {| [
      {
        rel: `canonical`,
        href: `https://personas.draftbit.com`,
      }
    ]
    |}
  ];

  <>
    <Helmet title={data.site.siteMetadata.title} link meta>
      <html lang="en" />
    </Helmet>
    children
  </>;
};

let default = make;
