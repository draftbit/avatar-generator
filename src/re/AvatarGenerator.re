open Belt;

[%bs.raw {|require('./AvatarGenerator.css')|}];

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
        styles: [
          "head-skin1.svg",
          "head-skin2.svg",
          "head-skin3.svg",
          "head-skin4.svg",
          "head-skin5.svg",
          "head-skin6.svg",
        ],
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
          "balding-blonde.svg",
          "balding-brunette.svg",
          "balding-copper.svg",
          "balding-grey.svg",
          "balding-pink.svg",
          "balding-red.svg",
          "balding-teal.svg",
          "bigcurls-black.svg",
          "bigcurls-blonde.svg",
          "bigcurls-brunette.svg",
          "bigcurls-copper.svg",
          "bigcurls-grey.svg",
          "bigcurls-pink.svg",
          "bigcurls-red.svg",
          "bigcurls-teal.svg",
          "bobbangs-black.svg",
          "bobbangs-blonde.svg",
          "bobbangs-brunette.svg",
          "bobbangs-copper.svg",
          "bobbangs-grey.svg",
          "bobbangs-pink.svg",
          "bobbangs-red.svg",
          "bobbangs-teal.svg",
          "bobcut-black.svg",
          "bobcut-blonde.svg",
          "bobcut-brunette.svg",
          "bobcut-copper.svg",
          "bobcut-grey.svg",
          "bobcut-pink.svg",
          "bobcut-red.svg",
          "bobcut-teal.svg",
          "buncurls-black.svg",
          "buncurls-blonde.svg",
          "buncurls-brunette.svg",
          "buncurls-copper.svg",
          "buncurls-grey.svg",
          "buncurls-pink.svg",
          "buncurls-red.svg",
          "buncurls-teal.svg",
          "buzzcut.svg",
          "hightopcurly-black.svg",
          "hightopcurly-blonde.svg",
          "hightopcurly-brunette.svg",
          "hightopcurly-copper.svg",
          "hightopcurly-grey.svg",
          "hightopcurly-pink.svg",
          "hightopcurly-red.svg",
          "hightopcurly-teal.svg",
          "long-black.svg",
          "long-blonde.svg",
          "long-brunette.svg",
          "long-copper.svg",
          "long-grey.svg",
          "long-pink.svg",
          "long-red.svg",
          "long-teal.svg",
          "pigtails-black.svg",
          "pigtails-blonde.svg",
          "pigtails-brunette.svg",
          "pigtails-copper.svg",
          "pigtails-grey.svg",
          "pigtails-pink.svg",
          "pigtails-red.svg",
          "pigtails-teal.svg",
          "shortcombover-black.svg",
          "shortcombover-blonde.svg",
          "shortcombover-brunette.svg",
          "shortcombover-copper.svg",
          "shortcombover-grey.svg",
          "shortcombover-pink.svg",
          "shortcombover-red.svg",
          "shortcombover-teal.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "pigtails-grey.svg",
      },
      {
        id: "FacialHair",
        label: "FACIAL HAIR",
        colors: facialhair,
        styles: [
          "beardmustache-black.svg",
          "beardmustache-blonde.svg",
          "beardmustache-brunette.svg",
          "beardmustache-copper.svg",
          "beardmustache-grey.svg",
          "beardmustache-pink.svg",
          "beardmustache-red.svg",
          "beardmustache-teal.svg",
          "mustache-black.svg",
          "mustache-blonde.svg",
          "mustache-brunette.svg",
          "mustache-copper.svg",
          "mustache-grey.svg",
          "mustache-pink.svg",
          "mustache-red.svg",
          "mustache-teal.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "mustache-black.svg",
      },
      {
        id: "Body",
        label: "BODY",
        colors: body,
        styles: [
          "oval-blue.svg",
          "oval-draftbit.svg",
          "oval-green.svg",
          "oval-pink.svg",
          "oval-purple.svg",
          "oval-red.svg",
          "oval-turquoise.svg",
          "oval-yellow.svg",
          "round-blue.svg",
          "round-draftbit.svg",
          "round-green.svg",
          "round-pink.svg",
          "round-purple.svg",
          "round-red.svg",
          "round-turquoise.svg",
          "round-yellow.svg",
          "square-blue.svg",
          "square-draftbit.svg",
          "square-green.svg",
          "square-pink.svg",
          "square-purple.svg",
          "square-red.svg",
          "square-turquoise.svg",
          "square-yellow.svg",
        ],
        selectedColor: "#FFFFFF",
        selectedStyle: "square-yellow.svg",
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
          "mediumround-skin2.svg",
          "mediumround-skin3.svg",
          "mediumround-skin4.svg",
          "mediumround-skin5.svg",
          "mediumround-skin6.svg",
          "smallround-skin1.svg",
          "smallround-skin2.svg",
          "smallround-skin3.svg",
          "smallround-skin4.svg",
          "smallround-skin5.svg",
          "smallround-skin6.svg",
          "wrinkles-skin1.svg",
          "wrinkles-skin2.svg",
          "wrinkles-skin3.svg",
          "wrinkles-skin4.svg",
          "wrinkles-skin5.svg",
          "wrinkles-skin6.svg",
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
      let options =
        List.map(state.options, o => o.id == id ? {...o, selectedColor} : o);
      ReasonReact.Update({...state, options});
    },
  render: ({state, send}) => {
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
        />
      );
    <div className="AvatarGenerator-container">
      <div className="AvatarGenerator-avatar" />
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
