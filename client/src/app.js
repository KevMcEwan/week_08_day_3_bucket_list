const ListView = require('./views/list_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log("Something. Whatever you fancy");

  //get list view from html
  const listContainer = document.querySelector('#list-view');
  const listView = new ListView(listContainer);
  listView.bindEvents();

  const bucketList = new BucketList('http://localhost:3000/api/bucket_list');
  bucketList.bindEvents();
  //set up list view.js from that
  //
  //list_view.bindEvents
  //setup model bindEvents

});
