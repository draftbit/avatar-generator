[@react.component]
let make = () => {
  <Layout>
    <h1> {React.string("NOT FOUND")} </h1>
    <p>
      {React.string("You just hit a route that doesn't exist... the sadness.")}
    </p>
  </Layout>;
};

let default = make;
