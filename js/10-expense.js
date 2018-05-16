/**
 * MyMoney - 10-expense.js
 * Copyright (c) 2018 MING-CHIEN LEE
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fdb = new ForerunnerDB();
var db = fdb.db("MyMoneyDB");
var collection = db.collection("MyMoneyCollection");
collection.load(function () {
  var expenses = collection.find(
    {},
    {
      $orderBy: { timestamp: -1 },
      $limit: 10
    }
  );
  for (var i = 0; i < expenses.length; i++) {
    $("tbody").append("<tr><td>" + expenses[i].date + "</td><td>" + expenses[i].name + "</td><td>" + expenses[i].price + "</td></tr>");
  }
});
