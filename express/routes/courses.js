const express = require('express')
const router = express.Router()
const courses = [
    { id: 1, name: "course01" },
    { id: 2, name: "course02" },
    { id: 3, name: "course03" },
  ];

// app.get('/api/courses/:id' , (req,res)=>{
//     res.send(req.params.id)
// })

// app.get('/api/posts/:year/:month' , (req,res)=>{
//     res.send(req.params)
// })

// app.get('/api/courses/:id' , (req,res)=>{

//     const course = courses.find(course => course.id === parseInt(req.params.id))
//     if(!course){
//         res.status(404).send("The course is not found with this ID")
//     }
//     res.send(course)
// })

const schema = Joi.object({
    name: Joi.string().min(3).required()
})

router.get("/", (req, res) => {
  res.send(courses);
});

// post method handling
router.post("/", (req, res) => {
  // validate methods (taking parameter one is for an input return an object ,
  const result = schema.validate(req.body);
  console.log(result);
  // // this validation is simple
  if (result.error)
    return res.status(400).send(result.error.details[0].message); // send bad request error 400

  // creating object as we have to post it to the colletion of specified route
  const course = {
    // getting courses id from length of stored object locally
    id: courses.length + 1,
    // as we have object locally stored we can access it through body and get name from its property,
    // but we have to parse the JSON object from body which is not enabled, for this call
    // app.use(express.json())
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course)
    return res.status(404).send("The course is not found with this ID");

  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(result.error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/:id", (req, res) => {
  const course = courses.find(
    (course) => course.id === parseInt(req.params.id)
  );
  if (!course) return res.status(404).send("The course is not found with this ID");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(courses);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  //  validate methods (taking parameter one is for an input return an object ,
  return schema.validate(course);
}

module.exports = router;