import { Telecom } from "../Telecom";
import { Command } from "./Command";
export class TelecomConnect implements Command{
    private telecom:Telecom

    constructor(telecom:Telecom){
        this.telecom = telecom;
    }

    public execute():void{
        this.telecom.Connect()
    }

    public undo():void{
        this.telecom.DisConnect()
    }
}