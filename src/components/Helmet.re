[@bs.deriving abstract]
type finalMetaItem = {
  [@bs.optional]
  name: string,
  [@bs.optional]
  property: string,
  [@bs.optional]
  content: string,
};

type link = {
  rel: string,
  href: string,
};

[@bs.module "react-helmet"] [@react.component]
external make:
  (
    ~async: bool=?,
    ~base: 'a=?,
    ~bodyAttributes: 'a=?,
    ~defaultTitle: string=?,
    ~defer: bool=?,
    ~encodeSpecialCharacters: bool=?,
    ~htmlAttributes: 'a=?,
    ~onChangeClientState: 'a=?,
    ~link: array(link)=?,
    ~style: string=?,
    ~titleTemplate: string=?,
    ~meta: array(finalMetaItem)=?,
    ~title: string=?,
    ~children: React.element=?
  ) =>
  React.element =
  "Helmet";
