import React from 'react';

import { ROUTES } from '../../../pages/Navigation/routes';
import { Container, Image, StyledLink } from './StyledLogo';

export const Logo = () => {
  return (
    <StyledLink to={ROUTES.HOMEPAGE}>
      <Container>
        <Image src='https://res.cloudinary.com/dg-home/image/upload/v1604312381/General/dg-home-logo_onswjp.png' />
      </Container>
    </StyledLink>
  )
};