function requestLogs(request, response, next) {
  console.log("request happened at " + request.path);
  next();
}

module.exports = requestLogs;
