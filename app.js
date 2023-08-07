const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const AppointmentBooking = require('./models/booking');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user-details', async (req, res) => {
    try {
        console.log(req.body);
        const username=req.body.username;
        const phoneNo=req.body.phoneNo;
        const email=req.body.email;
        const newBooking = await AppointmentBooking.create({
            username: username,
            phoneNo: phoneNo,
            email: email,
        });
        res.status(201).json({newUserDetail:newBooking});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error');
    }
});
app.get('/get-details', async(req,res,next)=>{
    try{
        const users=await AppointmentBooking.findAll();
        res.status(200).json({allUsers:users});
    }catch (error) {
        console.log(error);
    }
})
app.delete('/user/delete-user/:id', async (req,res,next)=>{
    const uId=req.params.id;
    await AppointmentBooking.destroy({where: {id:uId}});
    res.sendStatus(200);
})

sequelize.sync().then(() => {
    console.log('Data synced successfully');
}).catch(err => console.log(err));

const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

