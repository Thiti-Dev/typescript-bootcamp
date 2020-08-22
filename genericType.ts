//
// ─── CLONE CONCEPT FROM REACT-HOOK ──────────────────────────────────────────────
//
/*
function useState(init_value:string = ''){
    let state:string = init_value;
    // let getState = function(){
    //     return state
    // }
    // let setState = function(value){
    //     state = value
    // }
    function getState():string{
        return state
    }
    function setState(value:string):void{
        state = value
    }
    return {
        getState,
        setState
    }
}

let myState = useState('hello from the other-side') // {getState,setState} => we defined the init value
console.log(myState.getState())
myState.setState('Fuck me!')
console.log(myState.getState())
*/
// มีปัญหาเพราะว่า hook รองรับแค่ string
// ────────────────────────────────────────────────────────────────────────────────
/*
function useState(init_value:string|number = ''){
    let state:string|number = init_value;
    // let getState = function(){
    //     return state
    // }
    // let setState = function(value){
    //     state = value
    // }
    function getState():string|number{
        return state
    }
    function setState(value:string|number):void{
        state = value
    }
    return {
        getState,
        setState
    }
}

let myOnlyNumberHook = useState(1998)
myOnlyNumberHook.setState('asdasdas')
console.log(myOnlyNumberHook.getState())
let myOnlyStringHook = useState('FUCK')
myOnlyStringHook.setState(1935)
console.log(myOnlyStringHook.getState())
*/

// Still have a problem => multiple type is allowed

// THIS IS WHERE GENERIC TYPE COMES IN ( < > ) <=== signature symbol
// GENERIC SYMBOL WILL BE ALWAYS APPEAR ON BOTH FUNCTION AND WHERE YOU DECLARED

/*
function useState<S>(){
    let state : S
    function getState():S{
        return state
    }
    function setState(value:S):void{
        state = value
    }
    return {
        getState,
        setState
    }
}

let myOnlyNumberHook = useState<number>()
myOnlyNumberHook.setState(1995)
//myOnlyNumberHook.setState('asdasasd') // cannot เหลี่ยม

let myOnlyBooleanHook = useState<boolean>()
myOnlyBooleanHook.setState(false)
*/

//
// ─── CHALLENGE ──────────────────────────────────────────────────────────────────
//
// IF WE WANT OUR FUNCTION TO SUPPORTS BOTH VALUE TYPE AT THE SAME TIME ( ONLY NUMBER & BOOLEAN ) ALL ELSE OUT

/*
function useState<S extends number | boolean>(){
    let state : S
    function getState():S{
        return state
    }
    function setState(value:S):void{
        state = value
    }
    return {
        getState,
        setState
    }
}
let myOnlyNumberHook = useState()
myOnlyNumberHook.setState(1995)
*/


//
// ─── FINAL HOOK CONCEPT CLONE ───────────────────────────────────────────────────
//

function useState<S extends number | string | boolean>(){
    let state : S
    function getState():S{
        return state
    }
    function setState(value:S):void{
        state = value
    }
    return {
        getState,
        setState
    }
}

let myHook = useState<number>()
myHook.setState(9555)


let myHook2 = useState<string>()
myHook2.setState('asdasd')
// ────────────────────────────────────────────────────────────────────────────────
