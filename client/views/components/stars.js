Template.stars.helpers({
  times: [0, 1, 2, 3, 4],
  highlighted: function (i, total) {
    // uggh, bloody reversal
    return i >= (4 - total) && 'highlighted';
  }
})