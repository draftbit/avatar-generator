[@bs.deriving jsConverter]
type id = [
  | [@bs.as "Skin"] `Skin
  | [@bs.as "Hair"] `Hair
  | [@bs.as "FacialHair"] `FacialHair
  | [@bs.as "Body"] `Body
  | [@bs.as "Eyes"] `Eyes
  | [@bs.as "Head"] `Head
  | [@bs.as "Mouth"] `Mouth
  | [@bs.as "Nose"] `Nose
  | [@bs.as "Background"] `Background
];

type color = [
  | `SkinColor
  | `HairColor
  | `FacialHairColor
  | `BodyColor
  | `BgColor
];

type style = [
  | `HairStyle
  | `SkinStyle
  | `FacialHairStyle
  | `BodyStyle
  | `EyesStyle
  | `MouthStyle
  | `NoseStyle
];

type key = [
  | `SkinColor
  | `HairColor
  | `FacialHairColor
  | `BodyColor
  | `BgColor
  | `HairStyle
  | `SkinStyle
  | `FacialHairStyle
  | `BodyStyle
  | `EyesStyle
  | `MouthStyle
  | `NoseStyle
];

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

type node = {
  skinStyles: array(string),
  hairStyles: array(string),
  facialHairStyles: array(string),
  bodyStyles: array(string),
  eyeStyles: array(string),
  mouthStyles: array(string),
  noseStyles: array(string),
  bgStyles: array(string),
  skinColors: array(string),
  hairColors: array(string),
  facialHairColors: array(string),
  bodyColors: array(string),
  bgColors: array(string),
  disabledColors: array(string),
};

type edge = {node};

type allDataJson = {edges: array(edge)};

type queryResType = {allDataJson};
