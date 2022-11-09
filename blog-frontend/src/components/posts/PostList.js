import React from "react";
import styled from "styled-components";
// import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import Tags from "../common/Tags";
import { Link } from "react-router-dom";
import SubInfo from "../common/SubInfo";
import CreateIcon from '@mui/icons-material/Create';

const Wrap = styled.div`
border-top: 2px solid ${palette.gray[2]};
padding-top: 20px;
`
const PostListBlock = styled.div`
  padding-left: 1rem;
 padding-right:1rem;
   width:1150px;
  margin:0 auto; /*중앙 정렬*/
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding: 41px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 3px solid ${palette.gray[2]};
  }
  h2 {
    font-family: Noto Sans KR, sans-serif;
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    font-family: Noto Sans KR, sans-serif;
    font-size: 16px;
    color: #666666;
    margin-top: 1rem;
  }
`;
const PostTag = styled.div`
    display: inline-block;
    height: 32px;
    border: 1px solid #d6d6d6;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 16px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
    :hover {
      background-color: #d6d6d6;
    }
`

const PostTagblock = styled.div`
  padding-left: 1rem;
 padding-right:1rem;
   width:  1000px;
  margin:0 auto; /*중앙 정렬*/
`

/* span 사이에 가운뎃점 문자 보여 주기 */
//   span + span:before {
//     color: ${palette.gray[4]};
//     padding-left: 0.25rem;
//     padding-right: 0.25rem;
//     content: '\B7'; /* 가운뎃점 문자 */
//   }
// `;


// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
// `;


const PostItem = ({ post }) => {
    const {publishedDate, user, tags, title, body, _id} = post; 
return (
  <PostItemBlock>
    <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
    </h2>
    <p>{body}</p>
    <Tags tags={tags} />
    <SubInfo username={user.username} publishedDate={new Date(publishedDate)}/>
  </PostItemBlock>
);
};

const PostTags = ({ post }) => {
  const {tags} = post; 
return (
  <PostTag>
  <Tags tags={tags} />
  </PostTag>
);
};




const PostList = ({ posts, loading, error, showWriteButton }) => {
    //에러 발생 시
    if (error) {
        return <PostListBlock>에러가 발생했습니다.</PostListBlock>
    }
return (
<Wrap>
<PostTagblock>
{!loading && posts && (
        <div>
        {posts.map(post => (
            <PostTags post={post} key={post._id}/>
        ))}
         </div>
      )}
  </PostTagblock>
  <PostListBlock>
   <WritePostButtonWrapper>
        {showWriteButton && (<button style={{border: 0, outline: 0, backgroundColor: '#fff'}}><Link to="/write">
        <CreateIcon/>click
        </Link></button>
      )}
      
    </WritePostButtonWrapper>
      {/* 로딩 중이 아니고, 포스트 배열이 존재할 때만 보여 줌 */}
      {!loading && posts && (
        <div>
        {posts.map(post => (
            <PostItem post={post} key={post._id}/>
        ))}
            </div>
      )}
   
  </PostListBlock>
</Wrap>
);
};



export default React.memo(PostList);

