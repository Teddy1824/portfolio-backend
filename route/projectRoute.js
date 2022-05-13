const express = require("express");

const app = express.Router();

const fixArrayId = require("../helpers")


let projects = [
  {
    title: "First Multi-page Portfolio",
    id: "1",
    img: "https://i.postimg.cc/4xvPCstS/Screenshot-from-2022-01-26-11-37-53.png",
    desc: "",
    lang: "HTML, CSS",
    live: "https://boring-franklin-997f9f.netlify.app",
    github: "",
  },
  {
    title: "First Single-page Portfolio",
    id: "2",
    img: "https://i.postimg.cc/GtXSGr32/Screenshot-from-2022-01-26-11-33-18.png",
    desc: "",
    lang: "HTML, CSS, BOOTSTRAP",
    live: "https://brave-brown-b7c68c.netlify.app",
    github: "https://github.com/Teddy1824/Bootstrap-Portfolio",
  },
  {
    title: "Temperature Convertor",
    id: "3",
    img: "https://i.postimg.cc/xjmZdDS9/Screenshot-from-2022-01-26-11-37-05.png",
    desc: "",
    lang: "HTML, CSS BOOTSTRAP,JavaScript",
    live: "https://btempconvertor.netlify.app",
    github: "https://github.com/Teddy1824/Temp-Convertor",
  },
  {
    title: "POS Project",
    id: "4",
    img: "https://i.postimg.cc/FzfNYPm2/Screenshot-from-2022-01-26-11-43-56.png",
    desc: "",
    lang: "HTML, CSS, BOOTSTRAP, JavaScript",
    live: "https://admiring-archimedes-616e96.netlify.app",
    github: "https://github.com/Teddy1824/POS-Project",
  },
  {
    title: "Calculator",
    id: "5",
    img: "https://i.postimg.cc/4y8Hg2Pq/Screenshot-from-2022-01-26-11-37-27.png",
    desc: "",
    lang: "HTML, CSS, BOOTSTRAP, JavaScript",
    live: "https://bncalculator.netlify.app",
    github: "https://github.com/Teddy1824/Vue.calculator",
  },
  {
    title: "Mercedes Benz Intro page",
    id: "6",
    img: "https://i.postimg.cc/3NVmbx0t/Screenshot-from-2022-01-31-11-45-40.png",
    desc: "",
    lang: "HTML, CSS, BOOTSTRAP",
    live: "https://objective-pasteur-77172a.netlify.app/",
    github: "https://github.com/Teddy1824/Media-Query",
  },
  {
    title: "Reaction-Time Game",
    id: "7",
    img: "https://i.postimg.cc/SR00wfy0/Screenshot-from-2022-02-01-09-22-05.png",
    desc: "",
    lang: "HTML, CSS, Vue.js",
    live: "https://naughty-bell-8b8d72.netlify.app/",
    github: "https://github.com/Teddy1824/Vue.reaction-time",
  },
];

app.get("/", (req, res) => {
  res.send(projects);
});
// getting a single project
app.get('/:id', (req, res) => {
    const project = projects.find(project => project.id == req.params.id);
    if(!project) res.status(404).send('Project not found.')
    res.send(project)
})
// push an array
app.post("/", (req, res) => {

    const project = {
        title: req.body.title,
        id: projects.length + 1,
        img: req.body.img,
        desc: req.body.desc,
        lang: req.body.lang,
        live: req.body.live,
        github: req.body.github
    }
    projects.push(project);
    res.send(project);
})
// update item in array
app.put("/:id", (req, res) => {
    const project = projects.find(c => c.id == parseInt(req.params.id));
    if (!project) res.status(404).send({msg:'The project you are trying to find with the specified id is not available.'});
    project.title = req.body.title;
    res.send(project);
})
// remove from array
app.delete("/:id", (req, res) => {
    projects = projects.filter((project) => project.id != req.params.id);
    fixArrayId(projects);
    res.send({msg:"Project has been successfully deleted"})
})

module.exports = app;
