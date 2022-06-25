


setInterval(() =>{
    fetch('/messages')
    .then(response => response.json())
    .then(messages =>{
      const messagesSection = document.getElementById("messages-section");
     messagesSection.innerText = "";
     console.log(messages)
      messages.forEach(message => {
        const container = document.createElement(`div`)
        container.innerText = `${message.id} - ${message.from} - ${message.text}`;
        messagesSection.appendChild(container)
      })
        
      });
    
          }, 10000);