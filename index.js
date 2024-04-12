function startGame() {
    const startScreen = document.getElementById('start-screen')
    let opacity = 1
    function hideStartScreen(){
        if (opacity > 0) {
            opacity -= 0.1; 
            startScreen.style.opacity = opacity;
            setTimeout(hideStartScreen, 100); 
        } else {
            element.style.display = "none"; // Hide the element once it has faded out
        }
    }
    // Add game initialization logic here
    newInventory()
    hideStartScreen()
    alert("Game is starting!");
}
// Creates new Image
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

// Creates new Item 
function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}


function newInventory(){
    let inventory = document.createElement('div')
        inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}
function createFarmLand(){

    // Get the container element
    const farmLand = document.getElementById("farmLand");
    
    // Define the colors to alternate
    const colors = ["#251605", "#C57B57"];
    
    // Create a 4x4 grid-box
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement("div");
            box.className = "grid-box";
            box.style.backgroundColor = colors[(i + j) % colors.length];
            farmLand.appendChild(box);
        }
    }
}