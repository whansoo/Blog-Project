import styled from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import React from 'react';

const PaginationBlock = styled.div`
  ::before,
  ::after {
	content: "";
	height: 1px;
  width: 320px;
  } 
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const PageNumber = styled.div``;

const buildLink = ({ username, tag, page }) => {
    const query = qs.stringify({ tag, page });
    return username ? `/@${username}?${query}` : `/?${query}`;
}

const Pagination = ({ page, lastPage, username, tag }) => {
    return (
        <PaginationBlock>
            <Button
              disabled={page === 1}  //1page에서는 더이상 이전 버튼을 누를 수 없다. 1페이지에서 더이상 이전으로 못가기 때문
              to={
                page === 1 ? undefined: buildLink({ username, tag, page: page - 1 })
              }
            >
                이전
            </Button>
            <PageNumber>{page}</PageNumber>
            <Button
              disabled={page === lastPage}  //마지막 페이지에서 다음 버튼을 누를 수 없다
              to={
                page === lastPage
                ? undefined
                : buildLink({ username, tag, page: page + 1 })
              }
              >
                  다음
            </Button>
        </PaginationBlock>
    )
};

export default Pagination;
