$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var subject = $("#subject").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes("."));
    else {
      statusElm.append("<div>Email Is Not Valid </div>");
    }
    if (subject.length > 2) {
    } else {
      statusElm.append("<div>Subject Is Not Valid </div>");
    }
    if (message.length > 10) {
    } else {
      statusElm.append("<div>Message Is Not Valid </div>");
    }
    if (name.length > 2) {
    } else {
      statusElm.append("<div>Name Is Not Valid </div>");
    }
  });
});

// $(function() {
//   $("#contactForm").validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 2
//       },
//       subject: {
//         required: true,
//         minlength: 4
//       },
//       number: {
//         required: true,
//         minlength: 5
//       },
//       email: {
//         required: true,
//         email: true
//       },
//       message: {
//         required: true,
//         minlength: 20
//       }
//     },
//     messages: {
//       name: {
//         required: "come on, you have a name, don't you?",
//         minlength: "your name must consist of at least 2 characters"
//       },
//       subject: {
//         required: "come on, you have a subject, don't you?",
//         minlength: "your subject must consist of at least 4 characters"
//       },
//       number: {
//         required: "come on, you have a number, don't you?",
//         minlength: "your Number must consist of at least 5 characters"
//       },
//       email: {
//         required: "no email, no message"
//       },
//       message: {
//         required:
//           "um...yea, you have to write something to send this form.",
//         minlength: "thats all? really?"
//       }
//     },
//     submitHandler: function(form) {
//       $(form).ajaxSubmit({
//         type: "POST",
//         data: $(form).serialize(),
//         url: "contact_process.php",
//         success: function() {
//           $("#contactForm :input").attr("disabled", "disabled");
//           $("#contactForm").fadeTo("slow", 1, function() {
//             $(this)
//               .find(":input")
//               .attr("disabled", "disabled");
//             $(this)
//               .find("label")
//               .css("cursor", "default");
//             $("#success").fadeIn();
//             $(".modal").modal("hide");
//             $("#success").modal("show");
//           });
//         },
//         error: function() {
//           $("#contactForm").fadeTo("slow", 1, function() {
//             $("#error").fadeIn();
//             $(".modal").modal("hide");
//             $("#error").modal("show");
//           });
//         }
//       });
//     }
//   });
// });
