
let inventoryTools = [
    'assets/tool assets/WateringCan.png',
    'assets/tool assets/seeds-icon.png',
    'assets/tool assets/shovel-icon.png',
    'assets/tool assets/scythe.png'
];

function createSeedCoinTracker() {
    // Create a div for the seed and coin tracker
    let seedCoinTracker = document.createElement('div');

    // Create an img element for the seed GIF
    let seedGif = document.createElement('img');
    seedGif.src = 'assets/seeds/Seed.png';
    seedGif.alt = 'Seed img';

    // Create a span element for the seed counter
    let seedCounter = document.createElement('span');
    seedCounter.textContent = '4'; // Initial seed count

    // Create an img element for the coin GIF
    let coinGif = document.createElement('img');
    coinGif.src = 'assets/Resources/coin1_16x16.gif';
    coinGif.alt = 'Coin GIF';

    // Create a span element for the coin counter
    let coinCounter = document.createElement('span');
    coinCounter.textContent = '5'; // Initial coin count

    // Append the seed GIF and counter to the seedCoinTracker div
    seedCoinTracker.appendChild(seedGif);
    seedCoinTracker.appendChild(seedCounter);

    // Append the coin GIF and counter to the seedCoinTracker div
    seedCoinTracker.appendChild(coinGif);
    seedCoinTracker.appendChild(coinCounter);

    // Find the element with the class 'resource-tab' and append the seedCoinTracker div
    let resourceTab = document.querySelector('.resource-tab');
    if (resourceTab) {
        resourceTab.appendChild(seedCoinTracker);
    }
}

// Function to update the seed counter
function updateSeedCounter(value) {
    seedCounter.textContent = value;
}

// Function to update the coin counter
function updateCoinCounter(value) {
    coinCounter.textContent = value;
}



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
    alert("Creating Your Farm...");
    hideStartScreen();
    Inventory(inventoryTools);
    createFarmLand();
    createSeedCoinTracker();
}