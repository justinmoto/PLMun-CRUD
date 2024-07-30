const express = require('express')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
const genSalt = 10;
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))
app.use(cookieParser())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"plmun"
})
    //Select Specific ID
    app.get('/booking/:id', (req, res) => {
        const bookingId = req.params.id;
        const sql = "SELECT * FROM bookings WHERE id = ?";

        db.query(sql, [bookingId], (err, data) => {
            if(err) return res.json("Error")
                return res.json(data[0])
        });
    });

    const verifyUser = (req, res, next) => {
        const token = req.cookies.token
        if(!token){
            return res.json({Error: "You are not authenticated"})
        }else {
            jwt.verify(token, "jwt-secret-key", (err, decoded) => {
                if(err) {
                    return res.json({Error: "Token is not okey"})     
                }else {
                    req.name = decoded.name
                    next();
                }
            })
        }
    }

    app.get ('/', verifyUser, (req, res) => {
        return res.json({Status: "Success" , name: req.name})
    })
    //Get All Data
    app.get('/', (req,res) =>{
        const sql = "SELECT * FROM bookings"

        db.query(sql, (err,data) => {
            if(err) return res.json("Error")
                return res.json(data)
        })
    })

    //Insert Data to Database
    app.post('/homepage', (req, res) => {
        const sql = "INSERT INTO bookings (`Name`,`Email`,`Mobile`,`TypeOfEvents`,`Date`,`Time`,`Location`,`TalentFee`) VALUES (?)";

        const values = [
            req.body.name,
            req.body.email,
            req.body.mobile,
            req.body.typeofevents,
            req.body.date,
            req.body.time,
            req.body.location,
            req.body.talentfee
        ]

        db.query(sql, [values], (err,data) => {
            if(err) return res.json('Error')
            return res.json(data);
        })
    })

    //Delete Data
    app.delete('/delete:id', (req,res) => {
        const sql = "DELETE FROM bookings WHERE ID = ?"

        const id = req.params.id
        db.query(sql,[id], (err,data) =>{
            if(err) return res.json('Error')
            return res.json(data)
        })
    })

    // Update Data
    app.put('/update/:id', (req, res) => {
        const sql = 'UPDATE bookings SET `Name` = ?, `Email` = ?, `Mobile` = ?, `TypeOfEvents` = ?, `Date` = ?, `Time` = ?, `Location` = ?, `TalentFee` = ? WHERE ID = ?';
        const values = [
            req.body.name,
            req.body.email,
            req.body.mobile,
            req.body.typeofevents,
            req.body.date,
            req.body.time,
            req.body.location,
            req.body.talentfee
        ];

        const id = req.params.id;
        db.query(sql, [...values, id], (err, data) => {
            if (err) return res.json('Error');
            return res.json(data);
        });
    });

    //REGISTER
    app.post('/register', (req, res) => {
        const sql = "INSERT INTO users (`ClientName`,`ClientEmail`,`ClientPassword`) VALUES (?)";
        bcrypt.hash(req.body.clientpassword.toString(), genSalt, (err, hash) => {
            if(err) return res.json({Error: "Error for hassing password"})
                const values = [
                    req.body.clientname,
                    req.body.clientemail,
                    hash
                ]
                db.query(sql, [values], (err,data) => {
                    if(err) return res.json({Error: "Inserting data Error in Server"})
                    return res.json({Status: "Success"});
                })
            })
        })



    //LOGIN
    app.post('/logins', (req, res) => {
        const sql = "SELECT * FROM users WHERE ClientEmail = ?";
        db.query(sql, [req.body.clientemail], (err, data) => {
            if(err) return res.json({Error: "Login Error in Server"})
            if (data.length > 0) {
                bcrypt.compare(req.body.clientpassword.toString(), data[0].ClientPassword, (err, response) => {
                    if(err) return res.json({Error: "Password Compare Error"})
                    if (response) {
                        const name = data[0].name
                        const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: "3d"})
                        res.cookie('token', token)
                        return res.json({ Status: 'Success' });
                    } else {
                        return res.json({ Error: 'Password not Matched' });
                    }
                })
            } else {
                return res.json({ Error: "No Email Existed"});
            }
        })
    })
    
    app.get('/logout', (req,res) => {
        res.clearCookie('token')
        return res.json({Status: "Success"})
    })
app.listen(4000, () =>{
    console.log('listening')
})