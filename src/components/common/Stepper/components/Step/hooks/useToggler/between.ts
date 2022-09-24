/**
 * Return true if the point is in the range from-to, false otherwise.
 * @param {number} point - The point to check if it's in the range
 * @param {number} from - the starting point of the range
 * @param {number} to - The end of the range.
 * @returns true or false
 */
const between = (point: number, from: number, to: number) => {
  return point >= from && point <= to;
};

export default between;
