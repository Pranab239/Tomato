import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add food item to the database
const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category
    })

    try {
        await food.save();
        res.json({success:true, message: "Food Item Added Successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Failed to add food item"});
    }
}


// all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Failed to fetch food items"});
    }
}

// remove food item from the database
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id); // find the image id
        fs.unlink(`uploads/${food.image}`,()=>{})   // remove the image from the folder

        await foodModel.findByIdAndDelete(req.body.id); // delete the food item from db
        res.json({success:true, message: "Food Item Removed Successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Failed to remove food item"});
    }
}

export {addFood,listFood,removeFood};