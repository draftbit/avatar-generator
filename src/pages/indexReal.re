[@bs.module "../externals/exportImage.js"]
external exportImageAsync: unit => unit = "default";

let defaultStyles: Types.styles = {
  skin: "Skin",
  skinColor: "B16A5B",
  hair: "Balding",
  hairColor: "E16381",
  facialHair: "Mustache",
  facialHairColor: "6C4545",
  body: "Square",
  bodyColor: "5A45FF",
  eyes: "Glasses",
  mouth: "Pacifier",
  nose: "Smallround",
  bgColor: "FFCC65",
  head: "Head",
};

let randomizeStyles = (config): Types.styles => {
  let getRandom = _list => {
    let len = Array.length(_list);
    _list[Js.Math.floor(Js.Math.random() *. float_of_int(len))];
  };

  {
    skin: "Skin",
    skinColor: getRandom(config##skinColors),
    hairColor: getRandom(config##hairColors),
    hair: getRandom(config##hairStyles),
    facialHair: getRandom(config##facialHairStyles),
    facialHairColor: getRandom(config##facialHairColors),
    body: getRandom(config##bodyStyles),
    bodyColor: getRandom(config##bodyColors),
    eyes: getRandom(config##eyeStyles),
    mouth: getRandom(config##mouthStyles),
    nose: getRandom(config##noseStyles),
    bgColor: getRandom(config##bgColors),
    head: "Head",
  };
};

[@react.component]
let make = (~data) => {
  Js.log2("DATA", data);
  let (styles, setStyles) = React.useState(_ => defaultStyles);
  let (showModal, setShowModal) = React.useState(_ => false);

  let onChange = (key, value) => {
    setStyles(styles => {
      switch (key) {
      | `SkinStyle => {...styles, skin: value}
      | `SkinColor => {...styles, skinColor: value}
      | `HairStyle => {...styles, hair: value}
      | `HairColor => {...styles, hairColor: value}
      | `FacialHairStyle => {...styles, facialHair: value}
      | `FacialHairColor => {...styles, facialHairColor: value}
      | `BodyStyle => {...styles, body: value}
      | `BodyColor => {...styles, bodyColor: value}
      | `EyesStyle => {...styles, eyes: value}
      | `MouthStyle => {...styles, mouth: value}
      | `NoseStyle => {...styles, nose: value}
      | `BgColor => {...styles, bgColor: value}
      | `Head => {...styles, head: value}
      | _ => styles
      }
    });
  };

  let randomize = () => {
    let config = data##allDataJson##edges[0]##node;
    setStyles(_ => randomizeStyles(config));
  };

  let exportImage = () => {
    setShowModal(_ => true);
    exportImageAsync();
  };

  let config = data##allDataJson##edges[0]##node;

  <LayoutRe>
    <App
      onToggleModal={_ => setShowModal(_ => false)}
      showModal
      skin={styles.skin}
      skinColor={styles.skinColor}
      hair={styles.hair}
      hairColor={styles.hairColor}
      facialHair={styles.facialHair}
      facialHairColor={styles.facialHairColor}
      body={styles.body}
      bodyColor={styles.bodyColor}
      eyes={styles.eyes}
      mouth={styles.mouth}
      nose={styles.nose}
      bgColor={styles.bgColor}
      skinStyles=config##skinStyles
      hairStyles=config##hairStyles
      facialHairStyles=config##facialHairStyles
      bodyStyles=config##bodyStyles
      eyeStyles=config##eyeStyles
      mouthStyles=config##mouthStyles
      noseStyles=config##noseStyles
      bgStyles=config##bgStyles
      skinColors=config##skinColors
      hairColors=config##hairColors
      facialHairColors=config##facialHairColors
      bodyColors=config##bodyColors
      bgColors=config##bgColors
      disabledColors=config##disabledColors
      onExport={_ => exportImage()}
      onChange
      randomize
    />
  </LayoutRe>;
};

let default = make;
