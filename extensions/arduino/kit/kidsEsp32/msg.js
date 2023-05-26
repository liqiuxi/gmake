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

        BUZZER_CATEGORY: 'Passive buzzer',
        BUZZER_TONE: 'Tone PIN#%1 frequency%2',
        BUZZER_TONE_D: 'Tone PIN#%1 frequency%2 duration%3',
        BUZZER_MUSIC: 'Tone PIN#%1 play music%2',
        BUZZER_NOTONE: 'noTone%1',
        MOTOR130_CATEGORY: 'DC Motor',
        MOTOR130_LEFT: 'Beetlebot Left Motor INA#%1 State%2 INB#%3 analogWrite%4',
        MOTOR130_RIGHT: 'Beetlebot Right Motor INA#%1 State%2 INB#%3 analogWrite%4',
        KS_SERVO_CATEGORY: 'servo',
        KS_SERVO_ANGLE: 'servo PIN#%1 degree%2 delay%3',
        KS_SERVO_READ: 'servo PIN#%1 read degree',
        HC_SR04_CATEGORY: 'Ultrasonic',
        HC_SR04_READ_DISTANCE: 'HC-SR04 trig pin %1 echo pin %2 read distance %3',
        BBRGBLEDSTRIP_CATEGORY: 'RGB LED Strip',
        BBRGBLEDSTRIP_INIT: 'init RGB LED strip length %1 pin %2',
        BBRGBLEDSTRIP_SETPIXELCOLOR: 'set pixel %1 color %2',
        BBRGBLEDSTRIP_FILL: 'fill from pixel %1 count %2 with color %3',
        BBRGBLEDSTRIP_COLOR: 'RGB LED strip color R %1 G %2 B %3',
        BBRGBLEDSTRIP_SETBRIGHTNESS: 'set brightness %1',
        BBRGBLEDSTRIP_CLEAR: 'clear all',
        BBRGBLEDSTRIP_SHOW: 'refresh',
        MATRIX_IIC_CATEGORY: 'Matrix HT16K33',
        MATRIX_IIC_INIT: 'Init HT16K33 Matrix',
        MATRIX_IIC_FACE: 'HT16K33 Matrix display face%1',
        MATRIX_IIC_PIEXL: 'HT16K33 Matrix X Axis%1 Y Axis%2 State%3',
        MATRIX_IIC_REFRESH: 'HT16K33 Matrix refresh',
        MATRIX_IIC_CLEAR: 'HT16K33 Matrix clear',
        IR_CATEGORY: 'IR Remote',
        IR_INIT: 'IR remote init PIN#%1',
        IR_DATA: 'Received data',
        IR_READ: 'Read the data',
        IR_REFRESH: 'Refresh data',
        WIFI_CATEGORY: 'ESP32 WIFI',
        WIFI_INIT: 'wifi connect ssid:%1 password:%2',
        WIFI_READ: 'WiFi read',
        OLED_CATEGORY: 'OLED',
        OLED_INIT: 'init oled width %1 height %2 I2C address %3',
        OLED_DRAWLINE: 'draw line x0: %1 y0: %2, x1: %3 y1: %4 color %5',
        OLED_COLOR_WHITE: 'white',
        OLED_COLOR_BLACK: 'black',
        OLED_COLOR_INVERSE: 'inverse',
        OLED_DRAWRECT: 'draw rect x: %1 y: %2 width %3 height %4 color %5',
        OLED_FILLRECT: 'fill rect x: %1 y: %2 width %3 height %4 color %5',
        OLED_DRAWCIRCLE: 'draw circle x: %1 y: %2 radius %3 color %4',
        OLED_FILLCIRCLE: 'fill circle x: %1 y: %2 radius %3 color %4',
        OLED_DRAWROUNDRECT: 'draw round rect x: %1 y: %2 width %3 height %4 radius %5 color %6',
        OLED_FILLROUNDRECT: 'fill round rect x: %1 y: %2 width %3 height %4 radius %5 color %6',
        OLED_DRAWTRIANGLE: 'draw triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7',
        OLED_FILLTRIANGLE: 'fill triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7',
        OLED_SETTEXT: 'set text size %1 color %2 background color %3',
        OLED_SETCURSOR: 'set cursor x: %1 y: %2',
        OLED_PRINT: 'print %1 %2',
        OLED_EOL_WARP: 'warp',
        OLED_EOL_NOWARP: 'no-warp',
        OLED_IMAGE: 'oled display image%1',
        OLED_CLEAR: 'clear oled',
        OLED_REFRESH: 'refresh oled',
        OLED_STARTSCROLL: 'start scroll %1 y0: %2 y1: %3',
        OLED_SCROLL_RIGHT: 'right',
        OLED_SCROLL_LEFT: 'left',
        OLED_SCROLL_DIAGRIGHT: 'diag right',
        OLED_SCROLL_DIAGLEFT: 'diag left',
        OLED_STOPSCROLL: 'stop scroll'
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

        BUZZER_CATEGORY: '无源蜂鸣器',
        BUZZER_TONE: '播放声音 引脚%1 频率%2',
        BUZZER_TONE_D: '播放声音 引脚%1 频率%2 节拍%3',
        BUZZER_MUSIC: '蜂鸣器 引脚%1 播放音乐%2',
        BUZZER_NOTONE: '结束声音 引脚%1',
        MOTOR130_CATEGORY: '直流电机',
        MOTOR130_LEFT: 'Beetlebot左边电机 INA#%1 电平为%2 INB#%3 模拟输出值%4',
        MOTOR130_RIGHT: 'Beetlebot右边电机 INA#%1 电平为%2 INB#%3 模拟输出值%4',
        KS_SERVO_CATEGORY: '舵机',
        KS_SERVO_ANGLE: '舵机 引脚%1 角度%2 延时(毫秒)%3',
        KS_SERVO_READ: '舵机 引脚%1 读取度数',
        HC_SR04_CATEGORY: '超声波传感器',
        HC_SR04_READ_DISTANCE: '超声波传感器 trig 引脚 %1 echo 引脚 %2 读取距离 %3',
        BBRGBLEDSTRIP_CATEGORY: 'RGB LED灯条',
        BBRGBLEDSTRIP_INIT: '初始化RGB LED灯条长度 %1 引脚 %2',
        BBRGBLEDSTRIP_SETPIXELCOLOR: '设置像素 %1 颜色 %2',
        BBRGBLEDSTRIP_FILL: '从像素 %1 开始 到像素 %2 颜色 %3',
        BBRGBLEDSTRIP_COLOR: 'RGB LED灯条颜色 R %1 G %2 B %3',
        BBRGBLEDSTRIP_SETBRIGHTNESS: '设置亮度 %1',
        BBRGBLEDSTRIP_CLEAR: '清除所有',
        BBRGBLEDSTRIP_SHOW: '刷新',
        MATRIX_IIC_CATEGORY: '8*8点阵HT16K33',
        MATRIX_IIC_INIT: '初始化 HT16K33点阵',
        MATRIX_IIC_FACE: 'HT16K33点阵 显示%1',
        MATRIX_IIC_PIEXL: 'HT16K33 点阵显示点 X轴%1 Y轴%2 电平为%3',
        MATRIX_IIC_REFRESH: 'HT16K33点阵 刷新显示',
        MATRIX_IIC_CLEAR: 'HT16K33点阵 清屏',
        IR_CATEGORY: '红外接收',
        IR_INIT: '初始化红外接收 引脚%1',
        IR_DATA: '接收到红外遥控的数据',
        IR_READ: '读取红外接收数据',
        IR_REFRESH: '刷新红外接收数据',
        WIFI_CATEGORY: 'ESP32 WIFI',
        WIFI_INIT: '连接WiFi 名称%1 密码%2',
        WIFI_READ: 'WiFi 读取数据',
        OLED_CATEGORY: 'OLED',
        OLED_INIT: '初始化 oled 宽度 %1 高度 %2 I2C 地址 %3',
        OLED_DRAWLINE: '绘制直线 x0: %1 y0: %2, x1: %3 y1: %4 颜色 %5',
        OLED_COLOR_WHITE: '白色',
        OLED_COLOR_BLACK: '黑色',
        OLED_COLOR_INVERSE: '反转',
        OLED_DRAWRECT: '绘制矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5',
        OLED_FILLRECT: '填充矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5',
        OLED_DRAWCIRCLE: '绘制圆形 x: %1 y: %2 半径 %3 颜色 %4',
        OLED_FILLCIRCLE: '填充圆形 x: %1 y: %2 半径 %3 颜色 %4',
        OLED_DRAWROUNDRECT: '绘制圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6',
        OLED_FILLROUNDRECT: '填充圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6',
        OLED_DRAWTRIANGLE: '绘制三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7',
        OLED_FILLTRIANGLE: '填充三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7',
        OLED_SETTEXT: '设置字体大小 %1 颜色 %2 背景色 color %3',
        OLED_SETCURSOR: '设置光标 x: %1 y: %2',
        OLED_PRINT: '打印 %1 %2',
        OLED_EOL_WARP: '换行',
        OLED_EOL_NOWARP: '不换行',
        OLED_IMAGE: 'oled 显示图片%1',
        OLED_CLEAR: '清空 oled',
        OLED_REFRESH: '刷新 oled',
        OLED_STARTSCROLL: '开始滚动 %1 y0: %2 y1: %3',
        OLED_SCROLL_RIGHT: '向右',
        OLED_SCROLL_LEFT: '向左',
        OLED_SCROLL_DIAGRIGHT: '右对角',
        OLED_SCROLL_DIAGLEFT: '左对角',
        OLED_STOPSCROLL: '停止滚动'
    });
    return Blockly;
}

exports = addMsg;