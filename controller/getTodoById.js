const Todos = require('../models/todos');

exports.getTodoById = async(req, res) =>{
    try{
        const id = req.params.id;
        const todos = await Todos.findById({_id: id})

        if(!todos){
            res.status(404)
            .json({
                success:false,
                message:"data not found with givn id"

            })
        }

        res.status(200).json({
            success:true,
            data:todos,
            message:`Todo ${id} data succesfully fetched`
        })

    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"server not working properly",
        })

    }

}