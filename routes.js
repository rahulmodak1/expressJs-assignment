const express = require('express');
const router = express.Router();
const fs = require('fs');
router.use(express.json())
router.get('/student/getDetails', (req, res) => {
    fs.readFile('studData.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)

        } else {
            res.send(data)
        }
    })
})

router.post('/student/add', (req, res) => {
    const { body } = req


    fs.writeFile('studData.json', JSON.stringify(body, null, 2), (err) => {
        if (err) {
            console.log(err)
        } else {
            res.send({ result: 'Success' })
        }
    })
})
router.get('/student/studentList', (req, res) => {
    fs.readFile('studList.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = router