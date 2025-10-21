let value: unknown = 123;
let strLength: number = (value as string).length;
console.log(strLength); 
const newVal = (<number>value).toFixed(2);
console.log(newVal);