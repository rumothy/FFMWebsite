$('#collapseOne').collapse();
$("#comment-text").hide();
$(".dropdown-item").on('click', function(event){
    event.preventDefault();
    selectFromDropdown($(this));
});

$(".sign-up").on('click', function(event){
    event.preventDefault();
    let itemId = $(this).data("itemid");
    let dropdownItem = $(`#myDropdown [data-itemid="${itemId}"]`);
    selectFromDropdown(dropdownItem);
});

function selectFromDropdown(buttonElement) {
    $("#dropdownMenuButton").text(buttonElement.text());
    let dataItemId = parseInt(buttonElement.data("itemid"));
    let commentText = $("#comment-text");
    if (dataItemId === 4)
        commentText.show();
    else
        commentText.hide();
}

$("#send-contact").on("submit", function(event){
    event.preventDefault();
    let contact = {
        name: $("#formGroupNameInput").val().trim(),
        email: $("#formGroupEmailInput").val().trim(),
        subject: $("#dropdownMenuButton").text(),
        comment: $("#comment-text [name=commentInput]").val().trim()
    };
    
    console.log(`sending contact info to FFM.org.`);
    console.log(`name: ${contact.name}`);
    console.log(`email: ${contact.email}`);
    console.log(`subject: ${contact.subject}`);
    console.log(`comment: ${contact.comment}`);

    // $.ajax(`/api/emailToFfm`, {
    //     type: "POST",
    //     data: contact
    // }).then( () => location.reload() );
});