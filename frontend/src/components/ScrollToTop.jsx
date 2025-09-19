import { useEffect, useState } from "react";

export default function ScrollToTop(){
  const [show, setShow] = useState(false);

  useEffect(()=>{
    const onScroll = ()=> setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  },[]);

  if(!show) return null;

  return (
    <button 
      onClick={()=> window.scrollTo({top:0, behavior:"smooth"})}
      style={{
        position:"fixed", bottom:"20px", right:"20px", padding:"12px",
        borderRadius:"50%", background:"var(--primary)", color:"#fff",
        border:"none", cursor:"pointer", boxShadow:"0 4px 10px rgba(0,0,0,.3)"
      }}
    >
      ⬆
    </button>
  );
}
