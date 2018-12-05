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

  const deleteButton = this.createDeleteButton(itemContainer.id);

  unorderedList.appendChild(descriptionElement);
  unorderedList.appendChild(completedElement);

  this.container.appendChild(unorderedList);
  this.container.appendChild(deleteButton);

  if (!item.completed) {this.createCompletedButton(itemContainer.id)}

};

ItemView.prototype.createCompletedButton = function (id) {
  const completeButton = document.createElement('button');
  completeButton.textContent = "Completed?";
  completeButton.value = id;
  this.container.appendChild(completeButton);

  completeButton.addEventListener('click', (event) => {
    PubSub.publish('ItemView:Completed-Clicked', event.target.value);
  });
};

ItemView.prototype.createDeleteButton = function (id) {
  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.value = id;
  button.textContent = "Delete!"

  button.addEventListener('click', (event) => {
    PubSub.publish('ItemView:Delete-Clicked', event.target.value);
  });

  return button;
};

module.exports = ItemView;
