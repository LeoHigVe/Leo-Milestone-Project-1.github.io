function hasBorder(element) {
    let computedStyle = window.getComputedStyle(element);
    let borderStyle = computedStyle.getPropertyValue('border');
    return borderStyle !== '0px none rgb(0, 0, 0)';
}

function createSeedCoinTracker() {
    let seedCoinTracker = document.createElement('div');
    let seedCounter = document.createElement('span');
    let coinCounter = document.createElement('span');

    seedCounter.id = 'seed-counter';
    seedCounter.textContent = '4';

    coinCounter.id = 'coin-counter';
    coinCounter.textContent = '5';

    seedCoinTracker.appendChild(document.createElement('img')).src = 'assets/seeds/Seed.png';
    seedCoinTracker.appendChild(seedCounter);
    seedCoinTracker.appendChild(document.createElement('img')).src = 'assets/Resources/coin1_16x16.gif';
    seedCoinTracker.appendChild(coinCounter);

    let resourceTab = document.querySelector('.resource-tab');
    if (resourceTab) {
        resourceTab.appendChild(seedCoinTracker);
    }

    return { seedCounter, coinCounter };
}

function updateSeedCounter(value) {
    let seedCounter = document.getElementById('seed-counter');
    if (seedCounter) {
        seedCounter.textContent = value;
    }
}

function decreaseSeedCounter() {
    let seedCounter = document.getElementById('seed-counter');
    if (seedCounter) {
        let currentValue = parseInt(seedCounter.textContent);
        let newValue = currentValue - 1;
        updateSeedCounter(newValue);
    }
}

function plantSeed(box) {
    let flowers = [
        'assets/Flowers and Plants/Flowers/1Blue.png',
        'assets/Flowers and Plants/Flowers/1Yellow.png',
        'assets/Flowers and Plants/Flowers/2Blue.png',
        'assets/Flowers and Plants/Flowers/2Orange.png',
        'assets/Flowers and Plants/Flowers/3Orange.png',
        'assets/Flowers and Plants/Flowers/3Red.png',
        'assets/Flowers and Plants/Flowers/Pink.png',
        'assets/Flowers and Plants/Flowers/Purple.png',
        'assets/Flowers and Plants/Flowers/RoseBlack.png',
        'assets/Flowers and Plants/Flowers/RoseRed.png',
    ];
    
    let seedCounter = document.getElementById('seed-counter');
    if (!seedCounter || parseInt(seedCounter.textContent) <= 0) {
        console.log('Not enough seeds to plant');
        return;
    }

    let seedBag = document.getElementById('tool-1');
    if (!hasBorder(seedBag)) {
        console.log('Item-1 does not have a border, cannot plant seed');
        return;
    }

    if (box.querySelector('img')) {
        console.log('This space is already taken');
        return;
    }

    let newSeed = document.createElement('img');
    newSeed.src = 'assets/seeds/Seed.png';
    box.appendChild(newSeed);
    newSeed.addEventListener('click', function(){
        waterSeed1()
    })

    decreaseSeedCounter();
    
    let WateringCan = document.getElementById('tool-0');
    
    function waterSeed1(){

        if (!hasBorder(WateringCan)){
            console.log('Item-0 does not have border, cannot plant seed')
            return;
        }
        newSeed.src = 'assets/seeds/Seedling.png';
        newSeed.addEventListener('click', function(){
            waterSeed2()
        })
    }
    function waterSeed2() {
        if (!hasBorder(WateringCan)) {
            console.log('Item-0 does not have border, cannot plant seed');
            return;
        }
        
        if (newSeed.src === isFlower(newSeed.src)) {
            let randomIndex = Math.floor(Math.random() * flowers.length);
            let flowerUrl = flowers[randomIndex];
            newSeed.src = flowerUrl;
        }
        
    }
    
    // Function to check if the image source is a flower
    function isFlower(src) {
        // Assuming the flower URLs all contain '/Flowers/' in the path
        return src.includes('/Flowers/');
    }
    
        
}


function createInventoryItem(tool, index) {
    let item = document.createElement('img');
    item.src = tool;
    item.style.border = '0';
    item.id = 'tool-' + index;

    item.addEventListener('click', function selectItem() {
        document.querySelectorAll('img').forEach(item => {
            item.style.border = '0';
        });
        item.style.border = '8px dotted #9C95DC';
    });

    return item;
}

function Inventory() {
    let inventory = document.createElement('div');
    inventory.id = 'inventory';
    document.body.append(inventory);

    let tools = [
        'assets/tool assets/WateringCan.png',
        'assets/tool assets/seeds-icon.png',
        'assets/tool assets/scythe.png'
    ];

    tools.forEach((tool, index) => {
        let inventoryItem = createInventoryItem(tool, index);
        inventory.append(inventoryItem);
    });

    return inventory;
}

function createFarmLand() {
    const farmLand = document.getElementById("farmLand");
    const colors = ["#251605", "#C57B57"];
    
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement("div");
            box.className = "grid-box";
            box.style.backgroundColor = colors[(i + j) % colors.length];
            farmLand.appendChild(box);
            box.addEventListener('click', function() {
                plantSeed(box);
            });
        }
    }
}

function startGame() {
    const startScreen = document.getElementById('start-screen');
    let opacity = 1;

    function hideStartScreen() {
        if (opacity > 0) {
            opacity -= 0.1;
            startScreen.style.opacity = opacity;
            setTimeout(hideStartScreen, 100);
        } else {
            startScreen.remove();
        }
    }

    alert("Creating Your Farm...");
    hideStartScreen();
    Inventory();
    createFarmLand();
    createSeedCoinTracker();
}

