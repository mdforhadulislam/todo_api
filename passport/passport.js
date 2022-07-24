const passport = require("passport")
const PassportLocal = require("passport-local").Strategy();

passport.use(
   new PassportLocal((username,password,done)=>{
      
   })
)