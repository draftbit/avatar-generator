[%bs.raw {|require('./ColorSwatch.css')|}];

[@react.component]
let make = (~value, ~selected, ~disabled=false, ~onSelect) => {
  disabled
    ? <div className="ColorSwatch-disabled" />
    : <button
        onClick={_ => onSelect(value)}
        style={ReactDOMRe.Style.make(~backgroundColor={j|#$value|j}, ())}
        className="ColorSwatch">
        {selected
           ? <img width="20" height="20" src="/images/checkmark.svg" />
           : React.null}
      </button>;
};
