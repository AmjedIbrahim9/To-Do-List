var today = new Date();
exports.getDate = function() {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    return today.toLocaleDateString("en-US", options);
}
exports.getTime = function() {
    let options = {
        hour: "numeric",
        minute: "numeric"
    }
    return today.toLocaleTimeString("en-us", options);
}

