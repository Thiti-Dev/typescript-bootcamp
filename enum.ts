//
// ─── CSHARP ─────────────────────────────────────────────────────────────────────
//
enum MovementKey{
    UP=1,
    DOWN=2,
    LEFT=3,
    RIGHT=4
}

class Rigid_Body{
    moveBody(direction:MovementKey){
        switch (direction) {
            case 1:
                console.log('Going Up')
                break;
            case 2:
                console.log('Going Down')
                break;
            case 3:
                console.log('Going Left')
                break;
            case 4:
                console.log('Going Right')
                break;        
            default:
                break;
        }
    }
}

let player_1 = new Rigid_Body()
player_1.moveBody(MovementKey.UP)
player_1.moveBody(MovementKey.DOWN)