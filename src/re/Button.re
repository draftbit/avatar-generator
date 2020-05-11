[%bs.raw {|require('./Button.css')|}];

[@react.component]
let make = (~style=?, ~label, ~href) => {
  <a href ?style className="Button Button--github">
    <img
      className="Button-icon"
      width="24"
      height="24"
      src="/images/github.svg"
    />
    <span className="Button-label"> {React.string(label)} </span>
  </a>;
};
