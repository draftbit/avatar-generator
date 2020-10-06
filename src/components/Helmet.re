type metaItem = { 
  name: option(string),
  property: option(string),
  content: string,
};

type meta = array(metaItem)

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
    ~meta: meta=?,
    ~title: string=?,
    ~children: React.element=?
  ) =>
  React.element =
  "Helmet";
