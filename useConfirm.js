export const useComfirm=(message="",onConfirm, onCancel)=>{
    if(!onConfirm||typeof onConfirm!=='function')return;
    if(onCancel&&typeof onCancel!=='function')return;
    const confirmAction=()=>{
      if(window.confirm(message)){
        onConfirm();
      }else{
        onCancel();
      }
    }
    return confirmAction;
  }

  //사용자가 무언가(저장, 삭제 등)를 하기 전에 확인하는 것