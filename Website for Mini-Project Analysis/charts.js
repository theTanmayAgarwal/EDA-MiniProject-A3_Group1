// Plotly Chart Configuration
const plotlyConfig = {
    displayModeBar: true,
    modeBarButtonsToRemove: ['lasso2d', 'select2d', 'autoScale2d', 'resetScale2d'],
    responsive: true,
    displaylogo: false
};

// Color palette
const colors = {
    primary: ['#0071e3', '#147ce5', '#2887e7', '#3c92e9', '#509deb'],
    modes: {
        'Metro': '#0071e3',
        'PMPML City Bus': '#30d158',
        'Cab (Ola/Uber)': '#ff9f0a',
        'Personal Two-Wheeler': '#ff375f',
        'Auto Rickshaw': '#5e5ce6',
        'Carpool': '#64d2ff'
    },
    times: {
        'Morning Peak (8 AM - 11 AM)': '#ff9f0a',
        'Evening Peak (4 PM - 8 PM)': '#ff375f',
        'Midday (11 AM - 4 PM)': '#30d158',
        'Night (After 8 PM)': '#0071e3'
    },
    delays: ['#ff375f', '#ff9f0a', '#5e5ce6', '#64d2ff', '#30d158', '#6e6e73'],
    satisfaction: ['#ff375f', '#ff9f0a', '#eab308', '#84cc16', '#30d158']
};

// Dark theme layout
const darkLayout = {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: {
        color: '#f5f5f7',
        family: 'Inter, -apple-system, sans-serif'
    },
    xaxis: {
        gridcolor: 'rgba(255,255,255,0.08)',
        zerolinecolor: 'rgba(255,255,255,0.08)',
        tickfont: { color: '#86868b' }
    },
    yaxis: {
        gridcolor: 'rgba(255,255,255,0.08)',
        zerolinecolor: 'rgba(255,255,255,0.08)',
        tickfont: { color: '#86868b' }
    },
    margin: { t: 60, r: 20, b: 60, l: 60 }
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
}

// Primary Mode Bar Chart
function createPrimaryModeChart() {
    if (!document.getElementById('primaryModeChart')) return;

    const modes = Object.keys(fullData.primaryModeCounts);
    const counts = Object.values(fullData.primaryModeCounts);

    const data = [{
        x: modes.map(m => m.split(' ')[0]),
        y: counts,
        type: 'bar',
        marker: {
            color: modes.map(m => colors.modes[m]),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: counts,
        textposition: 'outside',
        textfont: { color: '#f5f5f7', size: 12 }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Primary Mode of Transport', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: '' },
        yaxis: { ...darkLayout.yaxis, title: 'Students' }
    };

    Plotly.newPlot('primaryModeChart', data, layout, plotlyConfig);
}

// Time of Day Pie Chart
function createTimeOfDayChart() {
    if (!document.getElementById('timeOfDayChart')) return;

    const labels = Object.keys(fullData.timeOfDayCounts).map(t => t.split('(')[0].trim());
    const values = Object.values(fullData.timeOfDayCounts);
    const pieColors = ['#ff9f0a', '#ff375f', '#30d158', '#0071e3'];

    const data = [{
        values: values,
        labels: labels,
        type: 'pie',
        hole: 0.5,
        marker: { colors: pieColors, line: { color: '#0a0a0a', width: 2 } },
        textinfo: 'percent+label',
        textposition: 'outside',
        textfont: { color: '#f5f5f7', size: 11 },
        hovertemplate: '<b>%{label}</b><br>Count: %{value}<br>Percentage: %{percent}<extra></extra>'
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Time of Day Distribution', font: { size: 14, color: '#f5f5f7' } },
        showlegend: false
    };

    Plotly.newPlot('timeOfDayChart', data, layout, plotlyConfig);
}

// Travel Time Histogram
function createTravelTimeHistogram() {
    if (!document.getElementById('travelTimeHistogram')) return;

    const allTimes = Object.values(fullData.travelTimeByMode).flat();

    const data = [{
        x: allTimes,
        type: 'histogram',
        marker: { color: '#0071e3', line: { color: '#147ce5', width: 1 } },
        opacity: 0.85,
        nbinsx: 20
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Travel Time Distribution (minutes)', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: 'Travel Time (min)' },
        yaxis: { ...darkLayout.yaxis, title: 'Frequency' },
        bargap: 0.05
    };

    Plotly.newPlot('travelTimeHistogram', data, layout, plotlyConfig);
}

// Cost Histogram
function createCostHistogram() {
    if (!document.getElementById('costHistogram')) return;

    const allCosts = Object.values(fullData.costByMode).flat();

    const data = [{
        x: allCosts,
        type: 'histogram',
        marker: { color: '#30d158', line: { color: '#34d399', width: 1 } },
        opacity: 0.85,
        nbinsx: 25
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'One-Way Cost Distribution (₹)', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: 'Cost (₹)' },
        yaxis: { ...darkLayout.yaxis, title: 'Frequency' },
        bargap: 0.05
    };

    Plotly.newPlot('costHistogram', data, layout, plotlyConfig);
}

// Delay Points Bar Chart
function createDelayPointsChart() {
    if (!document.getElementById('delayPointsChart')) return;

    const delayPoints = Object.keys(fullData.delayPointsCounts);
    const counts = Object.values(fullData.delayPointsCounts);

    const data = [{
        x: delayPoints,
        y: counts,
        type: 'bar',
        marker: {
            color: counts.map((c, i) => colors.delays[i % colors.delays.length]),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: counts,
        textposition: 'outside',
        textfont: { color: '#f5f5f7', size: 11 }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Major Delay Points', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: '', tickangle: -30 },
        yaxis: { ...darkLayout.yaxis, title: 'Frequency' }
    };

    Plotly.newPlot('delayPointsChart', data, layout, plotlyConfig);
}

// Satisfaction Bar Chart
function createSatisfactionChart() {
    if (!document.getElementById('satisfactionChart')) return;

    const ratings = Object.keys(fullData.satisfactionCounts).map(k => `Rating ${k}`);
    const counts = Object.values(fullData.satisfactionCounts);

    const data = [{
        x: ratings,
        y: counts,
        type: 'bar',
        marker: {
            color: colors.satisfaction,
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: counts,
        textposition: 'outside',
        textfont: { color: '#f5f5f7', size: 11 }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Satisfaction Rating Distribution', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: '' },
        yaxis: { ...darkLayout.yaxis, title: 'Students' }
    };

    Plotly.newPlot('satisfactionChart', data, layout, plotlyConfig);
}

// Average Travel Time by Mode
function createAvgTimeByModeChart() {
    if (!document.getElementById('avgTimeByModeChart')) return;

    const modes = Object.keys(fullData.avgByMode);
    const times = modes.map(m => fullData.avgByMode[m].travelTime);

    const data = [{
        x: modes.map(m => m.split(' ')[0]),
        y: times,
        type: 'bar',
        marker: {
            color: modes.map(m => colors.modes[m]),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: times.map(t => t.toFixed(1)),
        textposition: 'outside',
        textfont: { color: '#f5f5f7', size: 11 }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Avg Travel Time by Mode', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: '', tickangle: -30 },
        yaxis: { ...darkLayout.yaxis, title: 'Minutes' }
    };

    Plotly.newPlot('avgTimeByModeChart', data, layout, plotlyConfig);
}

// Average Cost by Mode
function createAvgCostByModeChart() {
    if (!document.getElementById('avgCostByModeChart')) return;

    const modes = Object.keys(fullData.avgByMode);
    const costs = modes.map(m => fullData.avgByMode[m].cost);

    const data = [{
        x: modes.map(m => m.split(' ')[0]),
        y: costs,
        type: 'bar',
        marker: {
            color: modes.map(m => colors.modes[m]),
            line: { color: 'rgba(255,255,255,0.1)', width: 1 }
        },
        text: costs.map(c => '₹' + Math.round(c)),
        textposition: 'outside',
        textfont: { color: '#f5f5f7', size: 11 }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Avg Cost by Mode', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: '', tickangle: -30 },
        yaxis: { ...darkLayout.yaxis, title: 'Cost (₹)' }
    };

    Plotly.newPlot('avgCostByModeChart', data, layout, plotlyConfig);
}

// Correlation Heatmap
function createCorrelationHeatmap() {
    if (!document.getElementById('correlationHeatmap')) return;

    const data = [{
        z: fullData.correlation.values,
        x: fullData.correlation.labels,
        y: fullData.correlation.labels,
        type: 'heatmap',
        colorscale: [[0, '#3b82f6'], [0.5, '#1e1b4b'], [1, '#ef4444']],
        showscale: true,
        text: fullData.correlation.values.map(row => row.map(v => v.toFixed(2))),
        texttemplate: '%{text}',
        textfont: { color: '#fff', size: 14 },
        colorbar: {
            title: { text: 'Correlation', font: { color: '#86868b' } },
            tickfont: { color: '#86868b' }
        }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Correlation Matrix', font: { size: 14, color: '#f5f5f7' } }
    };

    Plotly.newPlot('correlationHeatmap', data, layout, plotlyConfig);
}

// Crosstab Heatmap
function createCrosstabHeatmap() {
    if (!document.getElementById('crosstabHeatmap')) return;

    const modes = Object.keys(fullData.crosstabModeTime);
    const times = Object.keys(fullData.crosstabModeTime['Metro']);
    const z = modes.map(mode => times.map(time => fullData.crosstabModeTime[mode][time]));

    const data = [{
        z: z,
        x: times.map(t => t.split('(')[0].trim()),
        y: modes.map(m => m.split(' ')[0]),
        type: 'heatmap',
        colorscale: 'Viridis',
        showscale: true,
        colorbar: {
            title: { text: 'Count', font: { color: '#86868b' } },
            tickfont: { color: '#86868b' }
        }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Mode Usage by Time', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: 'Time of Day' },
        yaxis: { ...darkLayout.yaxis, title: 'Mode' }
    };

    Plotly.newPlot('crosstabHeatmap', data, layout, plotlyConfig);
}

// Box Plot
function createBoxPlotChart() {
    if (!document.getElementById('boxPlotChart')) return;

    const modes = Object.keys(fullData.travelTimeByMode);
    const data = modes.map(mode => ({
        y: fullData.travelTimeByMode[mode],
        type: 'box',
        name: mode.split(' ')[0],
        marker: { color: colors.modes[mode] },
        boxmean: true
    }));

    const layout = {
        ...darkLayout,
        title: { text: 'Travel Time by Mode', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: '' },
        yaxis: { ...darkLayout.yaxis, title: 'Minutes' }
    };

    Plotly.newPlot('boxPlotChart', data, layout, plotlyConfig);
}

// Violin Chart
function createViolinChart() {
    if (!document.getElementById('violinChart')) return;

    const modes = Object.keys(fullData.costByMode);
    const data = modes.map(mode => ({
        y: fullData.costByMode[mode],
        type: 'violin',
        name: mode.split(' ')[0],
        marker: { color: colors.modes[mode] },
        box: { visible: true },
        meanline: { visible: true }
    }));

    const layout = {
        ...darkLayout,
        title: { text: 'Cost Distribution by Mode', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: '' },
        yaxis: { ...darkLayout.yaxis, title: 'Cost (₹)' }
    };

    Plotly.newPlot('violinChart', data, layout, plotlyConfig);
}

// Treemap
function createTreemapChart() {
    if (!document.getElementById('treemapChart')) return;

    const labels = Object.keys(fullData.startingPointCounts);
    const values = Object.values(fullData.startingPointCounts);
    const treemapColors = ['#0071e3', '#30d158', '#ff9f0a', '#ff375f', '#5e5ce6', '#64d2ff', '#ec4899'];

    const data = [{
        type: 'treemap',
        labels: labels,
        values: values,
        parents: labels.map(() => ''),
        marker: { colors: treemapColors },
        textinfo: 'label+value+percent',
        textfont: { color: '#fff' },
        hovertemplate: '<b>%{label}</b><br>Students: %{value}<br>Percent: %{percentRoot}<extra></extra>'
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Student Distribution by Area', font: { size: 14, color: '#f5f5f7' } }
    };

    Plotly.newPlot('treemapChart', data, layout, plotlyConfig);
}

// Sunburst Chart
function createSunburstChart() {
    if (!document.getElementById('sunburstChart')) return;

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
                if (l.includes('Metro')) return '#0071e3';
                if (l.includes('PMPML')) return '#30d158';
                if (l.includes('Cab')) return '#ff9f0a';
                if (l.includes('Personal')) return '#ff375f';
                if (l.includes('Auto')) return '#5e5ce6';
                if (l.includes('Carpool')) return '#64d2ff';
                return '#374151';
            })
        },
        textfont: { color: '#fff' }
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Mode Breakdown by Area', font: { size: 14, color: '#f5f5f7' } }
    };

    Plotly.newPlot('sunburstChart', data, layout, plotlyConfig);
}

// 3D Scatter
function create3DScatterChart() {
    if (!document.getElementById('scatter3DChart')) return;
    if (!fullData.scatter3D || fullData.scatter3D.length === 0) return;

    const modeGroups = {};
    fullData.scatter3D.forEach(d => {
        if (!modeGroups[d.mode]) modeGroups[d.mode] = [];
        modeGroups[d.mode].push(d);
    });

    const data = Object.entries(modeGroups).map(([mode, points]) => ({
        x: points.map(p => p.travelTime),
        y: points.map(p => p.cost),
        z: points.map(p => p.satisfaction),
        type: 'scatter3d',
        mode: 'markers',
        name: mode.split(' ')[0],
        marker: {
            size: 4,
            color: points.map(p => p.color),
            opacity: 0.7
        }
    }));

    const layout = {
        ...darkLayout,
        title: { text: '3D: Time × Cost × Satisfaction', font: { size: 14, color: '#f5f5f7' } },
        scene: {
            xaxis: { title: 'Time (min)', gridcolor: 'rgba(255,255,255,0.08)', color: '#86868b' },
            yaxis: { title: 'Cost (₹)', gridcolor: 'rgba(255,255,255,0.08)', color: '#86868b' },
            zaxis: { title: 'Satisfaction', gridcolor: 'rgba(255,255,255,0.08)', color: '#86868b' },
            camera: { eye: { x: 1.5, y: 1.5, z: 1 } }
        },
        showlegend: true,
        legend: { font: { color: '#f5f5f7' } }
    };

    Plotly.newPlot('scatter3DChart', data, layout, plotlyConfig);
}

// Bubble Chart
function createBubbleChart() {
    if (!document.getElementById('bubbleChart')) return;

    const modes = Object.keys(fullData.avgByMode);

    const data = [{
        x: modes.map(m => fullData.avgByMode[m].travelTime),
        y: modes.map(m => fullData.avgByMode[m].cost),
        mode: 'markers+text',
        text: modes.map(m => m.split(' ')[0]),
        textposition: 'top center',
        textfont: { color: '#f5f5f7', size: 10 },
        marker: {
            size: modes.map(m => fullData.avgByMode[m].satisfaction * 20),
            color: modes.map(m => colors.modes[m]),
            opacity: 0.7,
            line: { color: '#fff', width: 2 }
        },
        hovertemplate: '<b>%{text}</b><br>Time: %{x:.1f} min<br>Cost: ₹%{y:.0f}<extra></extra>'
    }];

    const layout = {
        ...darkLayout,
        title: { text: 'Mode Efficiency (Bubble = Satisfaction)', font: { size: 14, color: '#f5f5f7' } },
        xaxis: { ...darkLayout.xaxis, title: 'Avg Time (min)' },
        yaxis: { ...darkLayout.yaxis, title: 'Avg Cost (₹)' }
    };

    Plotly.newPlot('bubbleChart', data, layout, plotlyConfig);
}

// Stacked Bar Chart
function createStackedBarChart() {
    if (!document.getElementById('stackedBarChart')) return;

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
        title: { text: 'Mode Usage Across Time', font: { size: 14, color: '#f5f5f7' } },
        barmode: 'stack',
        xaxis: { ...darkLayout.xaxis, title: 'Time' },
        yaxis: { ...darkLayout.yaxis, title: 'Commutes' },
        showlegend: true,
        legend: { font: { color: '#f5f5f7' }, orientation: 'h', y: -0.2 }
    };

    Plotly.newPlot('stackedBarChart', data, layout, plotlyConfig);
}

// Export
window.initCharts = initCharts;
window.plotlyConfig = plotlyConfig;
window.darkLayout = darkLayout;
window.colors = colors;