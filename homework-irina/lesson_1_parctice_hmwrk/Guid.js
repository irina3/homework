function s4() {
    return Math.random().toString(16).slice(2, 6);
}
function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4();
}