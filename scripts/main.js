// ================================
// Business Analytics Dashboard
// Main JavaScript File
// ================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

// ================================
// Dashboard Initialization
// ================================
function initializeDashboard() {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
    
    loadDashboardData();
    setupEventListeners();
}

// ================================
// Event Listeners
// ================================
function setupEventListeners() {
    const refreshBtn = document.getElementById('refreshData');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', function() {
            refreshDashboardData();
        });
    }
}

// ================================
// Date & Time Display
// ================================
function updateDateTime() {
    const dateDisplay = document.getElementById('currentDate');
    if (dateDisplay) {
        const now = new Date();
        const options = { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        dateDisplay.textContent = now.toLocaleDateString('en-US', options);
    }
}

// ================================
// Mock Data Generation
// ================================
function generateMockData() {
    return {
        revenue: {
            current: 2847650,
            change: 12.5
        },
        users: {
            current: 45328,
            change: 8.3
        },
        conversion: {
            current: 3.42,
            change: 2.1
        },
        growth: {
            current: 18.7,
            change: 5.4
        },
        revenueByMonth: [
            { month: 'Jan', value: 185000 },
            { month: 'Feb', value: 208000 },
            { month: 'Mar', value: 195000 },
            { month: 'Apr', value: 225000 },
            { month: 'May', value: 240000 },
            { month: 'Jun', value: 235000 },
            { month: 'Jul', value: 265000 },
            { month: 'Aug', value: 248000 },
            { month: 'Sep', value: 270000 },
            { month: 'Oct', value: 285000 },
            { month: 'Nov', value: 295000 },
            { month: 'Dec', value: 310000 }
        ],
        salesByCategory: [
            { category: 'Electronics', value: 850000, color: '#667eea' },
            { category: 'Clothing', value: 620000, color: '#f5576c' },
            { category: 'Home & Garden', value: 480000, color: '#00f2fe' },
            { category: 'Sports', value: 390000, color: '#43e97b' },
            { category: 'Books', value: 275000, color: '#fee140' },
            { category: 'Other', value: 232650, color: '#fa709a' }
        ],
        userDistribution: [
            { segment: 'Age 18-24', value: 8500, color: '#667eea' },
            { segment: 'Age 25-34', value: 15200, color: '#f5576c' },
            { segment: 'Age 35-44', value: 12800, color: '#00f2fe' },
            { segment: 'Age 45-54', value: 6300, color: '#43e97b' },
            { segment: 'Age 55+', value: 2528, color: '#fee140' }
        ],
        monthlyMetrics: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            revenue: [62000, 68000, 71000, 75000],
            orders: [1200, 1350, 1480, 1620],
            visitors: [8500, 9200, 9800, 10500]
        }
    };
}

// ================================
// Load Dashboard Data
// ================================
function loadDashboardData() {
    const data = generateMockData();
    
    // Update KPI Cards
    updateKPICards(data);
    
    // Initialize Charts
    initializeCharts(data);
}

// ================================
// Refresh Dashboard Data
// ================================
function refreshDashboardData() {
    const refreshBtn = document.getElementById('refreshData');
    
    // Add loading state
    if (refreshBtn) {
        refreshBtn.disabled = true;
        refreshBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="animation: spin 1s linear infinite;">
                <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C12.0711 2.5 13.9461 3.37289 15.2678 4.76777M15.2678 4.76777V1.66667M15.2678 4.76777H12.1667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Refreshing...
        `;
    }
    
    // Simulate data refresh
    setTimeout(() => {
        loadDashboardData();
        
        if (refreshBtn) {
            refreshBtn.disabled = false;
            refreshBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C12.0711 2.5 13.9461 3.37289 15.2678 4.76777M15.2678 4.76777V1.66667M15.2678 4.76777H12.1667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Refresh
            `;
        }
    }, 1000);
}

// ================================
// Update KPI Cards
// ================================
function updateKPICards(data) {
    // Revenue
    animateValue('revenueValue', 0, data.revenue.current, 1500, true);
    updateChange('revenueChange', data.revenue.change);
    
    // Users
    animateValue('usersValue', 0, data.users.current, 1500, false);
    updateChange('usersChange', data.users.change);
    
    // Conversion Rate
    animateValue('conversionValue', 0, data.conversion.current, 1500, false, '%');
    updateChange('conversionChange', data.conversion.change);
    
    // Growth
    animateValue('growthValue', 0, data.growth.current, 1500, false, '%');
    updateChange('growthChange', data.growth.change);
}

// ================================
// Animate Number Values
// ================================
function animateValue(elementId, start, end, duration, isCurrency = false, suffix = '') {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(current);
        if (isCurrency) {
            displayValue = '$' + displayValue.toLocaleString();
        } else if (suffix === '%') {
            displayValue = (current).toFixed(2) + suffix;
        } else {
            displayValue = displayValue.toLocaleString();
        }
        
        element.textContent = displayValue;
    }, 16);
}

// ================================
// Update Change Indicators
// ================================
function updateChange(elementId, value) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const isPositive = value >= 0;
    const arrow = isPositive ? 
        `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>` :
        `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2V10M6 10L10 6M6 10L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    
    element.className = 'kpi-change ' + (isPositive ? 'positive' : 'negative');
    element.innerHTML = arrow + (isPositive ? '+' : '') + value.toFixed(1) + '%';
}

// ================================
// Chart Configurations
// ================================
const chartDefaults = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: '#a0a0c0',
                font: {
                    family: 'Inter',
                    size: 12
                },
                padding: 15
            }
        },
        tooltip: {
            backgroundColor: 'rgba(26, 26, 46, 0.95)',
            titleColor: '#ffffff',
            bodyColor: '#a0a0c0',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 8,
            titleFont: {
                size: 14,
                weight: 'bold'
            },
            bodyFont: {
                size: 13
            }
        }
    }
};

// ================================
// Initialize All Charts
// ================================
let charts = {};

function initializeCharts(data) {
    // Destroy existing charts if they exist
    Object.values(charts).forEach(chart => {
        if (chart) chart.destroy();
    });
    charts = {};
    
    // Revenue Trend Chart (Line)
    charts.revenueTrend = createRevenueTrendChart(data.revenueByMonth);
    
    // Sales by Category Chart (Bar)
    charts.salesCategory = createSalesCategoryChart(data.salesByCategory);
    
    // User Distribution Chart (Doughnut)
    charts.userDistribution = createUserDistributionChart(data.userDistribution);
    
    // Monthly Performance Chart (Multi-bar)
    charts.monthlyPerformance = createMonthlyPerformanceChart(data.monthlyMetrics);
}

// ================================
// Revenue Trend Chart
// ================================
function createRevenueTrendChart(data) {
    const ctx = document.getElementById('revenueTrendChart');
    if (!ctx) return null;
    
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(102, 126, 234, 0.4)');
    gradient.addColorStop(1, 'rgba(102, 126, 234, 0.0)');
    
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.month),
            datasets: [{
                label: 'Revenue',
                data: data.map(d => d.value),
                borderColor: '#667eea',
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: '#667eea',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointHoverBackgroundColor: '#667eea',
                pointHoverBorderColor: '#ffffff',
                pointHoverBorderWidth: 3
            }]
        },
        options: {
            ...chartDefaults,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a0a0c0',
                        font: { size: 11 },
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#a0a0c0',
                        font: { size: 11 }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                ...chartDefaults.plugins,
                legend: {
                    display: false
                },
                tooltip: {
                    ...chartDefaults.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// ================================
// Sales by Category Chart
// ================================
function createSalesCategoryChart(data) {
    const ctx = document.getElementById('salesCategoryChart');
    if (!ctx) return null;
    
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.category),
            datasets: [{
                label: 'Sales',
                data: data.map(d => d.value),
                backgroundColor: data.map(d => d.color),
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartDefaults,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a0a0c0',
                        font: { size: 11 },
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#a0a0c0',
                        font: { size: 10 }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                ...chartDefaults.plugins,
                legend: {
                    display: false
                },
                tooltip: {
                    ...chartDefaults.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return 'Sales: $' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// ================================
// User Distribution Chart
// ================================
function createUserDistributionChart(data) {
    const ctx = document.getElementById('userDistributionChart');
    if (!ctx) return null;
    
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: data.map(d => d.segment),
            datasets: [{
                data: data.map(d => d.value),
                backgroundColor: data.map(d => d.color),
                borderWidth: 2,
                borderColor: '#1a1a2e',
                hoverBorderColor: '#ffffff',
                hoverBorderWidth: 3
            }]
        },
        options: {
            ...chartDefaults,
            cutout: '65%',
            plugins: {
                ...chartDefaults.plugins,
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#a0a0c0',
                        font: {
                            family: 'Inter',
                            size: 11
                        },
                        padding: 12,
                        usePointStyle: true,
                        pointStyle: 'circle'
                    }
                },
                tooltip: {
                    ...chartDefaults.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + context.parsed.toLocaleString() + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// ================================
// Monthly Performance Chart
// ================================
function createMonthlyPerformanceChart(data) {
    const ctx = document.getElementById('monthlyPerformanceChart');
    if (!ctx) return null;
    
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: 'Revenue ($K)',
                    data: data.revenue.map(v => v / 1000),
                    backgroundColor: '#667eea',
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Orders',
                    data: data.orders,
                    backgroundColor: '#f5576c',
                    borderRadius: 6,
                    borderSkipped: false
                },
                {
                    label: 'Visitors (100s)',
                    data: data.visitors.map(v => v / 100),
                    backgroundColor: '#43e97b',
                    borderRadius: 6,
                    borderSkipped: false
                }
            ]
        },
        options: {
            ...chartDefaults,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#a0a0c0',
                        font: { size: 11 }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: '#a0a0c0',
                        font: { size: 11 }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            },
            plugins: {
                ...chartDefaults.plugins,
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#a0a0c0',
                        font: {
                            family: 'Inter',
                            size: 11
                        },
                        padding: 12,
                        usePointStyle: true,
                        pointStyle: 'rect'
                    }
                }
            }
        }
    });
}

// Add spinning animation for refresh icon
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
