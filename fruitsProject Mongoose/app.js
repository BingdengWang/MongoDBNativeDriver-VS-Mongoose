const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
      type:String,
      required:[true, "Please check you data, no name "]
    },
    rating: {
      type:Number,
      min:1,
      max:10
    },
    review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    rating:10,
    review:"Pretty solid as a fruit"
});
// fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit:fruitSchema,
});
const pineapple = new Fruit({
  name:"Pineapple",
  score:9,
  review:"Great fruit."
});

pineapple.save();
const Person = mongoose.model("person", personSchema);
const person = new Person({
    // name:"John",
    // age: 37
    name:"Amy",
    age:12,
    favouriteFruit:pineapple
});
person.save();

// const kiwi = new Fruit({
//     name:"Kiwi",
//     score:7,
//     review:"The best fruit"
// });

// const orange = new Fruit({
//     name:"Orange",
//     score:4,
//     review:"Too four for me"
// });
//
// const banana = new Fruit({
//     name:"Banana",
//     score:3,
//     review:"Weird texture"
// });

// //Insert
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully saved all the fruits to fruitDB")
//   }
// })

// // display items
Person.find(function(err, fruits){
  if(err){
    //console.log(err);
  }
  else{
    //console.log(fruits)
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
});

// // Update one
// Fruit.updateOne({_id:"5eee7838a39abb22d00d250c"}, {name:"Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully updated the document")
//   }
// })

// // Delete one
// Fruit.deleteOne({name:"Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log("Succesfully deleted the document")
//   }
// });

// // Delete many
Person.deleteMany({name:"John"}, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("Succesfully deleted all document")
  }
});
