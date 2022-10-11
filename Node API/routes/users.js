import express from 'express'
import { createUser , getUser, getUserByID, deleteUser, updateUser} from '../controller/user.js';

const router = express.Router()

// making this / becuase we specified /users that every routes starts with in index.js file
router.get('/', getUser)

// routes defination for posting data 
router.post('/',createUser)

router.get('/:id',getUserByID)

router.delete('/:id',deleteUser)

router.patch('/:id' , updateUser)

export default router;
