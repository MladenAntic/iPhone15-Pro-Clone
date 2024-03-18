import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  main24mmImg,
  main28mmImg,
  main35mmImg,
  telephoto120mmImg,
  telephoto48mmImg,
  ultrawide13mmImg,
  ultrawideMacroImg,
  whiteImg,
  yellowImg,
  style1Img,
  style2Img,
  style3Img,
  iconAppleImg,
  iconCarrierImg,
  iconDeliveryImg,
  iconPersonalImg,
  iconSpecialistImg,
  iconTradeImg,
  iconShoppingImg,
} from "../utils";

import {
  BellSlashIcon,
  MoonIcon,
  CameraIcon,
  BoltIcon,
  SpeakerWaveIcon,
  LanguageIcon,
  MagnifyingGlassPlusIcon,
  Square2StackIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export const navLists = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const emblaSlides = [
  {
    image: ultrawideMacroImg,
    span: "0.5x",
    text: "Ultra Wide | Macro",
  },
  {
    image: ultrawide13mmImg,
    span: "0.5x",
    text: "Ultra Wide | 13mm",
  },
  {
    image: main24mmImg,
    span: "1x",
    text: "Main | 24mm",
  },
  {
    image: main28mmImg,
    span: "1x",
    text: "Main | 28mm",
  },
  {
    image: main35mmImg,
    span: "1x",
    text: "Main | 35mm",
  },
  {
    image: telephoto48mmImg,
    span: "2x",
    text: "Telephoto | 48mm",
  },
  {
    image: telephoto120mmImg,
    span: "2x",
    text: "Telephoto | 120mm",
  },
];

export const actions = [
  {
    icon: <BellSlashIcon className="w-5 h-5 text-white" />,
    text: "Silent Mode",
    active: true,
  },
  {
    icon: <MoonIcon className="w-5 h-5 text-gray" />,
    text: "Focus",
  },
  {
    icon: <CameraIcon className="w-5 h-5 text-gray" />,
    text: "Camera",
  },
  {
    icon: <BoltIcon className="w-5 h-5 text-gray" />,
    text: "Flashlight",
  },
  {
    icon: <SpeakerWaveIcon className="w-5 h-5 text-gray" />,
    text: "Voice Memo",
  },
  {
    icon: <LanguageIcon className="w-5 h-5 text-gray" />,
    text: "Translate",
  },
  {
    icon: <MagnifyingGlassPlusIcon className="w-5 h-5 text-gray" />,
    text: "Magnifier",
  },
  {
    icon: <Square2StackIcon className="w-5 h-5 text-gray" />,
    text: "Shortcut",
  },
  {
    icon: <UserIcon className="w-5 h-5 text-gray" />,
    text: "Accessibility",
  },
];

export const styles = [
  {
    image: style1Img,
    span: "Contact Poster.",
    text: "Create your own poster that contacts will see when you call. Pick a favorite pic or Memoji, pair it with a favorite font, and there you have it — your very own calling card.",
  },
  {
    image: style2Img,
    span: "Name Drop.",
    text: "Want to swap contact info with someone? Just bring your iPhone close to theirs. You can both choose what you want to share, and the information transfers instantly.",
  },
  {
    image: style3Img,
    span: "Live Stickers.",
    text: "Touch and hold an object in a photo to lift it from the background and create a sticker. Add effects like Puffy and Shiny. Or create animated stickers from Live Photos.",
  },
];

export const accordionItems = [
  {
    title: "iPhone and Apple Watch",
    content:
      "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.21 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.",
  },
  {
    title: "iPhone and Mac",
    content:
      "You can answer calls or messages from your iPhone directly on your Mac. Copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And with iCloud, you can access your favorite files from either your iPhone or Mac.",
  },
  {
    title: "iPhone and AirPods",
    content:
      "Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control to provide the best listening experience across different environments and interactions throughout the day.",
  },
];

export const emblaSlides2 = [
  {
    icon: iconTradeImg,
    title: "Save with Apple Trade In.",
    content:
      "Get $180–$630 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11 or higher.*",
  },
  {
    icon: iconAppleImg,
    title: "Pay over time, interest‑free.",
    content:
      "When you choose to check out with Apple Card Monthly Installments.22",
  },
  {
    icon: iconCarrierImg,
    title: "iPhone carrier deals. Right here at Apple. For as low as $0.",
    content:
      "Includes trade‑in and carrier credits. AT&T: up to $1000. T‑Mobile: up to $800. Verizon: up to $830.23",
  },
  {
    icon: iconDeliveryImg,
    title: "Get flexible delivery and easy pickup.",
    content:
      "Choose two‑hour delivery from an Apple Store, free delivery, or easy pickup options.",
  },
  {
    icon: iconSpecialistImg,
    title: "Shop live with a Specialist.",
    content:
      "Let us guide you live over video and answer all of your questions.",
  },
  {
    icon: iconPersonalImg,
    title: "Get to know your new iPhone.",
    content:
      "Learn how to get the most out of your new iPhone with a free one‑on‑one Personal Session.",
  },
  {
    icon: iconShoppingImg,
    title: "Explore a shopping experience designed around you.",
    content: "When you shop in the Apple Store app.",
  },
];
