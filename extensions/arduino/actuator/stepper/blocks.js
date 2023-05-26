/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const ksstepperIconUrl = 'data:image/png;base64,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';
    
    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.stepper_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KS_STEPPER_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: ksstepperIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'IN1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN3',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN4',
                        options: digitalPins
                    },
                    {
                        type: 'input_value',
                        name: 'steps'
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.stepper_step = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.KS_STEPPER_STEP,
                args0: [
                    {
                        type: 'field_image',
                        src: ksstepperIconUrl,
                        width: 50,
                        height: 27
                    }
                        
                ],
                args1: [
                    {
                        type: 'input_value',
                        name: 'stepsNum'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;