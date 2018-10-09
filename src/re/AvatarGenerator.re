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
        styles: ["head-skin1.svg"],
        selectedColor: "#FFFFFF",
        selectedStyle: "head-skin1.svg",
      },
      {
        id: "Hair",
        label: "HAIR",
        colors: hair,
        styles: [
          "bald.svg",
          "balding-black.svg",
          "bigcurls-black.svg",
          "bobbangs-black.svg",
          "bobcut-black.svg",
          "buncurls-black.svg",
          "buzzcut.svg",
          "hightopcurly-black.svg",
          "long-black.svg",
          "pigtails-black.svg",
          "shortcombover-black.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "bigcurls-black.svg",
      },
      {
        id: "FacialHair",
        label: "FACIAL HAIR",
        colors: facialhair,
        styles: ["beardmustache-black.svg", "mustache-black.svg"],
        selectedColor: "#FFFFFF",
        selectedStyle: "mustache-black.svg",
      },
      {
        id: "Body",
        label: "BODY",
        colors: body,
        styles: [
          "oval-draftbit.svg",
          "round-draftbit.svg",
          "square-draftbit.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "square-draftbit.svg",
      },
      {
        id: "Eyes",
        label: "EYES",
        colors: disabled_colors,
        styles: [
          "glasses.svg",
          "happy.svg",
          "open.svg",
          "sleepy.svg",
          "sunglasses.svg",
          "wink.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "sunglasses.svg",
      },
      {
        id: "Mouth",
        label: "MOUTH",
        colors: disabled_colors,
        styles: [
          "bigsmile.svg",
          "frown.svg",
          "lips.svg",
          "pacifier.svg",
          "smile.svg",
          "smirk.svg",
          "surprise.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "pacifier.svg",
      },
      {
        id: "Nose",
        label: "NOSE",
        colors: disabled_colors,
        styles: [
          "mediumround-skin1.svg",
          "smallround-skin1.svg",
          "wrinkles-skin1.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "smallround-skin3.svg",
      },
      {
        id: "Background",
        label: "BACKGROUND",
        colors: background,
        styles: [],
        selectedColor: "#FFFFFF",
        selectedStyle: "A",
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
    Js.log(selectedColor)
      let options =
        List.map(state.options, o => o.id == id ? {...o, selectedColor} : o);
      ReasonReact.Update({...state, options});
    },
  render: ({state, send}) => {
    let faceFeatures =
      List.map(state.options, o =>
        switch (o.id) {
        | "background" => <div />
        | _ =>
          let src = "/avatars/" ++ o.id ++ "/" ++ o.selectedStyle;
          <img
            className="AvatarGenerator-faceFeature"
            style={ReactDOMRe.Style.make(~zIndex=getZIndex("Hair"), ())}
            width="150"
            height="150"
            src
          />;
        }
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
