[@bs.deriving jsConverter]
type style = [
  | [@bs.as "Skin"] `Skin
  | [@bs.as "Hair"] `Hair
  | [@bs.as "FacialHair"] `FacialHair
  | [@bs.as "Body"] `Body
  | [@bs.as "Eyes"] `Eyes
  | [@bs.as "Head"] `Head
  | [@bs.as "Mouth"] `Mouth
  | [@bs.as "Nose"] `Nose
  | [@bs.as "Background"] `Background
  | `SkinColor
  | `HairColor
  | `FacialHairColor
  | `BodyColor
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
  id: style,
  label: string,
  colors: array(string),
  styles: array(string),
  selectedColor: string,
  selectedStyle: string,
};
