Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('brewsList', {path: '/'})
  this.route('brewsNew', {path: '/new'})
});