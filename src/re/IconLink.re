[%bs.raw {|require('./IconLink.css')|}];
let component = ReasonReact.statelessComponent("IconLink");

let make = (~label, ~href, ~icon, _children) => {
  ...component,
  render: _self => {
    <>
      <a className="Text-link" href> {ReasonReact.string(label)} <Icon name=icon /> </a>
    </>;
  },
};
