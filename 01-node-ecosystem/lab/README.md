# Describe values of each exported module in lib folder

Greet expects a string as its only parameter. If the parameter is a valid string, it exports a new string with "Hello " appended to front.
Arithmetic expects two parameters, both numbers. If the parameters are valid numbers, it will push the added numbers into the added key of and object, and push the subtracted numbers into the subtracted key of said object. If either or both of the parameters are invalid numbers (bools, strings, etc.) it will return with a null object. Either way, an object will be exported.
