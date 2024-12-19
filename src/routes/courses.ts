import express, { Request, Response } from 'express';
import Joi from 'joi';
import CourseType from "../types/course";

const router = express.Router()

let courses: CourseType[] = [];

router.get("/",(req,res) => {
    res.status(200).send(courses);
});

// Define a route for handling GET requests to '/users'
router.get('/', (req: Request, res: Response) => {
    // Logic to fetch users from a database or other source
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ];
  
    res.json(users);
  });

  
router.post("/",(req: Request, res: Response) => {
    let {error} = validateCourse(req.body)

    if (error) {
        res.status(400).send(error.details[0].message)
    }
    let course = {
        id : courses.length + 1,
        ...req.body
    }
    courses.push(course);
    res.status(200).send(course);
})


function validateCourse(course?: CourseType) {
    const schema = Joi.object({
        name : Joi.string().required(),
        duration: Joi.string().required()
    })

    return schema.validate(course);
}

export default router;