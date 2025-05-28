async function max(){
const reponse =    await fetch (`https://api.nationalize.io/?name=maxwell`)
result =  await reponse.json()
advice0 = result
advice1 = JSON.stringify(advice0)

 re = advice0["country"][0]["country_id"]
 console.log(re)
}
max()