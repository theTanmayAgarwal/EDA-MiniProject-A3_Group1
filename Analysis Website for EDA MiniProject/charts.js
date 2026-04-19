// Plotly Chart Configuration
const plotlyConfig = {
    displayModeBar: true,
    modeBarButtonsToRemove: ['lasso2d', 'select2d'],
    responsive: true,
    displaylogo: false
};

// Color palette
const colors = {
    primary: ['#6366f1', '#818cf8', '#a5b4fc', '#c7d2fe', '#e0e7ff'],
    secondary: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'],
    accent: ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a', '#fef3c7'],
    modes: {
        'Metro': '#6366f1',
        'PMPML City Bus': '#10b981',
        'Cab (Ola/Uber)': '#f59e0b',
        'Personal Two-Wheeler': '#ef4444',
        'Auto Rickshaw': '#8b5cf6',
        'Carpool': '#06b6d4'
    },
    times: {
        'Morning Peak (8 AM - 11 AM)': '#f59e0b',
        'Evening Peak (4 PM - 8 PM)': '#ef4444',
        'Midday (11 AM - 4 PM)': '#10b981',
        'Night (After 8 PM)': '#6366f1'
    }
};

// Dark theme layout
const darkLayout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#e5e5e5', family: 'Inter, sans-serif' },
    xaxis: { gridcolor: 'rgba(42, 42, 74, 0.5)', zerolinecolor: 'rgba(42, 42, 74, 0.5)' },
    yaxis: { gridcolor: 'rgba(42, 42, 74, 0.5)', zerolinecolor: 'rgba(42, 42, 74, 0.5)' }
};

// Initialize all charts
function initCharts() {
    createPrimaryModeChart();
    createTimeOfDayChart();
    createTravelTimeHistogram();
    createCostHistogram();
    createDelayPointsChart();
    createSatisfactionChart();
    createAvgTimeByModeChart();
    createAvgCostByModeChart();
    createCorrelationHeatmap();
    createCrosstabHeatmap();
    createBoxPlotChart();
    createViolinChart();
    createTreemapChart();
    createSunburstChart();
    create3DScatterChart();
    createBubbleChart();
    createStackedBarChart();
    createDashboard();
}

// Primary Mode Bar Chart
function createPrimaryModeChart() {
    const data = [{
        x: Object.keys(fullData.primaryModeCounts),
        y: Object.values(fullData.primaryModeCounts),
        type: 'bar',
        marker: {
            color: Object.keys(fullData.primaryModeCounts).map(mode => colors.modes[mode]),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: Object.values(fullData.primaryModeCounts),
        textposition: 'outside',
        textfont: { color: '#e5e5e5' }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Primary Mode of Transport', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Transport Mode', tickangle: -45 },
        yaxis: { ...darkLayout.yaxis, title: 'Number of Students' },
        margin: { t: 50, r: 20, b: 100, l: 60 },
        bargap: 0.3
    };

    Plotly.newPlot('primaryModeChart', data, layout, plotlyConfig);
}

// Time of Day Pie Chart
function createTimeOfDayChart() {
    const data = [{
        values: Object.values(fullData.timeOfDayCounts),
        labels: Object.keys(fullData.timeOfDayCounts).map(t => t.split('(')[0].trim()),
        type: 'pie',
        hole: 0.4,
        marker: {
            colors: ['#f59e0b', '#ef4444', '#10b981', '#6366f1'],
            line: { color: '#111127', width: 2 }
        },
        textinfo: 'percent+label',
        textposition: 'outside',
        textfont: { color: '#e5e5e5', size: 12 },
        hovertemplate: '<b>%{label}</b><br>Count: %{value}<br>Percentage: %{percent}<extra></extra>'
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Commute Time Distribution', font: { size: 16, color: '#fff' } },
        showlegend: false,
        margin: { t: 50, r: 20, b: 50, l: 20 }
    };

    Plotly.newPlot('timeOfDayChart', data, layout, plotlyConfig);
}

// Travel Time Histogram
function createTravelTimeHistogram() {
    const data = [{
        x: fullData.travelTimeByMode.Metro.concat(fullData.travelTimeByMode['PMPML City Bus'])
            .concat(fullData.travelTimeByMode['Cab (Ola/Uber)'])
            .concat(fullData.travelTimeByMode['Personal Two-Wheeler'])
            .concat(fullData.travelTimeByMode['Auto Rickshaw'])
            .concat(fullData.travelTimeByMode.Carpool),
        type: 'histogram',
        marker: {
            color: '#6366f1',
            line: { color: '#818cf8', width: 1 }
        },
        opacity: 0.8,
        nbinsx: 20
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Travel Time Distribution (minutes)', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Travel Time (minutes)' },
        yaxis: { ...darkLayout.yaxis, title: 'Frequency' },
        bargap: 0.05,
        margin: { t: 50, r: 20, b: 60, l: 60 }
    };

    Plotly.newPlot('travelTimeHistogram', data, layout, plotlyConfig);
}

// Cost Histogram
function createCostHistogram() {
    const data = [{
        x: fullData.costByMode.Metro.concat(fullData.costByMode['PMPML City Bus'])
            .concat(fullData.costByMode['Cab (Ola/Uber)'])
            .concat(fullData.costByMode['Personal Two-Wheeler'])
            .concat(fullData.costByMode['Auto Rickshaw'])
            .concat(fullData.costByMode.Carpool),
        type: 'histogram',
        marker: {
            color: '#10b981',
            line: { color: '#34d399', width: 1 }
        },
        opacity: 0.8,
        nbinsx: 25
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'One-Way Cost Distribution (₹)', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Cost (₹)' },
        yaxis: { ...darkLayout.yaxis, title: 'Frequency' },
        bargap: 0.05,
        margin: { t: 50, r: 20, b: 60, l: 60 }
    };

    Plotly.newPlot('costHistogram', data, layout, plotlyConfig);
}

// Delay Points Bar Chart
function createDelayPointsChart() {
    const delayPoints = Object.keys(fullData.delayPointsCounts);
    const counts = Object.values(fullData.delayPointsCounts);

    const data = [{
        x: delayPoints,
        y: counts,
        type: 'bar',
        marker: {
            color: counts.map((c, i) => {
                const colors2 = ['#ef4444', '#f59e0b', '#8b5cf6', '#10b981', '#6366f1', '#06b6d4'];
                return colors2[i % colors2.length];
            }),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: counts,
        textposition: 'outside',
        textfont: { color: '#e5e5e5' }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Major Delay Points / Bottlenecks', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Delay Point', tickangle: -30 },
        yaxis: { ...darkLayout.yaxis, title: 'Frequency' },
        margin: { t: 50, r: 20, b: 100, l: 60 },
        bargap: 0.3
    };

    Plotly.newPlot('delayPointsChart', data, layout, plotlyConfig);
}

// Satisfaction Bar Chart
function createSatisfactionChart() {
    const ratings = Object.keys(fullData.satisfactionCounts).map(Number);
    const counts = Object.values(fullData.satisfactionCounts);

    const data = [{
        x: ratings.map(r => `Rating ${r}`),
        y: counts,
        type: 'bar',
        marker: {
            color: ['#ef4444', '#f59e0b', '#eab308', '#84cc16', '#10b981'],
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: counts,
        textposition: 'outside',
        textfont: { color: '#e5e5e5' }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Satisfaction Rating Distribution', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Rating' },
        yaxis: { ...darkLayout.yaxis, title: 'Number of Students' },
        margin: { t: 50, r: 20, b: 60, l: 60 },
        bargap: 0.3
    };

    Plotly.newPlot('satisfactionChart', data, layout, plotlyConfig);
}

// Average Travel Time by Mode
function createAvgTimeByModeChart() {
    const modes = Object.keys(fullData.avgByMode);
    const times = modes.map(m => fullData.avgByMode[m].travelTime);

    const data = [{
        x: modes,
        y: times,
        type: 'bar',
        marker: {
            color: modes.map(m => colors.modes[m]),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: times.map(t => t.toFixed(1) + ' min'),
        textposition: 'outside',
        textfont: { color: '#e5e5e5' }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Average Travel Time by Mode', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Transport Mode', tickangle: -45 },
        yaxis: { ...darkLayout.yaxis, title: 'Avg. Travel Time (min)' },
        margin: { t: 50, r: 20, b: 100, l: 60 },
        bargap: 0.3
    };

    Plotly.newPlot('avgTimeByModeChart', data, layout, plotlyConfig);
}

// Average Cost by Mode
function createAvgCostByModeChart() {
    const modes = Object.keys(fullData.avgByMode);
    const costs = modes.map(m => fullData.avgByMode[m].cost);

    const data = [{
        x: modes,
        y: costs,
        type: 'bar',
        marker: {
            color: modes.map(m => colors.modes[m]),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: costs.map(c => '₹' + c.toFixed(0)),
        textposition: 'outside',
        textfont: { color: '#e5e5e5' }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Average Cost by Transport Mode', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Transport Mode', tickangle: -45 },
        yaxis: { ...darkLayout.yaxis, title: 'Avg. Cost (₹)' },
        margin: { t: 50, r: 20, b: 100, l: 60 },
        bargap: 0.3
    };

    Plotly.newPlot('avgCostByModeChart', data, layout, plotlyConfig);
}

// Correlation Heatmap
function createCorrelationHeatmap() {
    const data = [{
        z: fullData.correlation.values,
        x: fullData.correlation.labels,
        y: fullData.correlation.labels,
        type: 'heatmap',
        colorscale: [
            [0, '#3b82f6'],
            [0.5, '#1e1b4b'],
            [1, '#ef4444']
        ],
        showscale: true,
        hoverongaps: false,
        text: fullData.correlation.values.map(row => row.map(v => v.toFixed(2))),
        texttemplate: '%{text}',
        textfont: { color: '#fff', size: 14 },
        colorbar: {
            title: { text: 'Correlation', font: { color: '#e5e5e5' } },
            tickfont: { color: '#e5e5e5' }
        }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Correlation Matrix: Travel Time, Cost & Satisfaction', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, side: 'bottom' },
        yaxis: { ...darkLayout.yaxis },
        margin: { t: 50, r: 100, b: 60, l: 80 }
    };

    Plotly.newPlot('correlationHeatmap', data, layout, plotlyConfig);
}

// Crosstab Heatmap
function createCrosstabHeatmap() {
    const modes = Object.keys(fullData.crosstabModeTime);
    const times = Object.keys(fullData.crosstabModeTime['Metro']);

    const z = modes.map(mode => times.map(time => fullData.crosstabModeTime[mode][time]));

    const data = [{
        z: z,
        x: times.map(t => t.split('(')[0].trim()),
        y: modes,
        type: 'heatmap',
        colorscale: 'Viridis',
        showscale: true,
        hoverongaps: false,
        colorbar: {
            title: { text: 'Count', font: { color: '#e5e5e5' } },
            tickfont: { color: '#e5e5e5' }
        }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Transport Mode Usage by Time of Day', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Time of Day' },
        yaxis: { ...darkLayout.yaxis, title: 'Transport Mode' },
        margin: { t: 50, r: 100, b: 80, l: 120 }
    };

    Plotly.newPlot('crosstabHeatmap', data, layout, plotlyConfig);
}

// Box Plot
function createBoxPlotChart() {
    const modes = Object.keys(fullData.travelTimeByMode);

    const data = modes.map(mode => ({
        y: fullData.travelTimeByMode[mode],
        type: 'box',
        name: mode.split(' ')[0],
        marker: { color: colors.modes[mode] },
        boxmean: true,
        boxpoints: 'outliers'
    }));

    const layout = {
        ...darkLayout,
        title: { text: 'Travel Time Distribution by Mode', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Transport Mode', tickangle: -30 },
        yaxis: { ...darkLayout.yaxis, title: 'Travel Time (minutes)' },
        margin: { t: 50, r: 20, b: 100, l: 60 },
        boxgap: 0.3
    };

    Plotly.newPlot('boxPlotChart', data, layout, plotlyConfig);
}

// Violin Chart (using box plot approximation)
function createViolinChart() {
    const modes = Object.keys(fullData.costByMode);

    const data = modes.map(mode => ({
        y: fullData.costByMode[mode],
        type: 'violin',
        name: mode.split(' ')[0],
        marker: { color: colors.modes[mode] },
        box: { visible: true },
        meanline: { visible: true },
        side: 'positive'
    }));

    const layout = {
        ...darkLayout,
        title: { text: 'Cost Distribution Shape by Mode', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Transport Mode', tickangle: -30 },
        yaxis: { ...darkLayout.yaxis, title: 'Cost (₹)' },
        margin: { t: 50, r: 20, b: 100, l: 60 },
        violingap: 0.3
    };

    Plotly.newPlot('violinChart', data, layout, plotlyConfig);
}

// Treemap
function createTreemapChart() {
    const labels = Object.keys(fullData.startingPointCounts);
    const values = Object.values(fullData.startingPointCounts);

    const data = [{
        type: 'treemap',
        labels: labels,
        values: values,
        parents: labels.map(() => ''),
        marker: {
            colors: ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899']
        },
        textinfo: 'label+value+percent',
        textfont: { color: '#fff' },
        hovertemplate: '<b>%{label}</b><br>Students: %{value}<br>Percentage: %{percentRoot}<extra></extra>'
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Student Distribution by Starting Point', font: { size: 16, color: '#fff' } },
        margin: { t: 50, r: 20, b: 20, l: 20 }
    };

    Plotly.newPlot('treemapChart', data, layout, plotlyConfig);
}

// Sunburst Chart
function createSunburstChart() {
    const startingPoints = Object.keys(fullData.modeByStartingPoint);
    const labels = [...startingPoints];
    const parents = [...startingPoints.map(() => '')];
    const values = [];

    startingPoints.forEach(sp => {
        const modes = fullData.modeByStartingPoint[sp];
        Object.entries(modes).forEach(([mode, count]) => {
            labels.push(`${sp} - ${mode.split(' ')[0]}`);
            parents.push(sp);
            values.push(count);
        });
    });

    const data = [{
        type: 'sunburst',
        labels: labels,
        parents: parents,
        values: values,
        marker: {
            colors: labels.map(l => {
                if (l.includes('Metro')) return '#6366f1';
                if (l.includes('PMPML')) return '#10b981';
                if (l.includes('Cab')) return '#f59e0b';
                if (l.includes('Personal')) return '#ef4444';
                if (l.includes('Auto')) return '#8b5cf6';
                if (l.includes('Carpool')) return '#06b6d4';
                return '#374151';
            })
        },
        textfont: { color: '#fff' },
        hovertemplate: '<b>%{label}</b><br>Count: %{value}<extra></extra>'
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Transport Mode Breakdown by Starting Area', font: { size: 16, color: '#fff' } },
        margin: { t: 50, r: 20, b: 20, l: 20 }
    };

    Plotly.newPlot('sunburstChart', data, layout, plotlyConfig);
}

// 3D Scatter Plot
function create3DScatterChart() {
    const data = [];

    const modeGroups = {};
    fullData.scatter3D.forEach(d => {
        if (!modeGroups[d.mode]) modeGroups[d.mode] = [];
        modeGroups[d.mode].push(d);
    });

    Object.entries(modeGroups).forEach(([mode, points]) => {
        data.push({
            x: points.map(p => p.travelTime),
            y: points.map(p => p.cost),
            z: points.map(p => p.satisfaction),
            type: 'scatter3d',
            mode: 'markers',
            name: mode.split(' ')[0],
            marker: {
                size: 5,
                color: points.map(p => p.color),
                opacity: 0.8
            },
            hovertemplate: '<b>' + mode + '</b><br>Time: %{x} min<br>Cost: ₹%{y}<br>Satisfaction: %{z}/5<extra></extra>'
        });
    });

    const layout = {
        ...darkLayout,
        title: { text: '3D: Travel Time × Cost × Satisfaction', font: { size: 16, color: '#fff' } },
        scene: {
            xaxis: { title: 'Travel Time (min)', gridcolor: 'rgba(42, 42, 74, 0.5)', color: '#e5e5e5' },
            yaxis: { title: 'Cost (₹)', gridcolor: 'rgba(42, 42, 74, 0.5)', color: '#e5e5e5' },
            zaxis: { title: 'Satisfaction', gridcolor: 'rgba(42, 42, 74, 0.5)', color: '#e5e5e5' },
            camera: { eye: { x: 1.5, y: 1.5, z: 1 } }
        },
        margin: { t: 50, r: 20, b: 20, l: 20 },
        showlegend: true,
        legend: { font: { color: '#e5e5e5' } }
    };

    Plotly.newPlot('scatter3DChart', data, layout, plotlyConfig);
}

// Bubble Chart
function createBubbleChart() {
    const modes = Object.keys(fullData.avgByMode);

    const data = [{
        x: modes.map(m => fullData.avgByMode[m].travelTime),
        y: modes.map(m => fullData.avgByMode[m].cost),
        mode: 'markers+text',
        text: modes.map(m => m.split(' ')[0]),
        textposition: 'top center',
        textfont: { color: '#e5e5e5', size: 10 },
        marker: {
            size: modes.map(m => fullData.avgByMode[m].satisfaction * 15),
            color: modes.map(m => colors.modes[m]),
            opacity: 0.7,
            line: { color: '#fff', width: 2 }
        },
        hovertemplate: '<b>%{text}</b><br>Time: %{x:.1f} min<br>Cost: ₹%{y:.0f}<br>Satisfaction: %{marker.size/15:.1f}/5<extra></extra>'
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Transport Mode Efficiency (Bubble Size = Satisfaction)', font: { size: 16, color: '#fff' } },
        xaxis: { ...darkLayout.xaxis, title: 'Average Travel Time (min)' },
        yaxis: { ...darkLayout.yaxis, title: 'Average Cost (₹)' },
        margin: { t: 50, r: 20, b: 60, l: 80 }
    };

    Plotly.newPlot('bubbleChart', data, layout, plotlyConfig);
}

// Stacked Bar Chart
function createStackedBarChart() {
    const times = Object.keys(fullData.crosstabModeTime['Metro']);
    const modes = Object.keys(fullData.crosstabModeTime);

    const data = modes.map(mode => ({
        x: times.map(t => t.split('(')[0].trim()),
        y: times.map(t => fullData.crosstabModeTime[mode][t]),
        type: 'bar',
        name: mode.split(' ')[0],
        marker: { color: colors.modes[mode] }
    }));

    const layout = {
        ...darkLayout,
        title: { text: 'Mode Composition Across Time Slots', font: { size: 16, color: '#fff' } },
        barmode: 'stack',
        xaxis: { ...darkLayout.xaxis, title: 'Time of Day' },
        yaxis: { ...darkLayout.yaxis, title: 'Number of Commutes' },
        margin: { t: 50, r: 20, b: 60, l: 60 },
        showlegend: true,
        legend: { font: { color: '#e5e5e5' }, orientation: 'h', y: -0.15 }
    };

    Plotly.newPlot('stackedBarChart', data, layout, plotlyConfig);
}

// Dashboard
function createDashboard() {
    const data = [];

    // Subplot 1: Mode pie
    data.push({
        values: Object.values(fullData.primaryModeCounts),
        labels: Object.keys(fullData.primaryModeCounts),
        type: 'pie',
        domain: { row: 0, column: 0 },
        hole: 0.4,
        marker: { colors: Object.keys(fullData.primaryModeCounts).map(m => colors.modes[m]) },
        textinfo: 'percent',
        textfont: { color: '#fff', size: 10 },
        showlegend: false
    });

    // Subplot 2: Time distribution
    data.push({
        values: Object.values(fullData.timeOfDayCounts),
        labels: Object.keys(fullData.timeOfDayCounts).map(t => t.split('(')[0].trim()),
        type: 'pie',
        domain: { row: 0, column: 1 },
        hole: 0.4,
        marker: { colors: ['#f59e0b', '#ef4444', '#10b981', '#6366f1'] },
        textinfo: 'percent',
        textfont: { color: '#fff', size: 10 },
        showlegend: false
    });

    // Subplot 3: Bar - Avg metrics by mode
    const modes = Object.keys(fullData.avgByMode);
    data.push({
        x: modes.map(m => m.split(' ')[0]),
        y: modes.map(m => fullData.avgByMode[m].travelTime),
        type: 'bar',
        domain: { row: 1, column: 0 },
        marker: { color: modes.map(m => colors.modes[m]) },
        text: modes.map(m => m.split(' ')[0]),
        textfont: { color: '#fff' }
    });

    // Subplot 4: Satisfaction distribution
    data.push({
        x: Object.keys(fullData.satisfactionCounts).map(k => `Rating ${k}`),
        y: Object.values(fullData.satisfactionCounts),
        type: 'bar',
        domain: { row: 1, column: 1 },
        marker: { color: ['#ef4444', '#f59e0b', '#eab308', '#84cc16', '#10b981'] },
        textfont: { color: '#fff' }
    });

    const layout = {
        ...darkLayout,
        title: { text: 'Student Commute Analytics Dashboard', font: { size: 18, color: '#fff' } },
        grid: { rows: 2, columns: 2, pattern: 'independent' },
        annotations: [
            { text: 'Transport Modes', x: 0.25, y: 1.05, xref: 'paper', yref: 'paper', showarrow: false, font: { color: '#e5e5e5', size: 12 } },
            { text: 'Time Distribution', x: 0.75, y: 1.05, xref: 'paper', yref: 'paper', showarrow: false, font: { color: '#e5e5e5', size: 12 } },
            { text: 'Avg Travel Time by Mode', x: 0.25, y: 0.45, xref: 'paper', yref: 'paper', showarrow: false, font: { color: '#e5e5e5', size: 12 } },
            { text: 'Satisfaction Distribution', x: 0.75, y: 0.45, xref: 'paper', yref: 'paper', showarrow: false, font: { color: '#e5e5e5', size: 12 } }
        ],
        margin: { t: 80, r: 20, b: 40, l: 40 },
        height: 600
    };

    Plotly.newPlot('dashboardChart', data, layout, plotlyConfig);
}

// Export functions
window.initCharts = initCharts;
window.plotlyConfig = plotlyConfig;
window.darkLayout = darkLayout;
window.colors = colors;