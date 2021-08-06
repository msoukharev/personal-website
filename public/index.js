import { cv, personal, projects } from './info.js'

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

const build_card = (name, description, img_source = null, link = null, tags = null) => {
  let c = build_element('div', {
    'class': 'card my-3',
  })
  let b = build_element('div', {
    'class': 'card-body'
  }, null, c)
  img_source && build_element('img', {
    'class': 'card-img-top mb-3',
    'style': 'height: 4em; width: auto;',
    'alt': 'Logo',
    'src': img_source
  }, null, b)
  build_element('h5', {
    'class': 'card-title'
  }, name, b)
  build_element('p', {
    'class': 'card-text'
  }, description, b)
  link && build_element('a', {
    'href': link.link,
    'class': 'btn btn-primary',
    'target': '_blank',
  }, link.name, b)
  if(tags) {
    let d = build_element('div', {
      'class': 'my-2'
    }, null, b)
    tags.map(el => {
      build_element('span', {
        'class': 'badge bg-secondary me-1',
      }, el, d)
    })
  }
  return c
}

const populate = (cv, personal) => {
  document.querySelector('.name').innerHTML = personal['name']
  document.querySelector('.title').innerHTML = personal['title']
  let socials = document.querySelector('.socials')
  personal['socials'].map( el => {
    console.log(el)
    socials.append(build_link(el['name'], el['link']))
  })
  let w_e = document.querySelector('.work-experience')
  cv['work_experience'].map(el => {
    let c = build_card(el['name'], el['description'], el['logo'], el['link'])
    w_e.appendChild(c)
  })
  let pr = document.querySelector('.projects')
  projects.map(el => {
    let c = build_card(el['name'], el['description'], el['logo'], el['link'], el['tags'])
    pr.appendChild(c)
  })
}

populate(cv, personal)
