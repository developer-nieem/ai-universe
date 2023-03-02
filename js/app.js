
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
                            <button onclick="loadAIPostDetails('${singlePost.id}')" class="rounded-circle border-0" data-bs-toggle="modal" data-bs-target="#aiDetailsModal"><i class="bi bi-arrow-right"></i></button>
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
      .then((data) => displayAIPostDetails(data))
      .catch((error) => console.log(error));
}

// display single details
const displayAIPostDetails = (details) =>{

    const modalBody =  document.getElementById('modalBody');
    modalBody.innerHTML = `
    <div class="row">
            <div class="col-md-6 my-2">
                <div class="card bg-light " >
                    <div class="card-body  ">
                      <h5 class="card-title">ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human conversation.</h5>

                      <div class="row gap-3 justify-content-center text-center">
                        <div class="col-md-4 bg-white p-3 text-success rounded w-25"><p>$10/month Basic</p></div>
                        <div class="col-md-4 bg-white p-3 text-success rounded w-25"><p>$10/month Basic</p></div>
                        <div class="col-md-4 bg-white p-3 text-success rounded w-25"><p>$10/month Basic</p></div>                  
                      </div>
                      
                      
                      <!-- feature and Integrations part start here -->
                      <div class="row">
                        <div class="col-md-6 my-2">
                            <h3>Features</h3>
                        </div>
                        <div class="col-md-6">
                            <h3>Integrations</h3>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-6">
                <div class="card" >
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                  </div>
            </div>
        </div>
    `
}
