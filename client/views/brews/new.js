Template.brewsNew.events({
  'submit': function(e, template) {
    var brew = {
      name: template.find('[name=name]').value,
      code: template.find('[name=code]').value
    }
    
    Brews.insert(brew);
    Router.go('brewsList');
  }
});