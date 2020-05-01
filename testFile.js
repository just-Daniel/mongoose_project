const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Mongoose_project', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongoose conecting");



//   User.find({}).populate('posts').exec(function(err, users) {
//     if(err) console.log(err);
//     //this will log all of the users with each of their posts 
//     else console.log(users);
//   }) 


var personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
  });
  
  var storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
  });
  
  var Story = mongoose.model('Story', storySchema);
  var Person = mongoose.model('Person', personSchema);


//   var author = new Person({
//     _id: new mongoose.Types.ObjectId(),
//     name: 'Ian Fleming',
//     age: 50
//   });
  
//   author.save(function (err) {
//     if (err) return handleError(err);
    
//     var story1 = new Story({
//       title: 'Casino Royale',
//       author: author._id    // assign the _id from the person
//     });
    
//     story1.save(function (err) {
//       if (err) return handleError(err);
//       // thats it!
//     });
//   });


Story.
  findOne({ title: 'Casino Royale' }).
  populate('author').
  exec(function (err, story) {
    if (err) return handleError(err);
    console.log('The author is %s', story.author.name);
    // prints "The author is Ian Fleming"
  });







});