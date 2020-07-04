open Webapi.Dom;

[@bs.module "html2canvas"]
external html2canvas: (Dom.element) => Js.Promise.t(Dom.element) = "default";

[@bs.scope "window"] [@bs.val]
external scroll : (int, int) => unit = "scroll";

[@bs.send]
external toDataURL':
  (Dom.element, ~type_: string=?, ~encoderOptions: float=?, unit) => string =
  "toDataURL";

let map = (f) =>
  fun
  | Some(v) => Some(f(v))
  | None => None;

let andThen = (f: 'a => option('b)) =>
  fun
  | Some(v) => f(v)
  | None => None;

let unsafelyUnwrapOption =
  fun | Some(v) => v
      | None => raise(Invalid_argument("Passed `None` to unsafelyUnwrapOption"));

let export = () => {
  let collection = document |> Document.getElementsByClassName("AvatarGenerator-pngContainer");
  let collectionAsArray = collection |> HtmlCollection.toArray;
  let node = collectionAsArray[0];
  scroll(0, 0);

  ignore(html2canvas(node)
    |> Js.Promise.then_(canvas => {
      let link = document |> Document.createElement("a");
      link |> Element.setAttribute("download", "avatar.png");
      link |> Element.setAttribute("href", canvas->toDataURL'());

      let linkHtml = link |> Element.asHtmlElement
                          |> unsafelyUnwrapOption;

      ignore(document |> Document.asHtmlDocument
               |> andThen(HtmlDocument.body)
               |> map(Element.appendChild(linkHtml)));

      HtmlElement.click(linkHtml);

      ignore(document |> Document.asHtmlDocument
               |> andThen(HtmlDocument.body)
               |> map(Element.removeChild(linkHtml)));

    Js.Promise.resolve();
  }));
  ();
};