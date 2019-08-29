import React, { Component } from 'react';
import Svg, {Circle, Rect, Path} from 'react-native-svg';
import * as d3 from 'd3-shape';
import {Dimensions, Text} from 'react-native';
const {width, height} = Dimensions.get('window')

const line = d3.line()
             .x(d=>d.x)
             .y(d=>d.y)
             .curve(d3.curveCatmullRom.alpha(1))
             ([
                 {x: 0, y: 0},
                 {x: width/3, y:0 }
             ])

const line2 = d3.line()
             .x(d=>d.x)
             .y(d=>d.y)
             .curve(d3.curveCatmullRom.alpha(0.5))
             ([
                 {x: width/3 + 0, y:0},
                 {x: width/3 + 10, y: 25}, 
                 {x: width/3 + 40, y: 60},
                 {x: width/3 + 70, y:25},
                 {x: width/3 + 80, y: 0},
             ])
const line3 =d3.line()
                .x(d=>d.x)
                .y(d=>d.y)
                ([
                 {x: width/3 + 80, y: 0},
                 {x: width,  y:0 }
             ])
const newLine = line + line2 + line3

class BottomNav2 extends Component {
    render() {
        console.log(line, line2)
        return (
            <Svg
            width={width}
            height={'100'}
            style = {{backgroundColor: 'white'}}
        >
            <Path
        d={newLine}
        stroke = "black"
        fill = 'white'
        strokeDasharray = "0"
        strokeLinejoin = "200"
        strokeDashoffset = '1500'
    />
           <Text> Salmonder </Text> 
        </Svg>
        );
    }
}

export default BottomNav2;