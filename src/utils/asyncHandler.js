const asyncHandler = (requestHandler) => {
   (err, req, res, next) => {
    promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err))
   }
}

export asyncHandler

// Another ways using try catch 

// const asyncHandler =( ) => {}

// const asyncHandler =( ) => {() =>  {}}

// const asyncHandler =( ) => {async () =>  {}} // eliminates outer curly {}
 
/*
const asyncHandler = (func) => async(req, res, next) {
    try{
        await func(req, res, next)

    }catch(error){
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/