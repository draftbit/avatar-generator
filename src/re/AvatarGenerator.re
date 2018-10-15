open Belt;

[%bs.raw {|require('./AvatarGenerator.css')|}];

let getZIndex = id =>
  switch (id) {
  | "Nose" => "100"
  | "FacialHair" => "90"
  | "Mouth" => "80"
  | "Hair" => "70"
  | "Eyes" => "60"
  | "Body" => "50"
  | "Head" => "40"
  | "Skin" => "30"
  | "Background" => "20"
  | _ => "10"
  };

type style = {
  key: string,
  value: string,
  label: string,
  color: string,
  styles: list(string),
  colors: list(string),
};

type state = {
  rotation: int,
};

type action =
  | Randomize
  | UpdateStyle(string, string)
  | UpdateColor(string, string);

let component = ReasonReact.reducerComponent("AvatarGenerator");
let make =
    (
      ~skin,
      ~skinColor,
      ~hair,
      ~hairColor,
      ~facialHair,
      ~facialHairColor,
      ~body,
      ~bodyColor,
      ~eyes,
      ~mouth,
      ~nose,
      ~bgColor,
      ~skinStyles,
      ~hairStyles,
      ~facialHairStyles,
      ~bodyStyles,
      ~eyeStyles,
      ~mouthStyles,
      ~noseStyles,
      ~bgStyles,
      ~skinColors,
      ~hairColors,
      ~facialHairColors,
      ~bodyColors,
      ~bgColors,
      ~disabledColors,
      ~onExport,
      ~onChange,
      _children,
    ) => {
  ...component,
  initialState: () => {
    rotation: 0,
  },
  reducer: (action, state) =>
    switch (action) {
    | Randomize =>
      ReasonReact.Update({rotation: state.rotation + 1})
    },
  render: ({state, send}) => {
      let settings = [
      {
        key: "skin",
        label: "Skin",
        value: skin,
        color: skinColor,
        styles: skinStyles,
        colors: skinColors,
      },
      {
        key: "hair",
        label: "Hair",
        value: hair,
        color: hairColor,
        styles: hairStyles,
        colors: hairColors,
      },
      {
        key: "facialHair",
        label: "Facial Hair",
        value: facialHair,
        color: facialHairColor,
        styles: facialHairStyles,
        colors: facialHairColors,
      },
      {
        key: "body",
        label: "Body",
        value: body,
        color: bodyColor,
        styles: bodyStyles,
        colors: bodyColors,
      },
      {
        key: "eyes",
        label: "Eyes",
        value: eyes,
        color: "#000",
        styles: eyeStyles,
        colors: [],
      },
      {
        key: "mouth",
        label: "Mouth",
        value: mouth,
        color: "#000",
        styles: mouthStyles,
        colors: [],
      },
      {
        key: "nose",
        label: "Nose",
        value: nose,
        color: "#000",
        styles: noseStyles,
        colors: [],
      },
      {
        key: "bg",
        label: "Background",
        value: "Background",
        color: bgColor,
        styles: [],
        colors: bgColors,
      },
    ];
    let rotation = "rotate(" ++ string_of_int(state.rotation * 50) ++ "deg)";
    let pngImage = [];
    let styleOptions =
      List.map(settings, s =>
        <Styler
          id={s.key}
          label={s.label}
          selectedStyle={s.value}
          selectedColor={s.color}
          colors={s.colors}
          styles={s.styles}
          onSelectColor={
            color => {
              let key = s.key ++ "Color";
              onChange(key, color);
            }
          }
          onSelectStyle={style => {
            onChange(s.key, style);
          }}
        />
      );
    let faceFeatures = [];
    <div className="AvatarGenerator-container">
      <div className="AvatarGenerator-pngContainer">
        {ReasonReact.array(List.toArray(pngImage))}
      </div>
      <div className="AvatarGenerator-avatar">
        {ReasonReact.array(List.toArray(faceFeatures))}
      </div>
      <button className="Text-link" onClick={_ => send(Randomize)}>
        {ReasonReact.string("Randomize")}
        <Icon
          name="randomize"
          style={ReactDOMRe.Style.make(~transform=rotation, ())}
        />
      </button>
      <div className="AvatarGenerator-row">
        {ReasonReact.array(List.toArray(styleOptions))}
      </div>
      <button onClick={_ => onExport()} className="Button-primary Text-button">
        {ReasonReact.string("Download Avatar")}
      </button>
      <div className="AvatarGenerator-footer">
        <img width="32" height="32" src="/images/sketch.svg" />
        <div className="AvatarGenerator-footerTop">
          <span className="Text-cta-title mb-1">
            {ReasonReact.string("Want to make your own?")}
          </span>
          <br />
          <span className="Text-cta-subtitle">
            {ReasonReact.string("Get the Sketch file on Gumroad.")}
          </span>
        </div>
        <IconLink
          label="Let's Go"
          href="https://gumroad.com/l/PersonasByDraftbit"
          icon="arrow"
        />
      </div>
    </div>;
  },
};
