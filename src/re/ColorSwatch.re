[%bs.raw {|require('./ColorSwatch.css')|}];

let component = ReasonReact.statelessComponent("ColorSwatch");
let make = _children => {
  ...component,
  render: _self =>
    <button className="ColorSwatch" />
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps =>
  make([||])
);
