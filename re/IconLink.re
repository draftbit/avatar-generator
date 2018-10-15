[%bs.raw {|require('./IconLink.css')|}];
let component = ReasonReact.statelessComponent("IconLink");

let make = (~rel=?, ~title=?, ~label, ~href, ~icon, _children) => {
  ...component,
  render: _self =>
    <span className="IconLink-container">
      <a ?rel ?title className="Text-link" href>
        {ReasonReact.string(label)}
        <Icon name=icon />
      </a>
    </span>,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~href=jsProps##href,
      ~label=jsProps##label,
      ~icon=jsProps##icon,
      [||],
    )
  );
