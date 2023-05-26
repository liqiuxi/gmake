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
        BT_SERIAL_CATEGORY: 'Read Bluetooth',
        BLE_DATA: 'Serial readStringUntil #',
        KS_TEXT_LABEL:'TEXT',
        KS_char: 'char%1',
        KS_string: 'string%1',
        KS_data: '%1',

        KS_LOGIC_LABEL:'logic',
        KS_judge:'%1 %2 %3',
        BUTTON_CATEGORY: 'Button',
        BUTTON_READ_STATE: 'Button %1 was be pushed?',
        BUTTON_READ_VALUE: 'The state value of button is? %1',

        TOUCHSWITCH_CATEGORY: 'Touch',
        TOUCHSWITCH_STATE: 'Touch %1 was be touched?',
        TOUCHSWITCH_READ_VALUE: 'The value of touch is? %1?',
        
        BUZZER_CATEGORY: 'Muisc',
        BUZZER_TONE: 'Music PIN#%1 frequency%2',
        BUZZER_TONE_D: 'Music PIN#%1 frequency%2 duration%3',
        BUZZER_MUSIC: 'Muisc PIN#%1 play music%2',
        BUZZER_NOTONE: 'no music%1',
  
        BBRGBLEDSTRIP_CATEGORY: 'RGB',
       
        BBRGBLEDSTRIP_INIT: 'init RGB length %1 pin %2',
        BBRGBLEDSTRIP_DISPLAY: 'RGB brightness%1 clour%2 %3 display%4 ',
        BBRGBLEDSTRIP_SETPIXELCOLOR: 'set pixel %1 color %2',
        BBRGBLEDSTRIP_FILL: 'fill from pixel %1 count %2 with color %3',
        BBRGBLEDSTRIP_COLOR: 'RGB color R %1 G %2 B %3',
        BBRGBLEDSTRIP_SETBRIGHTNESS: 'set brightness %1',
        RGB_CHANGE: 'set RGB pin %1 brightness%2  time of full clour change%3',
        RGB_LOOP: 'set RGB pin %1 brightness%2  time of full clour loop%3',
        BBRGBLEDSTRIP_CLEAR: 'clear all',
        BBRGBLEDSTRIP_SHOW: 'refresh',
    
        AHT21_CATEGORY: 'Temperature and humidity',
        AHT20_21: 'Temperature and humidity get %1',
  
        ANALOGVOICE_CATEGORY: 'Sound ',
        ANALOGVOICE_READ_VALUE: 'read the value of sound %1',
        VOLTAGE_CATEGORY: 'voltage',
        VOLTAGE_READ_VALUE: 'read the value of voltage %1',
        CURRENT_CATEGORY: 'current',
        CURRENT_READ_VALUE: 'read the value of current %1',
        MPU6050_CATEGORY: 'Acceleration',
        MPU6050_INIT: 'init MPU6050',
        MPU6050_REFRESH: 'MPU6050 refresh data',

        MPU6050: 'MPU605 read %1',
        WIFI_CATEGORY: 'WIFI',
        WIFI_INIT: 'wifi connect ssid:%1 password:%2',
        WIFI_READ: 'WiFi read', 
        SD_CATEGORY: 'SD card',
        SD_INIT: 'init SD card  CS: %1',
        SD_TYPE: 'SD type cs# %1',
        SD_LIST: 'list files in SD root cs# %1',
        SD_VAR: 'SD %1 cs# %2',
        SD_JUDGE: '%1 File Exist?',
        SD_DELETE: 'delete %1',
        SD_READ: 'read %1',
        SD_WRITE: 'write SD File %1 Data %2 NewLine %3',

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

        BUTTON_CATEGORY: '按键',
        BUTTON_READ_STATE: '按键%1 被按下?',
        BUTTON_READ_VALUE: '按键%1的状态值',

        TOUCHSWITCH_CATEGORY: '触摸',
        TOUCHSWITCH_READ_VALUE: '触摸%1的值',
        TOUCHSWITCH_STATE: '%1检测到触摸?',

        BUZZER_CATEGORY: '音乐',
        BUZZER_TONE: '播放声音 引脚%1 频率%2',
        BUZZER_TONE_D: '播放声音 引脚%1 频率%2 节拍%3',
        BUZZER_MUSIC: '音乐 引脚%1 播放音乐%2',
        BUZZER_NOTONE: '结束声音 引脚%1',
     
        BBRGBLEDSTRIP_CATEGORY: 'RGB',
     
        BBRGBLEDSTRIP_INIT: '初始化RGB 灯颗数 %1 引脚 %2',
        BBRGBLEDSTRIP_DISPLAY: 'RGB亮度%1  颜色%2 %3 显示%4 ',
        
        BBRGBLEDSTRIP_SETPIXELCOLOR: '设置像素 %1 颜色 %2',
        BBRGBLEDSTRIP_FILL: '从像素 %1 开始 到像素 %2 颜色 %3',
        BBRGBLEDSTRIP_COLOR: 'RGB 颜色 R %1 G %2 B %3',
        BBRGBLEDSTRIP_SETBRIGHTNESS: '设置亮度 %1',
        RGB_CHANGE: '设置RGB引脚%1 亮度%2  七彩变化时间%3',
        RGB_LOOP: '设置RGB引脚%1 亮度%2  七彩循环时间%3',
        BBRGBLEDSTRIP_CLEAR: '清除所有',
        BBRGBLEDSTRIP_SHOW: '刷新',   
     
        AHT21_CATEGORY: '温湿度',
     
        AHT20_21: '温湿度获取 %1',
     
        ANALOGVOICE_CATEGORY: '声音',
        ANALOGVOICE_READ_VALUE: '读取接口 %1 声音强度',
        VOLTAGE_CATEGORY: '电压',
        VOLTAGE_READ_VALUE: '读取接口 %1 电压',
        CURRENT_CATEGORY: '电流',
        CURRENT_READ_VALUE: '读取接口 %1 电流',
        MPU6050_CATEGORY: '加速度',
        MPU6050_INIT: '初始化 加速度',
        MPU6050_REFRESH: '加速度 刷新数据',
        MPU6050_READ: '读取加速度 %1',
        WIFI_CATEGORY: 'WIFI',
        WIFI_INIT: '连接WiFi 名称%1 密码%2',
        WIFI_READ: 'WiFi 读取数据',  
        SD_CATEGORY: 'SD卡',
        SD_INIT: '初始化 SD卡  CS:%1',
        SD_TYPE: 'SD类型 cs引脚%1',
        SD_LIST: '列出SD根目录文件 cs引脚%1',
        SD_VAR: '读取SD%1 cs引脚%2',
        SD_JUDGE: '%1文件存在?',
        SD_DELETE: '删除%1',
        SD_READ: '读取%1',
        SD_WRITE: '写入SD 文件%1 数据%2 换行%3',

    });
    return Blockly;
}

exports = addMsg;
