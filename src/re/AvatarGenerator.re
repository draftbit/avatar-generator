[%bs.raw {|require('./AvatarGenerator.css')|}];

let getZIndex = (id: Types.id) =>
  switch (id) {
  | `Eyes => "110"
  | `Nose => "100"
  | `FacialHair => "90"
  | `Mouth => "80"
  | `Body => "75"
  | `Hair => "70"
  | `Head => "40"
  | `Skin => "30"
  | `Background => "20"
  };

type state = {rotation: int};

type action =
  | Randomize;

[@react.component]
let make =
    (~randomize, ~settings: array(Types.setting), ~onChange, ~onExport) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Randomize =>
          randomize();
          {rotation: state.rotation + 1};
        },
      {rotation: 0},
    );
  let rotation = "rotate(" ++ string_of_int(state.rotation * 50) ++ "deg)";
  let pngImage =
    Belt.Array.map(settings, o =>
      <SvgLoader
        key={o.label}
        style={ReactDOMRe.Style.make(~zIndex=getZIndex(o.id), ())}
        className="AvatarGenerator-png"
        name={o.selectedStyle}
        fill={"#" ++ o.selectedColor}
        size="512"
      />
    );

  let faceFeatures =
    Belt.Array.map(settings, o =>
      <SvgLoader
        key={o.label}
        style={ReactDOMRe.Style.make(~zIndex=getZIndex(o.id), ())}
        className="AvatarGenerator-faceFeature"
        name={o.selectedStyle}
        fill={"#" ++ o.selectedColor}
        size="150"
      />
    );

  <div className="AvatarGenerator-container">
    <div className="AvatarGenerator-pngContainer">
      {React.array(pngImage)}
    </div>
    <div className="AvatarGenerator-avatar">
      {React.array(faceFeatures)}
    </div>
    <button className="Text-link" onClick={_ => dispatch(Randomize)}>
      {React.string("Randomize")}
      <Icon
        name="randomize"
        style={ReactDOMRe.Style.make(~transform=rotation, ())}
      />
    </button>
    <div className="AvatarGenerator-row">
      {Belt.Array.map(settings, o =>
         <Styler
           key={o.label}
           id={o.id}
           label={o.label}
           colors={o.colors}
           styles={o.styles}
           selectedColor={o.selectedColor}
           selectedStyle={o.selectedStyle}
           onSelectColor={color => {
             let key: Types.key =
               switch (o.id) {
               | `Skin => `SkinColor
               | `Hair => `HairColor
               | `FacialHair => `FacialHairColor
               | `Body => `BodyColor
               | `Background => `BackgroundColor
               | _ =>
                 Js.Exn.raiseError("ColorNotFound: " ++ Types.idToJs(o.id))
               };

             onChange(key, color);
           }}
           onSelectStyle={style => {
             let key: Types.key =
               switch (o.id) {
               | `Skin => `SkinStyle
               | `Hair => `HairStyle
               | `FacialHair => `FacialHairStyle
               | `Body => `BodyStyle
               | `Eyes => `EyesStyle
               | `Mouth => `MouthStyle
               | `Nose => `NoseStyle
               | _ =>
                 Js.Exn.raiseError("StyleNotFound: " ++ Types.idToJs(o.id))
               };
             onChange(key, style);
           }}
         />
       )
       ->React.array}
    </div>
    <button onClick=onExport className="Button-primary Text-button">
      {React.string("Download Avatar")}
    </button>
    <div className="AvatarGenerator-footer">
      <img width="32" height="32" src="/images/sketch.svg" />
      <div className="AvatarGenerator-footerTop">
        <span className="Text-cta-title mb-1">
          {React.string("Want to make your own?")}
        </span>
        <br />
        <span className="Text-cta-subtitle">
          {React.string("Get the Sketch file on Gumroad.")}
        </span>
      </div>
      <IconLink
        label="Let's Go"
        href="https://gumroad.com/l/PersonasByDraftbit"
        icon="arrow"
      />
    </div>
  </div>;
};
