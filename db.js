const mongoose=require('mongoose');

const db_url="mongodb://abhi:abhi0796@ds135335.mlab.com:35335/zias"

mongoose.connect(db_url).catch(err=>console.log(err));

const developer_schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true,required:true},
    password:{type:String,password:""},
    contactNo:{type:String,default:""},
    ongoing_projects:[{name:String,proid:String,currentStatus:String,tasks:[{task:String,enddate:String,iscomplete:{type:Number,default:0},proid:String}],assignedOn:Date,assignedBy:String}],
    projects_completed:[{type:String}],
    skills:{type:String,default:""},
    status:{type:String,default:"Hibernation"}
})
const project_schema=new mongoose.Schema({
    name:String,
    details:String,
    developers:[{name:String,devid:String,currentStatus:String}],
    startdate:String,
    enddate:String,
    type:{type:String,default:"ongoing"}
})
const admin_schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    contactNo:{type:String}
})
const temporary_schema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    role:String
})
const admin=mongoose.model('admin',admin_schema);
const developer=mongoose.model('developers',developer_schema);
const project=mongoose.model('projects',project_schema);
const temporary=mongoose.model('unconfirmed users',temporary_schema)
 module.exports={
     developer,
     project,
     admin,
     temporary
 }