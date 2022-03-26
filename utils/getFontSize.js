export function fluidType(minScreen, maxScreen, minFont, maxFont) {
  return `
    font-size: calc(${minFont} + (${
    parseInt(maxFont) - parseInt(minFont)
  }) * (100vw - ${minScreen})/(${parseInt(maxScreen) - parseInt(minScreen)}));
  `;
}

export default fluidType;
