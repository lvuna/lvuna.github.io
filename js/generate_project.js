const generate_project_section = (js) => {
    const data_arr = js["project_data"];
    const len = data_arr.length;
    const dom = $("#project_section");
    let result = "";
    for (let i = 0; i < len; i++) {
        const title = data_arr[i]["title"];
        const content = data_arr[i]["content"];
        const img_src = data_arr[i]["img_src"];
        const website = data_arr[i]["website"];
        let msg = `
        <div class="col-md-4 mb-4">

          <div class="card">

            <div class="view overlay">
                <img src=${img_src} class="card-img-top" style="height:250px"
                  alt="">
                <a href=${website} target="_blank">
                  <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            <div class="card-body fix_body">
              <h4 class="card-title">${title}</h4>
              <p class="card-text">${content}</p>

              <a href=${website} target="_blank"
                class="btn btn-primary btn-md">Take me there!
              </a>
            </div>

          </div>

        </div>
        `;

        if (i % 3 == 0) {
            result += `<div class="row mb-4 wow fadeIn'">`;
            result += msg;
        }else if (i % 3 == 2){
            result += msg + `</div>`;
        }else {
            result += msg;
        }
    }

    if (len % 3 == 2){
        result += `</div>`;
    }
    
    $(result).appendTo("#project_section");
};

$.getJSON("./pub/project_data/project.json", generate_project_section);
