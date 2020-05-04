[%bs.raw {|require('./Modal.css')|}];

[@react.component]
let make = (~visible, ~onToggle) => {
  switch (visible) {
  | false => ReasonReact.null
  | _ =>
    <>
      <div onClick={_ => onToggle()} className="Modal-overlay" />
      <div className="Modal-container">
        <button onClick={_ => onToggle()} className="Modal-close">
          <img
            width="18"
            height="18"
            className="Modal-close--icon"
            src="/images/close.svg"
          />
        </button>
        <h3 className="Modal-title">
          {ReasonReact.string("Enjoy your avatar!")}
        </h3>
        <span className="Modal-subtitle">
          {ReasonReact.string(
             "Share it with your friends and see what ridiculousness they come up with!",
           )}
        </span>
        <div className="Modal-buttons">
          <a
            target="_blank"
            rel="no-follow"
            href="https://twitter.com/intent/tweet?text=Generate+a+modern+avatar+with+Personas+by+@Draftbit&url=https%3A%2F%2Fpersonas.draftbit.com&related=draftbit,bluerssen,peterpme,daltondubya,donaldhruska"
            className="Modal-button Modal-button--twitter">
            <img
              className="Modal-shareIcon"
              width="16"
              height="16"
              src="/images/twitter.svg"
            />
            <span> {ReasonReact.string("Twitter")} </span>
          </a>
          <a
            target="_blank"
            rel="no-follow"
            href="https://www.producthunt.com/posts/personas-by-draftbit"
            className="Modal-button Modal-button--ph">
            <img
              className="Modal-shareIcon"
              width="16"
              height="16"
              src="/images/producthunt.svg"
            />
            <span> {ReasonReact.string("Product Hunt")} </span>
          </a>
        </div>
      </div>
    </>
  };
};
