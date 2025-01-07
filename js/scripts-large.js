// DOM Elements
const textInputRow1 = document.getElementById('textInputRow1');
const textInputRow2 = document.getElementById('textInputRow2');
const colorSelect = document.getElementById('colorSelect');
const fontSelect = document.getElementById('fontSelect');
const placeholders = document.querySelectorAll('.placeholder');
const infoDisplay = document.getElementById('infoDisplay');
const copyNotification = document.getElementById('copyNotification');
const copyButton = document.getElementById('copyButton');

// Color Sets
const colorSets = {
    // Black & White colors
    allblack: ['#000', '#000', '#000'],
    allwhite: ['#f9f9f9', '#f9f9f9', '#f9f9f9'],
    mix: ['#000', '#f9f9f9', '#000'],
    moreblack: ['#000', '#f9f9f9', '#000'],
    morewhite: ['#f9f9f9', '#000', '#f9f9f9'],

    // Monotone colors
    apricot: ['#f1c7b4', '#f1c7b4', '#f1c7b4'],
    bubblegum: ['#ecbcca', '#ecbcca', '#ecbcca'],
    honeydew: ['#d6e9de', '#d6e9de', '#d6e9de'],
    lavender: ['#eed8e6', '#eed8e6', '#eed8e6'],
    mint: ['#80bf9d', '#80bf9d', '#80bf9d'],
    platinum: ['#e5e6e3', '#e5e6e3', '#e5e6e3'],
    plum: ['#b977a9', '#b977a9', '#b977a9'],
    sky: ['#8ccce8', '#8ccce8', '#8ccce8'],
    strawberry: ['#d95163', '#d95163', '#d95163'],
    tomato: ['#e07a67', '#e07a67', '#e07a67'],
    vanilla: ['#e5eaae', '#e5eaae', '#e5eaae'],
    violet: ['#8c8dbf', '#8c8dbf', '#8c8dbf'],

    // Rainbow colors
    rainbow: ['#f6a3ab', '#fed3a1', '#f8f4ae', '#c1e0ae', '#91d7e8', '#b9aed5'],

    // Tritone colors
    ash: ['#f4f3ef', '#d1d1cf', '#adaca8'],
    aurora: ['#fff5ea', '#4fc5ea', '#7e6eb0'],
    bliss: ['#f95b78', '#fffcf9', '#9fdbdd'],
    bonsai: ['#ffda8e', '#c5cf9c', '#5bada9'],
    breezy: ['#5bada9', '#95d9e7', '#9ca0c2'],
    citrus: ['#29c6dd', '#d9e3c7', '#ff782c'],
    cloud: ['#f3f2f8', '#afd9f3', '#8dc5e8'],
    crayon: ['#fb5e63', '#ffda74', '#00bad0'],
    dream: ['#ee4c9b', '#d694be', '#b9e2f7'],
    fiesta: ['#fa4a5e', '#ffc729', '#6dc049'],
    flamingo: ['#d2b5b7', '#f2949a', '#fd737a'],
    garden: ['#fdc5c2', '#ffe3d3', '#b7d4bf'],
    'lavender-tri': ['#f8d6e6', '#fff5c4', '#bd7fb1'],
    lemomdrop: ['#feb7a2', '#f0b870', '#dfcc47'],
    macha: ['#bee5e1', '#aeddca', '#98ccaa'],
    misberry: ['#fafafc', '#e0f3fb', '#ed5265'],
    pastel: ['#77d1d9', '#fed0de', '#fff099'],
    roselit: ['#c97bb2', '#ee9ec1', '#e6b9bf'],
    sienna: ['#f2e2df', '#f6d5c4', '#d39995'],
    sunbear: ['#fff7eb', '#ffd587', '#f5586d'],
    sunset: ['#ffa884', '#fb605c', '#00ba9e'],
    tropical: ['#ffde4f', '#ff9f2c', '#f84489'],
    twilight: ['#c48abd', '#e47c6c', '#5cb4d6'],
    vivid: ['#008bc3', '#f95a86', '#ffce5b']
};

// Color Set Names
const colorSetNames = {
    // Black & White names
    allblack: 'Black',
    allwhite: 'White',
    mix: 'Mix',
    moreblack: 'More Black',
    morewhite: 'More White',

    // Monotone names
    apricot: 'Apricot',
    bubblegum: 'Bubblegum',
    honeydew: 'Honeydew',
    lavender: 'Lavender',
    mint: 'Mint',
    platinum: 'Platinum',
    plum: 'Plum',
    sky: 'Sky',
    strawberry: 'Strawberry',
    tomato: 'Tomato',
    vanilla: 'Vanilla',
    violet: 'Violet',

    // Rainbow name
    rainbow: 'Rainbow',

    // Tritone names
    ash: 'Ash',
    aurora: 'Aurora',
    bliss: 'Bliss',
    bonsai: 'Bonsai',
    breezy: 'Breezy',
    citrus: 'Citrus',
    cloud: 'Cloud',
    crayon: 'Crayon',
    dream: 'Dream',
    fiesta: 'Fiesta',
    flamingo: 'Flamingo',
    garden: 'Garden',
    'lavender-tri': 'Lavender',
    lemomdrop: 'Lemomdrop',
    macha: 'Macha',
    misberry: 'Misberry',
    pastel: 'Pastel',
    roselit: 'Roselit',
    sienna: 'Sienna',
    sunbear: 'Sunbear',
    sunset: 'Sunset',
    tropical: 'Tropical',
    twilight: 'Twilight',
    vivid: 'Vivid'
};

// Font Names
const fontNames = {
    "'E1', sans-serif": 'E1',
    "'E2', sans-serif": 'E2',
    "'E3', sans-serif": 'E3',
    "'E4', sans-serif": 'E4',
    "'E5', sans-serif": 'E5',
    "'E6', sans-serif": 'E6',
    "'E7', sans-serif": 'E7',
    "'E8', sans-serif": 'E8',
    "'E9', sans-serif": 'E9',
    "'E10', sans-serif": 'E10',
    "'E11', sans-serif": 'E11',
    "'E12', sans-serif": 'E12',
    "'C1', sans-serif": 'C1',
    "'C2', sans-serif": 'C2',
    "'C3', sans-serif": 'C3',
    "'C4', sans-serif": 'C4',
    "'C5', sans-serif": 'C5',
    "'C6', sans-serif": 'C6'
};

// Utility Functions
function showNotification() {
    copyNotification.classList.add('show');
    setTimeout(() => {
        copyNotification.classList.remove('show');
    }, 1500);
}

// Update Functions
function updateInfoDisplay() {
    const selectedColorSet = colorSetNames[colorSelect.value];
    const selectedFont = fontNames[fontSelect.value];
    const text1 = textInputRow1.value;
    const text2 = textInputRow2.value;
    
    if (colorSelect.value === 'rainbow') {
        infoDisplay.value = `Rainbow, ${text1}/${text2} (${selectedFont})`;
    } else {
        infoDisplay.value = `${selectedColorSet}, ${text1}/${text2} (${selectedFont})`;
    }
}

function updateText() {
    const text1 = textInputRow1.value;
    const text2 = textInputRow2.value;
    
    placeholders.forEach((placeholder, index) => {
        const row1 = placeholder.querySelector(`#row1-${index + 1}`);
        const row2 = placeholder.querySelector(`#row2-${index + 1}`);
        
        row1.textContent = text1;
        row2.textContent = text2;
    });
    
    resizeText();
    updateInfoDisplay();
}

function updateColors() {
    const selectedSet = colorSets[colorSelect.value];
    placeholders.forEach((placeholder, index) => {
        if (index < selectedSet.length) {
            const baseColor = selectedSet[index];
            placeholder.style.backgroundColor = baseColor;
            
            const row1 = placeholder.querySelector(`#row1-${index + 1}`);
            const row2 = placeholder.querySelector(`#row2-${index + 1}`);
            
            // Set base color for second row
            row2.style.backgroundColor = baseColor;
            
            // Darken the first row
            if (baseColor === '#000') {
                // For black background
                row1.style.backgroundColor = '#1a1a1a';
                placeholder.style.setProperty('color', '#fff', 'important');
                row1.style.border = 'none';
                row2.style.border = 'none';
            } else if (baseColor === '#f9f9f9') {
                // For white background
                row1.style.backgroundColor = '#e6e6e6';
                placeholder.style.setProperty('color', '#000', 'important');
                row1.style.border = '1px solid #ccc';
                row2.style.border = '1px solid #ccc';
            } else {
                // For all other colors, darken by overlay
                const overlay = 'rgba(0, 0, 0, 0.1)';
                row1.style.backgroundColor = overlay;
                placeholder.style.setProperty('color', '#000', 'important');
                row1.style.border = 'none';
                row2.style.border = 'none';
            }
        }
    });
    updateInfoDisplay();
}

function updateFont() {
    const selectedFont = fontSelect.value;
    placeholders.forEach(placeholder => {
        placeholder.style.fontFamily = selectedFont;
    });
    resizeText();
    updateInfoDisplay();
}

function resizeText() {
    const containerWidth = placeholders[0].offsetWidth - 30;  // Account for horizontal padding
    
    placeholders.forEach(placeholder => {
        const rows = placeholder.querySelectorAll('.text-row');
        rows.forEach(row => {
            let fontSize = 20;  // Reduced initial font size from 24 to 20
            const text = row.textContent;
            
            const span = document.createElement('span');
            span.style.visibility = 'hidden';
            span.style.fontFamily = placeholder.style.fontFamily || 'Times New Roman';
            span.style.fontSize = '20px';
            span.textContent = text;
            document.body.appendChild(span);
            
            const textWidth = span.offsetWidth;
            const scaleFactor = Math.min(1, containerWidth / textWidth);
            
            // Limit maximum font size to prevent text from getting too large vertically
            fontSize = Math.min(20, Math.max(10, Math.floor(20 * scaleFactor)));
            row.style.fontSize = `${fontSize}px`;
            
            document.body.removeChild(span);
        });
    });
}

// Event Listeners
infoDisplay.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(infoDisplay.value);
        showNotification();
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

if (copyButton) {
    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(infoDisplay.value);
            showNotification();
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
}

textInputRow1.addEventListener('input', updateText);
textInputRow2.addEventListener('input', updateText);
colorSelect.addEventListener('change', updateColors);
fontSelect.addEventListener('change', updateFont);

// Initialize
updateColors();
updateFont();
updateText();
document.querySelector('.version-info').textContent = APP_VERSION;