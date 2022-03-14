import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BaseLink } from '@strapi/design-system/BaseLink';
import { Box } from '@strapi/design-system/Box';
import { Stack } from '@strapi/design-system/Stack';
import Folder from '@strapi/icons/Folder';

import { useId } from './utils/useId';
import { FolderCardContext } from './FolderCardContext';

const LinkWrapper = styled(BaseLink)`
  height: 100%;
  left: 0;
  position: absolute;
  opacity: 0;
  top: 0;
  width: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const StyledFolder = styled(Folder)`
  path {
    fill: currentColor;
  }
`;

export const FolderCard = ({
  children,
  id,
  startAction,
  ariaLabel,
  href,
  onDoubleClick,
  ...props
}) => {
  const generatedId = useId('folder-card', id);

  return (
    <FolderCardContext.Provider value={{ id: generatedId }}>
      <Box position="relative" {...props}>
        <LinkWrapper
          href={href}
          textDecoration="none"
          onClick={event => event.preventDefault()}
          onDoubleClick={onDoubleClick}
          zIndex={1}
          tabIndex={-1}
          aria-label={ariaLabel}
          aria-hidden
        />

        <Stack
          hasRadius
          background="neutral0"
          shadow="tableShadow"
          paddingBottom={3}
          paddingLeft={4}
          paddingRight={4}
          paddingTop={3}
          spacing={3}
          horizontal
          cursor="pointer"
        >
          {startAction}

          <Box
            hasRadius
            background="secondary100"
            color="secondary500"
            paddingBottom={2}
            paddingLeft={3}
            paddingRight={3}
            paddingTop={2}
          >
            <StyledFolder />
          </Box>

          {children}
        </Stack>
      </Box>
    </FolderCardContext.Provider>
  );
};

FolderCard.defaultProps = {
  id: undefined,
};

FolderCard.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDoubleClick: PropTypes.func.isRequired,
  startAction: PropTypes.element.isRequired,
};
