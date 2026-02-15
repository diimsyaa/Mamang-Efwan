// Data edukasi lengkap
const educationData = {
    'f1': {
        title: '🏎️ Apa itu Formula 1?',
        image: 'https://cdn.britannica.com/66/258266-050-BD8FC43A/Max-Verstappen-Grand-Prix-of-Singapore.jpg',
        content: `
            <p>Formula 1 (F1) adalah kelas tertinggi balap mobil single-seater internasional yang disetujui oleh Fédération Internationale de l'Automobile (FIA). Nama "Formula" mengacu pada seperangkat aturan yang harus diikuti oleh semua peserta. Formula 1 dimulai pada tahun 1950 dan merupakan salah satu olahraga motor paling prestisius di dunia.</p>

            <h4>Sejarah Formula 1</h4>
            <p>Kejuaraan Dunia F1 dimulai pada tahun 1950 di Silverstone, Inggris. Sejak saat itu, F1 telah berkembang menjadi fenomena global dengan balapan di berbagai benua. Legenda seperti Juan Manuel Fangio, Ayrton Senna, Michael Schumacher, dan Lewis Hamilton telah membuat sejarah di sport ini.</p>

            <h4>Mengapa F1 Istimewa?</h4>
            <ul>
                <li><strong>Teknologi Cutting-Edge:</strong> F1 adalah laboratorium teknologi otomotif. Inovasi dari F1 sering diterapkan pada mobil produksi.</li>
                <li><strong>Kecepatan Ekstrem:</strong> Mobil F1 dapat mencapai kecepatan lebih dari 370 km/jam dan akselerasi 0-100 km/jam dalam 2.6 detik.</li>
                <li><strong>Presisi Engineering:</strong> Setiap komponen dirancang dengan presisi milimeter untuk performa maksimal.</li>
                <li><strong>Global Competition:</strong> F1 berlangsung di 20+ negara dengan audiens global lebih dari 1.9 miliar penonton.</li>
            </ul>

            <h4>Filosofi F1</h4>
            <p>F1 bukan hanya tentang driver yang paling cepat, tetapi kombinasi sempurna antara:</p>
            <ul>
                <li>Skill driver yang luar biasa</li>
                <li>Engineering tim yang brilian</li>
                <li>Strategi race yang tepat</li>
                <li>Teknologi mobil yang superior</li>
                <li>Kerjasama tim yang solid</li>
            </ul>

            <p>Ini adalah olahraga yang menggabungkan kecepatan, teknologi, strategi, dan human drama dalam satu paket yang mendebarkan!</p>
        `
    },
    'hybrid': {
        title: '⚙️ Teknologi Hybrid Power Unit',
        image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
        content: `
            <p>Sejak 2014, F1 menggunakan Power Unit Hybrid V6 turbo yang merupakan mesin paling kompleks dan efisien dalam sejarah F1. Power unit ini menghasilkan lebih dari 1000 HP sambil mempertahankan efisiensi bahan bakar yang luar biasa.</p>

            <h4>Komponen Power Unit</h4>
            <ul>
                <li><strong>ICE (Internal Combustion Engine):</strong> Mesin V6 1.6L turbo dengan putaran maksimal 15,000 RPM yang menghasilkan sekitar 800 HP.</li>
                <li><strong>MGU-K (Motor Generator Unit - Kinetic):</strong> Menangkap energi kinetik saat pengereman dan mengubahnya menjadi listrik, memberikan boost 163 HP tambahan.</li>
                <li><strong>MGU-H (Motor Generator Unit - Heat):</strong> Menangkap energi panas dari gas buang turbo dan mengubahnya menjadi listrik.</li>
                <li><strong>Turbocharger:</strong> Meningkatkan tekanan udara masuk untuk pembakaran yang lebih efisien.</li>
                <li><strong>Energy Store (Battery):</strong> Menyimpan energi yang dikumpulkan untuk digunakan saat akselerasi.</li>
                <li><strong>Control Electronics:</strong> Mengatur aliran energi antara semua komponen.</li>
            </ul>

            <h4>Cara Kerja Sistem Hybrid</h4>
            <p><strong>Saat Pengereman:</strong> MGU-K menangkap energi kinetik dan menyimpannya di battery. MGU-H menangkap energi panas dari turbo.</p>
            <p><strong>Saat Akselerasi:</strong> Battery melepaskan energi ke MGU-K untuk memberikan boost power hingga 163 HP tambahan. MGU-H membantu mengeliminasi turbo lag.</p>

            <h4>Keunggulan Teknologi Hybrid</h4>
            <ul>
                <li><strong>Efisiensi:</strong> 50% efisiensi thermal - tertinggi di industri otomotif</li>
                <li><strong>Power:</strong> Total output lebih dari 1000 HP</li>
                <li><strong>Sustainability:</strong> Penggunaan bahan bakar 35% lebih sedikit dari era V8</li>
                <li><strong>Innovation:</strong> Teknologi yang ditransfer ke mobil jalan raya</li>
            </ul>

            <p>Power unit F1 modern adalah keajaiban engineering yang menunjukkan bahwa performa tinggi dan efisiensi dapat berjalan bersama!</p>
        `
    },
    'aero': {
        title: '🔧 Aerodinamika F1',
        image: 'https://imgx.gridoto.com/crop/0x0:0x0/700x465/photo/2019/04/26/2224421739.jpg',
        content: `
            <p>Aerodinamika adalah aspek paling krusial dalam desain mobil F1. Setiap permukaan, setiap sudut, setiap celah dirancang untuk mengontrol aliran udara dan menghasilkan downforce maksimal sambil meminimalkan drag.</p>

            <h4>Prinsip Dasar Aerodinamika F1</h4>
            <p><strong>Downforce:</strong> Gaya ke bawah yang digenerate oleh udara yang mengalir di atas dan di bawah mobil. Downforce membuat mobil "menempel" ke track, memungkinkan kecepatan tikungan yang lebih tinggi.</p>
            <p><strong>Drag:</strong> Hambatan udara yang melawan gerakan mobil. Tim berusaha meminimalkan drag untuk kecepatan straight line maksimal.</p>

            <h4>Komponen Aerodinamis Utama</h4>
            <ul>
                <li><strong>Front Wing:</strong> Komponen aero pertama yang membelah udara. Mengatur aliran udara ke seluruh mobil dan menghasilkan downforce depan (15-20% total downforce).</li>
                <li><strong>Rear Wing:</strong> Menghasilkan mayoritas downforce (30-35% total downforce). Sudut wing bisa disesuaikan untuk berbagai track.</li>
                <li><strong>Floor & Diffuser:</strong> Area paling penting! Floor dan diffuser menghasilkan 40-50% total downforce melalui ground effect.</li>
                <li><strong>Sidepods:</strong> Mengarahkan udara ke radiator untuk cooling sambil mengoptimalkan aliran udara ke rear wing.</li>
                <li><strong>Bargeboards (2021-):</strong> Komponen kompleks yang mengarahkan aliran udara "kotor" dari roda depan.</li>
            </ul>

            <h4>Ground Effect</h4>
            <p>Mobil F1 menggunakan prinsip Venturi: udara yang mengalir di bawah mobil dipercepat melalui tunnels di floor, menciptakan area tekanan rendah yang "menyedot" mobil ke track.</p>

            <h4>Trade-off Aero</h4>
            <ul>
                <li><strong>High Downforce Setup:</strong> Untuk track dengan banyak tikungan (Monaco) - lebih lambat di straight tapi sangat cepat di tikungan</li>
                <li><strong>Low Downforce Setup:</strong> Untuk track high-speed (Monza) - cepat di straight tapi less grip di tikungan</li>
            </ul>

            <h4>Fakta Menarik</h4>
            <p>Pada kecepatan race, mobil F1 menghasilkan downforce 3-4 kali berat mobilnya. Secara teori, mobil F1 bisa berjalan terbalik di langit-langit terowongan pada kecepatan 180 km/jam!</p>
        `
    },
    'format': {
        title: '🏁 Format Weekend F1',
        image: 'https://media.formula1.com/image/upload/c_lfill,w_3392/q_auto/v1740000000/content/dam/fom-website/manual/Misc/2021manual/2021ItalianGPManuals/Thursday/UPDATEDITA2021Sprint-quali-format.webp',
        content: `
            <p>Weekend F1 adalah marathon 3 hari yang penuh aksi, strategi, dan drama. Setiap sesi memiliki tujuan spesifik yang membangun menuju Grand Prix pada hari Minggu.</p>

            <h4>JUMAT - Latihan Bebas</h4>
            <p><strong>FP1 (Free Practice 1) - 60 menit:</strong></p>
            <ul>
                <li>Driver dan engineer pertama kali merasakan track conditions</li>
                <li>Testing aero packages dan setup dasar</li>
                <li>Long run untuk simulasi race pace</li>
                <li>Mengumpulkan data untuk optimasi</li>
            </ul>

            <p><strong>FP2 (Free Practice 2) - 60 menit:</strong></p>
            <ul>
                <li>Fine-tuning setup berdasarkan data FP1</li>
                <li>Testing berbagai compound ban untuk race</li>
                <li>Short runs untuk simulasi qualifying</li>
                <li>Evaluasi race strategy options</li>
            </ul>

            <h4>SABTU - Final Practice & Qualifying</h4>
            <p><strong>FP3 (Free Practice 3) - 60 menit:</strong></p>
            <ul>
                <li>Sesi terakhir untuk setup adjustments</li>
                <li>Final preparations untuk qualifying</li>
                <li>Testing different strategies</li>
            </ul>

            <p><strong>QUALIFYING - Menentukan Grid Position</strong></p>
            <p>Qualifying dibagi 3 segmen dengan knockout system:</p>

            <p><strong>Q1 (18 menit):</strong> Semua 20 driver. 5 driver terpelan ELIMINASI. 15 driver lolos ke Q2.</p>
            <p><strong>Q2 (15 menit):</strong> 15 driver tersisa. 5 driver terpelan ELIMINASI. 10 driver lolos ke Q3.</p>
            <p><strong>Q3 (12 menit):</strong> 10 driver battle untuk pole position. Lap tercepat menentukan starting grid.</p>

            <h4>MINGGU - RACE DAY!</h4>
            <p><strong>Warm-Up:</strong> Driver lap installation untuk check sistem dan warming up ban.</p>
            <p><strong>Formation Lap:</strong> Semua driver melakukan 1 lap ke grid position sambil warming up ban dan brakes.</p>
            <p><strong>RACE:</strong> Lights out and away we go! 🏁</p>

            <h4>Format SPRINT (6 Weekend per Tahun)</h4>
            <p><strong>Jumat:</strong> FP1 + Qualifying untuk Sprint</p>
            <p><strong>Sabtu:</strong> Sprint Race (100km) menentukan grid hari Minggu + Sprint Shootout untuk starting grid sprint</p>
            <p><strong>Minggu:</strong> Grand Prix</p>

            <h4>Strategi Penting</h4>
            <ul>
                <li>Data yang dikumpulkan di practice menentukan race strategy</li>
                <li>Qualifying position sangat penting karena overtaking sulit di F1</li>
                <li>Weather dapat mengubah segalanya!</li>
            </ul>
        `
    },
    'points': {
        title: '🎯 Sistem Poin Formula 1',
        image: 'https://f1insiders.com/wp-content/uploads/2022/10/f1_points.jpeg',
        content: `
            <p>Sistem poin F1 menentukan siapa Juara Dunia Drivers' dan Constructors' Championship. Konsistensi dan finishing adalah kunci sukses dalam sebuah musim panjang dengan 20+ races.</p>

            <h4>Distribusi Poin Race (Top 10)</h4>
            <ul>
                <li>🥇 <strong>P1 (Posisi 1):</strong> 25 poin</li>
                <li>🥈 <strong>P2 (Posisi 2):</strong> 18 poin</li>
                <li>🥉 <strong>P3 (Posisi 3):</strong> 15 poin</li>
                <li><strong>P4:</strong> 12 poin</li>
                <li><strong>P5:</strong> 10 poin</li>
                <li><strong>P6:</strong> 8 poin</li>
                <li><strong>P7:</strong> 6 poin</li>
                <li><strong>P8:</strong> 4 poin</li>
                <li><strong>P9:</strong> 2 poin</li>
                <li><strong>P10:</strong> 1 poin</li>
            </ul>

            <h4>Fastest Lap Bonus</h4>
            <p><strong>+1 poin tambahan</strong> untuk driver yang membuat lap tercepat di race, TETAPI hanya jika mereka finish di <strong>top 10</strong>.</p>
            <p>Contoh: Driver finish P1 dengan fastest lap = 25 + 1 = <strong>26 poin total</strong></p>

            <h4>Sprint Race Points (6 Races per Tahun)</h4>
            <ul>
                <li><strong>P1:</strong> 8 poin</li>
                <li><strong>P2:</strong> 7 poin</li>
                <li><strong>P3:</strong> 6 poin</li>
                <li><strong>P4:</strong> 5 poin</li>
                <li><strong>P5:</strong> 4 poin</li>
                <li><strong>P6:</strong> 3 poin</li>
                <li><strong>P7:</strong> 2 poin</li>
                <li><strong>P8:</strong> 1 poin</li>
            </ul>

            <h4>Drivers' Championship</h4>
            <p>Driver dengan <strong>total poin terbanyak</strong> di akhir musim menjadi World Champion. Jika ada tie, yang menang lebih banyak race jadi juara.</p>

            <h4>Constructors' Championship</h4>
            <p>Poin dari KEDUA driver tim dijumlahkan. Tim dengan total poin terbanyak menjadi Constructors' Champion. Championship ini sangat penting karena menentukan prize money distribution!</p>

            <h4>Strategi Poin</h4>
            <ul>
                <li><strong>Consistency is Key:</strong> Finish di top 10 konsisten lebih baik dari beberapa kemenangan dengan banyak DNF</li>
                <li><strong>Team Orders:</strong> Tim kadang swap driver position untuk maximizing constructor points</li>
                <li><strong>Fastest Lap Hunt:</strong> Di late race, driver dengan free pit stop window kadang stop untuk fresh tires demi fastest lap bonus</li>
            </ul>

            <h4>Fakta Sejarah</h4>
            <p>Sistem poin sudah berubah berkali-kali. Sebelum 2010, P1 hanya dapat 10 poin. Sistem 25-18-15 diperkenalkan tahun 2010 untuk memberi reward lebih besar untuk race wins.</p>

            <h4>Poin Maksimum Per Weekend</h4>
            <p><strong>Regular Weekend:</strong> 26 poin (25 + 1 fastest lap)</p>
            <p><strong>Sprint Weekend:</strong> 34 poin (8 sprint + 25 race + 1 fastest lap)</p>
        `
    },
    'tires': {
        title: '🛞 Pirelli F1 Tire Compounds',
        image: 'https://cdn-1.motorsport.com/images/amp/0qXVxE46/s6/pirelli-compounds-barcelona-te.jpg',
        content: `
            <p>Ban adalah satu-satunya kontak antara mobil dan track. Pirelli, sebagai pemasok eksklusif F1, menyediakan 5 slick compounds dengan karakteristik berbeda yang menjadi kunci strategi race.</p>

            <h4>5 Slick Compounds</h4>
            <ul>
                <li><strong>C1 (Hardest):</strong> Paling keras, paling tahan lama, grip terendah - untuk track abrasive dan high-speed</li>
                <li><strong>C2:</strong> Hard compound untuk most races</li>
                <li><strong>C3 (Medium):</strong> Balanced compound, paling versatile</li>
                <li><strong>C4:</strong> Soft compound dengan good grip</li>
                <li><strong>C5 (Softest):</strong> Paling soft, grip maksimal tapi degradasi cepat - untuk street circuits dan low-abrasion tracks</li>
            </ul>

            <h4>Nomenklatur untuk Setiap Race</h4>
            <p>Pirelli memilih 3 compounds dari 5 available untuk setiap race:</p>
            <ul>
                <li><strong>Putih = Hard:</strong> Compound terkeras dari 3 pilihan</li>
                <li><strong>Kuning = Medium:</strong> Compound menengah</li>
                <li><strong>Merah = Soft:</strong> Compound tersoft dari 3 pilihan</li>
            </ul>
            <p>Contoh: Di Monza bisa C2 (Hard), C3 (Medium), C4 (Soft)</p>
            <p>Contoh: Di Monaco bisa C3 (Hard), C4 (Medium), C5 (Soft)</p>

            <h4>Wet Weather Tires</h4>
            <ul>
                <li><strong>Intermediate (Hijau):</strong> Untuk light rain atau drying track. Evacuates 30 liters air per detik pada 300 km/jam</li>
                <li><strong>Full Wet (Biru):</strong> Untuk heavy rain. Evacuates 85 liters air per detik pada 300 km/jam</li>
            </ul>

            <h4>Tire Degradation</h4>
            <p>Semua ban degradasi (kehilangan performa) seiring waktu karena:</p>
            <ul>
                <li>Temperature: Ban overheating kehilangan grip (graining)</li>
                <li>Wear: Surface ban terkikis oleh track (blistering)</li>
                <li>Chemical degradation: Compound kehilangan properti elastic</li>
            </ul>

            <h4>Tire Strategy</h4>
            <p><strong>Undercut:</strong> Pit stop lebih awal dengan ban fresh untuk overtake rival yang masih di track dengan ban lebih old</p>
            <p><strong>Overcut:</strong> Stay out lebih lama, push dengan ban old, berharap rival yang pit lebih dulu stuck di traffic</p>
            <p><strong>Two-stop:</strong> Dua kali pit stop untuk speed advantage dengan fresh tires</p>
            <p><strong>One-stop:</strong> Satu kali pit stop untuk track position advantage</p>

            <h4>Peraturan Ban</h4>
            <ul>
                <li>Setiap driver dapat 13 set ban untuk race weekend</li>
                <li>Di qualifying Q1 dan Q2, driver free choice</li>
                <li>Di race, minimum HARUS gunakan 2 compound berbeda (kecuali wet race)</li>
                <li>Pit stop untuk ganti ban wajib (kecuali wet to wet atau wet conditions entire race)</li>
            </ul>

            <h4>Tire Management</h4>
            <p>Driver harus manage tire temperature, avoid sliding, dan smooth driving style untuk extend tire life. Tire management adalah skill penting F1 driver!</p>

            <h4>Fun Fact</h4>
            <p>F1 tire bekerja optimal pada suhu 100°C-140°C. Terlalu dingin = no grip. Terlalu panas = degradasi cepat. Driver constantly manage tire temps!</p>
        `
    },
    'drs': {
        title: '🎮 DRS - Drag Reduction System',
        image: 'https://miro.medium.com/v2/resize:fit:1400/1*tWELbAV76_Af0kohPzKlZg.png',
        content: `
            <p>DRS adalah sistem yang memungkinkan driver membuka rear wing untuk mengurangi drag dan increase top speed. Diperkenalkan tahun 2011 untuk facilitate overtaking dan membuat race lebih exciting!</p>

            <h4>Cara Kerja DRS</h4>
            <p>Ketika DRS activated, hydraulic actuator membuka bagian atas rear wing sekitar 50-85mm. Ini mengurangi drag dan memungkinkan kecepatan 10-15 km/jam lebih tinggi di straight line.</p>

            <h4>Kapan DRS Bisa Digunakan?</h4>
            <p><strong>Kondisi yang Harus Dipenuhi:</strong></p>
            <ul>
                <li>✅ Race sudah melewati lap 2 (untuk keselamatan)</li>
                <li>✅ Tidak ada safety car atau virtual safety car</li>
                <li>✅ Tidak ada yellow flag di sektor DRS zone</li>
                <li>✅ Track conditions dry (tidak hujan)</li>
                <li>✅ Driver berada dalam 1 detik dari mobil di depan at detection point</li>
                <li>✅ Hanya di designated DRS zones</li>
            </ul>

            <h4>DRS Zones</h4>
            <p>Setiap track punya 1-3 DRS zones, biasanya ditempatkan:</p>
            <ul>
                <li>Di main straight setelah last corner</li>
                <li>Di straight panjang lainnya</li>
                <li>Di area dimana overtaking secara natural sulit</li>
            </ul>

            <h4>Detection Points</h4>
            <p>Before each DRS zone, ada "detection point" dimana timing system mengukur gap antar mobil. Jika gap < 1 detik, driver behind dapat activate DRS di zone berikutnya.</p>

            <h4>Manual Control</h4>
            <p>Driver activate DRS dengan menekan tombol di steering wheel saat memasuki DRS zone. DRS automatically closes ketika driver:</p>
            <ul>
                <li>Brake untuk corner</li>
                <li>Lift throttle significantly</li>
                <li>Manual close dengan tombol</li>
                <li>Keluar dari DRS zone</li>
            </ul>

            <h4>Strategi DRS</h4>
            <p><strong>DRS Train:</strong> Ketika beberapa mobil running close together, mereka semua dapat DRS dan sulit untuk overtake karena speed advantage similar</p>
            <p><strong>DRS Defense:</strong> Lead driver tidak punya DRS, jadi harus defend purely with positioning dan late braking</p>
            <p><strong>Multi-Zone Strategy:</strong> Di tracks dengan multiple DRS zones, driver plan dimana best place untuk attack</p>

            <h4>Qualifying DRS</h4>
            <p>Di qualifying, SEMUA driver dapat gunakan DRS kapan saja di designated zones tanpa perlu gap 1 detik. Ini untuk maximize lap time.</p>

            <h4>Kontroversi DRS</h4>
            <p><strong>Pro:</strong> Makes overtaking easier, more exciting races, rewarding faster cars stuck behind slower ones</p>
            <p><strong>Con:</strong> "Artificial" advantage, overtakes too easy di beberapa tracks, tidak "pure" racing</p>

            <h4>DRS di Qualifying vs Race</h4>
            <ul>
                <li><strong>Qualifying:</strong> Unlimited use di DRS zones</li>
                <li><strong>Race:</strong> Hanya jika < 1s dari mobil depan</li>
                <li><strong>Practice:</strong> Unlimited use untuk testing</li>
            </ul>

            <h4>Keselamatan DRS</h4>
            <p>DRS disabled at 300+ km/jam untuk keselamatan. System juga disabled jika ada masalah technical atau weather conditions berbahaya.</p>

            <h4>Fun Fact</h4>
            <p>DRS dapat menghasilkan speed boost hingga 15 km/jam tergantung track! Di Monza, DRS bisa worth 0.3-0.4 seconds per lap!</p>
        `
    },
    'pitstop': {
        title: '⛽ Strategi Pit Stop F1',
        image: 'https://media.formula1.com/image/upload/t_16by9Centre/c_lfill,w_3392/q_auto/v1740000000/fom-website/2025/Miscellaneous/GettyImages-666401980.webp',
        content: `
            <p>Pit stop adalah salah satu aspek paling exciting di F1. Dalam hitungan detik, 20+ mekanik bekerja dengan presisi militer untuk ganti 4 ban, adjust wing, dan mengirim driver kembali ke track. Pit stop strategy sering menentukan race outcome!</p>

            <h4>Anatomi Pit Stop Modern</h4>
            <p><strong>Record Pit Stop:</strong> Red Bull Racing - <strong>1.82 detik</strong> (Brazilian GP 2019)</p>
            <p><strong>Average Pit Stop:</strong> 2.5-3.0 detik</p>

            <p><strong>Crew Pit Stop (20+ Orang):</strong></p>
            <ul>
                <li><strong>1 Jack Man (Front):</strong> Lift bagian depan mobil</li>
                <li><strong>1 Jack Man (Rear):</strong> Lift bagian belakang mobil</li>
                <li><strong>12 Wheel Gun Operators:</strong> 3 per wheel (gun operator, wheel off, wheel on)</li>
                <li><strong>2 Stabilizers:</strong> Hold mobil steady</li>
                <li><strong>2 Wing Adjusters:</strong> Adjust front wing jika needed</li>
                <li><strong>Fire Extinguisher:</strong> Siap dengan alat pemadam</li>
                <li><strong>Lollipop/Traffic Light Operator:</strong> Signal driver kapan go</li>
                <li><strong>Engineers:</strong> Monitor dari pit wall</li>
            </ul>

            <h4>Sequence Pit Stop (2-3 Detik)</h4>
            <ol>
                <li><strong>0.0s:</strong> Mobil masuk pit box, jacks lift mobil</li>
                <li><strong>0.1s:</strong> 12 wheel gun operators mulai bekerja simultaneously</li>
                <li><strong>2.0s:</strong> Semua 4 ban sudah terganti</li>
                <li><strong>2.1s:</strong> Jacks turun, lollipop/light memberi signal GO</li>
                <li><strong>2.5s:</strong> Mobil leave pit box</li>
            </ol>

            <h4>Jenis Strategi Pit Stop</h4>

            <p><strong>1. One-Stop Strategy</strong></p>
            <ul>
                <li>Satu kali pit stop dalam race</li>
                <li>Saves time (tidak kehilangan banyak track position)</li>
                <li>Requires good tire management</li>
                <li>Best untuk tracks dengan low tire degradation</li>
            </ul>

            <p><strong>2. Two-Stop Strategy</strong></p>
            <ul>
                <li>Dua kali pit stop</li>
                <li>Allows aggressive driving dengan fresh tires</li>
                <li>Good untuk tracks dengan high degradation</li>
                <li>Can enable undercut/overcut tactics</li>
            </ul>

            <p><strong>3. Three-Stop Strategy</strong></p>
            <ul>
                <li>Jarang digunakan</li>
                <li>Hanya jika extreme degradation atau safety car opportunities</li>
                <li>Very aggressive, high risk-high reward</li>
            </ul>

            <h4>Tactical Pit Stops</h4>

            <p><strong>Undercut:</strong> Pit stop lebih awal dari rival untuk gain track position</p>
            <ul>
                <li>Keluar pit dengan fresh tires</li>
                <li>Push lap cepat saat rival masih di old tires</li>
                <li>Ketika rival pit, Anda sudah ahead</li>
            </ul>

            <p><strong>Overcut:</strong> Stay out lebih lama untuk gain advantage</p>
            <ul>
                <li>Rival pit first</li>
                <li>Anda push dengan old tires di clear air</li>
                <li>Rival stuck di traffic setelah pit</li>
                <li>Anda pit later dan emerge ahead</li>
            </ul>

            <p><strong>Safety Car Stop:</strong></p>
            <ul>
                <li>Safety car = "free" pit stop</li>
                <li>Time loss minimal karena field slowed down</li>
                <li>Strategic gamble: pit atau stay out?</li>
            </ul>

            <h4>Faktor yang Mempengaruhi Strategi</h4>
            <ul>
                <li><strong>Tire Degradation:</strong> Seberapa cepat tires losing performance</li>
                <li><strong>Fuel Load:</strong> Mobil lebih light seiring race progress</li>
                <li><strong>Track Position:</strong> Leading valuable, staying out might be worth it</li>
                <li><strong>Traffic:</strong> Keluar pit di clear air vs stuck behind backmarkers</li>
                <li><strong>Weather:</strong> Rain can completely change strategy</li>
                <li><strong>Safety Car/VSC:</strong> Opportunistic stops</li>
            </ul>

            <h4>Pit Stop Mistakes</h4>
            <ul>
                <li><strong>Wheel Not Secured:</strong> Mobil released dengan wheel tidak properly attached (very dangerous!)</li>
                <li><strong>Slow Stop:</strong> Gun problem atau human error = extra seconds lost</li>
                <li><strong>Unsafe Release:</strong> Released ke path of another car = penalty</li>
                <li><strong>Wrong Tires:</strong> Mounting wrong compound atau wrong set</li>
            </ul>

            <h4>Pit Lane Rules</h4>
            <ul>
                <li><strong>Speed Limit:</strong> 60 km/jam (80 km/jam di beberapa tracks)</li>
                <li><strong>Pit Entry/Exit Lines:</strong> Harus diikuti strictly</li>
                <li><strong>Safe Release:</strong> Tidak boleh interfere dengan cars di pit lane</li>
                <li><strong>No Working in Fast Lane:</strong> Semua work di pit box saja</li>
            </ul>

            <h4>Virtual Pit Stop Simulation</h4>
            <p>Tim constantly running simulasi real-time selama race untuk predict optimal pit window. AI dan supercomputers analyze jutaan scenarios per detik!</p>

            <h4>Fun Fact</h4>
            <p>Di era 1950an, pit stop bisa 60+ detik! Sekarang 2 detik! Teknologi wheel gun, practiced choreography, dan team training membuat modern pit stops incredible!</p>
        `
    },
    'telemetry': {
        title: '📡 Telemetri & Data Analysis',
        image: 'https://user-images.githubusercontent.com/20264712/121112897-ccc2fb00-c819-11eb-9739-91ccddcbcdc4.png',
        content: `
            <p>Telemetri adalah jantung F1 modern. Setiap mobil F1 adalah supercomputer bergerak dengan ratusan sensor yang mengirim 3GB data per race lap ke tim engineers. Real-time data analysis adalah competitive advantage yang massive!</p>

            <h4>Sensor di Mobil F1</h4>
            <p><strong>300+ Sensor</strong> measuring berbagai parameters:</p>

            <p><strong>Engine & Power Unit:</strong></p>
            <ul>
                <li>RPM, throttle position, fuel pressure & flow</li>
                <li>Oil & water temperature, pressure</li>
                <li>Turbo boost pressure & temperature</li>
                <li>MGU-K & MGU-H performance & temperature</li>
                <li>Battery charge level & temperature</li>
                <li>ERS energy recovery & deployment</li>
            </ul>

            <p><strong>Chassis & Suspension:</strong></p>
            <ul>
                <li>Suspension travel & damper position</li>
                <li>G-forces (lateral, longitudinal, vertical)</li>
                <li>Ride height (front & rear)</li>
                <li>Wheel speed (all 4 wheels)</li>
                <li>Steering angle & torque</li>
                <li>Brake pressure & temperature (all corners)</li>
            </ul>

            <p><strong>Tires:</strong></p>
            <ul>
                <li>Tire pressure (all 4, constantly monitored)</li>
                <li>Tire temperature (inner, middle, outer di semua 4 tires)</li>
                <li>Tire wear estimation</li>
            </ul>

            <p><strong>Aerodynamics:</strong></p>
            <ul>
                <li>Downforce measurements</li>
                <li>Drag measurements</li>
                <li>Air flow sensors</li>
                <li>DRS position & activation</li>
            </ul>

            <p><strong>Driver Inputs:</strong></p>
            <ul>
                <li>Steering input</li>
                <li>Throttle & brake application</li>
                <li>Gear changes timing</li>
                <li>Button presses on steering wheel</li>
            </ul>

            <h4>Data Transmission</h4>
            <p><strong>Bandwidth:</strong> 1.5 Mb/s</p>
            <p><strong>Frequency:</strong> 10-50 Hz (10-50 times per second)</p>
            <p><strong>Total Data per Race:</strong> 3GB per lap × 60-70 laps = ~200GB per race</p>

            <p>Data transmitted ke tim garage dan factory menggunakan encrypted radio frequency.</p>

            <h4>Real-Time Analysis</h4>
            <p><strong>Di Pit Wall & Factory:</strong></p>
            <ul>
                <li>20+ engineers monitoring data screens</li>
                <li>Instant comparison dengan teammate dan rivals</li>
                <li>Predictive models untuk tire degradation</li>
                <li>Strategy simulation running continuously</li>
                <li>Anomaly detection untuk technical issues</li>
            </ul>

            <h4>Radio Communication</h4>
            <p>Berdasarkan telemetry data, engineer memberi advice ke driver:</p>
            <ul>
                <li>"Box, box, box" = Pit stop this lap</li>
                <li>"Tire temps looking good" = Tire management OK</li>
                <li>"Front left brake temperature high" = Warning</li>
                <li>"Push, push, push" = Extract maximum performance</li>
                <li>"We need to manage these tires" = Slow down for tire preservation</li>
            </ul>

            <h4>Post-Race Analysis</h4>
            <p>Setelah race, tim spend DAYS analyzing:</p>
            <ul>
                <li>Every corner entry, apex, exit</li>
                <li>Setiap brake point, throttle application</li>
                <li>Comparison dengan fastest laps & optimal theoretical lap</li>
                <li>Tire management effectiveness</li>
                <li>Energy management (ERS deployment)</li>
                <li>Component stress & reliability data</li>
            </ul>

            <h4>Machine Learning & AI</h4>
            <p>Modern F1 teams menggunakan AI untuk:</p>
            <ul>
                <li><strong>Strategy Optimization:</strong> Simulate jutaan race scenarios</li>
                <li><strong>Predictive Maintenance:</strong> Predict component failures before they happen</li>
                <li><strong>Setup Optimization:</strong> Find optimal car setup faster</li>
                <li><strong>Driver Coaching:</strong> Identify areas where driver can improve</li>
                <li><strong>Weather Prediction:</strong> Local weather models untuk strategy</li>
            </ul>

            <h4>FIA Data Access</h4>
            <p>FIA (regulator) juga access semua telemetry data untuk:</p>
            <ul>
                <li>Checking technical compliance</li>
                <li>Investigating incidents</li>
                <li>Analyzing driver behavior</li>
                <li>Safety improvements</li>
            </ul>

            <h4>TV Broadcast Data</h4>
            <p>Viewers at home melihat selected telemetry:</p>
            <ul>
                <li>Speed, gear, throttle, brake application</li>
                <li>Tire compound & lap number</li>
                <li>DRS availability</li>
                <li>Gap to car ahead/behind</li>
            </ul>

            <h4>Cyber Security</h4>
            <p>Telemetry data encrypted dengan military-grade security. Tim spend millions protecting data dari spionase!</p>

            <h4>Historical Context</h4>
            <p>Di 1950s-1970s: Zero telemetry, driver feeling & stopwatch</p>
            <p>1980s: Basic telemetry introduced</p>
            <p>1990s: Real-time telemetry revolution</p>
            <p>2000s: Massive data processing</p>
            <p>2010s-Now: AI, machine learning, cloud computing</p>

            <h4>Fun Fact</h4>
            <p>F1 teams process lebih banyak data dalam single race weekend dibandingkan entire season di sports lain! Data adalah competitive advantage terbesar di era modern F1!</p>
        `
    }
};

// Fungsi menampilkan education modal
function showEducation(topic) {
    const modal = document.getElementById('educationModal');
    const data = educationData[topic];
    
    document.getElementById('educationModalTitle').textContent = data.title;
    document.getElementById('educationModalImage').src = data.image;
    document.getElementById('educationModalText').innerHTML = data.content;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fungsi close education modal
function closeEducationModal() {
    document.getElementById('educationModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fungsi menampilkan driver modal
function showDrivers(teamName, teamClass, drivers) {
    const modal = document.getElementById('driverModal');
    const modalContent = document.getElementById('modalContent');
    const modalTeamName = document.getElementById('modalTeamName');
    const driversShowcase = document.getElementById('driversShowcase');
    
    modalTeamName.textContent = teamName;
    modalContent.className = 'modal-content modal-' + teamClass;
    driversShowcase.innerHTML = '';
    
    drivers.forEach(driver => {
        const driverCard = `
            <div class="driver-card">
                <img src="${driver.photo}" alt="${driver.name}" class="driver-photo" 
                     onerror="this.src='https://via.placeholder.com/300x300/1a1a1a/ffffff?text=${driver.name}'">
                <div class="driver-info">
                    <div class="driver-number-large">#${driver.number}</div>
                    <div class="driver-name-large">${driver.name}</div>
                    <div class="driver-details">
                        <div class="driver-detail-item">
                            <span class="detail-label">Nationality</span>
                            <span class="detail-value">${driver.nationality}</span>
                        </div>
                        <div class="driver-detail-item">
                            <span class="detail-label">Podiums</span>
                            <span class="detail-value">${driver.podiums}</span>
                        </div>
                        <div class="driver-detail-item">
                            <span class="detail-label">Wins</span>
                            <span class="detail-value">${driver.wins}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        driversShowcase.innerHTML += driverCard;
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fungsi close driver modal
function closeDriverModal() {
    document.getElementById('driverModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal saat klik outside
window.onclick = function(event) {
    const eduModal = document.getElementById('educationModal');
    const driverModal = document.getElementById('driverModal');
    
    if (event.target == eduModal) {
        closeEducationModal();
    }
    if (event.target == driverModal) {
        closeDriverModal();
    }
}

// ESC key to close
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeEducationModal();
        closeDriverModal();
    }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Animasi saat scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.education-card, .team-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});