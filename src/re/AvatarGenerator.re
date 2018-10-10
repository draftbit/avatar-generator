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
  | "Background" => "0"
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

type state = {options: list(option)};

type action =
  | UpdateStyle(string, string)
  | UpdateColor(string, string);

let component = ReasonReact.reducerComponent("AvatarGenerator");
let skin = [
  "#F2AD9B",
  "#F3967E",
  "#E4A070",
  "#B16A5B",
  "#92594B",
  "#623D36",
  "#EEEFF5",
  "#EEEFF5",
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
  "#F27D65",
  "#F29C65",
  "#E16381",
  "#E15C66",
];

let facialhair = [
  "#362C47",
  "#675E97",
  "#5AC4D4",
  "#DEE1F5",
  "#F27D65",
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

let make = _children => {
  ...component,
  initialState: () => {
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
        selectedStyle: "Pigtails",
      },
      {
        id: "FacialHair",
        label: "FACIAL HAIR",
        colors: facialhair,
        styles: ["BeardMustache", "Mustache", "None"],
        selectedColor: "#362C47",
        selectedStyle: "Mustache",
      },
      {
        id: "Body",
        label: "BODY",
        colors: body,
        styles: ["Oval", "Round", "Square"],
        selectedColor: "#456dff",
        selectedStyle: "Square",
      },
      {
        id: "Eyes",
        label: "EYES",
        colors: disabled_colors,
        styles: ["Glasses", "Happy", "Open", "Sleepy", "Sunglasses", "Wink"],
        selectedColor: "#000000",
        selectedStyle: "Sunglasses",
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
        selectedStyle: "Pacifier",
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
        selectedColor: "#93A7FF",
        selectedStyle: "Background",
      },
    ],
  },
  reducer: (action, state) =>
    switch (action) {
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
      <div className="AvatarGenerator-avatar">
        {ReasonReact.array(List.toArray(faceFeatures))}
      </div>
      <button className="Text-link">
        {ReasonReact.string("Randomize")}
        <Icon name="randomize" />
      </button>
      <div className="AvatarGenerator-row">
        {ReasonReact.array(List.toArray(styleOptions))}
      </div>
      <button className="Button-primary Text-button">
        {ReasonReact.string("Download Avatar")}
      </button>
      <div className="AvatarGenerator-footer">
        <img width="32" height="32" src="/images/sketch.svg" />
        <div className="ml-4 mr-8">
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
          href="https://gum.co/PersonaByDraftbit"
          icon="arrow"
        />
      </div>
    </div>;
  },
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps => make([||]));
