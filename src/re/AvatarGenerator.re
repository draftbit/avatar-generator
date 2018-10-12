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

type option = {
  id: string,
  label: string,
  colors: list(string),
  styles: list(string),
  selectedColor: string,
  selectedStyle: string,
};

type state = {
  rotation: int,
  options: list(option),
};

type action =
  | Randomize
  | UpdateStyle(string, string)
  | UpdateColor(string, string);

let component = ReasonReact.reducerComponent("AvatarGenerator");
let skin = [
  "#FBD2C7",
  "#F2AD9B",
  "#E58F7B",
  "#E4A070",
  "#B16A5B",
  "#92594B",
  "#623D36",
  "#C9E6DC"
];

let disabled_colors = [
  "#EEEFF5",
  "#EEEFF5",
  "#EEEFF5",
  "#EEEFF5",
  "#EEEFF5",
  "#EEEFF5",
  "#EEEFF5",
  "#EEEFF5",
];

let hair = [
  "#362C47",
  "#675E97",
  "#5AC4D4",
  "#DEE1F5",
  "#6C4545",
  "#F29C65",
  "#E16381",
  "#E15C66",
];

let facialhair = [
  "#362C47",
  "#675E97",
  "#5AC4D4",
  "#DEE1F5",
  "#6c4545",
  "#F29C65",
  "#E16381",
  "#E15C66",
];

let body = [
  "#456DFF",
  "#5A45FF",
  "#6DBB58",
  "#F55D81",
  "#7555CA",
  "#E24553",
  "#54D7C7",
  "#F3B63A",
];

let background = [
  "#93A7FF",
  "#A9E775",
  "#FF7A9A",
  "#B379F7",
  "#FF6674",
  "#89E6E4",
  "#FFCC65",
  "#070B28",
  "#F8FBFF",
  "#FFFFFF",
];

let make = (~onExport, _children) => {
  ...component,
  initialState: () => {
    rotation: 0,
    options: [
      {
        id: "Skin",
        label: "SKIN",
        colors: skin,
        styles: ["Skin"],
        selectedColor: "#B16A5B",
        selectedStyle: "Skin",
      },
      {
        id: "Hair",
        label: "HAIR",
        colors: hair,
        styles: [
          "Bald",
          "Hat",
          "Balding",
          "Bigcurls",
          "Bobbangs",
          "Bobcut",
          "Buncurls",
          "Buzzcut",
          "Hightopcurly",
          "Long",
          "Pigtails",
          "Shortcombover",
        ],
        selectedColor: "#362C47",
        selectedStyle: "Bobbangs",
      },
      {
        id: "FacialHair",
        label: "FACIAL HAIR",
        colors: facialhair,
        styles: ["BeardMustache", "Mustache", "None"],
        selectedColor: "#362C47",
        selectedStyle: "None",
      },
      {
        id: "Body",
        label: "BODY",
        colors: body,
        styles: ["Oval", "Round", "Square"],
        selectedColor: "#E24553",
        selectedStyle: "Square",
      },
      {
        id: "Eyes",
        label: "EYES",
        colors: ["#000000"],
        styles: ["Glasses", "Happy", "Open", "Sleepy", "Sunglasses", "Wink"],
        selectedColor: "#000000",
        selectedStyle: "Open",
      },
      {
        id: "Mouth",
        label: "MOUTH",
        colors: disabled_colors,
        styles: [
          "Bigsmile",
          "Frown",
          "Lips",
          "Pacifier",
          "Smile",
          "Smirk",
          "Surprise",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "Smile",
      },
      {
        id: "Nose",
        label: "NOSE",
        colors: disabled_colors,
        styles: ["Mediumround", "Smallround", "Wrinkles"],
        selectedColor: "#FFFFFF",
        selectedStyle: "Smallround",
      },
      {
        id: "Background",
        label: "BACKGROUND",
        colors: background,
        styles: ["Background"],
        selectedColor: "#89E6E4",
        selectedStyle: "Background",
      },
    ],
  },
  reducer: (action, state) =>
    switch (action) {
    | Randomize =>
      let options =
        List.map(
          state.options,
          o => {
            let selectedColor =
              List.get(o.colors, Random.int(List.length(o.colors)));
            let selectedStyle =
              List.get(o.styles, Random.int(List.length(o.styles)));
            {
              ...o,
              selectedColor:
                Belt.Option.getWithDefault(selectedColor, o.selectedColor),
              selectedStyle:
                Belt.Option.getWithDefault(selectedStyle, o.selectedStyle),
            };
          },
        );
      ReasonReact.Update({...state, options, rotation: state.rotation + 1});
    | UpdateStyle(id, selectedStyle) =>
      let options =
        List.map(state.options, o => o.id == id ? {...o, selectedStyle} : o);
      ReasonReact.Update({...state, options});

    | UpdateColor(id, selectedColor) =>
      let options =
        List.map(state.options, o => o.id == id ? {...o, selectedColor} : o);
      ReasonReact.Update({...state, options});
    },
  render: ({state, send}) => {
    let rotation = "rotate(" ++ string_of_int(state.rotation * 50) ++ "deg)";
    let pngImage =
      List.map(state.options, o =>
        <SvgLoader
          style={ReactDOMRe.Style.make(~zIndex=getZIndex(o.id), ())}
          className="AvatarGenerator-png"
          name={o.selectedStyle}
          fill={o.selectedColor}
          size="512"
        />
      );

    let faceFeatures =
      List.map(state.options, o =>
        <SvgLoader
          style={ReactDOMRe.Style.make(~zIndex=getZIndex(o.id), ())}
          className="AvatarGenerator-faceFeature"
          name={o.selectedStyle}
          fill={o.selectedColor}
          size="150"
        />
      );

    let styleOptions =
      List.map(state.options, o =>
        <Styler
          id={o.id}
          label={o.label}
          colors={o.colors}
          styles={o.styles}
          selectedColor={o.selectedColor}
          selectedStyle={o.selectedStyle}
          onSelectColor={color => send(UpdateColor(o.id, color))}
          onSelectStyle={style => send(UpdateStyle(o.id, style))}
        />
      );
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
      <button
        onClick={_ => onExport()} className="Button-primary Text-button">
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

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~onExport=jsProps##onExport, [||])
  );
