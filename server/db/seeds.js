use bucket_list;
db.dropDatabase();

db.user.insert(
  [{
  description: "Go to Paris",
  completed: true}

  ,{
    description: " Learn MongoDB",
     completed: false
   },
   {
     description: "Win the lottery",
     completed: false
   }
 ]);
