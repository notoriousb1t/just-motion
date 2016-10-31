import { cssRule } from 'typestyle';

cssRule('.lm_root', {
    position: 'relative'
});

cssRule('.lm_row > .lm_item', {
    float: 'left'
});

cssRule('.lm_content', {
    overflow: 'hidden'
});

cssRule('.lm_dragging, .lm_dragging *', {
    cursor: 'move !important',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    '-o-user-select': 'none',
    userSelect: 'none'
});

cssRule('.lm_maximised', {
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: 40
});

cssRule('.lm_maximise_placeholder', {
    display: 'none'
});

cssRule('.lm_splitter', {
    position: 'relative',
    zIndex: 2
});

cssRule('.lm_splitter:hover', {
    background: 'orange'
});

cssRule('.lm_splitter.lm_vertical .lm_drag_handle', {
    position: 'absolute',
    height: '25px',
    top: '-10px',
    cursor: 'n-resize',
    width: '100%'
});

cssRule('.lm_splitter.lm_horizontal', {
    height: '100%',
    float: 'left'
});

cssRule('.lm_splitter.lm_horizontal .lm_drag_handle', {
    position: 'absolute',
    width: '25px',
    left: '-10px',
    cursor: 'e-resize',
    height: '100%'
});

cssRule('.lm_header', {
    position: 'relative',
    overflow: 'visible',
});

cssRule('.lm_header * ', {
    boxSizing: 'content-box !important',
});

cssRule('.lm_header > ul', {
    listStyleType: 'none',
    margin: '0',
    padding: '0'
});

cssRule('.lm_header .lm_controls', {
    right: '3px',
    position: 'absolute'
});

cssRule('.lm_header .lm_controls > li', {
    width: '18px',
    height: '18px',
    float: 'left',
    textAlign: 'center',
    cursor: 'pointer'
});

cssRule('.lm_header .lm_tabs', {
    position: 'absolute'
});

cssRule('.lm_header .lm_tab', {
    float: 'left',
    padding: '0px 10px 5px',
    height: '14px',
    marginTop: '1px',
    cursor: 'pointer',
    position: 'relative',
    paddingRight: '25px'
});

cssRule('.lm_header .lm_tab i', {
    height: '19px',
    width: '2px',
    position: 'absolute'
});

cssRule('.lm_header .lm_tab i.lm_left', {
    left: '-2px',
    top: '0'
});

cssRule('.lm_header .lm_tab i.lm_right', {
    right: '-2px',
    top: '0'
});

cssRule('.lm_header .lm_tab .lm_title', {
    textOverflow: 'ellipsis',
    display: 'inline-block',
    overflow: 'hidden'
});

cssRule('.lm_header .lm_tab .lm_close_tab', {
    position: 'absolute',
    right: '0',
    top: '0',
    width: '14px',
    height: '14px',
    textAlign: 'center'
});

cssRule('.lm_drop_tab_placeholder', {
    width: '100px',
    height: '10px',
    float: 'left',
    visibility: 'hidden'
});

cssRule('.lm_dragProxy', {
    position: 'absolute',
    zIndex: 3,
    top: '0',
    left: '0'
});

cssRule('.lm_dragProxy .lm_header', {
    background: 'transparent'
});

cssRule('.lm_dragProxy .lm_content', {
    borderTop: 'none',
    overflow: 'hidden'
});

cssRule('.lm_dropTargetIndicator', {
    position: 'absolute',
    zIndex: 2,
    display: 'none'
});

cssRule('.lm_dropTargetIndicator .lm_inner', {
    position: 'relative',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0'
});

cssRule('.lm_transition_indicator', {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'none',
    width: '20px',
    height: '20px',
    zIndex: 2
});


cssRule('.lm_popin', {
    width: '20px',
    height: '20px',
    position: 'absolute',
    zIndex: 9999,
    bottom: '0',
    right: '0'
});

cssRule('.lm_popin > *', {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%'
});

cssRule('.lm_popin > .lm_bg', {
    zIndex: 1
});

cssRule('.lm_popin > .lm_icon', {
    zIndex: 2
});
