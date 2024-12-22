const stratagems = [
    {
        category: "Offensive: Eagle",
        items: [
            { name: "Eagle Airstrike", sequence: "⬆️➡️⬇️➡️", selected: true },
            { name: "Eagle Strafing Run", sequence: "⬆️➡️➡️", selected: true },
            { name: "Eagle Cluster Bomb", sequence: "⬆️➡️⬇️⬇️➡️", selected: true },
            { name: "Eagle Napalm Airstrike", sequence: "⬆️⬇️⬆️", selected: true },
            { name: "Eagle Smoke Strike", sequence: "⬆️⬆️⬇️", selected: true },
            { name: "Eagle 500kg Bomb", sequence: "⬆️⬇️⬇️⬇️⬇️", selected: true },
            { name: "Eagle 110mm Rocket Pods", sequence: "⬆️➡️⬅️➡️", selected: true }
        ]
    },
    {
        category: "Offensive: Orbital",
        items: [
            { name: "Orbital Gatling Barrage", sequence: "➡️⬇️⬅️⬆️⬆️", selected: true },
            { name: "Orbital 120mm HE Barrage", sequence: "➡️➡️⬇️⬅️➡️⬇️", selected: true },
            { name: "Orbital 380mm HE Barrage", sequence: "➡️⬆️⬆️⬆️⬅️⬇️⬇️", selected: true },
            { name: "Orbital Walking Barrage", sequence: "➡️⬇️➡️⬇️➡️⬇️", selected: true },
            { name: "Orbital Napalm Barrage", sequence: "➡️➡️⬇️➡️⬆️", selected: true },
            { name: "Orbital Airburst Strike", sequence: "➡️➡️➡️", selected: true },
            { name: "Orbital Laser", sequence: "➡️⬆️⬆️➡️⬆️", selected: true },
            { name: "Orbital Railcannon Strike", sequence: "➡️⬆️⬇️⬆️➡️", selected: true },
            { name: "Orbital Precision Strike", sequence: "➡️➡️⬆️", selected: true },
            { name: "Orbital Gas Strike", sequence: "➡️➡️⬇️➡️", selected: true },
            { name: "Orbital EMS Strike", sequence: "➡️➡️⬅️⬇️", selected: true },
            { name: "Orbital Smoke Strike", sequence: "➡️➡️⬆️", selected: true }
        ]
    },
    {
        category: "Defensive",
        items: [
            { name: "Machine Gun Sentry", sequence: "⬇️⬆️➡️➡️⬆️", selected: true },
            { name: "Gatling Sentry", sequence: "⬇️⬅️➡️⬅️", selected: true },
            { name: "Autocannon Sentry", sequence: "⬇️⬆️➡️⬆️⬅️⬆️", selected: true },
            { name: "Rocket Sentry", sequence: "⬇️⬆️➡️➡️⬅️", selected: true },
            { name: "Flame Sentry", sequence: "⬇️⬆️⬆️⬆️⬆️", selected: true },
            { name: "Mortar Sentry", sequence: "⬇️⬆️➡️⬆️", selected: true },
            { name: "EMS Mortar Sentry", sequence: "⬇️⬆️⬆️", selected: true },
            { name: "Anti-Tank Mines", sequence: "⬇️⬅️⬆️⬆️", selected: true },
            { name: "Incendiary Mines", sequence: "⬇️⬅️⬅️⬇️", selected: true },
            { name: "Anti-Personnel Mines", sequence: "⬇️⬅️➡️⬆️", selected: true },
            { name: "Tesla Tower", sequence: "⬇️⬆️➡️➡️", selected: true },
            { name: "Shield Generator Relay", sequence: "⬇️⬇️⬅️➡️➡️", selected: true },
            { name: "HMG Emplacement", sequence: "⬇️⬆️➡️➡️⬅️", selected: true },
            { name: "Anti-Tank Emplacement", sequence: "⬇️⬆️➡️➡️➡️", selected: true }
        ]
    },
    {
        category: "Support Weapons",
        items: [
            { name: "MG-43 Machine Gun", sequence: "⬇️⬅️⬇️⬆️➡️", selected: true },
            { name: "Stalwart", sequence: "⬇️⬅️⬇️⬆️⬆️⬅️", selected: true },
            { name: "Heavy Machine Gun", sequence: "⬇️⬅️⬆️⬇️⬇️", selected: true },
            { name: "Laser Cannon", sequence: "⬇️⬅️⬇️⬆️⬅️", selected: true },
            { name: "EAT", sequence: "⬇️⬇️⬅️⬆️➡️", selected: true },
            { name: "Recoilless Rifle", sequence: "⬇️⬅️➡️➡️⬅️", selected: true },
            { name: "Anti-Materiel Rifle", sequence: "⬇️⬅️➡️⬆️⬇️", selected: true },
            { name: "Commando", sequence: "⬇️⬅️⬆️⬇️➡️", selected: true },
            { name: "Flamethrower", sequence: "⬇️⬅️⬆️⬇️⬆️", selected: true },
            { name: "Sterilizer", sequence: "⬇️⬅️⬆️⬇️⬅️", selected: true },
            { name: "Autocannon", sequence: "⬇️⬅️⬇️⬆️⬆️➡️", selected: true },
            { name: "Railgun", sequence: "⬇️➡️⬇️⬆️⬆️➡️", selected: true },
            { name: "Spear", sequence: "⬇️⬇️⬆️⬇️⬇️", selected: true },
            { name: "Grenade Launcher", sequence: "⬇️⬅️⬆️⬅️⬇️", selected: true },
            { name: "Quasar Cannon", sequence: "⬇️⬇️⬆️⬅️➡️", selected: true },
            { name: "Airburst Rocket Launcher", sequence: "⬇️⬆️⬆️⬅️➡️", selected: true },
            { name: "Arc Thrower", sequence: "⬇️➡️⬇️⬆️⬅️⬅️", selected: true }
        ]
    },
    {
        category: "Exosuits",
        items: [
            { name: "Patriot Exosuit", sequence: "⬅️⬆️➡️⬆️⬆️", selected: true },
            { name: "Emancipator Exosuit", sequence: "⬅️⬆️➡️⬆️⬆️", selected: true }
        ]
    },
    {
        category: "Backpacks",
        items: [
            { name: "Supply Pack", sequence: "⬇️⬅️⬇️⬆️⬆️⬇️", selected: true },
            { name: "Jump Pack", sequence: "⬆️⬆️⬇️⬆️⬆️", selected: true },
            { name: "Ballistic Shield", sequence: "⬇️⬇️⬇️⬆️⬆️⬅️", selected: true },
            { name: "Directional Shield", sequence: "⬆️⬅️⬅️���️⬆️⬆️", selected: true },
            { name: "Shield Generator Pack", sequence: "⬆️⬅️⬅️➡️➡️", selected: true },
            { name: "AR-23 Guard Dog", sequence: "⬆️⬆️➡️⬆️⬆️", selected: true },
            { name: "LAS-5 Guard Dog", sequence: "⬆️⬆️➡️➡️", selected: true },
            { name: "TX-13 Guard Dog", sequence: "⬆️⬆️➡️⬆️", selected: true }
        ]
    },
    {
        category: "Mission",
        items: [
            { name: "Reinforce", sequence: "⬆️⬇️➡️⬅️⬆️", selected: true },
            { name: "SOS Beacon", sequence: "⬆️⬇️⬆️", selected: true },
            { name: "Resupply", sequence: "⬇️⬇️➡️⬆️", selected: true },
            { name: "SEAF Artillery", sequence: "➡️⬆️⬆️⬇️", selected: true },
            { name: "Super Earth Flag", sequence: "⬇️⬆️⬇️⬆️", selected: true },
            { name: "Eagle Rearm", sequence: "⬆️⬆️⬅️⬆️➡️", selected: true },
            { name: "Upload Data", sequence: "⬅️➡️⬆️⬆️⬆️", selected: true },
            { name: "Seismic Probe", sequence: "⬆️⬆️⬅️➡️⬇️⬇️", selected: true },
            { name: "SSSD Delivery", sequence: "⬇️⬇️⬇️⬆️⬆️", selected: true },
            { name: "Hellbomb", sequence: "⬇️⬅️⬆️⬇️⬆️➡️⬆️⬆️", selected: true }
        ]
    }
];

let currentStratagem = null;
let userSequence = "";
let correctCount = 0;
let wrongCount = 0;
let gamepadConnected = false;
let gamepadCheckInterval;
let lastDirection = "";

const sequenceDisplay = document.getElementById("sequence");
const userInputDisplay = document.getElementById("userInput");
const startButton = document.getElementById("startButton");
const stratagemNameDisplay = document.getElementById("stratagemName");
const correctCountDisplay = document.getElementById("correctCount");
const wrongCountDisplay = document.getElementById("wrongCount");
const gameArea = document.querySelector('.game-area');
const stratagemList = document.getElementById('stratagemList');
const selectAllBtn = document.getElementById('selectAll');
const deselectAllBtn = document.getElementById('deselectAll');
const gamepadStatusDisplay = document.getElementById("gamepadStatus");
const reconnectButton = document.getElementById("reconnectController");

function createStratagemList() {
    let html = '';
    let stratagemIndex = 0;

    stratagems.forEach(category => {
        html += `<div class="category-header">${category.category}</div>`;

        category.items.forEach(stratagem => {
            html += `
                <label class="stratagem-checkbox">
                    <input type="checkbox" 
                           data-index="${stratagemIndex}"
                           name="stratagem-${stratagemIndex}"
                           id="stratagem-${stratagemIndex}"
                           ${stratagem.selected ? 'checked' : ''}>
                    ${stratagem.name} <span class="sequence-code">${stratagem.sequence}</span>
                </label>
            `;
            stratagemIndex++;
        });
    });

    stratagemList.innerHTML = html;
}

function getAllStratagems() {
    let allStratagems = [];
    let index = 0;
    stratagems.forEach(category => {
        category.items.forEach(stratagem => {
            const checkbox = document.getElementById(`stratagem-${index}`);
            stratagem.selected = checkbox ? checkbox.checked : stratagem.selected;
            allStratagems.push(stratagem);
            index++;
        });
    });
    return allStratagems;
}

function selectRandomStratagem() {
    const allStratagems = getAllStratagems();
    const selectedStratagems = allStratagems.filter(s => s.selected);
    if (selectedStratagems.length === 0) {
        alert('Please select at least one stratagem to practice!');
        return false;
    }
    currentStratagem = selectedStratagems[Math.floor(Math.random() * selectedStratagems.length)];
    
    // Show sequence briefly
    sequenceDisplay.textContent = currentStratagem.sequence;
    stratagemNameDisplay.textContent = currentStratagem.name;
    
    // Hide sequence after 2 seconds
    setTimeout(() => {
        sequenceDisplay.textContent = '❓'.repeat(currentStratagem.sequence.length/2);
    }, 2000);
    
    userSequence = "";
    userInputDisplay.textContent = "";
    gameArea.style.display = 'block';
    return true;
}

function checkSequence() {
    if (userSequence === currentStratagem.sequence) {
        correctCount++;
        correctCountDisplay.textContent = correctCount;
        sequenceDisplay.textContent = "✅ CORRECT!";
        setTimeout(() => {
            selectRandomStratagem();
        }, 1000);
    } else if (userSequence.length >= currentStratagem.sequence.length) {
        wrongCount++;
        wrongCountDisplay.textContent = wrongCount;
        userSequence = "";
        userInputDisplay.textContent = "";
        sequenceDisplay.textContent = "❌ WRONG - Watch again";
        
        // Show correct sequence after "wrong" message
        setTimeout(() => {
            sequenceDisplay.textContent = currentStratagem.sequence;
            setTimeout(() => {
                sequenceDisplay.textContent = '❓'.repeat(currentStratagem.sequence.length/2);
            }, 2000);
        }, 1000);
    }
}

function setupGamepad() {
    gamepadCheckInterval = setInterval(() => {
        if (!currentStratagem) return;

        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[0];

        if (gamepad) {
            gamepadConnected = true;
            gamepadStatusDisplay.textContent = "Controller Status: Connected";

            // Try both button-style and axes-style D-pad
            let direction = "";

            // Button-style D-pad (indices 12-15)
            if (gamepad.buttons[12]?.pressed) direction = "⬆️";
            else if (gamepad.buttons[13]?.pressed) direction = "⬇️";
            else if (gamepad.buttons[14]?.pressed) direction = "⬅️";
            else if (gamepad.buttons[15]?.pressed) direction = "➡️";

            // Axes-style D-pad (usually axes 0 and 1)
            if (!direction && gamepad.axes) {
                if (gamepad.axes[1] < -0.5) direction = "⬆️";
                else if (gamepad.axes[1] > 0.5) direction = "⬇️";
                else if (gamepad.axes[0] < -0.5) direction = "⬅️";
                else if (gamepad.axes[0] > 0.5) direction = "➡️";
            }

            if (direction && !lastDirection) {
                userSequence += direction;
                userInputDisplay.textContent = userSequence;
                checkSequence();
            }
            lastDirection = direction;
        }
    }, 50);
}

document.addEventListener("keydown", (event) => {
    if (!currentStratagem) return;

    let direction = "";
    switch (event.key) {
        case "ArrowUp":
            direction = "⬆️";
            break;
        case "ArrowDown":
            direction = "⬇️";
            break;
        case "ArrowLeft":
            direction = "⬅️";
            break;
        case "ArrowRight":
            direction = "➡️";
            break;
    }

    if (direction) {
        userSequence += direction;
        userInputDisplay.textContent = userSequence;
        checkSequence();
    }
});

window.addEventListener("gamepadconnected", (e) => {
    console.log("Gamepad connected event:", {
        id: e.gamepad.id,
        index: e.gamepad.index,
        mapping: e.gamepad.mapping,
        buttons: e.gamepad.buttons.length
    });
    gamepadConnected = true;
    gamepadStatusDisplay.textContent = "Controller Status: Connected";
    setupGamepad();
});

window.addEventListener("gamepaddisconnected", (e) => {
    console.log("Gamepad disconnected:", e.gamepad);
    gamepadConnected = false;
    gamepadStatusDisplay.textContent = "Controller Status: Not Connected";
    if (gamepadCheckInterval) {
        clearInterval(gamepadCheckInterval);
    }
});

function saveSelections() {
    const selections = getAllStratagems().map(s => s.selected);
    localStorage.setItem('stratagemSelections', JSON.stringify(selections));
}

function loadSelections() {
    const savedSelections = localStorage.getItem('stratagemSelections');
    if (savedSelections) {
        const selections = JSON.parse(savedSelections);
        let index = 0;
        stratagems.forEach(category => {
            category.items.forEach(stratagem => {
                stratagem.selected = selections[index];
                index++;
            });
        });
    }
}

selectAllBtn.addEventListener('click', () => {
    stratagems.forEach(category => {
        category.items.forEach(s => s.selected = true);
    });
    document.querySelectorAll('.stratagem-checkbox input').forEach(cb => cb.checked = true);
    saveSelections();
});

deselectAllBtn.addEventListener('click', () => {
    stratagems.forEach(category => {
        category.items.forEach(s => s.selected = false);
    });
    document.querySelectorAll('.stratagem-checkbox input').forEach(cb => cb.checked = false);
    saveSelections();
});

stratagemList.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"]')) {
        const index = parseInt(e.target.dataset.index);
        let currentIndex = 0;
        let found = false;
        
        stratagems.forEach(category => {
            category.items.forEach(stratagem => {
                if (currentIndex === index) {
                    stratagem.selected = e.target.checked;
                    found = true;
                }
                currentIndex++;
            });
        });
        saveSelections();
    }
});

startButton.addEventListener("click", () => {
    if (selectRandomStratagem()) {
        gameArea.style.display = 'block';
        startButton.textContent = "Next Stratagem";
        if (gamepadConnected && !gamepadCheckInterval) {
            setupGamepad();
        }
    }
});

function checkInitialGamepadState() {
    const gamepads = navigator.getGamepads();
    const gamepad = gamepads[0];

    if (gamepad) {
        gamepadConnected = true;
        gamepadStatusDisplay.textContent = "Controller Status: Connected";
        if (!gamepadCheckInterval) {
            setupGamepad();
        }
    } else {
        gamepadConnected = false;
        gamepadStatusDisplay.textContent = "Controller Status: Not Connected";
    }
}

reconnectButton.addEventListener("click", () => {
    checkInitialGamepadState();
});

loadSelections();
createStratagemList();
setTimeout(checkInitialGamepadState, 1000);