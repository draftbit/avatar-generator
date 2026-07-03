@module("../data/config.json")
external config: Types.config = "default"

@module("../helpers/exportImage.js")
external exportImageAsync: unit => unit = "default"

let randomizeStyles = (config: Types.config): Types.styles => {
  let getRandom = _list => {
    let len = Array.length(_list)
    _list[Js.Math.floor(Js.Math.random() *. float_of_int(len))]
  }

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
  }
}

@react.component
let make = () => {
  let (styles, setStyles) = React.useState(_ => randomizeStyles(config))
  let (showModal, setShowModal) = React.useState(_ => false)

  let onChange = (key: Types.key, value) =>
    setStyles(styles =>
      switch key {
      | #SkinStyle => {...styles, skin: value}
      | #SkinColor => {...styles, skinColor: value}
      | #HairStyle => {...styles, hair: value}
      | #HairColor => {...styles, hairColor: value}
      | #FacialHairStyle => {...styles, facialHair: value}
      | #FacialHairColor => {...styles, facialHairColor: value}
      | #BodyStyle => {...styles, body: value}
      | #BodyColor => {...styles, bodyColor: value}
      | #EyesStyle => {...styles, eyes: value}
      | #MouthStyle => {...styles, mouth: value}
      | #NoseStyle => {...styles, nose: value}
      | #BackgroundColor => {...styles, bgColor: value}
      }
    )

  let randomize = () => setStyles(_ => randomizeStyles(config))

  let exportImage = () => {
    setShowModal(_ => true)
    exportImageAsync()
  }

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
  </Layout>
}
