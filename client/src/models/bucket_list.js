const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const BucketList = function (url){
  this.url = url;
  this.request = new RequestHelper(url);
};

BucketList.prototype.bindEvents = function () {

  this.getData();

  PubSub.subscribe('ItemView:Completed-Clicked', (event) => {
    this.request.put({id: event.detail})
    .then( (showData) => {
      PubSub.publish('BucketList:data-loaded', showData);
    });
  })

  PubSub.subscribe('ItemView:Delete-Clicked', (event) => {
    this.request.delete(event.detail)
    .then( (showData) => {
      PubSub.publish('BucketList:data-loaded', showData);
    });
  })

  PubSub.subscribe("FormView:Info-Submitted", (event) => {
    const submittedInfo = {
      description: event.detail,
      completed: false
    };
    this.request.post(submittedInfo)
      .then( (showData) => {
      PubSub.publish('BucketList:data-loaded', showData);
    });

  });
};

BucketList.prototype.getData = function () {
  this.request.get()
  .then( (showData) => {
    PubSub.publish('BucketList:data-loaded', showData);
  });

};

module.exports = BucketList;
