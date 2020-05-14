[@bs.module "gatsby"] external useStaticQuery: string => 'a = "useStaticQuery";

/* raw import used because no Reason support for Gatsby graphql queries */
%bs.raw
{| import  {graphql}  from "gatsby" |};

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

let randomizeStyles = (config: Types.config): Types.styles => {
  let getRandom = _list => {
    let len = Array.length(_list);
    _list[Js.Math.floor(Js.Math.random() *. float_of_int(len))];
  };

  {
    skin: "Skin",
    skinColor: getRandom(config.skinColors),
    hairColor: getRandom(config.hairColors),
    hair: getRandom(config.hairStyles),
    facialHair: getRandom(config.facialHairStyles),
    facialHairColor: getRandom(config.facialHairColors),
    body: getRandom(config.bodyStyles),
    bodyColor: getRandom(config.bodyColors),
    eyes: getRandom(config.eyeStyles),
    mouth: getRandom(config.mouthStyles),
    nose: getRandom(config.noseStyles),
    bgColor: getRandom(config.bgColors),
    head: "Head",
  };
};

[@react.component]
let make = () => {
  let data: Types.queryResType =
    useStaticQuery(
      [%bs.raw
        {|
           graphql`
  query ConfigQuery {
    allDataJson {
      edges {
        node {
          skinStyles
          skinColors
          hairStyles
          hairColors
          facialHairStyles
          facialHairColors
          bodyStyles
          bodyColors
          eyeStyles
          mouthStyles
          noseStyles
          bgStyles
          bgColors
          disabledColors
        }
      }
    }
  }
   `
    |}
      ],
    );

  let (styles, setStyles) = React.useState(_ => defaultStyles);
  let (showModal, setShowModal) = React.useState(_ => false);

  let onChange = (key: Types.key, value) => {
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
      | `BackgroundColor => {...styles, bgColor: value}
      }
    });
  };

  let randomize = () => {
    let config = data.allDataJson.edges[0].node;
    setStyles(_ => randomizeStyles(config));
  };

  let exportImage = () => {
    setShowModal(_ => true);
    exportImageAsync();
  };

  let config = data.allDataJson.edges[0].node;

  <Layout>
    <App
      showModal
      styles
      config
      onChange
      randomize
      onToggleModal={_ => setShowModal(_ => false)}
      onExport={_ => exportImage()}
    />
  </Layout>;
};

let default = make;
