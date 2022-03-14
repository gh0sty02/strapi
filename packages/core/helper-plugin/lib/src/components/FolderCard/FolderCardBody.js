import React from 'react';
import styled from 'styled-components';

import { Flex } from '@strapi/design-system/Flex';

const StyledBox = styled(Flex)`
  user-select: none;
`;

export const FolderCardBody = props => {
  return (
    <StyledBox
      {...props}
      alignItems="flex-start"
      direction="column"
      position="relative"
      zIndex={3}
    />
  );
};
