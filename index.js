
let inventoryTools = [
    'assets/tool assets/WateringCan.png',
    'assets/tool assets/seeds-icon.png',
    'assets/tool assets/shovel-icon.png',
    'assets/tool assets/scythe.png'
];


// Creates new Image
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

function createInventoryItem(inventoryTools) {
    let item = document.createElement('img');
    item.src = inventoryTools;
    return item;
}

function Inventory(inventoryTools) {
    let inventory = document.createElement('div');
    inventory.id = 'inventory';
    document.body.append(inventory);

    inventoryTools.forEach(inventoryTools => {
        let inventoryItem = createInventoryItem(inventoryTools);
        inventory.append(inventoryItem);
    });

    return inventory;
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
// Starts Game
function startGame() {
    const startScreen = document.getElementById('start-screen')
    let opacity = 1
    function hideStartScreen(){
        if (opacity > 0) {
            opacity -= 0.1; 
            startScreen.style.opacity = opacity;
            setTimeout(hideStartScreen, 100); 
        } else {
            startScreen.remove(); 
        }
    }
    // game  logic here
    alert("Game is starting!");
    hideStartScreen();
    Inventory(inventoryTools);
    createFarmLand();
    setupShop();
}