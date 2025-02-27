
const inputs = document.querySelectorAll(".panel input");

inputs.forEach(input => {
  input.addEventListener("input", e => {
    const unit = e.target.id;
    let v = parseFloat(e.target.value);
    if (unit === "celsius") {
      document.getElementById("fahrenheit").value = (v * 9 / 5 + 32).toFixed(4);
      document.getElementById("kelvin").value = (v + 273.15).toFixed(4);
    } else if (unit === "fahrenheit") {
      document.getElementById("celsius").value = ((v - 32) * 5 / 9).toFixed(4);
      document.getElementById("kelvin").value = ((v - 32) * 5 / 9 + 273.15).toFixed(4);
    }else if (unit === "kelvin") {
        document.getElementById("celsius").value = parseInt(v - 273.15);
        document.getElementById("fahrenheit").value = ((v - 273.15) * 9 / 5 + 32).toFixed(4);
      }
  });
});
/*const inputs=document.querySelectorAll(".panel input");
const c=document.querySelectorAll("#celsius");
const f=document.querySelectorAll("#fahrenheit");
const k=document.querySelectorAll("#kelvin");
inputs.forEach(input=>{
    input.addEventListener("input",e=>{
        const unit=e.target.id;
        const v=parseInt(e.target.value);
        if(unit==="celsius"){
            f.value=parseFloat((v*1.8)+32).toFixed(4)*1;
            k.value=parseFloat(v+273.15).toFixed(4)*1;
        }else if(unit=="fahrenheit"){
            c.value=parseFloat((v-32)*5/9).toFixed(4)*1;
            k.value=parseFloat(((v-32)*5/9)+273.15).toFixed(4)*1;
        }
        else if(unit=="kelvin"){
            c.value=parseFloat(v-273.15).toFixed(4)*1;
            f.value=parseFloat((v-273.15)*9/5+32).toFixed(4)*1;
        }
    });
});*/