/*
Bamazon Customer JS Page
I. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale.
Include the ids, names, and prices of products for sale.
II. The app should then prompt users with two messages.
   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.
III. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
IV. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.*/


   let mysql = require("mysql");
   let inquirer = require("inquirer");
   let prompt = require ("prompt");

   let connection = mysql.createConnection({
     host: "localhost",
     port: 3306,
     user: "root",
     password: null,
     database: "bamazon_db"
   });

   connection.connect(function(err) {
     if (err) throw err;
     buyBamazonProduct();
   });

   // function runSearch() {
   //   inquirer
   //     .prompt({
   //       name: "action",
   //       type: "rawlist",
   //       message: "What would you like to buy??",
   //       choices: ["How many unit quantities??"]
   //     })
   //     .then(function(answer) {
   //       switch (answer.action) {
   //       case "Find songs by artist":
   //         artistSearch();
   //         break;

        // case "//
////////////
// function buyingBamazon(){
//    connection.query(
//     "SELECT products FROM ?",
//     {
//       item_id: display.ID,
//       product_name: display.products,
//       price: display.price,
//       stock_quantity: display.stock_quantity
//     }
//   ) .then(function(display){
//     inquirer.prompt([
//       {
//         name: "item",
//         type: "input",
//         message: "what is the ID of the item you would like to purchase?"
//       },
//       {
//         name: "stock_quantity",
//         type : "input",
//         message: "How many units of the product would youlike to buy?",
//         validate: function (value){
//           if ((isNaN(value)===false)&&(value>0){
//             return true;
//           }
//           return false;
//         }
//       }
//     ],
//         function (err){
//           if (err) throw err;
//           console.log("Your order was created successfully!");
//           start();
//         }
//       );
//       });
// }


function buyBamazonProduct() {

    //if(err) throw err;
    inquirer
      .prompt([
          {
            name: "ID",
            type: "input",
            message: "what is the ID of the item you would like to purchase?"
          },
        //   {
        //   name: "itemChoice",
        //   type: "rawlist",
        //   choices: function(param){
        //     console.log(param)
        //     var choiceArray = [];
        //     for (var i = 0; i<results.length; i++) {
        //       console.log("this is the ruestls!!!!!!")
        //       console.log(results[i].product_name)
        //       // if(results[i].product_name === results.item_id)
        //       // choiceArray.push(results[i].product_name);
        //     }
        //     console.log(choiceArray);  //to CLI display array list of items
        //   }
        // },
    
          {
            name: "stock_quantity",
            type : "choice",
            message: "How many units of the product would youlike to buy?",
            validate: function (value){
              if (isNaN(value) === (false)&&(value>0)) {
                return true;
              }
                return false;
                console.log(`Please enter a valid unit quantity by integer.`);
              }
            }
          ]
        )
        .then(function(answer) {
          connection.query("SELECT * FROM products", function (err,results){
          for (var i = 0; i<results.length; i++){
            if (results[i].item_id == answer.ID){
              chosenItemID = results[i].stock_quantity;
              
              if (chosenItemID >answer.stock_quantity){
                console.log("WhAT TO GO")
              }
              else {
                 console.log("Insufficient quantity!");
              }   
              //console.log(chosenItemID)
            }
          }
        })
      }
        )}
        

      //     updateProduct();
      //     // var value = answer.quantity;
      //     // if ((isNaN(value)===false) <= chosenItemID.stock_quantity)){
      //     //       console.log(`"Total price: "+results[i].quantity * answer.price`);
      //     // }

                // }



    function updateProduct() {
      console.table("Updating all quantities...\n");
      var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [{
            choice: results[i].ID
          },
          {
            quantity: chosenItemID.stock_quantity
          }
        ],
        function(err, res) {
          console.table(res.affectedRows + " products updated!\n");
          deleteProduct();
        }
      )};

        function readProducts() {
          console.table("Selecting all products...\n");
          connection.query("SELECT name_id, product_name, price FROM products", function(err, res, fields) {
            if (err) throw err;
            console.table(res, fields); // Log said results of the SELECT statement
            connection.end();
          });
        }
        //   function ommand.querquery(command) {
        //   cy(err,results) => {
        //     {
        //      if (err) console.table(err);
        //      if console.table("Result: " + result);
        //    }
        //  }
        // });
//figure out how to make dynamic 