type ImageData = {
  title: string;
  file: {
    url: string;
    details: {
      image: {
        width: number;
        height: number;
      };
    };
  };
};

export function getImageData(imageData: ImageData) {
  const { title, file } = imageData;
  const { url, details } = file;
  const image = { url, details, title };

  return image;
}
