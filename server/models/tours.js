const mongo= require('mongoose');
const Schema= mongo.Schema;

const tourSchema = new Schema({
title: {type: String, required:true,max:[120,'Please keep title within 120 characters']},
city:{type:String,required:true,lowercase:true},
street: {type: String,required:true,min:[4,'Too short. Minimum 4 Characters required']},
category: { type: String, required: true, lowercase: true },
image: { type: String, required: true },
bedrooms: Number,
shared: Boolean,
description: { type: String, required: true },
dailyRate: Number,
createdAt: { type: Date, default: Date.now }
});

//Model with Capital letter
module.exports=mongo.model('Tours',tourSchema);