const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
};

ItemView.prototype.render = function (item) {
  const itemContainer = document.createElement('div');
  itemContainer.id = item['_id'];

  const unorderedList = document.createElement('ul');

  const descriptionElement = document.createElement('li');
  const completedElement = document.createElement('li');

  descriptionElement.textContent = item.description;
  completedElement.textContent = `Completed: ${item.completed}`;

  unorderedList.appendChild(descriptionElement);
  unorderedList.appendChild(completedElement);

  this.container.appendChild(unorderedList);

};

module.exports = ItemView;
