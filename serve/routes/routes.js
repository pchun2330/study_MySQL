import express from 'express';
import Service from "../controller/Service.js";

const db = new Service();
const router = express.Router();

//view all data
router.get('',db.showData);
router.get('/:id',db.showDetail);

export default router;

//delete
// app.delete('/:id',( req , res ) =>{
//
//     pool.getConnection((err,connection) =>{
//         if(err) throw err
//         console.log(`connecton id-${connection.threadId}`)
//
//         connection.query("DELETE from beers WHERE id = ?",[req.params.id],( err, rows) =>{
//             connection.release()
//
//             if(!err){
//                 res.send(`employee with the Record Id: ${req.params.id} has been removed`);
//             }else{
//                 console.log(err);
//             }
//         })
//     })
// })
// app.use(express.json());// need to add when input json data in postman
// //add record
// app.post("/post",( req , res ) =>{
//
//     pool.getConnection((err,connection) =>{
//         if(err) throw err
//         console.log(`connecton id-${connection.threadId}`)
//
//         const params = req.body
//         connection.query("INSERT INTO beers SET ? ", params ,( err, rows) =>{
//             connection.release()
//
//             if(!err){
//                 res.send(`employee with the name: ${ params.name } has been added`);
//             }else{
//                 console.log(err);
//             }
//         })
//     })
// })

//update record
// app.put("/put",( req , res ) =>{
//
//     pool.getConnection((err,connection) =>{
//         if(err) throw err
//         console.log(`connecton id-${connection.threadId}`)
//
//         const { id, name, tagline, description, image} = req.body
//         connection.query("UPDATE beers SET  name = ?, tagline = ?,description = ?, image = ? WHERE id = ? ", [ name, tagline, description, image, id ] ,( err, rows) =>{
//             connection.release()
//
//             if(!err){
//                 res.send(`employee with the name: ${ name } has been update`);
//             }else{
//                 console.log(err);
//             }
//         })
//         console.log(req.body);
//     })
// })

