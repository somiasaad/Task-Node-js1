
///////////////////////////////////////
const data10 = require("./data10")
const yargs =require("yargs")
 yargs.command({
    command:"add",
    describe:"adding yarges",
    builder:{
        fname:{
            describe:"adding the frist name",
            domindOption:true,
            type:"string"
        },
         lname:{
            describe:"adding the last namr ",
            domindOption:true,
            type:"string"
        }
 },
    handler:(x)=>{
        
        data10.addPerson(x.fname,x.lname,x.city,x.age,x.id,x.subj1,x.subj2,x.subj3,x.subj4,x.subj5,x.subj6)
    }
 })
 /////////////////////////////////////////////////////////////////
  yargs.command({
    command:"delet",
    describe:"deleting yarges",
    handler:(x)=>{
        
        data10.deleteDta(x.id)
    }})
    //////////////////////////////////////////////////////////
    yargs.command({
        command:"read",
        describe:"read data that you need",
        builder:({
           describe:"this id that i will give you ",
           domindOption:true,
           type:"string"
        }),
        handler:(x)=>{
            data10.readData(x.id)
        }
    })
    ///////////////////////////////////////////////

     yargs.command({
        command:"list",
        describe:"get data from alldata file",
       
        handler:()=>{
            data10.listData()
        }
    })


//////////////////////////////////////////////////////////

yargs.parse()