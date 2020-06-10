import html2canvas from 'html2canvas'

export default async () => {
  const node = document.getElementsByClassName(
    'AvatarGenerator-pngContainer'
  )[0]

  // There is an issue with html2cavas with off-screen renders due to scroll
  // position, or something similar.
  //  - https://github.com/niklasvh/html2canvas/issues/2014
  //
  // If it is fixed, this simple workaround can be removed
  window.scroll(0, 0)
  // End workaround
  const canvas = await html2canvas(node)
  const dataUrl = canvas.toDataURL()

  const link = document.createElement('a')
  link.download = 'avatar.png'
  link.href = dataUrl

  document.body.appendChild(link)
  link.click()
  link.remove()
}
