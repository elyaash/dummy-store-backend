import express, { Request, Response } from 'express';
const router = express.Router()

// Define a route for handling GET requests to '/users'
router.get('/', (req: Request, res: Response) => {
  // Logic to fetch users from a database or other source
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  res.json(users);
});

export default router;
