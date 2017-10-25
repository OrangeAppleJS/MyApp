/*!
 *    MyMoney - search.js v.1.0
 *    Copyright (C) 2017 MING-CHIEN LEE
 * 
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License as published
 *    by the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 * 
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 * 
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 *    Copyright Contact Information
 *    MING-CHIEN LEE <edisonlee@edisonlee55.com> (https://www.edisonlee55.com/#contact)
 */
var fdb = new ForerunnerDB();
var db = fdb.db("MyMoneyDB");
var collection = db.collection("MyMoneyCollection");
collection.load();
$("#submit").on("click", function () {
  var searchMode = $("input[name='mode']:checked").val();
  var from = "", to = "";
  if (searchMode == 'thisMonth') {
    var date = new Date();
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;
    if (month <= 9) {
      month = "0" + month;
    }
    from = year + "-" + month + "-" + "01";
    to = year + "-" + month + "-" + "31";
  } else if (searchMode == 'period') {
    from = $("#from").val();
    to = $("#to").val();
  }
  var category = {
    "Food": 0,
    "Clothing": 0,
    "Transportation": 0,
    "Entertainment": 0
  };
  var total = 0;
  var expenses = collection.find(
    {
      date: {
        $gte: from,
        $lte: to
      }
    }, {
      $orderBy: { date: 1 }
    }
  );
  $("tbody").html("");
  if (expenses.length === 0) {
    $("tbody").append("<tr><td colspan='3' style='text-align:center'>No Data</td></tr>");
  } else {
    for (var i = 0; i < expenses.length; i++) {
      $("#expenses tbody").append("<tr><td>" + expenses[i].date + "</td><td>" + expenses[i].name + "</td><td>" + expenses[i].price + "</td></tr>");
      category[expenses[i].category] += expenses[i].price / 1;
      total += expenses[i].price / 1;
    }
    for (key in category) {
      var price = category[key];
      $("#category tbody").append("<tr><td>" + key + "</td><td>" + price + "</td><td>" + Math.round(price / total * 100) + "%" + "</td></tr>");
    }
    $("#category tbody").append("<tr><td colspan='3'>Total: " + total + "</td></tr>");
  }
});