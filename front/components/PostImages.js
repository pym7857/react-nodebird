import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);    // 확대 이미지를 보여줄지 말지 

    const onZoom = useCallback(() => {
        setShowImagesZoom(true);
    }, []);

    /* 확대 된 이미지 끄는것은 component내에서 하는것이기 때문에, 이 함수를 props로 넘겨줘야 한다. */
    const onClose = useCallback(() => {
        setShowImagesZoom(false);
    }, []); 

    if (images.length === 1) {  // 이미지가 1장 일때 
        return (
            <>
                <img src={`http://localhost:3065/${images[0].src}`} onClick={onZoom}/>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        );
    }
    if (images.length === 2) {  // 이미지가 2장 일때 
        return (
            <>
                <div>
                    <img src={`http://localhost:3065/${images[0].src}`} width="50%" height="50%" onClick={onZoom}/>
                    <img src={`http://localhost:3065/${images[1].src}`} width="50%" height="50%" onClick={onZoom}/>
                </div>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        );
    }            
    if (images.length === 3) {  // 이미지가 3장 일때 
        return (
            <>
                <div>
                    <img src={`http://localhost:3065/${images[0].src}`} width="50%" height="50%" onClick={onZoom}/>
                    <img src={`http://localhost:3065/${images[1].src}`} width="50%" height="50%" onClick={onZoom}/>
                    <img src={`http://localhost:3065/${images[2].src}`} width="50%" height="50%" onClick={onZoom}/>
                </div>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        );
    }                           
    else { // 이미지가 4장 이상 일때 
        return (
            <>
                <div>
                    <img src={`http://localhost:3065/${images[0].src}`} width="50%" height="50%" onClick={onZoom}/>
                    <img src={`http://localhost:3065/${images[1].src}`} width="50%" height="50%" onClick={onZoom}/>
                    <br />
                    <img src={`http://localhost:3065/${images[2].src}`} width="50%" height="50%" onClick={onZoom}/>
                    {/* 더 보기 버튼 */}
                    <div style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }} >
                        <PlusOutlined />
                        <br />
                        {images.length - 3}개의 사진 더보기
                    </div>
                </div>
                {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
            </>
        );
    }
};

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
    })).isRequired,
};

export default PostImages;