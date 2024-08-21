// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    var closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Attach event listeners to the buttons
document.getElementById("openModalBtn1").onclick = function() {
    openModal("myModal1");
}

document.getElementById("openModalBtn2").onclick = function() {
    openModal("myModal2");
}

document.getElementById("openModalBtn3").onclick = function() {
    openModal("myModal3");
}
