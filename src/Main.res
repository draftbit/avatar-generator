switch ReactDOM.querySelector("#root") {
| Some(el) => ReactDOM.Client.createRoot(el)->ReactDOM.Client.Root.render(<Index />)
| None => ()
}
