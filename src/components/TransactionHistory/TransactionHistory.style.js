import styled from 'styled-components';

export const Th = styled.th`
  background-color: #06bbd8;
  color: #def0f8;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 20px;
  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;
export const Td = styled.td`
  padding: 10px 20px;
  text-align: center;
  color: #92979d;
  text-transform: capitalize;
  &:not(:last-child) {
    border-right: 1px solid #fff;
  }
`;
export const Tr = styled.tr``;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  ${Tr}:nth-child(odd) {
    background-color: #e7ecf2;
  }
`;
