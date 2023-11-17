function sendMessage() {
    var userInput = document.getElementById('user-input');
    var chatLog = document.getElementById('chat-log');
  
    // Get user input
    var userMessage = userInput.value;
  
    // Display user message in the chat log
    displayMessage('You', userMessage, 'user');
  
    // Process user message (you can replace this with more advanced AI logic)
    var botReply = getBotReply(userMessage);
  
    // Display bot reply in the chat log after a short delay
    setTimeout(function () {
      displayMessage('AI Bot', botReply, 'bot');
    }, 500);
  
    // Clear the user input field
    userInput.value = '';
  }
  
  function displayMessage(sender, message, messageType) {
    var chatLog = document.getElementById('chat-log');
    var messageElement = document.createElement('div');
  
    messageElement.classList.add(messageType);
  
    var senderElement = document.createElement('span');
    senderElement.classList.add('sender');
    senderElement.textContent = sender + ': ';
  
    var messageTextElement = document.createElement('span');
    messageTextElement.textContent = message;
  
    messageElement.appendChild(senderElement);
    messageElement.appendChild(messageTextElement);
  
    chatLog.appendChild(messageElement);
  
    // Scroll to the bottom of the chat log
    chatLog.scrollTop = chatLog.scrollHeight;
  }
  
  function getBotReply(userMessage) {
    // Convert user message to lowercase for case-insensitive matching
    var lowercaseMessage = userMessage.toLowerCase();
  
    // Predefined responses based on user input
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      return "Hello! How can I assist you today?";
    } else if (lowercaseMessage.includes('problem') || lowercaseMessage.includes('issue')) {
      return "I'm sorry to hear that you're facing an issue. Please provide more details so I can help.";
    } else if (lowercaseMessage.includes('order') || lowercaseMessage.includes('purchase')) {
      if (lowercaseMessage.includes('status') || lowercaseMessage.includes('track')) {
        return "To check the status of your order, please log in to your account or provide your order number.";
      } else if (lowercaseMessage.includes('cancel')) {
        return "If you wish to cancel your order, please contact our support team at support@example.com.";
      } else if (lowercaseMessage.includes('change') || lowercaseMessage.includes('modify')) {
        return "For any changes or modifications to your order, please contact our support team.";
      } else {
        return "If you have questions about your order or purchase, please provide your order number.";
      }
    } else if (lowercaseMessage.includes('payment') || lowercaseMessage.includes('refund')) {
      return "For payment and refund inquiries, please check our payment policy on our website or contact our support team.";
    } else if (lowercaseMessage.includes('product') || lowercaseMessage.includes('item')) {
      return "If you have questions about a specific product, please provide the product name or ID for assistance.";
    } else if (lowercaseMessage.includes('shipping') || lowercaseMessage.includes('delivery')) {
      return "For shipping and delivery information, please check the tracking details in your account or contact the courier.";
    } else if (lowercaseMessage.includes('discount') || lowercaseMessage.includes('coupon')) {
      return "To apply a discount or coupon code, please enter the code during the checkout process.";
    } else if (lowercaseMessage.includes('return') || lowercaseMessage.includes('exchange')) {
      return "For returns or exchanges, please review our return policy on our website or contact our support team.";
    } else if (lowercaseMessage.includes('account') || lowercaseMessage.includes('login')) {
      return "If you're having trouble with your account or login, please use the 'Forgot Password' option or contact our support team.";
    } else {
      // Default response for unrecognized messages
      return "Thank you for reaching out. Our support team will get back to you as soon as possible.";
    }
  }
  
  
  
  