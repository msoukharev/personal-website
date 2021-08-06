
const personal = await (await fetch('./data/personal.json')).json()
const cv = await( await fetch('./data/cv.json')).json()
const projects = await ( await fetch('./data/projects.json')).json()

export {
  personal,
  cv,
  projects
}
