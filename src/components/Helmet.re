[@bs.deriving abstract]
type meta = {
  [@bs.optional]
  name: string,
  [@bs.optional]
  property: string,
  [@bs.optional]
  content: string,
};

[@bs.module "react-helmet"] [@react.component]
external make:
  (
    ~async: option(bool)=?,
    ~base: option('a)=?,
    ~bodyAttributes: option('a)=?,
    ~defaultTitle: option(string)=?,
    ~defer: option(bool)=?,
    ~encodeSpecialCharacters: option(bool)=?,
    ~htmlAttributes: option('a)=?,
    ~onChangeClientState: option('a)=?,
    ~link: option(string)=?,
    ~style: option(string)=?,
    ~titleTemplate: option(string)=?,
    ~meta: array(meta)=?,
    ~title: option(string)=?,
    ~children: option(React.element)=?
  ) =>
  React.element =
  "Helmet";
