/**
 * Returns a map of key names that were un-equal to value objects showing the
 * discrepancies between the components.
 */
const compareEquivalentUnknownTypeBodies = (
  config: any,
  expectedBody: string,
  generatedBody: string | Uint8Array
): Object => {
  const expectedParts = {Value: expectedBody};
  const generatedParts = {
    Value: generatedBody instanceof Uint8Array ? config.utf8Encoder(generatedBody) : generatedBody
  };

  return compareParts(expectedParts, generatedParts);
}
