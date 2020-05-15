import html2canvas from 'html2canvas'

export default async () => {
  const node = document.getElementsByClassName(
    'AvatarGenerator-pngContainer'
  )[0]
  const canvas = await html2canvas(node)
  const dataUrl = canvas.toDataURL()

  const link = document.createElement('a')
  link.download = 'avatar.png'
  link.href = dataUrl

  document.body.appendChild(link)
  link.click()
  link.remove()
}
