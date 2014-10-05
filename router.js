Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('/', {name: 'brewsList'})
  this.route('/new', {
    name: 'brewsNew',
    data: function () {
      return Brews.init();
    }
  })
  this.route('/brews/:_id', {
    name: 'brewsShow',
    data: function () {
      return Brews.findOne(this.params._id);
    }
  });
  this.route('/brews/:_id/edit', {
    name: 'brewsEdit',
    data: function () {
      return Brews.findOne(this.params._id);
    }
  });
});