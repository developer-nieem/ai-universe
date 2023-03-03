
// Get Api Data
const getAiData = (dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAiData(data.data.tools, dataLimit))
    .catch((error) => console.log(error));
};

// dicler function
getAiData(6);

// display Api Data
const displayAiData = (data , dataLimit) => {
    const aiBlogsCard = document.getElementById("AiBlogsCard");
    aiBlogsCard.innerText = '';
    // show 6 data
    const loadBtn=  document.getElementById('load-btn');
    if (dataLimit && data.length > 6) {
        data = data.slice(0,6);
        loadBtn.classList.remove('d-none')
    }else{
        loadBtn.classList.add('d-none');
    }
    


  
  data.forEach((singlePost) => {

    aiBlogsCard.innerHTML += `
         <div class="col">
              <div class="card h-100 p-2">
                        <img src="${singlePost.image}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">features</h5>
                        <div id="featurList" class="card-text">  
                          <p>${singlePost.features[0] ? '1. ' +singlePost.features[0]  : "no data found"}</p>
                          <p>${singlePost.features[1] ? '2. ' +singlePost.features[1]  : "no data found"}</p>
                          <p>${singlePost.features[2] ? '3. ' +singlePost.features[2]  : ""}</p>
                          <p>${singlePost.features[3] ? '4. ' +singlePost.features[3]  : ""}</p>
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
      .then((data) => displayAIPostDetails(data.data))
      .catch((error) => console.log(error));
}

// display single details
const displayAIPostDetails = (details) =>{

    console.log(details);
    const modalBody =  document.getElementById('modalBody');
    modalBody.innerHTML = `
    <div class="row">
            <div class="col-md-6 my-2 " >
                <div class="card bg-light " >
                    <div class="card-body  py-5">
                      <h5 class="card-title">${details.description}</h5>
                      <div class="row gap-3 justify-content-center text-center">
                        <div class="col-md-4 bg-white p-3 text-success rounded widthPrice">
                        ${details.pricing[0]? details.pricing[0].price : 'Free of Cost'}  ${details.pricing[0].plan}
                        </div>
                        <div class="col-md-4 bg-white p-3 text-warning-emphasis rounded widthPrice">${details.pricing[1]? details.pricing[1].price: 'Free Of Cost'} ${details.pricing[1].plan} </div>
                        <div class="col-md-4 bg-white p-3 text-success rounded widthPrice">${details.pricing[2]? details.pricing[1].price: 'Free Of Cost'} ${details.pricing[2].plan} </div>                  
                      </div>

                      <!-- feature and Integrations part start here -->
                      <div class="row  mb-5" >
                        <div class="col-md-6">
                            <h4>Features</h4>
                            <ul>
                                <li>${details.features[1] ? details.features[1].feature_name :'not found featurs'}</li>
                                <li>${details.features[2] ? details.features[2].feature_name :'not found featurs'}</li>
                                <li>${details.features[3] ? details.features[3].feature_name :'not found featurs'}</li>
                            </ul>
                        </div>
                        <div class="col-md-6 " >
                            <h4>Integrations</h4>
                            <ul>
                                <li>${details.integrations[0] ? details.integrations[0] : 'No Data found'}</li>
                                <li>${details.integrations[1] ? details.integrations[1] : 'No Data found'}</li>
                                <li>${details.integrations[2] ? details.integrations[2] : 'No Data found'}</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="col-md-6 " >
                <div class="card p-2" >
                    <div class="text-end ">
                    <button class="btn btn-primary accouracy-btn">${details.accuracy.score*100 === 0? 'No accuracy' : details.accuracy.score*100 +'% Accuracy'  }</button>
                    </div>
                    <img src="${details.image_link[0]}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                      <h5 class="card-title">${details.input_output_examples[0] ? details.input_output_examples[0].input : 'Can you give any example?'}</h5>
                      <p class="card-text mb-5">${details.input_output_examples[0] ? details.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
                    </div>
                  </div>
            </div>
        </div>
    `
}




// Load ALL  data 



document.getElementById('load-all-btn').addEventListener('click', function(){
    getAiData();
})