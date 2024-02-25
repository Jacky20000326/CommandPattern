import { Tank } from "../Tank";
import { Command } from "./Command";
export class MoveBackward implements Command{

    private tank:Tank

    constructor(tank:Tank){
        this.tank = tank;
    }

    public execute(){
        this.tank.MoveBackward()
    }

    public undo(){
        this.tank.MoveForward()
    }
}