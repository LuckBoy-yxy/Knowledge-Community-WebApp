export const forbidScroll = el => {
  let flag = false

  el.addEventListener('touchstart', e => {
    if (el.contains(e.target)) {
      flag = true
    } else {
      flag = false
    }
  }, false)

  el.addEventListener('touchmove', e => {
    e.prop = flag
  })
}

const handler = e => {
  if (e.prop) {
    e.preventDefault()
  }
}

document.body.removeEventListener('touchmove', handler, { passive: false })
document.body.addEventListener('touchmove', handler, { passive: false })
