const no_resume_yet = () => {
    if ($("#alert-message").length != 0){
        return
    }
    const msg = `<div id="alert-message" class="text-center
     rounded alert-message">not available yet</div>`;
    const dom = $("#personal-box");
    $(msg).appendTo(dom);
    setTimeout(remove, 2500);
}

const remove = () => {
    $("#alert-message").remove();
}
$("#dl_resume").on("click", no_resume_yet);
