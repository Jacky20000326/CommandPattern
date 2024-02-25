import { Command } from "./CommandAction/Command";
import { keyType } from "./Type";


export class KeyBoard {
    private key:keyType
    private concreteCommand:{key:Command} | {} = {};
    private s1:string[] = []
    private s2:string[] = []

    constructor(){}

    public binding(command:Command,commandId:string):void{
        // 新增新指令時要清空s2
        this.concreteCommand[commandId] = command;
        this.s2 = []
    }

    public commandAction(commandId:string):void{
        this.concreteCommand[commandId].execute()
         // 執行相對應指令操作後將該操作放入s1
        this.addHistoryDo(commandId)
    } 

    public addHistoryDo(HistoryDoCommandId:string):void{
        this.s1.unshift(HistoryDoCommandId)
    }


    public undo():void{
        
        if(this.s1.length != 0){
            console.log('當前沒東西能undo')
        }else{
            // 要還原(undo)時將s1的第一項取出執行undo,後將該項放入s2的第一項
            this.concreteCommand[this.s1[0]].undo()
            this.s1.shift()
            this.s2.unshift(this.s1[0])
        }
    }
    public redo():void{
        // 要重做(redo)時將s2的第一項取出執行execute而後再放入s1的第一項
        this.concreteCommand[this.s2[0]].execute()
        this.s1.unshift(this.s2[0])
    }
}