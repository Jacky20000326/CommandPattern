import { Tank } from "../Tank";
import { Command } from "./Command";
export class MoveForward implements Command{

    private tank:Tank

    constructor(tank:Tank){
        this.tank = tank;
    }

    public execute(){
        this.tank.MoveForward()
    }

    public undo(){
        this.tank.MoveBackward()
    }


}