let component = ReasonReact.statelessComponent("Wordmark");

let make = _children => {
  ...component,
  render: _self =>
    <a
      href="https://draftbit.com"
      title="Robust native front-end apps with usable code by Draftbit">
      <Icon name="wordmark" />
    </a>,
};
