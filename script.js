// Mock дані про компанії
const companiesData = [
    {
        id: 1,
        name: "TechCorp Ukraine",
        category: "it",
        rating: 4.8,
        description: "Провідна IT компанія, що розробляє хмарні рішення для бізнесу.",
        phone: "+380 (44) 123-45-67",
        website: "www.techcorp.ua",
        address: "Київ, вул. Крещатик, 1",
        employees: 250,
        funding: "$5.2M",
        founded: 2015,
        icon: "T"
    },
    {
        id: 2,
        name: "EcoTrade",
        category: "trade",
        rating: 4.6,
        description: "Екологічна торгівельна платформа для сталого розвитку.",
        phone: "+380 (44) 234-56-78",
        website: "www.ecotrade.ua",
        address: "Львів, вул. Дорошенка, 45",
        employees: 120,
        funding: "$3.8M",
        founded: 2018,
        icon: "E"
    },
    {
        id: 3,
        name: "FinanceHub",
        category: "finance",
        rating: 4.9,
        description: "Інноваційна фінансова платформа для приватних інвесторів.",
        phone: "+380 (44) 345-67-89",
        website: "www.financehub.ua",
        address: "Київ, вул. Гордієнка, 50",
        employees: 180,
        funding: "$7.5M",
        founded: 2016,
        icon: "F"
    },
    {
        id: 4,
        name: "EduStart",
        category: "education",
        rating: 4.7,
        description: "Онлайн платформа для навчання підприємництву.",
        phone: "+380 (44) 456-78-90",
        website: "www.edustart.ua",
        address: "Харків, вул. Сумська, 67",
        employees: 95,
        funding: "$2.5M",
        founded: 2019,
        icon: "U"
    },
    {
        id: 5,
        name: "DevStudio",
        category: "it",
        rating: 4.5,
        description: "Студія розробки мобільних та веб-додатків.",
        phone: "+380 (44) 567-89-01",
        website: "www.devstudio.ua",
        address: "Одеса, вул. Преображенська, 34",
        employees: 75,
        funding: "$1.8M",
        founded: 2017,
        icon: "D"
    }
];

// Mock дані про новини
const newsData = [
    {
        id: 1,
        category: "finance",
        date: "30 квітня",
        title: "Українські стартапи залучили $125.5M за перший квартал 2026",
        summary: "За першій кварталі 2026 року українські стартапи встановили новий рекорд, залучивши більше 125 мільйонів доларів США від глобальних та локальних інвесторів.",
        content: "Це на 12.5% більше, ніж у попередньому кварталі. Лідерами за кількістю залучених коштів стали компанії в сфері IT та FinTech."
    },
    {
        id: 2,
        category: "startup",
        date: "29 квітня",
        title: "Новий закон про захист інвестицій вступив в силу",
        summary: "Український уряд прийняв новий законодавче регулювання для захисту прав іноземних інвесторів.",
        content: "Цей закон передбачає прозорі умови для ведення бізнесу та захист інвестиційного капіталу від незаконного конфіскування."
    },
    {
        id: 3,
        category: "tech",
        date: "28 квітня",
        title: "Українські FinTech компанії розширяють присутність на європейському ринку",
        summary: "Понад 30 українських фінтек-стартапів отримали ліцензії для роботи в країнах Європейського союзу.",
        content: "Це відкриває нові можливості для розширення та залучення європейського капіталу до українських технологічних проектів."
    },
    {
        id: 4,
        category: "finance",
        date: "27 квітня",
        title: "Індекс запуску нових компаній досяг історичного максимуму",
        summary: "За останній місяць було зареєстровано 450 нових компаній, що є найвищим показником за останні 5 років.",
        content: "Експерти пов'язують це з поліпшенням нормативно-правової бази та розвитком екосистеми для підприємців."
    }
];

// Mock дані про поради
const tipsData = [
    {
        id: 1,
        title: "Як розпочати свій стартап",
        category: "Стартапи",
        difficulty: "beginner",
        summary: "Покроковий путівник для тих, хто хоче запустити свою першу компанію.",
        content: "Першим кроком є визначення вашої ідеї та проведення дослідження ринку. Потім розробіть бізнес-план, зберіть команду та почніть пошук інвестування.",
        steps: [
            "Визначте вашу бізнес-ідею",
            "Проведіть дослідження ринку",
            "Розробіть бізнес-план",
            "Реєстрація компанії",
            "Пошук перших інвестицій"
        ]
    },
    {
        id: 2,
        title: "Стратегії залучення інвестицій",
        category: "Інвестиції",
        difficulty: "intermediate",
        summary: "Як успішно залучити капітал від венчурних фондів та приватних інвесторів.",
        content: "Існує декілька стратегій залучення інвестицій: pitch-презентація, networking з інвесторами, коммерціальні ангели.",
        steps: [
            "Підготуйте pitch-колоду",
            "Знайдіть потенційних інвесторів",
            "Проведіть переговори",
            "Узгодьте умови",
            "Підпишіть угоду про інвестування"
        ]
    },
    {
        id: 3,
        title: "Advanced Financial Planning для компаній",
        category: "Фінанси",
        difficulty: "advanced",
        summary: "Глибокий аналіз фінансового планування та оптимізації для розвинених компаній.",
        content: "Включає аналіз грошових потоків, стратегічне планування видатків та оптимізацію податків для максимізації прибутку.",
        steps: [
            "Аналіз поточного фінансового стану",
            "Прогнозування грошових потоків",
            "Оптимізація видатків",
            "Планування розвитку",
            "Аналіз ROI"
        ]
    },
    {
        id: 4,
        title: "Як побудувати команду для стартапу",
        category: "Команда",
        difficulty: "beginner",
        summary: "Рекомендації щодо найму та організації роботи первої команди.",
        content: "Почніть з пошуку спеціалістів, які розділяють вашу візію. Важливо знайти людей з доповнюючими навичками.",
        steps: [
            "Визначте потрібні позиції",
            "Пошук талантів",
            "Проведення інтерв'ю",
            "Пропозиція умов",
            "Онбординг команди"
        ]
    }
];

// Mock дані про аналітику
const analyticsData = {
    investments: [
        { title: "Інвестиції в стартапи", value: "$125.5M", change: "+12.5%", positive: true },
        { title: "Ангельські інвестиції", value: "$45.3M", change: "+8.2%", positive: true },
        { title: "Венчурне фінансування", value: "$80.2M", change: "+15.8%", positive: true }
    ],
    currency: [
        { name: "USD/UAH", rate: "41.25", change: "-0.15%", positive: false },
        { name: "EUR/UAH", rate: "45.80", change: "+0.42%", positive: true },
        { name: "GBP/UAH", rate: "52.15", change: "+0.28%", positive: true },
        { name: "CHF/UAH", rate: "48.60", change: "+0.18%", positive: true }
    ],
    indices: [
        { name: "Індекс технологій", percentage: 75, status: "↑ Зростає" },
        { name: "Індекс стартапів", percentage: 68, status: "↑ Стабільно" },
        { name: "Індекс FinTech", percentage: 82, status: "↑ Зростає" }
    ],
    trends: [
        { name: "Digital Transformation", percentage: 88, status: "📈 Популярно" },
        { name: "Sustainable Business", percentage: 72, status: "📈 Популярно" },
        { name: "Remote Work", percentage: 65, status: "📉 Зменшується" }
    ]
};

// DOM елементи
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const modalBody = document.getElementById('modalBody');

// Подія закриття модалу
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

// Таб навігація
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Видалити активний клас з усіх кнопок та вкладок
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Додати активний клас до поточної кнопки та вкладки
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Функція для відображення компаній
function displayCompanies(filter = 'all') {
    const companiesList = document.getElementById('companiesList');
    companiesList.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? companiesData 
        : companiesData.filter(c => c.category === filter);
    
    filtered.forEach(company => {
        const card = document.createElement('div');
        card.className = 'company-card';
        card.innerHTML = `
            <div class="company-icon">${company.icon}</div>
            <div class="company-info">
                <div class="company-name">${company.name}</div>
                <div class="company-category">${getCategoryLabel(company.category)}</div>
                <div class="company-rating"><span class="star">⭐</span> ${company.rating}</div>
            </div>
            <div class="company-arrow">›</div>
        `;
        
        card.addEventListener('click', () => showCompanyDetail(company));
        companiesList.appendChild(card);
    });
}

// Функція для відображення новин
function displayNews(filter = 'all') {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? newsData 
        : newsData.filter(n => n.category === filter);
    
    filtered.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <div class="news-badge">${getCategoryLabel(news.category)}</div>
            <div class="news-date">${news.date}</div>
            <div class="news-title">${news.title}</div>
            <div class="news-summary">${news.summary}</div>
        `;
        
        card.addEventListener('click', () => showNewsDetail(news));
        newsList.appendChild(card);
    });
}

// Функція для відображення порад
function displayTips(filter = 'all') {
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? tipsData 
        : tipsData.filter(t => t.difficulty === filter);
    
    filtered.forEach(tip => {
        const card = document.createElement('div');
        card.className = 'tip-card';
        
        const difficultyLabel = getDifficultyLabel(tip.difficulty);
        const difficultyClass = tip.difficulty;
        
        card.innerHTML = `
            <div class="tip-badges">
                <span class="tip-badge category">${tip.category}</span>
                <span class="tip-badge ${difficultyClass}">${difficultyLabel}</span>
            </div>
            <div class="tip-title">${tip.title}</div>
            <div class="tip-summary">${tip.summary}</div>
        `;
        
        card.addEventListener('click', () => showTipDetail(tip));
        tipsList.appendChild(card);
    });
}

// Функція для відображення аналітики
function displayAnalytics(metric = 'investments') {
    const analyticsContent = document.getElementById('analyticsContent');
    analyticsContent.innerHTML = '';
    
    if (metric === 'investments') {
        analyticsData.investments.forEach(inv => {
            const card = document.createElement('div');
            card.className = 'metric-card';
            card.innerHTML = `
                <div class="metric-title">${inv.title}</div>
                <div class="metric-value">${inv.value}</div>
                <div class="metric-change ${inv.positive ? 'positive' : 'negative'}">
                    <span class="arrow">${inv.positive ? '↑' : '↓'}</span>
                    ${inv.change}
                </div>
            `;
            analyticsContent.appendChild(card);
        });
    } else if (metric === 'currency') {
        analyticsData.currency.forEach(curr => {
            const card = document.createElement('div');
            card.className = 'currency-row';
            card.innerHTML = `
                <div>
                    <div class="currency-name">${curr.name}</div>
                    <div class="currency-rate">${curr.rate}</div>
                </div>
                <div class="currency-change ${curr.positive ? 'positive' : 'negative'}">
                    <span>${curr.positive ? '↑' : '↓'}</span>
                    ${curr.change}
                </div>
            `;
            analyticsContent.appendChild(card);
        });
    } else if (metric === 'indices') {
        analyticsData.indices.forEach(idx => {
            const card = document.createElement('div');
            card.className = 'trend-card';
            card.innerHTML = `
                <div class="trend-header">
                    <span class="trend-name">${idx.name}</span>
                    <span class="trend-status">${idx.status}</span>
                </div>
                <div class="trend-bar">
                    <div class="trend-fill" style="width: ${idx.percentage}%"></div>
                </div>
                <div class="trend-percentage">${idx.percentage}%</div>
            `;
            analyticsContent.appendChild(card);
        });
    } else if (metric === 'trends') {
        analyticsData.trends.forEach(trend => {
            const card = document.createElement('div');
            card.className = 'trend-card';
            card.innerHTML = `
                <div class="trend-header">
                    <span class="trend-name">${trend.name}</span>
                    <span class="trend-status">${trend.status}</span>
                </div>
                <div class="trend-bar">
                    <div class="trend-fill" style="width: ${trend.percentage}%"></div>
                </div>
                <div class="trend-percentage">${trend.percentage}%</div>
            `;
            analyticsContent.appendChild(card);
        });
    }
}

// Детальний вид компанії
function showCompanyDetail(company) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <div style="font-size: 48px; margin-bottom: 15px;">${company.icon}</div>
            <h2 class="modal-title">${company.name}</h2>
            <div class="modal-meta">
                <span>${getCategoryLabel(company.category)}</span>
                <span>⭐ ${company.rating}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Про компанію</div>
            <div class="modal-section-content">${company.description}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Контакти</div>
            <div class="modal-info-row">
                <span class="modal-info-icon">📞</span>
                <span>${company.phone}</span>
            </div>
            <div class="modal-info-row">
                <span class="modal-info-icon">🌐</span>
                <span>${company.website}</span>
            </div>
            <div class="modal-info-row">
                <span class="modal-info-icon">📍</span>
                <span>${company.address}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Статистика</div>
            <div class="modal-stats">
                <div class="modal-stat">
                    <div class="modal-stat-value">${company.employees}</div>
                    <div class="modal-stat-label">Працівників</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-value">${company.funding}</div>
                    <div class="modal-stat-label">Фінансування</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-value">${company.founded}</div>
                    <div class="modal-stat-label">Рік заснування</div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('show');
}

// Детальний вид новини
function showNewsDetail(news) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-badge">${getCategoryLabel(news.category)}</span>
            <h2 class="modal-title">${news.title}</h2>
            <div class="modal-meta">
                <span>${news.date}</span>
            </div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-content">${news.summary}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Детальніше</div>
            <div class="modal-section-content">${news.content}</div>
        </div>
    `;
    modal.classList.add('show');
}

// Детальний вид поради
function showTipDetail(tip) {
    const difficultyLabel = getDifficultyLabel(tip.difficulty);
    const stepsHTML = tip.steps.map((step, idx) => `
        <div class="modal-step">
            <div class="modal-step-number">${idx + 1}</div>
            <div class="modal-step-text">${step}</div>
        </div>
    `).join('');
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-badge category">${tip.category}</span>
            <span class="modal-badge ${tip.difficulty}">${difficultyLabel}</span>
            <h2 class="modal-title">${tip.title}</h2>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-content">${tip.summary}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Детальніше</div>
            <div class="modal-section-content">${tip.content}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">Кроки реалізації</div>
            <ul class="modal-steps">
                ${stepsHTML}
            </ul>
        </div>
    `;
    modal.classList.add('show');
}

// Допоміжні функції для міток категорій
function getCategoryLabel(category) {
    const labels = {
        'it': 'IT',
        'trade': 'Торгівля',
        'finance': 'Фінанси',
        'education': 'Освіта',
        'startup': 'Стартапи',
        'tech': 'Технологія'
    };
    return labels[category] || category;
}

function getDifficultyLabel(difficulty) {
    const labels = {
        'beginner': 'Початківець',
        'intermediate': 'Середній',
        'advanced': 'Продвинутий'
    };
    return labels[difficulty] || difficulty;
}

// Фільтрація компаній
document.addEventListener('DOMContentLoaded', () => {
    // Вкладка Компанії
    const companyFilterBtns = document.querySelectorAll('#companies .filter-btn');
    companyFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            companyFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayCompanies(btn.getAttribute('data-filter'));
        });
    });
    
    // Пошук компаній
    const companySearch = document.getElementById('companySearch');
    companySearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = companiesData.filter(c => 
            c.name.toLowerCase().includes(query) ||
            c.description.toLowerCase().includes(query)
        );
        
        const companiesList = document.getElementById('companiesList');
        companiesList.innerHTML = '';
        
        filtered.forEach(company => {
            const card = document.createElement('div');
            card.className = 'company-card';
            card.innerHTML = `
                <div class="company-icon">${company.icon}</div>
                <div class="company-info">
                    <div class="company-name">${company.name}</div>
                    <div class="company-category">${getCategoryLabel(company.category)}</div>
                    <div class="company-rating"><span class="star">⭐</span> ${company.rating}</div>
                </div>
                <div class="company-arrow">›</div>
            `;
            
            card.addEventListener('click', () => showCompanyDetail(company));
            companiesList.appendChild(card);
        });
    });
    
    // Вкладка Новини
    const newsFilterBtns = document.querySelectorAll('#news .filter-btn');
    newsFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            newsFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayNews(btn.getAttribute('data-filter'));
        });
    });
    
    // Вкладка Поради
    const tipsFilterBtns = document.querySelectorAll('#tips .filter-btn');
    tipsFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tipsFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayTips(btn.getAttribute('data-filter'));
        });
    });
    
    // Вкладка Аналітика
    const analyticsFilterBtns = document.querySelectorAll('#analytics .analytics-btn');
    analyticsFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            analyticsFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayAnalytics(btn.getAttribute('data-metric'));
        });
    });
    
    // Ініціалізація вкладок
    displayCompanies();
    displayNews();
    displayTips();
    displayAnalytics();
});
