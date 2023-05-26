/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    const hc_sr04IconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0i5Zu+5bGCXzEiCiAgIHg9IjBweCIKICAgeT0iMHB4IgogICB2aWV3Qm94PSIwIDAgMTA3Ni40MjI4IDk5OS45OTk5OCIKICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgc29kaXBvZGk6ZG9jbmFtZT0i6LaF5aOw5rOiLnN2ZyIKICAgd2lkdGg9IjEwNzYuNDIyOSIKICAgaGVpZ2h0PSIxMDAwIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMi0yIChlODZjODcwODc5LCAyMDIxLTAxLTE1KSI+PG1ldGFkYXRhCiAgIGlkPSJtZXRhZGF0YTE1Ij48cmRmOlJERj48Y2M6V29yawogICAgICAgcmRmOmFib3V0PSIiPjxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PjxkYzp0eXBlCiAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+PGRjOnRpdGxlPjwvZGM6dGl0bGU+PC9jYzpXb3JrPjwvcmRmOlJERj48L21ldGFkYXRhPjxkZWZzCiAgIGlkPSJkZWZzMTMiIC8+PHNvZGlwb2RpOm5hbWVkdmlldwogICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICBib3JkZXJvcGFjaXR5PSIxIgogICBvYmplY3R0b2xlcmFuY2U9IjEwIgogICBncmlkdG9sZXJhbmNlPSIxMCIKICAgZ3VpZGV0b2xlcmFuY2U9IjEwIgogICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMCIKICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDE3IgogICBpZD0ibmFtZWR2aWV3MTEiCiAgIHNob3dncmlkPSJmYWxzZSIKICAgaW5rc2NhcGU6em9vbT0iMC41ODgxMjUwNiIKICAgaW5rc2NhcGU6Y3g9Ijk2NC45MDYzNyIKICAgaW5rc2NhcGU6Y3k9IjU1Mi4zMTc3OCIKICAgaW5rc2NhcGU6d2luZG93LXg9Ii04IgogICBpbmtzY2FwZTp3aW5kb3cteT0iLTgiCiAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9IuWbvuWxgl8xIgogICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIKICAgc2hvd2d1aWRlcz0iZmFsc2UiIC8+CjxzdHlsZQogICB0eXBlPSJ0ZXh0L2NzcyIKICAgaWQ9InN0eWxlMiI+Cgkuc3Qwe2ZpbGw6IzAwQTBFOTt9Cjwvc3R5bGU+CgoKCjxnCiAgIGlkPSJnMTgiCiAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiCiAgIHRyYW5zZm9ybT0ibWF0cml4KDE0LjcxOTYzOCwwLDAsMTQuNzE5NjM4LDEwLjc1MTQ5NywyNjguNjA2NzEpIj48cGF0aAogICAgIGNsYXNzPSJzdDAiCiAgICAgZD0ibSA1My41LDI4LjYgYyAtNi44LDAgLTEyLjMsLTUuNyAtMTIuMywtMTIuNyAwLC03IDUuNSwtMTIuNyAxMi4zLC0xMi43IDYuOCwwIDEyLjMsNS43IDEyLjMsMTIuNyAwLDcgLTUuNSwxMi43IC0xMi4zLDEyLjcgeiBNIDUzLjUsNyBjIC00LjcsMCAtOC41LDQgLTguNSw4LjkgMCw0LjkgMy44LDguOSA4LjUsOC45IDQuNywwIDguNSwtNCA4LjUsLTguOSBDIDYyLDExIDU4LjIsNyA1My41LDcgWiIKICAgICBpZD0icGF0aDQiCiAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz48cGF0aAogICAgIGNsYXNzPSJzdDAiCiAgICAgZD0ibSAxOC4yLDI4LjYgYyAtNi44LDAgLTEyLjMsLTUuNyAtMTIuMywtMTIuNyAwLC03IDUuNSwtMTIuNyAxMi4zLC0xMi43IDYuOCwwIDEyLjMsNS43IDEyLjMsMTIuNyAwLDcgLTUuNSwxMi43IC0xMi4zLDEyLjcgeiBNIDE4LjIsNyBjIC00LjcsMCAtOC41LDQgLTguNSw4LjkgMCw0LjkgMy44LDguOSA4LjUsOC45IDQuNywwIDguNSwtNCA4LjUsLTguOSBDIDI2LjcsMTEgMjIuOSw3IDE4LjIsNyBaIgogICAgIGlkPSJwYXRoNiIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJtIDYzLjYsMjguMiBjIC0xLjEsMCAtMiwtMC45IC0yLC0yIDAsLTEuMSAwLjksLTIgMiwtMiAxLjEsMCAyLDAuOSAyLDIgMCwxLjEgLTAuOSwyIC0yLDIgeiBtIDAsLTIuNCBjIC0wLjIsMCAtMC40LDAuMiAtMC40LDAuNCAwLDAuNSAwLjksMC41IDAuOSwwIEMgNjQsMjYgNjMuOCwyNS44IDYzLjYsMjUuOCBaIgogICAgIGlkPSJwYXRoOCIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJtIDYzLjYsOC4xIGMgLTEuMSwwIC0yLC0wLjkgLTIsLTIgMCwtMS4xIDAuOSwtMiAyLC0yIDEuMSwwIDIsMC45IDIsMiAwLDEuMSAtMC45LDIgLTIsMiB6IG0gMCwtMi40IGMgLTAuMiwwIC0wLjQsMC4yIC0wLjQsMC40IDAsMC41IDAuOSwwLjUgMC45LDAgQyA2NCw1LjggNjMuOCw1LjcgNjMuNiw1LjcgWiIKICAgICBpZD0icGF0aDEwIgogICAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+PHBhdGgKICAgICBjbGFzcz0ic3QwIgogICAgIGQ9Im0gOC40LDI4LjIgYyAtMS4xLDAgLTIsLTAuOSAtMiwtMiAwLC0xLjEgMC45LC0yIDIsLTIgMS4xLDAgMiwwLjkgMiwyIDAsMS4xIC0wLjksMiAtMiwyIHogbSAwLC0yLjQgQyA4LjIsMjUuOCA4LDI2IDgsMjYuMiBjIDAsMC41IDAuOSwwLjUgMC45LDAgQyA4LjgsMjYgOC42LDI1LjggOC40LDI1LjggWiIKICAgICBpZD0icGF0aDEyIgogICAgIHN0eWxlPSJmaWxsOiNmZjAwMDAiIC8+PHBhdGgKICAgICBjbGFzcz0ic3QwIgogICAgIGQ9Im0gOC40LDguMSBjIC0xLjEsMCAtMiwtMC45IC0yLC0yIDAsLTEuMSAwLjksLTIgMiwtMiAxLjEsMCAyLDAuOSAyLDIgMCwxLjEgLTAuOSwyIC0yLDIgeiBtIDAsLTIuNCBDIDguMiw1LjcgOCw1LjggOCw2LjEgOCw2LjYgOC45LDYuNiA4LjksNi4xIDguOCw1LjggOC42LDUuNyA4LjQsNS43IFoiCiAgICAgaWQ9InBhdGgxNCIKICAgICBzdHlsZT0iZmlsbDojZmYwMDAwIiAvPjxwYXRoCiAgICAgY2xhc3M9InN0MCIKICAgICBkPSJtIDM4LjksMjcuMiBoIC02LjQgYyAtMS42LDAgLTIuOSwtMS4zIC0yLjksLTMgMCwtMS43IDEuMywtMyAyLjksLTMgaCA2LjQgYyAxLjYsMCAzLDEuMyAzLDMgMCwxLjcgLTEuMywzIC0zLDMgeiBtIC02LjQsLTMuMyBjIC0wLjIsMCAtMC40LDAuMiAtMC40LDAuNCAwLDAuMiAwLjIsMC40IDAuNCwwLjQgaCA2LjQgYyAwLjIsMCAwLjQsLTAuMiAwLjQsLTAuNCAwLC0wLjIgLTAuMiwtMC40IC0wLjQsLTAuNCB6IgogICAgIGlkPSJwYXRoMTYiCiAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz48L2c+PHBhdGgKICAgY2xhc3M9InN0MCIKICAgZD0iTSAxMDE3LjU3NDcsNzQxLjEwNzA4IEggNjAuNzk4MjYyIGMgLTI2LjQ5NTM0NiwwIC00OC41NzQ3OTIsLTIyLjA3OTQ1IC00OC41NzQ3OTIsLTQ4LjU3NDc5IFYgMzE3LjE4MTUyIEMgMTAuNzUxNDk3LDI5MC42ODYxNyAzMi44MzA5NjIsMjY4LjYwNjcxIDU5LjMyNjMwOCwyNjguNjA2NzEgSCAxMDE2LjEwMjggYyAyNi40OTUyLDAgNDguNTc0OCwyMi4wNzk0NiA0OC41NzQ4LDQ4LjU3NDgxIHYgMzc1LjM1MDc3IGMgMS40NzIsMjYuNDk1MzQgLTIwLjYwNzUsNDguNTc0NzkgLTQ3LjEwMjksNDguNTc0NzkgeiBNIDU5LjMyNjMwOCwyODMuMzI2MzUgYyAtMTkuMTM1NTM3LDAgLTMzLjg1NTE3NCwxNC43MTk2MyAtMzMuODU1MTc0LDMzLjg1NTE3IHYgMzc1LjM1MDc3IGMgMCwxOS4xMzU1MSAxNC43MTk2MzcsMzMuODU1MTUgMzMuODU1MTc0LDMzLjg1NTE1IEggMTAxNi4xMDI4IGMgMTkuMTM1NSwwIDMzLjg1NTEsLTE0LjcxOTY0IDMzLjg1NTEsLTMzLjg1NTE1IFYgMzE3LjE4MTUyIGMgMCwtMTkuMTM1NTQgLTE0LjcxOTYsLTMzLjg1NTE3IC0zMy44NTUxLC0zMy44NTUxNyB6IgogICBpZD0icGF0aDIwIgogICBzdHlsZT0iZmlsbDojZmYwMDAwO3N0cm9rZS13aWR0aDoxNC43MTk2IiAvPjwvc3ZnPgo=';
    
    return `<category name="%{BKY_HC_SR04_CATEGORY}" id="HC_SR04_CATEGORY" colour="#D39DDB" secondaryColour="#D39DDB" iconURI="${hc_sr04IconUrl}">
                <block type="hc_sr04_read_distance" id="hc_sr04_read_distance">
                    <field name="trig_pin">2</field>>
                    <field name="echo_pin">6</field>>
                </block>
            </category>
            `;
}
exports = addToolbox;
