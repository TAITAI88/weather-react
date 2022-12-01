const URL =
  "https://gis.taiwan.net.tw/XMLReleaseALL_public/scenic_spot_C_f.json";
fetch(URL)
  .then((response) => response.json())
  .then((sightsData) => {
    const myData = sightsData.XML_Head.Infos.Info;
    console.log("my data", myData);
    console.log("my data[0] id", myData[0].Id);
  })
  .catch((err) => {
    console.log("Eror", err);
  });
