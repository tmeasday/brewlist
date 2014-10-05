BrewSchema = new SimpleSchema({
  code: { type: String },
  name: { type: String },
  brewedAt: { type: Date },
  bottledAt: { type: Date, optional: true },
  readyAt: { type: Date, optional: true },
  type: { type: String },
  abv: { type: Number, decimal: true, optional: true },
  notes: { type: String, optional: true },
  recipeUrl: { type: String, optional: true },
  averageStars: { type: Number, decimal: true }
})

Brews = new Mongo.Collection('brews');

Brews.helpers({
  updateAverageStars: function () {
    var stars = Ratings.find({brewId: this._id}).map(function(r) { return r.stars; });
    var average = _.reduce(stars, function(a,b) { return a+b; }, 0) / stars.length;
    Brews.update(this._id, {$set: {averageStars: average}});
  }
});

Brews.init = function (doc) {
  return Brews._transform(_.extend({
    brewedAt: new Date,
    averageStars: -1
  }, doc));
}