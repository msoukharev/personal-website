import { get_json, build_link, build_element } from "./util.js"

const personal_path = './data/personal.json'
const cv_path = './data/cv.json'
const projects_path = './data/projects.json'

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

const populate = () => {
  get_json(personal_path, personal => {
    document.querySelector('.name').innerHTML = personal['name']
    document.querySelector('.title').innerHTML = personal['title']
    let socials = document.querySelector('.socials')
    personal['socials'].map( el => {
      socials.append(build_link(el['name'], el['link']))
    })
  })
  get_json(cv_path, cv => {
    let w_e = document.querySelector('.work-experience')
    cv['work_experience'].map(el => {
      let c = build_card(el['name'], el['description'], el['logo'], el['link'])
      w_e.appendChild(c)
    })
  })
  get_json(projects_path, projects => {
    let pr = document.querySelector('.projects')
    projects.map(el => {
      let c = build_card(el['name'], el['description'], el['logo'], el['link'], el['tags'])
      pr.appendChild(c)
    })
  })
}

populate()
