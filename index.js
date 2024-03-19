const receivesAFunction = (callback) => {
    // Call the callback function
    callback();
};

// Function that returns a named function
const returnsANamedFunction = () => {
    // Define a named function
    function namedFunction() {
        // Function logic here
    }
    // Return the named function
    return namedFunction;
};

// Function that returns an anonymous function
const returnsAnAnonymousFunction = () => {
    // Return an anonymous function
    return () => {
        // Function logic here
    };
};