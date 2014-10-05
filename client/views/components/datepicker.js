var FORMAT = "yy-mm-dd";

Template.datepicker.rendered = function () {
  this.$('input').datepicker({
    dateFormat: FORMAT,
    defaultDate: this.data.value
  });
}

Template.datepicker.helpers({
  formattedValue: function () {
    return $.datepicker.formatDate(FORMAT, this.value);
  }
})