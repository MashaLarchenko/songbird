const birdState = [
    [
        {
            id: 1,
            name: 'Воронок',
            species: 'Delichon urbicum',
            status: ['birdButton', 'check-btn'],
            description:
                'Мелкая птица семейства ласточковых, широко распространённая в Европе, Северной Африке и умеренных широтах Азии. Как и сизый голубь, изначально обитательница скал, легко адаптировалась к жизни в городских условиях. Перелётный вид, зимует в Африке южнее Сахары и в тропической Азии. Держится стаями по берегам рек, на склонах гор, лугах, городах с каменными строениями — часто стайки этих птиц можно увидеть сидящими на проводах. Питается летающими насекомыми, которых ловит в воздухе. Имеет внешнее сходство с двумя другими видами рода городских ласточек — восточным и непальским воронками, обитающими в Южной и Юго-Восточной Азии. Обычный вид.',
        },
        {
            id: 2,
            name: 'Рябчик',
            species: 'Tetrastes bonasia',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица из рода рябчиков, подсемейства тетеревиных, семейства фазановых отряда курообразных. Широко распространённый вид, обитающий практически повсеместно в лесной и таёжной зоне Евразии, от Западной Европы до Кореи. Рябчик — самый мелкий представитель тетеревиных. Масса тела даже самых крупных особей редко превышает 500 граммов. В лесу его сложно спутать с другими тетеревиными птицами, от которых он отличается не только небольшой величиной, но и достаточно узнаваемым окрасом.',
        },
        {
            id: 3,
            name: 'Озёрная чайка',
            species: 'Chroicocephalus ridibundus',
            status: ['birdButton', 'check-btn'],
            description:
                'Вид небольших птиц из рода Chroicocephalus семейства чайковых (Laridae), гнездящихся на обширной территории Евразии, а также на атлантическом побережье Канады. Обычна на территории России — её часто можно наблюдать летом на реках и озёрах, где она кружит возле проходящих судов в поисках подкормки. На большей части ареала перелётная птица, хотя в некоторых районах Западной Европы ведёт оседлый образ жизни.',
        },
        {
            id: 4,
            name: 'Кукушка',
            species: 'Cuculus canorus',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица отряда кукушкообразные.Размером немного крупнее дрозда, но из-за длинных крыльев и хвоста кажется более крупной птицей. Самцы имеют серую окраску верха тела, головы и горла, низ — беловатый, на груди и животе поперечные серые полосы. Самки бывают серой и рыжей морф. Первые окраской напоминают самцов, отличаясь от них поперечными пестринами на рыжеватом горле, у вторых вся серая окраска заменена на буровато-рыжую.Обыкновенные кукушки широко распространены почти по всей лесной и лесостепной зоне Северной Евразии. Встречаются и в лесотундре. В Подмосковье довольно обычная птица.',
        },
        {
            id: 5,
            name: 'Чечевица',
            species: 'Carpodacus erythrinus',
            status: ['birdButton', 'check-btn'],
            description:
                'Размером с воробья. У взрослого самца спина, крылья и хвост красновато-бурые, голова и грудь ярко-красные, брюшко (а у птиц из восточной части ареала — нередко и грудь) белое с розовым оттенком. Самки и молодые птицы буровато-серые, брюшко светлее спины.Гнездится в лесной зоне Евразии. Зимовки находятся в Южной и Юго-Восточной Азии.',
        },
        {
            id: 6,
            name: 'Вертишейка ',
            species: 'Jynx torquilla',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица из семейства дятловых. Мелкая птица с длинной подвижной шеей, по внешнему виду и поведению больше похожа на воробьиных птиц, чем на типичных дятлов, с которыми её объединяют прежде всего характерное строение ног — два пальца обращены назад и два вперёд, и длинный клейкий язык, а также волнообразный характер полёта.Перелётная птица, зимует в Африке и на юге Азии. Основной корм — муравьи и их куколки, а также другие мелкие насекомые. Свои гнёзда не выдалбливает, а занимает брошенные дупла дятлов либо выгоняет из них уже начавших гнездиться воробьиных птиц.Русское (а также научное латинское Jynx — буквально «крутилка») название вертишейке дано за характерное поведение, которое она демонстрирует в стрессовых ситуациях. Взятая в руки либо застигнутая врасплох, птица расправляет хвост, взъерошивает перья, свешивает крылья, и с таким видом бросается на обидчика, при этом вращая шеей, глазами, и издавая булькающие и шипящие звуки. Если засунуть руку в дупло с сидящей там птицей, то такое поведение создаёт иллюзию, что в нём находится змея, а не птица.',
        },
    ],
    [
        {
            id: 1,
            name: 'Иволга',
            species: 'Oriolus oriolus',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая яркая птица, единственный представитель семейства иволговых, распространённый в умеренном климате северного полушария. Гнездится в Европе и в Азии к востоку до Енисея. Шумная и подвижная, обычно держится в кроне деревьев, преимущественно лиственных. Необщительна, встречается в одиночку либо парами. Питается гусеницами и другими насекомыми, а также ягодами. Мигрирует на дальние расстояния, зимует в тропиках Азии и Африки к югу от Сахары. Обычный вид.',
        },
        {
            id: 2,
            name: 'Пеночка-теньковка ',
            species: 'Phylloscopus collybita',
            status: ['birdButton', 'check-btn'],
            description:
                'Мелкая лесная птица семейства славковых (с 2006 года некоторые авторы выделяют два рода, Phylloscopus и Seicercus, в отдельное семейство Phylloscopidae) с зеленовато-бурым верхом и беловатым низом. Гнездится в светлых хвойных и смешанных лесах Европы и Азии, местами распространяясь далеко на север. Зимует в странах Средиземноморья, Южной Азии и Центральной Африке.',
        },
        {
            id: 3,
            name: 'Мухоловка-пеструшка ',
            species: 'Ficedula hypoleuca',
            status: ['birdButton', 'check-btn'],
            description:
                'Окраска взрослого самца чёрно-белая, контрастная. Спина и темя чёрные, на лбу белое пятно, поясница серая, хвост буровато-чёрный с белой каёмкой по краям, брюхо белое, крылья тёмно-бурого, почти чёрного цвета с большим белым пятном. Самки и молодые самцы окрашены более тускло: чёрные тона в оперении заменены серовато-бурыми, белые — грязно-белыми[3]. Длина тела около 16 см, масса 15—19 г.Мухоловка-пеструшка распространена в лесах Европы и на прилегающих островах, в центральных частях Западной Сибири, а также в Северной Африке. Зимует в тропической и Северной Африке.',
        },
        {
            id: 4,
            name: 'Белая трясогузка ',
            species: 'Motacilla alba',
            status: ['birdButton', 'check-btn'],
            description:
                'С трясогузкой можно встретиться почти всюду. Чаще её можно увидеть у воды, а иногда и довольно далеко от водоёмов - на полях и пастбищах, близ уединенных домов и около крупных построек и поселений, а также высоко в горах. Населяет трясогузка всю Европу, Азию и север Африки. Со своих зимовок от Средиземного моря до Экваториальной Африки эта птичка прилетает ещё в марте и сразу же занимает гнездовые участки, которые бдительно охраняет.Трясогузка - одна из самых полезных птиц. Она уничтожает комаров и мух, за которыми ловко гоняется в воздухе. ',
        },
        {
            id: 5,
            name: 'Садовая горихвостка ',
            species: 'Phoenicurus phoenicurus',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая певчая птица из семейства мухоловковых, отряда воробьиных. Это одна из самых красивых птиц, живущая в парках, садах и на культурных ландшафтах европейской части России.Обыкновенная горихвостка распространена в северо-западной Африке, Евразии, на большей части территории России (к востоку до Забайкалья и Якутии).Питается преимущественно насекомыми, иногда (в холодное время) ягодами, поэтому прилёт и отлёт горихвостки напрямую зависит от наличия корма. Обитает в лесах, лесопарках и реже в лесостепях.',
        },
        {
            id: 6,
            name: 'Садовая славка ',
            species: 'Sylvia borin',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица семейства славковых. Длина тела составляет 13—14,5 см, масса — 16—22 г. Основная окраска оперения однотонная, бледная, серовато-бурая, с чуть заметным оливковым оттенком, нижняя часть груди, брюхо и подхвостье белые. Самцы и самки окрашены одинаково, у молодых птиц оперение более тусклое.Питаются в основном жуками, гусеницами; в конце лета или в начале осени охотно едят ягоды малины, черники, бузины. Перелётная птица. Зимует в тропической и южной Африке. Обитают по всей Европе, в центральных и южных областях Западной Сибири.',
        },
    ],
    [
        {
            id: 1,
            name: 'Сапса́н ',
            species: 'Falco peregrinus',
            status: ['birdButton', 'check-btn'],
            description:
                'Хищная птица из семейства соколиных, распространённая на всех континентах, кроме Антарктиды. Размером с серую ворону, выделяется тёмным, аспидно-серым оперением спины, пёстрым светлым брюхом и чёрной верхней частью головы, а также чёрными «усами». В зависимости от размера и особенностей окраски, различают около 17 подвидов этой птицы. Это самая быстрая птица в мире. По оценкам специалистов, в стремительном пикирующем полёте она способна развивать скорость свыше 322 км/ч, или 90 м/с',
        },
        {
            id: 2,
            name: 'Длиннохвостая неясыть',
            species: 'Strix uralensis',
            status: ['birdButton', 'check-btn'],
            description:
                'Это одна из самых крупных неясытей. Её длина достигает 70 см, размах крыльев около 115 см, длина крыла примерно 35–40 см, хвоста 30 см. Главный отличительный признак вида – длинный, клиновидный, с темными полосами хвост: когда сова сидит на дереве, хвост далеко выступает из-под сложенных крыльев. Общая окраска спинной стороны беловато-охристая с бурым продольным рисунком и слабыми поперечными отметинами на больших перьях. Обитает длиннохвостая неясыть преимущественно в высокоствольных смешанных лесах (часто переувлажнённых) со значительной примесью хвойных пород. Селится по окраинам лесных массивов, поблизости от больших полян, обширных вырубок и гарей, в разреженных лесах и колках.Основным кормом длиннохвостой неясыти являются мышевидные грызуны, в частности полевки. Иногда ловит землероек, лягушек, насекомых (преимущественно жуков), а также слётков воробьиных птиц. Она в состоянии осилить белку, рябчика и тетерева.',
        },
        {
            id: 3,
            name: 'Белопле́чий (тихоокеа́нский) орла́н',
            species: 'Haliaeetus pelagicus',
            status: ['birdButton', 'check-btn'],
            description:
                'Очень крупная хищная птица семейства ястребиных, обитающая на прибрежной территории северо-восточной Азии. Питается в основном рыбой. Является одним из самых тяжёлых орлов. Масса достигает 9 кг. Вид занесён в Красную книгу России.Питание — преимущественно крупной и средней рыбой (в особенности лососёвыми). Также питается млекопитающими (зайцами, молодыми песцами, молодыми тюленями), падалью.',
        },
        {
            id: 4,
            name: 'Обыкнове́нный канюк',
            species: 'Buteo buteo',
            status: ['birdButton', 'check-btn'],
            description:
                'Хищная птица, обитающая в Старом Свете. Распространена практически во всей Европе, в Азии обитает в лесистой местности, с севера ограниченной полярным кругом, с юга безлесыми пустынями Средней и Центральной Азии и Ирана. Обычно ведёт оседлый образ жизни, и только один подвид сарыч малый (Buteo buteo vulpinus), обитающий в том числе и на территории России, является перелётной птицей, на зиму мигрирующей на юг Азии или в Африку. Живёт в тугайных лесах, холмистых участках хвойных лесов недалеко от открытых степных пространств. Живёт канюк обыкновенный в среднем в природных условиях 26 лет, в неволе около 30 лет.Питается мелкими млекопитающими: сусликами, мышами-полевками, крысами, кроликами и мелкими птицами. Может поедать и падаль.  ',
        },
        {
            id: 5,
            name: 'Обыкнове́нная пустельга́',
            species: 'Falco tinnunculus',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица из отряда соколообразных семейства соколиных, наиболее распространённая хищная птица Центральной Европы после канюка. Птица 2007 года в Германии и 2006 года в Швейцарии, символ СОПР (Союз охраны птиц России) 2002 года. В последнее время птица всё больше и больше облюбовывает города и прилегающие к ним территории, поселяясь в непосредственной близости к человеку. Обладает способностью к трепещущему полёту.Во время охоты пустельга висит в воздухе, часто трепеща крыльями и высматривает добычу. Заметив мышь или крупное насекомое, она стремительно падает вниз. За день взрослая пустельга съедает около десятка грызунов. Острота зрения обыкновенной пустельги выше человеческой в 2,6 раза.',
        },
        {
            id: 6,
            name: 'Змеея́д',
            species: 'Circaetus gallicus',
            status: ['birdButton', 'check-btn'],
            description:
                'Хищная птица семейства ястребиных, отряд ястребообразные, подсемейства змееяды.Очень редкий исчезающий вид птиц, занесён в Красную книгу России и Красную книгу Беларуси.Один из самых пугливых и недоверчивых по отношению к человеку пернатых хищников.Общая длина — 67—72 см, размах крыльев 160—190 см, длина крыла 52—60 см. Самки крупнее самцов, но окрашены одинаково с ними. Окраска спинной стороны птицы — серовато-бурая, молодые птицы по окраске схожи со взрослыми. Населяет зону смешанных лесов и лесостепи. Гнездятся в Северо-западной Африке, в Южной и отчасти в Центральной Европе, на Кавказе, в Малой Азии, на Ближнем Востоке, Средней Азии и Казахстане, Юго-Западной Сибири, севере Монголии, на юге до Пакистана и Индии.',
        },
    ],
    [
        {
            id: 1,
            name: 'Коростель',
            species: 'Crex crex',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая птица семейства пастушковых. Размерами сравним с дроздом или перепёлкой, телосложением несколько напоминает подросшего цыплёнка домашней курицы. Ведёт скрытный образ жизни, почти не показывается из зарослей высокой травы. Летает неохотно и только при крайней необходимости, однако во время миграции легко преодолевает тысячи километров, в том числе над морем и пустынями.Гнездится во влажных высокотравных лугах, густо поросших кустарниковых болотах, засеянных пашнях и других открытых ландшафтах в умеренных широтах Евразии. Более половины популяции размножается на территории России[2]. Перелётная птица, зимует в Африке, главным образом в кустарниковых и травянистых саваннах юго-восточной части континента.',
        },
        {
            id: 2,
            name: 'Полевой жаворонок',
            species: 'Alauda arvensis',
            status: ['birdButton', 'check-btn'],
            description:
                'Совсем неприметная, но очень распространённая луговая птица ‒ жаворонок. Она предпочитает жить среди злаковых трав и низкого зеленого травостоя. Жаворонки избегают лесистых районов, а участки с изолированными деревьями совсем не подходят для них. Домом для полевых жаворонков является Европа, Азия и Северная Африка. Зиму они проводят на севере Африки или юге Азии.',
        },
        {
            id: 3,
            name: 'Чибис',
            species: 'Vanellus vanellus',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая птица семейства ржанковых.Чибис распространен от Атлантического до Тихого океана, к югу от полярного круга; в большей части этого ареала чибис птица оседлая; в Западной Европе зона оседлости начинается с южного побережья Балтийского моря. ',
        },
        {
            id: 4,
            name: 'Бека́с',
            species: 'Gallinago gallinago',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая птица с очень длинным, прямым и острым клювом. Небольшой кулик размером примерно с большого пёстрого дятла. Длина тела около 26 см, масса 80—180 г, размах крыльев 40—45 см. Населяет болота, сырые луга, топкие берега водоёмов и тундру. Гнездится в субарктическом и умеренном климате Евразии, а также за пределами материков в Исландии, на Британских, Азорских и Фарерских островах. Зимует в Южной Европе, тропической Азии, Африке. Гнездо устраивает на земле в небольшом углублении. Питается водными беспозвоночными. Объект спортивной охоты.',
        },
        {
            id: 5,
            name: 'Лугово́й лу́нь',
            species: 'Circus pygargus',
            status: ['birdButton', 'check-btn'],
            description:
                'Хищная птица семейства ястребиных, распространённая в западной Палеарктике; один из 5-и видов луней, гнездящихся на территории России.Изящная птица с относительно длинными узкими крыльями и длинным хвостом. В воздухе обычно держится низко над поверхностью земли, вытянув крылья в форме латинской буквы V.  Перелётная птица, зимует в тропической Азии и Африке южнее Сахары. И в местах гнездовий, и на зимовках населяет открытые увлажнённые ландшафты — речные долины, болота, высокотравные луга, пашни, заросшие берега озёр. Охотится в основном на небольших грызунов, ящериц, насекомых и мелких птиц. Гнездится парами или небольшими свободными группами с мая по июль, в гнезде обычно 3—6 белых яиц.',
        },
        {
            id: 6,
            name: 'Лугово́й чека́н',
            species: 'Saxicola rubetra',
            status: ['birdButton', 'check-btn'],
            description:
                'Певчая птица семейства мухоловковых.Луговой чекан размером около 13—14 см и весом около 15—20 г. Окрас верха бурый, с чёрными пестринами, брюхо белёсое. Горло и грудка окрашены в оранжево-жёлтый цвет. Продолжительность жизни до 8 лет. У самца над глазами и на подбородке белая полоска. Пространство между обеими полосками чёрное. Крик звучит как «туи-чек-чек» и служит для привлечения самки, а также для обозначения своей территории. Для пения и охоты луговой чекан выбирает высокие кусты и стебли.',
        },
    ],
    [
        {
            id: 1,
            name: 'Белозобый дрозд',
            species: 'Turdus torquatus',
            status: ['birdButton', 'check-btn'],
            description:
                'Дрозд с характерным белым или серо белым «полумесяцем» на зобе Выражен половой диморфизм. Самец черноватый, с белым «полумесяцем», перья брюшной стороны тела со светлой каймой на концах, что напоминает «чешую» Самка буроватая, с «полумесяцем» на зобе серовато-бурого цвета и горлом в продольных пестринах. Обитатель лесной и кустарниковой горных зон, каменистых высокогорных участков. На юге Европы гнездится в хвойных лесах с большим количеством полян, по опушкам, любит окружение из светлых зарослей рябины и ольхи, а также лиственничные леса. Предпочитает гнездиться на высоте между 1 400–1 500 и 2 000–2 100 метров над уровнем моря.',
        },
        {
            id: 2,
            name: 'Кедровка',
            species: ' Nucifraga caryocatactes',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая птица, чуть меньше галки и с более тонким и длинным клювом. Длина кедровки 30 сантиметров, хвоста 11 сантиметров. Вес 125—190 граммов. Окрашена в тёмный коричневато-бурый цвет с белыми пятнами, которых нет только на верхней стороне головы. На конце хвоста светлая кайма. Самка мало отличается от самца: она несколько светлее, и белые пятна не так резко ограничены.Распространена в лесах таёжного типа Европы и Азии от Скандинавии и Альп до Камчатки, Курильских островов, Приморья, Японии и Китая. Кедровка является единственным массовым распространителем кедра (сосны сибирской) в Сибири. Кедровка привязана к суше и даже налегке, без груза орешков, редко стремится преодолеть водные преграды шириной более 3 км',
        },
        {
            id: 3,
            name: 'Обыкнове́нная лазо́ревка',
            species: 'Cyanistes caeruleus',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая синица с ярким голубовато-жёлтым оперением, широко распространённая в субтропическом, умеренном и субарктическом поясе Европы, Западной Азии и Северо-Западной Африки. В дикой природе обитает преимущественно в лиственных и смешанных лесах, особенно дубовых и берёзовых. Хорошо адаптировалась к условиям культивируемых ландшафтов и нередко селится в садах и парках, где её часто можно встретить возле кормушек. В Западной Европе нередко образует городские популяции. Не пуглива и подпускает к себе человека на достаточно близкое расстояние.',
        },
        {
            id: 4,
            name: 'Заря́нка',
            species: 'Erithacus rubecula',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица из семейства мухоловковых (Muscicapidae).Зарянки окрашены сверху в серо-зеленоватый цвет. У этой птицы белое брюшко, рыжие лоб, горло, грудь и бока головы. Птица относительно длинноногая. Зарянка является перелётной птицей, но возвращается в северные края одной из первых. Влажные лиственные и смешанные леса с густым подлеском, парки, заросшие кустарниками сады, предпочитает близость воды. Северо-Западная Африка от Марокко к востоку до Туниса, к северу до побережья Средиземного моря, к югу в Марокко до 30-й параллели, в Алжире и Тунисе до 34-й параллели. Западная Евразия от Скандинавии и атлантического побережья к востоку до Оби и долины Томи. К северу в Скандинавии и в Финляндии до 69-й параллели.',
        },
        {
            id: 5,
            name: 'Крапи́вник ',
            species: 'Troglodytes troglodytes',
            status: ['birdButton', 'check-btn'],
            description:
                'Мелкая птица, единственный представитель семейства крапивниковые (Troglodytidae), обитающий в Америке, Евразии и Северной Африке. Внешне похож на мягкий пушистый шарик с поднятым торчком коротким хвостиком. Птица очень подвижная, с необычно громким голосом — самцы помечают свою обширную территорию, сидя на каком-нибудь возвышении и распевая свою своеобразную, торопливую песню, состоящую из очень звучных быстрых трелей.Крапивник — одна из самых маленьких европейских птиц, его длина составляет всего 9—10,5 см, что почти вдвое меньше домового воробья, размах крыльев 15—17 см, а вес около 8—12 г.Места обитания крапивника — сырые хвойные и тёмные смешанные, реже лиственные леса с густым подлеском и захламлённым валежником, заросшие овраги, пустыри, прибрежные заросли рек и ручьёв, вересковые пустоши, иногда культивируемые человеком ландшафты: сады и парки с живыми изгородями и поросшие травой. В некоторых случаях, как, например, на Командорских островах, он селится среди скал с редким кустарником.',
        },
        {
            id: 6,
            name: 'Пеночка-трещотка',
            species: 'Phylloscopus sibilatrix',
            status: ['birdButton', 'check-btn'],
            description:
                'Певчая птица из семейства славковых (Sylviidae). Многочисленный и широко распространенный вид умеренного и таежного пояса Европы; на востоке ареал достигает юга Уральских гор. Трещотка совершает регулярные дальние миграции к местам зимовок в тропической Африке.Предпочитает старые сомкнутые леса с наличием откры­того пространства под кронами деревьев и держится среди негустой растительности, преимущественно в нижних участках крон деревьев и подкроновом пространстве. Почти во всей Центральной Европе пеночка-трещотка присутствует с апреля по сентябрь. Зимует в тропической Африке. Время отлёта и направление движения стаи свойственны птицам от природы. Пеночка-трещотка обитает в светлых лиственных и смешанных лесах, буковых лесах и парках.',
        },
    ],
    [
        {
            id: 1,
            name: 'Большая поганка',
            species: 'Podiceps cristatus',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица из семейства поганковых.Размером чомга немного меньше утки. Это птица с тонкой шеей и удлинённым прямым клювом. Спина буровато-рыжая, живот, шея и голова белые. В весеннем оперении на голове у чомги вырастают два тёмных пучка перьев, похожих на «ушки», и рыжий «воротничок» вокруг шеи. Зимой этих украшений у птиц нет.Обитает в прудах и озёрах по всей Евразии, кроме самых северных областей, Австралии и Новой Зеландии. Встречается местами в Африке.',
        },
        {
            id: 2,
            name: 'Белоголовая савка',
            species: 'Oxyura leucocephala',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица семейства утиных.Савка — это коренастая утка средних размеров. Единственный аборигенный представитель своего подсемейства Oxyurinae в Палеарктике. Согласно, красному списку союза охраны природы (Red List IUCN) считается исчезающим видом (Endangered, EN).Вся жизнь савки проходит на воде, она никогда не выходит на сушу. Характерной особенностью савки является её манера плавать с поднятым вертикально хвостом. При опасности эта утка погружается в воду очень глубоко, так что из воды торчит только верх спины. Савка отлично ныряет и плавает, проплывая под водой 30-40 м. Вынырнув из воды, тут же способна нырнуть ещё, ныряет тихо, без всплеска, как будто тонет. Взлетает неохотно, с длинного разбега против ветра. Летает неохотно, при опасности предпочитает заныривать.',
        },
        {
            id: 3,
            name: 'Большая белая цапля',
            species: 'Ardea alba',
            status: ['birdButton', 'check-btn'],
            description:
                'Крупная околоводная птица семейства цаплевых, распространённая в тёплых умеренных и тропических широтах как западного, так и восточного полушария.Достаточно крупная птица 94—104 см высотой и размахом крыльев 131—145 см. Вес взрослых птиц около 912—1140 г. Как правило, самцы несколько крупнее самок. Оперение полностью белое. Клюв длинный, прямой, окрашен в жёлтый цвет. Лапы и пальцы длинные, тёмно-серые. Шея длинная, S-образная. Большая белая цапля распространена в тёплых умеренных и тропических широтах Европы (с 2018 года появилась в Финляндии), Азии, Северной и Южной Америки и Африки, в тропической Азии, по-видимому, только зимует. Живёт она вдоль различных водоёмов как на морском побережье, так и внутри континента: заболоченных низинах, поймах и берегах рек, пресных и соляных озёрах, эстуариях и мангровых зарослях. ',
        },
        {
            id: 4,
            name: 'Большо́й кроха́ль',
            species: 'Mergus merganser',
            status: ['birdButton', 'check-btn'],
            description:
                'Крупная утка с узким удлинённым клювом, обычно ассоциируемая с тихими реками и озёрами северной тайги. Это самый крупный и наиболее распространённый из крохалей, своими размерами превосходящий крякву. В большинстве районов редкая либо очень редкая птица, однако общая численность популяций остаётся стабильной и опасений экологов не вызывает. В гнездовой период населяет пресноводные водоёмы с лесистыми берегами: небольшие незаросшие озёра с открытыми плёсами, водохранилища, быстротекущие реки в верхнем течении, где обычно держится недалеко от берега в тени деревьев. Для взлёта птице требуется достаточно большая дистанция на воде — по этой причине она часто избегает совсем небольших водоёмов, которые вполне отвечают всем прочим условиям обитания. Вид включён в Приложение II Директивы ЕС по охране редких птиц, Приложение III Бернской конвенции, Приложение II Боннской конвенции. Внесён в Красную книгу Латвии, Красную книгу Республики Беларусь.',
        },
        {
            id: 5,
            name: 'Камышо́вая овся́нка',
            species: 'Emberiza schoeniclus',
            status: ['birdButton', 'check-btn'],
            description:
                'Небольшая, размером с воробья, птица семейства овсянковых, распространённая в Европе и западной Азии. Обитает в зарослях по берегам водоёмов. Тростниковую овсянку можно встретить рядом с прудами, реками, берегами озёр, а также на болотах и мокрых лугах. Обитает в береговых зарослях — в тростнике, камыше, кустах ивы, где и устраивает свои гнёзда',
        },
        {
            id: 6,
            name: 'Лебедь-шипун',
            species: 'Cygnus olor',
            status: ['birdButton', 'check-btn'],
            description:
                'Птица из семейства утиных.У лебедей очень длинная шея, вытянутое туловище, тело и голова средней величины с оранжево-красным клювом, у основания которого есть характерный чёрный нарост. Шипуном назван из-за звука, издаваемого при раздражении.Лебедь-шипун обитает в северной части Европы и Азии. Всюду довольно редок. Однако при помощи человека этот вид лебедей успешно прижился в Северной Америке, Южной Африке, Австралии. Редкий вид птиц. Исчез на территории Республики Беларусь в конце XIX — начале XX вв. в результате истребления. Появление и восстановление птиц связано с их расселением из Литвы и Польши.',
        },
    ],
];

export default [birdState];
