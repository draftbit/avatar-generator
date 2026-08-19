%%raw(`import "./ApiDocs.css"`)

@val @scope(("navigator", "clipboard"))
external writeText: string => promise<unit> = "writeText"

module CopyableUrl = {
  @react.component
  let make = (~url: string, ~label: string, ~prefix="") => {
    let (copied, setCopied) = React.useState(_ => false)

    React.useEffect1(() => {
      setCopied(_ => false)
      None
    }, [url])

    let copyUrl = _ => {
      writeText(url)->ignore
      setCopied(_ => true)
      let _ = Js.Global.setTimeout(() => setCopied(_ => false), 2000)
    }

    <div className="ApiDocs-codeGroup">
      <code className="ApiDocs-code">
        {React.string(prefix)}
        <a className="ApiDocs-codeLink" href=url target="_blank" rel="noreferrer">
          {React.string(url)}
        </a>
      </code>
      <button
        className={copied ? "ApiDocs-copy ApiDocs-copy--copied" : "ApiDocs-copy"}
        ariaLabel={"Copy " ++ label}
        onClick=copyUrl>
        {React.string(copied ? "Copied!" : "Copy")}
      </button>
    </div>
  }
}

@react.component
let make = (~imageUrl: string, ~shareUrl: string) =>
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
        <CopyableUrl url=imageUrl label="image API URL" prefix="GET " />
        <p className="ApiDocs-note">
          {React.string("Returns the avatar as an SVG. Discover every valid style and palette at ")}
          <a className="ApiDocs-link" href="/api/options"> {React.string("/api/options")} </a>
          {React.string(", or roll the dice with ")}
          <code className="ApiDocs-inline"> {React.string("?random=1")} </code>
          {React.string(".")}
        </p>
      </div>
      <img className="ApiDocs-example" src=imageUrl alt="Avatar rendered by the image API" />
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
        <CopyableUrl url=shareUrl label="share URL" />
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
