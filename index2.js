const rl=require('readline')
const interface=rl.createInterface({
    input:process.stdin,
    output:process.stdout
})

//function to create an interface
interface.question('Input speed',(input)=>{
    const speed=input
    speedDetector(speed)
    interface.close()
})

//function to evaluate speed and deternine whether speed limit has been passed
function speedDetector(speed){
   const speedLimit=70
   const kmhrPerDemeritPoint=5

   if (speed<=speedLimit){
      console.log("Ok")
   }
   
   const excessSpeed=speed-speedLimit
   const demeritPoints=Math.floor(excessSpeed/kmhrPerDemeritPoint)

   if (speed>speedLimit){
    console.log(demeritPoints)
   }
   if (demeritPoints>12){
    console.log("License suspended")
   }
}




