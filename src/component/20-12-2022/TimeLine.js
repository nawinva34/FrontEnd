import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const TimeLine = () => (
  <Timeline style={{color: "white" , marginLeft: "-350px"}} mode="left">
    <Timeline.Item color="yellow" label="08.42"><p>Outlines keep you honest. And keep structure</p></Timeline.Item>
    <Timeline.Item color="green" label="10.00"><p>AEOL meeting</p></Timeline.Item>
    <Timeline.Item color="red" label="14.37"><span>Make deposit<span style={{color : "blue"}}>USD 700</span>.to ESL</span></Timeline.Item>
    <Timeline.Item color="blue" label="16.50"><p>Indulging in poorly driving and keep structure keep great</p></Timeline.Item>
    <Timeline.Item color="red" label="21.03"><span>New order laced<span style={{color : "blue"}}>#XF-2356</span></span></Timeline.Item>
    <Timeline.Item color="blue" label="16.50"><p>Indulging in poorly driving and keep structure keep great</p></Timeline.Item>
    <Timeline.Item color="red" label="21.30"><span>New order placed<span style={{color : "blue"}}>#XF-2356</span></span></Timeline.Item>
    <Timeline.Item color="green" label="10.30"><p>Finance KPI Mobile app launch preparion meeting</p></Timeline.Item>
  </Timeline>
);
export default TimeLine;