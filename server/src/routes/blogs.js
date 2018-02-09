import { Router } from 'express';
import Table from '../table';
let router = Router();

let blogs = new Table('blogs');
let tags = new Table('tags');
let blogTags = new Table('blogTags');

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


    let post = {
        title: req.body.title,
        content: req.body.content
    }
    
    let tag = {
        name: req.body.tag
    }

    let blogid;

    blogs.insert(post)
        .then((blog) => {
            blogid = blog.id;
            return tags.find(tag);
        }).then((tagsArray) => {
            if (tagsArray.length === 0) {
                return tags.insert(tag);
            } else {
                return tagsArray[0];
            }
        }).then((tag) => {
            return blogTags.insert({
                blogid: blogid,
                tagid: tag.id
            });
        }).then(() => {
            let ret = {
                id: blogid
            };
            res.json(ret);
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