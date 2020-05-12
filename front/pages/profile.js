import React from 'react';
import { Button, List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    return (
        <div>
            {/* 닉네임 수정폼 */}
            <NicknameEditForm />

            {/* 팔로잉 목록 */}
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={ ['제로초1', '제로초2', '제로초3'] }
                renderItem={item => (
                    <List.Item style={{ maringTop: '20px' }}>
                        <Card actions={[<StopOutlined key="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />

            {/* 팔로워 목록 */}
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={ ['제로초1', '제로초2', '제로초3'] }
                renderItem={item => (
                    <List.Item style={{ maringTop: '20px' }}>
                        <Card actions={[<StopOutlined key="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Profile;