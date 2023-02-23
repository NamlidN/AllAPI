import { useState, useEffect } from 'react';


function GOTYOUIP (){

const [ip , setIp] = useState("")
useEffect(() => {
   async function Ip() {
    const res = await fetch('https://api64.ipify.org')
    setIp(await res.text())
  }
  Ip();

},[]);


console.log(ip);


return(
    <>
    </>
)
}
export default GOTYOUIP;