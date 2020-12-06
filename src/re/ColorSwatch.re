[%bs.raw {|require('./ColorSwatch.css')|}];

[@react.component]
let make = (~value, ~selected, ~disabled=false, ~onSelect) =>
  disabled ?
    <TestId id="disabled-color-swatch">
      <div className="ColorSwatch-disabled" />
    </TestId> :
    <TestId id="enabled-color-swatch">
      <button
        onClick={_ => onSelect(value)}
        style={ReactDOMRe.Style.make(~backgroundColor={j|#$value|j}, ())}
        className="ColorSwatch">
        {
          selected ?
            <img width="20" height="20" src="/images/checkmark.svg" /> :
            React.null
        }
      </button>
    </TestId>;