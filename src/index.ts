import { MoveBackward } from "./CommandAction/TankMoveBackward";
import { MoveForward } from "./CommandAction/TankMoveForward";
import { TelecomDisconnect } from "./CommandAction/TeleComDisconnect";
import { TelecomConnect } from "./CommandAction/TelecomConnect";
import { KeyBoard } from "./Keyboard";
import { Tank } from "./Tank";
import { Telecom } from "./Telecom";

import * as readline from 'readline';

// 创建 readline 接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const concreteKeyboard = new KeyBoard()



const concreteTank = new Tank();
const concreteTelecom = new Telecom()


const concreteTankMove = new MoveBackward(concreteTank)
const concreteMoveForward  = new MoveForward(concreteTank)
const concreteTelecomConnect = new TelecomConnect(concreteTelecom)
const concreteTelecomDisconnect = new TelecomDisconnect(concreteTelecom)


const start = ()=>{
    rl.question('(1) 快捷鍵設置 (2) Undo (3) Redo (字母) 按下按鍵:', (commandId) => {

        const keyTypeRegex = /^[a-z]$/;
        if (!keyTypeRegex.test(commandId)) {
            console.log('輸入錯誤的command Id')
            start()
        }else{
         // 在這裡可以繼續執行後續的代碼，根據使用者的輸入
        // concreteKeyboard.binding(concreteTankMove,commandId)
        // concreteKeyboard.commandAction(commandId)
            if(commandId == '1'){
                rl.question('設置巨集指令 (y/n)：',(result)=>{
                    console.log(result)
                })
            }   

            if(commandId == '2'){

            }

            if(commandId == '3'){
                
            }
       
        // rl.close();
        }

    });
}
start()









