const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "EggMenNFTs";
const description = "EggMenNFTs are collectables. EggMenNFTs are awesome. EggMenNFTs are to the moon. 🚀 🌝";
const baseUri = "ipfs://Qmdr7EfRyzcYKvmjzfrzbUodDAz4957ekaUyW27vEwcXJt";
const cid = "Qmdr7EfRyzcYKvmjzfrzbUodDAz4957ekaUyW27vEwcXJt";

const solanaMetadata = {
  symbol: "",
  seller_fee_basis_points: 1000, 
  external_url: "",
  creators: [
    {
      address: "",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { 
        name: "Background",
        options: {
          blend: MODE.darken,
          opacity: 0.6,
        },
      },
      {
        name: "Head",
        options: {
          blend: MODE.hardLight,
          opacity: 0.6,
        },
      },
      { 
        name: "Face",
      },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 10,
  quality: 90,
  delay: 1000,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 32 / 128,
};

const background = {
  generate: false,
  brightness: "0%",
  static: true,
  default: "#F0F5F9",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1000000;

const preview = {
  thumbPerRow: 3,
  thumbWidth: 512,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 30,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 100,
  quality: 50,
  delay: 650,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  cid,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
