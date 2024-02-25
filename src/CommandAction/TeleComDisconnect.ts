import { Telecom } from "../Telecom";
import { Command } from "./Command";
export class TelecomDisconnect implements Command{
    private telecom:Telecom

    constructor(telecom:Telecom){
        this.telecom = telecom;
    }

    public execute():void{
        this.telecom.DisConnect()
    }
    public undo():void{
        this.telecom.Connect()
    }
}