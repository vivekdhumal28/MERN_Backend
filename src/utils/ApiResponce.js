class ApiResponce {
  constructor(statusCode, data, message= "Success"){
      this.statusCode = statusCode
      this.data = data
      this.message = message
      this.success = statusCode < 400
  }
}
export ApiResponce


/* Server status codes 

Informational responces = 100 - 199
Successful responces = 200 - 299
Redirectional responces = 300 - 399 more than this are Api Error
Client Error  messages = 400 - 499
Sever Error responces = 500 - 599


*/