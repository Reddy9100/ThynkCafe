const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const cors = require("cors");
const jwt = require("jsonwebtoken")
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const mongoUrl = "mongodb+srv://darlingsai244:reddy12345@cluster2.mtvl3va.mongodb.net/test?retryWrites=true&w=majority";

async function connectMongo() {
    try {
        await mongoose.connect(mongoUrl);
        console.log("MongoDB connected");
    } catch (e) {
        console.error("MongoDB connection error:", e.message);
        process.exit(1);
    }
}


connectMongo();

const userSchema = new mongoose.Schema({
    name: String,
    mail: String,
    pass: String,
});

const CoffeeData = new mongoose.Schema({
    name : String,
    type : String,
    origin : String,
    cost : Number,
    imageUrl : String,
})

const User = mongoose.model("User", userSchema);
const Coffee = mongoose.model('Coffee', CoffeeData)
app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000/");
});

// Signup data
app.post("/signUp", async (req, res) => {
    const { name, mail, pass } = req.body;

    if (!name || !mail || !pass) {
        return res.status(400).send({message:"Required All Fields"});
    }

    try {
        let existingUser = await User.findOne({ mail });
        if(existingUser){
            res.status(400).send({message:"User Already Exists"})
        }
        else{
        let hashedPass = await bcrypt.hash(pass,10)
        console.log(hashedPass)
        const newUser = new User({
            name,
            mail,
           pass: hashedPass,
        });
    
        const result = await newUser.save();
        console.log(result); 
    
        return res.status(200).send({message:"User Created Successfully..."});
    } 
}catch (e) {
        console.error("Error during sign-up:", e.message);
        return res.status(500).send("Internal Error");
    }
});


//login api//
app.post("/login", async (req, res) => {
    const { passLogin, emailLogin } = req.body;

    try {
        if (passLogin === "" || emailLogin === "") {
            return res.status(400).json({ message: "Enter All Fields Data" });
        }

        const findUser = await User.findOne({ mail: emailLogin }); 
        if (!findUser) {
            return res.status(404).json({ message: "User Is Not Registered" });
        }

        const comparePass = await bcrypt.compare(passLogin, findUser.pass);
        if (comparePass) {
            let token = jwt.sign({userEmail : findUser.mail},"Reddysai@12345",{expiresIn:30})
            console.log(token)
            return res.status(200).json({ message: "Login Successful",token});
            
        } else {
            return res.status(401).json({ message: "Invalid Password" });
        }
    }
        catch (error) {
            console.error("Error during login:", error);
            return res.status(500).send({message : "Internal Error"});
        }
    })


    // coffee data //

    app.post("/Coffees",async(req,res)=>{
        const SampleData = [
            {
              name: 'Espresso',
              type: 'Short Black',
              origin: 'Italy',
              cost: 2.50,
              imageUrl: 'https://example.com/espresso.jpg',
            },
            {
              name: 'Latte',
              type: 'Milk Coffee',
              origin: 'Italy',
              cost: 3.50,
              imageUrl: 'https://example.com/latte.jpg',
            },
            {
              name: 'Cappuccino',
              type: 'Milk Coffee',
              origin: 'Italy',
              cost: 3.00,
              imageUrl: 'https://example.com/cappuccino.jpg',
            },
            {
              name: 'Americano',
              type: 'Black Coffee',
              origin: 'United States',
              cost: 2.75,
              imageUrl: 'https://example.com/americano.jpg',
            },
            {
              name: 'Macchiato',
              type: 'Espresso with a splash of milk',
              origin: 'Italy',
              cost: 3.25,
              imageUrl: 'https://example.com/macchiato.jpg',
            },
            {
              name: 'Flat White',
              type: 'Milk Coffee',
              origin: 'Australia',
              cost: 4.00,
              imageUrl: 'https://example.com/flat-white.jpg',
            },
            {
              name: 'Affogato',
              type: 'Espresso with vanilla ice cream',
              origin: 'Italy',
              cost: 4.50,
              imageUrl: 'https://example.com/affogato.jpg',
            },
            {
              name: 'Mocha',
              type: 'Chocolate-flavored Coffee',
              origin: 'United States',
              cost: 4.25,
              imageUrl: 'https://example.com/mocha.jpg',
            },
            {
              name: 'Irish Coffee',
              type: 'Coffee with Irish whiskey',
              origin: 'Ireland',
              cost: 5.00,
              imageUrl: 'https://example.com/irish-coffee.jpg',
            },
            {
              name: 'Turkish Coffee',
              type: 'Strong and sweet coffee',
              origin: 'Turkey',
              cost: 3.75,
              imageUrl: 'https://example.com/turkish-coffee.jpg',
            },
            {
              name: 'Cuban Coffee',
              type: 'Sweetened espresso',
              origin: 'Cuba',
              cost: 3.50,
              imageUrl: 'https://example.com/cuban-coffee.jpg',
            },
            {
              name: 'Caramel Macchiato',
              type: 'Espresso with caramel and milk',
              origin: 'United States',
              cost: 4.25,
              imageUrl: 'https://example.com/caramel-macchiato.jpg',
            },
            {
              name: 'Ristretto',
              type: 'Short and strong espresso',
              origin: 'Italy',
              cost: 2.75,
              imageUrl: 'https://example.com/ristretto.jpg',
            },
            {
              name: 'Café au Lait',
              type: 'Coffee with equal parts of steamed milk',
              origin: 'France',
              cost: 3.50,
              imageUrl: 'https://example.com/cafe-au-lait.jpg',
            },
            {
              name: 'Vienna Coffee',
              type: 'Coffee with whipped cream',
              origin: 'Austria',
              cost: 4.00,
              imageUrl: 'https://example.com/vienna-coffee.jpg',
            },
            {
              name: 'Cortado',
              type: 'Espresso with a small amount of warm milk',
              origin: 'Spain',
              cost: 3.75,
              imageUrl: 'https://example.com/cortado.jpg',
            },
            {
              name: 'Greek Frappé',
              type: 'Iced coffee with foam on top',
              origin: 'Greece',
              cost: 4.50,
              imageUrl: 'https://example.com/greek-frappe.jpg',
            },
            {
              name: 'White Russian Coffee',
              type: 'Coffee with vodka and cream',
              origin: 'United States',
              cost: 5.25,
              imageUrl: 'https://example.com/white-russian-coffee.jpg',
            },
            {
              name: 'Hazelnut Latte',
              type: 'Latte with hazelnut flavor',
              origin: 'Italy',
              cost: 4.00,
              imageUrl: 'https://example.com/hazelnut-latte.jpg',
            },
            {
              name: 'Decaf Espresso',
              type: 'Short Black without caffeine',
              origin: 'Italy',
              cost: 3.00,
              imageUrl: 'https://example.com/decaf-espresso.jpg',
            },
          ];
          
        try{
          const result = await Coffee.insertMany(SampleData)
          res.status(200).send(result)
        }
        catch(e){
            res.status(400).send(e.message)
        }
    })


    //getDatafrom coffee // 

    app.get("/CoffeeData",async(Req,res)=>{
        try{
            const data = await Coffee.find({})
            res.status(200).send(data)
        }
        catch(e){
            res.status(400).send(e.message)
        }
    })