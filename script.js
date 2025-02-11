document.addEventListener('DOMContentLoaded', (event) => {
  // Function to add hover animation
  function addHoverAnimation(elements, scale, filter = null, boxShadow = null) {
    elements.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.style.transition = 'transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease';
        element.style.transform = `scale(${scale})`;
        if (filter) element.style.filter = filter;
        if (boxShadow) element.style.boxShadow = boxShadow;
      });
      element.addEventListener('mouseout', () => {
        element.style.transform = 'scale(1)';
        if (filter) element.style.filter = 'grayscale(100%)';
        if (boxShadow) element.style.boxShadow = 'none';
      });
    });
  }

  // Add animation to profile picture
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) addHoverAnimation([profilePic], 1.1, null, '0 4px 15px rgba(0, 0, 0, 0.5)');

  // Add animation to social icons
  const socialIcons = document.querySelectorAll('.social-icons img');
  addHoverAnimation(socialIcons, 1.2, 'grayscale(0%)');

  // Add animation to buttons
  const buttons = document.querySelectorAll('.btn');
  addHoverAnimation(buttons, 1.1);
});
