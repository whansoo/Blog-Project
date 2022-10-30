import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";

const TagsBlock = styled.div`
  color: #4c4c4c;
  font-family: Gilroy,Noto Sans KR,sans-serif;
  font-weight: 500;
  letter-spacing: .7px;
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
         color: ${palette.cyan[6]};
    }
  }
`;

const Tags = ({ tags }) => {
    return (
        <TagsBlock>
           {tags.map(tag => (
             <Link className="tag" to={`/?tag=${tag}`} key={tag}>#{tag}</Link>
           ))}
        </TagsBlock>
    );
};

export default Tags;