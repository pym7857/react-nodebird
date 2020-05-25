import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
    return (
        <div>
          {postData.split(/(#[^\s]+)/g).map((v) => {
            if (v.match(/#[^\s]+/)) {  // 쪼개진 애가 해시태그면 링크로 바꿔주기
              return (
                <Link 
                    href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }} 
                    key={v}
                >
                    <a>{v}</a>
                </Link>
              );
            }
            return v; // 해시태그(#)가 아니라면, 그냥 문자열만 리턴 
          })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired,
};

export default PostCardContent;



