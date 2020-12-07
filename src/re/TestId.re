[@react.component]
let make = (~id, ~children) =>
  React.cloneElement(children, {"data-testid": id});