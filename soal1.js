const string="The quick brown fox jumps over the lazy dog";
const tmpStr=string.split("");
// console.log(tmpStr);

const result=tmpStr.map(character=>{
    if(/[aiueoAIUEO]/.test(character)){
        character="*"
    }
    return character;
}).join("")
console.log(result);