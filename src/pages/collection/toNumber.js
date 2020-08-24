import React from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css';
// 主题风格
import 'codemirror/theme/solarized.css';
// 代码模式
import 'codemirror/mode/javascript/javascript';
//ctrl+空格代码提示补全
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/anyword-hint.js';
//代码高亮
import 'codemirror/addon/selection/active-line';
//折叠代码
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';

const code = `
    function chunk(array, size = 1) {
        size = Math.max(toInteger(size), 0)
        const length = array == null ? 0 : array.length
        if (!length || size < 1) {
            return []
        }
        let index = 0
        let resIndex = 0
        const result = new Array(Math.ceil(length / size))

        while (index < length) {
            result[resIndex++] = slice(array, index, (index += size))
        }
        return result
    }
`;

class ToNumber extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // location: props.history.location
        };
    }
    render() {
        return (
            <>
                <h2>toNumber</h2>
                <h4>  </h4>
                <div>
                    <CodeMirror
                        value={code}
                        options={{
                            mode: {name:'text/css'},
                            theme: 'solarized dark',
                            autofocus:true,//自动获取焦点
                            styleActiveLine:true,//光标代码高亮
                            lineNumbers: true, //显示行号
                            smartIndent:true,  //自动缩进
                            //start-设置支持代码折叠
                            lineWrapping:true,
                            foldGutter:true,
                            gutters:['CodeMirror-linenumbers','CodeMirror-foldgutter'],
                        }}
                    />

                </div>
            </>
        );
    }
}

export default ToNumber;
