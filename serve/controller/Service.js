import ServiceModel from "../models/ServiceModel.mjs";

const dbService = new ServiceModel();
class Service{
    showData = async (req,res)=>{
        res.set('Access-Control-Allow-Origin', '*');
        try {
            const result = await dbService.getAlLData();
            res.send(result);
            //console.log(result);
        }catch (err){
            console.log(err);
        }
    }

    showDetail = async(req,res) =>{
        res.set('Access-Control-Allow-Origin', '*');
        try {
            const result = await dbService.getDetail(req.params.id);
            res.send(result);
            console.log(result);
        }catch (err){
            console.log(err);
        }
    }
}

export default Service;