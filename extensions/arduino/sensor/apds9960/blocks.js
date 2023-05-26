/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#F08080';
    const secondaryColour = '#CD5C5C';
    const gesIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMzguNSA0OS44IgogICBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzOC41IDQ5Ljg7IgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBzb2RpcG9kaTpkb2NuYW1lPSLmiYvlir/or4bliKsuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMTcuNDA5NjM5IgogICBpbmtzY2FwZTpjeD0iMTkuMjUiCiAgIGlua3NjYXBlOmN5PSIyMi42MDI0MjIiCiAgIGlua3NjYXBlOndpbmRvdy14PSItOCIKICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSLlm77lsYJfMSIgLz4KPHN0eWxlCiAgIHR5cGU9InRleHQvY3NzIgogICBpZD0ic3R5bGUyIj4KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMDBBMEU5O30KCS5zdDF7ZmlsbDojMDBBMEU5O30KPC9zdHlsZT4KPGcKICAgaWQ9Imc4IgogICBzdHlsZT0iZmlsbDojZmZmZmZmIj4KCTxwYXRoCiAgIGNsYXNzPSJzdDAiCiAgIGQ9Ik0xMC4yLDI2LjhjLTEuMy0xLjUtMi0zLjMtNC00LjFjLTIuNC0xLTQuNiwwLjMtNS41LDEuOUMtMC41LDI3LDAuOCwyOSwxLjgsMzAuOGMyLjIsNCw2LjEsMTEuNiw5LjIsMTQuNiAgIGM1LjgsNS41LDI3LjEsOSwyNy4xLTEyLjZjMC01LjMsMC0xMC42LDAtMTZzMC4zLTEwLjYtNi40LTguN2MtMC4xLTQuOS0xLjgtNi42LTYuNy01LjNjLTEuMS0xLjUtMS45LTIuOS00LjctMi42ICAgYy0yLjIsMC4zLTMsMS43LTMuNiwzLjdjLTIuMS0wLjctNC42LTAuNC01LjYsMS4xYy0xLjEsMS43LTAuOCw0LjUtMC44LDYuOEMxMC4yLDE2LjgsMTAuMywyMS44LDEwLjIsMjYuOCBNMjkuNSwyMi44bDAuMywwLjQgICBsMC4yLDAuMmwwLjQsMC4zaDAuM2wwLjQtMC4zbDAuMi0wLjJsMC4zLTAuNGMtMC4xLTIuNywwLTUuNCwwLTguMWMwLTIuMS0wLjEtNiwzLTQuN2MxLjksMC43LDEuMyw0LjcsMS4zLDYuOSAgIGMwLDUuOCwwLjUsMTktMC45LDIyLjljLTMuNiw5LjgtMTYuNCw4LjgtMjEuNyw0LjljLTMuMi0yLjQtNy4yLTEwLjQtOS42LTE0LjVjLTAuOS0xLjUtMi41LTQuMy0wLjMtNS40YzIuMi0xLjEsMy42LDEuNiw0LjQsMi43ICAgQzguNCwyOC4yLDksMjksOS42LDI5LjhjMS41LDIsMi42LDEuNywyLjctMC4xYzAuMy00LjYtMC41LTE4LjksMC0yMi40YzAuMi0xLjUsMi4xLTIuNCwzLjQtMS4zYzIuMSwxLjctMC40LDE0LjEsMS4zLDE2LjUgICBjMi40LDAuMywxLjctMi4xLDEuNy00LjNWNi4zYzAtMS45LTAuMS0zLjcsMS43LTRDMjIuNiwyLDIzLDMuNiwyMyw1LjZjMCwzLjUtMC40LDE1LjUsMC40LDE2LjljMi4zLDAuMiwxLjctMS42LDEuNy0zLjggICBjMC0xLjcsMC0zLjUsMC01LjJjMC0zLjUtMC43LTguNSwxLjUtOWMyLjEtMC40LDIuNiwwLjcsMi44LDIuNUwyOS41LDIyLjh6IgogICBpZD0icGF0aDQiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+Cgk8cGF0aAogICBjbGFzcz0ic3QxIgogICBkPSJNMCwyNi42YzAtMC43LDAuMi0xLjMsMC41LTIuMWMwLjktMS43LDMuMy0zLDUuOC0yYzEuNSwwLjYsMi4zLDEuNywzLjEsMi44YzAuMiwwLjMsMC40LDAuNiwwLjcsMC45ICAgYzAtMy4yLDAtNi40LDAtOS42YzAtMS42LDAtMy4yLDAtNC44YzAtMC40LDAtMC44LDAtMS4yYzAtMi4xLTAuMS00LjIsMC45LTUuN3MzLjMtMiw1LjctMS4zYzAuNi0xLjcsMS40LTMuMywzLjctMy42ICAgYzIuOC0wLjMsMy43LDEsNC43LDIuNGwwLjEsMC4xYzIuMy0wLjYsMy45LTAuNSw1LDAuM3MxLjcsMi40LDEuOCw1YzIuMS0wLjUsMy42LTAuNCw0LjcsMC40YzEuOCwxLjQsMS44LDQuNSwxLjgsNy45djYuMSAgIGMwLDMuNSwwLDcuMSwwLDEwLjZsMCwwYzAsMTAtNC41LDE0LTguNCwxNS43Yy02LjgsMi45LTE1LjgsMC4yLTE5LjItM2MtMi44LTIuNi02LjItOC45LTguNC0xMy4xYy0wLjMtMC42LTAuNi0xLjEtMC44LTEuNSAgIGwtMC4yLTAuNEMwLjcsMjkuMywwLDI4LDAsMjYuNnogTTEwLjUsMjEuM2MwLDEuOCwwLDMuNywwLDUuNXYwLjZMMTAsMjdjLTAuNC0wLjUtMC44LTAuOS0xLjEtMS40Yy0wLjgtMS4xLTEuNS0yLjEtMi44LTIuNiAgIGMtMi4zLTAuOS00LjQsMC4zLTUuMiwxLjhjLTEuMSwyLTAuMSwzLjksMC44LDUuNWwwLjIsMC40YzAuMywwLjUsMC41LDEsMC44LDEuNmMyLjIsNC4xLDUuNiwxMC40LDguMywxM2MzLjMsMy4xLDEyLDUuNywxOC42LDIuOSAgIGM1LjMtMi4zLDguMS03LjYsOC4xLTE1LjJsMCwwYzAtMy41LDAtNy4xLDAtMTAuNnYtNi4xYzAtMy4yLDAtNi4yLTEuNi03LjVjLTEtMC43LTIuNC0wLjgtNC41LTAuMmwtMC4zLDAuMVY4LjQgICBjLTAuMS0yLjYtMC42LTQuMS0xLjYtNC45Yy0xLTAuNy0yLjUtMC44LTQuOC0wLjJoLTAuMmwtMC4zLTAuNGMtMS0xLjQtMS44LTIuNS00LjMtMi4yYy0yLDAuMi0yLjcsMS40LTMuNCwzLjVsMC4xLDBsLTAuMi0wLjEgICBjLTIuMi0wLjctNC40LTAuMy01LjMsMWMtMC45LDEuMy0wLjgsMy40LTAuOCw1LjRjMCwwLjQsMCwwLjgsMCwxLjJjMCwxLjYsMCwzLjIsMCw0LjhTMTAuNSwxOS43LDEwLjUsMjEuM3ogTTIuMiwyNi41ICAgYzAtMC4yLDAtMC41LDAuMS0wLjdjMC4yLTAuNSwwLjUtMSwxLjEtMS4yYzIuMS0xLjEsMy41LDEsNC40LDIuMmMwLjEsMC4yLDAuMywwLjQsMC40LDAuNWMwLjIsMC4zLDAuNSwwLjYsMC44LDFzMC43LDAuOSwxLDEuMyAgIGMwLjcsMC45LDEuMywxLjQsMS43LDEuM2MwLjMtMC4xLDAuNS0wLjUsMC41LTEuM2MwLjItMi4xLDAuMS02LjEsMC0xMC40Yy0wLjEtNC45LTAuMi0xMC4xLDAuMS0xMmMwLjEtMC44LDAuNy0xLjYsMS41LTEuOSAgIGMwLjgtMC4zLDEuNi0wLjIsMi4zLDAuNGMxLjIsMC45LDEsNC43LDAuOSw4LjdjLTAuMSwzLjItMC4zLDYuNiwwLjQsNy44YzAuNSwwLDAuOCwwLDEtMC4yYzAuNC0wLjQsMC40LTEuNCwwLjMtMi41ICAgYzAtMC40LTAuMS0wLjktMC4xLTEuM1Y2YzAtMS44LDAtMy42LDEuOS0zLjljMC45LTAuMSwxLjUsMCwyLDAuNGMwLjgsMC43LDAuOSwxLjksMC45LDMuMWMwLDAuNywwLDEuNywwLDIuOSAgIGMtMC4xLDQuMy0wLjIsMTIuMywwLjQsMTMuN2MwLjUsMCwwLjksMCwxLjEtMC4yYzAuNC0wLjQsMC4zLTEuMiwwLjMtMi4xYzAtMC40LDAtMC44LDAtMS4ydi01LjJjMC0wLjcsMC0xLjQtMC4xLTIuMSAgIGMtMC4xLTMuMy0wLjItNi43LDEuNy03LjFjMC45LTAuMiwxLjYtMC4xLDIuMSwwLjNjMC43LDAuNSwwLjksMS42LDAuOSwyLjV2MTUuN2wwLjIsMC4zbDAuMiwwLjJsMC4zLDAuMmgwLjFsMC40LTAuM2wwLjQtMC41ICAgYy0wLjEtMS44LDAtMy42LDAtNS40YzAtMC45LDAtMS44LDAtMi42di0wLjJjMC0xLjYsMC0zLjksMS4yLTQuN2MwLjUtMC40LDEuMy0wLjQsMi4yLDBjMS43LDAuNywxLjYsMy41LDEuNSw1LjggICBjMCwwLjUsMCwwLjksMCwxLjNjMCwxLjEsMCwyLjQsMCwzLjljMC4xLDYuNywwLjIsMTUuOS0xLDE5LjFjLTEuMywzLjYtMy45LDYtNy42LDcuMmMtNS4yLDEuNi0xMS4zLDAuMS0xNC40LTIuMiAgIGMtMi43LTItNi03LjktOC4zLTEyLjFjLTAuNS0wLjktMC45LTEuNy0xLjMtMi40di0wLjFDMywyOS4yLDIuMiwyNy43LDIuMiwyNi41eiBNMTIuNywyNi40YzAsMS4zLDAsMi40LTAuMSwzLjIgICBjLTAuMSwxLjItMC41LDEuNi0wLjksMS43Yy0wLjQsMC4xLTEuMiwwLTIuMy0xLjVjLTAuMy0wLjQtMC43LTAuOS0xLTEuM2MtMC4zLTAuMy0wLjUtMC43LTAuOC0xYy0wLjEtMC4yLTAuMy0wLjQtMC40LTAuNiAgIGMtMC45LTEuMi0yLTIuOS0zLjctMi4xYy0wLjQsMC4yLTAuNywwLjUtMC44LDAuOWMtMC40LDEuMiwwLjcsMywxLjMsNHYwLjFjMC40LDAuNywwLjksMS41LDEuMywyLjRjMi4zLDQuMiw1LjUsMTAsOC4yLDEyICAgYzMsMi4yLDguOSwzLjcsMTQsMi4xYzMuNS0xLjEsNi4xLTMuNSw3LjMtNi45YzEuMS0zLjEsMS0xMi42LDAuOS0xOC45YzAtMS41LDAtMi44LDAtMy45YzAtMC40LDAtMC44LDAtMS4zICAgYzAuMS0yLDAuMi00LjgtMS4yLTUuM2MtMC43LTAuMy0xLjMtMC4zLTEuNywwYy0xLDAuNy0wLjksMi44LTAuOSw0LjN2MC4yYzAsMC45LDAsMS44LDAsMi42YzAsMS44LDAsMy43LDAsNS41djAuMWwtMC42LDAuNyAgIEwzMC44LDI0aC0wLjVsLTAuNy0wLjZsLTAuNC0wLjVWN2MtMC4xLTEuMS0wLjMtMS44LTAuOC0yLjFjLTAuNC0wLjMtMC45LTAuMy0xLjctMC4yYy0xLjYsMC4zLTEuNSwzLjctMS40LDYuNiAgIGMwLDAuNywwLjEsMS41LDAuMSwyLjF2NS4yYzAsMC40LDAsMC44LDAsMS4yYzAuMSwxLjEsMC4xLDItMC40LDIuNWMtMC4zLDAuMy0wLjgsMC40LTEuNiwwLjRoLTAuMWwtMC4xLTAuMSAgIGMtMC43LTEuMS0wLjYtNy42LTAuNS0xNC4xYzAtMS4yLDAtMi4yLDAtMi45YzAtMS4xLTAuMS0yLjItMC43LTIuN2MtMC40LTAuMy0wLjktMC40LTEuNi0wLjNjLTEuNSwwLjItMS41LDEuNS0xLjUsMy40djAuM3YxMS45ICAgYzAsMC40LDAsMC44LDAuMSwxLjNjMC4xLDEuMiwwLjEsMi4zLTAuNSwyLjljLTAuMywwLjMtMC44LDAuNC0xLjUsMC40aC0wLjFsLTAuMS0wLjFjLTAuOC0xLjMtMC43LTQuNi0wLjYtOC4yICAgYzAuMi0zLjUsMC4zLTcuNS0wLjctOC4zYy0wLjUtMC40LTEuMi0wLjUtMS44LTAuM2MtMC42LDAuMy0xLjEsMC44LTEuMiwxLjVjLTAuMywxLjktMC4yLDctMC4xLDExLjkgICBDMTIuNywyMS44LDEyLjcsMjQuNCwxMi43LDI2LjR6IgogICBpZD0icGF0aDYiCiAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiIC8+CjwvZz4KPC9zdmc+Cg==';
    

    Blockly.Blocks.apds9960_init = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.APDS9960_INIT,
                args0: [
                    {
                        type: 'field_image',
                        src: gesIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.apds9960_isGestureAvailable = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.APDS9960_ISGESTUREAVAILABLE,
                args0: [
                    {
                        type: 'field_image',
                        src: gesIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.apds9960_readGesture = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.APDS9960_READGESTURE,
                args0: [
                    {
                        type: 'field_image',
                        src: gesIconUrl,
                        width: 50,
                        height: 27
                    }
                ],

                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.apds9960_isGesture = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.APDS9960_ISGESTURE,
                args0: [
                    {
                        type: 'field_image',
                        src: gesIconUrl,
                        width: 50,
                        height: 27
                    }
                ],

                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'GESTURE',
                        options: [
                            [Blockly.Msg.APDS9960_GESTURE_UP, 'GESTURE_UP'],
                            [Blockly.Msg.APDS9960_GESTURE_DOWN, 'GESTURE_DOWN'],
                            [Blockly.Msg.APDS9960_GESTURE_LEFT, 'GESTURE_LEFT'],
                            [Blockly.Msg.APDS9960_GESTURE_RIGHT, 'GESTURE_RIGHT']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.apds9960_isProximityAvailable = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.APDS9960_ISPROXIMITYAVAILABLE,
                args0: [
                    {
                        type: 'field_image',
                        src: gesIconUrl,
                        width: 50,
                        height: 27
                    }
                ],

                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.apds9960_readProximity = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.APDS9960_READPROXIMITY,
                args0: [
                    {
                        type: 'field_image',
                        src: gesIconUrl,
                        width: 50,
                        height: 27
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;