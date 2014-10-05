Template.brewsEdit.events({
  'submit': function(e, template) {
    e.preventDefault();
    
    var brew = readBrew(template)
 
    Brews.update(this._id, {$set: brew});
 
    Router.go('brewsShow', this);
  }
});