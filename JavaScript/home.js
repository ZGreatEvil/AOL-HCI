// Date function
function updateDate() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = formattedDate;
}

// Update the date immediately on page load
updateDate();

// Optionally, set an interval to update the date.
setInterval(updateDate, 1000 * 60 * 60 * 24);

// Clock function
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    document.getElementById('clock').textContent = formattedTime;
  }

  setInterval(updateClock, 1000);
  updateClock();


// Forecast Reveal function
document.addEventListener('DOMContentLoaded', function() {
    const weatherCard = document.querySelector('.weather-card');
    const forecastSection = document.querySelector('.forecast-section');

    weatherCard.addEventListener('click', function() {
        forecastSection.classList.toggle('active');
    });
});

// Forecast Reveal function
document.addEventListener('DOMContentLoaded', function() {
    const weatherCard = document.querySelector('.weather-card');
    const forecastSection = document.querySelector('.forecast-section');
    const weatherSection = document.querySelector('.weather-section');
    const notification = document.querySelector('.notification');
    const animationDuration = 500; // Centralized timing for animations

    if (!weatherCard || !forecastSection || !weatherSection) {
        console.error('One or more elements not found.');
        return;
    }
    
    forecastSection.style.transition = `transform ${animationDuration}ms ease, opacity ${animationDuration}ms ease`;
    forecastSection.style.transform = 'translateX(-100%)';
    forecastSection.style.opacity = '0';
    
    weatherSection.style.transition = `width ${animationDuration}ms ease, left ${animationDuration}ms ease`;
    weatherSection.style.width = '50%';
    weatherCard.style.position = 'relative';
    weatherCard.style.left = '5pc';
    weatherCard.style.width = '25%';
    weatherCard.style.transform = 'translateX(-30%) scale(1.0)';
    
    weatherCard.addEventListener('mouseenter', function() {
        weatherCard.style.transform = 'translateX(-30%) scale(1.03)';
    });
    
    weatherCard.addEventListener('mouseleave', function() {
        weatherCard.style.transform = 'translateX(-30%) scale(1.0)';
    });
    
    weatherCard.style.transition = `transform ${animationDuration}ms ease`;
    
    let isForecastVisible = false;

    // Ensure all elements have a transition property set for transform
    weatherCard.style.transition = 'transform 500ms ease';
    forecastSection.style.transition = 'transform 500ms ease, opacity 500ms ease';
    weatherSection.style.transition = 'width 500ms ease, transform 500ms ease';

    weatherCard.addEventListener('click', function() {
        weatherCard.style.transform = 'translateX(-30%) scale(0.97)';
        setTimeout(() => {
            if (isForecastVisible) {
                forecastSection.style.transform = 'translateX(-100%)';
                forecastSection.style.opacity = '0';
                weatherCard.style.position = 'relative';
                weatherCard.style.left = '5pc';
                weatherCard.style.transform = 'translateX(-30%) scale(1.0)';
                weatherSection.style.transform = 'translateX(0)';
                weatherSection.style.width = '50%';
                notification.style.opacity = '1'; // Fade in
            } else {
                forecastSection.style.position = 'relative';
                forecastSection.style.right = '19pc';
                forecastSection.style.transform = 'translateX(0)';
                forecastSection.style.opacity = '1';
                weatherSection.style.transform = 'translateX(30%)';
                weatherCard.style.transition = 'transform 100ms ease';
                weatherSection.style.width = '25%';
                weatherCard.style.position = 'relative';
                weatherCard.style.left = isForecastVisible ? '5pc' : '-3pc';
                weatherCard.style.transition = 'left 500ms ease, transform 500ms ease';
                notification.style.opacity = '0'; // Fade out
            }
            isForecastVisible = !isForecastVisible;
        }, 150); // Reset scale after 150ms to simulate release
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const warningSystem = document.querySelector('.warning-system');
    const dismissBtn = document.querySelector('.warning-system .dismiss-btn');

    dismissBtn.addEventListener('click', function() {
        // Add the fade-out class to trigger the animation
        warningSystem.classList.add('fade-out');

        // Wait for the animation to complete before setting display to 'none'
        warningSystem.addEventListener('animationend', function() {
            warningSystem.style.display = 'none';
        }, { once: true }); // Ensure the event is only handled once
    });

    warningSystem.addEventListener('mouseleave', function() {
        warningSystem.style.backgroundColor = '#ff9d00c9'; // Original color
    });
});