const express = require("express");

const app = express.Router();

const fixArrayId = require("../helpers")

let testimonials = [
    {
        id: 1,
        name: "- Lilitha Ngele, Colleague",
        img: "https://cdn.discordapp.com/attachments/897126668349628487/937690951592321074/20191123_151649.jpg",
        text: "Bongani is dedicated,committed and focused in whatever he puts his mind to."
    },
    {
        id: 2,
        name: "- Zharne Desember, Colleague",
        img: "https://i.postimg.cc/J4m0rmrv/zharne.jpg",
        text: "Bongani is focused and committed to his work. He delivers quality work and works well in a team."
    },
    {
        id: 3,
        name: "- Na-aim Fredricks, Colleague",
        img: "https://i.postimg.cc/pX8SZbKW/Na-aim.jpg",
        text: "One word that describes Bongani is (Confidence) he enjoys solving puzzles which is needed for coding and he has good communication skills an is always eager to learn he understands the importance of deadlines."
    },
    {
        id: 4,
        name: "- Kyle Mc Bryne, Colleague",
        img: "https://i.postimg.cc/c4mRZFS7/kyle.png",
        text: "Bongani is a very determined person knowing what he wants and how to get it done ,while also having great communication skills being liked by everyone."
    },
    {
        id: 5,
        name: "-Alex Sexwale, Lecturer",
        img: "https://i.postimg.cc/GhVcBCdb/alex.jpg",
        text: "Bongani is a focused person talent who takes pride in his work. He can achieve anything when he sets his mind to it."
    }
];

app.get('/', (req,res) => {
    res.send(testimonials);
})

app.get('/:id', (req,res) => {
    const testimonial = testimonials.find(testimonial => testimonial.id == req.params.id);
    if(!testimonial) res.status(404).send('Testimonial not found')
    res.send(testimonial)
})

app.post("/", (req, res) => {

    const testimonial = {
        id: testimonials.length + 1,
        name: req.body.name,
        img: req.body.img,
        text: req.body.text
    }
    testimonials.push(testimonial);
    res.send(testimonial);
})

app.put("/:id", (req, res) => {
    const testimonial = testimonials.find(c => c.id == parseInt(req.params.id));
    if(!testimonial) res.status(404).send({msg:"The testimonial you are trying to display is not available"});
    testimonial.name = req.body.name;
    testimonial.img = req.body.img;
    testimonial.text = req.body.text;
    res.send(testimonial);
})

app.delete("/:id", (req, res) => {
    testimonials = testimonials.filter((testimonial) => testimonial.id !== req.params.id);
    fixArrayId(testimonials);
    res.send({msg:"Testimonial has been deleted successfully"})
})

module.exports = app 