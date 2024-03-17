let goingNextPage1;
let goingNextPage2=false;
let firstTime = 1;
let preBox;
let selectedPlan;
let selectedPlanPrice;
let rightSlide=1;
let selectedFormat='Monthly';
let TotalMoney=0;

                                                //First Page

document.querySelector("#nextPageButton1").addEventListener("click", function (event) {
    event.preventDefault();
    goingNextPage1 = true;
    // Iterate over all input fields
    document.querySelectorAll(".formInput").forEach((input) => {
        // Check validity of each input
        if (input.checkValidity() === false) {
            // Apply styles for invalid inputs
            input.style.border = '1px solid red';
            document.querySelector(`.${input.getAttribute('name')}`).style.opacity = '1';

            // Attach change event listener to invalid inputs
            input.addEventListener("change", removing);
            goingNextPage1 = false;
        } else {
            // Remove any existing styles and event listeners for valid inputs
            input.style.border = '1px solid lightgrey';
            document.querySelector(`.${input.getAttribute('name')}`).style.opacity = '0';
            input.removeEventListener("change", removing);
        }
    });
    function removing(e) {
        // When an input becomes valid, remove the corresponding error message and reset styles
        if (e.target.checkValidity() === true) {
            document.querySelector(`.${e.target.getAttribute('name')}`).style.opacity = '0';
            e.target.style.border = '1px solid lightgrey';
            e.target.removeEventListener("change", removing);
        }
    }

                                                            //going to next page
    if (goingNextPage1) {
        document.querySelector('.containerPlan1').style.opacity = '0';
        document.querySelector('.containerPlan1').style.zIndex = '0';
        document.querySelector('.containerPlan2').style.opacity = '1';
        document.querySelector('.containerPlan2').style.zIndex = '1';
        document.querySelector(".allSteps1").querySelector("span").style.background='transparent';
        document.querySelector(".allSteps1").querySelector("span").style.color='white';
        document.querySelector(".allSteps2").querySelector("span").style.background='hsl(205.85deg 97.01% 86.86%)';
        document.querySelector(".allSteps2").querySelector("span").style.color='black';

                                                            //second page

        let threeBoxCommon = document.querySelectorAll(".threeBoxCommon");
        threeBoxCommon.forEach((box, index) => {
            box.addEventListener('click', (boxEvent) => {
                if (firstTime == 1) {
                    preBox = index;
                    boxEvent.currentTarget.style.background = 'hsl(230deg 75% 98.43%)';
                    boxEvent.currentTarget.style.border = '1px solid hsl(244.17deg 29.75% 47.45%)';
                    firstTime++;
                    goingNextPage2=true;
                    selectedPlan=boxEvent.currentTarget.querySelector("b").innerText;
                    selectedPlanPrice=boxEvent.currentTarget.querySelector(".spanBill").innerText;
                    console.log(selectedPlan);
                    console.log(selectedPlanPrice);
                }
                else {
                    boxEvent.currentTarget.style.background = 'hsl(230deg 75% 98.43%)';
                    boxEvent.currentTarget.style.border = '1px solid hsl(244.17deg 29.75% 47.45%)';
                    threeBoxCommon[preBox].style.background = 'white';
                    threeBoxCommon[preBox].style.border = '1px solid lightgray';
                    preBox = index;
                    goingNextPage2=true;
                    selectedPlan=boxEvent.currentTarget.querySelector("b").innerText;
                    selectedPlanPrice=boxEvent.currentTarget.querySelector(".spanBill").innerText;
                    console.log(selectedPlan);
                    console.log(selectedPlanPrice);
                }
            })
        })
    }
});
                                                //making Toggle button

document.querySelector(".toggleSlide").addEventListener('click',(e)=>{
    if(rightSlide===1){
     e.currentTarget.querySelector('span').style.marginLeft=`auto`;
     e.currentTarget.querySelector('span').style.marginRight=`2px`;
     selectedFormat="Yearly";
     Formatcheck(selectedFormat);
     rightSlide++;
    }
    else{
        e.currentTarget.querySelector('span').style.marginRight=`auto`;
        e.currentTarget.querySelector('span').style.marginLeft=`2px`;
        rightSlide=1;
        selectedFormat="Monthly"
        Formatcheck(selectedFormat);
    }
})
function Formatcheck(selectedFormat)
{
    if(selectedFormat==="Yearly"){
        document.querySelectorAll('.month2free').forEach((e)=>{
            e.style.opacity='1';
        })
        let serviceProviderSpan= document.querySelectorAll('.serviceProviderSpan');
        serviceProviderSpan[0].innerText=`+$10/yr`;
        serviceProviderSpan[1].innerText=`+$20/yr`;
        serviceProviderSpan[2].innerText=`+$20/yr`;
        let spanBill=document.querySelectorAll('.spanBill');
        let billIncrease=9;
        spanBill.forEach((e)=>{
             e.innerText=`$${billIncrease*10}/yr`
             billIncrease=billIncrease+3;
        })   
    }
    else{
        document.querySelectorAll('.month2free').forEach((e)=>{
            e.style.opacity='0';
        })
        let serviceProviderSpan= document.querySelectorAll('.serviceProviderSpan');
        serviceProviderSpan[0].innerText=`+$1/mo`;
        serviceProviderSpan[1].innerText=`+$2/mo`;
        serviceProviderSpan[2].innerText=`+$2/mo`;
        let spanBill=document.querySelectorAll('.spanBill');
        let billIncrease=9;
        spanBill.forEach((e)=>{
             e.innerText=`$${billIncrease}/mo`
             billIncrease=billIncrease+3;
        }) 
    }
}

                                                //third Page
                                              
document.querySelector("#nextPageButton2").addEventListener('click',()=>{
    if(goingNextPage2===true){
        document.querySelector('.containerPlan2').style.opacity = '0';
        document.querySelector('.containerPlan2').style.zIndex = '0';
        document.querySelector('.containerPlan3').style.opacity = '1';
        document.querySelector('.containerPlan3').style.zIndex = '1'; 
        document.querySelector(".allSteps2").querySelector("span").style.background='transparent';
        document.querySelector(".allSteps2").querySelector("span").style.color='white';
        document.querySelector(".allSteps3").querySelector("span").style.background='hsl(205.85deg 97.01% 86.86%)';
        document.querySelector(".allSteps3").querySelector("span").style.color='black';
    }
})       
document.querySelectorAll('.checkboxCommon').forEach((e)=>{
    e.addEventListener("click",(checkBoxObj)=>{
        checkBoxObj.target.parentElement.style.border='1px solid hsl(244.17deg 29.75% 47.45%)';
        checkBoxObj.target.parentElement.style.backgroundColor='hsl(230deg 75% 98.43%)';
    })
})     
let checkBox1;
let checkBox2;
let checkBox3;                 
document.querySelector("#nextPageButton3").addEventListener('click',()=>{
        checkBox1=document.querySelector("#checkbox1");
        checkBox2=document.querySelector("#checkbox2");
        checkBox3=document.querySelector("#checkbox3");
    if(checkBox1.checked||checkBox2.checked||checkBox3.checked){
        document.querySelector('.containerPlan3').style.opacity = '0';
        document.querySelector('.containerPlan3').style.zIndex = '0';
        document.querySelector('.containerPlan4').style.opacity = '1';
        document.querySelector('.containerPlan4').style.zIndex = '1'; 
        document.querySelector(".allSteps3").querySelector("span").style.background='transparent';
        document.querySelector(".allSteps3").querySelector("span").style.color='white';
        document.querySelector(".allSteps4").querySelector("span").style.background='hsl(205.85deg 97.01% 86.86%)';
        document.querySelector(".allSteps4").querySelector("span").style.color='black';
    }

    if(selectedFormat==='Yearly'){
        document.querySelector(".itemsNameTotal1").querySelector("b").innerText=`${selectedPlan}(Yearly)`;
        document.querySelector(".itemsNameTotal1").querySelector("span").innerText=`${selectedPlanPrice}`;
   }
   else{
       document.querySelector(".itemsNameTotal1").querySelector("b").innerText=`${selectedPlan}(Monthly)`;
       document.querySelector(".itemsNameTotal1").querySelector("span").innerText=`${selectedPlanPrice}`;
   }
    if(selectedFormat==='Yearly'){
        let numericPart = selectedPlanPrice.match(/\d+/)[0];
        TotalMoney=TotalMoney+parseInt(numericPart);
    }
    else{
        let numericPart = selectedPlanPrice.match(/\d+/)[0];
        TotalMoney=TotalMoney+parseInt(numericPart);
    }

    if(checkBox1.checked){
        document.querySelector(`.${checkBox1.getAttribute("name")}`).style.display='flex';
        if(selectedFormat==='Yearly'){
            document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText='+$10/yr';
            document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText='+$10/yr';
            let checkBox1Numeric=document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox1NumericPart=parseInt(checkBox1Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox1NumericPart;
        }
        else{
            document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText='+$1/mo'; 
            let checkBox1Numeric=document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox1NumericPart=parseInt(checkBox1Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox1NumericPart;
        }
    }
    if(checkBox2.checked){
        document.querySelector(`.${checkBox2.getAttribute("name")}`).style.display='flex';
        if(selectedFormat==='Yearly'){
            document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText='+$20/yr';
            let checkBox2Numeric=document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox2NumericPart=parseInt(checkBox2Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox2NumericPart;
        }
        else{
            document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText='+$2/mo'; 
            let checkBox2Numeric=document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox2NumericPart=parseInt(checkBox2Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox2NumericPart;
        }
    }
    if(checkBox3.checked){
        document.querySelector(`.${checkBox3.getAttribute("name")}`).style.display='flex';
        if(selectedFormat==='Yearly'){
            document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText='+$20/yr';
            document.querySelector(`.${checkBox3.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText='+$20/yr';
            let checkBox3Numeric=document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox3NumericPart=parseInt(checkBox3Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox3NumericPart;
        }
        else{
            document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText='+$2/mo';
            document.querySelector(`.${checkBox3.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText='+$2/mo';
            let checkBox3Numeric=document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox3NumericPart=parseInt(checkBox3Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox3NumericPart; 
        }
    }
    if(selectedFormat==='Yearly'){
        document.querySelector(".totalCheck").querySelector("p").innerText=`Total (per year)`;
        document.querySelector(".totalCheck").querySelector("span").innerText=`+$${TotalMoney}/yr`;
        TotalMoney=0;
    }
    else{
        document.querySelector(".totalCheck").querySelector("p").innerText=`Total (per month)`;
        document.querySelector(".totalCheck").querySelector("span").innerText=`+$${TotalMoney}/mo`;
        TotalMoney=0;
    }

})     

                                                    //Page 4


let newSelectedFormat=selectedFormat;
document.querySelector("u").addEventListener('click',()=>{
    if(newSelectedFormat==='Monthly'){
        let numericPart = selectedPlanPrice.match(/\d+/)[0];
        numericPart=numericPart*10;
        TotalMoney=TotalMoney+parseInt(numericPart);
        document.querySelector(".itemsNameTotal1").querySelector("b").innerText=`${selectedPlan}(Yearly)`;
        document.querySelector(".itemsNameTotal1").querySelector("span").innerText=`$${numericPart}/yr`;
        if(checkBox1.checked){
            document.querySelector(`.${checkBox1.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText='+$10/yr';
            let checkBox1Numeric=document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox1NumericPart=parseInt(checkBox1Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox1NumericPart;
        }
        if(checkBox2.checked){
            document.querySelector(`.${checkBox2.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText='+$20/yr';
            let checkBox2Numeric=document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox2NumericPart=parseInt(checkBox2Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox2NumericPart;
        }
        if(checkBox3.checked){
            document.querySelector(`.${checkBox3.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText='+$20/yr';
            let checkBox3Numeric=document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox3NumericPart=parseInt(checkBox3Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox3NumericPart;
        }
        document.querySelector(".totalCheck").querySelector("p").innerText=`Total (per year)`;
        document.querySelector(".totalCheck").querySelector("span").innerText=`+$${TotalMoney}/yr`;
        newSelectedFormat='Yearly';
        TotalMoney=0;
    }
    else{
        let numericPart = selectedPlanPrice.match(/\d+/)[0];
        document.querySelector(".itemsNameTotal1").querySelector("b").innerText=`${selectedPlan}(Monthly)`;
        document.querySelector(".itemsNameTotal1").querySelector("span").innerText=`$${numericPart}/mo`;
        TotalMoney=TotalMoney+parseInt(numericPart);
        if(checkBox1.checked){
            document.querySelector(`.${checkBox1.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText='+$1/mo';
            let checkBox1Numeric=document.querySelector(`.${checkBox1.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox1NumericPart=parseInt(checkBox1Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox1NumericPart;
        }
        if(checkBox2.checked){
            document.querySelector(`.${checkBox2.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText='+$2/mo';
            let checkBox2Numeric=document.querySelector(`.${checkBox2.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox2NumericPart=parseInt(checkBox2Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox2NumericPart;
        }
        if(checkBox3.checked){
            document.querySelector(`.${checkBox3.getAttribute("name")}`).style.display='flex';
            document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText='+$2/mo';
            let checkBox3Numeric=document.querySelector(`.${checkBox3.getAttribute("name")}`).querySelector('span').innerText;
            let checkBox3NumericPart=parseInt(checkBox3Numeric.match(/\d+/)[0]);
            TotalMoney=TotalMoney+checkBox3NumericPart;
        }
        document.querySelector(".totalCheck").querySelector("p").innerText=`Total (per month)`;
        document.querySelector(".totalCheck").querySelector("span").innerText=`+$${TotalMoney}/mo`;
        TotalMoney=0;
        newSelectedFormat='Monthly';
    }
    
})                                          

                                                //fifth page showing

document.querySelector(".confirmButton").addEventListener('click',()=>{
    document.querySelector('.containerPlan4').style.opacity = '0';
    document.querySelector('.containerPlan4').style.zIndex = '0';
    document.querySelector('.containerPlan5').style.opacity = '1';
    document.querySelector('.containerPlan5').style.zIndex = '1'; 
    document.querySelector('.allSteps4').style.backgroundColor='transparent';
    document.querySelector('.allSteps4').style.color='white';
    console.log(document.querySelector('.allSteps4'));
}) 
                                                //going back

document.querySelectorAll(".goBack").forEach((e)=>{
    e.addEventListener('click',(backObj)=>{
        currPageNumber=backObj.target.getAttribute("name")
        document.querySelector(`.containerPlan${currPageNumber}`).style.opacity = '0';
        document.querySelector(`.containerPlan${currPageNumber}`).style.zIndex = '0';
        document.querySelector(`.containerPlan${currPageNumber-1}`).style.opacity = '1';
        document.querySelector(`.containerPlan${currPageNumber-1}`).style.zIndex = '1'; 
        document.querySelector(`.allSteps${currPageNumber}`).querySelector("span").style.background='transparent';
        document.querySelector(`.allSteps${currPageNumber}`).querySelector("span").style.color='white';
        document.querySelector(`.allSteps${currPageNumber-1}`).querySelector("span").style.background='hsl(205.85deg 97.01% 86.86%)';
        document.querySelector(`.allSteps${currPageNumber-1}`).querySelector("span").style.color='black';
    })
})