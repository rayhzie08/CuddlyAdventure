/* script.js - untuk halaman diary individual */
(function() {
    // Data semua diary (untuk navigasi)
    const diaryData = [
        { id: 1, emoji: '🌸', title: 'Hari Pertama', date: '16 November 2022' },
        { id: 2, emoji: '🍕', title: 'Pizza & Nostalgia', date: '4 December 2022' },
        { id: 3, emoji: '☁️', title: 'Langit & Imajinasi', date: '12 December 2022' },
        { id: 4, emoji: '🧁', title: 'Cupcake di Hari Hujan', date: '17 December 2022' },
        { id: 5, emoji: '🌈', title: 'Pelangi Setelah Hujan', date: '17 December 2022' },
        { id: 6, emoji: '🦄', title: 'Mimpi Aneh di Bulan', date: '18 December 2022' },
        { id: 7, emoji: '🍂', title: 'Ruang Kosong', date: '22 December 2022' },
        { id: 8, emoji: '🧭', title: 'Tentang Diriku', date: '22 December 2022' },
        { id: 9, emoji: '🗺️', title: 'Catatan Kecil Tentang Zie', date: '22 December 2022' },
        { id: 10, emoji: '🔍', title: 'Seseorang yang Menjaga', date: 'X X X' },
        { id: 11, emoji: '📉', title: 'Hari yang Melelahkan', date: 'X X X' },
        { id: 12, emoji: '❤️‍🩹', title: 'Perjalanan di Atas Awan', date: '30 December 2022' },
        { id: 13, emoji: '🏝️', title: 'Untuk Seseorang yang Berwarna Biru', date: '31 December 2022' },
        { id: 14, emoji: '💫', title: 'Campur Aduk di Awal Tahun', date: '2 January 2023' },
        { id: 15, emoji: '😶‍🌫', title: 'Hari yang Aneh', date: '9 January 2023' },
        { id: 16, emoji: '🤯', title: 'Rasa Hampa', date: '12 January 2023' },
        { id: 17, emoji: '🚧', title: 'Mimpi di Hutan', date: 'X X X' },
        { id: 18, emoji: '⚖️', title: 'Tentang Waktu', date: 'X X X' },
        { id: 19, emoji: '🐲', title: 'Hassan si Naga', date: 'X X X' },
        { id: 20, emoji: '😋', title: 'Yami yang Nyebelin', date: '24 Maret 2026' },
        { id: 21, emoji: '🥵', title: 'Dia yang Berharga', date: '15 Aprile 2026' },
        { id: 22, emoji: '😞', title: 'Olahraga yang Bikin Kesal', date: '28 May 2026' },
        { id: 23, emoji: '❤️‍🔥', title: 'Sosok yang Sempurna', date: 'June 2026' },
        { id: 24, emoji: '💭', title: 'Seseorang yang Terasa Hangat', date: 'July 2026' },
        { id: 25, emoji: '🌙', title: 'Aku Lebih Kuat Dari Yang Kukira', date: 'July 2026' }
    ];

    // Ambil ID dari URL
    const currentId = parseInt(window.location.pathname.match(/diary(\d+)\.html/)?.[1]) || 1;
    const currentIndex = diaryData.findIndex(d => d.id === currentId);

    // Update navigasi
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn) {
        if (currentIndex === 0) {
            prevBtn.style.opacity = '0.4';
            prevBtn.style.pointerEvents = 'none';
        } else {
            prevBtn.href = `diary${diaryData[currentIndex - 1].id}.html`;
        }
    }

    if (nextBtn) {
        if (currentIndex === diaryData.length - 1) {
            nextBtn.style.opacity = '0.4';
            nextBtn.style.pointerEvents = 'none';
        } else {
            nextBtn.href = `diary${diaryData[currentIndex + 1].id}.html`;
        }
    }

    // Update indikator
    const indicator = document.getElementById('diaryIndicator');
    if (indicator) {
        indicator.textContent = `${currentIndex + 1} / ${diaryData.length}`;
    }
})();