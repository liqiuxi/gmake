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
    });
    Object.assign(Blockly.ScratchMsgs.locales['de'], {
        KS_VARIABLE_LABEL:'Variablentyp',
        KS_variables_declare:'Deklarieren Sie %1 Variablentyp %2 Name %3 Zugewiesen an %4',
        KS_variables_set:'Variable %1 um %2 setzen',
        KS_variables_change:'Variablenmodus %1 %2 ändern',
        KS_variables_value: 'Variable %1',
        KS_variables_setString:'Setze %1 String-Variable um %2',
        KS_global:'Global',
        KS_local:'Lokal',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'lang',
        KS_MATH_FLOAT: 'float',
        KS_MATH_BOOLEAN: 'boolean',
        KS_MATH_BYTE: 'Byte',
        KS_MATH_CHAR: 'char',
        KS_MATH_STRING: 'Zeichenfolge',
        KS_MATH_UNSIGNED_INT: 'unsigned int',
        KS_MATH_WORD: 'Wort',
        KS_MATH_UNSIGNED_LONG: 'unsigned long',
        KS_MATH_UNSIGNED_CHAR: 'unsigned char',
        KS_MATH_DOUBLE: 'double',
        KS_TEXT_LABEL:'TEXT',
        KS_char: 'char%1',
        KS_string: 'string%1',
        KS_data: '%1',
        KS_LOGIC_LABEL:'Logik',
        KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['es'], {
        KS_VARIABLE_LABEL:'Tipo de variable',
        KS_variables_declare:'Declarar %1 variable Tipo %2 Nombre %3 Asignado a %4',
        KS_variables_set:'Establecer %1 variable por %2',
        KS_variables_change:'Cambiar %1 modo variable %2',
        KS_variables_value: 'variable %1',
        KS_variables_setString:'Establecer %1 variable de cadena por %2',
        KS_global:'Global',
        KS_local:'Local',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'largo',
        KS_MATH_FLOAT: 'flotante',
        KS_MATH_BOOLEAN: 'booleano',
        KS_MATH_BYTE: 'byte',
        KS_MATH_CHAR: 'carácter',
        KS_MATH_STRING: 'cadena',
        KS_MATH_UNSIGNED_INT: 'int sin firmar',
        KS_MATH_WORD: 'palabra',
        KS_MATH_UNSIGNED_LONG: 'largo sin firmar',
        KS_MATH_UNSIGNED_CHAR: 'caracter sin firmar',
        KS_MATH_DOUBLE: 'doble',
        KS_TEXT_LABEL:'TEXTO',
        KS_char: 'char%1',
        KS_string: 'cadena%1',
        KS_data: '%1',
        KS_LOGIC_LABEL:'lógica',
        KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['fr'], {
        KS_VARIABLE_LABEL:'Type de variable',
         KS_variables_declare:'Déclarer %1 variable Type %2 Nom %3 Attribué à %4',
         KS_variables_set: 'Définir la variable %1 par %2',
         KS_variables_change:'Changer %1 mode variable %2',
         KS_variables_value: 'variable %1',
         KS_variables_setString: 'Définir la variable chaîne %1 par %2',
         KS_global:'Global',
         KS_local:'Local',
         KS_MATH_INT: 'entier',
         KS_MATH_LONG: 'long',
         KS_MATH_FLOAT: 'flottant',
         KS_MATH_BOOLEAN: 'booléen',
         KS_MATH_BYTE: 'octet',
         KS_MATH_CHAR: 'car',
         KS_MATH_STRING: 'chaîne',
         KS_MATH_UNSIGNED_INT: 'entier non signé',
         KS_MATH_WORD: 'mot',
         KS_MATH_UNSIGNED_LONG: 'long non signé',
         KS_MATH_UNSIGNED_CHAR: 'caractère non signé',
         KS_MATH_DOUBLE: 'doubler',
         KS_TEXT_LABEL:'TEXTE',
         KS_char: 'car%1',
         KS_string: 'chaîne%1',
         KS_data: '%1',
         KS_LOGIC_LABEL:'logique',
         KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ja'], {
        KS_VARIABLE_LABEL:'変数タイプ',
         KS_variables_declare:'%1 変数を宣言します。タイプ %2 名前 %3 を %4 に割り当てます',
         KS_variables_set:'%1 変数を %2 で設定',
         KS_variables_change:'%1 変数モード %2 を変更',
         KS_variables_value: '変数 %1',
         KS_variables_setString:'%1 文字列変数を %2 で設定',
         KS_global:'グローバル',
         KS_local:'ローカル',
         KS_MATH_INT: 'int',
         KS_MATH_LONG: '長い',
         KS_MATH_FLOAT: '浮動小数点',
         KS_MATH_BOOLEAN: 'ブール値',
         KS_MATH_BYTE: 'バイト',
         KS_MATH_CHAR: '文字',
         KS_MATH_STRING: '文字列',
         KS_MATH_UNSIGNED_INT: '符号なし整数',
         KS_MATH_WORD: '単語',
         KS_MATH_UNSIGNED_LONG: '符号なしロング',
         KS_MATH_UNSIGNED_CHAR: '符号なし文字',
         KS_MATH_DOUBLE: '倍精度',
         KS_TEXT_LABEL:'テキスト',
         KS_char: 'char%1',
         KS_string: 'string%1',
         KS_data: '%1',
         KS_LOGIC_LABEL:'ロジック',
         KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ko'], {
        KS_VARIABLE_LABEL:'변수 유형',
         KS_variables_declare:'%1 변수 유형 %2 이름 %3 선언 %4에 할당됨',
         KS_variables_set:'%1 변수를 %2로 설정',
         KS_variables_change:'%1 변수 모드 %2 변경',
         KS_variables_value: '변수 %1',
         KS_variables_setString:'%1 문자열 변수를 %2로 설정',
         KS_global:'글로벌',
         KS_local:'로컬',
         KS_MATH_INT: '정수',
         KS_MATH_LONG: '긴',
         KS_MATH_FLOAT: '부동',
         KS_MATH_BOOLEAN: '부울',
         KS_MATH_BYTE: '바이트',
         KS_MATH_CHAR: '문자',
         KS_MATH_STRING: '문자열',
         KS_MATH_UNSIGNED_INT: '부호 없는 정수',
         KS_MATH_WORD: '단어',
         KS_MATH_UNSIGNED_LONG: '부호 없는 롱',
         KS_MATH_UNSIGNED_CHAR: '부호 없는 문자',
         KS_MATH_DOUBLE: '더블',
         KS_TEXT_LABEL:'텍스트',
         KS_char: '문자%1',
         KS_string: '문자열%1',
         KS_data: '%1',
         KS_LOGIC_LABEL:'논리',
         KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pl'], {
        KS_VARIABLE_LABEL:'Typ zmiennej',
        KS_variables_declare:'Deklaracja %1 zmiennej Typ %2 Nazwa %3 Przypisana do %4',
        KS_variables_set:'Ustaw zmienną %1 na %2',
        KS_variables_change:'Zmień tryb zmiennej %1 %2',
        KS_variables_value: 'zmienna %1',
        KS_variables_setString:'Ustaw zmienną łańcuchową %1 o %2',
        KS_global:'Globalny',
        KS_local:'Lokalny',
        KS_MATH_INT: 'int',
        KS_MATH_LONG: 'długi',
        KS_MATH_FLOAT: 'pływa',
        KS_MATH_BOOLEAN: 'wartość logiczna',
        KS_MATH_BYTE: 'bajt',
        KS_MATH_CHAR: 'znak',
        KS_MATH_STRING: 'ciąg znaków',
        KS_MATH_UNSIGNED_INT: 'bez znaku int',
        KS_MATH_WORD: 'słowo',
        KS_MATH_UNSIGNED_LONG: 'długi bez znaku',
        KS_MATH_UNSIGNED_CHAR: 'znak bez znaku',
        KS_MATH_DOUBLE: 'podwójne',
        KS_TEXT_LABEL:'TEKST',
        KS_char: 'znak%1',
        KS_string: 'ciąg%1',
        KS_data: '%1',
        KS_LOGIC_LABEL:'logika',
        KS_judge:'%1%2%3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['pt'], {
        KS_VARIABLE_LABEL:'Tipo de variável',
         KS_variables_declare:'Declare %1 variável Tipo %2 Nome %3 Atribuído a %4',
         KS_variables_set:'Definir %1 variável por %2',
         KS_variables_change:'Alterar %1 modo de variável %2',
         KS_variables_value: 'variável %1',
         KS_variables_setString:'Definir variável de string %1 por %2',
         KS_global:'Global',
         KS_local:'Local',
         KS_MATH_INT: 'int',
         KS_MATH_LONG: 'longo',
         KS_MATH_FLOAT: 'flutuar',
         KS_MATH_BOOLEAN: 'booleano',
         KS_MATH_BYTE: 'byte',
         KS_MATH_CHAR: 'char',
         KS_MATH_STRING: 'string',
         KS_MATH_UNSIGNED_INT: 'int unsigned',
         KS_MATH_WORD: 'palavra',
         KS_MATH_UNSIGNED_LONG: 'não assinado longo',
         KS_MATH_UNSIGNED_CHAR: 'caractere não assinado',
         KS_MATH_DOUBLE: 'duplo',
         KS_TEXT_LABEL:'TEXT',
         KS_char: 'char%1',
         KS_string: 'string%1',
         KS_data: '%1',
         KS_LOGIC_LABEL:'lógica',
         KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['ru'], {
        KS_VARIABLE_LABEL: 'Тип переменной',
         KS_variables_declare:'Объявить переменную %1 Тип %2 Имя %3 Назначено %4',
         KS_variables_set:'Установить переменную %1 на %2',
         KS_variables_change:'Изменить режим переменной %1 %2',
         KS_variables_value: 'переменная %1',
         KS_variables_setString:'Установить %1 строковую переменную на %2',
         KS_global: 'Глобальный',
         KS_local: 'Местный',
         KS_MATH_INT: 'целое',
         KS_MATH_LONG: 'длинный',
         KS_MATH_FLOAT: 'плавающая',
         KS_MATH_BOOLEAN: 'логическое значение',
         KS_MATH_BYTE: 'байт',
         KS_MATH_CHAR: 'символ',
         KS_MATH_STRING: 'строка',
         KS_MATH_UNSIGNED_INT: 'целое число без знака',
         KS_MATH_WORD: 'слово',
         KS_MATH_UNSIGNED_LONG: 'длинное без знака',
         KS_MATH_UNSIGNED_CHAR: 'беззнаковый символ',
         KS_MATH_DOUBLE: 'двойной',
         KS_TEXT_LABEL:'ТЕКСТ',
         KS_char: 'символ%1',
         KS_string: 'строка%1',
         KS_data: '%1',
         KS_LOGIC_LABEL: 'логика',
         KS_judge:'%1 %2 %3',
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-tw'], {
        KS_VARIABLE_LABEL:'變量類型',
        KS_variables_declare:'聲明 %1 數字變量 類型 %2 名稱 %3 賦值為 %4',
        KS_variables_declare2:'聲明 %1 字符串變量 類型 %2 名稱 %3 賦值為 %4',
        KS_variables_set:'設置 %1 變量 為 %2',
        KS_variables_change:'設置 %1 變量 模式 %2',
        KS_variables_value: '變量 %1',
        KS_variables_setString:'設置 %1 字符串變量 為 %2',
        KS_global:'全局',
        KS_local:'局部',
        KS_MATH_INT: '整數',
        KS_MATH_LONG: '長整數',
        KS_MATH_FLOAT: '小數',
        KS_MATH_BOOLEAN: '布爾',
        KS_MATH_BYTE: '字節',
        KS_MATH_CHAR: '字符',
        KS_MATH_STRING: '字符串',
        KS_MATH_UNSIGNED_INT: '無符號整數',
        KS_MATH_WORD: '字',
        KS_MATH_UNSIGNED_LONG: '無符號長整數',
        KS_MATH_UNSIGNED_CHAR: '無符號字符',
        KS_MATH_DOUBLE: '雙精度浮點數',
        KS_TEXT_LABEL:'文本',
        KS_char: '\'%1\'',
        KS_string: '\"%1\"',
        KS_data: '%1',
        KS_LOGIC_LABEL:'邏輯',
        KS_judge:'%1 %2 %3',
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
    });
    return Blockly;
}

exports = addMsg;

