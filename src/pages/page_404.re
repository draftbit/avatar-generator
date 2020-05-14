[@react.component]
let make = () => {
  <LayoutRe>
    <h1> {React.string("NOT FOUND")} </h1>
    <p>
      {React.string("You just hit a route that doesn't exist... the sadness.")}
    </p>
  </LayoutRe>;
};

let default = make;
