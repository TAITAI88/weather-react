export const availableLocations = [
  {
    cityName: "宜蘭縣",
    locationName: "宜蘭",
  },
  {
    cityName: "基隆市",
    locationName: "基隆",
  },
  {
    cityName: "臺北市",
    locationName: "臺北",
  },
  {
    cityName: "新北市",
    locationName: "	淡水",
  },
  {
    cityName: "桃園市",
    locationName: "新屋",
  },
  {
    cityName: "新竹縣",
    locationName: "新竹",
  },
  // {
  //   cityName: "苗栗縣",
  //   locationName: "苗栗",
  // },
  {
    cityName: "臺中市",
    locationName: "臺中",
  },
  {
    cityName: "彰化縣",
    locationName: "彰師大",
  },
  {
    cityName: "南投縣",
    locationName: "日月潭",
  },
  // {
  //   cityName: "雲林縣",
  //   locationName: "溪口",
  // },
  {
    cityName: "嘉義市",
    locationName: "嘉義",
  },
  {
    cityName: "臺南市",
    locationName: "永康",
  },
  {
    cityName: "高雄市",
    locationName: "高雄",
  },
  {
    cityName: "屏東縣",
    locationName: "恆春",
  },
  {
    cityName: "臺東縣",
    locationName: "臺東",
  },
  {
    cityName: "花蓮縣",
    locationName: "花蓮",
  },
  {
    cityName: "金門縣",
    locationName: "金門",
  },
  {
    cityName: "連江縣",
    locationName: "馬祖",
  },
  {
    cityName: "澎湖縣",
    locationName: "澎湖",
  },
];

export const findLocation = (cityName) => {
  return availableLocations.find((location) => location.cityName === cityName);
};
