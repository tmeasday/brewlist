Template.brewsNew.events({
  'submit': function(e, template) {
    e.preventDefault();
    
    var brew = readBrew(template)
 
    check(brew, BrewSchema);
    brew._id = Brews.insert(brew);
    Router.go('brewsShow', brew);
  }
});