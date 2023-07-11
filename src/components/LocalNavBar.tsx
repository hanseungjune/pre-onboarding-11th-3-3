import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { GoIssueOpened } from 'react-icons/go';
import COLOR from '@/constants/color';

const LocalNavBar = () => {
  return (
    <LocalNavBarStyle>
      <ul>
        <li>
          <Link to="">
            <GoIssueOpened />
            Issues
            <span>1k</span>
          </Link>
        </li>
      </ul>
    </LocalNavBarStyle>
  );
};

export default LocalNavBar;

const LocalNavBarStyle = styled.nav`
  line-height: 48px;
  padding: 0 16px;
  font-size: 0.875rem;

  ul {
    li {
      display: flex;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 7px;
        padding: 0 0.5rem;
        font-weight: 600;
        position: relative;

        svg {
          font-size: 18px;
          fill: ${COLOR.DarkGray};
        }

        span {
          font-size: 0.75rem;
          padding: 0 6px;
          background-color: rgba(110, 118, 129, 0.4);
          height: 20px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          background-color: ${COLOR.LocalNavFocus};
          bottom: -1px;
        }
      }
    }
  }
`;
