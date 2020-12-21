export function idValidator(req, res, next){
   const {_id} = req.body;

   if(!_id){
       return res.status(400).json({ok: false, message: 'Id is required'})
   }
   next();
}