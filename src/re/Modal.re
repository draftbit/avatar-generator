[%bs.raw {|require('./Modal.css')|}];
let component = ReasonReact.statelessComponent("Modal");

let make = (~visible, ~onToggle, _children) => {
  ...component,
  render: _self => switch(visible) {
    | false => ReasonReact.null
    | _ =>
    <>
    <div className="Modal-overlay" />
    <div className="Modal-container">
      <button onClick=(_ => onToggle()) className="Modal-close">
       <img width="18" height="18" className="Modal-close--icon" src="/images/close.svg" />
      </button>
      <div className="Modal-avatar" />
      <h3 className="Modal-title"> {ReasonReact.string("Enjoy your avatar!")} </h3>
      <span className="Modal-subtitle">
        {
          ReasonReact.string(
            "Share it with your friends and see what ridiculousness they come up with!",
          )
        }
      </span>
      <div className="Modal-buttons">
        <a href="#" className="Modal-button Modal-button--twitter">
          <img className="Modal-shareIcon" width="16" height="16" src="/images/twitter.svg" />
          <span>{ReasonReact.string("Twitter")}</span>
        </a>
        <a href="#" className="Modal-button Modal-button--fb">
          <img className="Modal-shareIcon" width="16" height="16" src="/images/facebook.svg" />
          <span>{ReasonReact.string("Facebook")}</span>
        </a>
      </div>
    </div>
    </>
  }
};

let default = ReasonReact.wrapReasonForJs(~component, jsProps => make(
    ~visible=jsProps##visible,
    ~onToggle=jsProps##onToggle,
    [||]));
