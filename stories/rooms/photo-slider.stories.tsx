import { PhotosSlider } from "@/components/rooms/room-details/photos-slider/photos-slider";
import { CDN_IMAGES_V13_URL } from "@/utils/constants";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Rooms/Photos Slider",
  component: PhotosSlider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PhotosSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    infinite: false,
    showCounter: true,
    images: [
      {
        alt: "Image 1",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_001_59b130215b.jpg",
      },
      {
        alt: "Image 2",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_002_42f94b5ace.jpg",
      },
      {
        alt: "Image 3",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_003_4c0c1eff63.jpg",
      },
    ],
  },
};

export const Infinite: Story = {
  args: {
    infinite: true,
    showCounter: false,
    images: [
      {
        alt: "Image 1",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_001_59b130215b.jpg",
      },
      {
        alt: "Image 2",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_002_42f94b5ace.jpg",
      },
      {
        alt: "Image 3",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_003_4c0c1eff63.jpg",
      },
      {
        alt: "Image 1",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_001_59b130215b.jpg",
      },
      {
        alt: "Image 2",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_002_42f94b5ace.jpg",
      },
      {
        alt: "Image 3",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_003_4c0c1eff63.jpg",
      },
      {
        alt: "Image 1",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_001_59b130215b.jpg",
      },
      {
        alt: "Image 2",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_002_42f94b5ace.jpg",
      },
      {
        alt: "Image 3",
        path: CDN_IMAGES_V13_URL + "EN/uploads/ssv_003_4c0c1eff63.jpg",
      },
    ],
  },
};
