import React from 'react';
import styled from 'styled-components';

import { Flex } from '@strapi/design-system/Flex';

import { useFolderCard } from './FolderCardContext';

const StyledBox = styled(Flex)`
  user-select: none;
`;

function FolderCardBody(props) {
  const { id } = useFolderCard();

  return (
    <StyledBox
      {...props}
      id={`${id}-title`}
      alignItems="flex-start"
      direction="column"
      position="relative"
      zIndex={3}
    />
  );
}

export default FolderCardBody;
