export const useInput= (initialValue,validator)=>{
    const [value,setValue]=useState(initialValue);
    const onChange=e=>{
      console.log(e);
      const{
        target:{value}
      }=e;
      let willUpdate=true;
      if(typeof validator==='function'){
        willUpdate=validator(value);
      }
      if(willUpdate){
        setValue(value);
      }
    }
    return {value,onChange};
  }
//value={name.value}와 {...name}은 같다
//rest문법 {...something}