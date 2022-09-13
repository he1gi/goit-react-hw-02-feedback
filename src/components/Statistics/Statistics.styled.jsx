import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  font-size: 30px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  color: ${props => {
    if (0 === props.percent || (0 < props.percent && props.percent < 30.99)) {
      return '#f90b0b';
    } else if (31 < props.percent && props.percent < 70.999) {
      return '#dddd60';
    } else if (
      (71 < props.percent && props.percent < 100) ||
      props.percent === 100
    ) {
      return '#10d510';
    }
  }};
`;
