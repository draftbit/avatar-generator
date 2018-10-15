[%bs.raw {|require('./ColorSwatch.css')|}];

let component = ReasonReact.statelessComponent("ColorSwatch");
let make = (~value, ~selected, ~disabled=false, ~onSelect, _children) => {
  ...component,
  render: _self =>
    disabled ?
      <div className="ColorSwatch-disabled" /> :
      <button
        onClick={_ => onSelect(value)}
        style={ReactDOMRe.Style.make(~backgroundColor={j|#$value|j}, ())}
        className="ColorSwatch">
        {
          selected ?
            <img width="20" height="20" src="/images/checkmark.svg" /> :
            ReasonReact.null
        }
      </button>,
};
