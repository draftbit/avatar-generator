[@react.component]
let make =
    (
      ~showModal,
      ~onToggleModal,
      ~onExport,
      ~onChange,
      ~randomize,
      ~styles: Types.styles,
      ~config: Types.config,
    ) => {
  let settings: array(Types.setting) = [|
    {
      id: `Skin,
      label: "SKIN",
      colors: config.skinColors,
      styles: config.skinStyles,
      selectedColor: styles.skinColor,
      selectedStyle: styles.skin,
    },
    {
      id: `Hair,
      label: "HAIR",
      colors: config.hairColors,
      styles: config.hairStyles,
      selectedColor: styles.hairColor,
      selectedStyle: styles.hair,
    },
    {
      id: `FacialHair,
      label: "FACIAL HAIR",
      colors: config.facialHairColors,
      styles: config.facialHairStyles,
      selectedColor: styles.facialHairColor,
      selectedStyle: styles.facialHair,
    },
    {
      id: `Body,
      label: "BODY",
      colors: config.bodyColors,
      styles: config.bodyStyles,
      selectedColor: styles.bodyColor,
      selectedStyle: styles.body,
    },
    {
      id: `Eyes,
      label: "EYES",
      colors: config.disabledColors,
      styles: config.eyeStyles,
      selectedColor: "000000",
      selectedStyle: styles.eyes,
    },
    {
      id: `Mouth,
      label: "MOUTH",
      colors: config.disabledColors,
      styles: config.mouthStyles,
      selectedColor: "000000",
      selectedStyle: styles.mouth,
    },
    {
      id: `Nose,
      label: "NOSE",
      colors: config.disabledColors,
      styles: config.noseStyles,
      selectedColor: styles.skinColor,
      selectedStyle: styles.nose,
    },
    {
      id: `Background,
      label: "BACKGROUND",
      colors: config.bgColors,
      styles: config.bgStyles,
      selectedColor: styles.bgColor,
      selectedStyle: "Background",
    },
  |];
  <>
    <div className="body-bg-left" />
    <div className="body-bg-right" />
    <header className="Layout-header">
      <div className="Layout-left">
        <Wordmark />
        <h1 className="Text-title"> {React.string("Personas")} </h1>
        <span className="Text-subtitle">
          {React.string("Avatar Generator")}
        </span>
      </div>
      <div className="Layout-right">
        <h2 className="Text-description">
          {React.string("A playful avatar generator for the modern age.")}
        </h2>
      </div>
    </header>
    <main className="Layout-main">
      <AvatarGenerator onChange onExport randomize settings />
    </main>
    <footer className="Layout-footer">
      <div className="Layout-left">
        <span className="Text-overline"> {React.string("Built by")} </span>
        <br />
        <Wordmark />
      </div>
      <div className="Layout-right">
        <span className="Text-marketing mb-2">
          {React.string(
             "Visually build robust, native mobile apps with clean, reusable code.",
           )}
        </span>
        <br />
        <IconLink
          href="https://draftbit.com"
          title="Build fobust native front-end apps with usable code using Draftbit"
          label="draftbit.com"
          icon="arrow"
        />
      </div>
    </footer>
    <div
      style={ReactDOMRe.Style.make(
        ~textAlign="center",
        ~marginBottom="36px",
        (),
      )}>
      <Button
        href="https://github.com/draftbit/avatar-generator"
        label="View on Github"
      />
    </div>
    <Modal visible=showModal onToggle=onToggleModal />
  </>;
};
