/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        KS_VARIABLE_LABEL:'Variable Type',
        KS_variables_declare:'Declare %1 variable Type %2 Name %3 Assigned to %4',
        KS_variables_set:'Set %1 variable by %2',
        KS_variables_change:'Change %1 variable mode %2',
        KS_variables_value: 'variable %1',
        KS_variables_setString:'Set %1 String variable by %2',
        KS_global:'Global',
        KS_local:'Local',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'long',
        KS_MATH_FLOAT: 'float',
        KS_MATH_BOOLEAN: 'boolean',
        KS_MATH_BYTE: 'byte',
        KS_MATH_CHAR: 'char',
        KS_MATH_STRING: 'string',
        KS_MATH_UNSIGNED_INT: 'unsigned int',
        KS_MATH_WORD: 'word',
        KS_MATH_UNSIGNED_LONG: 'unsigned long',
        KS_MATH_UNSIGNED_CHAR: 'unsigned char',
        KS_MATH_DOUBLE: 'double',

        KS_TEXT_LABEL:'TEXT',
        KS_char: 'char%1',
        KS_string: 'string%1',
        KS_data: '%1',

        KS_LOGIC_LABEL:'logic',
        KS_judge:'%1 %2 %3',
        RGB_CATEGORY: 'RGB LED',
        RGB_DIGITAL: 'RGB Lamp Red#%1 R_state%2 Green#%3 G_State%4 Blue#%5 B_State%6',
        RGB_ANALOG: 'RGB Lamp Red#%1 R_analogWrite%2 Green#%3 G_analogWrite%4 Blue#%5 B_analogWrite%6',
        BUZZER_CATEGORY: 'Passive buzzer',
        BUZZER_TONE: 'Tone PIN#%1 frequency%2',
        BUZZER_TONE_D: 'Tone PIN#%1 frequency%2 duration%3',
        BUZZER_MUSIC: 'Tone PIN#%1 play music%2',
        BUZZER_NOTONE: 'noTone%1',
        MOTOR130_CATEGORY: 'DC Motor',
        MOTOR130_DIGITAL: 'Motor INA#%1 State%2 INB#%3 State%4',
        MOTOR130_ANALOG: 'Motor INA#%1 State%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'servo',
        KS_SERVO_ANGLE: 'servo PIN#%1 degree%2 delay%3',
        KS_SERVO_READ: 'servo PIN#%1 read degree',
        LM35_CATEGORY: 'Temperature',
        LM35_READ_TEMPERATURE: 'LM35 read temperature PIN: %1',
       
        MATRIX_IIC_CATEGORY: 'Matrix HT16K33',
        MATRIX_IIC_INIT: 'Init  Matrix',
        MATRIX_IIC_PIEXL: ' Matrix X Axis%1 Y Axis%2 State%3',
        matrix_iic_DRAWLINE: 'Martix draw line x0: %1 y0: %2, x1: %3 y1: %4',
        matrix_iic_DRAWRECTANGLE: 'Martix draw rectangle x: %1 y: %2 :width %3 length: %4',
        matrix_iic_DRAWCIRCLE: 'Martix draw circle x: %1 y: %2 :radius %3 ',
        matrix_iic_SHOWCHAR: 'Martix show char or number: %1',
        matrix_iic_SHOW_LOOP: 'Martix loop show : %1 speed: %2',
        MATRIX_IIC_FACE: 'Martix display image %1',
        MATRIX_IIC_REFRESH: 'Matrix refresh',
        MATRIX_IIC_CLEAR: 'Matrix clear',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        KS_VARIABLE_LABEL:'变量类型',
        KS_variables_declare:'声明 %1 数字变量 类型 %2 名称 %3 赋值为 %4',
        KS_variables_declare2:'声明 %1 字符串变量 类型 %2 名称 %3 赋值为 %4',
        KS_variables_set:'设置 %1 变量 为 %2',
        KS_variables_change:'设置 %1 变量 模式 %2',
        KS_variables_value: '变量 %1',
        KS_variables_setString:'设置 %1 字符串变量 为 %2',
        KS_global:'全局',
        KS_local:'局部',
        KS_MATH_INT: '整数',
        KS_MATH_LONG: '长整数',
        KS_MATH_FLOAT: '小数',
        KS_MATH_BOOLEAN: '布尔',
        KS_MATH_BYTE: '字节',
        KS_MATH_CHAR: '字符',
        KS_MATH_STRING: '字符串',
        KS_MATH_UNSIGNED_INT: '无符号整数',
        KS_MATH_WORD: '字',
        KS_MATH_UNSIGNED_LONG: '无符号长整数',
        KS_MATH_UNSIGNED_CHAR: '无符号字符',
        KS_MATH_DOUBLE: '双精度浮点数',

        KS_TEXT_LABEL:'文本',
        KS_char: '\'%1\'',
        KS_string: '\"%1\"',
        KS_data: '%1',

        KS_LOGIC_LABEL:'逻辑',
        KS_judge:'%1 %2 %3',
        RGB_CATEGORY: 'RGB LED灯',
        RGB_DIGITAL: 'RGB灯 红#%1 电平为%2 绿#%3 电平为%4 蓝#%5 电平为%6',
        RGB_ANALOG: 'RGB灯 红#%1 模拟输出%2 绿#%3 模拟输出%4 蓝#%5 模拟输出%6',
        BUZZER_CATEGORY: '无源蜂鸣器',
        BUZZER_TONE: '播放声音 引脚%1 频率%2',
        BUZZER_TONE_D: '播放声音 引脚%1 频率%2 节拍%3',
        BUZZER_MUSIC: '蜂鸣器 引脚%1 播放音乐%2',
        BUZZER_NOTONE: '结束声音 引脚%1',
        MOTOR130_CATEGORY: '直流电机',
        MOTOR130_DIGITAL: '电机驱动 INA#%1 电平为%2 INB#%3 电平为%4',
        MOTOR130_ANALOG: '电机驱动 INA#%1 电平为%2 INB#%3 模拟输出值%4',
        KS_SERVO_CATEGORY: '舵机',
        KS_SERVO_ANGLE: '舵机 引脚%1 角度%2 延时(毫秒)%3',
        KS_SERVO_READ: '舵机 引脚%1 读取度数',
        LM35_CATEGORY: 'LM35温度',
        LM35_READ_TEMPERATURE: '读取LM35温度值 引脚：%1',
        
        MATRIX_IIC_CATEGORY: '点阵HT16K33',
        MATRIX_IIC_INIT: '初始化 点阵',
        MATRIX_IIC_PIEXL: '点阵屏显示点 X轴%1 Y轴%2 电平为%3',
        matrix_iic_DRAWLINE: '点阵屏绘制直线 x0: %1 y0: %2, x1: %3 y1: %4',
        matrix_iic_DRAWRECTANGLE: '点阵屏绘制长方形 x: %1 y: %2 宽: %3 长: %4',
        matrix_iic_DRAWCIRCLE: '点阵屏绘制圆形 x: %1 y: %2 半径: %3 ',
        matrix_iic_SHOWCHAR: '点阵屏 显示字符或数字: %1',
        matrix_iic_SHOW_LOOP: '点阵屏 滚动显示: %1 速度: %2',
        MATRIX_IIC_FACE: '点阵屏 显示图片%1',
        MATRIX_IIC_REFRESH: '点阵屏 刷新显示',
        MATRIX_IIC_CLEAR: '点阵屏 清屏',
    });
    return Blockly;
}

exports = addMsg;