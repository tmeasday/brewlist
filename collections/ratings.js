RatingSchema = new SimpleSchema({
  userId: { type: String },
  brewId: { type: String },
  stars: { type: Number },
  notes: { type: String, optional: true }
});

Ratings = new Mongo.Collection('ratings');