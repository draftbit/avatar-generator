open Belt;

let component = ReasonReact.statelessComponent("App");
let make =
    (
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
      _children,
    ) => {
  ...component,
  render: _self =>
    <>
      <div className="body-bg-left" />
      <div className="body-bg-right" />
      <header className="Layout-header">
        <div className="Layout-left">
          <Wordmark />
          <h1 className="Text-title"> {ReasonReact.string("Personas")} </h1>
          <span className="Text-subtitle">
            {ReasonReact.string("Avatar Generator")}
          </span>
        </div>
        <div className="Layout-right">
          <h2 className="Text-description">
            {
              ReasonReact.string(
                "A playful avatar generator for the modern age.",
              )
            }
          </h2>
        </div>
      </header>
      <main className="Layout-main">
        <AvatarGenerator
          onChange
          onExport
        />
      </main>
      <footer className="Layout-footer">
        <div className="Layout-left">
          <span className="Text-overline">
            {ReasonReact.string("Built by")}
          </span>
          <br />
          <Wordmark />
        </div>
        <div className="Layout-right">
          <span className="Text-marketing mb-2">
            {
              ReasonReact.string(
                "Visually build robust, native mobile apps with clean, reusable code.",
              )
            }
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
        style={
          ReactDOMRe.Style.make(~textAlign="center", ~marginBottom="36px", ())
        }>
        <Button
          href="https://github.com/draftbit/avatar-generator"
          label="View on Github"
        />
      </div>
    </>,
};

let default =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(
      ~skin=jsProps##skin,
      ~skinColor=jsProps##skinColor,
      ~hair=jsProps##hair,
      ~hairColor=jsProps##hairColor,
      ~facialHair=jsProps##facialHair,
      ~facialHairColor=jsProps##facialHairColor,
      ~body=jsProps##body,
      ~bodyColor=jsProps##bodyColor,
      ~eyes=jsProps##eyes,
      ~mouth=jsProps##mouth,
      ~nose=jsProps##nose,
      ~bgColor=jsProps##bgColor,
      ~skinStyles=jsProps##skinStyles,
      ~hairStyles=jsProps##hairStyles,
      ~facialHairStyles=jsProps##facialHairStyles,
      ~bodyStyles=jsProps##bodyStyles,
      ~eyeStyles=jsProps##eyeStyles,
      ~mouthStyles=jsProps##mouthStyles,
      ~noseStyles=jsProps##noseStyles,
      ~bgStyles=jsProps##bgStyles,
      ~skinColors=jsProps##skinColors,
      ~hairColors=jsProps##hairColors,
      ~facialHairColors=jsProps##facialHairColors,
      ~bodyColors=jsProps##bodyColors,
      ~bgColors=jsProps##bgColors,
      ~disabledColors=jsProps##disabledColors,
      ~onExport=jsProps##onExport,
      ~onChange=jsProps##onChange,
      [||],
    )
  );
