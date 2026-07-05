%%raw(`import "./ApiDocs.css"`)

let exampleImage = "/api/avatar.svg?hair=Mohawk&hairColor=F2C94C&eyes=Hearts&mouth=Grin&body=Stripes&bodyColor=E24553&bgColor=D9CCFF"

@react.component
let make = () =>
  <section className="ApiDocs">
    <span className="ApiDocs-eyebrow"> {React.string("For developers & agents")} </span>
    <h2 className="ApiDocs-title"> {React.string("Every avatar is a URL")} </h2>
    <p className="ApiDocs-intro">
      {React.string(
        "Compose avatars programmatically — no accounts, no API keys, MIT licensed. Anything you can make in the editor above, you can make with a URL.",
      )}
    </p>
    <div className="ApiDocs-row">
      <div className="ApiDocs-rowBody">
        <span className="ApiDocs-label"> {React.string("Image API")} </span>
        <code className="ApiDocs-code">
          {React.string("GET https://personas.draftbit.com" ++ exampleImage)}
        </code>
        <p className="ApiDocs-note">
          {React.string("Returns the avatar as an SVG. Discover every valid style and palette at ")}
          <a className="ApiDocs-link" href="/api/options"> {React.string("/api/options")} </a>
          {React.string(", or roll the dice with ")}
          <code className="ApiDocs-inline"> {React.string("?random=1")} </code>
          {React.string(".")}
        </p>
      </div>
      <img className="ApiDocs-example" src=exampleImage alt="Avatar rendered by the image API" />
    </div>
    <div className="ApiDocs-row">
      <div className="ApiDocs-rowBody">
        <span className="ApiDocs-label"> {React.string("MCP server")} </span>
        <code className="ApiDocs-code">
          {React.string(
            "claude mcp add --transport http personas https://personas.draftbit.com/mcp",
          )}
        </code>
        <p className="ApiDocs-note">
          {React.string(
            "Let AI assistants generate avatars natively. Tools: generate_avatar, random_avatar, and list_avatar_options.",
          )}
        </p>
      </div>
    </div>
    <div className="ApiDocs-row">
      <div className="ApiDocs-rowBody">
        <span className="ApiDocs-label"> {React.string("Share links")} </span>
        <code className="ApiDocs-code">
          {React.string("https://personas.draftbit.com/EpCSCBgBgACA")}
        </code>
        <p className="ApiDocs-note">
          {React.string(
            "Short codes are a stateless encoding of the avatar itself — nothing stored, links never expire. Full details in ",
          )}
          <a className="ApiDocs-link" href="/llms.txt"> {React.string("llms.txt")} </a>
          {React.string(" and on ")}
          <a className="ApiDocs-link" href="https://github.com/draftbit/avatar-generator">
            {React.string("GitHub")}
          </a>
          {React.string(".")}
        </p>
      </div>
    </div>
  </section>
