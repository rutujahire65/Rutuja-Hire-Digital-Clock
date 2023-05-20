// create a function that anables us to protect a perticular endpoint
//from unthentication users

const jwt = require('jsonwebtoken');


module.exports = async (request,response,next)=>{
    try{
        //get the token from authorization header
        // const token = await request.headers.authorization.split(" ")[1];

        const token = await request.headers.authorization.split(" ")[1];
        console.log({token})
        //check if the token matches the origin

        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN")
        //retrive the user details  of that logged in user
        console.log({decodedToken})
        const user = await decodedToken;

        //pass the  user down to the endpoints here
        request.user = user



        // pass down the functionality to the endpoint
        next()

    }catch(error){
        response.status(401).json({
          error:new Error("Invalid Request")  
        })
    }
}

