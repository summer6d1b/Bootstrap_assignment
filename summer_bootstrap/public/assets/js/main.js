
document.addEventListener('DOMContentLoaded', function() {
fetch('./assets/data/content.json')
    .then(response => response.json())
    .then(data =>{
        console.log(data)
         // Assume you have a container div in your HTML to display the content
            const container = document.querySelector('.container');
            data.father.children.forEach(item => {
                if (item.element === 'a') {
                    // Create anchor element
                    const anchor = document.createElement('a');
                    anchor.href = item.href;
                    anchor.className = item.class;
    
                    // Add icon
                    const icon = document.createElement('i');
                    icon.className = item.icon;
                    anchor.appendChild(icon);
    
                    // Add text with spacing
                    const text = document.createTextNode(` ${item.text}`);
                    anchor.appendChild(text);
    
                    // Append anchor to container
                    container.appendChild(anchor);
                } else if (item.element === 'hr') {
                    const hr = document.createElement('hr');
                    container.appendChild(hr);
                }
            });
            const ticket = document.querySelectorAll('.ticket_card');
            const ticket_data = data.tickets;
            ticket.forEach((ticket,index) => {
                let pticket = document.createElement('p')
                pticket.innerHTML = ticket_data[index].ticketName,
                pticket.className = "text-center"
                ticket.appendChild(pticket)

                let numberTicket = document.createElement('h5')
                numberTicket.innerHTML = ticket_data[index].number,
                numberTicket.className = "card-title text-center fs-3"

                ticket.appendChild(numberTicket)
            }
            )
        })
        .catch(error => console.error('Not getting data correctly',error))
    })



