Template.brewsShow.helpers({
  abvPercentage: function () {
    return this.abv * 100 + '%';
  },
  myRating: function () {
    var selector = {brewId: this._id, userId: Meteor.userId()};
    return Ratings.findOne(selector) || Ratings.init(selector);
  }
});

Template.brewsShow.events({
  'click .js-my-rating .js-star': function (e, template) {
    var rating = 4 - $(e.target).index();
    
    Meteor.call('rateBrew', template.data._id, rating);
  },
  
  'submit #rating-notes': function (e, template) {
    var notes = template.$('[name=notes]').val();
    
    Ratings.update(this._id, {$set: {notes: notes}});
  }
})