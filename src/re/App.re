[@react.component]
let make =
    (
      ~onToggleModal,
      ~showModal,
      ~skin,
      ~skinColor,
      ~hair,
      ~hairColor,
      ~facialHair,
      ~facialHairColor,
      ~body,
      ~bodyColor,
      ~eyes,
      ~mouth,
      ~nose,
      ~bgColor,
      ~skinStyles,
      ~hairStyles,
      ~facialHairStyles,
      ~bodyStyles,
      ~eyeStyles,
      ~mouthStyles,
      ~noseStyles,
      ~bgStyles,
      ~skinColors,
      ~hairColors,
      ~facialHairColors,
      ~bodyColors,
      ~bgColors,
      ~disabledColors,
      ~onExport,
      ~onChange,
      ~randomize,
      _children,
    ) => {
  let settings: array(AvatarGenerator._settings) = [|
    {
      id: "Skin",
      label: "SKIN",
      colors: skinColors,
      styles: skinStyles,
      selectedColor: skinColor,
      selectedStyle: skin,
    },
    {
      id: "Hair",
      label: "HAIR",
      colors: hairColors,
      styles: hairStyles,
      selectedColor: hairColor,
      selectedStyle: hair,
    },
    {
      id: "FacialHair",
      label: "FACIAL HAIR",
      colors: facialHairColors,
      styles: facialHairStyles,
      selectedColor: facialHairColor,
      selectedStyle: facialHair,
    },
    {
      id: "Body",
      label: "BODY",
      colors: bodyColors,
      styles: bodyStyles,
      selectedColor: bodyColor,
      selectedStyle: body,
    },
    {
      id: "Eyes",
      label: "EYES",
      colors: disabledColors,
      styles: eyeStyles,
      selectedColor: "000000",
      selectedStyle: eyes,
    },
    {
      id: "Mouth",
      label: "MOUTH",
      colors: disabledColors,
      styles: mouthStyles,
      selectedColor: "000000",
      selectedStyle: mouth,
    },
    {
      id: "Nose",
      label: "NOSE",
      colors: disabledColors,
      styles: noseStyles,
      selectedColor: skinColor,
      selectedStyle: nose,
    },
    {
      id: "Background",
      label: "BACKGROUND",
      colors: bgColors,
      styles: bgStyles,
      selectedColor: bgColor,
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
