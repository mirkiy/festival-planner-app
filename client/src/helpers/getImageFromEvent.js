const getImageFromEvent = (event, imageSize) => {
  for (const key in event.images) {
    if (Object.hasOwnProperty.call(event.images, key)) {
      const element = event.images[key];
      return element.versions[imageSize];
    }
  }
};

export default getImageFromEvent;