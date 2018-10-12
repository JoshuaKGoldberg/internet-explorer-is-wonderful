/**
 * Runs an action, logging if an error occured.
 *
 * @param {Function} action   Action to run.
 * @remarks Instead of `console.log`, you should upload a log about the error.
 */
function logAndRethrow(action) {
    try {
        action();
    } catch (error) {
        console.log(error.stack);
        throw error;
    }
}

/**
 * Equivalent to `setInterval` that wraps its action with `logAndRethrow`.
 * 
 * @param {Function} action   Action to run.
 * @param {number} delay   How many milliseconds between each action call.
 */
function safeSetInterval(action, delay) {
    var args = [].slice.call(arguments, 2);
    setInterval(
        function () {
            logAndRethrow(function () {
                action.apply(this, args);
            });
        },
        delay
    );
}

/**
 * Equivalent to `setTimeout` that wraps its action with `logAndRethrow`.
 * 
 * @param {Function} action   Action to run.
 * @param {number} delay   How many milliseconds to delay the action by.
 */
function safeSetTimeout(action, delay) {
    var args = [].slice.call(arguments, 2);
    setTimeout(
        function () {
            logAndRethrow(function () {
                action.apply(this, args);
            });
        },
        delay
    );
}
