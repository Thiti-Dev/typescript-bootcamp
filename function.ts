function convertNumberToString(target_number:number):string{
    return target_number.toString()
}

function sayHello():void{
    console.log('Hello from the other side')
}

console.log(typeof convertNumberToString(255))

//
// ─── CREATING TYPE ──────────────────────────────────────────────────────────────
//
type addFunction = (x:number,y:number) => number

function additional(x,y):addFunction{
    return x+y
}

console.log(additional(5,10))
// ────────────────────────────────────────────────────────────────────────────────
