Template.registerHelper('formatDate', function(date) {
  return moment(date).format('ll');
});

readBrew = function (template) {
  var brew = {
    name: template.find('[name=name]').value,
    code: template.find('[name=code]').value,
    brewedAt: new Date(template.find('[name=brewedAt]').value),
    type: template.find('[name=type]').value,
    notes: template.find('[name=notes]').value,
    recipeUrl: template.find('[name=recipeUrl]').value,
    averageStars: -1
  };
  var readyAtStr = template.find('[name=readyAt]').value;
  var bottledAtStr = template.find('[name=bottledAt]').value;
  if (readyAtStr)
    brew.readyAt = new Date(readyAtStr);
  if (bottledAtStr)
    brew.bottledAt = new Date(bottledAtStr);
  
  var abvStr = template.find('[name=abv]').value;
  if (abvStr)
    brew.abv = +abvStr;
 
  return brew;
}