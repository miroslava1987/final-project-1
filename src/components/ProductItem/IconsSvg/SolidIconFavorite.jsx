import React from 'react';

import { ItemFavoriteContainer } from '../StyledProductItem';

export const SolidIconFavorite = (props) => {
  const { onClick } = props
  return (
    <ItemFavoriteContainer>
      <svg width='100%' height='100%' viewBox='0 0 485 485' onClick={onClick}>
        <path d='M343.611,22.543c-22.614,0-44.227,5.184-64.238,15.409c-13.622,6.959-26.135,16.205-36.873,27.175
       c-10.738-10.97-23.251-20.216-36.873-27.175c-20.012-10.225-41.625-15.409-64.239-15.409C63.427,22.543,0,85.97,0,163.932
       c0,55.219,29.163,113.866,86.678,174.314c48.022,50.471,106.816,92.543,147.681,118.95l8.141,5.261l8.141-5.261
       c40.865-26.406,99.659-68.479,147.681-118.95C455.837,277.798,485,219.151,485,163.932C485,85.97,421.573,22.543,343.611,22.543z'
        />
        <g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g /><g />
      </svg>
    </ItemFavoriteContainer>
  )
}
