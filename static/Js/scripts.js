function previewImage() {
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const uploadMessage = document.getElementById('uploadMessage');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block";
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
    
    // Display the upload message with animation
    uploadMessage.textContent = "Image Uploaded Successfully!";
    uploadMessage.style.display = "block";
    uploadMessage.classList.add("fade-in");
}

// Animation class
document.addEventListener("DOMContentLoaded", function() {
    const uploadMessage = document.getElementById('uploadMessage');
    uploadMessage.addEventListener("animationend", function() {
        uploadMessage.style.display = "none";
        uploadMessage.classList.remove("fade-in");
    });
});


