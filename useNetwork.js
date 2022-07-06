export const useNetwork=onChange=>{
    const [status,setStatus]=useState(navigator.onLine);        //ture나 false를 반환 online인지 offline인지에 따라
    const handleChange=()=>{
            if(typeof onChange==='function'){
                onChange(navigator.onLine);
            }
            setStatus(navigator.onLine);
    }
    useEffect(()=>{
        window.addEventListener("online",handleChange);
        window.addEventListener("offline",handleChange);
        return()=>{
            window.removeEventListener("online",handleChange);
            window.removeEventListener("offline",handleChange);
        };
    },[]);
    return status;
}