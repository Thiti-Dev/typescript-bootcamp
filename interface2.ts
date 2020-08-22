interface Util{
    seedStr:string
    random_generated_numnber:number
    getNewRandomNumber() : number
}


class ServerControlPoint implements Util{
    seedStr: string;
    random_generated_numnber: number;
    getNewRandomNumber(): number {
        return Math.random()
    }
    
}
let newControlPoint = new ServerControlPoint();
console.log(newControlPoint.getNewRandomNumber())