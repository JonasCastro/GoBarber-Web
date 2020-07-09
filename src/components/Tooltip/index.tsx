import React from 'react';

import { Container } from './styles';

interface TooltipsProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipsProps> = ({ className, title, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
