const e = require("express");
const fs = require("fs")
const filepath = "../express-day4/data/sys_log.txt"
const creds_logger =(request, response, next)=>{
    const originalJson = response.json;
    response.json = function(body) {
        const log_res = {
          uname: request.body.uname,
          date: Date.now(),
          action: request.originalUrl,
          status: body.status
        };
        fs.appendFileSync(filepath, JSON.stringify(log_res) + '\n');
        originalJson.call(this, body);
  };
    next();
}

module.exports = creds_logger