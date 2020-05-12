import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType, // node: jsx에 들어갈 수 있는 모든 것(all)을 지칭 (=렌더링 될 수 있는 애들)
};

export default NodeBird;