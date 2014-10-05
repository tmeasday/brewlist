RatingSchema = new SimpleSchema({
  userId: { type: String },
  brewId: { type: String },
  stars: { type: Number },
  notes: { type: String, optional: true }
});

Ratings = new Mongo.Collection('ratings');

// for now
Ratings.init = function (doc) {
  return doc;
}

Meteor.methods({
  'rateBrew': function (brewId, rating) {
    check(brewId, String);
    check(rating, Number);
    check(this.userId, String);
  
    var brew = Brews.findOne(brewId);
  
    Ratings.upsert({
      brewId: brewId,
      userId: this.userId
    }, {$set: {stars: rating}});
  
    brew.updateAverageStars();
  }
})