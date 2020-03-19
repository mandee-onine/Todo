import React, { PureComponent } from 'react'
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class Next extends PureComponent {

    render() {
        return (
            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                className="site-collapse-custom-collapse"
            >
                <Panel header="Level 1" key="1" className="site-collapse-custom-panel">
                    <p>{text}<img href="https://media.npr.org/assets/img/2019/12/07/img_3909_custom-2c10bb85332956a42a0ecfbce20f52a648ce891a-s800-c85.jpeg" alt="Dog" /> </p>
                </Panel>
                <Panel header="Level 2" key="2" className="site-collapse-custom-panel">
                    <p>{text} <img href="https://media.npr.org/assets/img/2019/12/07/img_3909_custom-2c10bb85332956a42a0ecfbce20f52a648ce891a-s800-c85.jpeg" alt="Dog" /></p>
                </Panel>
                <Panel header="Level 3" key="3" className="site-collapse-custom-panel">
                    <p>{text} <img href="https://media.npr.org/assets/img/2019/12/07/img_3909_custom-2c10bb85332956a42a0ecfbce20f52a648ce891a-s800-c85.jpeg" alt="Dog" /></p>
                </Panel>
            </Collapse>

        );
    }
}

export default Next