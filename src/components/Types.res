@deriving(jsConverter)
type id = [
  | @as("Skin") #Skin
  | @as("Hair") #Hair
  | @as("FacialHair") #FacialHair
  | @as("Body") #Body
  | @as("Eyes") #Eyes
  | @as("Mouth") #Mouth
  | @as("Nose") #Nose
  | @as("Background") #Background
  | @as("Head") #Head
]

type color = [
  | #SkinColor
  | #HairColor
  | #FacialHairColor
  | #BodyColor
  | #BackgroundColor
]

type style = [
  | #SkinStyle
  | #HairStyle
  | #FacialHairStyle
  | #BodyStyle
  | #EyesStyle
  | #MouthStyle
  | #NoseStyle
]

type key = [color | style]

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
}

type setting = {
  id: id,
  label: string,
  colors: array<string>,
  styles: array<string>,
  selectedColor: string,
  selectedStyle: string,
}

type config = {
  skinColors: array<string>,
  hairColors: array<string>,
  facialHairColors: array<string>,
  bodyColors: array<string>,
  bgColors: array<string>,
  disabledColors: array<string>,
  skinStyles: array<string>,
  hairStyles: array<string>,
  facialHairStyles: array<string>,
  bodyStyles: array<string>,
  eyeStyles: array<string>,
  mouthStyles: array<string>,
  noseStyles: array<string>,
  bgStyles: array<string>,
}

@ocaml.doc(" Gatsby GraphQL types ")
type edge = {node: config}
type allDataJson = {edges: array<edge>}
type queryResType = {allDataJson: allDataJson}
