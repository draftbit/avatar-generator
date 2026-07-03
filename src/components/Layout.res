%%raw(`
    import 'normalize.css'
    import './layout.css'
    import './fonts.css'
    import './text.css'
`)

@react.component
let make = (~children: React.element) => children
