[%bs.raw {|require('./AvatarGenerator.css')|}];

type state = {
  count: int,
  show: bool,
};

type action =
  | Click
  | Toggle;

let component = ReasonReact.reducerComponent("AvatarGenerator");

let make = (_children) => {
  ...component,
  initialState: () => {count: 0, show: true},
  reducer: (action, state) =>
    switch (action) {
    | Click => ReasonReact.Update({...state, count: state.count + 1})
    | Toggle => ReasonReact.Update({...state, show: !state.show})
    },
  render: self => {
    let message =
      "You've clicked this " ++ string_of_int(self.state.count) ++ " times(s)";
    <div className="AvatarGenerator-container">
      <button className="Text-link">
        (ReasonReact.string("Randomize"))
      </button>
      <button onClick=(_event => self.send(Click))>
        (ReasonReact.string(message))
      </button>
      <button onClick=(_event => self.send(Toggle))>
        (ReasonReact.string("Toggle greeting"))
      </button>
      (
        self.state.show
          ? ReasonReact.string("Hey")
          : ReasonReact.null
      )
      <button className="Button-primary Text-button">(ReasonReact.string("Download Avatar"))</button>
      <div className="AvatarGenerator-footer">
        <img width="32" height="32" src="/icons/sketch.svg" />
        <div className="ml-4 mr-8">
          <span className="Text-cta-title mb-1">(ReasonReact.string("Want to make your own?"))</span><br/>
          <span className="Text-cta-subtitle">(ReasonReact.string("Get the Sketch file on Gumroad."))</span>
        </div>
        <a href="https://gum.co/PersonaByDraftbit" className="Text-link">(ReasonReact.string("Let's Go"))</a>
      </div>
    </div>;
  },
};

let default = ReasonReact.wrapReasonForJs(~component, _jsProps =>
  make([||])
);
