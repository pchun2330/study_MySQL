import db from "../config/database.mjs";

const connection = db.promise();
class dbServiceModel{
    getAlLData = async()=>{
        try{
            const query = "SELECT * FROM beers";
            const [response] = await connection.query(query);
            return response;
        }
        catch (err){
            console.log(err);
        }
    }
    // app.get('',( req , res ) => {
    //     connection.connect(() => {
    //         connection.query('SELECT * FROM beers', function (error, results) {
    //             if (error) {
    //                 console.log(error);
    //                 return;
    //             }
    //             res.send(results);
    //             console.log('search result:\n', results);
    //             connection.end();
    //         });
    //     });
    // });

    getDetail= async(id) =>{
        try{
            const query = "SELECT * FROM beers WHERE id = ?";
            const [response] = await connection.query(query,[id]);
            console.log(response);
            return response;
        }
        catch (err){
            console.log(err);
        }
    }
    // view every emp_id data
    // app.get('/:id',( req , res ) =>{
    //
    //     pool.getConnection((err,connection) =>{
    //         if(err) throw err
    //         console.log(`connecton id-${connection.threadId}`)
    //
    //         connection.query("SELECT * FROM beers WHERE id = ?",[req.params.id],( err, rows) =>{
    //             connection.release()
    //
    //             if(!err){
    //                 res.send(rows);
    //             }else{
    //                 console.log(err);
    //             }
    //         })
    //     })
    // })
    // app.get('/:id',( req , res ) => {
    //     connection.connect(() => {
    //         connection.query('SELECT * FROM beers WHERE id = ?',[req.params.id], function (error, results) {
    //             if (error) {
    //                 console.log(error);
    //                 return;
    //             }
    //             res.send(results);
    //             console.log('search result:\n', results);
    //
    //         });
    //     });
    //     connection.end();
    // });
}
export default dbServiceModel;