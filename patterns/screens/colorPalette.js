import React from 'react';

import { Palette } from '@molecules/palette';
import { COLORS } from '@root/constants';

export const ColorPalette = (props) => (
  <Palette title="Solarised" colors={COLORS} />
);

export default ColorPalette;
