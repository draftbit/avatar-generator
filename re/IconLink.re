[%bs.raw {|require('./IconLink.css')|}];

[@react.component]
let make = (~rel=?, ~title=?, ~label, ~href, ~icon) => {
  <span className="IconLink-container">
    <a ?rel ?title className="Text-link" href>
      {React.string(label)}
      <Icon name=icon />
    </a>
  </span>;
};
