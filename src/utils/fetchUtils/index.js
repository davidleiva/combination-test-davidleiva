export function handleErrors (res){
    if(!res.ok){
      // throw error(res.status); TODO//
    }
    console.log(res);
    return res;
}
  
export function parseJSON (res){
    return res.json();
}
  
export function printError (error){
    console.log(error);
}