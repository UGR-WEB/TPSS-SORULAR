const bookData = {
    title: "Havacılık Güvenliği Sınav Soruları",
    questions: [
        {
            title: "Soru 1",
            content: `
                <div class="question">
                    <h3>Soru 1:</h3>
                    <p>Havaalanılarında ICAO'nun önerileri doğrultusunda gözlemler ve tavsiyelerde bulunmak üzere oluşturulan birim aşağıdakilerden hangisidir?</p>
                    <ul>
                        <li>A) EADUK</li>
                        <li>B) SHGM</li>
                        <li>C) MGK</li>
                        <li class="correct">D) EADB ✓</li>
                        <li>E) EGM</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>EADB (Emniyet Araştırma ve Denetleme Birimi), havaalanlarında ICAO standartlarına uygunluğu denetleyen ve tavsiyelerde bulunan resmi birimdir. Bu birim:</p>
                        <ul>
                            <li>Havacılık güvenliği konusunda uluslararası standartların uygulanmasını sağlar</li>
                            <li>Düzenli denetimler gerçekleştirir</li>
                            <li>Güvenlik prosedürlerinin geliştirilmesine katkıda bulunur</li>
                            <li>ICAO standartlarına uygunluğu kontrol eder</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            title: "Soru 2",
            content: `
                <div class="question">
                    <h3>Soru 2:</h3>
                    <p>I) Üzerine su veya başka bir madde atılmaz, örtülmez.<br>
                    II) Şüpheli paketi güvenli bir bölgeye çekmek.<br>
                    III) Çevrede başka bir paket olabileceği unutulmaz.<br>
                    IV) Çevresinde haberleşme cihazları kullanılmaz.<br>
                    Bomba ve şüpheli paket tespitinde hareket tarzında yukarıdakilerden hangisi yapılmaz?</p>
                    <ul>
                        <li>A) I ve II</li>
                        <li class="correct">B) II ve III ✓</li>
                        <li>C) I, II ve IV</li>
                        <li>D) I ve IV</li>
                        <li>E) I, II ve III</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şüpheli paket tespitinde, paketin güvenli bir bölgeye çekilmesi ve çevrede başka bir paket olabileceği ihtimalinin göz ardı edilmesi doğru hareket tarzları değildir. Şüpheli paketlere müdahale edilmemeli ve olay yeri derhal yetkililere bildirilmelidir.</p>
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
                        <p>Hassas tesisler, havaalanı operasyonlarının sorunsuz bir şekilde devamlılığı için kritik öneme sahip olan ve zarar gördüklerinde ciddi aksamalara neden olabilecek tesislerdir. Bu tesisler genellikle kontrol merkezleri, enerji santralleri, iletişim kuleleri gibi yerlerdir.</p>
                    </div>
                </div>
           `
       },
{
            "title": "Soru 4",
            "content": `
                <div class="question">
                    <h3>Soru 4:</h3>
                    <p>1-Bölge ve kritik yerler, gayri muayyen zamanlarda devriyelerle taranır, kapalı devre televizyon ile gözetlenerek güvenliği sağlanır.<br>2-Hava meydanlarında kişilere verilen giriş kartlarında, kart sahibinin fotoğrafı, kimliği, hava meydanındaki görevi, bu görevi gereği hava meydanı içinde girebileceği yerler ve kartın geçerlilik süresi belirtilir.<br>3-havaalanında uçakların bulunduğu bölgelerin güvenliği, uçuş pistleri, uçak taksi yolları ve apronların umuma açık olan sahalardan, fiziki engellerle ayrılması suretiyle sağlanır.<br>4-Yolcuların uçağa binmeleri amacıyla kullanılan kapılar, yolcu bulunmadığı zamanlarda devamlı kilitli tutulabilecek yapıda olmalı, yetkililerce sürekli olarak kontrol edilmelidir.<br><br>Yukarıdakilerden hangileri havaya dönük bölümün güvenliği için alınacak tedbirler arasında yer alır?</p>
                    <ul>
                        <li>A) 1 ve 4</li>
                        <li>B) 1, 2 ve 3</li>
                        <li>C) 2 ve 3</li>
                        <li class="correct">D) 1, 2, 3 ve 4 ✓</li>
                        <li>E) 1, 3 ve 4</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Hava tarafı güvenliği, havaalanının uçakların hareket ettiği ve yolcuların uçağa bindiği kısımlarının güvenliğini kapsar. Bu nedenle, verilen tüm önlemler hava tarafı güvenliği için alınacak tedbirler arasındadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 5",
            "content": `
                <div class="question">
                    <h3>Soru 5:</h3>
                    <p>Aşağıdakilerden hangisi aktif sabotajlardan değildir?</p>
                    <ul>
                        <li class="correct">A) Fikir Sabotajı ✓</li>
                        <li>B) Yangın çıkarmak suretiyle sabotaj</li>
                        <li>C) Mekanik sabotaj</li>
                        <li>D) Biyolojik sabotaj</li>
                        <li>E) Patlayıcı maddelerle yapılan sabotaj</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Aktif sabotaj, fiziksel eylem gerektiren sabotaj türüdür. Fikir sabotajı, fiziksel bir eylem içermediği için aktif sabotaj olarak kabul edilmez. Diğer seçeneklerdeki sabotaj türleri (yangın, mekanik, biyolojik, patlayıcı) fiziksel eylem içerdiği için aktif sabotajdır.</p>
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
                        <p>Güvenlik Bilinci Eğitimi, havacılık sektöründe çalışan veya staj yapan tüm personele havacılık güvenliğinin önemini anlatmak amacıyla verilen temel bir eğitimdir. Bu eğitim, personelin güvenlik bilincini artırmayı ve havacılık güvenliğine katkıda bulunmalarını sağlamayı amaçlar.</p>
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
                        <p>MSHGP (Milli Sivil Havacılık Güvenlik Programı)'nin 13. baskısı yürürlüktedir.</p>
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
                        <li>D) Üyesi olunan uluslararası organizasyonlarla (ICAO, ECAC vb.) ile iletişim kurmak</li>
                        <li>E) Ulusal sivil havacılık güvenlik programının uygulanması ve güncellenmesinden</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanlarında asayişin sağlanması, Emniyet Genel Müdürlüğü'nün (EGM) görevidir. Ulusal sivil havacılık otoritesi (SHGM), havacılık güvenliği ile ilgili programların geliştirilmesi, uygulanması ve koordinasyonundan sorumludur.</p>
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
                        <p>Güvenlik tahditli alan, yolcuların ve bagajlarının son güvenlik kontrolünden geçirildiği ve güvenlik açısından temiz kabul edilen alandır. Bu alana sadece biniş kartı olan yolcular ve yetkili personel girebilir.</p>
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
                        <p>Güvenlik tahditli alanlara kimlik kartı olmadan giriş yapılması, havaalanı güvenliği açısından ciddi bir risktir. Bu nedenle, bu alanlara girişler sıkı bir şekilde kontrol edilmelidir.</p>
                    </div>
                </div>
            `
        },
{
            "title": "Soru 11",
            "content": `
                <div class="question">
                    <h3>Soru 11:</h3>
                    <p>Aşağıdakilerden hangisi havacılık güvenliği konusunda yetkili uluslararası kuruluşlardan biridir?</p>
                    <ul>
                        <li class="correct">A) ICAO ✓</li>
                        <li>B) NATO</li>
                        <li>C) WHO</li>
                        <li>D) UNESCO</li>
                        <li>E) WTO</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>ICAO (Uluslararası Sivil Havacılık Örgütü), havacılık güvenliği konusunda standartlar belirleyen ve üye ülkelerin bu standartlara uymasını sağlayan Birleşmiş Milletler'e bağlı bir kuruluştur.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 12",
            "content": `
                <div class="question">
                    <h3>Soru 12:</h3>
                    <p>Patlayıcı maddelerin tespitinde kullanılan dedektör köpeklerin temel avantajı nedir?</p>
                    <ul>
                        <li class="correct">A) Hızlı ve hassas koku algılama yeteneği ✓</li>
                        <li>B) Görüntüleme yapabilmesi</li>
                        <li>C) Metalik nesneleri tespit edebilmesi</li>
                        <li>D) Kimyasal analiz yapabilmesi</li>
                        <li>E) X-ray cihazı ile entegre çalışabilmesi</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Dedektör köpekler, patlayıcı maddelerin kokusunu insanlardan çok daha hızlı ve hassas bir şekilde algılayabilirler. Bu nedenle, havaalanı güvenliğinde patlayıcı madde tespitinde önemli bir rol oynarlar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 13",
            "content": `
                <div class="question">
                    <h3>Soru 13:</h3>
                    <p>Aşağıdakilerden hangisi güvenlik kontrol noktalarında görevli personelin sorumluluklarından biridir?</p>
                    <ul>
                        <li class="correct">A) Yolcuların ve bagajlarının güvenlik taramasını yapmak ✓</li>
                        <li>B) Hava trafik kontrol hizmeti vermek</li>
                        <li>C) Uçak bakım işlemlerini gerçekleştirmek</li>
                        <li>D) Yolcu bilet satış işlemlerini yürütmek</li>
                        <li>E) Uçak kalkış planlamasını yapmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik kontrol noktalarında görevli personelin temel sorumluluğu, yolcuların ve bagajlarının güvenlik taramasını yaparak yasaklı maddelerin geçişini engellemektir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 14",
            "content": `
                <div class="question">
                    <h3>Soru 14:</h3>
                    <p>Havalimanlarında uygulanan güvenlik önlemlerinden biri olan “profil analizi” yöntemi hangi amaçla kullanılır?</p>
                    <ul>
                        <li class="correct">A) Şüpheli kişileri tespit etmek ✓</li>
                        <li>B) Yolcuların bagaj ağırlığını kontrol etmek</li>
                        <li>C) Biletleme işlemlerini hızlandırmak</li>
                        <li>D) Uçuş programlarını düzenlemek</li>
                        <li>E) Uçuş esnasında kabin içi düzeni sağlamak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Profil analizi, yolcuların davranışlarını, görünüşlerini ve diğer özelliklerini inceleyerek şüpheli kişileri tespit etmeye yönelik bir güvenlik yöntemidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 15",
            "content": `
                <div class="question">
                    <h3>Soru 15:</h3>
                    <p>Bir havaalanında apron bölgesine giriş yapmak isteyen bir kişi aşağıdakilerden hangisini mutlaka taşımalıdır?</p>
                    <ul>
                        <li class="correct">A) Havalimanı Giriş kartı ✓</li>
                        <li>B) Yolcu bileti</li>
                        <li>C) Bagaj etiketi</li>
                        <li>D) Pilot lisansı</li>
                        <li>E) Pasaport</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Apron bölgesine giriş, sadece yetkili personelin erişimine açık bir alandır. Bu nedenle, bu bölgeye giriş yapabilmek için havalimanı giriş kartı gereklidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 16",
            "content": `
                <div class="question">
                    <h3>Soru 16:</h3>
                    <p>Aşağıdakilerden hangisi havalimanında görevli güvenlik personelinin temel yetkilerinden biridir?</p>
                    <ul>
                        <li class="correct">A) Şüpheli kişileri arama ve güvenlik prosedürlerine uygun hareket etme ✓</li>
                        <li>B) Uçuş planlarını değiştirme</li>
                        <li>C) Gümrük işlemlerini yürütme</li>
                        <li>D) Yolcu check-in işlemlerini yapma</li>
                        <li>E) Hava trafik kontrolü sağlama</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havalimanı güvenlik personelinin temel yetkisi, şüpheli kişileri aramak ve güvenlik prosedürlerine uygun olarak hareket etmektir. Diğer seçenekler, farklı birimlerin sorumluluğundadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 17",
            "content": `
                <div class="question">
                    <h3>Soru 17:</h3>
                    <p>Aşağıdakilerden hangisi havacılık güvenliği kapsamında yasaklı maddeler arasında yer almaz?</p>
                    <ul>
                        <li>A) Kesici ve delici aletler</li>
                        <li>B) Yanıcı sıvılar</li>
                        <li>C) Patlayıcı maddeler</li>
                        <li class="correct">D) Su şişesi ✓</li>
                        <li>E) Silahlar</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Su şişesi, belirli koşullar altında (örneğin, 100 ml'yi aşmayan miktarlarda) kabin bagajında taşınabilir. Diğer seçenekler ise havacılık güvenliği kapsamında kesinlikle yasaklı maddelerdir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 18",
            "content": `
                <div class="question">
                    <h3>Soru 18:</h3>
                    <p>Havalimanlarında güvenliği sağlamak amacıyla kullanılan kapı tipi metal dedektörler hangi prensibe göre çalışır?</p>
                    <ul>
                        <li class="correct">A) Elektromanyetik alan değişimini algılama ✓</li>
                        <li>B) Optik tarama yöntemi</li>
                        <li>C) Kimyasal analiz yöntemi</li>
                        <li>D) Termal görüntüleme sistemi</li>
                        <li>E) Ultrasonik dalga tespiti</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Kapı tipi metal dedektörler, elektromanyetik alan değişimini algılayarak çalışır. Metal bir nesne dedektörün içinden geçtiğinde, elektromanyetik alanda bir değişim meydana gelir ve dedektör bu değişimi algılayarak alarm verir.</p>
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
                        <p>Güvenlik Tahditli Alan'a girişte ilk kontrol, yolcunun kimliği ve biletinin kontrol edilmesidir. Bu kontrol, sadece yetkili kişilerin bu alana girmesini sağlamak amacıyla yapılır.</p>
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
                        <p>X-ray cihazları, bagaj içerisindeki yasaklı ve tehlikeli maddeleri tespit etmek amacıyla kullanılır. Bu sayede, havalimanı güvenliği sağlanır ve olası tehlikeler önlenir.</p>
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
                        <p>Yolcu ve bagaj taraması, havalimanı güvenliğinin temel unsurlarından biridir. Bu sayede, yasaklı ve tehlikeli maddelerin havalimanına girişi engellenir.</p>
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
                        <p>Patlayıcı madde tespit sistemleri, kimyasal iz analizi prensibine dayanır. Bu sistemler, patlayıcı maddelerin bıraktığı kimyasal izleri tespit ederek çalışır.</p>
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
                        <p>Güvenlik personeli, yolcu üzerinde üst aramasını sadece metal dedektör alarm verdiğinde veya şüpheli bir durum tespit edildiğinde yapar. Bu, yolcu haklarına saygı göstermek ve gereksiz aramaları önlemek amacıyla yapılır.</p>
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
                        <p>Yolcuların çantaları, X-ray tarayıcı cihazları ile kontrol edilir. Bu cihazlar, çantaların içindeki nesnelerin görüntülerini oluşturarak yasaklı ve tehlikeli maddelerin tespit edilmesini sağlar.</p>
                    </div>
                </div>
            `
        },
{
            "title": "Soru 25",
            "content": `
                <div class="question">
                    <h3>Soru 25:</h3>
                    <p>Havalimanı güvenlik noktalarında sıvı kısıtlaması neden uygulanmaktadır?</p>
                    <ul>
                        <li class="correct">A) Patlayıcı madde yapımında kullanılabilecek sıvıları sınırlamak için ✓</li>
                        <li>B) Yolcuların ağırlığını azaltmak için</li>
                        <li>C) Bagaj kaybını önlemek için</li>
                        <li>D) Uçak yakıt tüketimini azaltmak için</li>
                        <li>E) Yolcu konforunu artırmak için</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sıvı kısıtlaması, patlayıcı madde yapımında kullanılabilecek sıvıları sınırlamak amacıyla uygulanmaktadır. Bu sayede, havalimanı güvenliği artırılır ve olası tehlikeler önlenir.</p>
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
                        <p>Apron bölgesinde araç kullanacak personelin, apron sürücü belgesine sahip olması gerekmektedir. Bu belge, personelin apron bölgesinde araç kullanma yetkinliğine sahip olduğunu gösterir.</p>
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
                        <p>Havalimanı terminallerinde görev yapan güvenlik personeli, Sivil Havacılık Genel Müdürlüğü (SHGM) ve ilgili özel güvenlik şirketlerine bağlıdır. SHGM, havalimanı güvenliği standartlarını belirler ve denetlerken, özel güvenlik şirketleri ise bu standartlara uygun olarak güvenlik hizmeti sunar.</p>
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
                        <p>Yasaklı bir madde tespit edildiğinde, durum derhal yetkili güvenlik birimlerine bildirilmelidir. Bu, havalimanı güvenliğini sağlamak ve olası tehlikeleri önlemek için gereklidir.</p>
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
                        <p>Riskli yolcuların davranışları, profil analizi ve şüpheli hareketlerin izlenmesiyle değerlendirilir. Bu yöntemler, potansiyel tehlikeleri tespit etmek ve önlemek için kullanılır.</p>
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
                        <p>Güvenlik seviyesinin artırılması gerektiğinde, tehdit seviyesi yükseltilir ve ek güvenlik önlemleri alınır. Bu, havalimanı güvenliğini sağlamak ve olası tehlikeleri önlemek için gereklidir.</p>
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
                        <p>Yolcu üst taraması, el dedektörü ve fiziksel arama yöntemleriyle gerçekleştirilir. Bu yöntemler, yasaklı ve tehlikeli maddelerin tespit edilmesini sağlar.</p>
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
                        <p>Biyometrik güvenlik sistemleri, yüz tanıma, parmak izi okuma gibi yöntemlerle kimlik doğrulama ve sahte kimlik kullanımını önlemek amacıyla kullanılmaktadır. Bu sistemler, havalimanı güvenliğini artırmak için önemli bir araçtır.</p>
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
                        <p>CCTV kamera sistemleri, havalimanı güvenliğini izlemek ve olayları tespit etmek amacıyla kullanılmaktadır. Bu sistemler, güvenlik personelinin olaylara hızlı bir şekilde müdahale etmesini sağlar.</p>
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
                        <p>Patlayıcı madde tespit köpekleri, patlayıcı maddeleri koklayarak tespit etmek üzere eğitilirler. Bu köpekler, havalimanı güvenliğinde önemli bir rol oynarlar.</p>
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
                        <p>Sahipsiz bagaj tespit edildiğinde, ilk olarak güvenlik yetkililerine haber verilmeli ve bölge güvenlik çemberine alınmalıdır. Bu, olası tehlikeleri önlemek için gereklidir.</p>
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
                        <p>Manyetik kapılar, metalik nesnelerin oluşturduğu manyetik alan değişimini algılayarak çalışır. Bu sayede, metal nesnelerin geçişi tespit edilir ve güvenlik sağlanır.</p>
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
                        <p>X-ray cihazları, bagaj içerisindeki tehlikeli ve yasaklı maddeleri tespit etmek amacıyla kullanılmaktadır. Bu sayede, havalimanı güvenliği sağlanır ve olası tehlikeler önlenir.</p>
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
                        <p>Havalimanı güvenliği, tüm yolcuları, personeli ve ziyaretçileri kapsar. Bu, havalimanı güvenliğinin sağlanması için gereklidir.</p>
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
                        <p>Apron bölgesindeki güvenlik kameraları, güvenlik olaylarını izlemek ve kayıt altına almak amacıyla kullanılmaktadır. Bu, güvenlik personelinin olaylara hızlı bir şekilde müdahale etmesini sağlar.</p>
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
                        <p>Yasaklı maddeler listesi, Sivil Havacılık Genel Müdürlüğü (SHGM) ve uluslararası havacılık otoriteleri tarafından belirlenir. Bu, uluslararası standartlara uygun bir güvenlik seviyesi sağlamak için gereklidir.</p>
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
                        <p>Güvenlik personelinin temel sorumluluğu, yolcu ve bagaj güvenliğini sağlamaktır. Bu, havalimanı güvenliğinin sağlanması için en önemli unsurdur.</p>
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
                        <p>Güvenlik kontrol noktalarındaki en yaygın tehdit unsuru, yasaklı ve tehlikeli maddelerdir. Bu maddeler, havalimanı güvenliğini tehlikeye atabilir ve ciddi sonuçlara yol açabilir.</p>
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
                        <p>Biyometrik sistemler, parmak izi, yüz tanıma veya iris taraması gibi benzersiz biyolojik verileri kullanarak kimlik doğrulama yapar. Bu sistemler, yüksek güvenlik seviyesi sağlar.</p>
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
                        <p>Güvenlik görevlisi, şüpheli bir davranış fark ettiğinde durumu derhal yetkililere bildirmeli ve yolcuyu izlemelidir. Bu, olası tehlikeleri önlemek ve durumu kontrol altında tutmak için önemlidir.</p>
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
                        <p>Havalimanlarında sıvı kısıtlaması genellikle 100 mL ile sınırlıdır. Bu, patlayıcı madde yapımında kullanılabilecek sıvıları sınırlamak amacıyla uygulanır.</p>
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
                        <p>Apron bölgesine giriş yapacak bir kişinin, güvenlik geçiş kartı (Havalimanı kimlik kartı) sahibi olması gerekmektedir. Bu kart, kişinin apron bölgesine giriş yetkisini gösterir.</p>
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
                        <p>Şüpheli bir görüntü tespit edildiğinde, bagaj detaylı incelemeye alınır ve gerekirse açılır. Bu, güvenlik protokollerinin bir parçasıdır ve olası tehlikeleri önlemek için yapılır.</p>
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
                        <p>Termal kameralar, vücut ısısını ölçerek sağlık taraması yapmak amacıyla kullanılır. Özellikle salgın hastalık dönemlerinde, bu kameralar potansiyel risk taşıyan kişileri tespit etmek için önemlidir.</p>
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
                        <p>Yasaklı bir eşya bulunduğunda, eşya güvenlik birimlerine teslim edilir ve yolcu bilgilendirilir. Bu, güvenlik protokollerinin bir parçasıdır ve olası tehlikeleri önlemek için yapılır.</p>
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
                        <p>Apron bölgesinde araç kullanımı sırasında, özel apron trafik kuralları ve hız limitlerine uyulmalıdır. Bu, güvenli bir çalışma ortamı sağlamak ve kazaları önlemek için önemlidir.</p>
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
                        <p>Patlayıcı iz dedektörleri, bagaj veya kişi üzerindeki kimyasal parçacıkları analiz ederek patlayıcı madde izlerini tespit eder. Bu, yüksek hassasiyetli bir güvenlik kontrolü sağlar.</p>
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
                        <p>Havalimanlarında güvenlik kontrollerinin temel amacı, tehditleri ve yasa dışı maddeleri tespit ederek uçuş güvenliğini sağlamaktır. Bu kontroller, yolcuların, personelin ve uçakların güvenliğini sağlamak için yapılır.</p>
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
                        <p>Apron bölgesinde yayaların hareket etmesi, güvenlik ve düzeni sağlamak amacıyla belirlenen yaya yolları üzerinden yapılmalıdır. Bu, kazaları önlemek ve operasyonların sorunsuz devam etmesini sağlamak için önemlidir.</p>
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
                        <p>Havalimanı güvenlik noktalarında kimlik doğrulaması zorunludur. Bu, yolcuların kimliklerinin doğrulanması ve güvenliğin sağlanması için gereklidir.</p>
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
                        <p>Olağanüstü güvenlik durumu ilan edildiğinde, ek güvenlik önlemleri devreye girer ve risk seviyesi artırılır. Bu, potansiyel tehditlere karşı daha yüksek bir güvenlik seviyesi sağlamak için yapılır.</p>
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
                        <p>Güvenlik kameralarının kayıtları, olay tespiti ve güvenlik denetimleri için kullanılır. Bu, havalimanı güvenliğinin sağlanması ve olası suçların önlenmesi için önemlidir.</p>
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
                        <p>Ayakkabıların çıkarılması, şüpheli bir durum veya ek güvenlik taraması gerektiğinde istenebilir. Bu, güvenlik protokollerinin bir parçasıdır ve olası tehlikeleri önlemek için yapılır.</p>
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
                        <p>Kırmızı alarm seviyesi, bir havalimanındaki en yüksek güvenlik seviyesidir. Bu seviye, ciddi bir tehdit veya tehlike durumunda uygulanır ve ek güvenlik önlemleri alınmasını gerektirir.</p>
                    </div>
                </div>
            `
        },
{
            "title": "Soru 59",
            "content": `
                <div class="question">
                    <h3>Soru 59:</h3>
                    <p>I) Üzerine su veya başka bir madde atılmaz, örtülmez.<br>II) Şüpheli paketi güvenli bir bölgeye çekmek.<br>III) Çevrede başka bir paket olabileceği unutulmaz.<br>IV) Çevresinde haberleşme cihazları kullanılmaz.<br>Bomba ve şüpheli paket tespitinde hareket tarzında yukarıdakilerden hangisi yapılmaz?</p>
                    <ul>
                        <li>A) I, II ve III</li>
                        <li class="correct">B) II ve III ✓</li>
                        <li>C) I, II ve IV</li>
                        <li>D) I ve IV</li>
                        <li>E) I ve II</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şüpheli paket tespitinde, paketin güvenli bir bölgeye çekilmesi ve çevrede başka bir paket olabileceği ihtimalinin göz ardı edilmesi doğru hareket tarzları değildir. Şüpheli paketlere müdahale edilmemeli ve olay yeri derhal yetkililere bildirilmelidir.</p>
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
                        <p>Hassas tesisler, havaalanı operasyonlarının sorunsuz bir şekilde devamlılığı için kritik öneme sahip olan ve zarar gördüklerinde ciddi aksamalara neden olabilecek tesislerdir. Bu tesisler genellikle kontrol merkezleri, enerji santralleri, iletişim kuleleri gibi yerlerdir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 61",
            "content": `
                <div class="question">
                    <h3>Soru 61:</h3>
                    <p>I) Yangın ihtimaline karşı hazırlıklı bulunulur<br>II) Enkaz ve yıkıntılar arasında gelişi güzel dolaşılmaz<br>III) Asansör yerine merdiven kullanılır<br>IV) Talimat verilmeden kesinlikle binaya veya riskli alana tekrar girilmez<br>Bir patlama olması halinde yukarıdakilerden hangisi/hangileri yapılır?</p>
                    <ul>
                        <li>A) I ve III</li>
                        <li>B) I ve II</li>
                        <li class="correct">C) I, II, III ve IV ✓</li>
                        <li>D) II, III ve IV</li>
                        <li>E) Yalnız II</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Patlama sonrası, yangın ihtimaline karşı hazırlıklı olunmalı, enkaz ve yıkıntılar arasında gelişi güzel dolaşılmamalı, asansör yerine merdiven kullanılmalı ve talimat verilmeden kesinlikle binaya veya riskli alana tekrar girilmemelidir. Bu önlemler, güvenliği sağlamak ve olası tehlikeleri önlemek için önemlidir.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 62",
            "content": `
                <div class="question">
                    <h3>Soru 62:</h3>
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
                        <p>Güvenlik Bilinci Eğitimi, havacılık sektöründe çalışan veya staj yapan tüm personele havacılık güvenliğinin önemini anlatmak amacıyla verilen temel bir eğitimdir. Bu eğitim, personelin güvenlik bilincini artırmayı ve havacılık güvenliğine katkıda bulunmalarını sağlamayı amaçlar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 63",
            "content": `
                <div class="question">
                    <h3>Soru 63:</h3>
                    <p>Havaalanlarında ICAO'nun önerileri doğrultusunda gözlemler ve tavsiyelerde bulunmak üzere oluşturulan birim aşağıdakilerden hangisidir?</p>
                    <ul>
                        <li>A) SHGM</li>
                        <li class="correct">B) EADB ✓</li>
                        <li>C) MGK</li>
                        <li>D) EADUK</li>
                        <li>E) EGM</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>EADB (Emniyet Araştırma ve Denetleme Birimi), havaalanlarında ICAO standartlarına uygunluğu denetleyen ve tavsiyelerde bulunan resmi birimdir. Bu birim:</p>
                        <ul>
                            <li>Havacılık güvenliği konusunda uluslararası standartların uygulanmasını sağlar</li>
                            <li>Düzenli denetimler gerçekleştirir</li>
                            <li>Güvenlik prosedürlerinin geliştirilmesine katkıda bulunur</li>
                            <li>ICAO standartlarına uygunluğu kontrol eder</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 64",
            "content": `
                <div class="question">
                    <h3>Soru 64:</h3>
                    <p>1- Bölge ve kritik yerler, gayri muayyen zamanlarda devriyelerle taranır, kapalı devre televizyon ile gözetlenerek güvenliği sağlanır<br>2-Hava meydanlarında kişilere verilen giriş kartlarında, kart sahibinin fotoğrafı, kimliği hava meydanındaki görevi, bu görevi gereği hava meydanı içinde girebileceği yerler ve kartın geçerlilik süresi belirtilir.<br>3-Havaalanında uçakların bulunduğu bölgelerin güvenliği, uçuş pistleri, uçak taksi yolları ve apronların umuma açık olan sahalardan, fiziki engellerle ayrılması suretiyle sağlanır.<br>4-Yolcuların uçağa binmeleri amacıyla kullanılan kapılar, yolcu bulunmadığı zamanlarda devamlı kilitli tutulabilecek yapıda olmalı, yetkililerce sürekli olarak kontrol edilmelidir.<br>Yukarıdakilerden hangileri havaya dönük bölümün güvenliği için alınacak tedbirler arasında yer alır?</p>
                    <ul>
                        <li>A) 1,3 ve 4</li>
                        <li>B) 1, 2 ve 3</li>
                        <li>C) 2 ve 3</li>
                        <li>D) 1 ve 4</li>
                        <li class="correct">E) 1, 2, 3 ve 4 ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Hava tarafı güvenliği, havaalanının uçakların hareket ettiği ve yolcuların uçağa bindiği kısımlarının güvenliğini kapsar. Bu nedenle, verilen tüm önlemler hava tarafı güvenliği için alınacak tedbirler arasındadır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 65",
            "content": `
                <div class="question">
                    <h3>Soru 65:</h3>
                    <p>Aşağıdakilerden hangisi aktif sabotajlardan değildir?</p>
                    <ul>
                        <li>A) Biyolojik sabotaj</li>
                        <li>B) Yangın çıkarmak suretiyle sabotaj</li>
                        <li>C) Mekanik sabotaj</li>
                        <li class="correct">D) Fikir sabotajı ✓</li>
                        <li>E) Patlayıcı maddelerle yapılan sabotaj</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Aktif sabotaj, fiziksel eylem gerektiren sabotaj türüdür. Fikir sabotajı, fiziksel bir eylem içermediği için aktif sabotaj olarak kabul edilmez. Diğer seçeneklerdeki sabotaj türleri (yangın, mekanik, biyolojik, patlayıcı) fiziksel eylem içerdiği için aktif sabotajdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 66",
            "content": `
                <div class="question">
                    <h3>Soru 66:</h3>
                    <p>Genel olarak aşağıdakilerden hangisi şüpheli yolcunun davranış özelliklerinden değildir?</p>
                    <ul>
                        <li class="correct">A) Tarama görevlisinden bakışlarını kaçırmaz ✓</li>
                        <li>B) Sıradaki belirli bir grubun arasına karışmaya çalışır</li>
                        <li>C) Sırada iken tarama görevlilerini izlemeye çalışır</li>
                        <li>D) Yürüyüşünde topallama, hızlı yürüme gibi açık anormallikler görünür</li>
                        <li>E) Eli ile dışarıdan ceplerini yoklar, kontrol eder</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Şüpheli yolcular genellikle dikkat çekmemeye çalışır ve tarama görevlileriyle göz temasından kaçınırlar. Tarama görevlisinden bakışlarını kaçırmamak, şüpheli bir yolcu için tipik bir davranış değildir.</p>
                    </div>
                </div>
            `
 
},
        {
            "title": "Soru 67",
            "content": `
                <div class="question">
                    <h3>Soru 67:</h3>
                    <p>Daha önce bir ülke tarafından kanunen kabul edilen ya da bir ülkeye kanuni olmayan yollardan giren, ancak ilgili ülkenin yetkili mercilerince resmi olarak söz konusu ülkeyi terk etmesi talep edilen kişilere ne ad verilir?</p>
                    <ul>
                        <li>A) Kanuni Vesayet veya Gözetim Altındaki Kişiler</li>
                        <li>B) Kabul Edilmeyen kişiler</li>
                        <li>C) Kural Dışı (Asi) Yolcular</li>
                        <li class="correct">D) Sınır Dışı Edilen kişiler ✓</li>
                        <li>E) Sahipsiz Kişiler</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Sınır dışı edilen kişiler, bir ülkenin yetkili mercileri tarafından resmi olarak ülkeyi terk etmesi talep edilen kişilerdir. Bu kişiler, genellikle yasal olmayan yollarla ülkeye girmiş veya yasal statülerini kaybetmişlerdir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 68",
            "content": `
                <div class="question">
                    <h3>Soru 68:</h3>
                    <p>I) Güvenlik personeli Ek-17 yer almasa da endişe duydukları maddenin girişini engelleyebilir.<br>II) Yasaklı maddeler konusunda yolcunun bilgilendirilmesi havayolunun sorumluluğunda yer.<br>III) Yolcu dışındaki kişiler yasaklı madde taşımaları konusunda yetkilendirilebilir.<br>IV) Ek-17'de listelenen maddeler hiçbir şekilde güvenlik tahditli alanlarda depolanamaz.<br>Yasaklı maddelerin havayolu ile taşınmasına ilişkin yukarıdakilerden hangisi/hangileri yanlıştır?</p>
                    <ul>
                        <li>A) I ve II</li>
                        <li>B) Yalnız I</li>
                        <li>C) Yalnız IV</li>
                        <li>D) I, II ve IV</li>
                        <li class="correct">E) Yalnız III ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yasaklı maddelerin taşınması konusunda yolcu dışındaki kişilerin yetkilendirilmesi mümkün değildir. Güvenlik personeli, Ek-17'de yer almasa da endişe duydukları maddenin girişini engelleyebilir. Yasaklı maddeler konusunda yolcunun bilgilendirilmesi havayolunun sorumluluğundadır. Ek-17'de listelenen maddeler güvenlik tahditli alanlarda depolanamaz.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 69",
            "content": `
                <div class="question">
                    <h3>Soru 69:</h3>
                    <p>Yolcu mülakatı sırasında aşağıdakilerden hangisi yapılmamalıdır?</p>
                    <ul>
                        <li class="correct">A) Sorgulayıcı tutum sergilemek ✓</li>
                        <li>B) Seyahat gerekçesini öğrenmek</li>
                        <li>C) Göz temasında bulunmak</li>
                        <li>D) Yolcuyu dikkatle dinleyip, cevaplarda tutarlılık aramak</li>
                        <li>E) Yolculara kibar ve arkadaşça davranmak</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yolcu mülakatı sırasında sorgulayıcı tutum sergilemekten kaçınılmalıdır. Mülakat, yolcunun seyahat gerekçesini öğrenmek, göz temasında bulunmak, yolcuyu dikkatle dinleyip cevaplarda tutarlılık aramak ve yolculara kibar ve arkadaşça davranmak gibi unsurları içermelidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 70",
            "content": `
                <div class="question">
                    <h3>Soru 70:</h3>
                    <p>Yaya devriye yolu ile çevre tel örgü arasındaki mesafe en az kaç metre olmalıdır?</p>
                    <ul>
                        <li class="correct">A) 10 ✓</li>
                        <li>B) 7,5</li>
                        <li>C) 5</li>
                        <li>D) 15</li>
                        <li>E) 12,5</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yaya devriye yolu ile çevre tel örgü arasındaki mesafe en az 10 metre olmalıdır. Bu mesafe, güvenlik personelinin devriye sırasında rahatça hareket edebilmesini ve olası tehlikelere karşı hızlı müdahale edebilmesini sağlar.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 71",
            "content": `
                <div class="question">
                    <h3>Soru 71:</h3>
                    <p>"Güvenlik hizmetlerinin uygulanmasından doğrudan görevli ve sorumlu olan kolluk ve özel güvenlik görevlileri (güvenlik personeli) mevzuat kapsamında kendilerine verilen görevleri yerine getirir."<br>Aşağıdakilerden hangisi bu görevlerden biri değildir?</p>
                    <ul>
                        <li>A) Güvenlik tahditli alanlara giriş için havaalanı giriş kartları ve araç plakalarının kontrolü</li>
                        <li>B) Yolcuların aranması ve kontrolü</li>
                        <li>C) Güvenlik tahditli alanlara giriş kontrolü</li>
                        <li class="correct">D) Kişilerin, uçak altı ve kabin bagajlarının gidecekleri yere güvenle ulaşmalarının sağlaması ✓</li>
                        <li>E) Devriye, refakat ve nöbet hizmetleri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Güvenlik personelinin görevleri arasında, kişilerin, uçak altı ve kabin bagajlarının gidecekleri yere güvenle ulaşmalarını sağlamak yer almaz. Bu, yer hizmetleri ve havayolu şirketlerinin sorumluluğundadır. Güvenlik personelinin temel görevleri, güvenlik tahditli alanlara giriş kontrolü, yolcuların aranması ve kontrolü, devriye, refakat ve nöbet hizmetleridir.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 72",
            "content": `
                <div class="question">
                    <h3>Soru 72:</h3>
                    <p>I) Civali termometre<br>II) 2 kg kuru buz<br>III) Askeri mühir mat<br>IV) Lehim makinesi<br>Yukarıdaki maddelerin hangisinin/hangilerinin taşınmasında pilotun onayı gerekir?</p>
                    <ul>
                        <li>A) II ve III</li>
                        <li class="correct">B) Yalnız III ✓</li>
                        <li>C) Yalnız I</li>
                        <li>D) III ve IV</li>
                        <li>E) Yalnız IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Askeri mühimmat, taşınması özel izin gerektiren bir maddedir. Bu nedenle, askeri mühimmatın taşınması için pilotun onayı gereklidir. Diğer maddeler ise taşınması için özel izin gerektirmeyen maddelerdir.</p>
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
                        <p>Temel Sivil Havacılık Güvenliği Eğitiminin tazeleme eğitim süresi, 2 yılda bir 8 ders saatidir. Bu, personelin bilgilerinin güncel tutulması ve güvenlik standartlarına uygun hareket etmelerinin sağlanması için önemlidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 74",
            "content": `
                <div class="question">
                    <h3>Soru 74:</h3>
                    <p>I) Elle arama<br>II) Gözle kontrol yöntemi<br>III) Arama için destekleyici yöntemler<br>Araçların aranması ile ilgili yukarıdaki arama yöntemlerinden hangisi/hangileri kullanılır?</p>
                    <ul>
                        <li>A) II ve III</li>
                        <li>B) Yalnız I</li>
                        <li>C) I ve II</li>
                        <li class="correct">D) I, II ve III ✓</li>
                        <li>E) Yalnız III</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Araçların aranmasında elle arama, gözle kontrol yöntemi ve arama için destekleyici yöntemler kullanılır. Bu yöntemler, aracın detaylı bir şekilde incelenmesini ve olası tehlikelerin tespit edilmesini sağlar.</p>
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
                        <p>CCTV sistemi, lens, kamera, kayıt cihazı ve monitör/ekran gibi bileşenlerden oluşur. Kart kontrollü geçiş sistemi, CCTV sisteminin bir parçası değildir. Kart kontrollü geçiş sistemi, yetkisiz kişilerin belirli alanlara girişini engellemek için kullanılır.</p>
                    </div>
                </div>
            `
   
},
        {
            "title": "Soru 76",
            "content": `
                <div class="question">
                    <h3>Soru 76:</h3>
                    <p>I) Yaya ve Motorize Devriye Yolları<br>II) Aydınlatma<br>III) Görüşü Engeleyen Unsurlar<br>IV) Kapalı devre kamera sistemi<br>Yukarıdakilerden hangisi/hangileri havaalanı çevre güvenliği yapısal unsurlardandır?</p>
                    <ul>
                        <li>A) Yalnız I</li>
                        <li class="correct">B) I, II, III ve IV ✓</li>
                        <li>C) I ve II</li>
                        <li>D) I, II ve III</li>
                        <li>E) II, III ve IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanı çevre güvenliği yapısal unsurları, yaya ve motorize devriye yolları, aydınlatma, görüşü engelleyen unsurlar ve kapalı devre kamera sistemini içerir. Bu unsurlar, havaalanı çevresinin güvenliğini sağlamak için birlikte çalışır.</p>
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
                        <p>Havaalanı giriş kartı üzerinde, kart sahibinin görevi, personel sicil numarası, kartın geçerlilik süresi ve kartın geçerli olduğu havaalanı gibi bilgiler yer alır. Personelin öğrenim durumu, havaalanı giriş kartı üzerinde yer almayan bir bilgidir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 78",
            "content": `
                <div class="question">
                    <h3>Soru 78:</h3>
                    <p>"Yönlendirme görevlisi, tüm güvenlik kontrol noktalarında bulunan ….....çizgi önünde görev yapacaktır. .......... çizgi bulunmayan noktalarda kapı detektörünün 1 metre önünde bulunulması gerekir."<br>Yukarıdaki cümledeki boşluklara gelecek doğru seçenek aşağıdakilerden hangisidir?</p>
                    <ul>
                        <li class="correct">A) KIRMIZI ✓</li>
                        <li>B) YEŞİL</li>
                        <li>C) MAVİ</li>
                        <li>D) SİYAH</li>
                        <li>E) TURUNCU</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Yönlendirme görevlisi, tüm güvenlik kontrol noktalarında bulunan KIRMIZI çizgi önünde görev yapacaktır. KIRMIZI çizgi bulunmayan noktalarda kapı detektörünün 1 metre önünde bulunulması gerekir.</p>
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
                        <p>Transfer yolcuları, potansiyel tehlike arz eden yolcular arasında yer almaz. Kabul edilmeyen yolcular, hukuki işlemlere maruz kalmış kişiler, deporte yolcular ve akli dengesi yerinde olmayan yolcular, potansiyel tehlike arz eden yolcular olarak kabul edilir.</p>
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
                        <p>Yolcunun dokümanları, bagajı, giyim tarzı, hareketleri, seyahat gerekçesi gibi unsurlar yolcu mülakatı olarak ele alınmaktadır. Yolcu mülakatı, yolcunun risk değerlendirmesi için önemli bir araçtır.</p>
                    </div>
                </div>
            `
    
},
        {
            "title": "Soru 81",
            "content": `
                <div class="question">
                    <h3>Soru 81:</h3>
                    <p>I) Dart<br>II) Zıpkın<br>III) Dağcılık malzemeleri (krampon, çekiç, balta, tırmanma sopaları)<br>IV) Kayak ve batonlar<br>Yukarıdakilerden hangisi/hangileri 'Sivri /Keskin/Delici Eşyalar/Nesneler'dendir?</p>
                    <ul>
                        <li>A) I, II ve III</li>
                        <li>B) Yalnız I</li>
                        <li>C) I ve II</li>
                        <li class="correct">D) I, II, III ve IV ✓</li>
                        <li>E) II, III ve IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Dart, zıpkın, dağcılık malzemeleri ve kayak batonları, sivri, keskin veya delici eşyalar/nesneler olarak kabul edilir. Bu tür eşyaların havaalanlarında taşınması belirli kurallara tabidir.</p>
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
                        <p>Beden dilinin öğeleri arasında gözler, jest ve mimikler, baş ve duruş yer alır. Ses, beden dilinin bir öğesi değil, sözlü iletişimin bir parçasıdır.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 83",
            "content": `
                <div class="question">
                    <h3>Soru 83:</h3>
                    <p>1. Personel ve yolcu araçları için ayrı park yerleri düzenlenmelidir.<br>2. Otobüsler, servis araçları ve taksiler için ayrı park yerleri düzenlenmelidir.<br>Terminal binasının ön kısmında bomba yerleştirilmiş araçların doğuracağı tehlikeyi asgariye indirmek için 50 m mesafeye araç yaklaşması ve park etmelerine mani olacak fiziki düzenlemeler yapılmalıdır.<br>Terminalin ön kısmına, sadece yolcu indirecek süreyle araç girişine müsaade edilmelidir.<br>Araç park alanları hakkında yukarıdakilerden hangisi/hangileri doğrudur?</p>
                    <ul>
                        <li>A) I</li>
                        <li>B) II ve III</li>
                        <li>C) Yalnız I</li>
                        <li>D) I ve II</li>
                        <li class="correct">E) I, II, III ve IV ✓</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Araç park alanları hakkında verilen tüm bilgiler doğrudur. Personel ve yolcu araçları için ayrı park yerleri düzenlenmeli, otobüsler, servis araçları ve taksiler için ayrı park yerleri düzenlenmeli, terminal binasının ön kısmında 50 m mesafeye araç yaklaşması ve park etmelerine mani olacak fiziki düzenlemeler yapılmalı ve terminalin ön kısmına sadece yolcu indirecek süreyle araç girişine müsaade edilmelidir.</p>
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
                        <li class="correct">A) Şahsı ve silahı muhafaza altına alıp genel kolluğa haber verir. ✓</li>
                        <li>B) Ateşli silaha el koyarak şahsı serbest bırakır.</li>
                        <li>C) Ateşli silahı sökerek parçalarına ayırır ve şahsa iade eder.</li>
                        <li>D) Tespit edilen kişiyle ilgili bilgi kolluk kuvvetlerine iletir.</li>
                        <li>E) Tespit edilen silahlı kişiyi tutuklar.</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Özel güvenlik görevlisi, ruhsatsız ateşli silah taşıyan bir kişiyi tespit ettiğinde, şahsı ve silahı muhafaza altına alıp genel kolluğa haber vermelidir. Özel güvenlik görevlisinin tutuklama yetkisi yoktur ve silahı parçalarına ayırma veya şahsı serbest bırakma gibi yetkileri bulunmamaktadır.</p>
                    </div>
                </div>
            `
},
        {
            "title": "Soru 85",
            "content": `
                <div class="question">
                    <h3>Soru 85:</h3>
                    <p>I) Aynı anda birden fazla işi dikkatlice takip eder<br>II) Konuşmacıyı sözünü kesmeden dinler<br>III) Duygu ve düşüncelerini anlamaya çalışır<br>IV) Dikkatini karşısındaki kişiye verir<br>Aşağıdakilerden hangisi/hangileri, iyi bir dinleyicinin özelliklerinden değildir?</p>
                    <ul>
                        <li class="correct">A) Yalnız I ✓</li>
                        <li>B) Yalnız III</li>
                        <li>C) II ve III</li>
                        <li>D) III ve IV</li>
                        <li>E) II ve IV</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>İyi bir dinleyici, aynı anda birden fazla işi dikkatlice takip etmez. İyi bir dinleyici, karşısındaki kişiye odaklanır ve dikkatini dağıtmaz. İyi bir dinleyici, konuşmacıyı sözünü kesmeden dinler, duygu ve düşüncelerini anlamaya çalışır ve dikkatini karşısındaki kişiye verir.</p>
                    </div>
                </div>
            `
        },
        {
            "title": "Soru 86",
            "content": `
                <div class="question">
                    <h3>Soru 86:</h3>
                    <p>MSHGP'nın kaçıncı baskısı yürürlüktedir?</p>
                    <ul>
                        <li class="correct">A) 13 ✓</li>
                        <li>B) 11</li>
                        <li>C) 14</li>
                        <li>D) 10</li>
                        <li>E) 12</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>MSHGP (Milli Sivil Havacılık Güvenlik Programı)'nin 13. baskısı yürürlüktedir.</p>
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
                        <li>B) Ulusal sivil havacılık güvenlik programının uygulanması ve güncellenmesinden havaalanlarında asayişin sağlanması ✓</li>
                        <li>C) Üyesi olunan uluslararası organizasyonlarla (ICAO, ECAC vb.) iletişim kurmak</li>
                        <li>D) Eylemlerin ilgili bakanlıklar, daireler ve diğer hükümet organları arasında koordineli olarak yürütülmesi</li>
                        <li>E) Hiçbiri</li>
                    </ul>
                    <div class="explanation">
                        <h4>Açıklama:</h4>
                        <p>Havaalanlarında asayişin sağlanması, Emniyet Genel Müdürlüğü'nün (EGM) görevidir. Ulusal sivil havacılık otoritesi (SHGM), havacılık güvenliği ile ilgili programların geliştirilmesi, uygulanması ve koordinasyonundan sorumludur.</p>
                    </div>
                </div>
            `
     },

    ]
};

// Dışa aktarma
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bookData;
} 
