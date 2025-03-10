const bookData = {
    questions: [
        {
            "title": "Soru 1",
            "content": `
                <div class="question">
                    <h3>Soru 1:</h3>
                    <p>Havaalanlarında ICAO'nun önerileri doğrultusunda gözlemler ve tavsiyelerde bulunmak üzere oluşturulan birim aşağıdakilerden hangisidir?</p>
                    <ul>
                        <li>A) EADUK</li>
                        <li>B) SHGM</li>
                        <li>C) MGK</li>
                        <li class="correct">D) EADB ✓</li>
                        <li>E) EGM</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanlarında ICAO'nun önerileri doğrultusunda gözlemler ve tavsiyelerde bulunmak üzere oluşturulan birim EADB'dir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 2",
            "content": `
                <div class="question">
                    <h3>Soru 2:</h3>
                    <p>Bomba ve şüpheli paket tespitinde hareket tarzında aşağıdakilerden hangisi yapılmaz?</p>
                    <ul>
                        <li>A) I ve II</li>
                        <li class="correct">B) II ve III ✓</li>
                        <li>C) I, II ve IV</li>
                        <li>D) I ve IV</li>
                        <li>E) I, II ve III</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>I) Üzerine su veya başka bir madde atılmaz, örtülmez.<br>
                        II) Şüpheli paketi güvenli bir bölgeye çekmek.<br>
                        III) Çevrede başka bir paket olabileceği unutulmaz.<br>
                        IV) Çevresinde haberleşme cihazları kullanılmaz.<br>
                        Şüpheli paketi güvenli bir bölgeye çekmek ve çevrede başka paket olabileceğini unutmak yanlış hareket tarzlarıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 3",
            "content": `
                <div class="question">
                    <h3>Soru 3:</h3>
                    <p>Hasar gördüğünde hava meydanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve hava meydanı içinde veya hava meydanıyla direkt bağlantılı bulunan tesis ve yerlere ne ad verilir?</p>
                    <ul>
                        <li>A) Havaalanı Dışı İşlem Tesisleri</li>
                        <li>B) Hava Tarafı</li>
                        <li class="correct">C) Hassas Tesis ✓</li>
                        <li>D) Kargo Alanı</li>
                        <li>E) Kontrol Merkezi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Hasar gördüğünde hava meydanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve hava meydanı içinde veya hava meydanıyla direkt bağlantılı bulunan tesis ve yerlere Hassas Tesis denir.</p>
                    </div>
                </div>
           `
       },
{
            "title": "Soru 4",
            "content": `
                <div class="question">
                    <h3>Soru 4:</h3>
                    <p>Havaya dönük bölümün güvenliği için alınacak tedbirler arasında aşağıdakilerden hangileri yer alır?</p>
                    <ul>
                        <li>A) 1 ve 4</li>
                        <li>B) 1, 2 ve 3</li>
                        <li>C) 2 ve 3</li>
                        <li class="correct">D) 1, 2, 3 ve 4 ✓</li>
                        <li>E) 1, 3 ve 4</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>1- Bölge ve kritik yerler, gayri muayyen zamanlarda devriyelerle taranır, kapalı devre televizyon ile gözetlenerek güvenliği sağlanır<br>
                        2- Hava meydanlarında kişilere verilen giriş kartlarında, kart sahibinin fotoğrafı, kimliği, hava meydanındaki görevi, bu görevi gereği hava meydanı içinde girebileceği yerler ve kartın geçerlilik süresi belirtilir.<br>
                        3- Havaalanında uçakların bulunduğu bölgelerin güvenliği, uçuş pistleri, uçak taksi yolları ve apronların umuma açık olan sahalardan, fiziki engellerle ayrılması suretiyle sağlanır.<br>
                        4- Yolcuların uçağa binmeleri amacıyla kullanılan kapılar, yolcu bulunmadığı zamanlarda devamlı kilitli tutulabilecek yapıda olmalı, yetkililerce sürekli olarak kontrol edilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 5",
            "content": `
                <div class="question">
                    <h3>Soru 5:</h3>
                    <p>Aşağıdakiler hangisi aktif sabotajlardan değildir?</p>
                    <ul>
                        <li class="correct">A) Fikir Sabotajı ✓</li>
                        <li>B) Yangın çıkarmak suretiyle sabotaj</li>
                        <li>C) Mekanik sabotaj</li>
                        <li>D) Biyolojik sabotaj</li>
                        <li>E) Patlayıcı maddelerle yapılan sabotaj</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Fikir sabotajı pasif sabotaj türüdür. Diğer seçeneklerdeki sabotaj türleri aktif sabotajlardır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 6",
            "content": `
                <div class="question">
                    <h3>Soru 6:</h3>
                    <p>Havacılık sektörünün çeşitli birimlerinde çalışan personelin ve ilgili alanda staj yapacak öğrencilerin havacılık güvenliğinin önemini anlamaları amacıyla temel bilgilerin verildiği eğitim aşağıdakilerden hangisidir?</p>
                    <ul>
                        <li>A) EDS Operatörlüğü Eğitimi</li>
                        <li class="correct">B) Güvenlik Bilinci Eğitimi ✓</li>
                        <li>C) İş Sağlığı ve Güvenliği Eğitimi</li>
                        <li>D) Yer Hizmetleri Güvenliği Eğitimi</li>
                        <li>E) Havacılık Hizmet Eğitimi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havacılık sektöründe çalışan personel ve stajyerlere havacılık güvenliğinin önemini anlatmak için verilen temel eğitim Güvenlik Bilinci Eğitimidir.</p>
                    </div>
                </div>
            `
        },
{
            "title": "Soru 7",
            "content": `
                <div class="question">
                    <h3>Soru 7:</h3>
                    <p>MSHGP'nin kaçıncı baskısı yürürlüktedir?</p>
                    <ul>
                        <li>A) 12</li>
                        <li class="correct">B) 13 ✓</li>
                        <li>C) 14</li>
                        <li>D) 10</li>
                        <li>E) 11</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP'nin (Milli Sivil Havacılık Güvenlik Programı) 13. baskısı yürürlüktedir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 8",
            "content": `
                <div class="question">
                    <h3>Soru 8:</h3>
                    <p>Aşağıdakilerden hangisi ulusal sivil havacılık otoritesinin havacılık güvenliği ile ilgili üstlendiği görevlerden değildir?</p>
                    <ul>
                        <li>A) Ulusal sivil havacılık güvenlik programının geliştirilmesi</li>
                        <li class="correct">B) Havaalanlarında asayişin sağlanması ✓</li>
                        <li>C) Eylemlerin ilgili bakanlıklar, daireler ve diğer hükümet organları arasında koordineli olarak yürütülmesi</li>
                        <li>D) Üyesi olunan uluslararası organizasyonlarla (ICAO, ECAC vb.) iletişim kurmak</li>
                        <li>E) Ulusal sivil havacılık güvenlik programının uygulanması ve güncellenmesinden</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanlarında asayişin sağlanması görevi ulusal sivil havacılık otoritesinin değil, kolluk kuvvetlerinin görevidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 9",
            "content": `
                <div class="question">
                    <h3>Soru 9:</h3>
                    <p>Yolcu ve kabin bagajlarının son kez güvenlik kontrolünden geçirilerek alındıkları ve güvenlik açısından temiz kabul edilen terminal bölümüne ne ad verilir?</p>
                    <ul>
                        <li>A) Apron</li>
                        <li>B) Gelen yolcu salonu</li>
                        <li>C) Karşılama alanı</li>
                        <li class="correct">D) Güvenlik tahditli alan ✓</li>
                        <li>E) Taksi yolu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu ve kabin bagajlarının son güvenlik kontrolünden geçtikten sonra bekledikleri ve güvenli kabul edilen terminal bölümüne Güvenlik Tahditli Alan denir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 10",
            "content": `
                <div class="question">
                    <h3>Soru 10:</h3>
                    <p>Havaalanı güvenliği açısından aşağıdakilerden hangisi yanlış bir uygulamadır?</p>
                    <ul>
                        <li>A) Yolcu ve bagajlarının güvenlik taramasından geçirilmesi</li>
                        <li>B) Personelin belirli alanlara erişiminin sınırlandırılması</li>
                        <li class="correct">C) Kimlik kartı olmadan güvenlik tahditli alanlara giriş yapılması ✓</li>
                        <li>D) Kargo ve yüklerin güvenlik kontrolünden geçirilmesi</li>
                        <li>E) Terminal binalarında devriye güvenlik kontrolleri yapılması</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik tahditli alanlara kimlik kartı olmadan giriş yapılması kesinlikle yasaktır ve güvenlik açısından yanlış bir uygulamadır.</p>
                    </div>
                </div>
            `
        },
{
            "title": "Soru 11",
            "content": `
                <div class="question">
                    <h3>Soru 11:</h3>
                    <p>Aşağıdakiler hangisi aktif sabotajlardan değildir?</p>
                    <ul>
                        <li class="correct">A) Fikir Sabotajı ✓</li>
                        <li>B) Yangın çıkarmak suretiyle sabotaj</li>
                        <li>C) Mekanik sabotaj</li>
                        <li>D) Biyolojik sabotaj</li>
                        <li>E) Patlayıcı maddelerle yapılan sabotaj</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Fikir sabotajı pasif sabotaj türüdür. Diğer seçeneklerdeki sabotaj türleri aktif sabotajlardır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 12",
            "content": `
                <div class="question">
                    <h3>Soru 12:</h3>
                    <p>Havacılık sektörünün çeşitli birimlerinde çalışan personelin ve ilgili alanda staj yapacak öğrencilerin havacılık güvenliğinin önemini anlamaları amacıyla temel bilgilerin verildiği eğitim aşağıdakilerden hangisidir?</p>
                    <ul>
                        <li>A) EDS Operatörlüğü Eğitimi</li>
                        <li class="correct">B) Güvenlik Bilinci Eğitimi ✓</li>
                        <li>C) İş Sağlığı ve Güvenliği Eğitimi</li>
                        <li>D) Yer Hizmetleri Güvenliği Eğitimi</li>
                        <li>E) Havacılık Hizmet Eğitimi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havacılık sektöründe çalışan personel ve stajyerlere havacılık güvenliğinin önemini anlatmak için verilen temel eğitim Güvenlik Bilinci Eğitimidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 13",
            "content": `
                <div class="question">
                    <h3>Soru 13:</h3>
                    <p>MSHGP'nin kaçıncı baskısı yürürlüktedir?</p>
                    <ul>
                        <li>A) 12</li>
                        <li class="correct">B) 13 ✓</li>
                        <li>C) 14</li>
                        <li>D) 10</li>
                        <li>E) 11</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP'nin (Milli Sivil Havacılık Güvenlik Programı) 13. baskısı yürürlüktedir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 14",
            "content": `
                <div class="question">
                    <h3>Soru 14:</h3>
                    <p>Aşağıdakilerden hangisi ulusal sivil havacılık otoritesinin havacılık güvenliği ile ilgili üstlendiği görevlerden değildir?</p>
                    <ul>
                        <li>A) Ulusal sivil havacılık güvenlik programının geliştirilmesi</li>
                        <li class="correct">B) Havaalanlarında asayişin sağlanması ✓</li>
                        <li>C) Eylemlerin ilgili bakanlıklar, daireler ve diğer hükümet organları arasında koordineli olarak yürütülmesi</li>
                        <li>D) Üyesi olunan uluslararası organizasyonlarla (ICAO, ECAC vb.) iletişim kurmak</li>
                        <li>E) Ulusal sivil havacılık güvenlik programının uygulanması ve güncellenmesinden</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanlarında asayişin sağlanması görevi ulusal sivil havacılık otoritesinin değil, kolluk kuvvetlerinin görevidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 15",
            "content": `
                <div class="question">
                    <h3>Soru 15:</h3>
                    <p>Yolcu ve kabin bagajlarının son kez güvenlik kontrolünden geçirilerek alındıkları ve güvenlik açısından temiz kabul edilen terminal bölümüne ne ad verilir?</p>
                    <ul>
                        <li>A) Apron</li>
                        <li>B) Gelen yolcu salonu</li>
                        <li>C) Karşılama alanı</li>
                        <li class="correct">D) Güvenlik tahditli alan ✓</li>
                        <li>E) Taksi yolu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu ve kabin bagajlarının son güvenlik kontrolünden geçtikten sonra bekledikleri ve güvenli kabul edilen terminal bölümüne Güvenlik Tahditli Alan denir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 16",
            "content": `
                <div class="question">
                    <h3>Soru 16:</h3>
                    <p>Havaalanı güvenliği açısından aşağıdakilerden hangisi yanlış bir uygulamadır?</p>
                    <ul>
                        <li>A) Yolcu ve bagajlarının güvenlik taramasından geçirilmesi</li>
                        <li>B) Personelin belirli alanlara erişiminin sınırlandırılması</li>
                        <li class="correct">C) Kimlik kartı olmadan güvenlik tahditli alanlara giriş yapılması ✓</li>
                        <li>D) Kargo ve yüklerin güvenlik kontrolünden geçirilmesi</li>
                        <li>E) Terminal binalarında devriye güvenlik kontrolleri yapılması</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik tahditli alanlara kimlik kartı olmadan giriş yapılması kesinlikle yasaktır ve güvenlik açısından yanlış bir uygulamadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 17",
            "content": `
                <div class="question">
                    <h3>Soru 17:</h3>
                    <p>Aşağıdakilerden hangisi havalimanı güvenlik önlemlerinden biridir?</p>
                    <ul>
                        <li class="correct">A) Yolcu ve bagaj taraması ✓</li>
                        <li>B) Sadece pasaport kontrolü</li>
                        <li>C) Bilet fiyatlarını belirleme</li>
                        <li>D) Gümrük vergilerini düzenleme</li>
                        <li>E) Kabin içi servis sağlama</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu ve bagaj taraması, havalimanı güvenliğinin temel önlemlerinden biridir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 18",
            "content": `
                <div class="question">
                    <h3>Soru 18:</h3>
                    <p>Havalimanlarında güvenlik sağlamak amacıyla kullanılan kapı tipi metal dedektörler hangi prensibe göre çalışır?</p>
                    <ul>
                        <li class="correct">A) Elektromanyetik alan değişimini algılama ✓</li>
                        <li>B) Optik tarama yöntemi</li>
                        <li>C) Kimyasal analiz yöntemi</li>
                        <li>D) Termal görüntüleme sistemi</li>
                        <li>E) Ultrasonik dalga tespiti</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı tipi metal dedektörler, elektromanyetik alan değişimini algılama prensibiyle çalışır.</p>
                    </div>
                </div>
            `
   },
        {
            "title": "Soru 19",
            "content": `
                <div class="question">
                    <h3>Soru 19:</h3>
                    <p>Bir havalimanında güvenlik prosedürleri gereği Güvenlik Tahditli Alan girişinde yapılan ilk kontrol hangi aşamadır?</p>
                    <ul>
                        <li class="correct">A) Kimlik ve bilet kontrolü ✓</li>
                        <li>B) Bagaj teslim işlemi</li>
                        <li>C) Pasaport kontrolü</li>
                        <li>D) Uçuş kartı kontrolü</li>
                        <li>E) Gümrük kontrolü</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik Tahditli Alan girişinde ilk olarak kimlik ve bilet kontrolü yapılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 20",
            "content": `
                <div class="question">
                    <h3>Soru 20:</h3>
                    <p>Havalimanlarında güvenlik denetimlerinde kullanılan X-ray cihazlarının temel amacı nedir?</p>
                    <ul>
                        <li>A) Yolcuların kimliklerini doğrulamak</li>
                        <li class="correct">B) Bagaj içerisindeki yasaklı ve tehlikeli maddeleri tespit etmek ✓</li>
                        <li>C) Yolcuların pasaport bilgilerini kontrol etmek</li>
                        <li>D) Uçakların bakımını gerçekleştirmek</li>
                        <li>E) Gümrük işlemlerini hızlandırmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazlarının temel amacı bagaj içerisindeki yasaklı ve tehlikeli maddeleri tespit etmektir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 21",
            "content": `
                <div class="question">
                    <h3>Soru 21:</h3>
                    <p>Aşağıdakilerden hangisi havalimanı güvenlik önlemlerinden biridir?</p>
                    <ul>
                        <li class="correct">A) Yolcu ve bagaj taraması ✓</li>
                        <li>B) Sadece pasaport kontrolü</li>
                        <li>C) Bilet fiyatlarını belirleme</li>
                        <li>D) Gümrük vergilerini düzenleme</li>
                        <li>E) Kabin içi servis sağlama</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu ve bagaj taraması, havalimanı güvenliğinin temel önlemlerinden biridir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 22",
            "content": `
                <div class="question">
                    <h3>Soru 22:</h3>
                    <p>Havalimanlarında kullanılan patlayıcı madde tespit sistemleri hangi prensibe dayanır?</p>
                    <ul>
                        <li class="correct">A) Kimyasal iz analizi ✓</li>
                        <li>B) Optik yüz tanıma</li>
                        <li>C) Ses frekansı tespiti</li>
                        <li>D) Manyetik alan ölçümü</li>
                        <li>E) Sıcaklık sensörü kullanımı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlayıcı madde tespit sistemleri, kimyasal iz analizi prensibine dayanarak çalışır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 23",
            "content": `
                <div class="question">
                    <h3>Soru 23:</h3>
                    <p>Güvenlik personelinin yolcu üzerindeki üst araması hangi durumda yapılır?</p>
                    <ul>
                        <li class="correct">A) Metal dedektör alarm verdiğinde veya şüpheli durum tespit edildiğinde ✓</li>
                        <li>B) Yolcu talep ettiğinde</li>
                        <li>C) Biniş kartı kontrolünde</li>
                        <li>D) Uçuş kapısında</li>
                        <li>E) Uçuş sırasında</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Üst araması, metal dedektör alarm verdiğinde veya şüpheli bir durum tespit edildiğinde yapılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 24",
            "content": `
                <div class="question">
                    <h3>Soru 24:</h3>
                    <p>Havalimanlarında yolcuların çantalarının kontrol edildiği cihaz hangisidir?</p>
                    <ul>
                        <li class="correct">A) X-ray tarayıcı ✓</li>
                        <li>B) Metal dedektörü</li>
                        <li>C) Termal kamera</li>
                        <li>D) Akıllı yüz tarayıcı</li>
                        <li>E) Gürültü ölçüm cihazı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu çantaları X-ray tarayıcı ile kontrol edilir.</p>
                    </div>
                </div>
            `
        },
{
            "title": "Soru 25",
            "content": `
                <div class="question">
                    <h3>Soru 25:</h3>
                    <p>Havalimanı güvenliği açısından aşağıdakilerden hangisi yanlış bir uygulamadır?</p>
                    <ul>
                        <li class="correct">A) Yolcu ve bagajlarının güvenlik taramasından geçirilmesi ✓</li>
                        <li>B) Personelin belirli alanlara erişiminin sınırlandırılması</li>
                        <li>C) Kimlik kartı olmadan güvenlik tahditli alanlara giriş yapılması</li>
                        <li>D) Kargo ve yüklerin güvenlik kontrolünden geçirilmesi</li>
                        <li>E) Terminal binalarında devriye güvenlik kontrolleri yapılması</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik tahditli alanlara kimlik kartı olmadan giriş yapılması kesinlikle yasaktır ve güvenlik açısından yanlış bir uygulamadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 26",
            "content": `
                <div class="question">
                    <h3>Soru 26:</h3>
                    <p>Apron bölgesinde araç kullanacak personelin sahip olması gereken belge nedir?</p>
                    <ul>
                        <li class="correct">A) Apron sürücü belgesi ✓</li>
                        <li>B) Uluslararası ehliyet</li>
                        <li>C) Pilot lisansı</li>
                        <li>D) Havalimanı kimlik kartı</li>
                        <li>E) Kargo yetki belgesi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Apron bölgesinde araç kullanabilmek için apron sürücü belgesi gereklidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 27",
            "content": `
                <div class="question">
                    <h3>Soru 27:</h3>
                    <p>Havalimanı terminallerinde görev yapan güvenlik personeli hangi kuruma bağlıdır?</p>
                    <ul>
                        <li class="correct">A) Sivil Havacılık Genel Müdürlüğü (SHGM) ve ilgili özel güvenlik şirketleri ✓</li>
                        <li>B) Hava trafik kontrol birimi</li>
                        <li>C) Turizm Bakanlığı</li>
                        <li>D) Ulaştırma ve Altyapı Bakanlığı</li>
                        <li>E) Dışişleri Bakanlığı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Terminal güvenlik personeli SHGM ve ilgili özel güvenlik şirketlerine bağlı olarak görev yapar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 28",
            "content": `
                <div class="question">
                    <h3>Soru 28:</h3>
                    <p>Bir yolcunun valizinde yasaklı bir madde tespit edildiğinde ne yapılmalıdır?</p>
                    <ul>
                        <li class="correct">A) Yetkili güvenlik birimlerine haber verilir ✓</li>
                        <li>B) Yolcunun uçağa binmesine izin verilir</li>
                        <li>C) Bagaj direkt olarak iade edilir</li>
                        <li>D) Yolcunun pasaportu iptal edilir</li>
                        <li>E) Uçuş süresiz olarak ertelenir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yasaklı madde tespit edildiğinde yetkili güvenlik birimlerine haber verilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 29",
            "content": `
                <div class="question">
                    <h3>Soru 29:</h3>
                    <p>Havalimanı güvenliği açısından riskli bir yolcunun davranışları nasıl değerlendirilir?</p>
                    <ul>
                        <li class="correct">A) Profil analizi ve şüpheli hareketlerin izlenmesiyle ✓</li>
                        <li>B) Sadece pasaport kontrolü ile</li>
                        <li>C) Bagajının ağırlığına göre</li>
                        <li>D) Yolcunun uçak bileti sınıfına göre</li>
                        <li>E) Sadece bilet kontrolü sırasında</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Riskli yolcular profil analizi ve şüpheli hareketlerin izlenmesi yoluyla değerlendirilir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 30",
            "content": `
                <div class="question">
                    <h3>Soru 30:</h3>
                    <p>Bir havalimanında güvenlik seviyesinin artırılması gerektiğinde hangi uygulama devreye girer?</p>
                    <ul>
                        <li class="correct">A) Tehdit seviyesinin yükseltilmesi ve ek güvenlik önlemlerinin alınması ✓</li>
                        <li>B) Uçuşların iptal edilmesi</li>
                        <li>C) Tüm yolcuların uçuşlarının ertelenmesi</li>
                        <li>D) Bagaj kabulünün durdurulması</li>
                        <li>E) Havalimanının tamamen kapatılması</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik seviyesinin artırılması gerektiğinde tehdit seviyesi yükseltilir ve ek güvenlik önlemleri alınır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 31",
            "content": `
                <div class="question">
                    <h3>Soru 31:</h3>
                    <p>Bir yolcunun üst taraması hangi yöntemle gerçekleştirilir?</p>
                    <ul>
                        <li class="correct">A) El dedektörü ve fiziksel arama ile ✓</li>
                        <li>B) Termal kamera ile</li>
                        <li>C) X-ray ile</li>
                        <li>D) Ses frekansı analizi ile</li>
                        <li>E) Uçuş sırasında yapılan kontrol ile</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu üst taraması el dedektörü ve gerektiğinde fiziksel arama ile gerçekleştirilir.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 32",
            "content": `
                <div class="question">
                    <h3>Soru 32:</h3>
                    <p>Havalimanlarında kullanılan biyometrik güvenlik sistemleri hangi amaçla uygulanmaktadır?</p>
                    <ul>
                        <li class="correct">A) Kimlik doğrulama ve sahte kimlik kullanımını önleme ✓</li>
                        <li>B) Yolcu konforunu artırma</li>
                        <li>C) Uçuş fiyatlarını belirleme</li>
                        <li>D) Uçak bakım işlemlerini düzenleme</li>
                        <li>E) Bagaj etiketleme sürecini iyileştirme</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Biyometrik güvenlik sistemleri, kimlik doğrulama ve sahte kimlik kullanımını önlemek için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 33",
            "content": `
                <div class="question">
                    <h3>Soru 33:</h3>
                    <p>Havalimanlarında kullanılan CCTV kamera sistemleri hangi temel amaca hizmet eder?</p>
                    <ul>
                        <li class="correct">A) Güvenlik izleme ve olay tespiti ✓</li>
                        <li>B) Uçuş bilgilerini görüntüleme</li>
                        <li>C) Yolcu bagajlarının ağırlığını hesaplama</li>
                        <li>D) Uçuş sürelerini kısaltma</li>
                        <li>E) Gümrük işlemlerini hızlandırma</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>CCTV kamera sistemleri, güvenlik izleme ve olay tespiti amacıyla kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 34",
            "content": `
                <div class="question">
                    <h3>Soru 34:</h3>
                    <p>Patlayıcı madde tespit köpeklerinin temel eğitim amacı nedir?</p>
                    <ul>
                        <li class="correct">A) Patlayıcı maddeleri koklayarak tespit etmek ✓</li>
                        <li>B) Yolcu kimliklerini kontrol etmek</li>
                        <li>C) Bagaj ağırlığını hesaplamak</li>
                        <li>D) Uçuş güvenliğini denetlemek</li>
                        <li>E) Uçuş rotalarını belirlemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlayıcı madde tespit köpekleri, patlayıcı maddeleri koklayarak tespit etmek üzere eğitilir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 35",
            "content": `
                <div class="question">
                    <h3>Soru 35:</h3>
                    <p>Bir havalimanında sahipsiz bagaj tespit edildiğinde ilk yapılması gereken nedir?</p>
                    <ul>
                        <li class="correct">A) Güvenlik yetkililerine haber vermek ve bölgeyi güvenlik çemberine almak ✓</li>
                        <li>B) Bagajı sahibine teslim etmek</li>
                        <li>C) Bagajı açarak içeriğini kontrol etmek</li>
                        <li>D) Bagajı çöpe atmak</li>
                        <li>E) Uçağa yüklemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sahipsiz bagaj tespit edildiğinde ilk olarak güvenlik yetkililerine haber verilmeli ve bölge güvenlik çemberine alınmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 36",
            "content": `
                <div class="question">
                    <h3>Soru 36:</h3>
                    <p>Havalimanlarında kullanılan manyetik kapılar (metal dedektörleri) hangi prensiple çalışır?</p>
                    <ul>
                        <li class="correct">A) Metalik nesnelerin oluşturduğu manyetik alan değişimini algılama ✓</li>
                        <li>B) Termal ısı yayılımı ölçme</li>
                        <li>C) Kimyasal analiz yapma</li>
                        <li>D) Optik tarama yöntemi kullanma</li>
                        <li>E) Ses frekansı analizi gerçekleştirme</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Metal dedektörleri, metalik nesnelerin oluşturduğu manyetik alan değişimini algılama prensibiyle çalışır.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 37",
            "content": `
                <div class="question">
                    <h3>Soru 37:</h3>
                    <p>Yolcu bagajlarının X-ray cihazlarından geçirilmesinin temel nedeni nedir?</p>
                    <ul>
                        <li class="correct">A) Tehlikeli ve yasaklı maddeleri tespit etmek ✓</li>
                        <li>B) Yolcu kimlik bilgilerini doğrulamak</li>
                        <li>C) Bagaj ağırlığını ölçmek</li>
                        <li>D) Bagaj etiketlerini kontrol etmek</li>
                        <li>E) Bagaj kaybını önlemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazları, bagajlardaki tehlikeli ve yasaklı maddeleri tespit etmek için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 38",
            "content": `
                <div class="question">
                    <h3>Soru 38:</h3>
                    <p>Havalimanlarında yapılan güvenlik kontrolleri kimleri kapsar?</p>
                    <ul>
                        <li class="correct">A) Yolcular, personel ve ziyaretçileri ✓</li>
                        <li>B) Sadece yolcuları</li>
                        <li>C) Sadece havayolu çalışanlarını</li>
                        <li>D) Sadece VIP yolcuları</li>
                        <li>E) Sadece terminalde çalışanları</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanı güvenlik kontrolleri yolcular, personel ve ziyaretçileri kapsar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 39",
            "content": `
                <div class="question">
                    <h3>Soru 39:</h3>
                    <p>Apron bölgesinde güvenlik kameralarının kullanımı hangi amaca yöneliktir?</p>
                    <ul>
                        <li class="correct">A) Güvenlik olaylarını izlemek ve kayıt altına almak ✓</li>
                        <li>B) Uçuş rotalarını belirlemek</li>
                        <li>C) Uçuş sürelerini takip etmek</li>
                        <li>D) Yolcu bagajlarını ağırlıklarına göre sıralamak</li>
                        <li>E) Bilet fiyatlarını belirlemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Apron bölgesindeki güvenlik kameraları, güvenlik olaylarını izlemek ve kayıt altına almak için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 40",
            "content": `
                <div class="question">
                    <h3>Soru 40:</h3>
                    <p>Havalimanı güvenliği açısından yasaklı maddeler listesi kim tarafından belirlenir?</p>
                    <ul>
                        <li class="correct">A) Sivil Havacılık Genel Müdürlüğü ve uluslararası havacılık otoriteleri ✓</li>
                        <li>B) Hava trafik kontrol birimi</li>
                        <li>C) Yolcuların tercihlerine göre</li>
                        <li>D) Havalimanı işletmecisi</li>
                        <li>E) Uçak mürettebatı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yasaklı maddeler listesi, Sivil Havacılık Genel Müdürlüğü ve uluslararası havacılık otoriteleri tarafından belirlenir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 41",
            "content": `
                <div class="question">
                    <h3>Soru 41:</h3>
                    <p>Havalimanlarında çalışan güvenlik personelinin temel sorumluluğu nedir?</p>
                    <ul>
                        <li class="correct">A) Yolcu ve bagaj güvenliğini sağlamak ✓</li>
                        <li>B) Uçuş saatlerini ayarlamak</li>
                        <li>C) Uçak bakım işlemlerini yapmak</li>
                        <li>D) Bilet satış işlemlerini gerçekleştirmek</li>
                        <li>E) Gümrük işlemlerini düzenlemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik personelinin temel sorumluluğu yolcu ve bagaj güvenliğini sağlamaktır.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 42",
            "content": `
                <div class="question">
                    <h3>Soru 42:</h3>
                    <p>Bir havalimanında güvenlik kontrol noktalarındaki en yaygın tehdit unsurlarından biri nedir?</p>
                    <ul>
                        <li class="correct">A) Yasaklı ve tehlikeli maddeler ✓</li>
                        <li>B) Pasaport kayıpları</li>
                        <li>C) Fazla bagaj ücreti</li>
                        <li>D) Hatalı bilet düzenlemeleri</li>
                        <li>E) Hava durumu değişiklikleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrol noktalarındaki en yaygın tehdit unsuru yasaklı ve tehlikeli maddelerdir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 43",
            "content": `
                <div class="question">
                    <h3>Soru 43:</h3>
                    <p>Havalimanı güvenliğinde biyometrik sistemler hangi bilgiyi kullanarak doğrulama yapar?</p>
                    <ul>
                        <li class="correct">A) Parmak izi, yüz tanıma veya iris taraması ✓</li>
                        <li>B) Bilet numarası</li>
                        <li>C) Bagaj etiketi</li>
                        <li>D) Yolcu yaşı</li>
                        <li>E) Uçuş numarası</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Biyometrik sistemler parmak izi, yüz tanıma veya iris taraması gibi biyolojik verileri kullanarak kimlik doğrulaması yapar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 44",
            "content": `
                <div class="question">
                    <h3>Soru 44:</h3>
                    <p>Bir güvenlik görevlisi, bir yolcunun şüpheli bir davranış sergilediğini fark ettiğinde ne yapmalıdır?</p>
                    <ul>
                        <li class="correct">A) Durumu derhal yetkililere bildirmeli ve yolcuyu izlemelidir ✓</li>
                        <li>B) Yolcunun uçuşunu iptal etmelidir</li>
                        <li>C) Yolcunun bagajını açmalıdır</li>
                        <li>D) Yolcuyu doğrudan gözaltına almalıdır</li>
                        <li>E) Yolcuyu sorgulamadan serbest bırakmalıdır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şüpheli davranış durumunda güvenlik görevlisi durumu yetkililere bildirmeli ve yolcuyu izlemelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 45",
            "content": `
                <div class="question">
                    <h3>Soru 45:</h3>
                    <p>Havalimanlarında sıvı kısıtlaması genellikle hangi hacimle sınırlıdır?</p>
                    <ul>
                        <li class="correct">A) 100 mL ✓</li>
                        <li>B) 500 mL</li>
                        <li>C) 1 L</li>
                        <li>D) 2 L</li>
                        <li>E) 5 L</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanlarında sıvı kısıtlaması genellikle 100 mL ile sınırlıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 46",
            "content": `
                <div class="question">
                    <h3>Soru 46:</h3>
                    <p>Apron bölgesine giriş yapacak bir kişinin sahip olması gereken belge nedir?</p>
                    <ul>
                        <li class="correct">A) Güvenlik geçiş kartı (Havalimanı kimlik kartı) ✓</li>
                        <li>B) Sadece ehliyet</li>
                        <li>C) Uçuş bileti</li>
                        <li>D) Pasaport</li>
                        <li>E) VIP biniş kartı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Apron bölgesine giriş için güvenlik geçiş kartı (havalimanı kimlik kartı) gereklidir.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 47",
            "content": `
                <div class="question">
                    <h3>Soru 47:</h3>
                    <p>X-ray cihazlarında şüpheli bir görüntü tespit edilirse ne yapılmalıdır?</p>
                    <ul>
                        <li class="correct">A) Bagaj detaylı incelemeye alınır ve gerekirse açılır ✓</li>
                        <li>B) Bagaj doğrudan uçağa yüklenir</li>
                        <li>C) Yolcunun uçuşu iptal edilir</li>
                        <li>D) Bagaj sahibine haber verilmeden iade edilir</li>
                        <li>E) Bagaj güvenlik kontrolünden muaf tutulur</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şüpheli görüntü tespit edildiğinde bagaj detaylı incelemeye alınır ve gerekirse açılarak kontrol edilir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 48",
            "content": `
                <div class="question">
                    <h3>Soru 48:</h3>
                    <p>Havalimanlarında kullanılan termal kameralar genellikle hangi amaçla kullanılır?</p>
                    <ul>
                        <li class="correct">A) Vücut ısısını ölçerek sağlık taraması yapmak ✓</li>
                        <li>B) Bagaj ağırlığını ölçmek</li>
                        <li>C) Pasaport kontrolü yapmak</li>
                        <li>D) Yüz tanıma işlemi yapmak</li>
                        <li>E) Manyetik tarama gerçekleştirmek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Termal kameralar genellikle yolcuların vücut ısısını ölçerek sağlık taraması yapmak için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 49",
            "content": `
                <div class="question">
                    <h3>Soru 49:</h3>
                    <p>Bir yolcunun bagajında yasaklı bir eşya bulunduğunda hangi işlem uygulanır?</p>
                    <ul>
                        <li class="correct">A) Eşya güvenlik birimlerine teslim edilir ve yolcu bilgilendirilir ✓</li>
                        <li>B) Yolcunun uçuşuna izin verilmez</li>
                        <li>C) Bagaj doğrudan çöpe atılır</li>
                        <li>D) Yolcu hakkında dava açılır</li>
                        <li>E) Bagaj sahibine iade edilir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yasaklı eşya tespit edildiğinde, eşya güvenlik birimlerine teslim edilir ve yolcu durumla ilgili bilgilendirilir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 50",
            "content": `
                <div class="question">
                    <h3>Soru 50:</h3>
                    <p>Havalimanı apron bölgesinde araç kullanımı sırasında hangi kurallar geçerlidir?</p>
                    <ul>
                        <li class="correct">A) Özel apron trafik kuralları ve hız limitlerine uyulmalıdır ✓</li>
                        <li>B) Araç hız sınırı bulunmamaktadır</li>
                        <li>C) Tüm araçlar serbestçe hareket edebilir</li>
                        <li>D) Sadece pilotlar araç kullanabilir</li>
                        <li>E) Trafik kuralları geçerli değildir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Apron bölgesinde özel apron trafik kuralları ve hız limitlerine uyulması zorunludur.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 51",
            "content": `
                <div class="question">
                    <h3>Soru 51:</h3>
                    <p>Havalimanı güvenliğinde kullanılan patlayıcı iz dedektörleri nasıl çalışır?</p>
                    <ul>
                        <li class="correct">A) Bagaj veya kişi üzerindeki kimyasal parçacıkları analiz ederek patlayıcı madde izlerini tespit eder ✓</li>
                        <li>B) Bagaj içeriğini tartarak analiz eder</li>
                        <li>C) Termal görüntüleme yaparak maddeyi belirler</li>
                        <li>D) Radyo frekanslarını kullanarak çalışır</li>
                        <li>E) Ses dalgaları ile tarama yapar</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlayıcı iz dedektörleri, kimyasal parçacıkları analiz ederek patlayıcı madde izlerini tespit eder.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 52",
            "content": `
                <div class="question">
                    <h3>Soru 52:</h3>
                    <p>Havalimanlarında güvenlik kontrollerinin amacı nedir?</p>
                    <ul>
                        <li class="correct">A) Tehditleri ve yasa dışı maddeleri tespit ederek uçuş güvenliğini sağlamak ✓</li>
                        <li>B) Bilet fiyatlarını kontrol etmek</li>
                        <li>C) Yolcu sayısını artırmak</li>
                        <li>D) Uçak bakım işlemlerini düzenlemek</li>
                        <li>E) Yolcuların bagajlarını hafifletmek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrollerinin temel amacı tehditleri ve yasa dışı maddeleri tespit ederek uçuş güvenliğini sağlamaktır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 53",
            "content": `
                <div class="question">
                    <h3>Soru 53:</h3>
                    <p>Havalimanı apronunda yayaların hareket etmesi nasıl düzenlenmiştir?</p>
                    <ul>
                        <li class="correct">A) Yalnızca belirlenen yaya yolları kullanılmalıdır ✓</li>
                        <li>B) Herkes istediği gibi yürüyebilir</li>
                        <li>C) Yayaların apron bölgesine girmesi yasaktır</li>
                        <li>D) Yayalar uçakların yanından yürüyebilir</li>
                        <li>E) Araç yollarında yürümek serbesttir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Apron bölgesinde yayalar yalnızca belirlenen yaya yollarını kullanmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 54",
            "content": `
                <div class="question">
                    <h3>Soru 54:</h3>
                    <p>Bir yolcu, güvenlik noktasında kimlik doğrulaması yapmadan geçebilir mi?</p>
                    <ul>
                        <li class="correct">A) Hayır, kimlik doğrulaması zorunludur ✓</li>
                        <li>B) Evet, yalnızca el bagajıyla geçebilir</li>
                        <li>C) Evet, pasaportsuz seyahat edebilir</li>
                        <li>D) Evet, sadece uçuş kartı ile geçebilir</li>
                        <li>E) Evet, güvenlik noktasına uğramadan uçağa binebilir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik noktasında kimlik doğrulaması zorunludur, bu işlem yapılmadan geçiş yapılamaz.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 55",
            "content": `
                <div class="question">
                    <h3>Soru 55:</h3>
                    <p>Bir havalimanında olağanüstü güvenlik durumu ilan edildiğinde ne olur?</p>
                    <ul>
                        <li class="correct">A) Ek güvenlik önlemleri devreye girer ve risk seviyesi artırılır ✓</li>
                        <li>B) Tüm uçuşlar iptal edilir</li>
                        <li>C) Yolculara ek bagaj hakkı verilir</li>
                        <li>D) Hava trafiği durdurulur</li>
                        <li>E) Havalimanı tamamen kapatılır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Olağanüstü güvenlik durumunda ek güvenlik önlemleri devreye girer ve risk seviyesi artırılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 56",
            "content": `
                <div class="question">
                    <h3>Soru 56:</h3>
                    <p>Havalimanı terminallerinde bulunan güvenlik kameralarının kayıtları ne amaçla kullanılır?</p>
                    <ul>
                        <li class="correct">A) Olay tespiti ve güvenlik denetimleri için ✓</li>
                        <li>B) Reklam verilerini toplamak için</li>
                        <li>C) Yolcu konforunu artırmak için</li>
                        <li>D) Bilet fiyatlarını belirlemek için</li>
                        <li>E) Gümrük işlemlerini hızlandırmak için</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kamera kayıtları olay tespiti ve güvenlik denetimleri için kullanılır.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 57",
            "content": `
                <div class="question">
                    <h3>Soru 57:</h3>
                    <p>Güvenlik kontrollerinde yolcunun ayakkabılarının çıkarılması hangi durumlarda istenir?</p>
                    <ul>
                        <li class="correct">A) Şüpheli bir durum veya ek güvenlik taraması gerektiğinde ✓</li>
                        <li>B) Tüm yolculardan her zaman istenir</li>
                        <li>C) Sadece ilk kez uçan yolculardan istenir</li>
                        <li>D) VIP yolculara uygulanmaz</li>
                        <li>E) Hava durumu uygun olduğunda istenir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Ayakkabıların çıkarılması şüpheli durumlarda veya ek güvenlik taraması gerektiğinde istenir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 58",
            "content": `
                <div class="question">
                    <h3>Soru 58:</h3>
                    <p>Bir havalimanındaki en yüksek güvenlik seviyesi hangisidir?</p>
                    <ul>
                        <li class="correct">A) Kırmızı alarm seviyesi ✓</li>
                        <li>B) Sarı alarm seviyesi</li>
                        <li>C) Yeşil alarm seviyesi</li>
                        <li>D) Mavi alarm seviyesi</li>
                        <li>E) Beyaz alarm seviyesi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanlarında en yüksek güvenlik seviyesi kırmızı alarm seviyesidir.</p>
                    </div>
                </div>
            `
        },
{
            "title": "Soru 59",
            "content": `
                <div class="question">
                    <h3>Soru 59:</h3>
                    <p>Bomba ve şüpheli paket tespitinde hareket tarzında aşağıdakilerden hangisi yapılmaz?</p>
                    <ul>
                        <li>A) I, II ve III</li>
                        <li class="correct">B) II ve III ✓</li>
                        <li>C) I, II ve IV</li>
                        <li>D) I ve IV</li>
                        <li>E) I ve II</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>I) Üzerine su veya başka bir madde atılmaz, örtülmez.<br>
                        II) Şüpheli paketi güvenli bir bölgeye çekmek.<br>
                        III) Çevrede başka bir paket olabileceği unutulmaz.<br>
                        IV) Çevresinde haberleşme cihazları kullanılmaz.<br>
                        Şüpheli paketi güvenli bir bölgeye çekmek ve çevrede başka paket olabileceğini unutmak yanlış hareket tarzlarıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 60",
            "content": `
                <div class="question">
                    <h3>Soru 60:</h3>
                    <p>Hasar gördüğünde hava meydanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve hava meydanı içinde veya hava meydanıyla direkt bağlantılı bulunan tesis ve yerlere ne ad verilir?</p>
                    <ul>
                        <li class="correct">A) Hassas Tesis ✓</li>
                        <li>B) Hava Tarafı</li>
                        <li>C) Havaalanı Dışı İşlem Tesisleri</li>
                        <li>D) Kargo Alanı</li>
                        <li>E) Kontrol Merkezi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Hasar gördüğünde hava meydanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve hava meydanı içinde veya hava meydanıyla direkt bağlantılı bulunan tesis ve yerlere Hassas Tesis denir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 71",
            "content": `
                <div class="question">
                    <h3>Soru 71:</h3>
                    <p>Aşağıdakilerden hangisi güvenlik personelinin görevlerinden biri değildir?</p>
                    <ul>
                        <li>A) Güvenlik tahditli alanlara giriş için havaalanı giriş kartları ve araç plakalarının kontrolü</li>
                        <li>B) Yolcuların aranması ve kontrolü</li>
                        <li>C) Güvenlik tahditli alanlara giriş kontrolü</li>
                        <li class="correct">D) Kişilerin, uçak altı ve kabin bagajlarının gidecekleri yere güvenle ulaşmalarının sağlaması ✓</li>
                        <li>E) Devriye, refakat ve nöbet hizmetleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bagajların gidecekleri yere güvenle ulaşmalarının sağlanması yer hizmetleri personelinin görevidir, güvenlik personelinin değil.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 72",
            "content": `
                <div class="question">
                    <h3>Soru 72:</h3>
                    <p>Aşağıdaki maddelerin hangisinin/hangilerinin taşınmasında pilotun onayı gerekir?</p>
                    <ul>
                        <li>A) II ve III</li>
                        <li class="correct">B) Yalnız III ✓</li>
                        <li>C) Yalnız I</li>
                        <li>D) III ve IV</li>
                        <li>E) Yalnız IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>I) Civalı termometre<br>
                        II) 2 kg kuru buz<br>
                        III) Askeri mühimmat<br>
                        IV) Lehim makinesi<br>
                        Sadece askeri mühimmatın taşınmasında pilot onayı gereklidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 73",
            "content": `
                <div class="question">
                    <h3>Soru 73:</h3>
                    <p>Temel Sivil Havacılık Güvenliği Eğitiminin tazeleme eğitim süresi kaç yılda birdir?</p>
                    <ul>
                        <li>A) 3 yıl, 2 ders saati</li>
                        <li>B) 3 yıl, 4 ders saati</li>
                        <li>C) 2 yıl, 4 ders saati</li>
                        <li class="correct">D) 2 yıl, 8 ders saati ✓</li>
                        <li>E) 3 yıl, 8 ders saati</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Temel Sivil Havacılık Güvenliği Eğitiminin tazeleme eğitimi 2 yılda bir, 8 ders saati olarak yapılmaktadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 74",
            "content": `
                <div class="question">
                    <h3>Soru 74:</h3>
                    <p>Araçların aranması ile ilgili aşağıdaki arama yöntemlerinden hangisi/hangileri kullanılır?</p>
                    <ul>
                        <li>A) II ve III</li>
                        <li>B) Yalnız I</li>
                        <li>C) I ve II</li>
                        <li class="correct">D) I, II ve III ✓</li>
                        <li>E) Yalnız III</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>I) Elle arama<br>
                        II) Gözle kontrol yöntemi<br>
                        III) Arama için destekleyici yöntemler<br>
                        Araçların aranmasında tüm bu yöntemler kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 75",
            "content": `
                <div class="question">
                    <h3>Soru 75:</h3>
                    <p>Aşağıdakilerden hangisi CCTV sisteminde kullanılmaz?</p>
                    <ul>
                        <li>A) Lens</li>
                        <li>B) Kamera</li>
                        <li>C) Kayıt Cihazı</li>
                        <li class="correct">D) Kart kontrollü geçiş sistemi ✓</li>
                        <li>E) Monitör/ekran</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>CCTV sisteminde kart kontrollü geçiş sistemi kullanılmaz. CCTV sisteminin temel bileşenleri lens, kamera, kayıt cihazı ve monitördür.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 76",
            "content": `
                <div class="question">
                    <h3>Soru 76:</h3>
                    <p>Aşağıdakilerden hangisi/hangileri havaalanı çevre güvenliği yapısal unsurlarındandır?</p>
                    <ul>
                        <li>A) Yalnız I</li>
                        <li class="correct">B) I, II, III ve IV ✓</li>
                        <li>C) I ve II</li>
                        <li>D) I, II ve III</li>
                        <li>E) II, III ve IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>I) Yaya ve Motorize Devriye Yolları<br>
                        II) Aydınlatma<br>
                        III) Görüşü Engeleyen Unsurlar<br>
                        IV) Kapalı devre kamera sistemi<br>
                        Tüm bu unsurlar havaalanı çevre güvenliği yapısal unsurlarındandır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 77",
            "content": `
                <div class="question">
                    <h3>Soru 77:</h3>
                    <p>Aşağıdakilerden hangisi havaalanı giriş kartı üzerinde yer alan bilgilerden birisi değildir?</p>
                    <ul>
                        <li>A) Kart sahibinin görevi</li>
                        <li>B) Personel sicil numarası</li>
                        <li>C) Kartın geçerlilik süresi</li>
                        <li>D) Kartın geçerli olduğu havaalanı</li>
                        <li class="correct">E) Personelin öğrenim durumu ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanı giriş kartında personelin öğrenim durumu bilgisi yer almaz.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 78",
            "content": `
                <div class="question">
                    <h3>Soru 78:</h3>
                    <p>Yönlendirme görevlisi, tüm güvenlik kontrol noktalarında bulunan ........ çizgi önünde görev yapacaktır. ........ çizgi bulunmayan noktalarda kapı dedektörünün 1 metre önünde bulunulması gerekir.</p>
                    <ul>
                        <li class="correct">A) KIRMIZI ✓</li>
                        <li>B) YEŞİL</li>
                        <li>C) MAVİ</li>
                        <li>D) SİYAH</li>
                        <li>E) TURUNCU</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrol noktalarında yönlendirme görevlisi kırmızı çizgi önünde görev yapar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 79",
            "content": `
                <div class="question">
                    <h3>Soru 79:</h3>
                    <p>Aşağıdakilerden hangisi potansiyel tehlike arz eden yolculardan değildir?</p>
                    <ul>
                        <li class="correct">A) Transfer yolcu ✓</li>
                        <li>B) Kabul edilmeyen yolcular</li>
                        <li>C) Hukuki işlemlere maruz kalmış kişiler</li>
                        <li>D) Deporte yolcular</li>
                        <li>E) Akli dengesi yerinde olmayan yolcu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Transfer yolcu başlı başına potansiyel tehlike arz eden yolcu kategorisinde değildir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 80",
            "content": `
                <div class="question">
                    <h3>Soru 80:</h3>
                    <p>Yolcunun dokümanları, bagajı, giyim tarzı, hareketleri, seyahat gerekçesi gibi unsurlar aşağıdakilerden hangisi olarak ele alınmaktadır?</p>
                    <ul>
                        <li>A) Yolculuk bilgisi</li>
                        <li>B) Karakteristik özellik</li>
                        <li>C) Yaşam tarzı</li>
                        <li>D) Kişilik analizi</li>
                        <li class="correct">E) Yolcu mülakatı ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu unsurlar yolcu mülakatı kapsamında değerlendirilir.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 81",
            "content": `
                <div class="question">
                    <h3>Soru 81:</h3>
                    <p>'Sivri /Keskin/Delici Eşyalar/Nesneler'den hangisi/hangileridir?</p>
                    <ul>
                        <li>A) I, II ve III</li>
                        <li>B) Yalnız I</li>
                        <li>C) I ve II</li>
                        <li class="correct">D) I, II, III ve IV ✓</li>
                        <li>E) II, III ve IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>I) Dart<br>
                        II) Zıpkın<br>
                        III) Dağcılık malzemeleri (krampon, çekiç, balta, tırmanma sopaları)<br>
                        IV) Kayak ve batonlar<br>
                        Tüm bu malzemeler sivri/keskin/delici eşyalar kategorisindedir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 82",
            "content": `
                <div class="question">
                    <h3>Soru 82:</h3>
                    <p>Aşağıdakilerden hangisi beden dilinin öğelerinden değildir?</p>
                    <ul>
                        <li>A) Gözler</li>
                        <li>B) Jest ve mimik</li>
                        <li class="correct">C) Ses ✓</li>
                        <li>D) Baş</li>
                        <li>E) Duruş</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Ses, sözel iletişimin bir parçasıdır ve beden dilinin öğelerinden değildir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 83",
            "content": `
                <div class="question">
                    <h3>Soru 83:</h3>
                    <p>Araç park alanları hakkında aşağıdakilerden hangisi/hangileri doğrudur?</p>
                    <ul>
                        <li>A) I</li>
                        <li>B) II ve III</li>
                        <li>C) Yalnız I</li>
                        <li>D) I ve II</li>
                        <li class="correct">E) I, II, III ve IV ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>1. Personel ve yolcu araçları için ayrı park yerleri düzenlenmelidir.<br>
                        2. Otobüsler, servis araçları ve taksiler için ayrı park yerleri düzenlenmelidir.<br>
                        3. Terminal binasının ön kısmında bomba yerleştirilmiş araçların doğuracağı tehlikeyi asgariye indirmek için 50 m mesafeye araç yaklaşması ve park etmelerine mani olacak fiziki düzenlemeler yapılmalıdır.<br>
                        4. Terminalin ön kısmına, sadece yolcu indirecek süreyle araç girişine müsaade edilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 84",
            "content": `
                <div class="question">
                    <h3>Soru 84:</h3>
                    <p>Havaalanında devriye atan özel güvenlik görevlisi yaptığı kontrol esnasında, üzerinde ruhsatsız ateşli bir silah bulunan kişiyi tespit etmesi durumunda ne yapmalıdır?</p>
                    <ul>
                        <li class="correct">A) Şahsı ve silahı muhafaza altına alıp genel kolluğa haber verir ✓</li>
                        <li>B) Ateşli silaha el koyarak şahsı serbest bırakır</li>
                        <li>C) Ateşli silahı sökerek parçalarına ayırır ve şahsa iade eder</li>
                        <li>D) Tespit edilen kişiyle ilgili bilgi kolluk kuvvetlerine iletir</li>
                        <li>E) Tespit edilen silahlı kişiyi tutuklar</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Ruhsatsız silah tespit edildiğinde şahıs ve silah muhafaza altına alınıp genel kolluğa haber verilmelidir.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 85",
            "content": `
                <div class="question">
                    <h3>Soru 85:</h3>
                    <p>İyi bir dinleyicinin özelliklerinden hangisi/hangileri değildir?</p>
                    <ul>
                        <li class="correct">A) Aynı anda birden fazla işi dikkatlice takip eder ✓</li>
                        <li>B) Yalnız III</li>
                        <li>C) II ve III</li>
                        <li>D) III ve IV</li>
                        <li>E) II ve IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İyi bir dinleyici aynı anda birden fazla işle ilgilenmez, dikkatini konuşmacıya verir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 86",
            "content": `
                <div class="question">
                    <h3>Soru 86:</h3>
                    <p>MSHGP'nin kaçıncı baskısı yürürlüktedir?</p>
                    <ul>
                        <li class="correct">A) 13 ✓</li>
                        <li>B) 11</li>
                        <li>C) 14</li>
                        <li>D) 10</li>
                        <li>E) 12</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP'nin (Milli Sivil Havacılık Güvenlik Programı) 13. baskısı yürürlüktedir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 87",
            "content": `
                <div class="question">
                    <h3>Soru 87:</h3>
                    <p>Aşağıdakilerden hangisi ulusal sivil havacılık otoritesinin havacılık güvenliği ile ilgili üstlendiği görevlerden değildir?</p>
                    <ul>
                        <li>A) Ulusal sivil havacılık güvenlik programının geliştirilmesi</li>
                        <li class="correct">B) Ulusal sivil havacılık güvenlik programının uygulanması ve güncellenmesinden havaalanlarında asayişin sağlanması ✓</li>
                        <li>C) Üyesi olunan uluslararası organizasyonlarla (ICAO, ECAC vb.) iletişim kurmak</li>
                        <li>D) Eylemlerin ilgili bakanlıklar, daireler ve diğer hükümet organları arasında koordineli olarak yürütülmesi</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanlarında asayişin sağlanması görevi ulusal sivil havacılık otoritesinin değil, kolluk kuvvetlerinin görevidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 88",
            "content": `
                <div class="question">
                    <h3>Soru 88:</h3>
                    <p>Havaya dönük bölümün güvenliği için alınacak tedbirler arasında aşağıdakilerden hangileri yer alır?</p>
                    <ul>
                        <li>A) 1, 3 ve 4</li>
                        <li>B) 1, 2 ve 3</li>
                        <li>C) 2 ve 3</li>
                        <li>D) 1 ve 4</li>
                        <li class="correct">E) 1, 2, 3 ve 4 ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>1- Bölge ve kritik yerler, gayri muayyen zamanlarda devriyelerle taranır, kapalı devre televizyon ile gözetlenerek güvenliği sağlanır<br>
                        2- Hava meydanlarında kişilere verilen giriş kartlarında, kart sahibinin fotoğrafı, kimliği, hava meydanındaki görevi, bu görevi gereği hava meydanı içinde girebileceği yerler ve kartın geçerlilik süresi belirtilir.<br>
                        3- Havaalanında uçakların bulunduğu bölgelerin güvenliği, uçuş pistleri, uçak taksi yolları ve apronların umuma açık olan sahalardan, fiziki engellerle ayrılması suretiyle sağlanır.<br>
                        4- Yolcuların uçağa binmeleri amacıyla kullanılan kapılar, yolcu bulunmadığı zamanlarda devamlı kilitli tutulabilecek yapıda olmalı, yetkililerce sürekli olarak kontrol edilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 89",
            "content": `
                <div class="question">
                    <h3>Soru 89:</h3>
                    <p>Hasar gördüğünde hava meydanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve hava meydanı içinde veya hava meydanıyla direkt bağlantılı bulunan tesis ve yerlere ne ad verilir?</p>
                    <ul>
                        <li class="correct">A) Hassas Tesis ✓</li>
                        <li>B) Hava Tarafı</li>
                        <li>C) Havaalanı Dışı İşlem Tesisleri</li>
                        <li>D) Kargo Alanı</li>
                        <li>E) Kontrol Merkezi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Hasar gördüğünde hava meydanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve hava meydanı içinde veya hava meydanıyla direkt bağlantılı bulunan tesis ve yerlere Hassas Tesis denir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 90",
            "content": `
                <div class="question">
                    <h3>Soru 90:</h3>
                    <p>Aşağıdakiler hangisi aktif sabotajlardan değildir?</p>
                    <ul>
                        <li>A) Biyolojik sabotaj</li>
                        <li>B) Yangın çıkarmak suretiyle sabotaj</li>
                        <li>C) Mekanik sabotaj</li>
                        <li class="correct">D) Fikir Sabotajı ✓</li>
                        <li>E) Patlayıcı maddelerle yapılan sabotaj</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Fikir sabotajı pasif sabotaj türüdür. Diğer seçeneklerdeki sabotaj türleri aktif sabotajlardır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 91",
            "content": `
                <div class="question">
                    <h3>Soru 91:</h3>
                    <p>Patlama olayı meydana geldiğinde güvenlik görevlisi ne yapmalıdır?</p>
                    <ul>
                        <li class="correct">A) İkinci bir patlama ihtimaline karşı bölgeyi boşaltır ✓</li>
                        <li>B) Patlamanın olduğu yere hemen gider</li>
                        <li>C) Delilleri toplamaya başlar</li>
                        <li>D) Basın açıklaması yapar</li>
                        <li>E) Olay yerini temizler</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlama olayında öncelikle ikinci bir patlama ihtimaline karşı bölge boşaltılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 92",
            "content": `
                <div class="question">
                    <h3>Soru 92:</h3>
                    <p>Havacılık güvenliği bilinci eğitiminin önemi nedir?</p>
                    <ul>
                        <li class="correct">A) Personelin güvenlik farkındalığını artırmak ✓</li>
                        <li>B) Personelin maaşını artırmak</li>
                        <li>C) Personelin iş yükünü azaltmak</li>
                        <li>D) Personelin çalışma saatlerini düzenlemek</li>
                        <li>E) Personelin izin günlerini belirlemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havacılık güvenliği bilinci eğitimi, personelin güvenlik konusundaki farkındalığını artırmak için verilir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 93",
            "content": `
                <div class="question">
                    <h3>Soru 93:</h3>
                    <p>Havalimanlarında ICAO'nun önerileri doğrultusunda gözlemler ve tavsiyelerde bulunmak üzere oluşturulan birim aşağıdakilerden hangisidir?</p>
                    <ul>
                        <li>A) EADUK</li>
                        <li>B) SHGM</li>
                        <li>C) MGK</li>
                        <li class="correct">D) EADB ✓</li>
                        <li>E) EGM</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanlarında ICAO'nun önerileri doğrultusunda gözlemler ve tavsiyelerde bulunmak üzere oluşturulan birim EADB'dir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 94",
            "content": `
                <div class="question">
                    <h3>Soru 94:</h3>
                    <p>Yolcu mülakatı sırasında uygun olmayan davranış hangisidir?</p>
                    <ul>
                        <li>A) Göz teması kurmak</li>
                        <li>B) Dikkatli dinlemek</li>
                        <li class="correct">C) Yolcuya karşı önyargılı olmak ✓</li>
                        <li>D) Profesyonel davranmak</li>
                        <li>E) Sakin olmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu mülakatı sırasında önyargılı olmak profesyonelliğe aykırıdır ve uygun değildir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 95",
            "content": `
                <div class="question">
                    <h3>Soru 95:</h3>
                    <p>Sınır dışı edilecek kişi (DEPO) kimdir?</p>
                    <ul>
                        <li class="correct">A) Ülkeye girişine izin verilmeyen ve geldiği ülkeye geri gönderilecek kişi ✓</li>
                        <li>B) Transit yolcu</li>
                        <li>C) Transfer yolcu</li>
                        <li>D) VIP yolcu</li>
                        <li>E) Uçuş mürettebatı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>DEPO, ülkeye girişine izin verilmeyen ve geldiği ülkeye geri gönderilecek kişidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 96",
            "content": `
                <div class="question">
                    <h3>Soru 96:</h3>
                    <p>Havayolu ile yasak madde taşınması ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?</p>
                    <ul>
                        <li>A) Yasak maddeler güvenlik kontrolünde tespit edilir</li>
                        <li>B) Yasak maddeler el konularak muhafaza altına alınır</li>
                        <li class="correct">C) Yasak maddeler bagaja yerleştirilerek taşınabilir ✓</li>
                        <li>D) Yasak maddeler genel kolluğa teslim edilir</li>
                        <li>E) Yasak maddeler tutanakla kayıt altına alınır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yasak maddelerin bagaja yerleştirilerek taşınması kesinlikle yasaktır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 97",
            "content": `
                <div class="question">
                    <h3>Soru 97:</h3>
                    <p>Yolcu mülakatı sırasında aşağıdaki davranışlardan hangisi uygun değildir?</p>
                    <ul>
                        <li>A) Yolcuyu dikkatle dinlemek</li>
                        <li>B) Gerekli bilgileri not almak</li>
                        <li class="correct">C) Yolcuya karşı agresif davranmak ✓</li>
                        <li>D) Profesyonel bir tutum sergilemek</li>
                        <li>E) Yolcuya saygılı davranmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu mülakatı sırasında agresif davranmak profesyonelliğe aykırıdır ve kesinlikle uygun değildir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 98",
            "content": `
                <div class="question">
                    <h3>Soru 98:</h3>
                    <p>Yaya devriye yolları ile çevre güvenlik çiti arasındaki mesafe en az kaç metre olmalıdır?</p>
                    <ul>
                        <li>A) 1 metre</li>
                        <li class="correct">B) 3 metre ✓</li>
                        <li>C) 5 metre</li>
                        <li>D) 7 metre</li>
                        <li>E) 10 metre</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yaya devriye yolları ile çevre güvenlik çiti arasındaki mesafe en az 3 metre olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 99",
            "content": `
                <div class="question">
                    <h3>Soru 99:</h3>
                    <p>Havalimanında silahlı bir kişiyle karşılaşıldığında ne yapılmalıdır?</p>
                    <ul>
                        <li class="correct">A) Derhal genel kolluğa haber verilmelidir ✓</li>
                        <li>B) Kişiyle tartışmaya girilmelidir</li>
                        <li>C) Silahı almaya çalışılmalıdır</li>
                        <li>D) Kişi terminal dışına çıkarılmalıdır</li>
                        <li>E) Kişi görmezden gelinmelidir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Silahlı bir kişiyle karşılaşıldığında derhal genel kolluğa haber verilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 100",
            "content": `
                <div class="question">
                    <h3>Soru 100:</h3>
                    <p>İyi bir dinleyicinin özellikleri arasında hangisi yer almaz?</p>
                    <ul>
                        <li>A) Konuşmacıya odaklanma</li>
                        <li>B) Göz teması kurma</li>
                        <li class="correct">C) Sürekli söz kesme ✓</li>
                        <li>D) Sabırlı olma</li>
                        <li>E) Empati kurma</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İyi bir dinleyici konuşmacının sözünü kesmez ve onu dikkatle dinler.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 101",
            "content": `
                <div class="question">
                    <h3>Soru 101:</h3>
                    <p>X-Ray cihazında bagajlar arasında bırakılması gereken minimum mesafe ne kadar olmalıdır?</p>
                    <ul>
                        <li>A) 25 cm</li>
                        <li class="correct">B) 50 cm ✓</li>
                        <li>C) 75 cm</li>
                        <li>D) 100 cm</li>
                        <li>E) 150 cm</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazında bagajlar arasında en az 50 cm mesafe bırakılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 102",
            "content": `
                <div class="question">
                    <h3>Soru 102:</h3>
                    <p>Kapı tipi metal dedektörlerinden geçişlerde kişiler arasında olması gereken minimum mesafe nedir?</p>
                    <ul>
                        <li>A) 50 cm</li>
                        <li class="correct">B) 1 metre ✓</li>
                        <li>C) 2 metre</li>
                        <li>D) 3 metre</li>
                        <li>E) 5 metre</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı tipi metal dedektörlerinden geçişlerde kişiler arasında en az 1 metre mesafe olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 103",
            "content": `
                <div class="question">
                    <h3>Soru 103:</h3>
                    <p>X-Ray cihazında organik maddeler hangi renkte görünür?</p>
                    <ul>
                        <li>A) Mavi</li>
                        <li>B) Yeşil</li>
                        <li class="correct">C) Turuncu ✓</li>
                        <li>D) Siyah</li>
                        <li>E) Beyaz</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazında organik maddeler turuncu ve tonlarında görünür.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 104",
            "content": `
                <div class="question">
                    <h3>Soru 104:</h3>
                    <p>X-Ray cihazında inorganik maddeler hangi renkte görünür?</p>
                    <ul>
                        <li class="correct">A) Mavi ✓</li>
                        <li>B) Turuncu</li>
                        <li>C) Yeşil</li>
                        <li>D) Kırmızı</li>
                        <li>E) Siyah</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazında inorganik maddeler mavi ve tonlarında görünür.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 105",
            "content": `
                <div class="question">
                    <h3>Soru 105:</h3>
                    <p>Dozimetre hangi amaçla kullanılır?</p>
                    <ul>
                        <li>A) Metal tespiti için</li>
                        <li>B) Patlayıcı tespiti için</li>
                        <li class="correct">C) Radyasyon ölçümü için ✓</li>
                        <li>D) Sıvı tespiti için</li>
                        <li>E) Ateşli silah tespiti için</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Dozimetre, X-Ray cihazı operatörlerinin maruz kaldığı radyasyon miktarını ölçmek için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 106",
            "content": `
                <div class="question">
                    <h3>Soru 106:</h3>
                    <p>CCTV sisteminin açılımı nedir?</p>
                    <ul>
                        <li class="correct">A) Kapalı Devre Televizyon Sistemi ✓</li>
                        <li>B) Canlı Kamera Takip Sistemi</li>
                        <li>C) Çoklu Kamera Kontrol Sistemi</li>
                        <li>D) Merkezi Güvenlik İzleme Sistemi</li>
                        <li>E) Dijital Kayıt Sistemi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>CCTV (Closed Circuit Television) Kapalı Devre Televizyon Sistemi anlamına gelir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 107",
            "content": `
                <div class="question">
                    <h3>Soru 107:</h3>
                    <p>X-Ray cihazında metal dedektöründen geçemeyen bir yolcunun üst araması kim tarafından yapılmalıdır?</p>
                    <ul>
                        <li>A) Herhangi bir güvenlik görevlisi</li>
                        <li class="correct">B) Aynı cinsiyetten güvenlik görevlisi ✓</li>
                        <li>C) X-Ray operatörü</li>
                        <li>D) Polis memuru</li>
                        <li>E) Terminal görevlisi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Üst araması mutlaka aynı cinsiyetten güvenlik görevlisi tarafından yapılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 108",
            "content": `
                <div class="question">
                    <h3>Soru 108:</h3>
                    <p>El tipi metal dedektörü ile kontrol edilecek bayan yolcu etek giyiyorsa, kontrol nasıl yapılmalıdır?</p>
                    <ul>
                        <li>A) Erkek görevli tarafından eteğe sürtülerek</li>
                        <li>B) Bayan görevli tarafından eteğe sürtülerek</li>
                        <li class="correct">C) Bayan görevli tarafından 7,5-8 cm mesafeden ✓</li>
                        <li>D) Erkek görevli tarafından 7,5-8 cm mesafeden</li>
                        <li>E) Kontrol yapılmaz</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Etekli bayan yolcuların kontrolü bayan görevli tarafından 7,5-8 cm mesafeden yapılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 109",
            "content": `
                <div class="question">
                    <h3>Soru 109:</h3>
                    <p>Bir kontrol noktasında X-Ray cihazında asgari kaç personel çalışması gerekir?</p>
                    <ul>
                        <li>A) 2 personel</li>
                        <li>B) 2 personel (1'i bayan)</li>
                        <li class="correct">C) 3 personel ✓</li>
                        <li>D) 4 personel</li>
                        <li>E) 5 personel</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bir kontrol noktasında X-Ray cihazında en az 3 personel çalışması gerekir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 110",
            "content": `
                <div class="question">
                    <h3>Soru 110:</h3>
                    <p>X-Ray cihazında bagajlar nasıl yerleştirilmelidir?</p>
                    <ul>
                        <li class="correct">A) Geniş yüzeyleri taşıma bandına paralel olacak şekilde ✓</li>
                        <li>B) Dar yüzeyleri taşıma bandına paralel olacak şekilde</li>
                        <li>C) Dikey olarak</li>
                        <li>D) Çapraz olarak</li>
                        <li>E) Yerleştirme şekli önemli değildir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazında bagajlar geniş yüzeyleri taşıma bandına paralel olacak şekilde yerleştirilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 111",
            "content": `
                <div class="question">
                    <h3>CCTV sisteminde aşağıdakilerden hangisi kullanılmaz?</h3>
                    <ul>
                        <li>A) Lens</li>
                        <li>B) Kamera</li>
                        <li>C) Kayıt Cihazı</li>
                        <li class="correct">D) Kart kontrollü geçiş sistemi ✓</li>
                        <li>E) Monitör/ekran</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>CCTV (Kapalı Devre Televizyon) sisteminde lens, kamera, kayıt cihazı ve monitör kullanılır. Kart kontrollü geçiş sistemi farklı bir güvenlik sistemidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 112",
            "content": `
                <div class="question">
                    <h3>Temel Sivil Havacılık Güvenliği Eğitiminin tazeleme eğitim süresi kaç yılda birdir?</h3>
                    <ul>
                        <li>A) 3 yıl, 2 ders saati</li>
                        <li>B) 3 yıl, 4 ders saati</li>
                        <li>C) 2 yıl, 4 ders saati</li>
                        <li class="correct">D) 2 yıl, 8 ders saati ✓</li>
                        <li>E) 3 yıl, 8 ders saati</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Temel Sivil Havacılık Güvenliği Eğitiminin tazeleme eğitimi 2 yılda bir, 8 ders saati olarak yapılmaktadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 113",
            "content": `
                <div class="question">
                    <h3>Yolcunun dokümanları, bagajı, giyim tarzı, hareketleri, seyahat gerekçesi gibi unsurlar aşağıdakilerden hangisi olarak ele alınmaktadır?</h3>
                    <ul>
                        <li>A) Yolculuk bilgisi</li>
                        <li>B) Karakteristik özellik</li>
                        <li>C) Yaşam tarzı</li>
                        <li>D) Kişilik analizi</li>
                        <li class="correct">E) Yolcu mülakatı ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu unsurlar yolcu mülakatı kapsamında değerlendirilir ve güvenlik açısından önemli bilgiler sağlar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 114",
            "content": `
                <div class="question">
                    <h3>Yaya devriye yolu ile çevre tel örgü arasındaki mesafe en az kaç metre olmalıdır?</h3>
                    <ul>
                        <li class="correct">A) 10 ✓</li>
                        <li>B) 12,5</li>
                        <li>C) 5</li>
                        <li>D) 15</li>
                        <li>E) 7,5</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik standartlarına göre yaya devriye yolu ile çevre tel örgü arasındaki mesafe en az 10 metre olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 115",
            "content": `
                <div class="question">
                    <h3>Genel olarak aşağıdakilerden hangisi şüpheli yolcunun davranış özelliklerinden değildir?</h3>
                    <ul>
                        <li class="correct">A) Tarama görevlisinden bakışlarını kaçırmaz ✓</li>
                        <li>B) Sıradaki belirli bir grubun arasına karışmaya çalışır</li>
                        <li>C) Sırada iken tarama görevlilerini izlemeye çalışır</li>
                        <li>D) Yürüyüşünde topallama, hızlı yürüme gibi açık anormallikler görünür</li>
                        <li>E) Eli ile dışarıdan ceplerini yoklar, kontrol eder</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şüpheli yolcular genellikle görevlilerden bakışlarını kaçırır. Görevlilerle göz teması kurmaktan kaçınmaları tipik bir şüpheli davranışıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 116",
            "content": `
                <div class="question">
                    <h3>Havaalanında devriye atan özel güvenlik görevlisi yaptığı kontrol esnasında, üzerinde ruhsatsız ateşli bir silah bulunan kişiyi tespit etmesi durumunda ne yapmalıdır?</h3>
                    <ul>
                        <li class="correct">A) Şahsı ve silahı muhafaza altına alıp genel kolluğa haber verir ✓</li>
                        <li>B) Ateşli silaha el koyarak şahsı serbest bırakır</li>
                        <li>C) Ateşli silahı sökerek parçalarına ayırır ve şahsa iade eder</li>
                        <li>D) Tespit edilen kişiyle ilgili bilgi kolluk kuvvetlerine iletir</li>
                        <li>E) Tespit edilen silahlı kişiyi tutuklar</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik görevlisi, ruhsatsız silah tespit ettiğinde şahsı ve silahı muhafaza altına alarak genel kolluğa haber vermelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 117",
            "content": `
                <div class="question">
                    <h3>I) Civalı termometre II) 2 kg kuru buz III) Askeri mühimmat IV) Lehim makinesi Yukarıdaki maddelerin hangisinin/hangilerinin taşınmasında pilotun onayı gerekir?</h3>
                    <ul>
                        <li>A) II ve III</li>
                        <li class="correct">B) Yalnız III ✓</li>
                        <li>C) Yalnız I</li>
                        <li>D) III ve IV</li>
                        <li>E) Yalnız IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Askeri mühimmatın taşınması özel izin gerektirir ve pilotun onayı şarttır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 118",
            "content": `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi beden dilinin öğelerinden değildir?</h3>
                    <ul>
                        <li>A) Gözler</li>
                        <li>B) Jest ve mimik</li>
                        <li class="correct">C) Ses ✓</li>
                        <li>D) Baş</li>
                        <li>E) Duruş</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Ses, sözel iletişimin bir parçasıdır ve beden dilinin öğelerinden değildir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 119",
            "content": `
                <div class="question">
                    <h3>TPSS Sertifika Sınavı kaç yılda bir yapılır?</h3>
                    <ul>
                        <li>A) 1 yıl</li>
                        <li>B) 2 yıl</li>
                        <li class="correct">C) 3 yıl ✓</li>
                        <li>D) 4 yıl</li>
                        <li>E) 5 yıl</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>TPSS (Temel Patlayıcı Sertifika Sınavı) 3 yılda bir yapılmaktadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 120",
            "content": `
                <div class="question">
                    <h3>EDS neyi ifade eder?</h3>
                    <ul>
                        <li>A) Elektronik Dedektör Sistemi</li>
                        <li class="correct">B) Patlayıcı Tespit Sistemi ✓</li>
                        <li>C) Emniyet Denetim Sistemi</li>
                        <li>D) El Dedektörü Sensörü</li>
                        <li>E) Engelleyici Denetim Süreci</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>EDS (Explosive Detection System), Patlayıcı Tespit Sistemi anlamına gelir ve havalimanı güvenliğinde kullanılan önemli sistemlerden biridir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 121,
            title: "Soru 121",
            content: `
                <div class="question">
                    <h3>Şahsın botunun tabanında tespit edilen bıçak bariz tehdittir.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Duruma göre değişir</li>
                        <li>D) Yetkili karar verir</li>
                        <li>E) Tehdit sayılmaz</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Gizlenmiş kesici/delici aletler her zaman bariz tehdit olarak değerlendirilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 122,
            title: "Soru 122",
            content: `
                <div class="question">
                    <h3>X-ray cihazı içerisinden çanta geçmediği sürece X-ışını üretmez.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Sürekli üretir</li>
                        <li>D) Manuel ayarlanır</li>
                        <li>E) Operatör karar verir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazları güvenlik amacıyla sadece tarama sırasında X-ışını üretir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 123,
            title: "Soru 123",
            content: `
                <div class="question">
                    <h3>Hava meydanlarında uygulanan güvenlik tedbirlerinin ulusal bazdaki genel dökümanı hangisidir?</h3>
                    <ul>
                        <li>A) Sivil Havacılık Güvenlik Kılavuzu</li>
                        <li class="correct">B) Milli Sivil Havacılık Güvenlik Programı (MSHGP) ✓</li>
                        <li>C) Ulusal Hava Güvenlik Talimatı</li>
                        <li>D) Havacılık Emniyet El Kitabı</li>
                        <li>E) Güvenlik Denetleme Yönergesi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP, havalimanı güvenlik tedbirlerinin ulusal düzeydeki temel dökümanıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 124,
            title: "Soru 124",
            content: `
                <div class="question">
                    <h3>ÖGG eşgal tarifinde hangisi yoktur?</h3>
                    <ul>
                        <li>A) Boy</li>
                        <li>B) Kilo</li>
                        <li>C) Saç rengi</li>
                        <li class="correct">D) Psikolojisi ✓</li>
                        <li>E) Göz rengi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Eşgal tarifinde fiziksel özellikler yer alır, psikolojik durum eşgal tarifinde yer almaz.</p>
                    </div>
                </div>
            `
        },
        {
            id: 125,
            title: "Soru 125",
            content: `
                <div class="question">
                    <h3>ETMD vücudun herhangi bir yerindeki metal protezi tespit edebilir.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Sadece ayakta tespit yapar</li>
                        <li>D) Belirli açılarda çalışır</li>
                        <li>E) Manuel ayarlanır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>El Tipi Metal Dedektörü (ETMD) vücudun herhangi bir yerindeki metal protezi tespit edebilme özelliğine sahiptir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 126,
            title: "Soru 126",
            content: `
                <div class="question">
                    <h3>İnorganik Stripping tuşunun fonksiyonu nedir?</h3>
                    <ul>
                        <li>A) Tüm nesneleri görüntüler</li>
                        <li class="correct">B) Ekranda sadece organik maddeler görüntülenir ✓</li>
                        <li>C) Renk ayrımı yapmaz</li>
                        <li>D) X-ray gücünü artırır</li>
                        <li>E) Metal yoğunluğunu gösterir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İnorganik Stripping tuşu, X-ray görüntüsünde sadece organik maddelerin görüntülenmesini sağlar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 127,
            title: "Soru 127",
            content: `
                <div class="question">
                    <h3>El Tipi Metal Dedektörünün (ETMD) görevi nedir?</h3>
                    <ul>
                        <li>A) Uzaktan tarama yapar</li>
                        <li>B) Tüm alanı tarar</li>
                        <li class="correct">C) Lokal (bölge) taraması yapar ✓</li>
                        <li>D) Sadece metal olmayan maddeleri tespit eder</li>
                        <li>E) Hacimli nesneleri analiz eder</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>ETMD, belirli bir bölgenin detaylı metal taramasını yapmak için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 128,
            title: "Soru 128",
            content: `
                <div class="question">
                    <h3>X-ray operatörünün ekranda bariz tehlikeli cisim gördüğünde yapması gereken nedir?</h3>
                    <ul>
                        <li>A) Cismi hemen el ile çıkarmalı</li>
                        <li>B) Güvenlik personelini çağırmalı</li>
                        <li class="correct">C) Derhal stop tuşuna basarak konveyör bandı durdurmalı, çantayı cihaz tünelinin içinde bırakmalı ve nokta amirine bilgi vermelidir ✓</li>
                        <li>D) Cismi detaylı incelemeli</li>
                        <li>E) Ekran görüntüsünü kaydedip rapor tutmalı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Tehlikeli cisim görüldüğünde güvenlik prosedürü gereği band durdurulmalı ve amir bilgilendirilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 129,
            title: "Soru 129",
            content: `
                <div class="question">
                    <h3>Havacılık güvenliği düşünüldüğünde kargolara uygulanan tedbirler ya da kargoların uçaklara denetimli yüklenmesinin amacı nedir?</h3>
                    <ul>
                        <li>A) Hızlı yükleme sağlamak</li>
                        <li class="correct">B) Caydırıcılık ✓</li>
                        <li>C) Gümrük işlemlerini kolaylaştırmak</li>
                        <li>D) Kargo taşıma sürecini hızlandırmak</li>
                        <li>E) Yolcu bagajlarını korumak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kargo güvenlik tedbirleri, yasadışı eylemleri caydırmak ve önlemek amacıyla uygulanır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 130,
            title: "Soru 130",
            content: `
                <div class="question">
                    <h3>Bir ülkeye yetkili merciler tarafından reddedilen kişilere ne ad verilir?</h3>
                    <ul>
                        <li>A) Deporte yolcu</li>
                        <li>B) Sınır dışı yolcu</li>
                        <li>C) Transit yolcu</li>
                        <li class="correct">D) İnadyolcu (Kabul edilemez yolcu) ✓</li>
                        <li>E) Refakatsiz yolcu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Ülkeye girişi yetkili merciler tarafından reddedilen kişilere inadyolcu (kabul edilemez yolcu) denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 131,
            title: "Soru 131",
            content: `
                <div class="question">
                    <h3>Sınır dışı edilen yolculara ne ad verilir?</h3>
                    <ul>
                        <li class="correct">A) Deporte yolcu ✓</li>
                        <li>B) İnadyolcu</li>
                        <li>C) Geri gönderilen yolcu</li>
                        <li>D) Kaçak yolcu</li>
                        <li>E) Vize ihlali yolcusu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sınır dışı edilen yolculara deporte yolcu denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 132,
            title: "Soru 132",
            content: `
                <div class="question">
                    <h3>Kuryeler kargolar gibi X-ray cihazından geçer.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Sadece elle kontrol edilir</li>
                        <li>D) Operatör kararına bağlıdır</li>
                        <li>E) Gümrük memuru kontrol eder</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik prosedürleri gereği kuryeler de kargolar gibi X-ray kontrolünden geçmek zorundadır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 133,
            title: "Soru 133",
            content: `
                <div class="question">
                    <h3>MSHGP neyi ifade eder?</h3>
                    <ul>
                        <li class="correct">A) Milli Sivil Havacılık Güvenlik Programı ✓</li>
                        <li>B) Merkez Sivil Havacılık Güvenlik Planı</li>
                        <li>C) Modern Sivil Havacılık Güvenlik Protokolü</li>
                        <li>D) Mobil Sivil Havacılık Güvenlik Projesi</li>
                        <li>E) Milli Sivil Havacılık Güvenliği Politikası</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP, Milli Sivil Havacılık Güvenlik Programı'nın kısaltmasıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 134,
            title: "Soru 134",
            content: `
                <div class="question">
                    <h3>Tehlikeli maddeler kaç sınıf altında toplanmıştır?</h3>
                    <ul>
                        <li>A) 6</li>
                        <li>B) 7</li>
                        <li>C) 8</li>
                        <li class="correct">D) 9 ✓</li>
                        <li>E) 10</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Tehlikeli maddeler uluslararası standartlara göre 9 sınıf altında kategorize edilmiştir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 135,
            title: "Soru 135",
            content: `
                <div class="question">
                    <h3>Yolcuların son kontrol edildiği yer ile uçak arasında kalan kısma ne denir?</h3>
                    <ul>
                        <li>A) Gümrüksüz alan</li>
                        <li>B) Geçici bekleme bölgesi</li>
                        <li>C) Terminal çıkış noktası</li>
                        <li class="correct">D) Güvenli tahditli alan ✓</li>
                        <li>E) Giriş-çıkış kontrol noktası</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Son güvenlik kontrolü ile uçak arasında kalan bölgeye güvenli tahditli alan denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 136,
            title: "Soru 136",
            content: `
                <div class="question">
                    <h3>Hangisi biyometrik sistemlerin kapsamına girmez?</h3>
                    <ul>
                        <li>A) Parmak izi taraması</li>
                        <li>B) Retina taraması</li>
                        <li>C) Yüz tanıma sistemi</li>
                        <li class="correct">D) Kalıntı izleme ✓</li>
                        <li>E) Ses tanıma sistemi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kalıntı izleme, biyometrik sistemlerin kapsamına girmez. Biyometrik sistemler kişiye özgü fiziksel veya davranışsal özellikleri kullanır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 137,
            title: "Soru 137",
            content: `
                <div class="question">
                    <h3>Yolcu bagajındaki silah mermisi bariz tehdittir.</h3>
                    <ul>
                        <li class="correct">A) Yanlış (Potansiyel tehdittir) ✓</li>
                        <li>B) Doğru</li>
                        <li>C) Hiçbir zaman tehdit değildir</li>
                        <li>D) Bagajın boyutuna bağlıdır</li>
                        <li>E) Gümrük yetkilileri karar verir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bagajda bulunan mermi potansiyel tehdit olarak değerlendirilir, bariz tehdit kategorisinde değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 138,
            title: "Soru 138",
            content: `
                <div class="question">
                    <h3>İz dedektörlerinin kullanım alanı aşağıdakilerden hangisidir?</h3>
                    <ul>
                        <li>A) Kargo paketlerinin kontrolü</li>
                        <li>B) Silah tespitinde kullanılır</li>
                        <li class="correct">C) Patlayıcı veya uyuşturucuların tespit edilme yöntemlerinde kullanılır ✓</li>
                        <li>D) X-ray cihazlarının performansını artırır</li>
                        <li>E) Kimyasal madde ayrıştırmada kullanılır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İz dedektörleri, patlayıcı ve uyuşturucu maddelerin tespit edilmesinde kullanılan özel cihazlardır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 139,
            title: "Soru 139",
            content: `
                <div class="question">
                    <h3>İki monitörlü Line-Scan Astrophysics X-ray cihazı panelinde yer alan Darker ve Lighter tuşları her iki ekranda da geçerlidir.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Sadece bir ekranda geçerlidir</li>
                        <li>D) Operatör seçimine bağlıdır</li>
                        <li>E) Ekran parlaklığını değiştirmez</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Darker ve Lighter tuşları her iki monitörün parlaklık ayarını da kontrol eder.</p>
                    </div>
                </div>
            `
        },
        {
            id: 140,
            title: "Soru 140",
            content: `
                <div class="question">
                    <h3>ÖGG, KTMD'lerin hassasiyet ayarlarını yapmakla sorumludur.</h3>
                    <ul>
                        <li>A) Doğru</li>
                        <li class="correct">B) Yanlış ✓</li>
                        <li>C) Kısmen doğrudur</li>
                        <li>D) KTMD'ler ayar gerektirmez</li>
                        <li>E) Sadece yetkili mühendisler ayar yapabilir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı Tipi Metal Dedektörlerinin (KTMD) hassasiyet ayarları sadece yetkili teknik personel tarafından yapılabilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 141,
            title: "Soru 141",
            content: `
                <div class="question">
                    <h3>KTMD ile bir sonraki geçiş yapacak kişi arasındaki mesafe ne kadar olmalıdır?</h3>
                    <ul>
                        <li>A) 50 cm</li>
                        <li>B) 75 cm</li>
                        <li class="correct">C) 100 cm ✓</li>
                        <li>D) 150 cm</li>
                        <li>E) 200 cm</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik standartlarına göre KTMD ile bir sonraki geçiş yapacak kişi arasında en az 100 cm mesafe olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 142,
            title: "Soru 142",
            content: `
                <div class="question">
                    <h3>Hangisi film dozimetresi kullanımında dikkat edilecek hususlardan biridir?</h3>
                    <ul>
                        <li>A) Herhangi biri tarafından kullanılabilir</li>
                        <li class="correct">B) Film dozimetresi, sadece ait olduğu kişi tarafından kullanılmalı, başka birine ödünç verilmemelidir ✓</li>
                        <li>C) Çalışma alanında bırakılabilir</li>
                        <li>D) Günlük olarak temizlenmelidir</li>
                        <li>E) Sadece X-ray operatörleri kullanır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Film dozimetresi kişiye özeldir ve başkasına ödünç verilmemelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 143,
            title: "Soru 143",
            content: `
                <div class="question">
                    <h3>Kontrol noktası amiri kimdir?</h3>
                    <ul>
                        <li>A) Güvenlik personeli</li>
                        <li>B) ÖGG yöneticisi</li>
                        <li class="correct">C) Noktada görevlendirilen Emniyet Şube Müdürlüğü görevlisi ✓</li>
                        <li>D) Havalimanı güvenlik müdürü</li>
                        <li>E) Havalimanı işletme müdürü</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kontrol noktası amiri, noktada görevlendirilen Emniyet Şube Müdürlüğü görevlisidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 144,
            title: "Soru 144",
            content: `
                <div class="question">
                    <h3>KTMD hangisine sinyal vermez?</h3>
                    <ul>
                        <li>A) Metal eşyalar</li>
                        <li>B) Silah</li>
                        <li>C) Kemer tokası</li>
                        <li>D) Telefon</li>
                        <li class="correct">E) Patlayıcı ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı Tipi Metal Dedektörü (KTMD) sadece metal nesnelere tepki verir, patlayıcı maddelere sinyal vermez.</p>
                    </div>
                </div>
            `
        },
        {
            id: 145,
            title: "Soru 145",
            content: `
                <div class="question">
                    <h3>Hangisi bombanın temel unsurudur?</h3>
                    <ul>
                        <li>A) Barut</li>
                        <li>B) Elektrik devresi</li>
                        <li>C) Zamanlayıcı</li>
                        <li class="correct">D) Patlayıcı madde ✓</li>
                        <li>E) Manyetik alan</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bombanın en temel unsuru patlayıcı maddedir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 146,
            title: "Soru 146",
            content: `
                <div class="question">
                    <h3>Hava meydanında pistleri, taksi yollarını, apronları, bunlara bitişik sahaları ve belirli durumlarda doğrudan uçuş faaliyeti amacıyla kullanılan bina ve yapılar veya bunların bazı kısımlarını içeren, girişin kontrollü olduğu yerlere ne ad verilir?</h3>
                    <ul>
                        <li>A) Terminal Alanı</li>
                        <li>B) Gümrüksüz Bölge</li>
                        <li>C) Yolcu Bekleme Alanı</li>
                        <li class="correct">D) Hava Tarafı ✓</li>
                        <li>E) Giriş Çıkış Noktası</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu tanım hava tarafını ifade eder ve havalimanının uçuş operasyonlarıyla ilgili kısımlarını kapsar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 147,
            title: "Soru 147",
            content: `
                <div class="question">
                    <h3>Türkiye, Şikago Sözleşmesi'ni 1944 yılında imzalamıştır.</h3>
                    <ul>
                        <li class="correct">A) Yanlış (1945 yılında imzalamıştır) ✓</li>
                        <li>B) Doğru</li>
                        <li>C) 1943 yılında imzalanmıştır</li>
                        <li>D) 1950 yılında imzalanmıştır</li>
                        <li>E) 1938 yılında imzalanmıştır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Türkiye, Şikago Sözleşmesi'ni 1945 yılında imzalamıştır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 148,
            title: "Soru 148",
            content: `
                <div class="question">
                    <h3>Sivil Havacılık Güvenliği ile ilgili ulusal organizasyon hiyerarşisi doğru sıralaması hangisidir?</h3>
                    <ul>
                        <li>A) MİA - EADUK - MSHGK - EADB - Güvenlik Komisyonu</li>
                        <li class="correct">B) MSHGK - EADUK - MİA - Güvenlik Komisyonu - EADB ✓</li>
                        <li>C) MİA - Güvenlik Komisyonu - MSHGK - EADB - EADUK</li>
                        <li>D) EADB - MİA - EADUK - Güvenlik Komisyonu - MSHGK</li>
                        <li>E) Güvenlik Komisyonu - MİA - MSHGK - EADUK – EADB</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sivil Havacılık Güvenliği organizasyon hiyerarşisinde MSHGK en üst düzey karar organıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 149,
            title: "Soru 149",
            content: `
                <div class="question">
                    <h3>Diplomatik kuryelerin taşınması mülki idare amirliklerince izin verilen görevliler tarafından yerine getirilir.</h3>
                    <ul>
                        <li>A) Doğru</li>
                        <li class="correct">B) Yanlış ✓</li>
                        <li>C) Yalnızca bakanlık onayıyla</li>
                        <li>D) Emniyet görevlileri taşır</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Diplomatik kuryeler özel statüye sahiptir ve taşınmaları diplomatik prosedürlere tabidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 150,
            title: "Soru 150",
            content: `
                <div class="question">
                    <h3>İz dedektöründe örnekleme hangi yöntemle gerçekleşir?</h3>
                    <ul>
                        <li>A) Kimyasal analiz</li>
                        <li class="correct">B) Örnekleme ✓</li>
                        <li>C) Radyolojik tarama</li>
                        <li>D) Manyetik algılama</li>
                        <li>E) Ultrasonik tarama</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İz dedektöründe örnekleme yöntemi kullanılarak madde tespiti yapılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 151,
            title: "Soru 151",
            content: `
                <div class="question">
                    <h3>Hangisi terörist saldırının safhalarından değildir?</h3>
                    <ul>
                        <li>A) Keşif</li>
                        <li>B) Planlama</li>
                        <li class="correct">C) Tehdit ✓</li>
                        <li>D) Saldırı</li>
                        <li>E) Kaçış</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Terörist saldırının safhaları: keşif, planlama, saldırı ve kaçıştır. Tehdit bir safha değil, genel bir durumdur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 152,
            title: "Soru 152",
            content: `
                <div class="question">
                    <h3>BHS'de taşınan bagajların %100 bagaj tarama sisteminde normalde uğramaları gereken cihazlara uğramak yerine aynı seviyede veya farklı seviyede diğer cihazlara yönlendirilmesini sağlayan işletime ne ad verilir?</h3>
                    <ul>
                        <li>A) Geri dönüş</li>
                        <li>B) Yan yönlendirme</li>
                        <li>C) Paralel tarama</li>
                        <li class="correct">D) Bypass ✓</li>
                        <li>E) Alternatif hat</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu işlem bypass olarak adlandırılır ve bagajların alternatif tarama cihazlarına yönlendirilmesini ifade eder.</p>
                    </div>
                </div>
            `
        },
        {
            id: 153,
            title: "Soru 153",
            content: `
                <div class="question">
                    <h3>Hasar gördüğünde hava meydanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve hava meydanı içinde veya hava meydanıyla doğrudan bağlantılı bulunan yerlere ne ad verilir?</h3>
                    <ul>
                        <li>A) Terminal</li>
                        <li>B) Yükleme alanı</li>
                        <li class="correct">C) Hassas tesis ✓</li>
                        <li>D) Sınır bölgesi</li>
                        <li>E) Güvenlik noktaları</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu tanım hassas tesisleri ifade eder ve havalimanının kritik operasyonel alanlarını kapsar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 154,
            title: "Soru 154",
            content: `
                <div class="question">
                    <h3>Yolcu valizindeki 5 lt'lik kolonya bariz tehdittir.</h3>
                    <ul>
                        <li class="correct">A) Yanlış (potansiyel tehdit olabilir) ✓</li>
                        <li>B) Doğru</li>
                        <li>C) Sadece yurt içinde yasaktır</li>
                        <li>D) Havayolu şirketine bağlıdır</li>
                        <li>E) Bagaj içinde serbesttir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>5 litre kolonya bariz tehdit değil, potansiyel tehdit olarak değerlendirilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 155,
            title: "Soru 155",
            content: `
                <div class="question">
                    <h3>A/T kartında aşağıdakilerden hangisi bulunmaz?</h3>
                    <ul>
                        <li>A) Fotoğraf</li>
                        <li>B) Ad-soyad</li>
                        <li>C) Kimlik numarası</li>
                        <li class="correct">D) Doğum tarihi ✓</li>
                        <li>E) Yetki seviyesi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Apron/Terminal kartında doğum tarihi bilgisi yer almaz.</p>
                    </div>
                </div>
            `
        },
        {
            id: 156,
            title: "Soru 156",
            content: `
                <div class="question">
                    <h3>Aramayı reddeden yolcuya karşı izlenecek tutum nedir?</h3>
                    <ul>
                        <li>A) Sadece uyarılır</li>
                        <li>B) Bir sonraki uçuşa yönlendirilir</li>
                        <li class="correct">C) Aramayı reddeden yolcu içeriye alınmaz ✓</li>
                        <li>D) Emniyet görevlisine bildirildiğinde içeri alınır</li>
                        <li>E) El bagajına izin verilir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik prosedürleri gereği aramayı reddeden yolcunun içeri girmesine izin verilmez.</p>
                    </div>
                </div>
            `
        },
        {
            id: 157,
            title: "Soru 157",
            content: `
                <div class="question">
                    <h3>Hangi durumda makas tehdit olarak algılanır?</h3>
                    <ul>
                        <li>A) El bagajında</li>
                        <li>B) Ceplerde</li>
                        <li class="correct">C) Bir yolcunun botunda saklı ✓</li>
                        <li>D) Bavulun dış ceplerinde</li>
                        <li>E) X-ray cihaza takıldığında</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Gizlenmiş kesici aletler (makas gibi) bariz tehdit olarak değerlendirilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 158,
            title: "Soru 158",
            content: `
                <div class="question">
                    <h3>X-ray operatörü görüntülerini kaç şekilde yorumlar?</h3>
                    <ul>
                        <li class="correct">A) Bariz tehdit, muhtemel tehdit, hiç tehdit unsuru olmayan ✓</li>
                        <li>B) Bariz tehdit ve muhtemel tehdit</li>
                        <li>C) Muhtemel tehdit ve hiç tehdit olmayan</li>
                        <li>D) Sadece bariz tehdit</li>
                        <li>E) Sadece muhtemel tehdit</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray operatörü görüntüleri üç kategoride yorumlar: bariz tehdit, muhtemel tehdit ve tehdit unsuru olmayan.</p>
                    </div>
                </div>
            `
        },
        {
            id: 159,
            title: "Soru 159",
            content: `
                <div class="question">
                    <h3>Yasadışı eylemler için hangisi doğru değildir?</h3>
                    <ul>
                        <li class="correct">A) Uçağın uçuş anında emniyet kemerini takmamak ✓</li>
                        <li>B) Uyarılara aldırmamak</li>
                        <li>C) Sigara içmek</li>
                        <li>D) Bağımlılık yapıcı maddeler kullanmak</li>
                        <li>E) Kontrol noktalarından geçerken alkol almak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Emniyet kemeri takmamak bir güvenlik ihlalidir ancak yasadışı eylem kategorisinde değerlendirilmez.</p>
                    </div>
                </div>
            `
        },
        {
            id: 160,
            title: "Soru 160",
            content: `
                <div class="question">
                    <h3>Hangisi kartlı geçiş sisteminin bileşenlerinden değildir?</h3>
                    <ul>
                        <li>A) Kart okuyucu</li>
                        <li>B) Geçiş kontrol ünitesi</li>
                        <li class="correct">C) Araç kapanı ✓</li>
                        <li>D) Elektronik bileklik</li>
                        <li>E) Merkezi kontrol paneli</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Araç kapanı, kartlı geçiş sisteminin bir bileşeni değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 161,
            title: "Soru 161",
            content: `
                <div class="question">
                    <h3>MSGP 6. Ek hangisidir?</h3>
                    <ul>
                        <li>A) Güvenlik personelinin eğitim programı</li>
                        <li class="correct">B) Yasadışı müdahalelere karşı yapılacak olan işlemler yönergesi ✓</li>
                        <li>C) Havaalanı güvenlik yönetmeliği</li>
                        <li>D) X-ray cihazları</li>
                        <li>E) Bomba tespiti prosedürleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSGP 6. Ek, yasadışı müdahalelere karşı yapılacak olan işlemler yönergesini içerir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 162,
            title: "Soru 162",
            content: `
                <div class="question">
                    <h3>Hangisi patlayıcı maddeyi harekete geçirecek enerji kaynağıdır?</h3>
                    <ul>
                        <li>A) Elektrik akımı</li>
                        <li>B) Su</li>
                        <li class="correct">C) Pil ✓</li>
                        <li>D) Rüzgar</li>
                        <li>E) Mekanik hareket</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlayıcı düzeneklerde pil, elektrik enerjisi sağlayarak patlayıcı maddeyi harekete geçirebilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 163,
            title: "Soru 163",
            content: `
                <div class="question">
                    <h3>Güvenlik görevlisi hangi alanlarda kartını kullanabilir?</h3>
                    <ul>
                        <li>A) Görev saatinden bağımsız her alanda</li>
                        <li>B) Sadece havaalanı dışındaki alanlarda</li>
                        <li class="correct">C) Görev saati ve görev alanı içerisinde ✓</li>
                        <li>D) Evinde</li>
                        <li>E) Diğer havaalanlarında</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik görevlisi kartını sadece görev saati ve görev alanı içerisinde kullanabilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 164,
            title: "Soru 164",
            content: `
                <div class="question">
                    <h3>Kapı dedektörü içinden geçen her metali algılamaz.</h3>
                    <ul>
                        <li>A) Doğru</li>
                        <li class="correct">B) Yanlış ✓</li>
                        <li>C) Sadece büyük metal parçaları algılar</li>
                        <li>D) Yalnızca elektrikli metaller algılar</li>
                        <li>E) Sadece büyük metal cisimleri algılar</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı dedektörü içinden geçen tüm metalleri algılar, hassasiyet ayarına göre çalışır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 165,
            title: "Soru 165",
            content: `
                <div class="question">
                    <h3>Sahipsiz bagajların taşınması ile ilgili; bir havayolu şirketi aldığı eşliksiz bagajın tarandığına dair yazılı bir kayıt talep edebilir.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Sadece büyük bagajlar için geçerlidir</li>
                        <li>D) Sadece tehlikeli bagajlar için geçerlidir</li>
                        <li>E) Yalnızca özel bagajlar için geçerlidir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havayolu şirketleri güvenlik prosedürleri gereği eşliksiz bagajların taranma kaydını talep edebilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 166,
            title: "Soru 166",
            content: `
                <div class="question">
                    <h3>X-ray cihazına sığmayacak şekilde büyük olan bagajların kontrolü, el ile yapılır.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Yalnızca özel durumlarda yapılır</li>
                        <li>D) Sadece tehlikeli bagajlar için yapılır</li>
                        <li>E) X-ray cihazına sığan her bagajın kontrolü elle yapılır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazına sığmayan büyük bagajların kontrolü el ile yapılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 167,
            title: "Soru 167",
            content: `
                <div class="question">
                    <h3>Hangisi 2690 sayılı yasaya göre yayınlanmış olan X-ışınlı paket kontrol cihazları kullanım talimatlarında yer alan hususlar değildir?</h3>
                    <ul>
                        <li>A) Şüpheli durumlarda gerekli önlemler alınmalı</li>
                        <li class="correct">B) 177 TAEK acil durum hattı aranmalıdır ✓</li>
                        <li>C) Cihaz bakım talimatlarına uyulmalıdır</li>
                        <li>D) Cihazın doğru şekilde kullanımı sağlanmalıdır</li>
                        <li>E) Personel güvenliği ön planda tutulmalıdır</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>177 TAEK acil durum hattı aranması, X-ışınlı paket kontrol cihazları kullanım talimatlarında yer almaz.</p>
                    </div>
                </div>
            `
        },
        {
            id: 168,
            title: "Soru 168",
            content: `
                <div class="question">
                    <h3>Penetrasyon neyi ifade eder?</h3>
                    <ul>
                        <li>A) X-ışınlarının numune üzerinde bıraktığı iz</li>
                        <li class="correct">B) X-ışınlarının nüfuz etme oranı ✓</li>
                        <li>C) X-ışınlarının cismin dış yüzeyine etki etmesi</li>
                        <li>D) Röntgen ışınlarının vücutta iz bırakma durumu</li>
                        <li>E) X-ışının gücünü</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Penetrasyon, X-ışınlarının maddeye nüfuz etme oranını ifade eder.</p>
                    </div>
                </div>
            `
        },
        {
            id: 169,
            title: "Soru 169",
            content: `
                <div class="question">
                    <h3>Rezülasyon ne anlama gelir?</h3>
                    <ul>
                        <li>A) X-ray cihazındaki ekrandaki görüntünün kontrastı</li>
                        <li class="correct">B) X-ray cihazında ekrandaki görüntünün çözünürlüğü ✓</li>
                        <li>C) X-ray cihazındaki ışık yoğunluğu</li>
                        <li>D) X-ray cihazındaki renk ayarları</li>
                        <li>E) X-ray cihazındaki ses ayarları</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Rezülasyon, X-ray cihazında ekrandaki görüntünün çözünürlüğünü ifade eder.</p>
                    </div>
                </div>
            `
        },
        {
            id: 170,
            title: "Soru 170",
            content: `
                <div class="question">
                    <h3>Oyuncak ayının içerisine yerleştirilmiş pil, saat, kablo, fünyeler potansiyel tehdittir.</h3>
                    <ul>
                        <li>A) Doğru</li>
                        <li class="correct">B) Yanlış ✓</li>
                        <li>C) Yalnızca saat ve pil tehdit oluşturur</li>
                        <li>D) Yalnızca kablo tehdit oluşturur</li>
                        <li>E) Yalnızca fünyeler tehdit oluşturur</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Oyuncak içine gizlenmiş bu tür malzemeler bariz tehdit olarak değerlendirilir, potansiyel tehdit değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 171,
            title: "Soru 171",
            content: `
                <div class="question">
                    <h3>X-ray cihazlarının renkli monitöründe metaller ne renk görünür?</h3>
                    <ul>
                        <li>A) Kırmızı</li>
                        <li>B) Sarı</li>
                        <li class="correct">C) Mavi ya da yeşil ✓</li>
                        <li>D) Beyaz</li>
                        <li>E) Mor</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazlarının renkli monitöründe metaller mavi ya da yeşil renkte görünür.</p>
                    </div>
                </div>
            `
        },
        {
            id: 172,
            title: "Soru 172",
            content: `
                <div class="question">
                    <h3>MSHGP 17. Ek hangisidir?</h3>
                    <ul>
                        <li class="correct">A) Güvenlik tehditli alanlarda bulundurulması yasaklı maddeler ile yolcu/kabin ekibi tarafından taşınmasına izin verilen tehlikeli maddeler ✓</li>
                        <li>B) Bomba tespiti ile ilgili prosedürler</li>
                        <li>C) Acil durum ekipmanları</li>
                        <li>D) Havaalanı güvenliği için eğitim talimatları</li>
                        <li>E) Uçuş ekibi güvenliği</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP 17. Ek, güvenlik tehditli alanlarda yasaklı ve izin verilen maddeleri belirler.</p>
                    </div>
                </div>
            `
        },
        {
            id: 173,
            title: "Soru 173",
            content: `
                <div class="question">
                    <h3>X-ray cihazında konveyor bandı hareket halindeyken ekrandaki bagaj görüntüsü bir sonraki bagajın görüntülenmeye başlamasına kadar sabit kalır.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                        <li>C) Yalnızca küçük bagajlar için geçerlidir</li>
                        <li>D) Ekran sürekli yenilenir</li>
                        <li>E) X-ray cihazı sabit görüntü verir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazında görüntü, bir sonraki bagaj görüntülenene kadar sabit kalır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 174,
            title: "Soru 174",
            content: `
                <div class="question">
                    <h3>Check-in işlemi sırasında görevli personelin hangi eylemi yapmaması doğrudur?</h3>
                    <ul>
                        <li>A) Yolcunun kimlik bilgilerini kontrol etmek</li>
                        <li>B) Bagajını tartmak</li>
                        <li class="correct">C) Hakkında yakalama kararı olduğu tespit edilen ve ya bildirilen yolcuları yakalamak ✓</li>
                        <li>D) Bilet doğrulaması yapmak</li>
                        <li>E) Giriş kapılarını açmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yakalama işlemi güvenlik görevlilerinin sorumluluğundadır, check-in personelinin görevi değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 175,
            title: "Soru 175",
            content: `
                <div class="question">
                    <h3>5188 sayılı özel güvenlik görevlisi kimliği alabilmek için hangisi aranan şartlardan değildir?</h3>
                    <ul>
                        <li>A) En az lise mezunu olmak</li>
                        <li class="correct">B) Kasten bir suçtan dolayı 1 yıl veya daha fazla hapis cezasına çarptırılmamış olmak ✓</li>
                        <li>C) Güvenlik görevlisi eğitimini tamamlamak</li>
                        <li>D) Fiziksel yeterlilik şartlarını sağlamak</li>
                        <li>E) İyi bir sağlık raporu almak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kasten işlenen suçlardan hüküm giymemiş olmak temel şarttır, 1 yıl sınırlaması yoktur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 176,
            title: "Soru 176",
            content: `
                <div class="question">
                    <h3>Kırmızı alarma geçildiğinde ne yapılır ve süresi ne kadardır?</h3>
                    <ul>
                        <li class="correct">A) %100 bagaj ve kişi kontrolleri elle yapılır, süresi 48 saattir ✓</li>
                        <li>B) %100 bagaj kontrolleri yapılır, süresi 24 saattir</li>
                        <li>C) Sadece kişisel kontroller yapılır, süresi 72 saattir</li>
                        <li>D) Sadece bagaj kontrolleri yapılır, süresi 12 saattir</li>
                        <li>E) %50 bagaj ve kişi kontrolleri yapılır, süresi 24 saattir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kırmızı alarm durumunda tüm kontroller elle yapılır ve bu durum 48 saat sürer.</p>
                    </div>
                </div>
            `
        },
        {
            id: 177,
            title: "Soru 177",
            content: `
                <div class="question">
                    <h3>Hangisi sivil havacılık organizasyonları içerisinde direk yer almaz?</h3>
                    <ul>
                        <li>A) THY</li>
                        <li class="correct">B) TAI ✓</li>
                        <li>C) DHMİ</li>
                        <li>D) SHGM</li>
                        <li>E) Hava Kuvvetleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>TAI (TUSAŞ Havacılık ve Uzay Sanayii A.Ş.) askeri havacılık alanında faaliyet gösterir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 178,
            title: "Soru 178",
            content: `
                <div class="question">
                    <h3>Hangisi kabin güvenliğine yönelik olarak kullanılmaz?</h3>
                    <ul>
                        <li>A) X-ray sistemi</li>
                        <li>B) Metal dedektörleri</li>
                        <li class="correct">C) ATC sistemi ✓</li>
                        <li>D) Kapı dedektörleri</li>
                        <li>E) El bagajı tarama cihazları</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>ATC (Hava Trafik Kontrol) sistemi uçuş operasyonları için kullanılır, kabin güvenliği için değil.</p>
                    </div>
                </div>
            `
        },
        {
            id: 179,
            title: "Soru 179",
            content: `
                <div class="question">
                    <h3>SHGM hangisine bağlıdır?</h3>
                    <ul>
                        <li class="correct">A) Ulaştırma, Denizcilik ve Haberleşme Bakanlığı ✓</li>
                        <li>B) İçişleri Bakanlığı</li>
                        <li>C) Sağlık Bakanlığı</li>
                        <li>D) Adalet Bakanlığı</li>
                        <li>E) Milli Savunma Bakanlığı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sivil Havacılık Genel Müdürlüğü (SHGM), Ulaştırma, Denizcilik ve Haberleşme Bakanlığı'na bağlıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 180,
            title: "Soru 180",
            content: `
                <div class="question">
                    <h3>Hava meydanında güvenlik kontrolü yapıldıktan sonra geçişine izin verilen alanlara ........ alan. Hava meydanının pist, apron ve taksi yollarından oluşan alana da ........ denir.</h3>
                    <ul>
                        <li>A) Koruma alanı – Güvenlik sahası</li>
                        <li class="correct">B) Tahtitli alan – Pat sahası ✓</li>
                        <li>C) Güvenlik alanı – Erişim sahası</li>
                        <li>D) Yasaklı alan – Güvenli saha</li>
                        <li>E) Denetimli alan – Kritik saha</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrolü sonrası geçişe izin verilen alana tahtitli alan, pist-apron-taksi yollarından oluşan alana pat sahası denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 181,
            title: "Soru 181",
            content: `
                <div class="question">
                    <h3>Gayri kanuni eylemlere karşı sivil havacılığı koruma ve güvenlik talimatı ya da havacılık güvenliği el kitabı olarak ICAO'nun yayımladığı el kitabı hangisidir?</h3>
                    <ul>
                        <li class="correct">A) DOC-8973 ✓</li>
                        <li>B) DOC-10001</li>
                        <li>C) ICAO-2023</li>
                        <li>D) ICAO-543</li>
                        <li>E) DOC-7281</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>ICAO'nun sivil havacılık güvenliği el kitabı DOC-8973'tür.</p>
                    </div>
                </div>
            `
        },
        {
            id: 182,
            title: "Soru 182",
            content: `
                <div class="question">
                    <h3>Yabancı ülkelere gidecek olanlara yetkili makamlarca verilen ve yabancı ülke yetkililerinin kimlik incelemesinde geçerli olan belge nedir?</h3>
                    <ul>
                        <li>A) Vize</li>
                        <li class="correct">B) Pasaport ✓</li>
                        <li>C) Sürücü belgesi</li>
                        <li>D) Kimlik kartı</li>
                        <li>E) Sağlık raporu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yurt dışı seyahatlerinde kullanılan resmi kimlik belgesi pasaporttur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 183,
            title: "Soru 183",
            content: `
                <div class="question">
                    <h3>Hava meydanının güvenliği hangi program dahilinde yürütülür?</h3>
                    <ul>
                        <li>A) Hava Meydanı Güvenlik Politikası</li>
                        <li class="correct">B) Hava Meydanı Güvenlik Programı ✓</li>
                        <li>C) Güvenlik Yönetim Programı</li>
                        <li>D) Havacılık Güvenlik Kılavuzu</li>
                        <li>E) Çevresel Güvenlik Programı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanı güvenliği, Hava Meydanı Güvenlik Programı kapsamında yürütülür.</p>
                    </div>
                </div>
            `
        },
        {
            id: 184,
            title: "Soru 184",
            content: `
                <div class="question">
                    <h3>Bir hava aracında taşınan posta, ikram malzemesi ve bagajlar dışında, yolcu olmadan taşınan her türlü eşyaya ne denir?</h3>
                    <ul>
                        <li class="correct">A) Kargo ✓</li>
                        <li>B) Eşya taşımacılığı</li>
                        <li>C) Yük taşımacılığı</li>
                        <li>D) İkram</li>
                        <li>E) Bagaj</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu olmadan taşınan her türlü eşya kargo olarak adlandırılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 185,
            title: "Soru 185",
            content: `
                <div class="question">
                    <h3>KTMD'nin X-ray cihazına mesafesi ne kadar olmalıdır?</h3>
                    <ul>
                        <li>A) 40 cm</li>
                        <li class="correct">B) 50 cm ✓</li>
                        <li>C) 60 cm</li>
                        <li>D) 70 cm</li>
                        <li>E) 80 cm</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı Tipi Metal Dedektörü (KTMD) ile X-ray cihazı arasındaki mesafe 50 cm olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 186,
            title: "Soru 186",
            content: `
                <div class="question">
                    <h3>İki KTMD arasındaki mesafe ne kadar olmalıdır?</h3>
                    <ul>
                        <li>A) 50 cm</li>
                        <li class="correct">B) 100 cm ✓</li>
                        <li>C) 200 cm</li>
                        <li>D) 150 cm</li>
                        <li>E) 75 cm</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İki Kapı Tipi Metal Dedektörü (KTMD) arasındaki mesafe 100 cm olmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 187,
            title: "Soru 187",
            content: `
                <div class="question">
                    <h3>Taşınmak üzere hava aracına kabul edilen ancak sahibi hava aracında olmayan bagajlara eşliksiz bagaj denir.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sahibi uçakta olmayan bagajlar eşliksiz bagaj olarak tanımlanır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 188,
            title: "Soru 188",
            content: `
                <div class="question">
                    <h3>Sivil havacılık güvenliği ile ilgili ulusal organizasyonumuzda yer alan organlardan hangisi; MSHGP'ında yapılacak olan değişikliklerin onaylanmasını, programın geliştirilmesi ve ilgili politikaların belirlenmesi ile kurumlar arası koordinasyonun sağlanmasından sorumludur?</h3>
                    <ul>
                        <li>A) SHGM</li>
                        <li class="correct">B) MSHGK (Milli Sivil Havacılık Güvenlik Kurulu) ✓</li>
                        <li>C) DHMİ</li>
                        <li>D) TAI</li>
                        <li>E) Sivil Havacılık Müdürlüğü</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGK, sivil havacılık güvenliği ile ilgili en üst düzey karar organıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 189,
            title: "Soru 189",
            content: `
                <div class="question">
                    <h3>Hangisi güvenlik kontrolünden muaftır?</h3>
                    <ul>
                        <li>A) Yolcular</li>
                        <li class="correct">B) Devlet başkanları ✓</li>
                        <li>C) Havaalanı personeli</li>
                        <li>D) Diplomatlar</li>
                        <li>E) Hava trafik kontrolörleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Devlet başkanları güvenlik kontrolünden muaf tutulur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 190,
            title: "Soru 190",
            content: `
                <div class="question">
                    <h3>Hangisi Milli Sivil Havacılık Güvenlik Programının eki değildir?</h3>
                    <ul>
                        <li>A) Milli Sivil Havacılık Güvenlik Programı</li>
                        <li>B) ICAO Güvenlik Rehberi</li>
                        <li>C) Sivil Havacılık Güvenlik Protokolü</li>
                        <li>D) MSHGP Yönetmeliği</li>
                        <li class="correct">E) Sivil Havacılık Güvenlik El Kitabı ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sivil Havacılık Güvenlik El Kitabı, MSHGP'nin eki değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 191,
            title: "Soru 191",
            content: `
                <div class="question">
                    <h3>Sivil havacılık güvenliğinin temel kaynağı EK-17'dir.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>ICAO Şikago Sözleşmesi'nin EK-17'si sivil havacılık güvenliğinin temel kaynağıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 192,
            title: "Soru 192",
            content: `
                <div class="question">
                    <h3>Dozimetre ne işe yarar?</h3>
                    <ul>
                        <li>A) Hava trafiği ölçmek için kullanılır</li>
                        <li class="correct">B) Radyasyon ölçmek için kullanılır ✓</li>
                        <li>C) Kimyasal analiz yapar</li>
                        <li>D) Elektriksel yükleri ölçer</li>
                        <li>E) Sıcaklık ölçer</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Dozimetre, X-ray cihazları çevresindeki radyasyon seviyesini ölçmek için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 193,
            title: "Soru 193",
            content: `
                <div class="question">
                    <h3>MSHGP 2. Ek hangisidir?</h3>
                    <ul>
                        <li>A) Havaalanı Güvenlik Protokolü</li>
                        <li class="correct">B) Hava Meydanı Güvenlik Programı ✓</li>
                        <li>C) Güvenlik Denetim Yönetmeliği</li>
                        <li>D) Acil Durum Müdahale Planı</li>
                        <li>E) Güvenlik Eğitim Programı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP 2. Ek, Hava Meydanı Güvenlik Programını içerir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 194,
            title: "Soru 194",
            content: `
                <div class="question">
                    <h3>Radyoaktif maddenin sınıf numarası kaçtır?</h3>
                    <ul>
                        <li>A) 5</li>
                        <li class="correct">B) 7 ✓</li>
                        <li>C) 10</li>
                        <li>D) 3</li>
                        <li>E) 4</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Tehlikeli madde sınıflandırmasında radyoaktif maddeler 7. sınıfta yer alır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 195,
            title: "Soru 195",
            content: `
                <div class="question">
                    <h3>Bir tabanca en zor ne zaman tetkik edilir?</h3>
                    <ul>
                        <li>A) İlk alımda</li>
                        <li class="correct">B) Parçalarına ayrılıp saklandığında ✓</li>
                        <li>C) Dış görünümü bozulduğunda</li>
                        <li>D) Çalıştırıldığında</li>
                        <li>E) Eğitim sırasında</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Parçalarına ayrılmış ve saklanmış silahların tespiti en zor durumdur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 196,
            title: "Soru 196",
            content: `
                <div class="question">
                    <h3>Bütün yolcular kapı dedektöründen geçmek zorundadır.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik prosedürleri gereği istisnasız tüm yolcular kapı dedektöründen geçmek zorundadır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 197,
            title: "Soru 197",
            content: `
                <div class="question">
                    <h3>ÖGG kartını kim onaylar?</h3>
                    <ul>
                        <li>A) İçişleri Bakanı</li>
                        <li class="correct">B) Valilik ✓</li>
                        <li>C) Havaalanı yetkilisi</li>
                        <li>D) Sivil Havacılık Genel Müdürlüğü</li>
                        <li>E) Havaalanı güvenlik müdürü</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel Güvenlik Görevlisi (ÖGG) kartları valilik tarafından onaylanır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 198,
            title: "Soru 198",
            content: `
                <div class="question">
                    <h3>Hava meydanında görev yapan tüm kurum ve kuruluşların hava meydanı güvenliği üzerinde sorumlulukları vardır.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanı güvenliği tüm kurum ve kuruluşların ortak sorumluluğundadır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 199,
            title: "Soru 199",
            content: `
                <div class="question">
                    <h3>Ülkemiz havalimanlarındaki X-ray cihazlarının radyasyon ölçümlerini yapmaya ilk kurulumunda cihazlara onay vermeye yetkili kurum hangisidir?</h3>
                    <ul>
                        <li>A) SHGM</li>
                        <li class="correct">B) TAEK ✓</li>
                        <li>C) Ulaştırma Bakanlığı</li>
                        <li>D) Sağlık Bakanlığı</li>
                        <li>E) Çevre Bakanlığı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazlarının radyasyon ölçümleri ve onayı TAEK (Türkiye Atom Enerjisi Kurumu) tarafından yapılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 200,
            title: "Soru 200",
            content: `
                <div class="question">
                    <h3>X-ray cihazı ilk açıldığında kendini test ve kalibre eder.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazları açıldığında otomatik olarak kendi kendini test eder ve kalibre olur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 201,
            title: "Soru 201",
            content: `
                <div class="question">
                    <h3>X-ray cihazında görev yapan personelin dozaj gösterge şeridini (dozimetre) yakasına takması zorunludur.</h3>
                    <ul>
                        <li class="correct">A) Doğru ✓</li>
                        <li>B) Yanlış</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazı operatörlerinin radyasyon maruziyetini ölçmek için dozimetre takmaları zorunludur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 202,
            title: "Soru 202",
            content: `
                <div class="question">
                    <h3>Hangisi X-ray bagaj kontrol cihazlarının; kullanıcı tarafından çalıştırılmasını ve operasyon yapmasını sağlar?</h3>
                    <ul>
                        <li>A) Ekran</li>
                        <li>B) X-Ray tarayıcı</li>
                        <li class="correct">C) Kontrol paneli ✓</li>
                        <li>D) Görüntüleme sistemi</li>
                        <li>E) Sensör</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray cihazının kullanıcı tarafından kontrolü ve operasyonu kontrol paneli üzerinden sağlanır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 203,
            title: "Soru 203",
            content: `
                <div class="question">
                    <h3>TPSS komisyonu hangi kurumun personelinden oluşur?</h3>
                    <ul>
                        <li class="correct">A) SHGM ✓</li>
                        <li>B) Sağlık Bakanlığı</li>
                        <li>C) Ulaştırma Bakanlığı</li>
                        <li>D) İçişleri Bakanlığı</li>
                        <li>E) Çevre Bakanlığı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>TPSS (Temel Patlayıcı Sertifika Sınavı) komisyonu SHGM personelinden oluşur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 204,
            title: "Soru 204",
            content: `
                <div class="question">
                    <h3>Biyolojik veriyi ölçme ve istatistiksel olarak analiz edebilme bilimi olarak bilinen ve insanın değiştirilemez unsurlarına bakarak kimlik doğrulaması gerçekleştirmek için kullanılan sistemlere ne ad verilir?</h3>
                    <ul>
                        <li class="correct">A) Biometri ✓</li>
                        <li>B) Genetik test</li>
                        <li>C) Kimlik doğrulama</li>
                        <li>D) Biyometrik ölçümler</li>
                        <li>E) İzleme sistemi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Biyolojik verilerin ölçümü ve analizi ile kimlik doğrulama sistemlerine biometri denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 205,
            title: "Soru 205",
            content: `
                <div class="question">
                    <h3>MSHGP 9.Eki hangisidir?</h3>
                    <ul>
                        <li>A) Güvenlik Personeli Eğitim Talimatı</li>
                        <li class="correct">B) Hava Meydanı Çalışanları İçin Kart Kullanım ve Güvenlik Talimatı ✓</li>
                        <li>C) Acil Durum Planı</li>
                        <li>D) Güvenlik Sistemleri Test Talimatı</li>
                        <li>E) Eğitim ve Denetim Programı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP 9. Ek, havalimanı çalışanlarının kart kullanımı ve güvenlik talimatlarını içerir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 206,
            title: "Soru 206",
            content: `
                <div class="question">
                    <h3>Kirli kargolar nerede ve kaç saat süre ile tutulur?</h3>
                    <ul>
                        <li>A) Kargo binasında, 12 saat</li>
                        <li>B) Kargo binasında, 48 saat</li>
                        <li class="correct">C) Kargo binasında, 24 saat ✓</li>
                        <li>D) İlgili bölümde, 24 saat</li>
                        <li>E) Depo alanında, 72 saat</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kirli kargolar kargo binasında 24 saat süreyle tutulur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 207,
            title: "Soru 207",
            content: `
                <div class="question">
                    <h3>Hangisi adli aramanın amaçlarından değildir?</h3>
                    <ul>
                        <li>A) Suçun işlenmesini engellemek</li>
                        <li class="correct">B) Suçlulara ceza vermek ✓</li>
                        <li>C) Suç delillerini bulmak</li>
                        <li>D) Kanuni prosedürleri takip etmek</li>
                        <li>E) Güvenliği sağlamak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Ceza vermek yargının görevidir, adli aramanın amacı değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 208,
            title: "Soru 208",
            content: `
                <div class="question">
                    <h3>Hangisi devriye hizmetinin amaçlarından değildir?</h3>
                    <ul>
                        <li class="correct">A) Aranan şahısları bulmak ve ya yakalamak ✓</li>
                        <li>B) Suçları önlemek</li>
                        <li>C) Güvenliği sağlamak</li>
                        <li>D) Olaylara müdahale etmek</li>
                        <li>E) Tehlikeleri izlemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Aranan şahısları yakalamak adli kolluk görevidir, devriye hizmetinin temel amacı değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 209,
            title: "Soru 209",
            content: `
                <div class="question">
                    <h3>Hangisi devriyenin görevlerindendir?</h3>
                    <ul>
                        <li class="correct">A) Önleyici görevler ✓</li>
                        <li>B) İhbarları değerlendirmek</li>
                        <li>C) Ekipmanları taşımak</li>
                        <li>D) Suçlu yakalamak</li>
                        <li>E) Arama yapmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Devriyenin temel görevi önleyici güvenlik hizmetleridir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 210,
            title: "Soru 210",
            content: `
                <div class="question">
                    <h3>Zoom tuşunun görevi nedir?</h3>
                    <ul>
                        <li class="correct">A) Ekrandaki görüntüyü iki ve ya dört kat büyütmek ✓</li>
                        <li>B) Ekranı değiştirmek</li>
                        <li>C) Sesli iletişim sağlamak</li>
                        <li>D) Görüntü netliğini artırmak</li>
                        <li>E) Görüntüye odaklanmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Zoom tuşu X-ray cihazında görüntüyü iki veya dört kat büyütmeye yarar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 211,
            title: "Soru 211",
            content: `
                <div class="question">
                    <h3>Havalimanında tatbikatlar en az hangi sıklıkta yapılır?</h3>
                    <ul>
                        <li class="correct">A) Yılda 1 kez ✓</li>
                        <li>B) Yılda 2 kez</li>
                        <li>C) Yılda 3 kez</li>
                        <li>D) 2 ayda bir</li>
                        <li>E) 6 ayda bir</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanlarında güvenlik tatbikatları en az yılda bir kez yapılmak zorundadır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 212,
            title: "Soru 212",
            content: `
                <div class="question">
                    <h3>Maytaplar uçak altında taşınabilir mi?</h3>
                    <ul>
                        <li class="correct">A) Hayır ✓</li>
                        <li>B) Evet, sadece kargo uçaklarında</li>
                        <li>C) Evet, güvenlik prosedürleriyle taşınabilir</li>
                        <li>D) Evet, taşınabilir ama düzenli kontrol gerekir</li>
                        <li>E) Evet, sadece askeri uçaklarda</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Maytaplar tehlikeli madde sınıfında olduğu için uçak altında taşınması yasaktır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 213,
            title: "Soru 213",
            content: `
                <div class="question">
                    <h3>Güvenlik bilinci eğitimi kimlere verilir?</h3>
                    <ul>
                        <li class="correct">A) Havalimanı içerisinde çalışan tüm personele ✓</li>
                        <li>B) Havalimanı yöneticilerine</li>
                        <li>C) Uçuş ekibine</li>
                        <li>D) Bagaj güvenliği çalışanlarına</li>
                        <li>E) Yolculara</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik bilinci eğitimi havalimanında çalışan tüm personele verilmesi zorunlu bir eğitimdir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 214,
            title: "Soru 214",
            content: `
                <div class="question">
                    <h3>İz dedektörünün kalibrasyonu ne zaman yapılır?</h3>
                    <ul>
                        <li class="correct">A) Günde (24 saat) 1 defa ✓</li>
                        <li>B) Haftada bir</li>
                        <li>C) Aylık olarak</li>
                        <li>D) Yılda bir</li>
                        <li>E) Her tatbikattan önce</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İz dedektörünün kalibrasyonu günde bir kez yapılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 215,
            title: "Soru 215",
            content: `
                <div class="question">
                    <h3>Hangisi potansiyel tehlike arz eden yolcu değildir?</h3>
                    <ul>
                        <li>A) Sürekli seyahat eden yolcu</li>
                        <li class="correct">B) Sürekli seyahat eden yolcu ✓</li>
                        <li>C) Eski suçlu yolcu</li>
                        <li>D) İntihar riski olan yolcu</li>
                        <li>E) Şüpheli davranışlar sergileyen yolcu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sürekli seyahat etmek tek başına potansiyel tehlike göstergesi değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 216,
            title: "Soru 216",
            content: `
                <div class="question">
                    <h3>Hangisi uçağa yapılan yasadışı eylemlerden sayılmaz?</h3>
                    <ul>
                        <li class="correct">A) Sigara içmek ✓</li>
                        <li>B) Uçağı kaçırmak</li>
                        <li>C) Uçağa bomba yerleştirmek</li>
                        <li>D) Uçağa silah sokmak</li>
                        <li>E) Uçuş güvenliğini tehdit etmek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sigara içmek bir kural ihlalidir ancak yasadışı eylem kategorisinde değerlendirilmez.</p>
                    </div>
                </div>
            `
        },
        {
            id: 217,
            title: "Soru 217",
            content: `
                <div class="question">
                    <h3>Şikago Sözleşmesi'nin kısaca güvenlik başlıklı eki hangisidir?</h3>
                    <ul>
                        <li class="correct">A) EK-17 ✓</li>
                        <li>B) EK-16</li>
                        <li>C) EK-14</li>
                        <li>D) EK-15</li>
                        <li>E) EK-18</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şikago Sözleşmesi'nin EK-17'si havacılık güvenliği ile ilgili düzenlemeleri içerir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 218,
            title: "Soru 218",
            content: `
                <div class="question">
                    <h3>Havalimanında her türlü acil durumda, bu duruma uygun olarak araç-gereç ve personel kullanımı ve takviyesine, ilgili kurum ve kuruluşlarla iş birliğinin koordinesini düzenleyen plana ne denir?</h3>
                    <ul>
                        <li class="correct">A) Havalimanı Güvenlik Planı ✓</li>
                        <li>B) Acil Durum Planı</li>
                        <li>C) Havaalanı Acil Durum Prosedürü</li>
                        <li>D) Güvenlik Koordinasyon Planı</li>
                        <li>E) Uçuş Güvenliği Planı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu tanım Havalimanı Güvenlik Planı'nı ifade eder.</p>
                    </div>
                </div>
            `
        },
        {
            id: 219,
            title: "Soru 219",
            content: `
                <div class="question">
                    <h3>MSHGP EK-2 nedir?</h3>
                    <ul>
                        <li class="correct">A) Havalimanı Güvenlik Programı 1 ✓</li>
                        <li>B) Havalimanı Operasyonel Planı</li>
                        <li>C) Güvenlik Eğitim Programı</li>
                        <li>D) Yöneticilere Yönelik Güvenlik Planı</li>
                        <li>E) Havalimanı Güvenlik İnceleme Raporu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP EK-2, Havalimanı Güvenlik Programı 1'i içerir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 220,
            title: "Soru 220",
            content: `
                <div class="question">
                    <h3>EDS neyi ifade eder?</h3>
                    <ul>
                        <li class="correct">A) Patlayıcı Tespit Sistemi ✓</li>
                        <li>B) Elektronik Denetim Sistemi</li>
                        <li>C) Elektrik Dağıtım Sistemi</li>
                        <li>D) Ekipman Dağıtım Sistemi</li>
                        <li>E) Engelli Destek Sistemi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>EDS (Explosive Detection System), Patlayıcı Tespit Sistemi anlamına gelir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 221,
            title: "Soru 221",
            content: `
                <div class="question">
                    <h3>Aşağıdaki kişi ya da kişilerden hangisi kapı tipi metal detektörlerinden geçirilmemelidir?</h3>
                    <ul>
                        <li>A) Hamile bayanlar</li>
                        <li>B) Şüpheli kişiler</li>
                        <li class="correct">C) Kalp pili takılı kişiler ✓</li>
                        <li>D) Önemli kişiler</li>
                        <li>E) Çocuklar</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kalp pili takılı kişiler, cihazın elektromanyetik alanının kalp pilini etkileme riski nedeniyle kapı tipi metal detektörlerinden geçirilmemelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 222,
            title: "Soru 222",
            content: `
                <div class="question">
                    <h3>İncelenen gerçek bir çantanın; X-Ray görüntüsü üstüne, yazılımda yer alan tehdit maddelerinin sanal görüntülerini ekrana yansıtarak, operatörlerin becerilerini arttırmak ve motivasyonlarının sürekliliğini sağlamak amacıyla kullanılan sisteme ne ad verilir?</h3>
                    <ul>
                        <li>A) There Image Presentation</li>
                        <li>B) Tranering Image Projection</li>
                        <li>C) Traner Image Picture</li>
                        <li class="correct">D) TIP (Threat Image Projection) ✓</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>TIP (Threat Image Projection - Tehdit Görüntüsü Yansıtma) sistemi, X-Ray operatörlerinin tehdit unsurlarını tanıma ve tespit etme becerilerini geliştirmek için kullanılan bir eğitim ve test sistemidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 223,
            title: "Soru 223",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi kontrol noktasında bulunması gereken araç-gereç ve ekipmanlardan değildir?</h3>
                    <ul>
                        <li>A) KTMD</li>
                        <li>B) ETMD</li>
                        <li>C) X-ray</li>
                        <li class="correct">D) Badya ✓</li>
                        <li>E) Hepsi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Badya, güvenlik kontrol noktasında bulunması gereken standart ekipmanlar arasında yer almaz.</p>
                    </div>
                </div>
            `
        },
        {
            id: 224,
            title: "Soru 224",
            content: `
                <div class="question">
                    <h3>Profesyonel filmler nasıl kontrol edilir?</h3>
                    <ul>
                        <li>A) X-ray</li>
                        <li>B) İz Dedektörü</li>
                        <li>C) KTMD</li>
                        <li>D) ETMD</li>
                        <li class="correct">E) X-ray cihazından geçirilmeden, şarj çadırı içerisinde elle kontrolü yapılır ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Profesyonel filmler X-ray ışınlarından zarar görebileceği için şarj çadırı içerisinde elle kontrol edilmelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 225,
            title: "Soru 225",
            content: `
                <div class="question">
                    <h3>El tipi metal dedektörü ile kontrol edilen kişi bayan ve etek giyiniyorsa kontrol şekli nasıl olmalıdır?</h3>
                    <ul>
                        <li>A) Erkek görevli tarafından - Eteğe sürtülerek</li>
                        <li>B) Bayan görevli tarafından - Etek üzerinden</li>
                        <li>C) Erkek görevli tarafından - Etek üzerinden</li>
                        <li class="correct">D) Bayan görevli tarafından - 7,5-8 cm mesafeden ✓</li>
                        <li>E) Bayan görevli tarafından - 7,5-10 cm mesafeden</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bayan yolcuların etek kontrolü, bayan görevli tarafından ve 7,5-8 cm mesafeden yapılmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 226,
            title: "Soru 226",
            content: `
                <div class="question">
                    <h3>Bir Kontrol Noktasında x-ray cihazında asgari çalışması gereken personel sayısı kaçtır?</h3>
                    <ul>
                        <li class="correct">A) En az 3 Personel ✓</li>
                        <li>B) En az 5 Personel 1'i bayan olmak şartıyla</li>
                        <li>C) En az 4 Personel</li>
                        <li>D) En az 4 Personel 1'i bayan olmak şartıyla</li>
                        <li>E) En az 2 Personel 1'i bayan olmak şartıyla</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ray kontrol noktasında en az 3 personel bulunması gerekmektedir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 227,
            title: "Soru 227",
            content: `
                <div class="question">
                    <h3>ÖGG Eşkâl tarifinde hangisi yoktur?</h3>
                    <ul>
                        <li>A) Yara izi</li>
                        <li>B) Saç Rengi</li>
                        <li>C) Boy-Kilo</li>
                        <li class="correct">D) Psikolojisi ✓</li>
                        <li>E) Hepsi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>ÖGG (Özel Güvenlik Görevlisi) eşkâl tarifinde psikolojik durum yer almaz.</p>
                    </div>
                </div>
            `
        },
        {
            id: 228,
            title: "Soru 228",
            content: `
                <div class="question">
                    <h3>X-Ray Bagaj Kontrol Cihazındaki kontrol panelinin Inorganik Stripping Tuşunun fonksiyonu nedir?</h3>
                    <ul>
                        <li class="correct">A) Ekranda sadece organik maddeler görüntülenir ✓</li>
                        <li>B) Ekranda sadece inorganik maddeler görüntülenir</li>
                        <li>C) Ekranda nesneler siyah-beyaz görüntülenir</li>
                        <li>D) Ekranda mix maddeler görüntülenir</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Inorganik Stripping Tuşu, inorganik maddeleri gizleyerek sadece organik maddelerin görüntülenmesini sağlar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 229,
            title: "Soru 229",
            content: `
                <div class="question">
                    <h3>El tipi metal arama dedektörünün görevi nedir?</h3>
                    <ul>
                        <li>A) Kişi üzerindeki tüm metalleri tespit eder</li>
                        <li class="correct">B) Lokal (bölge) taraması yapar ✓</li>
                        <li>C) Eşya taramasında kullanılır</li>
                        <li>D) Kişi üzerindeki tüm nesneleri tespit eder</li>
                        <li>E) Hepsi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>El tipi metal dedektörü, belirli bir bölgenin detaylı metal taraması için kullanılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 230,
            title: "Soru 230",
            content: `
                <div class="question">
                    <h3>Bir ülkeye girişi yetkili merciler tarafından reddedilen kişileri aşağıdakilerden hangisi tanımlar?</h3>
                    <ul>
                        <li>A) Hukuki işleme maruz kalmış yolcular</li>
                        <li>B) Asi Yolcular</li>
                        <li>C) Hüküm Giymiş Yolcular</li>
                        <li>D) Seyahatten Vazgeçen Yolcular</li>
                        <li class="correct">E) INAD (Inadmissible Person) ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>INAD (Inadmissible Person - Kabul Edilemez Kişi), bir ülkeye girişi yetkili merciler tarafından reddedilen kişileri tanımlar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 231,
            title: "Soru 231",
            content: `
                <div class="question">
                    <h3>X-ışını Bagaj Kontrol Cihazlarına yönelik tercih değerlendirilmesinde, aşağıdakilerden hangi özellik dikkate alınmaz?</h3>
                    <ul>
                        <li>A) Konveyör bant uzunluğu</li>
                        <li>B) X-ışını algılama yönü</li>
                        <li>C) Tüp kurulumu</li>
                        <li>D) Konveyör hızı</li>
                        <li class="correct">E) Hiçbiri ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-ışını bagaj kontrol cihazlarının seçiminde tüm bu özellikler dikkate alınır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 232,
            title: "Soru 232",
            content: `
                <div class="question">
                    <h3>Havameydanında; MSHGKKP çerçevesinde denetleme ve test faaliyetlerini yapmak, kayıtları tutmak ve denetleme raporlarını Güvenlik Komisyonuna sunmakla görevli birim hangisidir?</h3>
                    <ul>
                        <li class="correct">A) SHGM ✓</li>
                        <li>B) EADUK</li>
                        <li>C) EADB</li>
                        <li>D) HGK</li>
                        <li>E) MİA</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>SHGM (Sivil Havacılık Genel Müdürlüğü), havameydanlarında güvenlik denetleme ve test faaliyetlerinden sorumludur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 233,
            title: "Soru 233",
            content: `
                <div class="question">
                    <h3>Havalimanı Kriz Merkezi, kime bağlıdır?</h3>
                    <ul>
                        <li>A) SHGM</li>
                        <li>B) EADUK</li>
                        <li>C) EADB</li>
                        <li>D) HGK</li>
                        <li class="correct">E) MİA ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanı Kriz Merkezi, Mülki İdare Amirliğine (MİA) bağlı olarak çalışır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 234,
            title: "Soru 234",
            content: `
                <div class="question">
                    <h3>Uçakta kalkış öncesinden uçak kapısının kapanmasından, indikten sonra tekrar açılmasına kadar olan sürede yolcu ve personelin düzenini veya güvenliğini tehlikeye atacak hareketlerde bulunan kişi hangisidir?</h3>
                    <ul>
                        <li class="correct">A) Asi Yolcu (Kural Dışı) ✓</li>
                        <li>B) Deporte Yolcu</li>
                        <li>C) Kabul Edilmez Yolcu</li>
                        <li>D) Problemli Yolcu</li>
                        <li>E) Transfer Yolcu</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Asi yolcu (Unruly passenger), uçuş güvenliğini tehlikeye atan ve kurallara uymayan yolcuları tanımlar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 235,
            title: "Soru 235",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi ülkemizde sivil havacılık güvenliği alanında yetkili otoritedir?</h3>
                    <ul>
                        <li>A) İç İşleri Bakanlığı</li>
                        <li class="correct">B) Ulaştırma ve Altyapı Bakanlığı ✓</li>
                        <li>C) Kültür ve Turizm Bakanlığı</li>
                        <li>D) Gümrük ve Ticaret Bakanlığı</li>
                        <li>E) Milli Savunma Bakanlığı</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Türkiye'de sivil havacılık güvenliği konusunda yetkili otorite Ulaştırma ve Altyapı Bakanlığı'dır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 236,
            title: "Soru 236",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi sivil havacılığı yasadışı müdahale maksadı taşıyan eylemlerden korumak amacıyla yapılan uluslararası sözleşmelerden değildir?</h3>
                    <ul>
                        <li>A) 07.12.1944 tarihli Şikago Sözleşmesi</li>
                        <li>B) Tokyo-1963 Sözleşmesi</li>
                        <li>C) LAHEY-1971 Sözleşmesi</li>
                        <li>D) MONTREAL-1971 Sözleşmesi</li>
                        <li class="correct">E) 19.10.1983 tarih ve 2920 sayılı Türk Sivil Havacılık Kanunu ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>2920 sayılı Türk Sivil Havacılık Kanunu ulusal bir düzenlemedir, uluslararası sözleşme değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 237,
            title: "Soru 237",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden Milli Sivil Havacılık Güvenlik Programı Eklerinden hangisi yanlıştır?</h3>
                    <ul>
                        <li>A) Ek 8 Güvenlik (Giriş) Kontrol Noktası İşletim Talimatı</li>
                        <li>B) Ek 9 Havaalanı Çalışanları İçin Kart Kullanım ve Güvenlik Talimatı</li>
                        <li>C) Ek 11 Havaalanı Güvenlik Sistem ve Cihazları</li>
                        <li>D) Ek 13 Davranış Tespiti İle İlgili Temel Prensipler</li>
                        <li class="correct">E) Ek 14 Havaalanı Yapısal Güvenlik Unsurları ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanı Yapısal Güvenlik Unsurları, Ek 14'te değil, farklı bir ekte yer almaktadır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 238,
            title: "Soru 238",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden Milli Sivil Havacılık Güvenlik Programı Eklerinden hangisi yanlıştır?</h3>
                    <ul>
                        <li class="correct">A) Ek 10 Havaalanı Güvenlik Sistem ve Cihazları ✓</li>
                        <li>B) Ek 13 Davranış Tespiti İle İlgili Temel Prensipler</li>
                        <li>C) Ek 14 Havaalanı Yapısal Güvenlik Unsurları</li>
                        <li>D) Ek 17 Havalimanları Güvenlik Risk Tehdit Değerlendirme ve Alarm Planı</li>
                        <li>E) Ek 11 Hareket Yeteneği Kısıtlı Şahıslara Uygulanacak Kontrol Prensipleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanı Güvenlik Sistem ve Cihazları, Ek 10'da değil, farklı bir ekte yer almaktadır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 239,
            title: "Soru 239",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden Milli Sivil Havacılık Güvenlik Programı Eklerinden hangisi yanlıştır?</h3>
                    <ul>
                        <li>A) Ek 15 Havalimanları Güvenlik Risk Tehdit Değerlendirme ve Alarm Planı</li>
                        <li>B) Ek 17 Güvenlik Tahditli Alanlarda Bulundurulması Yasaklı Maddeler</li>
                        <li>C) Ek 19 Siber Tehditlere Karşı Yapılacak İşlemler Talimatı</li>
                        <li>D) Ek 29 Muafiyetler</li>
                        <li class="correct">E) Ek 10 Havaalanı Çalışanları İçin Kart Kullanım ve Güvenlik Talimatı ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanı Çalışanları İçin Kart Kullanım ve Güvenlik Talimatı, Ek 10'da değil, Ek 9'da yer almaktadır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 240,
            title: "Soru 240",
            content: `
                <div class="question">
                    <h3>Araç Giriş Yetkilerinde aşağıdakilerden hangisi bulunmalıdır?</h3>
                    <ul>
                        <li>A) Apron plakası</li>
                        <li>B) Araç tanıtım kartı</li>
                        <li>C) Geçici giriş belgesi</li>
                        <li>D) Elektronik giriş kartı</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Araç giriş yetkileri için tüm bu belgeler gereklidir ve araçların hava tarafı ve/veya güvenlik tahditli alanlara geçiş izni sağlar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 241,
            title: "Soru 241",
            content: `
                <div class="question">
                    <h3>Parmak izi, göz retinası, iris, yüz şekli, ses, imza, avuç içi gibi insana özgü karakteristikleri saptayarak bu verileri bilgisayar sistemleri, veri bankaları gibi ortamlarda karşılaştırarak giriş için kimlik doğrulamasını yapan sistemlere ne denir?</h3>
                    <ul>
                        <li>A) KTMD</li>
                        <li>B) ETMD</li>
                        <li>C) CCTV</li>
                        <li class="correct">D) Biyometrik Sistemler ✓</li>
                        <li>E) Company Mail/Co-Mail</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Biyometrik sistemler, kişiye özgü fiziksel veya davranışsal özellikleri kullanarak kimlik doğrulaması yapan sistemlerdir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 242,
            title: "Soru 242",
            content: `
                <div class="question">
                    <h3>Güvenlik Personeli güvenlik hizmetlerinin uygulanmasından doğrudan görevli ve sorumlu olan ve uygulanmakta olan mevzuat kapsamında hangisinden sorumludur?</h3>
                    <ul>
                        <li>A) Kişilerin, uçak altı ve kabin bagajlarının, kişiler tarafından taşınan eşyaların kontrolü</li>
                        <li>B) Hava aracının güvenlik araması, kontrolü ve koruması</li>
                        <li>C) Güvenlik tahditli alanlara giriş kontrolü</li>
                        <li>D) Devriye, refakat ve nöbet hizmetleri</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik personeli, sayılan tüm güvenlik hizmetlerinin uygulanmasından sorumludur.</p>
                    </div>
                </div>
            `
        },
        {
            id: 243,
            title: "Soru 243",
            content: `
                <div class="question">
                    <h3>Girişinde geçerli bir giriş belgesi ve güvenlik kontrolü yapılarak giriş sağlanan ve normal koşullarda son güvenlik kontrol noktası ile uçak arasındaki tüm giden yolcu alanları, ramp, bagaj ayırma alanları, kargo depoları, posta merkezleri, hava tarafında bulunan ikram ve uçak temizlik tesislerini kapsayan hava tarafı alanına ne denir?</h3>
                    <ul>
                        <li>A) Hangar</li>
                        <li>B) Taksi Yolu</li>
                        <li>C) Pist</li>
                        <li class="correct">D) Güvenlik Tahditli Alan ✓</li>
                        <li>E) Tahditli Alanların Kritik Bölümleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu tanım, güvenlik tahditli alanı ifade eder. Bu alanlar özel güvenlik kontrollerine tabidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 244,
            title: "Soru 244",
            content: `
                <div class="question">
                    <h3>Hasar gördüğünde havaalanı fonksiyonlarının ciddi şekilde aksamasına yol açacak olan ve havaalanı içinde veya havaalanıyla direkt bağlantılı bulunan tesis ve yerlerine ne denir?</h3>
                    <ul>
                        <li>A) Hangar</li>
                        <li>B) Terminal</li>
                        <li>C) Pist</li>
                        <li>D) Güvenlik Tahditli Alan</li>
                        <li class="correct">E) Hassas Tesisler ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Bu tanım, hassas tesisleri ifade eder. Bu tesisler havaalanı operasyonları için kritik öneme sahiptir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 245,
            title: "Soru 245",
            content: `
                <div class="question">
                    <h3>Aşağıdaki terimlerden hangisi yanlıştır?</h3>
                    <ul>
                        <li>A) Kapalı Devre TV Sistemi (CCTV): Sivil havacılık güvenliğini sağlamak amacı ile kameralar vasıtasıyla kesintisiz kayıt esasına dayalı olarak izlenmesini sağlayan sistem</li>
                        <li>B) Kapı Tipi Metal Dedektörü (KTMD): Güvenlik kontrol noktalarında yolcu ve yolcu dışındaki kişilerin geçişlerinde güvenlik taramasının yapılabilmesi amacıyla, sadece metale duyarlı olan dedektör</li>
                        <li class="correct">C) Hava Tarafı: Bir havaalanında doğrudan uçuş faaliyetlerine dahil olmayan terminal binaları, diğer tüm yapıları içine alan bölüm ✓</li>
                        <li>D) Kargo: Bagaj, posta, havayolu işletmesi postası haricinde hava aracında taşınan her türlü eşya</li>
                        <li>E) Kartlı Geçiş Kontrol Sistemi (CACS): Sivil havacılık güvenliğini sağlamak amacıyla, hava tarafı ve hassas tesislerin güvenliğinin sağlanmasına yönelik sistem</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Hava tarafı tanımı yanlıştır. Hava tarafı, doğrudan uçuş faaliyetlerine dahil olan alanları kapsar.</p>
                    </div>
                </div>
            `
        },
        {
            id: 246,
            title: "Soru 246",
            content: `
                <div class="question">
                    <h3>Aşağıdaki terimlerden hangisi yanlıştır?</h3>
                    <ul>
                        <li>A) Patlayıcı İz Tespit Dedektörü (ETD): Çok küçük miktardaki patlayıcı maddeleri algılayabilme özelliğine sahip sistem</li>
                        <li>B) Patlayıcı Tespit Sistemi (EDS): Bagajların taranmasını sağlayan otomatik sistem</li>
                        <li>C) Patlayıcı Tespit Köpeği (EDD): Patlayıcı maddeleri algılayabilme ve bunu alarm aracılığıyla bildirme özelliğine sahip sistem</li>
                        <li class="correct">D) Patlayıcı Tespit Sistemi (EDS): Bagajların taranmasını sağlayan sistem ✓</li>
                        <li>E) Patlayıcı Tespit Sistemi (EDS): Bagajların taranmasını sağlayan sistem</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlayıcı Tespit Sistemi (EDS), bagajların taranmasını sağlayan sistemdir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 247,
            title: "Soru 247",
            content: `
                <div class="question">
                    <h3>Patlayıcı madde tespit köpeklerinin temel eğitim amacı nedir?</h3>
                    <ul>
                        <li>A) Patlayıcı maddeleri koklayarak tespit etmek</li>
                        <li>B) Yolcu kimliklerini kontrol etmek</li>
                        <li>C) Bagaj ağırlığını hesaplamak</li>
                        <li>D) Uçuş güvenliğini denetlemek</li>
                        <li>E) Uçuş rotalarını belirlemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlayıcı madde tespit köpekleri, patlayıcı maddeleri koklayarak tespit etmek üzere eğitilir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 248,
            title: "Soru 248",
            content: `
                <div class="question">
                    <h3>Bir havalimanında sahipsiz bagaj tespit edildiğinde ilk yapılması gereken nedir?</h3>
                    <ul>
                        <li>A) Güvenlik yetkililerine haber vermek ve bölgeyi güvenlik çemberine almak</li>
                        <li>B) Bagajı sahibine teslim etmek</li>
                        <li>C) Bagajı açarak içeriğini kontrol etmek</li>
                        <li>D) Bagajı çöpe atmak</li>
                        <li>E) Uçağa yüklemek</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sahipsiz bagaj tespit edildiğinde ilk olarak güvenlik yetkililerine haber verilmeli ve bölge güvenlik çemberine alınmalıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 249,
            title: "Soru 249",
            content: `
                <div class="question">
                    <h3>Bir havalimanında güvenlik seviyesinin artırılması gerektiğinde hangi uygulama devreye girer?</h3>
                    <ul>
                        <li>A) Tehdit seviyesinin yükseltilmesi ve ek güvenlik önlemlerinin alınması</li>
                        <li>B) Uçuşların iptal edilmesi</li>
                        <li>C) Tüm yolcuların uçuşlarının ertelenmesi</li>
                        <li>D) Bagaj kabulünün durdurulması</li>
                        <li>E) Havalimanının tamamen kapatılması</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik seviyesinin artırılması gerektiğinde tehdit seviyesi yükseltilir ve ek güvenlik önlemleri alınır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 250,
            title: "Soru 250",
            content: `
                <div class="question">
                    <h3>Bir havalimanında güvenlik kontrolü yapıldıktan sonra geçişine izin verilen alanlara ........ alan. Hava meydanının pist, apron ve taksi yollarından oluşan alana da ........ denir.</h3>
                    <ul>
                        <li>A) Koruma alanı – Güvenlik sahası</li>
                        <li>B) Tahtitli alan – Pat sahası</li>
                        <li>C) Güvenlik alanı – Erişim sahası</li>
                        <li>D) Yasaklı alan – Güvenli saha</li>
                        <li class="correct">E) Denetimli alan – Kritik saha</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrolü sonrası geçişe izin verilen alana tahtitli alan, pist-apron-taksi yollarından oluşan alana pat sahası denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 251,
            title: "Soru 251",
            content: `
                <div class="question">
                    <h3>Aşağıdaki terimlerden hangisi yanlıştır?</h3>
                    <ul>
                        <li>A) Patlayıcı İz Tespit Dedektörü (ETD): Çok küçük miktardaki patlayıcı maddeleri algılayabilme özelliğine sahip sistem</li>
                        <li>B) Patlayıcı Tespit Sistemi (EDS): Bagajların taranmasını sağlayan otomatik sistem</li>
                        <li>C) Patlayıcı Tespit Köpeği (EDD): Patlayıcı maddeleri tespit edebilen köpekler</li>
                        <li class="correct">D) PAT Sahası: Bir havaalanında uçakların bakımının yapıldığı alan ✓</li>
                        <li>E) Hangar: Uçakların bakım ve onarımının yapıldığı kapalı alan</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>PAT Sahası, uçakların kalkış, iniş ve taksi için kullandığı hareket alanı ve apronu ifade eder, bakım alanı değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 252,
            title: "Soru 252",
            content: `
                <div class="question">
                    <h3>Refakatçi eşliğinde girişler ile ilgili olarak aşağıdakilerinden hangisi doğrudur?</h3>
                    <ul>
                        <li>A) Refakatli girişlerin amacı; iş görüşmesi, bakım-onarım keşif vb. geçerli bir nedene dayanması</li>
                        <li>B) İşletmelerden kısıtlı sayıda refakatçi olacakların belirlenerek MİA tarafından onaylanması</li>
                        <li>C) Refakatçi ve beraberindekilerin giriş ve çıkış noktalarının aynı olması</li>
                        <li>D) Azami kalış süresinin 8 saat olması</li>
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
            id: 253,
            title: "Soru 253",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi Havalimanı Yapısal Güvenlik Unsurlarından değildir?</h3>
                    <ul>
                        <li>A) Tel örgüler</li>
                        <li>B) Aydınlatma</li>
                        <li>C) Görüşü Engelleyen Nesneler</li>
                        <li>D) CCTV</li>
                        <li class="correct">E) X-Ray ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray cihazı yapısal güvenlik unsuru değil, güvenlik tarama cihazıdır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 254,
            title: "Soru 254",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi havameydanlarında kullanılan güvenlik cihazları ve sistemlerinden değildir?</h3>
                    <ul>
                        <li>A) Kartlı Geçiş Kontrol Sistemleri (CACS)</li>
                        <li>B) X-Ray Cihazı</li>
                        <li>C) Turnikeler</li>
                        <li>D) Dedektörler</li>
                        <li class="correct">E) Aydınlatma ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Aydınlatma, yapısal güvenlik unsurlarından biridir, güvenlik cihazı veya sistemi değildir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 255,
            title: "Soru 255",
            content: `
                <div class="question">
                    <h3>X-Ray'de nesneleri taramanın amacı aşağıdakilerden hangisidir?</h3>
                    <ul>
                        <li>A) Yasadışı cisimlerin içeri sokulma girişimlerine karşı caydırıcılık sağlamak</li>
                        <li>B) Bagajlardaki gizlenmiş tehlikeli ve patlayıcı cisimleri bulmak</li>
                        <li>C) Bagajların hızlı bir şekilde kontrolünü sağlamak</li>
                        <li>D) Girişlerde kontrol nedeniyle olabilecek yığılma ve gecikmeleri önlemek</li>
                        <li class="correct">E) Hepsi ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>X-Ray taraması belirtilen tüm amaçlar için yapılır.</p>
                    </div>
                </div>
            `
        },
        {
            id: 256,
            title: "Soru 256",
            content: `
                <div class="question">
                    <h3>Aşağıdakilerden hangisi el detektörü tarafından tespit edilemez?</h3>
                    <ul>
                        <li>A) Çelik levhalar</li>
                        <li>B) Metal paralar</li>
                        <li>C) Metal nesneler</li>
                        <li>D) Plastik kabzalı tabancalar</li>
                        <li class="correct">E) Yiyecekler ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>El detektörü sadece metal içeren nesneleri tespit edebilir, yiyecekler gibi metal içermeyen maddeler tespit edilemez.</p>
                    </div>
                </div>
            `
        },
        {
            id: 257,
            title: "Soru 257",
            content: `
                <div class="question">
                    <h3>Kapı Tipi Metal detektörlerin ayarlanmasına ne ad verilir?</h3>
                    <ul>
                        <li class="correct">A) Kalibrasyon ✓</li>
                        <li>B) Stabilizasyon</li>
                        <li>C) Elibrasyon</li>
                        <li>D) Gramaj ayarı</li>
                        <li>E) Motivasyon</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı tipi metal detektörlerin hassasiyet ayarlarının yapılmasına kalibrasyon denir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 258,
            title: "Soru 258",
            content: `
                <div class="question">
                    <h3>El Tipi Metal detektörleri için aşağıda verilen ifadelerden hangisi yanlıştır?</h3>
                    <ul>
                        <li>A) Islak zemine bırakılmamalı</li>
                        <li>B) Metal zemine bırakılmamalı</li>
                        <li>C) İnsanın baş kısmına tutulmamalı</li>
                        <li class="correct">D) Uyuşturucu maddelerin tespitinde kullanılmalı ✓</li>
                        <li>E) Göreve başlamadan önce çalışıp çalışmadığı tespit edilmeli</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>El tipi metal detektörleri sadece metal nesneleri tespit edebilir, uyuşturucu maddelerin tespitinde kullanılamaz.</p>
                    </div>
                </div>
            `
        },
        {
            id: 259,
            title: "Soru 259",
            content: `
                <div class="question">
                    <h3>Görev yapılan bölgede terk edilmiş bir eşya görülmesi halinde aşağıdakilerden hangileri yapılmalıdır?</h3>
                    <ul>
                        <li>I- Metal el detektörü ile cisim teşhis edilmeye çalışılır</li>
                        <li>II- Bölgede kapı detektörü var ise kapı detektöründen geçirilerek teşhis edilir</li>
                        <li>III- Çevresi emniyete alınarak güvenlik güçlerine bilgi verilir</li>
                        <li>IV- Bölgede X-Ray cihazı varsa cihazdan geçirilerek teşhis edilir</li>
                        <li>V- Fazla sarsmadan bölgeden uzaklaştırılır</li>
                        <li class="correct">A) III ✓</li>
                        <li>B) II, III</li>
                        <li>C) III, IV</li>
                        <li>D) IV, V</li>
                        <li>E) I, II, III</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Terk edilmiş eşya görüldüğünde sadece çevresi emniyete alınarak güvenlik güçlerine bilgi verilmelidir. Eşyaya müdahale edilmemelidir.</p>
                    </div>
                </div>
            `
        },
        {
            id: 260,
            title: "Soru 260",
            content: `
                <div class="question">
                    <h3>Dozimetre hangi amaçla kullanılır?</h3>
                    <ul>
                        <li>A) Uyuşturucu maddelerin miktarını belirler</li>
                        <li>B) Metal cisimlerin kütlesini çıkardığı sesin şiddetiyle işaret eder</li>
                        <li class="correct">C) Radyasyon miktarını belirler ✓</li>
                        <li>D) Bomba düzeneğini tespit eder</li>
                        <li>E) Radyo dalgalarının frekansını ölçer</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Dozimetre, X-ray cihazları operatörlerinin maruz kaldığı radyasyon miktarını ölçmek için kullanılır.</p>
                    </div>
                </div>
            `
        }
    ]
};

// Dışa aktarma
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bookData;
} 