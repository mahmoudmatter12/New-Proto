// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    var closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Attach event listeners to the buttons
document.getElementById("openModalBtn1").onclick = function () {
    openModal("myModal1");
}

document.getElementById("openModalBtn2").onclick = function () {
    openModal("myModal2");
}

document.getElementById("openModalBtn3").onclick = function () {
    openModal("myModal3");
}


// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    var closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Attach event listeners to the navigation links
document.getElementById("openHomeModal").onclick = function () {
    openModal("homeModal");
}

document.getElementById("openAboutModal").onclick = function () {
    openModal("aboutModal");
}

document.getElementById("openServicesModal").onclick = function () {
    openModal("servicesModal");
}



//---------------------------------------
// Function to open the modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";

    var closeBtn = modal.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Attach event listeners to the navigation links
document.getElementById("openPortfolioModal").onclick = function () {
    openModal("portfolioModal");
}

// Handle the download and preview actions in the Portfolio modal
document.getElementById("downloadCvBtn").onclick = function () {
    // Trigger the download of the CV using the direct download link
    window.location.href = 'https://drive.google.com/uc?export=download&id=1Af4iKhw-T7SWbZ3j7x_wZ9ygPgUyYp4W';
}

document.getElementById("previewCvBtn").onclick = function () {
    // Open the CV in a new tab for preview using the direct preview link
    window.open('https://drive.google.com/file/d/1Af4iKhw-T7SWbZ3j7x_wZ9ygPgUyYp4W/preview', '_blank');
}
//----------


document.getElementById("openContactModal").onclick = function () {
    openModal("contactModal");
}


