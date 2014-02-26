Template.brewsList.helpers({
  brews: function() {
    return Brews.find();
  }
});
