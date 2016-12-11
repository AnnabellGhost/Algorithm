/**
 * @param {string[]} tokens
 * @return {number}
 */
// ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
// ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
var evalRPN = function(tokens) {
    const stack=[];
    let count=0;
    const ops=['+','-','*','/'];
    let left,right,op;
    for(let i=0;i<tokens.length;i++){
        stack.push(tokens[i]);
        count++;
        if(ops.indexOf(tokens[i])!==-1&&count>=3){
            op=stack.pop();
            right=parseInt(stack.pop());
            left=parseInt(stack.pop());
            stack.push(opt(left,right,op));
            count-=2;
        }
    }
    return parseInt(stack.pop());
};
function opt(left,right,op){
    if(op==='+'){ return left+right;}
    if(op==='-'){ return left-right;}
    if(op==='*'){ return left*right;}
    if(op==='/'){ return left/right;}
}