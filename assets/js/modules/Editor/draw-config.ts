function getRandomColor() {
  const o = Math.round,
    r = Math.random,
    s = 255

  return 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')'
}

export const Drawings = {
  circle: {
    title: 'Circle',
    image: '/images/shapes/circle.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  ellipse: {
    title: 'Ellipse',
    image: '/images/shapes/ellipse.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  rect: {
    title: 'Rectangle',
    image: '/images/shapes/rectangle.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  polygon: {
    title: 'Polygon',
    image: '/images/shapes/polygon.svg',
    config: {
      sides: 5,
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  triangle: {
    title: 'Triangle',
    image: '/images/shapes/triangle.svg',
    config: {
      fill: getRandomColor(),
      stroke: getRandomColor()
    }
  },
  arrow: {
    title: 'Arrow',
    image: '/images/shapes/arrow.svg',
    config: {
      stroke: getRandomColor(),
      strokeWidth: 15
    }
  },
  line: {
    title: 'Line',
    image: '/images/shapes/line.svg',
    config: {
      stroke: getRandomColor(),
      strokeWidth: 15
    }
  },
  pencil: {
    title: 'Free Style',
    image: '/images/shapes/pen.svg',
    config: {
      stroke: getRandomColor(),
      strokeWidth: 15
    }
  }
}