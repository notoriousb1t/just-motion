import { cssRule } from 'typestyle';
import { black } from 'typestyle/csx';
import { fonts } from './variables';

cssRule('.lm_goldenlayout', {
    background: black
});

cssRule('.lm_content', {
    background: '#222'
});

cssRule('.lm_dragProxy .lm_content', {
    boxShadow: '2px 2px 4px rgba( 0, 0, 0, 0.9 )'
});

cssRule('.lm_dropTargetIndicator', {
    boxShadow: 'inset 0 0 30px #000',
    outline: '1px dashed #ccc',
    transition: 'all 200ms ease'
});

cssRule('.lm_dropTargetIndicator .lm_inner', {
    background: '#000',
    opacity: .2,
    filter: 'alpha(opacity=40)'
});

cssRule('.lm_splitter', {
    background: '#000',
    opacity: .001,
    transition: 'opacity 200ms ease'
});

cssRule('.lm_splitter:hover', {
    opacity: 1,
    background: '#444'
});

cssRule('.lm_header', {
    height: '20px',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-o-user-select': 'none',
    '-ms-user-select': 'none',
    userSelect: 'none'
});

cssRule('.lm_header.lm_selectable', {
    cursor: 'pointer'
});

cssRule('.lm_selected .lm_header', {
    backgroundColor: '#452500'
});

cssRule('.lm_maximised .lm_header', {
    backgroundColor: '#000',
});

cssRule('.lm_header .lm_tab', {
    background: '#111',
    color: '#999',
    fontSize: fonts.baseFontSize,
    paddingTop: '2px',
    paddingBottom: '2px',
    fontFamily: fonts.baseFont,
    marginRight: '2px',
    boxShadow: '2px -2px 2px rgba(0,0,0,0.3)'
});

cssRule('.lm_tab.lm_active, .lm_tab:hover', {
    color: '#ddd',
    background: '#222'
});

cssRule('.lm_header .lm_tab.lm_active', {
    paddingBottom: '3px',
    borderBottom: 'none',
    boxShadow: '0 -2px 2px #000'
});

cssRule('.lm_header .lm_tab .lm_close_tab', {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    opacity: .4,
    filter: 'alpha(opacity=40)',
    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQ0EwQjYyQ0YzOUExMUUzODEzRUM2RjIwMjQwNUVGMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQ0EwQjYyREYzOUExMUUzODEzRUM2RjIwMjQwNUVGMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVDQTBCNjJBRjM5QTExRTM4MTNFQzZGMjAyNDA1RUYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVDQTBCNjJCRjM5QTExRTM4MTNFQzZGMjAyNDA1RUYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+71iVHAAAAE5JREFUeNpsTQkKwDAIS6Uf8P9/1CdkKtp1MCFqDgjMjAGQ/CB1AbACdHfMxM/Ud/MJ1G0OUVXcgTHKzNUBXoHSVpZPB94pLj/GqXgEGAC1mzL201rjRgAAAABJRU5ErkJggg==)'
});

cssRule('.lm_header .lm_tab .lm_close_tab', {
    width: '11px',
    height: '11px',
    right: '6px',
    top: '4px',
    backgroundRepeat: 'no-repeat',
});

cssRule('.lm_header .lm_tab .lm_close_tab:hover,.lm_header .lm_tab.lm_active .lm_close_tab ', {
    opacity: 1,
    filter: 'alpha(opacity=100)',
});

cssRule('.lm_controls > li', {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    opacity: .4,
    filter: 'alpha(opacity=40)',
    '-webkit-transition': 'opacity 300ms ease',
    '-o-transition': 'opacity 300ms ease',
    '-ms-transition': 'opacity 300ms ease',
    '-moz-transition': 'opacity 300ms ease',
    transition: 'opacity 300ms ease'
});

cssRule('.lm_controls > li:hover', {
    opacity: 1,
    filter: 'alpha(opacity=100)'
});

cssRule('.lm_controls .lm_popout', {
    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjOWFlODE3Zi0zMjcxLWJkNDItOTY0Mi03MDJiZjVkNGJmOWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlDNzcyMkJGQjYyMTFFM0IzQUE4RkIyQzNDRDI0MDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlDNzcyMkFGQjYyMTFFM0IzQUE4RkIyQzNDRDI0MDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5YWU4MTdmLTMyNzEtYmQ0Mi05NjQyLTcwMmJmNWQ0YmY5YSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjOWFlODE3Zi0zMjcxLWJkNDItOTY0Mi03MDJiZjVkNGJmOWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5u9IgFAAAAPElEQVR42mL8//8/AxTAGeiABY3PiEXNfyYGIgALmjX/sZnMgs8aGIOQdf+xOZwBm3VEOxxvGIEAQIABAAoJChZkbRwFAAAAAElFTkSuQmCC)'
});


cssRule('.lm_controls .lm_maximise', {
    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjOWFlODE3Zi0zMjcxLWJkNDItOTY0Mi03MDJiZjVkNGJmOWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlDQ0YxNUVGQjYyMTFFM0IzQUE4RkIyQzNDRDI0MDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlDNzcyMzJGQjYyMTFFM0IzQUE4RkIyQzNDRDI0MDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5YWU4MTdmLTMyNzEtYmQ0Mi05NjQyLTcwMmJmNWQ0YmY5YSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjOWFlODE3Zi0zMjcxLWJkNDItOTY0Mi03MDJiZjVkNGJmOWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DFX8LAAAAJklEQVR42mL8DwQMBAATAxGABUoz4lHznyiTBqMimO/whhVAgAEAMIEGEQk8OGQAAAAASUVORK5CYII=)'
});

cssRule('.lm_maximised .lm_controls .lm_maximise', {
    backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzdBOUM4MUQ0NzIyMTFFNDg0M0Q4OTQxQjVGRUFGQ0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzdBOUM4MUM0NzIyMTFFNDg0M0Q4OTQxQjVGRUFGQ0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkExRjEyNDM3RkI1RjExRTM4NkNCOTA5QTc5RjA3NEM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkExRjEyNDM4RkI1RjExRTM4NkNCOTA5QTc5RjA3NEM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dG2ryAAAACdJREFUeNpi/P//PwMxgImBSDAyFbKAiFmzZuENzLS0NEaiTQQIMADdZQcTcyy94AAAAABJRU5ErkJggg==)'
});

cssRule('.lm_controls .lm_close', {
    backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjOWFlODE3Zi0zMjcxLWJkNDItOTY0Mi03MDJiZjVkNGJmOWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlDQ0YxNjZGQjYyMTFFM0IzQUE4RkIyQzNDRDI0MDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlDQ0YxNjVGQjYyMTFFM0IzQUE4RkIyQzNDRDI0MDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5YWU4MTdmLTMyNzEtYmQ0Mi05NjQyLTcwMmJmNWQ0YmY5YSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjOWFlODE3Zi0zMjcxLWJkNDItOTY0Mi03MDJiZjVkNGJmOWEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6rmsrNAAAAQ0lEQVR42nTOUQ4AMAQDUHr/O3dbIgtN+cMTTd6KiIy9iALcwNujGgf/B7RhhyMC5DoVOET3Gi6DQrgMCrGAAY8AAwDe6xQOLXhdxAAAAABJRU5ErkJggg==)`
});

cssRule('.lm_transition_indicator', {
    backgroundColor: '#000',
    border: '1px dashed #555'
});

cssRule('.lm_popin', {
    cursor: 'pointer'
});

cssRule('.lm_popin .lm_bg', {
    background: '#fff',
    opacity: .3,
    filter: 'alpha(opacity=30)'
});

cssRule('.lm_popin .lm_icon', {
    borderLeft: '1px solid #eee',
    borderTop: '1px solid #eee',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    opacity: .7,
    filter: 'alpha(opacity=70)',
    backgroundImage: 'url(data:image/png,base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAJCAYAAADpeqZqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTlCMjk5QzM3MUMxMUU0OTBFOUQ3QUI0Q0UzREQ0RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNTlCMjk5RDM3MUMxMUU0OTBFOUQ3QUI0Q0UzREQ0RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE1OUIyOTlBMzcxQzExRTQ5MEU5RDdBQjRDRTNERDRFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE1OUIyOTlCMzcxQzExRTQ5MEU5RDdBQjRDRTNERDRFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3fq+uQAAAFxJREFUeNqcjosJwCAMRBNxgey/YzLCacRADaJtH/jlnh6rKoiIRYQCMwMdqC70gR4c6zzzwUGZmxBewQBynaVqxrNDelwsgZ3sUvEph2/U28s7Cv0gfvpUsQkwAKQyLdc+L4T6AAAAAElFTkSuQmCC)'
});

cssRule('.lm_popin:hover .lm_icon', {
    opacity: 1,
    filter: 'alpha(opacity=100)'
});
