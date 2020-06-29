[@bs.deriving jsConverter]
type id = [
  | [@bs.as "Skin"] `Skin
  | [@bs.as "Hair"] `Hair
  | [@bs.as "FacialHair"] `FacialHair
  | [@bs.as "Body"] `Body
  | [@bs.as "Eyes"] `Eyes
  | [@bs.as "Mouth"] `Mouth
  | [@bs.as "Nose"] `Nose
  | [@bs.as "Background"] `Background
  | [@bs.as "Head"] `Head
];

type color = [
  | `SkinColor
  | `HairColor
  | `FacialHairColor
  | `BodyColor
  | `BackgroundColor
];

type style = [
  | `SkinStyle
  | `HairStyle
  | `FacialHairStyle
  | `BodyStyle
  | `EyesStyle
  | `MouthStyle
  | `NoseStyle
];

type key = [color | style];

type styles = {
  skin: string,
  skinColor: string,
  hair: string,
  hairColor: string,
  facialHair: string,
  facialHairColor: string,
  body: string,
  bodyColor: string,
  eyes: string,
  mouth: string,
  nose: string,
  bgColor: string,
  head: string,
};

type setting = {
  id,
  label: string,
  colors: array(string),
  styles: array(string),
  selectedColor: string,
  selectedStyle: string,
};

type config = {
  skinColors: array(string),
  hairColors: array(string),
  facialHairColors: array(string),
  bodyColors: array(string),
  bgColors: array(string),
  disabledColors: array(string),
  skinStyles: array(string),
  hairStyles: array(string),
  facialHairStyles: array(string),
  bodyStyles: array(string),
  eyeStyles: array(string),
  mouthStyles: array(string),
  noseStyles: array(string),
  bgStyles: array(string),
};

/** Gatsby GraphQL types */
type edge = {node: config};
type allDataJson = {edges: array(edge)};
type queryResType = {allDataJson};
