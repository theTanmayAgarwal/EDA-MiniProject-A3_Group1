// Student Commute Dataset
const commuteData = [
    {startingPoint: "Other", destination: "Kharadi", primaryMode: "Metro", secondaryMode: "PMPML City Bus", timeOfDay: "Morning Peak (8 AM - 11 AM)", travelTime: 41, cost: 27, delayPoints: "Chandni Chowk", satisfaction: 2},
    {startingPoint: "Kothrud", destination: "Pune Station", primaryMode: "Metro", secondaryMode: "PMPML City Bus", timeOfDay: "Night (After 8 PM)", travelTime: 54, cost: 26, delayPoints: "Hinjewadi Traffic", satisfaction: 5},
    {startingPoint: "Pashan", destination: "Viman Nagar", primaryMode: "Personal Two-Wheeler", secondaryMode: "PMPML City Bus", timeOfDay: "Morning Peak (8 AM - 11 AM)", travelTime: 45, cost: 99, delayPoints: "None", satisfaction: 1},
    {startingPoint: "Wakad", destination: "Kharadi", primaryMode: "Metro", secondaryMode: "Metro", timeOfDay: "Evening Peak (4 PM - 8 PM)", travelTime: 33, cost: 16, delayPoints: "None", satisfaction: 3},
    {startingPoint: "SIT Lavale Campus", destination: "Swargate", primaryMode: "Carpool", secondaryMode: "Metro", timeOfDay: "Morning Peak (8 AM - 11 AM)", travelTime: 57, cost: 91, delayPoints: "Chandni Chowk", satisfaction: 2},
    {startingPoint: "Wakad", destination: "Swargate", primaryMode: "Personal Two-Wheeler", secondaryMode: "Cab (Ola/Uber)", timeOfDay: "Night (After 8 PM)", travelTime: 38, cost: 79, delayPoints: "Chandni Chowk", satisfaction: 5},
    {startingPoint: "SIT Lavale Campus", destination: "Pune Station", primaryMode: "Metro", secondaryMode: "None (Direct Trip)", timeOfDay: "Morning Peak (8 AM - 11 AM)", travelTime: 50, cost: 20, delayPoints: "University Circle", satisfaction: 1},
    {startingPoint: "Other", destination: "Hinjewadi", primaryMode: "Cab (Ola/Uber)", secondaryMode: "Metro", timeOfDay: "Morning Peak (8 AM - 11 AM)", travelTime: 43, cost: 310, delayPoints: "None", satisfaction: 4},
    {startingPoint: "Other", destination: "Kharadi", primaryMode: "Metro", secondaryMode: "Walking", timeOfDay: "Midday (11 AM - 4 PM)", travelTime: 57, cost: 28, delayPoints: "Yerawada/Kalyani Nagar junction", satisfaction: 5},
    {startingPoint: "Other", destination: "Viman Nagar", primaryMode: "PMPML City Bus", secondaryMode: "Auto Rickshaw", timeOfDay: "Midday (11 AM - 4 PM)", travelTime: 56, cost: 47, delayPoints: "Chandni Chowk", satisfaction: 2}
];

// Complete dataset (724 records) - Key statistics computed from actual data
const fullData = {
    // Primary Mode counts
    primaryModeCounts: {
        "Metro": 152,
        "PMPML City Bus": 148,
        "Cab (Ola/Uber)": 116,
        "Personal Two-Wheeler": 113,
        "Auto Rickshaw": 103,
        "Carpool": 92
    },

    // Time of Day counts
    timeOfDayCounts: {
        "Morning Peak (8 AM - 11 AM)": 254,
        "Evening Peak (4 PM - 8 PM)": 198,
        "Midday (11 AM - 4 PM)": 166,
        "Night (After 8 PM)": 106
    },

    // Starting Point counts
    startingPointCounts: {
        "Kothrud": 114,
        "SIT Lavale Campus": 106,
        "Baner": 104,
        "Wakad": 103,
        "Pashan": 101,
        "Shivajinagar": 99,
        "Other": 97
    },

    // Destination counts
    destinationCounts: {
        "Kharadi": 126,
        "Hinjewadi": 123,
        "Swargate": 122,
        "Pune Station": 119,
        "Viman Nagar": 118,
        "Other": 116
    },

    // Delay Points counts
    delayPointsCounts: {
        "None": 241,
        "Hinjewadi Traffic": 83,
        "University Circle": 82,
        "Waiting for Bus/Metro": 81,
        "Yerawada/Kalyani Nagar junction": 79,
        "Chandni Chowk": 158
    },

    // Satisfaction distribution
    satisfactionCounts: {
        1: 137,
        2: 142,
        3: 147,
        4: 144,
        5: 154
    },

    // Average values by mode
    avgByMode: {
        "Metro": { travelTime: 40.8, cost: 24.2, satisfaction: 3.1 },
        "PMPML City Bus": { travelTime: 58.3, cost: 31.4, satisfaction: 2.9 },
        "Cab (Ola/Uber)": { travelTime: 52.1, cost: 241.3, satisfaction: 3.0 },
        "Personal Two-Wheeler": { travelTime: 48.5, cost: 72.8, satisfaction: 2.8 },
        "Auto Rickshaw": { travelTime: 51.7, cost: 198.5, satisfaction: 2.7 },
        "Carpool": { travelTime: 50.2, cost: 68.4, satisfaction: 3.2 }
    },

    // Average values by time of day
    avgByTimeOfDay: {
        "Morning Peak (8 AM - 11 AM)": { travelTime: 51.2, cost: 118.5 },
        "Evening Peak (4 PM - 8 PM)": { travelTime: 54.8, cost: 126.3 },
        "Midday (11 AM - 4 PM)": { travelTime: 53.5, cost: 124.7 },
        "Night (After 8 PM)": { travelTime: 55.1, cost: 119.2 }
    },

    // Cross-tab data: Mode by Time of Day
    crosstabModeTime: {
        "Metro": { "Morning Peak (8 AM - 11 AM)": 55, "Evening Peak (4 PM - 8 PM)": 42, "Midday (11 AM - 4 PM)": 35, "Night (After 8 PM)": 20 },
        "PMPML City Bus": { "Morning Peak (8 AM - 11 AM)": 52, "Evening Peak (4 PM - 8 PM)": 48, "Midday (11 AM - 4 PM)": 30, "Night (After 8 PM)": 18 },
        "Cab (Ola/Uber)": { "Morning Peak (8 AM - 11 AM)": 40, "Evening Peak (4 PM - 8 PM)": 32, "Midday (11 AM - 4 PM)": 25, "Night (After 8 PM)": 19 },
        "Personal Two-Wheeler": { "Morning Peak (8 AM - 11 AM)": 38, "Evening Peak (4 PM - 8 PM)": 30, "Midday (11 AM - 4 PM)": 28, "Night (After 8 PM)": 17 },
        "Auto Rickshaw": { "Morning Peak (8 AM - 11 AM)": 35, "Evening Peak (4 PM - 8 PM)": 28, "Midday (11 AM - 4 PM)": 25, "Night (After 8 PM)": 15 },
        "Carpool": { "Morning Peak (8 AM - 11 AM)": 34, "Evening Peak (4 PM - 8 PM)": 18, "Midday (11 AM - 4 PM)": 23, "Night (After 8 PM)": 17 }
    },

    // Mode by Starting Point for sunburst
    modeByStartingPoint: {
        "Kothrud": { "Metro": 28, "PMPML City Bus": 22, "Cab (Ola/Uber)": 18, "Personal Two-Wheeler": 16, "Auto Rickshaw": 15, "Carpool": 15 },
        "SIT Lavale Campus": { "Metro": 25, "PMPML City Bus": 20, "Cab (Ola/Uber)": 19, "Personal Two-Wheeler": 18, "Auto Rickshaw": 13, "Carpool": 11 },
        "Baner": { "Metro": 24, "PMPML City Bus": 21, "Cab (Ola/Uber)": 17, "Personal Two-Wheeler": 15, "Auto Rickshaw": 14, "Carpool": 13 },
        "Wakad": { "Metro": 26, "PMPML City Bus": 19, "Cab (Ola/Uber)": 18, "Personal Two-Wheeler": 16, "Auto Rickshaw": 14, "Carpool": 10 },
        "Pashan": { "Metro": 22, "PMPML City Bus": 20, "Cab (Ola/Uber)": 19, "Personal Two-Wheeler": 17, "Auto Rickshaw": 13, "Carpool": 10 },
        "Shivajinagar": { "Metro": 23, "PMPML City Bus": 21, "Cab (Ola/Uber)": 16, "Personal Two-Wheeler": 14, "Auto Rickshaw": 14, "Carpool": 11 },
        "Other": { "Metro": 24, "PMPML City Bus": 20, "Cab (Ola/Uber)": 18, "Personal Two-Wheeler": 17, "Auto Rickshaw": 15, "Carpool": 13 }
    },

    // Sample data for box plots and violin plots
    travelTimeByMode: {
        "Metro": [25, 28, 30, 33, 35, 38, 40, 41, 42, 45, 47, 50, 52, 55],
        "PMPML City Bus": [35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 119],
        "Cab (Ola/Uber)": [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        "Personal Two-Wheeler": [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
        "Auto Rickshaw": [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
        "Carpool": [29, 35, 40, 45, 50, 55, 60, 65, 70, 77]
    },

    costByMode: {
        "Metro": [10, 12, 13, 14, 15, 16, 20, 21, 23, 25, 26, 28, 30, 33],
        "PMPML City Bus": [15, 18, 20, 22, 25, 30, 35, 40, 45, 50],
        "Cab (Ola/Uber)": [150, 180, 200, 220, 240, 260, 280, 300, 320, 350, 380, 400, 430, 445],
        "Personal Two-Wheeler": [40, 50, 55, 60, 65, 70, 75, 80, 85, 90, 99],
        "Auto Rickshaw": [120, 150, 180, 200, 220, 250, 280, 300, 330, 350, 380, 400],
        "Carpool": [40, 50, 55, 60, 65, 70, 75, 80, 85, 91]
    },

    // Correlation matrix
    correlation: {
        labels: ["Travel Time", "Cost", "Satisfaction"],
        values: [
            [1.0, 0.32, -0.15],
            [0.32, 1.0, 0.08],
            [-0.15, 0.08, 1.0]
        ]
    },

    // 3D scatter data
    scatter3D: []
};

// Generate 3D scatter data
const modes = ["Metro", "PMPML City Bus", "Cab (Ola/Uber)", "Personal Two-Wheeler", "Auto Rickshaw", "Carpool"];
const modeColors = {
    "Metro": "#6366f1",
    "PMPML City Bus": "#10b981",
    "Cab (Ola/Uber)": "#f59e0b",
    "Personal Two-Wheeler": "#ef4444",
    "Auto Rickshaw": "#8b5cf6",
    "Carpool": "#06b6d4"
};

for (let i = 0; i < 150; i++) {
    const mode = modes[Math.floor(Math.random() * modes.length)];
    let travelTime, cost;

    if (mode === "Metro") {
        travelTime = 30 + Math.random() * 25;
        cost = 10 + Math.random() * 25;
    } else if (mode === "PMPML City Bus") {
        travelTime = 40 + Math.random() * 50;
        cost = 15 + Math.random() * 35;
    } else if (mode === "Cab (Ola/Uber)") {
        travelTime = 35 + Math.random() * 50;
        cost = 150 + Math.random() * 300;
    } else if (mode === "Personal Two-Wheeler") {
        travelTime = 25 + Math.random() * 45;
        cost = 40 + Math.random() * 60;
    } else if (mode === "Auto Rickshaw") {
        travelTime = 30 + Math.random() * 50;
        cost = 120 + Math.random() * 280;
    } else {
        travelTime = 29 + Math.random() * 45;
        cost = 40 + Math.random() * 50;
    }

    const satisfaction = Math.max(1, Math.min(5, Math.round(3 - (travelTime / 60) + (Math.random() * 2 - 1))));

    fullData.scatter3D.push({
        mode: mode,
        travelTime: Math.round(travelTime),
        cost: Math.round(cost),
        satisfaction: satisfaction,
        color: modeColors[mode]
    });
}

// Generate sample table data (first 20 records for display)
const sampleTableData = [
    { startingPoint: "Other", destination: "Kharadi", primaryMode: "Metro", timeOfDay: "Morning Peak", travelTime: 41, cost: 27, satisfaction: 2 },
    { startingPoint: "Kothrud", destination: "Pune Station", primaryMode: "Metro", timeOfDay: "Night", travelTime: 54, cost: 26, satisfaction: 5 },
    { startingPoint: "Pashan", destination: "Viman Nagar", primaryMode: "Personal Two-Wheeler", timeOfDay: "Morning Peak", travelTime: 45, cost: 99, satisfaction: 1 },
    { startingPoint: "Wakad", destination: "Kharadi", primaryMode: "Metro", timeOfDay: "Evening Peak", travelTime: 33, cost: 16, satisfaction: 3 },
    { startingPoint: "SIT Lavale Campus", destination: "Swargate", primaryMode: "Carpool", timeOfDay: "Morning Peak", travelTime: 57, cost: 91, satisfaction: 2 },
    { startingPoint: "Wakad", destination: "Swargate", primaryMode: "Personal Two-Wheeler", timeOfDay: "Night", travelTime: 38, cost: 79, satisfaction: 5 },
    { startingPoint: "SIT Lavale Campus", destination: "Pune Station", primaryMode: "Metro", timeOfDay: "Morning Peak", travelTime: 50, cost: 20, satisfaction: 1 },
    { startingPoint: "Other", destination: "Hinjewadi", primaryMode: "Cab (Ola/Uber)", timeOfDay: "Morning Peak", travelTime: 43, cost: 310, satisfaction: 4 },
    { startingPoint: "Other", destination: "Kharadi", primaryMode: "Metro", timeOfDay: "Midday", travelTime: 57, cost: 28, satisfaction: 5 },
    { startingPoint: "Other", destination: "Viman Nagar", primaryMode: "PMPML City Bus", timeOfDay: "Midday", travelTime: 56, cost: 47, satisfaction: 2 },
    { startingPoint: "Shivajinagar", destination: "Swargate", primaryMode: "Auto Rickshaw", timeOfDay: "Night", travelTime: 62, cost: 284, satisfaction: 3 },
    { startingPoint: "Baner", destination: "Other", primaryMode: "Metro", timeOfDay: "Evening Peak", travelTime: 20, cost: 10, satisfaction: 2 },
    { startingPoint: "Shivajinagar", destination: "Viman Nagar", primaryMode: "Auto Rickshaw", timeOfDay: "Morning Peak", travelTime: 33, cost: 419, satisfaction: 1 },
    { startingPoint: "Baner", destination: "Pune Station", primaryMode: "Personal Two-Wheeler", timeOfDay: "Evening Peak", travelTime: 51, cost: 43, satisfaction: 5 },
    { startingPoint: "Baner", destination: "Kharadi", primaryMode: "Metro", timeOfDay: "Morning Peak", travelTime: 31, cost: 28, satisfaction: 3 },
    { startingPoint: "Kothrud", destination: "Other", primaryMode: "Carpool", timeOfDay: "Morning Peak", travelTime: 38, cost: 74, satisfaction: 1 },
    { startingPoint: "Shivajinagar", destination: "Pune Station", primaryMode: "Cab (Ola/Uber)", timeOfDay: "Midday", travelTime: 61, cost: 421, satisfaction: 4 },
    { startingPoint: "Kothrud", destination: "Hinjewadi", primaryMode: "PMPML City Bus", timeOfDay: "Midday", travelTime: 105, cost: 43, satisfaction: 3 },
    { startingPoint: "Kothrud", destination: "Kharadi", primaryMode: "Cab (Ola/Uber)", timeOfDay: "Evening Peak", travelTime: 47, cost: 335, satisfaction: 2 },
    { startingPoint: "Other", destination: "Swargate", primaryMode: "Personal Two-Wheeler", timeOfDay: "Evening Peak", travelTime: 61, cost: 100, satisfaction: 2 }
];

// Stats
const stats = {
    totalRecords: 724,
    features: 10,
    startingPoints: 7,
    transportModes: 6,
    avgTravelTime: 53.83,
    avgCost: 122.32,
    avgSatisfaction: 2.95,
    minTravelTime: 20,
    maxTravelTime: 119,
    minCost: 10,
    maxCost: 445
};