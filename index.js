$(document).ready(function() {
  $("#collapseOne").collapse();
  $("#comment-text").hide();
  let contact = { name: "", email: "", subject: "", comment: "" };

  $(".dropdown-item").on("click", function(event) {
    event.preventDefault();
    selectFromDropdown($(this));
  });

  $(".sign-up").on("click", function(event) {
    event.preventDefault();
    let itemId = $(this).data("itemid");
    let dropdownItem = $(`#myDropdown [data-itemid="${itemId}"]`);
    selectFromDropdown(dropdownItem);
  });

  function selectFromDropdown(buttonElement) {
    $("#dropdownMenuButton").text(buttonElement.text());
    let dataItemId = parseInt(buttonElement.data("itemid"));
    let commentText = $("#comment-text");
    if (dataItemId === 4) commentText.show();
    else commentText.hide();
  }

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $("#send-contact").on("submit", function(event) {
    event.preventDefault();
    contact.name = $("#formGroupNameInput")
      .val()
      .trim();
    contact.email = $("#formGroupEmailInput")
      .val()
      .trim();
    contact.subject = $("#dropdownMenuButton").text();
    contact.comment = $("#comment-text [name=commentInput]")
      .val()
      .trim();

    console.log(`sending contact info to FFM.org.`);
    console.log(`name: ${contact.name}`);
    console.log(`email: ${contact.email}`);
    console.log(`subject: ${contact.subject}`);
    console.log(`comment: ${contact.comment}`);

    // $.ajax(`/api/emailToFfm`, {
    //     type: "POST",
    //     data: contact
    // }).then( () => location.reload() );
    let isEmailValid = validateEmail(contact.email);
    if (!isEmailValid) {
      $("#spnEmailValid").text("Invalid email");
      $("#formGroupEmailInput").val("");
      return;
    }

    $("#spnEmailValid").text("");
    let ajaxurl = "ajax.php";
    let data = {
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      comment: contact.comment
    };
    $.post(ajaxurl, data, res => {
      alert("action performed successfully.");
    });
  });
});
