// ========== بيانات البدلات مع الألوان حسب البدلة ==========
// استبدل هذه الصور بصورك الحقيقية في مجلد images
const suitsData = [
    {
        id: 1,
        name: 'بدلة كلاسيك سوداء',
        description: 'بدلة رسمية فاخرة من قماش إيطالي 100%',
        category: 'classic',
        colors: ['أسود', 'رمادي غامق', 'فحمي', 'ليلي', 'جرافيت'],
        colorCodes: ['#000000', '#3a3a3a', '#1a1a1a', '#0a0a2a', '#4a4a4a'],
        image: '1776536963134.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+كلاسيك+سوداء'
    },
    {
        id: 2,
        name: 'بدلة بيج عاجي',
        description: 'لون أنيق مناسب للمناسبات الرسمية وحفلات الزفاف',
        category: 'formal',
        colors: ['أزرق كحلي', 'أزرق داكن', 'أزرق نيلي', 'أزرق ملكي', 'أزرق بحري', 'أزرق سماء'],
        colorCodes: ['#1a2a4f', '#0f1a3a', '#2a2a6a', '#2a4f8a', '#0a2a4a', '#4a6a9a'],
        image: '1776536962990.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+زرقاء+كحلية'
    },
    {
        id: 3,
        name: 'بدلة أخضر زيتوني',
        description: 'تصميم عصري بقصة عصرية مثالية للعمل',
        category: 'modern',
        colors: ['رمادي فاتح', 'رمادي متوسط', 'رمادي غامق', 'رمادي فضي', 'رمادي دخاني', 'رمادي بيرل'],
        colorCodes: ['#b0b0b0', '#808080', '#606060', '#c0c0c0', '#a0a0a0', '#d0d0d0'],
        image: '1776536962896.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+رمادي+فاتح'
    },
    {
        id: 4,
        name: 'بدلة أحمر عنابي داكن',
        description: 'لون مميز لحفلات الصيف والمناسبات النهارية',
        category: 'summer',
        colors: ['بيج', 'كريمي', 'ذهبي', 'عاجي', 'شامباني', 'كابتشينو', 'موكا', 'بني فاتح'],
        colorCodes: ['#d4c4a8', '#f5e6d3', '#d4af37', '#fffff0', '#f7e7ce', '#c4a882', '#a0825a', '#c4b49a'],
        image: '1776536962738.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+بيج+فاخرة'
    },
    {
        id: 5,
        name: 'بدلة سوداء مع السلهام',
        description: 'كلاسيكية عصرية تناسب جميع الأوقات',
        category: 'classic',
        colors: ['بني غامق', 'بني شوكولاتة', 'بني محروق', 'بني قهوة', 'بني خشب', 'بني ماهوجني'],
        colorCodes: ['#3e2723', '#4e342e', '#5d3a1a', '#3b2f2f', '#6d4c41', '#8b5a2b'],
        image: '1776536963235.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+بني+غامق'
    },
    {
        id: 6,
        name: 'بدلة بيج عاجي مع السلهام',
        description: 'مثالية لحفلات الزفاف والمناسبات الصيفية',
        category: 'summer',
        colors: ['أبيض', 'عاجي', 'فضي', 'لؤلؤي', 'ثلجي', 'كريستالي', 'عظمي'],
        colorCodes: ['#ffffff', '#f5f5dc', '#c0c0c0', '#e8e8e8', '#f0f0f0', '#fafafa', '#f5f5f5'],
        image: '1776536963082.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+بيضاء+صيفية'
    },
    {
        id: 7,
        name: 'بدلة خضراء زيتونية مع السلهام',
        description: 'لون جريء وعصري للمتميزين',
        category: 'modern',
        colors: ['أخضر زيتوني', 'أخضر غامق', 'أخضر عسكري', 'أخضر غابي', 'أخضر زمردي', 'أخضر نعناعي', 'أخضر ليموني'],
        colorCodes: ['#556b2f', '#2e4a1a', '#4a5d23', '#1a3a1a', '#50c878', '#98fb98', '#32cd32'],
        image: '1776536962843.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+خضراء'
    },
    {
        id: 8,
        name: 'بدلة حمراء عنابي داكن مع السلهام',
        description: 'تصميم كلاسيكي بلمسة عصرية',
        category: 'formal',
        colors: ['رمادي', 'فضي', 'أسود', 'أبيض', 'رمادي رصاصي', 'رمادي أنثراسيت'],
        colorCodes: ['#808080', '#c0c0c0', '#1a1a1a', '#ffffff', '#708090', '#4a4a4a'],
        image: '1776536962723.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+رمادية+خطوط'
    },
    {
        id: 9,
        name: 'بدلة زرقاء داكن',
        description: 'لون ملكي للمناسبات الخاصة والأعراس',
        category: 'formal',
        colors: ['عنابي', 'بورجوندي', 'أحمر نبيذي', 'أحمر كرزي', 'أحمر غامق', 'وردي محروق'],
        colorCodes: ['#800020', '#900020', '#722f37', '#a02020', '#8b0000', '#b03060'],
        image: 'Pic1201.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+عنابي'
    },
    {
        id: 10,
        name: 'بدلة زرقاء فاخرة',
        description: 'لون منعش لفصل الربيع والصباحيات',
        category: 'summer',
        colors: ['أزرق سماوي', 'أزرق فاتح', 'أزرق بابي', 'أزرق فيروزي', 'أزرق جليدي', 'أزرق باستيل'],
        colorCodes: ['#87ceeb', '#add8e6', '#89cff0', '#40e0d0', '#e0f0ff', '#b0e0e6'],
        image: 'Pic1202.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+زرقاء+سماوية'
    },
    {
        id: 11,
        name: 'بدلة سوداء',
        description: 'جريئة ومثالية للمناسبات المسائية',
        category: 'modern',
        colors: ['أحمر', 'أحمر زاهي', 'أحمر طماطمي', 'أحمر كاردينال', 'أحمر أحمر', 'وردي أحمر'],
        colorCodes: ['#ff0000', '#dc143c', '#ff4500', '#c41e3a', '#b22222', '#ff6666'],
        image: 'Pic1203.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+حمراء+زاهية'
    },
    {
        id: 12,
        name: 'بدلة زرقاء فاتح',
        description: 'لون الفخامة والترف للمناسبات الخاصة',
        category: 'formal',
        colors: ['أرجواني', 'بنفسجي', 'لافندر', 'موف', 'نيلي', 'بنفسجي غامق', 'بنفسجي فاتح'],
        colorCodes: ['#800080', '#8b00ff', '#e6e6fa', '#d8bfd8', '#4b0082', '#4a0e4e', '#c8a2c8'],
        image: 'Pic1204.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+أرجوانية'
    },
    {
        id: 13,
        name: 'بدلة بني دخاني',
        description: 'لون مشرق ومبهج للمناسبات النهارية',
        category: 'summer',
        colors: ['أصفر', 'أصفر فاتح', 'أصفر ذهبي', 'خردلي', 'ليموني', 'شمامي', 'كهرماني'],
        colorCodes: ['#ffff00', '#fffacd', '#ffd700', '#e1ad01', '#fff44f', '#ffcc66', '#ffbf00'],
        image: 'Pic1205.png',
        placeholder: 'https://placehold.co/600x800/1a1a1a/d4af37?text=بدلة+صفراء'
    }
];

// ========== عرض الصور في المعرض ==========
let currentImages = [...suitsData];
let currentLightboxIndex = 0;

function renderGallery(images) {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    images.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-id', item.id);
        
        // تحديد مصدر الصورة
        const imgSrc = item.image && item.image !== 'images/suit?.jpg' 
            ? item.image 
            : item.placeholder;
        
        // إنشاء دوائر الألوان (عرض أول 4 ألوان فقط)
        let colorsHtml = '';
        if (item.colors && item.colors.length > 0) {
            const displayColors = item.colors.slice(0, 4);
            const remainingCount = item.colors.length - 4;
            
            colorsHtml = `
                <div class="color-section">
                    <div class="color-label">🎨 الألوان المتاحة (${item.colors.length} لون):</div>
                    <div class="color-dots">
                        ${displayColors.map((color, idx) => `
                            <div class="color-tooltip">
                                <div class="color-dot" style="background-color: ${item.colorCodes[idx] || '#d4af37'}" 
                                     data-color-name="${color}"></div>
                                <span class="tooltip-text">${color}</span>
                            </div>
                        `).join('')}
                        ${remainingCount > 0 ? `
                            <div class="more-colors">
                                +${remainingCount}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        
        galleryItem.innerHTML = `
            <img src="${imgSrc}" alt="${item.name}" loading="lazy" 
                 onerror="this.src='${item.placeholder}'">
            <div class="gallery-info">
                <span class="gallery-category">${getCategoryName(item.category)}</span>
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                ${colorsHtml}
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
    
    // إضافة تأثير تفاعلي لدوائر الألوان
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            const colorName = dot.getAttribute('data-color-name');
            if (colorName) {
                showColorAlert(colorName);
            }
        });
    });
}

function showColorAlert(colorName) {
    // إنشاء رسالة منبثقة مؤقتة
    const toast = document.createElement('div');
    toast.className = 'color-toast';
    toast.innerHTML = `
        <i class="fas fa-palette"></i>
        <span>✨ لون ${colorName} متوفر ✨</span>
    `;
    document.body.appendChild(toast);
    
    // إظهار الرسالة
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // إخفاء الرسالة بعد 2 ثانية
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}

function getCategoryName(category) {
    const categories = {
        'classic': 'كلاسيك',
        'formal': 'رسمي',
        'modern': 'عصري',
        'summer': 'صيفي'
    };
    return categories[category] || category;
}

// ========== نظام التصفية ==========
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            if (filter === 'all') {
                currentImages = [...suitsData];
            } else {
                currentImages = suitsData.filter(item => item.category === filter);
            }
            
            renderGallery(currentImages);
        });
    });
}

// ========== نافذة عرض الصورة (Lightbox) مع جميع الألوان ==========
function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    const item = currentImages[index];
    const imgSrc = item.image && item.image !== 'images/suit?.jpg' 
        ? item.image 
        : item.placeholder;
    
    lightboxImg.src = imgSrc;
    
    // عرض جميع الألوان في الـ Lightbox
    let colorsHtml = '';
    if (item.colors && item.colors.length > 0) {
        colorsHtml = `
            <div class="lightbox-colors">
                <div class="lightbox-colors-label">🎨 جميع الألوان المتاحة (${item.colors.length} لون):</div>
                <div class="lightbox-colors-list">
                    ${item.colors.map((color, idx) => `
                        <div class="lightbox-color-item" data-color="${color}">
                            <div class="lightbox-color-dot" style="background-color: ${item.colorCodes[idx] || '#d4af37'}"></div>
                            <span>${color}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    caption.innerHTML = `
        <div class="lightbox-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${colorsHtml}
        </div>
    `;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // إضافة تأثير عند النقر على الألوان في الـ Lightbox
    setTimeout(() => {
        document.querySelectorAll('.lightbox-color-item').forEach(colorItem => {
            colorItem.addEventListener('click', (e) => {
                e.stopPropagation();
                const colorSpan = colorItem.querySelector('span');
                if (colorSpan) {
                    showColorAlert(colorSpan.textContent);
                }
            });
        });
    }, 100);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeSlide(direction) {
    currentLightboxIndex += direction;
    
    if (currentLightboxIndex >= currentImages.length) {
        currentLightboxIndex = 0;
    }
    if (currentLightboxIndex < 0) {
        currentLightboxIndex = currentImages.length - 1;
    }
    
    const item = currentImages[currentLightboxIndex];
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const imgSrc = item.image && item.image !== 'images/suit?.jpg' 
        ? item.image 
        : item.placeholder;
    
    lightboxImg.src = imgSrc;
    
    let colorsHtml = '';
    if (item.colors && item.colors.length > 0) {
        colorsHtml = `
            <div class="lightbox-colors">
                <div class="lightbox-colors-label">🎨 جميع الألوان المتاحة (${item.colors.length} لون):</div>
                <div class="lightbox-colors-list">
                    ${item.colors.map((color, idx) => `
                        <div class="lightbox-color-item" data-color="${color}">
                            <div class="lightbox-color-dot" style="background-color: ${item.colorCodes[idx] || '#d4af37'}"></div>
                            <span>${color}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    caption.innerHTML = `
        <div class="lightbox-info">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${colorsHtml}
        </div>
    `;
    
    // إعادة إضافة تأثير النقر على الألوان
    setTimeout(() => {
        document.querySelectorAll('.lightbox-color-item').forEach(colorItem => {
            colorItem.addEventListener('click', (e) => {
                e.stopPropagation();
                const colorSpan = colorItem.querySelector('span');
                if (colorSpan) {
                    showColorAlert(colorSpan.textContent);
                }
            });
        });
    }, 100);
}

// ========== قائمة التنقل للأجهزة المحمولة ==========
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ========== تمرير سلس ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    const navLinks = document.querySelector('.nav-links');
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                }
            }
        });
    });
}

// ========== مؤشر التمرير ==========
function setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const gallery = document.querySelector('#gallery');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ========== تحميل الصور بكسل ==========
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ========== إضافة مؤشر للألوان الإضافية ==========
function addMoreColorsStyle() {
    const style = document.createElement('style');
    style.textContent = `
        .more-colors {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: var(--gold);
            color: var(--black);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }
        .more-colors:hover {
            transform: scale(1.1);
            background: var(--gold-light);
        }
    `;
    document.head.appendChild(style);
}

// ========== تهيئة الموقع ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('موقع Location Costume Haydi يعمل بنجاح ✓');
    console.log(`تم تحميل ${suitsData.length} بدلة مع ألوان متعددة ✓`);
    
    renderGallery(currentImages);
    setupFilters();
    setupMobileMenu();
    setupSmoothScroll();
    setupScrollIndicator();
    lazyLoadImages();
    addMoreColorsStyle();
    
    // إضافة مستمعين لأحداث Lightbox
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.close-lightbox');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => changeSlide(-1));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => changeSlide(1));
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // إغلاق Lightbox بالضغط على ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.style.display === 'block') {
            closeLightbox();
        }
        if (e.key === 'ArrowLeft' && lightbox && lightbox.style.display === 'block') {
            changeSlide(-1);
        }
        if (e.key === 'ArrowRight' && lightbox && lightbox.style.display === 'block') {
            changeSlide(1);
        }
    });
});
