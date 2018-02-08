import { Router } from 'express';
import Table from '../table';
let router = Router();

let blogs = new Table('blogs');

router.get('/:id?', (req, res) => {
    let id = req.params.id;

    if (!id) {
    blogs.getAll()
        .then((blogs) => {
            res.json(blogs);
        });
    
    } else {
        blogs.getOne(id)
            .then((blog) => {
                res.json(blog);
        });
    }
});

router.post('/', (req, res) => {
    let row = req.body;

    blogs.insert(row)
        .then((blog) => {
            res.json(blog);
            console.log(blog);
        }).catch((err) => {
            console.log(err);
        });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;

    blogs.delete(id)
        .then((blog) => {
            res.json(blog);    
        }).catch((err) => {
            console.log(err);
        });
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let row = req.body;

    blogs.update(id, row)
        .then((blog) => {
            res.json(blog);
        }).catch((err) => {
            console.log(err);
        });
})




 
export default router;