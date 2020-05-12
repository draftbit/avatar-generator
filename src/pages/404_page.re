[@react.component]
let make = () => {
  <Layout>
    <h1> {React.string("NOT FOUND")} </h1>
    <p>
      {React.string(
         "You just hit a route that doesn&#39;t exist... the
    sadness.",
       )}
    </p>
  </Layout>;
};
