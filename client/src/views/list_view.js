const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ListView = function (container){
  this.container = container;
};

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (event) => {
    this.render(event.detail);
  } )

};

ListView.prototype.render = function (event) {
    this.container.innerHTML = '';
    const bucketArray = event;
    const itemView = new ItemView(this.container);
    bucketArray.forEach( (item) => {
      itemView.render(item);
    })
};

module.exports = ListView;
