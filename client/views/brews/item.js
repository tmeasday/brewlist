Template.brewsItem.helpers({
  formattedBrewDate: function() {
    return moment(this.brewedAt).format('ll');
  },
  
  abvPercentage: function() {
    return this.abv * 100 + '%';
  }
});