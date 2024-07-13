import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

interface DotProps {
  status: 'employed' | 'pending' | 'inactive';
}

interface EmployerStatusProps {
  status: 'employed' | 'pending' | 'inactive';
  info: string;
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
`;

const StatusButton = styled.button`
  display: flex;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  transition: width 0.3s;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    border-color: #888;
  }
`;

const Dot = styled.span<DotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ status }) => {
    switch (status) {
      case 'employed':
        return 'green';
      case 'pending':
        return 'yellow';
      case 'inactive':
        return 'red';
      default:
        return 'gray';
    }
  }};
`;

const StatusText = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

const InfoText = styled.span`
  margin-left: 10px;
`;

const EmployerStatus: React.FC<EmployerStatusProps> = ({ status, info }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container>
      <StatusButton onClick={() => setExpanded(!expanded)}>
        <Dot status={status} />
        <StatusText>status</StatusText>
        {expanded && <InfoText>{info}</InfoText>}
      </StatusButton>
    </Container>
  );
};

export default EmployerStatus;
