// Get Api Data
const getAiData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAiData(data.data.tools))
    .catch((error) => console.log(error));
};

// dicler function
getAiData();

// display Api Data
const displayAiData = (data) => {
  console.log(data);
  const aiBlogsCard = document.getElementById("AiBlogsCard");
  data.forEach((singlePost) => {
    console.log(singlePost);
  });
};
