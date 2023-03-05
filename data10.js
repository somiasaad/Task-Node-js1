
const fs  = require("fs")


const addPerson=(fname,lname,city,age,id,subj1,subj2,subj3,subj4,subj5,subj6)=>{
    const allData =loadData()
    const allsubjects=[subj1,subj2,subj3,subj4,subj5,subj6] 
     allsubjects.reduce((a,b)=>a+b)
    // subj1+subj2+subj3+subj4+subj5+subj6
    const  allsubject=[{subj1:subj1,
        subj2:subj2,
        subj3:subj3,
        subj4:subj4,
        subj5:subj5,
        subj6:subj6,}]
    
     const sum= allsubjects.reduce((a,b)=>a+b)
     const avg = sum*100 /600
      const dplicatedData= allData.filter((obj)=>{
        return  obj.id ===id
      }
      )
     console.log(dplicatedData)

     if(dplicatedData.length==0){


     allData.push({
        id:id,
        fname:fname,
        lname:lname,
        city:city,
        age:age,
       allsubject:allsubject,
        
        sum:sum,
        avg:avg
        

     })
       
  saveAllData(allData)
}else {
  console.log('error duplicated id')
}
}
///////////////////////////////

 const loadData = () => {
   
    try {
        const dataJson = fs.readFileSync("data10.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }
//////////////////////////////////////////////////
const saveAllData=(allData) =>{
    const saveAllDatajson=JSON.stringify(allData)
    fs.writeFileSync('data10.json',saveAllDatajson)
}
//////////////////////////////////////////
const deleteDta=(id)=>{
  const allData=loadData()
  const dataToKeep = allData.filter((obj) =>{
    return obj.id !=id
  })


   console.log(dataToKeep)
   saveAllData(dataToKeep)
}

/////////////////////////////////////////////

const readData= (id)=>{
  const allData =loadData()

   const itemNeeded=allData.find((onj)=>{
    return onj.id==id
   })
   console.log(itemNeeded)

}//////////////////////////////////////////////////
const listData=(id,fname) =>{
  const allData=loadData()

 allData.forEach((obj) => {
    console.log(obj.id+" "+obj.fname+" "+obj.lname)



 })
}
// //////////////////////////////////////////////////////////



module.exports={
  addPerson,
  deleteDta,
  readData,
  listData,


}