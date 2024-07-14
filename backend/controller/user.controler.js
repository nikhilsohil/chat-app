import { User } from "../database Schema/user.schema.js"


const findUserByEmail = async (req, res) => {
    const email = req.body.email;
    console.log(email);
    try {

        const user = await User.findOne({ email });
        if (user) {
            console.log("user found");
            return res.status(200).json({ userId: user.id, message: "user found" });
        }
        else {
            console.log("user not found");
            res.status(200).json({ userId: null, message: "Sorry, your email was not found in our database." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server Error" });
    }
}

const signup = async (req, res) => {
    const { firstname, lastname, gender, dob, email, password } = req.body;
    console.log(firstname, lastname, gender, dob, email, password);

    // Validate date of birth format
    const [day, month, year] = dob.split('-');
    const date = new Date(`${year}-${month}-${day}`);
    console.log(date);  // Output: Sun Nov 16 2003 00:00:00 GMT+0000 (Coordinated Universal Time)


    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("user already exists");
            return res.status(208).json({ message: "User already exists with this email" });
        }
        const user = await new User({ firstname, lastname, gender, dob:date, email, password }).save();
        console.log("user created");
        return res.status(200).json({ userId: user.id, message: "User created successfully" });

    } catch (err) {
        console.log(err);
    }
}

const login = async (req, res) => {
    const userId = req.body.userId;
    const password = req.body.password;
    console.log(userId, password);
    try {
        const user = await User.findById(userId);
        if (user && user.password === password) {
            console.log("user authenticated");
            return res.status(200).json({ userId: user.id, message: "User authenticated successfully" });
        }
        else {
            console.log("user not authenticated");
            res.status(203).json({ message: "Password is incorresct!" });
        }
    }
    catch (err) {
        console.log(err);
    }
}


export {
    findUserByEmail,
    login,
    signup
}