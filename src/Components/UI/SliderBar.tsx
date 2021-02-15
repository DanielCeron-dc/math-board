import React from 'react';
import Column from '../Position/Column';

type SliderBarProps = {
    text: string,
    value: number, 
    onChange: (val: number) => void
};

const SliderBar:React.FC<SliderBarProps> = (props) => {
    
    return <div style = {{margin: 20}}>
            <Column alignItems = "start">
                <h5 style = {{marginBottom: 10, marginTop: 10, marginLeft: 5}}>{props.text}</h5>
                <input type="range" min="1" max="50" value={props.value} onChange = {(val) => props.onChange(parseInt(val.currentTarget.value))}></input>
            </Column>
        </div>
}
export default SliderBar;