let utmHref = (placement: string) =>
  `https://draftbit.com?utm_source=personas&utm_medium=referral&utm_campaign=avatar-generator&utm_content=${placement}`

@react.component
let make = (~placement: string) =>
  <a href={utmHref(placement)} title="Robust native front-end apps with usable code by Draftbit">
    <Icon name="wordmark" />
  </a>
