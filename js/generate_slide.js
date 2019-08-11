const generate_slide = (js) => {
    const data_arr = js["slide_data"];
    const len = data_arr.length;
    const dom = $("#slide-container");
    let result = "";

    for (let i = 0; i < len; i++) {
        const title = data_arr[i]["title"];
        const subtitle = data_arr[i]["subtitle"];
        const content = data_arr[i]["content"];
        const img_src = data_arr[i]["background_image"];
        const website = data_arr[i]["website"];

        msg = `<div class="carousel-item">
        <div class="view" style="background-image: url(${img_src}); background-repeat: no-repeat; background-size: cover;">

          <!-- Mask & flexbox options-->
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">

            <!-- Content -->
            <div class="text-center white-text mx-5 wow fadeIn">
              <h1 class="mb-4">
                <strong>${title}</strong>
              </h1>

              <h4>
                <strong>${subtitle}</strong>
              </h4>

              <p class="mb-4 d-none d-md-block">
                <strong>${content}</strong>
              </p>

              <a href=${website} class="btn btn-outline-white btn-lg">Take a look!
              </a>
            </div>
            <!-- Content -->

          </div>

        </div>
      </div>
      `;
      result += msg;
    }
    $(result).appendTo(dom);
}

const generate_indicator = (js)=> {
    const dom = $(".carousel-indicators");
    const data_arr_length = js["slide_data"].length;
    for (let i = 0; i < data_arr_length; i++){
        let indicators = `<li data-target="#slide" data-slide-to="${i + 1}"></li>`;
        $(indicators).appendTo(dom);
    }
}

const generate_slide_section = (js) => {
    generate_slide(js);
    generate_indicator(js);
}

$.getJSON("./pub/project_data/slide.json", generate_slide_section)
