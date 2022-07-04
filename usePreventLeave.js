export const usePreventLeave=()=>{
    const listener=event=>{
      event.preventDefault();
      event.returnValue="";
    }
    const enablePrevent=()=>window.addEventListener("beforeunload",listener );
    const disablePrevent=()=>window.removeEventListener("beforeunload",listener );
    return {enablePrevent,disablePrevent}; 
  }

  //윈도우 창을 닫기 전 확인하는 작업을 해줌