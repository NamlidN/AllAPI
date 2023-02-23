import { useEffect, useState } from "react";

import './IP.css';

function IpData() {


    const [ipD, setIpD] = useState([]);
    useEffect(() => {
        async function IpD() {
            const res = await fetch(`https://ipapi.co//json/`);
            setIpD(await res.json());
        }
        IpD();

    }, []);

    console.log(ipD);

    return (
        <div className="E"><ul>
            <li className="LongIPContainer"> <p>  IP</p><p className="LongIP">{ipD.ip}</p></li>
            <li> <p> City</p><p>{ipD.city} </p></li>
            <li> <p> Region</p><p>{ipD.region} </p></li>
            <li> <p>  Region Code</p><p> {ipD.region_code}</p></li>
            <li> <p>   Country Code</p><p>{ipD.country_code}</p></li>
            <li> <p> Country Code (iso3)</p><p>{ipD.country_code_iso3}</p></li>
            <li> <p>  Country Name</p><p>{ipD.country_name}</p></li>
            <li> <p> Country Capital</p><p>{ipD.country_capital}</p></li>
            <li> <p>   Postal</p><p>{ipD.postal}</p></li>
            <li> <p>   Time Zone</p><p>{ipD.timezone}</p></li>
            <li> <p>  Country Calling Code</p><p>{ipD.country_calling_code}</p></li>
            <li> <p>  Currency</p><p>{ipD.currency}</p></li>
            <li> <p> Currency Name</p><p>{ipD.currency_name}</p></li>
            <li> <p> Languages</p><p>{ipD.languages}</p></li>
            <li> <p>    Currency</p><p> {ipD.currency}</p></li>
            <li> <p>   Country Population</p><p>{ipD.country_population}</p></li>
        </ul>
        </div>
    );
}
export default IpData;