# Thinkful-Daily-Kata-3.7

##Challenge: How many candy types are in the array?
We want to know how many candy types we have in the inventory.
Create a function called countCandyTypes that takes in the inventory array.
Return the number of objects in the array, which should be the number of types of candy.


##Challenge: How many candies are in stock?
We want to know how many units we have in total (all candies). Create a function called totalInStock that takes in:
the inventory array
Add up the inStock value from each candy.
Return the total number of candies in stock.


##Challenge: Add a new candy to the inventory
We are getting new candies to sell, and we need to add them to our inventory array.
Create a function called addCandyToInventory that takes in:
the inventory array
a new candy object
Add the new candy object to the end of the array.
Return the updated inventory array with the new candy object added to the end.


##Challenge: Should we order this candy?
We want to know whether to order a particular candy. We should make an order if the total number in stock (inStock) is less than the weekly average sold (weeklyAverage).
Create a function called shouldWeOrderThisCandy that takes in:
the inventory array
a specific type of candy (string)
The function should find the candy in the array that matches the name passed in.
When that candy is found, return true if the number inStock is less than the weeklyAverage. Otherwise, return false.
If the array doesn't have any candy with that name, return false.


##Challenge: How much of a specified candy should we order this week?
We need to know how much of a candy to order.
If we have enough in stock (if inStock is greater than weeklyAverage), we should order zero.
If we don't have enough in stock, we should order two times the weekly average for that candy.
Write a function candyOrderQuantity that takes two arguments:
the inventory array
a candy name (string)
Return the amount of that candy that we should order.
If there is no candy with that name in the array, return 0.


##Challenge: How many candies should we order in total this week?
In the last challenge (candyOrderQuantity), you wrote a function to tell how many of one particular candy to order this week.
Now, you'll write a function to tell how many of all the candies to order.
Write a function allCandyOrders that takes one argument:
the inventory array
allCandyOrders should return an order object. The keys should be the names of the candies, and the values should be the amounts to be ordered that week.
The amount to order each week should use the same formula as the candyOrderQuantity function.
