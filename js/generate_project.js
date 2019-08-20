const generate_project_section = (js) => {
    const data_arr = js["project_data"];
    const len = data_arr.length;
    const dom = $("#project_section");
    let result = `<div class="row mb-4 wow fadeIn'">`;
    for (let i = 0; i < len; i++) {
        const title = data_arr[i]["title"];
        const content = data_arr[i]["content"];
        const img_src = data_arr[i]["img_src"];
        const website = data_arr[i]["website"];
        let msg = `
        <div class="col-lg-4  col-md-6 mb-4">

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
                class="btn btn-info btn-md">Details
              </a>
            </div>

          </div>

        </div>
        `;
        result += msg;
    }

    result += `</div>`;
    
    $(result).appendTo("#project_section");
};

$.getJSON("./pub/project_data/project.json", generate_project_section);
