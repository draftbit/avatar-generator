%raw(`require('./ColorSwatch.css')`)

@react.component
let make = (~value, ~selected, ~disabled=false, ~onSelect) =>
  disabled
    ? <div className="ColorSwatch-disabled" />
    : <button
        onClick={_ => onSelect(value)}
        style={ReactDOM.Style.make(~backgroundColor=j`#$value`, ())}
        className="ColorSwatch">
        {selected ? <img width="20" height="20" src="/images/checkmark.svg" /> : React.null}
      </button>
