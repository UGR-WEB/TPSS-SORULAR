let currentQuestionIndex = 0;
const questionsContainer = document.getElementById('pages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');

// Animasyon durumunu kontrol etmek için
let isAnimating = false;

// Soruları yükle
function loadQuestions() {
    // Her soru için bir sayfa oluştur
    bookData.questions.forEach((question, index) => {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        pageDiv.innerHTML = question.content;
        questionsContainer.appendChild(pageDiv);

        // Açıklama butonunu ekle
        const questionDiv = pageDiv.querySelector('.question');
        const explanation = questionDiv.querySelector('.explanation');
        
        if (explanation) {
            explanation.style.display = 'none';
            const button = document.createElement('button');
            button.className = 'show-explanation';
            button.innerHTML = '<i class="fas fa-chevron-down"></i> Açıklamayı Göster';
            button.onclick = () => toggleExplanation(index);
            
            // Butonu açıklama div'inden önce ekle
            explanation.parentNode.insertBefore(button, explanation);
        }
    });

    // İlk soruyu göster
    const firstPage = document.querySelector('.page');
    if (firstPage) {
        firstPage.classList.add('active');
    }
    updatePageInfo();
}

// Açıklama göster/gizle
function toggleExplanation(index) {
    const page = document.querySelectorAll('.page')[index];
    const explanation = page.querySelector('.explanation');
    const button = page.querySelector('.show-explanation');
    
    if (explanation) {
        if (explanation.style.display === 'none') {
            explanation.style.display = 'block';
            button.innerHTML = '<i class="fas fa-chevron-up"></i> Açıklamayı Gizle';
        } else {
            explanation.style.display = 'none';
            button.innerHTML = '<i class="fas fa-chevron-down"></i> Açıklamayı Göster';
        }
    }
}

// Soru değiştirme
async function goToQuestion(questionNum) {
    if (isAnimating || questionNum === currentQuestionIndex) return;
    isAnimating = true;

    const direction = questionNum > currentQuestionIndex ? 'left' : 'right';
    const pages = document.querySelectorAll('.page');
    
    const currentPage = pages[currentQuestionIndex];
    const newPage = pages[questionNum];

    // Yeni sayfayı hazırla
    newPage.style.display = 'block';
    newPage.style.transform = `translateX(${direction === 'left' ? '100%' : '-100%'}) scale(0.95)`;
    newPage.style.opacity = '0';

    // Geçiş efektini uygula
    await new Promise(resolve => {
        requestAnimationFrame(() => {
            currentPage.style.transform = `translateX(${direction === 'left' ? '-100%' : '100%'}) scale(0.95)`;
            currentPage.style.opacity = '0';
            newPage.style.transform = 'translateX(0) scale(1)';
            newPage.style.opacity = '1';
            
            setTimeout(resolve, 500);
        });
    });

    // Temizlik
    currentPage.classList.remove('active');
    currentPage.style.display = 'none';
    currentPage.style.transform = '';
    currentPage.style.opacity = '';

    newPage.classList.add('active');
    newPage.style.transform = '';
    newPage.style.opacity = '';

    currentQuestionIndex = questionNum;
    updatePageInfo();
    isAnimating = false;
}

// Sayfa bilgilerini güncelle
function updatePageInfo() {
    pageInfo.textContent = `Soru ${currentQuestionIndex + 1} / ${bookData.questions.length}`;
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === bookData.questions.length - 1;
}

// Önceki soru
prevBtn.onclick = () => {
    if (!prevBtn.disabled && !isAnimating) {
        goToQuestion(currentQuestionIndex - 1);
    }
};

// Sonraki soru
nextBtn.onclick = () => {
    if (!nextBtn.disabled && !isAnimating) {
        goToQuestion(currentQuestionIndex + 1);
    }
};

// Klavye navigasyonu
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && !prevBtn.disabled && !isAnimating) {
        goToQuestion(currentQuestionIndex - 1);
    } else if (e.key === 'ArrowRight' && !nextBtn.disabled && !isAnimating) {
        goToQuestion(currentQuestionIndex + 1);
    }
});

// Soruları yükle
loadQuestions(); 