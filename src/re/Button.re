[%bs.raw {|require('./Button.css')|}];
let component = ReasonReact.statelessComponent("Button");

let make = (~style=?, ~label, ~href, _children) => {
  ...component,
  render: _self =>
    <a href=href style=?style className="Button Button--github">
      <img className="Button-icon" width="24" height="24" src="/images/github.svg" />
      <span className="Button-label"> {ReasonReact.string(label)} </span>
    </a>,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~style=jsProps##style, ~label=jsProps##label, ~href=jsProps##href, [||])
  );
