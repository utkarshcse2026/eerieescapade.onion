function playVideo(videoId, overlay) {
  var video = document.getElementById(videoId);
  if (video.paused) {
    video.play();
    overlay.style.opacity = 0;
  }
}

document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessages = ['', 'Live Watchers : 100899', 'Payment Address :f32y43fyh4fy3u34y65gv7jh78ft4 '];
    const messages = document.querySelector('.messages');

    welcomeMessages.forEach(message => {
      const newMessage = document.createElement('p');
      newMessage.textContent = message;
      messages.appendChild(newMessage);
    });

    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    function sendMessage() {
      const message = chatInput.value.trim();
      if (message) {
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        messages.appendChild(newMessage);
        chatInput.value = '';
        // Scroll to the bottom of the messages container
        messages.scrollTop = messages.scrollHeight;
      }
    }

    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
  });
