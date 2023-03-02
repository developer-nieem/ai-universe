
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

  const aiBlogsCard = document.getElementById("AiBlogsCard");



  data.forEach((singlePost) => {

    //   feature list
// const featurList =  document.getElementById('featurList');
    // console.log(singlePost);
    aiBlogsCard.innerHTML += `
         <div class="col">
              <div class="card h-100 p-2">
                        <img src="${singlePost.image}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">features</h5>
                        <div id="featurList" class="card-text">   
                            ${singlePost.features.map(feature =>{
                                `${feature}`
                            })}
                        </div>
                    </div>
                    <div class="card-footer d-flex  justify-content-between align-items-center">
                        <div>
                            <h4> ${singlePost.name}</h4>
                            <i class="bi bi-calendar3"></i> <span>${singlePost.published_in}</span>
                        </div>
                        <div>
                            <button onclick="loadAIPostDetails('${singlePost.id}')" class="rounded-circle border-0"><i class="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
              </div>
         </div>
    
    `
  });
};

// load AI post details 
const loadAIPostDetails = id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayAiData(data.data.tools))
      .catch((error) => console.log(error));
}


