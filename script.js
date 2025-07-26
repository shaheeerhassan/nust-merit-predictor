// Data Sets
const computingData = [
    {sr: 1, rank: 5, aggregate: 90.71},
    {sr: 2, rank: 19, aggregate: 86.74},
    {sr: 3, rank: 21, aggregate: 85.98},
    {sr: 4, rank: 33, aggregate: 85.78},
    {sr: 5, rank: 37, aggregate: 85.28},
    {sr: 6, rank: 43, aggregate: 85.13},
    {sr: 7, rank: 51, aggregate: 84.72},
    {sr: 8, rank: 58, aggregate: 83.83},
    {sr: 9, rank: 80, aggregate: 83.88},
    {sr: 10, rank: 81, aggregate: 83.83},
    {sr: 11, rank: 96, aggregate: 83.38},
    {sr: 12, rank: 127, aggregate: 82.49},
    {sr: 13, rank: 134, aggregate: 82.41},
    {sr: 14, rank: 147, aggregate: 82.09},
    {sr: 15, rank: 182, aggregate: 81.6},
    {sr: 16, rank: 184, aggregate: 81.56},
    {sr: 17, rank: 241, aggregate: 79.19},
    {sr: 18, rank: 377, aggregate: 79.81},
    {sr: 19, rank: 400, aggregate: 79.52},
    {sr: 20, rank: 405, aggregate: 79.39},
    {sr: 21, rank: 433, aggregate: 79.21},
    {sr: 22, rank: 434, aggregate: 79.18},
    {sr: 23, rank: 460, aggregate: 79.04},
    {sr: 24, rank: 466, aggregate: 79.01},
    {sr: 25, rank: 516, aggregate: 78.66},
    {sr: 26, rank: 517, aggregate: 78.65},
    {sr: 27, rank: 521, aggregate: 78.61},
    {sr: 28, rank: 530, aggregate: 78.56},
    {sr: 29, rank: 534, aggregate: 78.51},
    {sr: 30, rank: 538, aggregate: 78.47},
    {sr: 31, rank: 598, aggregate: 78.01},
    {sr: 32, rank: 737, aggregate: 77.11},
    {sr: 33, rank: 740, aggregate: 77.09},
    {sr: 34, rank: 748, aggregate: 77.04},
    {sr: 35, rank: 802, aggregate: 76.63},
    {sr: 36, rank: 698, aggregate: 75.42},
    {sr: 37, rank: 1319, aggregate: 74.16},
    {sr: 38, rank: 1465, aggregate: 73.54},
    {sr: 39, rank: 1503, aggregate: 73.35},
    {sr: 40, rank: 1753, aggregate: 72.54},
    {sr: 41, rank: 1767, aggregate: 72.49},
    {sr: 42, rank: 1881, aggregate: 72.01},
    {sr: 43, rank: 2505, aggregate: 70.25},
    {sr: 44, rank: 2522, aggregate: 70.21},
    {sr: 45, rank: 4060, aggregate: 67.57},
    {sr: 46, rank: 4191, aggregate: 66.35},
    {sr: 47, rank: 5091, aggregate: 65.73},
    {sr: 48, rank: 5829, aggregate: 62.88},
    {sr: 49, rank: 6024, aggregate: 61.81},
    {sr: 50, rank: 7350, aggregate: 60.27},
    {sr: 51, rank: 7573, aggregate: 60.09},
    {sr: 52, rank: 9667, aggregate: 56.59}
];

const engineeringData = [
    {sr: 1, rank: 3, aggregate: 90.71},
    {sr: 2, rank: 16, aggregate: 86.74},
    {sr: 3, rank: 23, aggregate: 85.78},
    {sr: 4, rank: 25, aggregate: 85.28},
    {sr: 5, rank: 31, aggregate: 85.13},
    {sr: 6, rank: 42, aggregate: 84.52},
    {sr: 7, rank: 57, aggregate: 83.88},
    {sr: 8, rank: 60, aggregate: 83.83},
    {sr: 9, rank: 88, aggregate: 82.49},
    {sr: 10, rank: 96, aggregate: 82.41},
    {sr: 11, rank: 106, aggregate: 82.02},
    {sr: 12, rank: 128, aggregate: 81.62},
    {sr: 13, rank: 130, aggregate: 81.56},
    {sr: 14, rank: 169, aggregate: 81.07},
    {sr: 15, rank: 190, aggregate: 80.77},
    {sr: 16, rank: 273, aggregate: 79.51},
    {sr: 17, rank: 291, aggregate: 79.19},
    {sr: 18, rank: 306, aggregate: 79.04},
    {sr: 19, rank: 311, aggregate: 79.01},
    {sr: 20, rank: 328, aggregate: 78.81},
    {sr: 21, rank: 345, aggregate: 78.65},
    {sr: 22, rank: 363, aggregate: 78.47},
    {sr: 23, rank: 397, aggregate: 78.11},
    {sr: 24, rank: 499, aggregate: 77.11},
    {sr: 25, rank: 507, aggregate: 77.04},
    {sr: 26, rank: 534, aggregate: 76.61},
    {sr: 27, rank: 622, aggregate: 75.88},
    {sr: 28, rank: 641, aggregate: 75.42},
    {sr: 29, rank: 866, aggregate: 74.22},
    {sr: 30, rank: 976, aggregate: 73.54},
    {sr: 31, rank: 996, aggregate: 73.31},
    {sr: 32, rank: 1084, aggregate: 72.92},
    {sr: 33, rank: 1162, aggregate: 72.54},
    {sr: 34, rank: 1237, aggregate: 72.12},
    {sr: 35, rank: 1497, aggregate: 70.92},
    {sr: 36, rank: 1660, aggregate: 70.25},
    {sr: 37, rank: 1755, aggregate: 69.94},
    {sr: 38, rank: 2181, aggregate: 68.54},
    {sr: 39, rank: 2223, aggregate: 68.32},
    {sr: 40, rank: 2626, aggregate: 67.51},
    {sr: 41, rank: 2758, aggregate: 66.73},
    {sr: 42, rank: 2877, aggregate: 66.35},
    {sr: 43, rank: 3019, aggregate: 65.92},
    {sr: 44, rank: 3255, aggregate: 65.31},
    {sr: 45, rank: 3531, aggregate: 64.01},
    {sr: 46, rank: 4047, aggregate: 63.28},
    {sr: 47, rank: 4302, aggregate: 62.72},
    {sr: 48, rank: 4524, aggregate: 61.18},
    {sr: 49, rank: 5252, aggregate: 60.81},
    {sr: 50, rank: 5434, aggregate: 60.69},
    {sr: 51, rank: 5519, aggregate: 60.29},
    {sr: 52, rank: 5564, aggregate: 60.17},
    {sr: 53, rank: 5642, aggregate: 60.01},
    {sr: 54, rank: 5723, aggregate: 59.88},
    {sr: 55, rank: 6830, aggregate: 58.91},
    {sr: 56, rank: 7455, aggregate: 57.87},
    {sr: 57, rank: 7828, aggregate: 56.21},
    {sr: 58, rank: 12735, aggregate: 54.22}
];

const computingPrograms = [
    {sr: 1, program: "Computer Science", school: "SEECS", city: "Islamabad", closingRank: 447, closingAgg: 79.11},
    {sr: 2, program: "Computer Science", school: "NBC", city: "Quetta", closingRank: 5360, closingAgg: 64.69},
    {sr: 3, program: "Artificial Intelligence", school: "SEECS", city: "Islamabad", closingRank: 566, closingAgg: 77.89},
    {sr: 4, program: "Artificial Intelligence", school: "NBC", city: "Quetta", closingRank: 12369, closingAgg: 54.16},
    {sr: 5, program: "Data Science", school: "SEECS", city: "Islamabad", closingRank: 652, closingAgg: 77.08},
    {sr: 6, program: "Bioinformatics", school: "SINES", city: "Islamabad", closingRank: 1554, closingAgg: 72.92}
];

const engineeringPrograms = [
    {sr: 1, program: "Software Engineering", school: "SEECS", city: "Islamabad", closingRank: 378, closingAgg: 78.42},
    {sr: 2, program: "Software Engineering", school: "MCS", city: "Rawalpindi", closingRank: 1262, closingAgg: 72.09},
    {sr: 3, program: "Electrical Engineering", school: "SEECS", city: "Islamabad", closingRank: 2449, closingAgg: 67.45},
    {sr: 4, program: "Electrical Engineering", school: "MCS", city: "Rawalpindi", closingRank: 7703, closingAgg: 56.89},
    {sr: 5, program: "Electrical Engineering", school: "CEME", city: "Rawalpindi", closingRank: 6139, closingAgg: 59.26},
    {sr: 6, program: "Electrical Engineering", school: "PNEC", city: "Karachi", closingRank: 7788, closingAgg: 56.48},
    {sr: 7, program: "Civil Engineering", school: "NICE - SCEE", city: "Islamabad", closingRank: 5637, closingAgg: 60.03},
    {sr: 8, program: "Civil Engineering", school: "MOE", city: "Risabur", closingRank: 9204, closingAgg: 53.41},
    {sr: 9, program: "Civil Engineering", school: "NBC", city: "Quetta", closingRank: 14714, closingAgg: 49.92},
    {sr: 10, program: "Mechanical Engineering", school: "SMME", city: "Islamabad", closingRank: 3083, closingAgg: 65.27},
    {sr: 11, program: "Mechanical Engineering", school: "CEME", city: "Rawalpindi", closingRank: 6204, closingAgg: 57.59},
    {sr: 12, program: "Mechanical Engineering", school: "PNEC", city: "Karachi", closingRank: 7416, closingAgg: 54.77},
    {sr: 13, program: "Aerospace Engineering", school: "SMME", city: "Islamabad", closingRank: 3292, closingAgg: 64.98},
    {sr: 14, program: "Aerospace Engineering", school: "CAE", city: "Risabur", closingRank: 1567, closingAgg: 69.93},
    {sr: 15, program: "Information Security Engg.", school: "MCS", city: "Rawalpindi", closingRank: 2988, closingAgg: 65.94},
    {sr: 16, program: "Mechatronics Engineering", school: "CEME", city: "Rawalpindi", closingRank: 4830, closingAgg: 62.12},
    {sr: 17, program: "Environmental Engineering", school: "IESE - SCEE", city: "Islamabad", closingRank: 8199, closingAgg: 53.99},
    {sr: 18, program: "Naval Architecture Engg.", school: "PNEC", city: "Karachi", closingRank: 13757, closingAgg: 50.07},
    {sr: 19, program: "Avionics Engineering", school: "CAE", city: "Risabur", closingRank: 4954, closingAgg: 61.91},
    {sr: 20, program: "Chemical Engineering", school: "SCME", city: "Islamabad", closingRank: 6155, closingAgg: 58.37},
    {sr: 21, program: "Computer Engineering", school: "CEME", city: "Rawalpindi", closingRank: 2746, closingAgg: 66.81},
    {sr: 22, program: "Material Engineering", school: "SCME", city: "Islamabad", closingRank: 8419, closingAgg: 53.49}
];

// DOM Elements
const calculateBtn = document.getElementById('calculate-btn');
const aggregateValue = document.getElementById('aggregate-value');
const meritRange = document.getElementById('merit-range');
const progressBar = document.getElementById('progress-bar');
const computingProgramsList = document.getElementById('computing-programs');
const engineeringProgramsList = document.getElementById('engineering-programs');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const printBtn = document.getElementById('print-btn');
const resetBtn = document.getElementById('reset-btn');
const saveModal = document.getElementById('save-modal');
const closeBtn = document.querySelector('.close-btn');
const confirmSave = document.getElementById('confirm-save');

// Calculate Aggregate
function calculateAggregate() {
    const sscObtained = parseFloat(document.getElementById('ssc-obtained').value);
    const sscTotal = parseFloat(document.getElementById('ssc-total').value) || 1100;
    const hscObtained = parseFloat(document.getElementById('hsc-obtained').value);
    const hscTotal = parseFloat(document.getElementById('hsc-total').value) || 550;
    const netObtained = parseFloat(document.getElementById('net-obtained').value);
    const netTotal = parseFloat(document.getElementById('net-total').value) || 200;
    
    if (!sscObtained || !hscObtained || !netObtained) {
        alert('Please enter all required marks');
        return null;
    }
    
    const aggregate = 
        (sscObtained/sscTotal * 100)*0.1 + 
        (hscObtained/hscTotal * 100)*0.15 + 
        (netObtained/netTotal * 100)*0.75;
    
    return aggregate.toFixed(2);
}

// Predict Merit Position
function predictMerit(aggregate, programType) {
    const dataset = programType === 'computing' ? computingData : engineeringData;
    
    for (let i = 0; i < dataset.length; i++) {
        if (parseFloat(aggregate) >= dataset[i].aggregate) {
            if (i === 0) {
                // Top merit case
                return { 
                    minRank: 1, 
                    maxRank: dataset[i].rank, 
                    percentile: 100 
                };
            } else {
                // Normal case - return lower rank first
                return { 
                    minRank: dataset[i].rank,      // Lower rank (higher aggregate)
                    maxRank: dataset[i-1].rank,    // Higher rank (lower aggregate)
                    percentile: 100 - (i / dataset.length * 100)
                };
            }
        }
    }
    
    // If aggregate is lower than all data points
    return { 
        minRank: dataset[dataset.length-1].rank, 
        maxRank: dataset[dataset.length-1].rank + 1000, 
        percentile: 0 
    };
}

// Get Eligible Programs
function getEligiblePrograms(predictedRank, programType) {
    const programs = programType === 'computing' ? computingPrograms : engineeringPrograms;
    // Show programs where closing rank is higher than our predicted min rank
    return programs.filter(program => program.closingRank >= predictedRank.minRank);
}

// Display Results
function displayResults(aggregate, programType) {
    // Show aggregate
    aggregateValue.textContent = `${aggregate}%`;

    // Clear previous results
    computingProgramsList.innerHTML = '';
    engineeringProgramsList.innerHTML = '';
    
    // Predict merit
    const meritPrediction = predictMerit(aggregate, programType);
    meritRange.textContent = `Between ${meritPrediction.minRank} - ${meritPrediction.maxRank}`;
    
    // Update progress bar based on percentile
    progressBar.style.width = `${meritPrediction.percentile}%`;
    
    // Get and display eligible programs
    const eligiblePrograms = getEligiblePrograms(meritPrediction, programType);
    displayPrograms(eligiblePrograms, programType);
    
    // Handle "both" selection
    if (programType === 'both') {
        const computingPrediction = predictMerit(aggregate, 'computing');
        meritRange.textContent = `Between ${computingPrediction.minRank} - ${computingPrediction.maxRank}`;
        
        // Get and display computing programs
        const computingEligible = getEligiblePrograms(computingPrediction, 'computing');
        displayPrograms(computingEligible, 'computing');
        
        // Get and display engineering programs
        const engineeringPrediction = predictMerit(aggregate, 'engineering');
        const engineeringEligible = getEligiblePrograms(engineeringPrediction, 'engineering');
        displayPrograms(engineeringEligible, 'engineering');
        
        // Update tab badges
        document.querySelector('.tab-btn[data-tab="computing-tab"]').innerHTML = `
            <i class="fas fa-laptop-code"></i> Computing 
            <span class="badge">${computingEligible.length}</span>
        `;
        document.querySelector('.tab-btn[data-tab="engineering-tab"]').innerHTML = `
            <i class="fas fa-cogs"></i> Engineering 
            <span class="badge">${engineeringEligible.length}</span>
        `;
        
        // Show computing tab by default
        document.querySelector('.tab-btn[data-tab="computing-tab"]').click();
    } else {
        // Single program type selected
        const prediction = predictMerit(aggregate, programType);
        meritRange.textContent = `Between ${prediction.minRank} - ${prediction.maxRank}`;
        progressBar.style.width = `${prediction.percentile}%`;
        
        const eligiblePrograms = getEligiblePrograms(prediction, programType);
        displayPrograms(eligiblePrograms, programType);
        
        // Update tab badge
        if (programType === 'computing') {
            document.querySelector('.tab-btn[data-tab="computing-tab"]').innerHTML = `
                <i class="fas fa-laptop-code"></i> Computing 
                <span class="badge">${eligiblePrograms.length}</span>
            `;
        } else {
            document.querySelector('.tab-btn[data-tab="engineering-tab"]').innerHTML = `
                <i class="fas fa-cogs"></i> Engineering 
                <span class="badge">${eligiblePrograms.length}</span>
            `;
        }
    }
}

// Enhanced displayPrograms function with new card design
function displayPrograms(programs, programType) {
    const container = programType === 'computing' ? computingProgramsList : engineeringProgramsList;
    container.innerHTML = '';
    
    if (programs.length === 0) {
        container.innerHTML = `
            <div class="no-programs">
                <i class="fas fa-info-circle"></i>
                <p>No eligible programs found based on your aggregate</p>
            </div>
        `;
        return;
    }
    
    programs.forEach(program => {
        const programCard = document.createElement('div');
        programCard.className = 'program-card';
        programCard.innerHTML = `
            <div class="program-header">
                <div class="program-name">
                    <i class="fas fa-graduation-cap"></i>
                    ${program.program}
                </div>
            </div>
            <div class="program-details">
                <div class="program-detail">
                    <i class="fas fa-university"></i>
                    <span>${program.school}</span>
                </div>
                <div class="program-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${program.city}</span>
                </div>
            </div>
            <div class="program-stats">
                <div class="stat-item closing-rank">
                    <i class="fas fa-list-ol"></i>
                    <span>Closing Rank: ${program.closingRank}</span>
                </div>
                <div class="stat-item closing-aggregate">
                    <i class="fas fa-percentage"></i>
                    <span>Aggregate: ${program.closingAgg}%</span>
                </div>
            </div>
        `;
        container.appendChild(programCard);
    });
}

// Tab Switching
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Reset Form
resetBtn.addEventListener('click', () => {
    // Reset input fields with animation
    const inputs = [
        document.getElementById('ssc-obtained'),
        document.getElementById('hsc-obtained'),
        document.getElementById('net-obtained')
    ];
    
    inputs.forEach(input => {
        input.style.transform = "scale(0.9)";
        input.style.transition = "all 0.3s ease";
        input.value = '';
        setTimeout(() => {
            input.style.transform = "scale(1)";
        }, 300);
    });

    // Reset results display with animation
    aggregateValue.textContent = '--.--%';
    meritRange.textContent = 'Not calculated yet';
    progressBar.style.width = '0';
    
    // Reset program lists with fade out/in effect
    computingProgramsList.style.opacity = '0';
    engineeringProgramsList.style.opacity = '0';
    
    setTimeout(() => {
        computingProgramsList.innerHTML = `
            <div class="no-programs">
                <i class="fas fa-calculator"></i>
                <p>Enter your marks and calculate to see eligible programs</p>
            </div>
        `;
        engineeringProgramsList.innerHTML = `
            <div class="no-programs">
                <i class="fas fa-calculator"></i>
                <p>Enter your marks and calculate to see eligible programs</p>
            </div>
        `;
        
        computingProgramsList.style.opacity = '1';
        engineeringProgramsList.style.opacity = '1';
    }, 300);

    // Reset tab badges
    document.querySelector('.tab-btn[data-tab="computing-tab"]').innerHTML = `
        <i class="fas fa-laptop-code"></i> Computing
    `;
    document.querySelector('.tab-btn[data-tab="engineering-tab"]').innerHTML = `
        <i class="fas fa-cogs"></i> Engineering
    `;
    
    // Reset active tab to computing
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="computing-tab"]').classList.add('active');
    document.getElementById('computing-tab').classList.add('active');
    
    // Reset radio button to computing
    document.querySelector('input[name="program"][value="computing"]').checked = true;
    
    // Show confirmation message
    const confirmation = document.createElement('div');
    confirmation.className = 'reset-confirmation';
    confirmation.innerHTML = `
        <i class="fas fa-check-circle"></i> Calculator has been reset
    `;
    document.body.appendChild(confirmation);
    
    setTimeout(() => {
        confirmation.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(confirmation);
        }, 500);
    }, 2000);
});

const style = document.createElement('style');
style.textContent = `
    .reset-confirmation {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #2ecc71;
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 1000;
        opacity: 1;
        transition: opacity 0.5s ease;
    }
    
    .reset-confirmation i {
        font-size: 18px;
    }
`;
document.head.appendChild(style);

// Main Calculate Button
calculateBtn.addEventListener('click', () => {
    const aggregate = calculateAggregate();
    if (!aggregate) return;
    
    const programType = document.querySelector('input[name="program"]:checked').value;
    displayResults(aggregate, programType);
    
    // Show engineering tab if both selected
    if (programType === 'both') {
        document.querySelector('.tab-btn[data-tab="engineering-tab"]').click();
    }
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === saveModal) {
        saveModal.style.display = 'none';
    }
});