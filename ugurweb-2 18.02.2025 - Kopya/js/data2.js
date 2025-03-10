const bookData2 = {
    questions: [
        {
            id: 261,
            title: "Soru 261",
            content: `
                <div class="question">
                    <h3>X-RAY Cihazında bant üzerine konulan bavul ve paketler arasındaki mesafe en az kaç cm olmalıdır?</h3>
                    <ul>
                        <li>A) 75 cm</li>
                        <li>B) 100 cm</li>
                        <li>C) 110 cm</li>
                        <li class="correct">D) 50 cm ✓</li>
                        <li>E) Fark etmez</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-RAY cihazında bagajlar arasında en az 50 cm mesafe bırakılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 262,
            title: "Soru 262",
            content: `
                <div class="question">
                    <h3>CCTV'nin açılımı aşağıdakilerden hangisidir?</h3>
                    <ul>
                        <li class="correct">A) Kapalı devre televizyon sistemi ✓</li>
                        <li>B) Kontrol sistemi</li>
                        <li>C) Açık devre televizyon sistemi</li>
                        <li>D) Canlı yayın yapma sistemi</li>
                        <li>E) Renkli televizyon sistemi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>CCTV (Closed Circuit Television), Kapalı Devre Televizyon Sistemi anlamına gelir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 263,
            title: "Soru 263",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi fiziki güvenlik tedbiridir?</h3>
                    <ul>
                        <li>A) El detektörü</li>
                        <li class="correct">B) Tel örgü ✓</li>
                        <li>C) X-Ray cihazı</li>
                        <li>D) Kelepçe</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Tel örgü, fiziki güvenlik tedbirlerinden biridir. Diğer seçenekler güvenlik ekipmanlarıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 264,
            title: "Soru 264",
            content: `
                <div class="question">
                    <h3>Kapı tipi metal detektörlerinin sağlıklı çalışabilmesi için personel detektörden kaç metre ara ile geçirilmelidir?</h3>
                    <ul>
                        <li>A) Kontrol edilecek kişiler mesafe bırakmaksızın geçebilirler</li>
                        <li>B) Kontrol edilecek kişiler 2 m. ara ile geçirilmelidir</li>
                        <li>C) Kontrol edilecek kişiler 50 cm. ara ile geçirilmelidir</li>
                        <li>D) Kontrol edilecek kişiler 3 m. ara ile geçirilmelidir</li>
                        <li class="correct">E) Kontrol edilecek kişiler 1 m. ara ile geçirilmelidir ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı tipi metal detektörlerinin sağlıklı çalışabilmesi için kişiler arasında 1 metre mesafe bırakılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 265,
            title: "Soru 265",
            content: `
                <div class="question">
                    <h3>Görevli personelin x-ray cihazlarında çalışırken dikkat etmesi gereken hususlar aşağıdakilerden hangisi doğru değildir?</h3>
                    <ul>
                        <li class="correct">A) Cihazın normal çalışıp çalışmadığını ve içinden bir şey olup olmadığını kontrol için elle ve gözle kontrol ve testi yapılmalıdır ✓</li>
                        <li>B) Kontrole tabi tutulacak eşyaları cihaza geniş yüzeylerinin taşıma bandına paralel olacak şekilde koyulmasını sağlamalıdır</li>
                        <li>C) Eşyalar, arasında en az 50 cm. mesafe olacak şekilde koyulmasını sağlamalıdır</li>
                        <li>D) Bagajların dikey bir şekilde cihaza gönderilmesi gerekir</li>
                        <li>E) Görüntüyü net olarak görülmez, yorumlamada zorluk çekilir ise bagajın pozisyonunu değiştirerek tekrar cihaza koyulmasını sağlamalıdır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazının elle ve gözle kontrol edilmesi yanlış ve tehlikelidir. Cihazın kontrolü özel prosedürlerle yapılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 266,
            title: "Soru 266",
            content: `
                <div class="question">
                    <h3>Kişilerin başkalarından ayırt edilmesine ve değişmeyen özelliklerinin (parmak izi, göz iris ve retina şekli gibi) kullanılarak giriş-çıkış yetkilendirilmesinin yapıldığı cihazlar aşağıdakilerden hangisidir?</h3>
                    <ul>
                        <li>A) Kartlı Cihazlar</li>
                        <li>B) Kapalı Devre Kimlik Belirleme</li>
                        <li>C) Görsel Kimlik Belirme</li>
                        <li class="correct">D) Biyometrik Cihazlar ✓</li>
                        <li>E) Detektörler</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Biyometrik cihazlar, kişilerin benzersiz fiziksel özelliklerini kullanarak kimlik doğrulaması yapan sistemlerdir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 267,
            title: "Soru 267",
            content: `
                <div class="question">
                    <h3>X-ray cihazları kullanımında kullanıcının radyasyona karşı güvenliğinin sağlanması, radyasyona maruz kaldığı miktarı ölçmek için kullanılan cihaz aşağıdakilerden hangisidir?</h3>
                    <ul>
                        <li>A) AVO metre</li>
                        <li class="correct">B) Dozimetre ✓</li>
                        <li>C) KTMD</li>
                        <li>D) ETMD</li>
                        <li>E) Barometre</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Dozimetre, X-ray cihazı operatörlerinin maruz kaldığı radyasyon miktarını ölçmek için kullanılan cihazdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 268,
            title: "Soru 268",
            content: `
                <div class="question">
                    <h3>X-RAY kontrol panelinde FWD tuşu fonksiyonu aşağıdakilerden hangisidir?</h3>
                    <ul>
                        <li>A) Görüntüyü büyütme (zoom) işi yapar</li>
                        <li>B) Koyu bölgelerin içini tespit eder</li>
                        <li class="correct">C) Konveyör bandının ileri hareketini ve cihaz menülerinin ayarlanmasında menüler arasında dolaşımı sağlar ✓</li>
                        <li>D) Cismin kendi çizgilerini tespit eder</li>
                        <li>E) Görüntüyü karartır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>FWD (Forward) tuşu, konveyör bandının ileri yönde hareketini ve menüler arası geçişi sağlar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 269,
            title: "Soru 269",
            content: `
                <div class="question">
                    <h3>İş yeri sahibi Aras, personelinin giriş/çıkış saatlerini kontrol etmek ve iş yerinin bazı özel bölümlerini sadece yetkilendirmiş olduğu personelin giriş yapmasını sağlamak için aşağıdaki güvenlik sistemlerinden hangisinden faydalanır?</h3>
                    <ul>
                        <li>A) X-Ray cihazı</li>
                        <li>B) Kapı Tipi Metal Arama Dedektörü</li>
                        <li class="correct">C) Kart kontrollü geçiş sistemi (CACS) ✓</li>
                        <li>D) Body Scanner</li>
                        <li>E) El Tipi Metal Dedektör</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kart kontrollü geçiş sistemi (CACS), personel giriş-çıkışlarını kontrol etmek ve yetkilendirme yapmak için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 270,
            title: "Soru 270",
            content: `
                <div class="question">
                    <h3>Esenboğa Havalimanında X-Ray operatörü olarak görev yapan Caner, bir yolcunun valizinde düzenek bağlantısı olmayan organik patlayıcı bir madde tespit etmiştir. Bahse konu patlayıcı madde X-Ray cihazının monitöründe hangi renkte görüntülenmiştir?</h3>
                    <ul>
                        <li>A) Yeşil</li>
                        <li class="correct">B) Turuncu ve tonları ✓</li>
                        <li>C) Kırmızı</li>
                        <li>D) Siyah</li>
                        <li>E) Mavi ve tonları</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Organik maddeler, X-Ray cihazının monitöründe turuncu ve tonlarında görüntülenir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 271,
            title: "Soru 271",
            content: `
                <div class="question">
                    <h3>X ışınının bazı cisimlerden az bazı cisimlerden geçmemesi aşağıdakilerden hangisini ifade eder?</h3>
                    <ul>
                        <li>A) Bütün maddelerin aynı yapıda olmalarını</li>
                        <li>B) X ışını kaynağına uzak geçtiğini</li>
                        <li>C) Cisimlerin cihaza dik konulduğunu</li>
                        <li>D) Cisimlerin nötron sayısının farklı olduğunu</li>
                        <li class="correct">E) Cisimlerin yoğunluklarının farklı olduğunu (Opak) ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X ışınının cisimlerden farklı oranlarda geçmesi, cisimlerin yoğunluklarının farklı olmasından kaynaklanır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 272,
            title: "Soru 272",
            content: `
                <div class="question">
                    <h3>Konveyör bandını geriye doğru çalıştırmak için kullanılan X-Ray cihazı kontrol paneli fonksiyon tuşu aşağıdakilerden hangisidir?</h3>
                    <ul>
                        <li>A) FWD tuşu</li>
                        <li class="correct">B) REV tuşu ✓</li>
                        <li>C) EDGE TRACE tuşu</li>
                        <li>D) HI-PEN tuşu</li>
                        <li>E) LIGHTER tuşu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>REV (Reverse) tuşu, konveyör bandının geriye doğru hareketini sağlar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 273,
            title: "Soru 273",
            content: `
                <div class="question">
                    <h3>Patlayıcı maddelerden C3 ve C4 adı verilen plastik patlayıcılar X-Ray cihazında hangi renk ile tespit edilebilir?</h3>
                    <ul>
                        <li>A) Mavi</li>
                        <li>B) Mor</li>
                        <li>C) Gri</li>
                        <li>D) Fosforik Yeşil</li>
                        <li class="correct">E) Turuncu ve tonları ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>C3 ve C4 gibi plastik patlayıcılar organik maddeler olduğu için X-Ray cihazında turuncu ve tonlarında görüntülenir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 274,
            title: "Soru 274",
            content: `
                <div class="question">
                    <h3>X-Ray cihazından geçen metaller renkli monitörde hangi renkte görünürler?</h3>
                    <ul>
                        <li class="correct">A) Mavi ✓</li>
                        <li>B) Sarı</li>
                        <li>C) Kırmızı</li>
                        <li>D) Beyaz</li>
                        <li>E) Kahverengi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazında metaller mavi ve tonlarında görüntülenir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 275,
            title: "Soru 275",
            content: `
                <div class="question">
                    <h3>X-ray Cihazında Atom ağırlığı 0-10 arasındaki maddeler ............, Atom ağırlığı 10-18 arasındaki maddeler ............, Atom ağırlığı 18'den büyük maddeler ............ olarak sınıflandırılır.</h3>
                    <ul>
                        <li>A) Organik / Ağır metaller / İn Organik</li>
                        <li>B) İn Organik / Ağır metaller / Organik</li>
                        <li>C) Ağır metaller / İn Organik / Organik</li>
                        <li>D) İn Organik / Ağır metaller / Organik</li>
                        <li class="correct">E) Organik / İn Organik / Ağır metaller ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazında atom ağırlığına göre maddeler: 0-10 arası organik, 10-18 arası inorganik, 18'den büyük olanlar ağır metaller olarak sınıflandırılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 276,
            title: "Soru 276",
            content: `
                <div class="question">
                    <h3>X-ray Cihazında Atom ağırlığı 0-10 arasındaki maddeler ............, Atom ağırlığı 10-18 arasındaki maddeler ............, Atom ağırlığı 18'den büyük maddeler ............ renkte görüntülenir.</h3>
                    <ul>
                        <li class="correct">A) Turuncu / Yeşil / Mavi ✓</li>
                        <li>B) Mavi / Turuncu / Yeşil</li>
                        <li>C) Yeşil / Turuncu / Mavi</li>
                        <li>D) Turuncu / Mavi / Yeşil</li>
                        <li>E) Mavi / Turuncu / Yeşil</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazında atom ağırlığına göre maddeler: 0-10 arası turuncu, 10-18 arası yeşil, 18'den büyük olanlar mavi renkte görüntülenir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 277,
            title: "Soru 277",
            content: `
                <div class="question">
                    <h3>Refakatçi eşliğinde girişlerle ilgili olarak aşağıdakilerin hangisi doğrudur?</h3>
                    <ul>
                        <li>A) Refakatli girişlerin amacı; iş görüşmesi bakım onarım gibi geçerli bir nedene dayanması</li>
                        <li>B) Refakatçi girişlerinin belirlendiği noktalarda refakatçi listesinin bulunması</li>
                        <li>C) Refakatçinin en fazla 2 kişiye refakat edebilmesi</li>
                        <li>D) Refakatçi ve eşlik ettiklerinin güvenlik taramalarının yapılması</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Refakatçi eşliğinde girişlerde belirtilen tüm kurallar geçerlidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 278,
            title: "Soru 278",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi refakatçinin özelliklerindendir?</h3>
                    <ul>
                        <li>A) Geçerli bir havalimanı kartına sahip olmalı</li>
                        <li>B) Güvenlik tahditli alanlarda refakatçilik yapmaya yetkili olmalı</li>
                        <li>C) Refakat edilen kişileri her zaman direk görüş alanında tutmalı</li>
                        <li>D) Refakat edilen kişiler tarafından hiçbir güvenlik ihlalinin gerçekleştirilmediğinden emin olmalı</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Refakatçilerin tüm bu özelliklere sahip olması gerekir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 279,
            title: "Soru 279",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi refakatçinin özelliklerinden değildir?</h3>
                    <ul>
                        <li>A) Refakat edilen kişileri her zaman direk görüş alanında tutmalı</li>
                        <li>B) Geçerli bir havalimanı kartına sahip olmalı</li>
                        <li>C) Güvenlik tahditli alanlarda refakatçilik yapmaya yetkili olmalı</li>
                        <li class="correct">D) Refakatçı hemcins olmalı ✓</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Refakatçinin hemcins olması zorunlu değildir, bu bir refakatçi özelliği değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 280,
            title: "Soru 280",
            content: `
                <div class="question">
                    <h3>Refakatçi eşliğinde girişler, Refakatçinin özellikleri hangi mevzuatımızda yer almaktadır?</h3>
                    <ul>
                        <li class="correct">A) Hava meydanları güvenlik programı ✓</li>
                        <li>B) Milli sivil havacılık güvenlik programı</li>
                        <li>C) 5188 sayılı özel güvenlik hizmetlerine dair kanun</li>
                        <li>D) Havalimanı işletme programı</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Refakatçi eşliğinde girişler ve refakatçinin özellikleri hava meydanları güvenlik programında düzenlenmiştir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 281,
            title: "Soru 281",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi havalimanı güvenlik sistemlerinin temel bileşenlerinden değildir?</h3>
                    <ul>
                        <li>A) X-Ray tarama sistemleri</li>
                        <li>B) Metal dedektörleri</li>
                        <li>C) CCTV sistemleri</li>
                        <li>D) Kartlı geçiş sistemleri</li>
                        <li class="correct">E) Yangın söndürme sistemleri ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yangın söndürme sistemleri emniyet sistemleri arasında yer alır, güvenlik sistemlerinin temel bileşeni değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 282,
            title: "Soru 282",
            content: `
                <div class="question">
                    <h3>Havalimanında güvenlik kontrolü yapıldıktan sonra geçişine izin verilen alanlara ne ad verilir?</h3>
                    <ul>
                        <li>A) Steril alan</li>
                        <li class="correct">B) Tahditli alan ✓</li>
                        <li>C) Kontrollü alan</li>
                        <li>D) Güvenli bölge</li>
                        <li>E) Serbest alan</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrolü sonrası geçişe izin verilen alanlara tahditli alan denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 283,
            title: "Soru 283",
            content: `
                <div class="question">
                    <h3>Havalimanında şüpheli paket/çanta görüldüğünde yapılması gereken ilk işlem nedir?</h3>
                    <ul>
                        <li class="correct">A) Çevresini emniyete alıp yetkililere haber vermek ✓</li>
                        <li>B) Paketi/çantayı açmak</li>
                        <li>C) Paketi/çantayı başka bir yere taşımak</li>
                        <li>D) Sahibini aramak</li>
                        <li>E) Paketi/çantayı imha etmek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şüpheli paket/çanta görüldüğünde ilk olarak çevresi emniyete alınmalı ve yetkililere haber verilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 284,
            title: "Soru 284",
            content: `
                <div class="question">
                    <h3>X-Ray cihazında organik maddeler hangi renkte görüntülenir?</h3>
                    <ul>
                        <li class="correct">A) Turuncu ve tonları ✓</li>
                        <li>B) Mavi ve tonları</li>
                        <li>C) Yeşil ve tonları</li>
                        <li>D) Siyah ve tonları</li>
                        <li>E) Kırmızı ve tonları</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazında organik maddeler turuncu ve tonlarında görüntülenir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 285,
            title: "Soru 285",
            content: `
                <div class="question">
                    <h3>Havalimanında güvenlik kontrolü yapılan bir yolcunun üzerinde silah tespit edilirse ne yapılır?</h3>
                    <ul>
                        <li>A) Yolcu uçağa alınmaz</li>
                        <li>B) Silah muhafaza altına alınır</li>
                        <li>C) Kolluk kuvvetlerine haber verilir</li>
                        <li>D) Tutanak tutulur</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrolünde silah tespit edildiğinde tüm bu işlemler sırasıyla yapılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 286,
            title: "Soru 286",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin kıyafeti nasıl olmalıdır?</h3>
                    <ul>
                        <li>A) Özel güvenlik kıyafeti yönetmeliğine uygun olmalı</li>
                        <li>B) Temiz ve ütülü olmalı</li>
                        <li>C) Yırtık ve sökük olmamalı</li>
                        <li>D) Görevi belli edecek şekilde olmalı</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik personelinin kıyafeti tüm bu özelliklere sahip olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 287,
            title: "Soru 287",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personeli hangi durumlarda zor kullanabilir?</h3>
                    <ul>
                        <li>A) Meşru savunma halinde</li>
                        <li>B) Suçüstü halinde yakalama sırasında</li>
                        <li>C) Direnişi kırma durumunda</li>
                        <li>D) Kaçma girişimini engelleme durumunda</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik personeli belirtilen tüm durumlarda orantılı güç kullanma yetkisine sahiptir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 288,
            title: "Soru 288",
            content: `
                <div class="question">
                    <h3>X-Ray cihazında tarama yapılırken bagajlar arasında bırakılması gereken minimum mesafe ne kadardır?</h3>
                    <ul>
                        <li>A) 25 cm</li>
                        <li>B) 35 cm</li>
                        <li class="correct">C) 50 cm ✓</li>
                        <li>D) 75 cm</li>
                        <li>E) 100 cm</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazında net görüntü alabilmek için bagajlar arasında en az 50 cm mesafe bırakılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 289,
            title: "Soru 289",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin görev alanı neresidir?</h3>
                    <ul>
                        <li>A) Terminal binası</li>
                        <li>B) Kontrol noktaları</li>
                        <li>C) Otopark</li>
                        <li>D) Çevre güvenlik bölgesi</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik personeli havalimanının tüm bu alanlarında görev yapabilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 290,
            title: "Soru 290",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin kimlik kartı nasıl olmalıdır?</h3>
                    <ul>
                        <li>A) Görünür şekilde takılmalı</li>
                        <li>B) Fotoğraflı olmalı</li>
                        <li>C) Geçerlilik süresi dolmamış olmalı</li>
                        <li>D) Kurum tarafından verilmiş olmalı</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik personelinin kimlik kartı tüm bu özelliklere sahip olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 291,
            title: "Soru 291",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin yetkileri arasında hangisi yoktur?</h3>
                    <ul>
                        <li>A) Kimlik sorma</li>
                        <li>B) Arama yapma</li>
                        <li>C) Yakalama</li>
                        <li class="correct">D) İfade alma ✓</li>
                        <li>E) Zor kullanma</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İfade alma yetkisi kolluk kuvvetlerine aittir, özel güvenlik personelinin böyle bir yetkisi yoktur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 292,
            title: "Soru 292",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin görevleri arasında hangisi yoktur?</h3>
                    <ul>
                        <li>A) Güvenlik kontrolü yapmak</li>
                        <li>B) Devriye görevi yapmak</li>
                        <li class="correct">C) Uçak bakımı yapmak ✓</li>
                        <li>D) Şüpheli paketleri bildirmek</li>
                        <li>E) Acil durumlarda tahliye yapmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Uçak bakımı teknik personelin görevidir, özel güvenlik personelinin böyle bir görevi yoktur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 293,
            title: "Soru 293",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin tutum ve davranışları nasıl olmalıdır?</h3>
                    <ul>
                        <li>A) Nazik ve kibar olmalı</li>
                        <li>B) Tarafsız olmalı</li>
                        <li>C) Profesyonel olmalı</li>
                        <li>D) Dikkatli olmalı</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik personeli tüm bu özelliklere sahip olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 294,
            title: "Soru 294",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin iletişim becerileri nasıl olmalıdır?</h3>
                    <ul>
                        <li>A) Etkili dinleme yapabilmeli</li>
                        <li>B) Açık ve anlaşılır konuşabilmeli</li>
                        <li>C) Beden dilini etkili kullanabilmeli</li>
                        <li>D) Empati kurabilmeli</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik personeli tüm bu iletişim becerilerine sahip olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 295,
            title: "Soru 295",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin acil durumlarda yapması gerekenler nelerdir?</h3>
                    <ul>
                        <li>A) Acil durum planını uygulamak</li>
                        <li>B) İlgili birimlere haber vermek</li>
                        <li>C) Tahliye işlemlerini yönetmek</li>
                        <li>D) Panik oluşmasını engellemek</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Acil durumlarda özel güvenlik personeli tüm bu görevleri yerine getirmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 296,
            title: "Soru 296",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin rapor yazma konusunda dikkat etmesi gereken hususlar nelerdir?</h3>
                    <ul>
                        <li>A) Olayları objektif olarak aktarmak</li>
                        <li>B) Açık ve anlaşılır yazmak</li>
                        <li>C) Zamanında rapor tutmak</li>
                        <li>D) Gerekli detayları eksiksiz yazmak</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Rapor yazımında tüm bu hususlara dikkat edilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 297,
            title: "Soru 297",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin vardiya değişiminde yapması gerekenler nelerdir?</h3>
                    <ul>
                        <li>A) Görev teslim tutanağını imzalamak</li>
                        <li>B) Önemli olayları aktarmak</li>
                        <li>C) Ekipmanları kontrol etmek</li>
                        <li>D) Nöbet yerini terk etmemek</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Vardiya değişiminde tüm bu işlemler eksiksiz yapılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 298,
            title: "Soru 298",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin devriye görevi sırasında dikkat etmesi gereken hususlar nelerdir?</h3>
                    <ul>
                        <li>A) Belirlenen güzergahı takip etmek</li>
                        <li>B) Şüpheli durumları rapor etmek</li>
                        <li>C) Düzenli kontroller yapmak</li>
                        <li>D) İletişim araçlarını açık tutmak</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Devriye görevi sırasında tüm bu hususlara dikkat edilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 299,
            title: "Soru 299",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin kontrol noktasında dikkat etmesi gereken hususlar nelerdir?</h3>
                    <ul>
                        <li>A) X-Ray cihazını doğru kullanmak</li>
                        <li>B) Yolcularla profesyonel iletişim kurmak</li>
                        <li>C) Şüpheli durumları değerlendirmek</li>
                        <li>D) Güvenlik prosedürlerini uygulamak</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kontrol noktasında görevli personel tüm bu hususlara dikkat etmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 300,
            title: "Soru 300",
            content: `
                <div class="question">
                    <h3>Havalimanında görevli özel güvenlik personelinin kriz yönetimi konusunda bilmesi gerekenler nelerdir?</h3>
                    <ul>
                        <li>A) Acil durum prosedürlerini bilmek</li>
                        <li>B) Soğukkanlı davranmak</li>
                        <li>C) Hızlı karar alabilmek</li>
                        <li>D) Ekip çalışması yapabilmek</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kriz yönetiminde özel güvenlik personeli tüm bu becerilere sahip olmalıdır.</p>
                    </div>
                </div>
            `
        }
    ]
};

// Dışa aktarma
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bookData2;
} 