// DOM Elements
const colorSelect = document.getElementById('colorSelect');
const fontSelect = document.getElementById('fontSelect');
const placeholders = document.querySelectorAll('.placeholder');
const infoDisplay = document.getElementById('infoDisplay');
const csvDisplay = document.getElementById('csvDisplay');
const copyNotification = document.getElementById('copyNotification');
const copyButton = document.getElementById('copyButton');
const downloadButton = document.getElementById('downloadButton');
const copyPopup = document.getElementById('copyPopup');
const downloadPopup = document.getElementById('downloadPopup');
const popupOverlay = document.getElementById('popupOverlay');
const popupOkayButton = document.getElementById('popupOkayButton');
const downloadPopupOkayButton = document.getElementById('downloadPopupOkayButton');

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

// Function to show popup
function showPopup(popup) {
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
}

// Function to hide popup
function hidePopup(popup) {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
}

// Function to hide all popups
function hideAllPopups() {
    copyPopup.style.display = 'none';
    downloadPopup.style.display = 'none';
    popupOverlay.style.display = 'none';
}

// Event listeners for popup okay buttons
popupOkayButton.addEventListener('click', () => hidePopup(copyPopup));
downloadPopupOkayButton.addEventListener('click', () => hidePopup(downloadPopup));

// Click outside to close
popupOverlay.addEventListener('click', hideAllPopups);

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hideAllPopups();
    }
});

// Prevent clicks inside popups from closing them
copyPopup.addEventListener('click', (e) => e.stopPropagation());
downloadPopup.addEventListener('click', (e) => e.stopPropagation());

// Update Functions
function updateInfoDisplay() {
    const selectedColorSet = colorSetNames[colorSelect.value];
    const selectedFont = fontNames[fontSelect.value];
    
    // Get all input values, use single dash for empty values
    const inputs = document.querySelectorAll('.placeholder input');
    const values = Array.from(inputs).map(input => input.value || '-');  // Single dash for empty values
    
    // Update simple display (Design, Font, values)
    infoDisplay.value = [selectedColorSet, selectedFont, ...values].join(', ');

    // Create CSV header (single line, no spaces after commas)
    const headerRow = ['D','F'];
    for (let set = 1; set <= 2; set++) {
        for (let row = 1; row <= 12; row++) {
            const prefix = set === 1 ? 'x' : 'y';
            headerRow.push(`${prefix}${row}a`,`${prefix}${row}b`);
        }
    }
    
    // Create CSV data row (no spaces after commas)
    const dataRow = [selectedColorSet, selectedFont, ...values];
    
    // Update CSV display with explicit line break
    const csvContent = headerRow.join(',') + '\n' + dataRow.join(',');
    csvDisplay.value = csvContent;
    
    // For download, ensure proper line endings
    if (downloadButton) {
        downloadButton.onclick = () => {
            const csvContentForDownload = headerRow.join(',') + '\r\n' + dataRow.join(',');
            const blob = new Blob([csvContentForDownload], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.setAttribute('href', url);
            link.setAttribute('download', 'label-info.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            showPopup(downloadPopup);
        };
    }
}

function updateColors() {
    const selectedSet = colorSets[colorSelect.value];
    
    // Group placeholders by their number (1, 2, or 3)
    const placeholderGroups = {
        1: [],
        2: [],
        3: []
    };

    // Sort placeholders into groups based on their ID
    placeholders.forEach(placeholder => {
        const id = placeholder.id;
        if (id.includes('row1-') || id.includes('row2-') || id.includes('row3-') || id.includes('row4-')) {
            placeholderGroups[1].push(placeholder);
        } else if (id.includes('row5-') || id.includes('row6-') || id.includes('row7-') || id.includes('row8-')) {
            placeholderGroups[2].push(placeholder);
        } else if (id.includes('row9-') || id.includes('row10-') || id.includes('row11-') || id.includes('row12-')) {
            placeholderGroups[3].push(placeholder);
        }
    });

    // Apply colors to each group
    Object.keys(placeholderGroups).forEach(groupNum => {
        const color = selectedSet[groupNum - 1];
        placeholderGroups[groupNum].forEach(placeholder => {
            // Special handling for Rainbow design
            if (colorSelect.value === 'rainbow') {
                const rowNum = parseInt(placeholder.id.match(/row(\d+)/)[1]);
                // Calculate which pair of rows we're in (1-2, 3-4, 5-6, etc)
                const colorIndex = Math.floor((rowNum - 1) / 2);
                const rainbowColor = selectedSet[colorIndex];
                
                placeholder.style.backgroundColor = rainbowColor;
                const input = placeholder.querySelector('input');
                if (input) {
                    input.style.setProperty('color', '#000', 'important');
                    input.style.setProperty('--placeholder-color', 'rgba(0, 0, 0, 0.2)');
                }
                placeholder.style.setProperty('color', '#000', 'important');
                placeholder.style.border = 'none';
            }
            // Special handling for Mix design in both Set 1 and Set 2
            else if (colorSelect.value === 'mix') {
                const rowNum = parseInt(placeholder.id.match(/row(\d+)/)[1]);
                const isEvenRow = rowNum % 2 === 0;
                const mixColor = isEvenRow ? '#f9f9f9' : '#000';
                
                placeholder.style.backgroundColor = mixColor;
                const input = placeholder.querySelector('input');
                if (mixColor === '#000') {
                    placeholder.style.setProperty('color', '#fff', 'important');
                    placeholder.style.border = 'none';
                    if (input) {
                        input.style.setProperty('color', '#fff', 'important');
                        input.style.setProperty('--placeholder-color', 'rgba(255, 255, 255, 0.4)');
                    }
                } else {
                    placeholder.style.setProperty('color', '#000', 'important');
                    placeholder.style.border = '1px solid #ccc';
                    if (input) {
                        input.style.setProperty('color', '#000', 'important');
                        input.style.setProperty('--placeholder-color', 'rgba(0, 0, 0, 0.2)');
                    }
                }
            } else {
                // Normal color handling for other cases
                placeholder.style.backgroundColor = color;
                const input = placeholder.querySelector('input');
                if (color === '#000') {
                    placeholder.style.setProperty('color', '#fff', 'important');
                    placeholder.style.border = 'none';
                    if (input) {
                        input.style.setProperty('color', '#fff', 'important');
                        input.style.setProperty('--placeholder-color', 'rgba(255, 255, 255, 0.4)');
                    }
                } else if (color === '#f9f9f9') {
                    placeholder.style.setProperty('color', '#000', 'important');
                    placeholder.style.border = '1px solid #ccc';
                    if (input) {
                        input.style.setProperty('color', '#000', 'important');
                        input.style.setProperty('--placeholder-color', 'rgba(0, 0, 0, 0.2)');
                    }
                } else {
                    placeholder.style.setProperty('color', '#000', 'important');
                    placeholder.style.border = 'none';
                    if (input) {
                        input.style.setProperty('color', '#000', 'important');
                        input.style.setProperty('--placeholder-color', 'rgba(0, 0, 0, 0.2)');
                    }
                }
            }
        });
    });

    updateInfoDisplay();
}

function updateFont() {
    const selectedFont = fontSelect.value;
    placeholders.forEach(placeholder => {
        placeholder.style.fontFamily = selectedFont;
        const input = placeholder.querySelector('input');
        if (input) {
            input.style.fontFamily = selectedFont;
        }
    });
    resizeText();
    updateInfoDisplay();
}

function resizeText() {
    placeholders.forEach(placeholder => {
        const input = placeholder.querySelector('input');
        if (input) {
            const text = input.value;
            const containerWidth = placeholder.offsetWidth - 20;
            
            const span = document.createElement('span');
            span.style.visibility = 'hidden';
            span.style.fontFamily = placeholder.style.fontFamily || 'Times New Roman';
            span.style.fontSize = '24px';
            span.textContent = text;
            document.body.appendChild(span);
            
            const textWidth = span.offsetWidth;
            const scaleFactor = Math.min(1, containerWidth / textWidth);
            
            const fontSize = Math.max(10, Math.floor(24 * scaleFactor));
            input.style.fontSize = `${fontSize}px`;
            
            document.body.removeChild(span);
        }
    });
    updateInfoDisplay();
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
            // Create CSV header (single line, no spaces after commas)
            const headerRow = ['D','F'];
            for (let set = 1; set <= 2; set++) {
                for (let row = 1; row <= 12; row++) {
                    const prefix = set === 1 ? 'x' : 'y';
                    headerRow.push(`${prefix}${row}a`,`${prefix}${row}b`);
                }
            }
            
            // Get all input values for data row
            const inputs = document.querySelectorAll('.placeholder input');
            const values = Array.from(inputs).map(input => input.value || '-');
            const selectedColorSet = colorSetNames[colorSelect.value];
            const selectedFont = fontNames[fontSelect.value];
            const dataRow = [selectedColorSet, selectedFont, ...values];

            // Combine with cut markers and proper line breaks
            const textToCopy = '---\n' +
                headerRow.join(',') + '\n' +
                document.getElementById('infoDisplay').value +
            '\n---';
            
            await navigator.clipboard.writeText(textToCopy);
            showPopup(copyPopup); // Show the custom popup
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
}

// Add click handler for CSV display
csvDisplay.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(csvDisplay.value);
        showNotification();
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
});

// Update event listeners to ensure info display is updated
colorSelect.addEventListener('change', () => {
    updateColors();
    updateInfoDisplay();
});

fontSelect.addEventListener('change', () => {
    updateFont();
    updateInfoDisplay();
});

// Add input event listeners to all text inputs
placeholders.forEach(placeholder => {
    const input = placeholder.querySelector('input');
    if (input) {
        input.addEventListener('input', () => {
            resizeText();
            updateInfoDisplay();
        });
    }
});

// Add event listeners for placeholder text behavior
document.querySelectorAll('.placeholder input').forEach(input => {
    input.addEventListener('focus', function() {
        this.placeholder = ''; // Clear placeholder when focused
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) { // Only restore placeholder if no text was entered
            this.placeholder = 'name/text';
        }
    });
});

// Initialize
updateColors();
updateFont();
updateInfoDisplay();
document.querySelector('.version-info').textContent = APP_VERSION; 