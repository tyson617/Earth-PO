`use strict`

const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr')

    search.addEventListener('input', searchTable)

    function searchTable() {
        table_rows.forEach((row, i) => {
            let table_data = row.textContent.toLowerCase(),
                search_data = search.value.toLowerCase();

                row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
                row.computedStyleMap.setProperty('--delay', i/25 +'s');
        })

        document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => { 
            visible_row.computedStyleMap.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b'
        })
    }

url = 'https://wonsbqq8nh.execute-api.us-west-2.amazonaws.com/testing/purchase-orders'

document.addEventListener('DOMContentLoaded', async function() {
    const loadingBar = document.getElementById('loading-bar');
    
    // Start loading
    loadingBar.style.width = '50%'; // Halfway, indicating loading in progress

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            const orders = typeof data.body === 'string' ? JSON.parse(data.body) : data.body;
            populateTable(orders);
        })
        .catch(error => console.error('Error:', error))
        .finally(() => {
            // Complete loading
            loadingBar.style.width = '100%'; // Full width, indicating loading is complete
            // Optionally hide the bar after a short delay
            setTimeout(() => { loadingBar.style.display = 'none'; }, 500);
        });
});
    
function populateTable(orders) {
    const tableBody = document.querySelector('.master-table tbody');

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="">${order.order_id}</a></td>
            <td>${order.effective_ship_date}</td>
            <td>${order.effective_delivery_date}</td>
            <td>${order.factory_name}</td>
            <td>${order.total_cost}</td>
            `;
        tableBody.appendChild(row);
    });
}


document.getElementById('toggle-filters-btn').addEventListener('click', function() {
    var filterSection = document.getElementById('filter-section');
    filterSection.style.display = (filterSection.style.display === 'none' ? '' : 'none');
});

