# Exported Values

PUSH

Parameters: Any single value
Exports: A number for the length

Valid behavior: Push to new list
Invalid behavior: return null

POP

Parameters: None
Exports: A number for the length

Valid behavior: Removes last item from list
Invalid behavior: Returns exact same list

SLICE

Parameters: A start and ending number or just a start number
Exports: A new list

Valid behavior: Returns new list with values between the start and end number
Invalid behavior: Returns same list

FILTER

Parameters: A single function
Exports: A new list

Valid behavior: Returns a new list with values that meet the requirement of the function
Invalid behavior: Returns the same list

MAP
Parameters: A single function
Exports: A new list

Valid behavior: Returns a new list with values that are edited by the function
Invalid behavior: Returns an unedited list

REDUCE

Parameters: An accumulator and an initial value or just an accumulator
Exports: A number of sum of list

Valid Behavior: Returns a number that is the sum of the list
Invalid behavior: Returns either undefined, null, or the list

