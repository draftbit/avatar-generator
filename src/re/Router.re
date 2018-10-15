module Router = {
  type state = {current: ReasonReact.Router.url};

  type action =
    | ReceiveUrl(ReasonReact.Router.url);

  let component = ReasonReact.reducerComponent("Router");

  let make = children => {
    ...component,
    initialState: () => {
      current: ReasonReact.Router.dangerouslyGetInitialUrl(),
    },
    reducer: (action: action, _state: state) =>
      switch (action) {
      | ReceiveUrl(url) => ReasonReact.Update({current: url})
      },
    didMount: self => {
      let token =
        ReasonReact.Router.watchUrl(url => self.send(ReceiveUrl(url)));
      self.onUnmount(() => ReasonReact.Router.unwatchUrl(token));
    },
    render: self => children(self.state.current),
  };
};

module Redirect = {
  let component = ReasonReact.statelessComponent("Redirect");

  let make = (~href, _children) => {
    ...component,
    didMount: self => {
      let redirect = () => ReasonReact.Router.push(href);
      let timer = Js.Global.setTimeout(redirect, 0);
      self.onUnmount(() => Js.Global.clearTimeout(timer));
    },
    render: _self => ReasonReact.null,
  };
};

module Link = {
  let isBasicClick = e =>
    ReactEvent.Mouse.(
      !metaKey(e)
      || !altKey(e)
      || !ctrlKey(e)
      || !shiftKey(e)
      || button(e) == 0
    );

  let hasTargetAttr = e => {
    let anchor = ReactEvent.Mouse.currentTarget(e);
    anchor##target != "";
  };

  let handleClick = e =>
    ReactEvent.Mouse.(
      if (!defaultPrevented(e) && isBasicClick(e) && !hasTargetAttr(e)) {
        preventDefault(e);
        let anchor = currentTarget(e);
        ReasonReact.Router.push(anchor##href);
      }
    );
};
