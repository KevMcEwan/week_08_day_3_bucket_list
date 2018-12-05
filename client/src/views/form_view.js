const PubSub = require('../helpers/pub_sub.js');

const FormView = function (element){
  this.element = element;
}

FormView.prototype.bindEvents = function () {
  
  this.element.addEventListener("submit", (event) => {
    event.preventDefault();
    const newItem = event.target.elements[0].value;
    PubSub.publish("FormView:Info-Submitted", newItem);
  });
};

module.exports = FormView;
