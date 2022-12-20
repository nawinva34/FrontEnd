import React from "react";
import { Tabs } from "antd";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const { TabPane } = Tabs;

const CreateTab = () => {
  return (
    <div>
      <div
        style={{
          background: "#f3f3f3",
          display: "block",
          height: "100vh",
          padding: 20,
        }}
      >
        <Tabs>
          <TabPane tab="Tab 1" key="1">
            <Tab1 />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <Tab2 />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            <Tab3 />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default CreateTab;
