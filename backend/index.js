const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//routing

/* SCHEMA
CREATE TABLE equipment(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL,
    description TEXT,
    picture_url VARCHAR(255),
    brand VARCHAR(50),
    model VARCHAR(50) 
);
*/

//get all equipment in table
app.get('/equipment', async (req, res) => {
    try {
        const allEquipment = await pool.query("SELECT * FROM equipment")

        res.json(allEquipment.rows)
    } catch (err) {
        console.log(err)
    }
})

//create new equipment entry
app.post('/equipment', async (req, res) => {
    try {
        const {name, type, description, picture_url, brand, model} = req.body

        const sanitizedValues = [
            name, 
            type, 
            description || null, 
            picture_url || null,
            brand || null, 
            model || null
        ]

        const newEquipment = await pool.query("INSERT INTO equipment(name, type, description, picture_url, brand, model) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        sanitizedValues)

        res.json(newEquipment.rows[0])
    } catch (err) {
        console.log(err)
    }
})

//get specific equipment
app.get('/equipment/:id', async (req, res) => {
    try {
        const {id} = req.params

        const equipment = await pool.query("SELECT * FROM equipment WHERE id = $1", [id])

        res.json(equipment.rows[0])
    } catch (err) {
        console.log(err)
    }
})

app.get('/equipment/type/guitar', async (req, res) => {
    try {
        const guitars = await pool.query("SELECT * FROM equipment WHERE type ILIKE 'guitar'")

        res.json(guitars.rows)
    } catch (err) {
        console.log(err)
    }
})

//delete specific equipment
app.delete('/equipment/:id', async (req, res) => {
    try {
        const {id} = req.params

        const deletedEquipment = await pool.query("DELETE FROM equipment WHERE id = $1", [id])

        res.json(`Equipment ${id} Deleted`)
    } catch (err) {
        console.log(err)
    }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})