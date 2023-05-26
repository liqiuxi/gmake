/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {

    const lps331apIconUrl = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgdmlld0JveD0iMCAwIDI2IDI2IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNCIKICAgc29kaXBvZGk6ZG9jbmFtZT0iUHJlc3N1cmUuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoNzMyYTAxZGE2MywgMjAyMi0xMi0wOSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgc2hvd2dyaWQ9ImZhbHNlIgogICAgIGlua3NjYXBlOnpvb209IjE0LjU3NjkyMyIKICAgICBpbmtzY2FwZTpjeD0iMTMuMDM0MzAxIgogICAgIGlua3NjYXBlOmN5PSIxMy4wMzQzMDEiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIyMTA4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijk3NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMjkzIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjAiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIgLz4KICA8cGF0aAogICAgIHN0eWxlPSJ0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7YmxvY2stcHJvZ3Jlc3Npb246dGI7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpCaXRzdHJlYW0gVmVyYSBTYW5zO2ZpbGw6I2ZmZmZmZiIKICAgICBkPSJNIDIwIDAgTCAyMCAyIEwgMjQgMiBMIDI0IDQgTCAyMiA0IEwgMjIgNiBMIDI0IDYgTCAyNCA4IEwgMjIgOCBMIDIyIDEwIEwgMjQgMTAgTCAyNCAxMiBMIDIwIDEyIEwgMjAgMTQgTCAyNCAxNCBMIDI0IDE2IEwgMjIgMTYgTCAyMiAxOCBMIDI0IDE4IEwgMjQgMjAgTCAyMiAyMCBMIDIyIDIyIEwgMjQgMjIgTCAyNCAyNCBMIDIwIDI0IEwgMjAgMjYgTCAyNSAyNiBMIDI2IDI2IEwgMjYgMjUgTCAyNiAxIEwgMjYgMCBMIDI1IDAgTCAyMCAwIHogTSA0IDQgQyA0IDYuOTU4MzMzMyAzLjgxNjgwMDUgOC43MTA1MzEgMy41NjI1IDkuODEyNSBDIDMuMzA4MTk5NSAxMC45MTQ0NjkgMy4wMzEyNSAxMS4zNzUgMi42NTYyNSAxMiBDIDIuMjgxMjUgMTIuNjI1IDEuODA4MTk5NSAxMy40MTQ0NjkgMS41IDE0Ljc1IEMgMS4yMjkxNDk0IDE1LjkyMzY4NiAxLjAzOTg3OTkgMTcuNTY3NzQ5IDEgMjAgTCAwIDIwIEwgMiAyMyBMIDQgMjAgTCAzIDIwIEMgMy4wMzg1MzQ2IDE3LjY2NzU1OCAzLjIxNDk3OTMgMTYuMTUxNzU2IDMuNDM3NSAxNS4xODc1IEMgMy42OTE4MDA1IDE0LjA4NTUzMSAzLjk2ODc1IDEzLjYyNSA0LjM0Mzc1IDEzIEMgNC43MTg3NSAxMi4zNzUgNS4xOTE4MDA1IDExLjU4NTUzMSA1LjUgMTAuMjUgQyA1LjgwODE5OTUgOC45MTQ0NjkgNiA3LjA0MTY2NjcgNiA0IEwgNCA0IHogTSA5IDQgQyA5IDYuOTU4MzMzMyA4LjgxNjgwMDUgOC43MTA1MzEgOC41NjI1IDkuODEyNSBDIDguMzA4MTk5NSAxMC45MTQ0NjkgOC4wMzEyNSAxMS4zNzUgNy42NTYyNSAxMiBDIDcuMjgxMjUgMTIuNjI1IDYuODA4MTk5NSAxMy40MTQ0NjkgNi41IDE0Ljc1IEMgNi4yMjkxNDk0IDE1LjkyMzY4NiA2LjAzOTg3OTkgMTcuNTY3NzQ5IDYgMjAgTCA1IDIwIEwgNyAyMyBMIDkgMjAgTCA4IDIwIEMgOC4wMzg1MzQ2IDE3LjY2NzU1OCA4LjIxNDk3OTMgMTYuMTUxNzU2IDguNDM3NSAxNS4xODc1IEMgOC42OTE4MDA1IDE0LjA4NTUzMSA4Ljk2ODc1IDEzLjYyNSA5LjM0Mzc1IDEzIEMgOS43MTg3NSAxMi4zNzUgMTAuMTkxODAxIDExLjU4NTUzMSAxMC41IDEwLjI1IEMgMTAuODA4MTk5IDguOTE0NDY5IDExIDcuMDQxNjY2NyAxMSA0IEwgOSA0IHogTSAxNCA0IEMgMTQgNi45NTgzMzMzIDEzLjgxNjgwMSA4LjcxMDUzMSAxMy41NjI1IDkuODEyNSBDIDEzLjMwODE5OSAxMC45MTQ0NjkgMTMuMDMxMjUgMTEuMzc1IDEyLjY1NjI1IDEyIEMgMTIuMjgxMjUgMTIuNjI1IDExLjgwODE5OSAxMy40MTQ0NjkgMTEuNSAxNC43NSBDIDExLjIyOTE1IDE1LjkyMzY4NiAxMS4wMzk4OCAxNy41Njc3NDkgMTEgMjAgTCAxMCAyMCBMIDEyIDIzIEwgMTQgMjAgTCAxMyAyMCBDIDEzLjAzODUzNSAxNy42Njc1NTggMTMuMjE0OTc5IDE2LjE1MTc1NiAxMy40Mzc1IDE1LjE4NzUgQyAxMy42OTE4MDEgMTQuMDg1NTMxIDEzLjk2ODc1IDEzLjYyNSAxNC4zNDM3NSAxMyBDIDE0LjcxODc1IDEyLjM3NSAxNS4xOTE4MDEgMTEuNTg1NTMxIDE1LjUgMTAuMjUgQyAxNS44MDgxOTkgOC45MTQ0NjkgMTYgNy4wNDE2NjY3IDE2IDQgTCAxNCA0IHoiCiAgICAgaWQ9InBhdGgyIiAvPgo8L3N2Zz4K';
    
    return `
<category name="%{BKY_LPS331AP_CATEGORY}" id="LPS331AP_CATEGORY" colour="#42CCFF" secondaryColour="#42CCFF">
    <block type="lps331ap_read" id="lps331ap_read">

    </block>
</category>`;
}

exports = addToolbox;
