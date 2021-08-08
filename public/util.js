const build_element = (tag, attributes, innerHtml = null, parent = null) => {
  let el = document.createElement(tag)
  for (const [key, value] of Object.entries(attributes)) {
    el.setAttribute(key, value)
  }
  parent && parent.appendChild(el)
  el.innerHTML = innerHtml
  return el
}

const build_link = (name, link) => {
  let a = build_element('a', {
    'class': 'link-primary social mx-2',
    'href': link,
    'target': '_blank'
  }, name)
  return a
}

const get_json = async (path, callback = null) => {
  fetch(path)
  .then(res => {
    res.json().then(res => {
      callback && callback(res)
    }).catch(err => {
      console.log('Could not parse json ')
      console.log(err)
    })
  }).catch(err => {
    console.log('Could not fetch ' + path)
    console.log(err)
  })
}

export {
  build_element,
  build_link,
  get_json
}
