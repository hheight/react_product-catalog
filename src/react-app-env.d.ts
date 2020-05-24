// / <reference types=string />

interface Phone {
  age: number;
  type: string;
  id: string;
  imageUrl: string;
  name: string;
  snippet: string;
  price: number;
  discount: number;
  screen: string;
  capacity: string;
  ram: string;
}

interface PhoneDetails {
  additionalFeatures: string;
  android: {
    os: string;
    ui: string;
  };
  availability: string[];
  battery: {
    standbyTime: string;
    talkTime: string;
    type: string;
  };
  camera: {
    features: string[];
    primary: string;
  };
  connectivity: {
    bluetooth: string;
    cell: string;
    gps: boolean;
    infrared: boolean;
    wifi: string;
  };
  description: string;
  display: {
    screenResolution: string;
    screenSize: string;
    touchScreen: boolean;
  };
  hardware: {
    accelerometer: boolean;
    audioJack: string;
    cpu: string;
    fmRadio: boolean;
    physicalKeyboard: boolean;
    usb: string;
  };
  id: string;
  images: string[];
  name: string;
  sizeAndWeight: {
    dimensions: string[];
    weight: string;
  };
  storage: {
    flash: string;
    ram: string;
  };
}

interface CarouselSlide {
  id: number;
  name: string;
  src: string;
}

type CarouselSlidesProps = {
  slides: CarouselSlide[];
  toMove: number;
  duration: number;
};

type CarouselRectanglesProps = {
  slides: CarouselSlide[];
  active: number;
};

type CarouselControlProps = {
  changeSlide: (value: string) => void;
  direction: string;
};
type SliderProps = {
  phones: Phone[];
  position: number;
  step: number;
  frameSize: number;
  itemWidth: number;
  marginsWidth: number;
  animationDuration: number;
};

type SliderArrowProps = {
  handleSlide: (direction: string) => void;
  direction: string;
  position: number;
  maxPosition: number;
};