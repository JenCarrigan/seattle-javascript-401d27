# Async Callbacks

The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs, it should immediately reject the error using the callback and stop execution.

The file reader module should have the function signature (paths, callback) => undefined
On failure, the file reader module should invoke the callback with an error callback(error)
On success, the file reader module should invoke the callback with null as the first parameter and the result as the second parameter - callback(null, result)

## Discussion of exports

there is only one thing being exported. This function takes an array of paths to text file and a callback. It uses fs to read the first file, then calls the second file, and then the third file, each time pushing the contents of the file to an array. Once the array is filled with the contents of each file, it returns it back.