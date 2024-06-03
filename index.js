document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');
    var forms = document.querySelectorAll(".needs-validation");
  
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          event.preventDefault(); // Prevent the default form submission behavior
  
          if (!form.checkValidity()) {
            event.stopPropagation();
          } else {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show();
  
            // Wait for the toast to be displayed for a few seconds and then refresh the page
            setTimeout(function () {
              window.location.reload();
            }, 1000); // 5000 milliseconds = 5 seconds
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  });
  