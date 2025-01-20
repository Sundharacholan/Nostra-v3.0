function changeShirtColor() {
    // Get all checkboxes
    let checkboxes = document.querySelectorAll('input[name="color"]');
    let anyChecked = false; // Flag to track if any checkbox is checked

    // Check if at least one checkbox is checked
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            anyChecked = true;
        }
    });

    // If no checkboxes are checked, display all images inline
    if (!anyChecked) {
        document.querySelectorAll('.dc-inside').forEach(function(image) {
            image.style.display = 'inline-block'; // Show all images
        });
    } else {
        // Hide all images by default
        document.querySelectorAll('.dc-inside').forEach(function(image) {
            image.style.display = 'none';
        });

        // Show multiple images for the checked checkboxes
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                let color = checkbox.id; // Get the color from the checkbox ID
                // Display multiple images for the selected color
                for (let i = 1; i <= 5; i++) { // Adjust the range (1 to 5) to control how many images are displayed
                    let shirtImage = document.getElementById('shirt-' + color + i);
                    if (shirtImage) {
                        shirtImage.style.display = 'inline-block'; // Show the selected images
                    }
                }
            }
        });
    }
}

// Initial state: display all images if no checkbox is checked
window.onload = function() {
    document.querySelectorAll('.dc-inside').forEach(function(image) {
        image.style.display = 'inline-block'; // Show all images on page load
    });
};
