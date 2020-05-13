[%bs.raw {|require('./Styler.css')|}];

type state = {index: int};

type action =
  | Increment
  | Decrement;

[@react.component]
let make =
    (
      ~id,
      ~label,
      ~colors,
      ~styles,
      ~selectedColor,
      ~selectedStyle,
      ~onSelectColor,
      ~onSelectStyle,
    ) => {
  let (_, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Increment =>
          let inc =
            Belt.Array.length(styles) - 1 > state.index
              ? 1 : - Belt.Array.length(styles) + 1;
          let index = state.index + inc;
          let style = styles[index];
          onSelectStyle({j|$style|j});
          {index: index};
        | Decrement =>
          let inc = state.index > 0 ? 1 : - Belt.Array.length(styles) + 1;
          let index = state.index - inc;
          let style = styles[index];
          onSelectStyle({j|$style|j});
          {index: index};
        },
      {index: 0},
    );

  let colorSwatches =
    switch (id) {
    | `Eyes
    | `Nose
    | `Mouth => React.null
    | _ =>
      Belt.Array.map(colors, color =>
        <ColorSwatch
          key=color
          value=color
          disabled={color === "#EEEFF5"}
          selected={color === selectedColor}
          onSelect={value => onSelectColor(value)}
        />
      )
      ->React.array
    };
  let image = <SvgLoader fill={"#" ++ selectedColor} name=selectedStyle />;

  let showLeftArrow =
    Belt.Array.length(styles) > 1
      ? <button className="Styler-btn" onClick={_ => dispatch(Decrement)}>
          <img className="Styler-arrow" src="/images/arrow.svg" />
        </button>
      : <div />;

  let showRightArrow =
    Belt.Array.length(styles) > 1
      ? <button className="Styler-btn" onClick={_ => dispatch(Increment)}>
          <img
            className="Styler-arrow Styler-arrow--right"
            src="/images/arrow.svg"
          />
        </button>
      : <div />;

  let showImage =
    switch (id) {
    | `Background => React.null
    | _ => <div className={j| Styler-model svg-$id |j}> image </div>
    };

  <div className="Styler-container">
    <span className="Styler-label"> {React.string(label)} </span>
    <div className="Styler-picker">
      showLeftArrow
      showImage
      showRightArrow
    </div>
    <div className="Styler-colors"> colorSwatches </div>
  </div>;
};
