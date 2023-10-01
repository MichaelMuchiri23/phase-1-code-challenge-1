//function for creating interface
const rl=require('readline')

const interface=rl.createInterface({
    input:process.stdin,
    output:process.stdout,
})

interface.question('Input salary and benefits',(input1,input2)=>{
    const basicSalary=input1
    const benefits=input2
    netSalaryCalculator(basicSalary,benefits)
    interface.close()
})
//function for calculating net salary
function netSalaryCalculator(basicSalary,benefits){
    let grossSalary=basicSalary+benefits
    let nssf=grossSalary*0.06
    let paye
    if(grossSalary<=24000){
        paye=grossSalary*0.1
    }
    else if(grossSalary>24000 & grossSalary<=32333){
        paye=grossSalary*0.25
    }
    else if(grossSalary>32333 & grossSalary<=500000){
        paye=grossSalary*0.3
    }
    else if(grossSalary>500000 & grossSalary<=800000){
        paye=grossSalary*0.325
    }
    else if(grossSalary>800000){
        paye=grossSalary*0.35
    }

    let nhif
    if(grossSalary<=5999){
        nhif=150
    }
    else if(grossSalary>5999 & grossSalary<=7999){
        nhif=300
    }
    else if(grossSalary>7999 & grossSalary<=11999){
        nhif=400
    }
    else if(grossSalary>11999 & grossSalary<=14999){
        nhif=500
    }
    else if(grossSalary>14999 & grossSalary<=19999){
        nhif=600
    }
    else if(grossSalary>19999 & grossSalary<=24999){
        nhif=750
    }
    else if(grossSalary>24999 & grossSalary<=29999){
        nhif=850
    }
    else if(grossSalary>29999 & grossSalary<=34999){
        nhif=900
    }
    else if(grossSalary>34999 & grossSalary<=39999){
        nhif=950
    }
    else if(grossSalary>39999 & grossSalary<=44999){
        nhif=1000
    }
    else if(grossSalary>44999 & grossSalary<=49999){
        nhif=1100
    }
    else if(grossSalary>49999 & grossSalary<=59999){
        nhif=1200
    }
    else if(grossSalary>59999 & grossSalary<=69999){
        nhif=1300
    }
    else if(grossSalary>69999 & grossSalary<=79999){
        nhif=1400
    }
    else if(grossSalary>79999 & grossSalary<=89999){
        nhif=1500
    }
    else if(grossSalary>89999 & grossSalary<=99999){
        nhif=1600
    }
    else if(grossSalary>99999){
        nhif=1700
    }

    let netSalary=grossSalary-nssf-paye-nhif
    return netSalary
 }
