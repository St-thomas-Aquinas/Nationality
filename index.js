//Variables
const input = document.getElementById("inputi");
const loading = document.querySelector(".loading");
const submit = document.querySelector(".sub");
const feedback1 = document.querySelector(".results_name");
const feedback2 = document.querySelector(".results_counrty");
const feedback3 = document.querySelector(".results_probality");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(input.value);
  try {
    const reponse = await fetch(
      `https://api.nationalize.io/?name=${input.value}`
    );
    result = await reponse.json();
    advice0 = result;
    country_ID = advice0["country"][0]["country_id"];

    probality = Number(advice0["country"][0]["probability"]);
    probalityPercent = probality *100 

    loading.textContent = " please wait...";
    submit.setAttribute("disabled", true);
    advice = result.slips;
    advice1 = JSON.stringify(result);
    alert(advice1)

    var getCountryNames = new Intl.DisplayNames(["en"], { type: "region" });
    //console.log(getCountryNames.of(a));
    const country_name = getCountryNames.of(country_ID);
  
    feedback1.textContent= input.value;
    feedback2.textContent = country_name;
    feedback2.textContent = math.trunc(probalityPercent);
  } catch (e) {
   // feedback.textContent = " Something went wrong , try Again";
    submit.removeAttribute("disabled");
  } finally {
    submit.removeAttribute("disabled");
    
  }
});
