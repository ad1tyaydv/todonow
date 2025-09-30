const { PrismaClient } = require("@prisma/client");
const express = require("express");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const { title } = req.body;

    const todos = await prisma.todos.create({
        data: {
            title,
        },
    })

    res.json(todos);
})

app.get('/todo', async(req, res) => {
    const todos = await prisma.todos.findMany();
    
    res.json(todos);
})

app.delete('/todo/:id', async(req, res) => {
    const id = parseInt(req.params.id);

    await prisma.todos.delete({
        where: {
            id
        }
    })

    res.json({
        message: "Todo deleted"
    });
})

app.put('/todo/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { title } = req.body;

    try {
        const updateTodo = await prisma.todos.update({
            where: {
                id
            },
            data: {
                title,
                isEdited: true
            }
        })

        res.json(updateTodo);

    } catch (error) {
        res.status(400).json({
            error: "Failed to edit todo"
        })
    }
})


app.listen(3000, () => {
    console.log("Listining on port 3000");
})