import yayJpg from '../assets/yay.jpg';
import {Button, message, Slider, Space, Steps, Switch} from "antd";
import {useEffect, useState} from "react";

const description = 'This is a description.';
export default function HomePage() {
    useEffect(()=>{
        message.warning("123")
    },[])

    const [disabled, setDisabled] = useState(false);

    const onChange = (checked: boolean) => {
        setDisabled(checked);
    };
    return (
        <div>
            <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Space>
            <Steps
                current={1}
                items={[
                    {
                        title: 'Finished',
                        description,
                    },
                    {
                        title: 'In Progress',
                        description,
                        subTitle: 'Left 00:00:08',
                    },
                    {
                        title: 'Waiting',
                        description,
                    },
                ]}
            />
            <Slider defaultValue={30} disabled={disabled} />
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
            Disabled: <Switch size="small" checked={disabled} onChange={onChange} />
        </div>
    );
}
