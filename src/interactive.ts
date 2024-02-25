import * as readline from 'readline';

// 创建一个接口以定义交互式命令的处理函数
interface CommandHandler {
    (input: string): void;
}

// 创建 readline 接口
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 定义一个简单的交互命令处理函数
const handleCommand: CommandHandler = (input: string) => {
    console.log(`You entered: ${input}`);
};

// 设置命令行提示符
rl.setPrompt('Enter a command zzzz: ');

// 显示命令行提示符
// rl.prompt();

// 监听用户输入
rl.on('line', (input: string) => {
    // 处理用户输入
    handleCommand(input);

    // 再次显示命令行提示符
    rl.prompt();
});

// 监听关闭事件
rl.on('close', () => {
    console.log('Exiting...');
    process.exit(0);
});