export function magnitude(dataPoint) {
    return Math.sqrt(
      Math.pow(dataPoint.position[0], 2) +
        Math.pow(dataPoint.position[1], 2) +
        Math.pow(dataPoint.position[2], 2)
    );
  }
export function compareMagnitudes(a, b) {
    return magnitude(b) - magnitude(a);
  }