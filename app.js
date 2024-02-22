// const dropdown = document.querySelectorAll(".value-box select");
const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const fromSelect = document.getElementById("opt1")
const toSelect = document.getElementById("opt2")
const fromFlag = document.querySelector(".from-flag");
const toFlag = document.querySelector(".to-flag");
const btn = document.querySelector(".btn");
const input = document.querySelector("#box1");
const msg = document.querySelector(".msg")


  for (currcode in countryList) {

    let newOpt = document.createElement("option");
    newOpt.innerText = currcode;
     newOpt.value = currcode;
    fromSelect.append(newOpt);
  
    if (fromSelect.name === "from" && currcode === "USD" ){
        newOpt.selected = "selected"
    }
   }



  for (currcode in countryList) {
  
    let newOpt = document.createElement("option");
    newOpt.innerText = currcode;
     newOpt.value = currcode;
    toSelect.append(newOpt);
  
    if (toSelect.name == "to" && currcode == "INR" ){
        newOpt.selected = true;
    }
   }


   fromSelect.addEventListener("change", (evt) => {
     let key = evt.target.value;
     let updateFlag = countryList[key];
    //  console.log(updateFlag);
     fromFlag.src = `https://flagsapi.com/${updateFlag}/flat/64.png`;
  
   });

   

   toSelect.addEventListener("change", (evt) => {
     let key = evt.target.value;
     let updateFlag = countryList[key];
    //  console.log(updateFlag);
     toFlag.src = `https://flagsapi.com/${updateFlag}/flat/64.png`;
   });





    btn.addEventListener("click", async (evt)=>{
      evt.preventDefault();
    
      let amount = input.value;
        if (amount < 1 || amount < "") {
          alert("Please enter a valid number");
        }
        else{

     let URL = `${BASE_URL}/${fromSelect.value.toLowerCase()}/${toSelect.value.toLowerCase()}.json`;
     console.log(URL);
     let response = await fetch(URL);
     let data = await response.json();

     //   console.log(data)
     //  console.log(response)
     let rate = data[toSelect.value.toLowerCase()];
     //  console.log(rate);
     let finalData = amount * rate;
     msg.innerText = `${finalData} ${toSelect.value}`;
        }
    // console.log(amount);
    // console.log(`${fromSelect.value}, ${toSelect.value}`)
    
  })




    
  
