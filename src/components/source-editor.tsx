import * as React from 'react';
import { style } from 'typestyle';

const editorClass = style({ });

export type SourceEditorProps = {};

export type SourceEditorState = { };

export class SourceEditorComponent extends React.Component<SourceEditorProps, SourceEditorState> {
    public render() {
        return (<div className={editorClass}>Editor</div>);
    }
}
