// Define a type for link data
export interface LinkData {
    link: string;
    title: string;
  }
  
  // Create a mapping of names to link data
  const linkMap: Record<string, LinkData> = {
    // friendship
    toba: {
      link: "/wiki/friendship/self/nsm-group.html#鳥羽-咲夜-toba-sakuya-赌场",
      title: "鳥羽 咲夜（Toba Sakuya）",
    },
    sara: {
      link: "/wiki/friendship/self/nsm-group.html#星野-サラ-hoshino-sara-らびすぴ",
      title: "星野 サラ（Hoshino Sara）",
    },
    suruzou: {
      link: "/wiki/friendship/self/nsm-group.html#する蔵-suruzou-らびすぴ",
      title: "する蔵（Suruzou）",
    },
    nene: {
      link: "/wiki/friendship/self/arcana.html#鬼野-ねね-onino-nene",
      title: "鬼野 ねね（Onino Nene）",
    },
    gou: {
      link: "/wiki/friendship/self/arcana.html#月ノ島-ごう-tsukinoshima-gou",
      title: "月ノ島 ごう（Tsukinoshima Gou）",
    },
    ueda: {
      link: "/wiki/friendship/self/arcana.html#上田さん-uedasan",
      title: "上田さん（Uedasan）",
    },
    tarachan: {
      link: "/wiki/friendship/self/arcana.html#タラちゃん-tarachan",
      title: "タラちゃん（Tarachan）",
    },
    rogia: {
      link: "/wiki/friendship/self/arcana.html#香月-ろぎあ-kouzuki-rogia",
      title: "香月 ろぎあ（Kouzuki Rogia）",
    },
    raru: {
      link: "/wiki/friendship/self/arcana.html#麻林-ラル-asabayashi-raru",
      title: "麻林 ラル（Asabayashi Raru）",
    },
    ookawa: {
      link: "/wiki/friendship/self/arcana.html#大川-ookawa",
      title: "大川（Ookawa）",
    },
    raian: {
      link: "/wiki/friendship/self/arcana.html#柳田-ライアン-yanagita-raian",
      title: "柳田 ライアン（Yanagita Raian）",
    },
    jd: {
      link: "/wiki/friendship/self/arcana.html#jd",
      title: "JD",
    },
    uni: {
      link: "/wiki/friendship/self/arcana.html#生雲丹-よづな-namauni-yozuna",
      title: "生雲丹 よづな（Namauni Yozuna）",
    },
    tsun: {
      link: "/wiki/friendship/self/arcana.html#柳瀬-つん-yanagi-tsun",
      title: "柳瀬 つん（Yanagi Tsun）",
    },
    komine: {
      link: "/wiki/friendship/self/arcana.html#小峯-玲-komine-rei",
      title: "小峯 玲（Komine Rei）",
    },
    katou: {
      link: "/wiki/friendship/self/arcana.html#加藤-圧-katou-atsu",
      title: "加藤 圧（Katou Atsu）",
    },
    nukuo: {
      link: "/wiki/friendship/self/arcana.html#ぬくお-nukuo",
      title: "ぬくお（Nukuo）",
    },
    fujiko: {
      link: "/wiki/friendship/self/femme-fatale.html#不二子-キャスパー-fujiko-kyasupa",
      title: "不二子 キャスパー（fujiko kyasupa）",
    },
    mond: {
      link: "/wiki/friendship/gang/allin.html#mond",
      title: "MonD",
    },
    rb: {
      link: "/wiki/friendship/gang/allin.html#rb",
      title: "RB",
    },
    shirai: {
      link: "/wiki/friendship/gang/allin.html#白井-満太-shirai-manta",
      title: "白井 満太（Shirai Manta）",
    },
    beni: {
      link: "/wiki/friendship/gang/allin.html#薬乃-紅-yakuno-beni",
      title: "薬乃 紅（Yakuno Beni）",
    },
    mimi: {
      link: "/wiki/friendship/gang/allin.html#薬乃-ミミ-yakuno-mimi",
      title: "薬乃 ミミ（Yakuno Mimi）",
    },
    mazawa: {
      link: "/wiki/friendship/gang/allin.html#真沢-栄吉-mazawa-eikichi",
      title: "真沢 栄吉（Mazawa Eikichi）",
    },
    chiyoda: {
      link: "/wiki/friendship/gang/allin.html#千代田-ヨウ-chiyoda-you",
      title: "千代田 ヨウ（Chiyoda You）",
    },
    esu: {
      link: "/wiki/friendship/gang/allin.html#エスターク・z・ダークネス-esutaaku-·-z-·-darkness",
      title: "エスターク・Z・ダークネス（Esutaaku · Z · Darkness）",
    },
    heruan: {
      link: "/wiki/friendship/gang/allin.html#ヘルアン-heruan",
      title: "ヘルアン（Heruan）",
    },
    anjou: {
      link: "/wiki/friendship/gang/allin.html#安城-成-anjou-naru",
      title: "安城 成（Anjou Naru）",
    },
    maho: {
      link: "/wiki/friendship/gang/allin.html#椎花-まほ-shiika-maho",
      title: "椎花 まほ（Shiika Maho）",
    },
    amakusa: {
      link: "/wiki/friendship/gang/allin.html#天草-蒼-amakusa-sou",
      title: "天草 蒼（Amakusa Sou）",
    },
    narieru: {
      link: "/wiki/friendship/gang/allin.html#マイゴ・ニ-ナリエル-maigo-·-ni-narieru",
      title: "マイゴ・ニ＝ナリエル（Maigo · Ni = Narieru）",
    },
    mikoda: {
      link: "/wiki/friendship/gang/allin.html#みこだ-よう-mikoda-you",
      title: "みこだ よう（Mikoda You）",
    },
    wesker: {
      link: "/wiki/friendship/gang/anbrella.html#アルフォート-ウェスカー-alfort-wesker",
      title: "アルフォート ウェスカー（Alfort Wesker）",
    },
    reria: {
      link: "/wiki/friendship/gang/anbrella.html#聖母-れりあ-seibo-reria",
      title: "聖母 れりあ（Seibo Reria）",
    },
    datezaki: {
      link: "/wiki/friendship/gang/anbrella.html#伊達咲-政宗-datezaki-masamune",
      title: "伊達咲 政宗（Datezaki Masamune）",
    },
    hanku: {
      link: "/wiki/friendship/gang/anbrella.html#ハンク-hanku",
      title: "ハンク（Hanku）",
    },
    wakio: {
      link: "/wiki/friendship/gang/anbrella.html#キャプテン-わきを-captain-wakio",
      title: "キャプテン わきを（Captain Wakio）",
    },
    kumachan: {
      link: "/wiki/friendship/gang/anbrella.html#くまちゃん-kumachan",
      title: "くまちゃん（Kumachan）",
    },
    sosu: {
      link: "/wiki/friendship/gang/anbrella.html#いわさき-そす-iwasaki-sosu",
      title: "いわさき そす（Iwasaki Sosu）",
    },
    mac: {
      link: "/wiki/friendship/gang/gbc.html#マクドナルド-macdonald",
      title: "マクドナルド（Macdonald）",
    },
    deyansu: {
      link: "/wiki/friendship/gang/gbc.html#デヤンス-deyansu",
      title: "デヤンス（Deyansu）",
    },
    zuzu: {
      link: "/wiki/friendship/gang/gbc.html#キングスターダイヤモンド-ズズ-kingstardiamond-zuzu",
      title: "キングスターダイヤモンド ズズ（Kingstardiamond Zuzu）",
    },
    van: {
      link: "/wiki/friendship/gang/mozu.html#ヴァン-ダーマー-van-dahmer",
      title: "ヴァン ダーマー（Van Dahmer）",
    },
    dayo: {
      link: "/wiki/friendship/gang/mozu.html#堕夜-だよ-dayo-dayo",
      title: "堕夜 だよ（Dayo Dayo）",
    },
    boa: {
      link: "/wiki/friendship/gang/mozu.html#ボア-セニャコック-boa-senyakokku",
      title: "ボア セニャコック（Boa Senyakokku）",
    },
    jinpei: {
      link: "/wiki/friendship/gang/mozu.html#坂柳-陣平-sakayanagi-jinpei",
      title: "坂柳 陣平（Sakayanagi Jinpei）",
    },
    zenigata: {
      link: "/wiki/friendship/gang/mozu.html#銭形-やいち郎-zenigata-yaichirou",
      title: "銭形 やいち郎（Zenigata Yaichirou）",
    },
    seiji: {
      link: "/wiki/friendship/gang/nolimit.html#文殊-セイジ-monju-seiji",
      title: "文殊 セイジ（Monju Seiji）",
    },
    natsume: {
      link: "/wiki/friendship/gang/nolimit.html#ハク-ナツメ-haku-natsume",
      title: "ハク ナツメ（Haku Natsume）",
    },
    reda: {
      link: "/wiki/friendship/gang/868.html#レダー-ヨージロー-reda-youjirou",
      title: "レダー ヨージロー（Reda Youjirou）",
    },
    kentsu: {
      link: "/wiki/friendship/gang/topgear.html#飯田-けんつ-Iida-Kentsu",
      title: "飯田 けんつ（Iida Kentsu）原车行9055的机械师，帮派TOPGEAR的Boss"
    },
    mary: {
      link: "/wiki/friendship/gang/topgear.html#チョコラータ-メアリー-chocolata-mary",
      title: "チョコラータ メアリー（Chocolata Mary）",
    },
    yucha: {
      link: "/wiki/friendship/black/doctor.html#ゆちゃ-めろでぃ-yucha-melody",
      title: "ゆちゃ めろでぃ（Yucha Melody）",
    },
    usako: {
      link: "/wiki/friendship/black/doctor.html#うさ子-usako",
      title: "うさ子（Usako）",
    },
    yamamoto: {
      link: "/wiki/friendship/black/other.html#山本-龍也-yamamoto-tatsuya",
      title: "山本 龍也（Yamamoto Tatsuya）",
    },
    tsukimi: {
      link: "/wiki/friendship/black/other.html#月見-結-tsukimi-yui",
      title: "月見 結（Tsukimi Yui）",
    },
    terumi: {
      link: "/wiki/friendship/black/other.html#淀川-てるみ-yodogawa-terumi",
      title: "淀川 てるみ（Yodogawa Terumi）",
    },
    famos: {
      link: "/wiki/friendship/black/other.html#famos-gray",
      title: "Famos Gray",
    },
    han: {
      link: "/wiki/friendship/black/other.html#アドミゲス・ハン-admingesu-han",
      title: "アドミゲス・ハン（Admingesu Han）",
    },
    cap: {
      link: "/wiki/friendship/white/police.html#赤ちゃんキャップ-akachan-cap",
      title: "赤ちゃんキャップ（Akachan Cap）",
    },
    marun: {
      link: "/wiki/friendship/white/police.html#花沢-まるん-hanazawa-marun",
      title: "花沢 まるん（Hanazawa Marun）",
    },
    mindorii: {
      link: "/wiki/friendship/white/police.html#ミン-ドリー-min-dorii",
      title: "ミン ドリー（Min Dorii）",
    },
    radao: {
      link: "/wiki/friendship/white/police.html#青井-らだお-aoi-radao",
      title: "青井 らだお（Aoi Radao）",
    },
    manu: {
      link: "/wiki/friendship/white/police.html#ゴンザレス-マヌ太郎-gonzaresu-manutarou",
      title: "ゴンザレス マヌ太郎（Gonzaresu Manutarou）",
    },
    boira: {
      link: "/wiki/friendship/white/police.html#ボイラ-テンガリン-boira-tengarin",
      title: "ボイラ テンガリン（Boira Tengarin）",
    },
    pein: {
      link: "/wiki/friendship/white/police.html#伊藤-ぺいん-itou-pein",
      title: "伊藤 ぺいん（Itou Pein）",
    },
    saburou: {
      link: "/wiki/friendship/white/police.html#安保-さぶ郎-aho-saburou",
      title: "安保 さぶ郎（Aho Saburou）",
    },
    gorida: {
      link: "/wiki/friendship/white/police.html#ゴリ田-ゴリ男-gorida-gorio",
      title: "ゴリ田 ゴリ男（Gorida Gorio）",
    },
    minya: {
      link: "/wiki/friendship/white/aid.html#世風天-みにゃ-sebuten-minya",
      title: "世風天 みにゃ（Sebuten Minya）",
    },
    tetsuo: {
      link: "/wiki/friendship/white/aid.html#切間-てつお-kiruma-tetsuo",
      title: "切間 てつお（Kiruma Tetsuo）",
    },
    momomi: {
      link: "/wiki/friendship/white/aid.html#ももみ-マルフォイ-momomi-marufoi",
      title: "ももみ マルフォイ（Momomi Marufoi）",
    },
    yamashita: {
      link: "/wiki/friendship/white/other.html#山下-ひろし-yamashita-hiroshi",
      title: "山下 ひろし（Yamashita Hiroshi）",
    },
    herashigi: {
      link: "/wiki/friendship/white/other.html#ヘラシギ-herashigi",
      title: "ヘラシギ（Herashigi）",
    },
    nishinon: {
      link: "/wiki/friendship/white/other.html#にしのん-nishinon",
      title: "にしのん（Nishinon）",
    },
    eboshi: {
      link: "/wiki/friendship/white/other.html#須藤-冬馬-sudou-touma-、深沢-えぼし-fukazawa-eboshi",
      title: "須藤 冬馬（Sudou Touma）、深沢 えぼし（Fukazawa Eboshi）",
    },
    taisa: {
      link: "/wiki/friendship/white/other.html#プスカ大佐-pusukataisa",
      title: "プスカ大佐（Pusukataisa）",
    },
    jef: {
      link: "/wiki/friendship/white/other.html#ジェフリー-ヒッチコック-jeffrey-hitchcock",
      title: "ジェフリー ヒッチコック（Jeffrey Hitchcock）",
    },
    tsurugi: {
      link: "/wiki/friendship/white/other.html#焦月-ツルギ-kogetsuki-tsurugi",
      title: "焦月 ツルギ（Kogetsuki Tsurugi）",
    },
    rock: {
      link: "/wiki/friendship/white/other.html#犬億-ロック-wanoku-rock",
      title: "犬億 ロック（Wanoku Rock）",
    },
    // organization
    arcana: {
      link: "/wiki/organization.html#私立组织【arcana】",
      title: "仰慕無馬，听从無馬指示行动的秘密组织",
    },
    weapon: {
      link: "/wiki/organization.html#武器商【femme-fatale】",
      title: "ARCANA下部组织的进口武器贩卖公司",
    },
    nashima_group: {
      link: "/wiki/organization.html#無馬集团",
      title: "以無馬为代表的活动事业集团",
    },
    casino: {
      link: "/wiki/organization.html#民营赌场【diamond-casino】",
      title: "以回馈白市民为基础，实行经济促进政策的民营赌博场所",
    },
    doctor: {
      link: "/wiki/organization.html#私人医生",
      title: "没有报警义务的医生",
    },
    dep: {
      link: "/wiki/organization.html#麻药集团【dep】",
      title: "贩卖麻药，开发新药的地下组织。",
    },
    madara: {
      link: "/wiki/organization.html#麻陀罗组",
      title: "以在麻药市场的开拓和流通领域声名远扬为目的的组织。",
    },
    taxi: {
      link: "/wiki/organization.html#菖光會",
      title: "半灰时代蒙受照顾的出租车公司",
    },
    pere_noel: {
      link: "/wiki/organization.html#pere-noel",
      title: "店主为原犯罪者，职场氛围相当自由的咖啡店。",
    },
    allin: {
      link: "/wiki/organization.html#♠%EF%B8%8F-allin",
      title: "曾所属的信奉Boss至上主义的帮派。",
    },
    akisu: {
      link: "/wiki/organization.html#小偷协会",
      title: "声称要复兴小偷业界的组织",
    },
    shanaor: {
      link: "/wiki/organization.html#shanaor",
      title: "MOZU的掩护企业，以黑市民为主要服务群体的酒吧。",
    },
    academy: {
      link: "/wiki/organization.html#academy",
      title: "原为ARCANA下部组织的佣兵公司。担任理事长一职。",
    },
    mozu: {
      link: "/wiki/friendship/gang/mozu.html",
      title: "MOZU"
    },
    gbc: {
      link: "/wiki/friendship/gang/gbc.html",
      title: "GBC"
    },
    anbrella: {
      link: "/wiki/friendship/gang/anbrella.html",
      title: "Anbrella（餡ブレラ）"
    },
    nolimit: {
      link: "/wiki/friendship/gang/nolimit.html",
      title: "No Limit"
    },
    yaroya: {
      link: "/wiki/friendship/gang/868.html",
      title: "868"
    },
    topgear: {
      link: "/wiki/friendship/gang/topgear.html",
      title: "TOPGEAR"
    },
    lwgp: {
      link: "#",
      title: "LWGP"
    },
    iris: {
      link: "#",
      title: "IRiS"
    },
    concellge: {
      link: "/wiki/friendship/gang/concellge.html",
      title: "Concellge"
    },
    polic: {
      link: "/wiki/friendship/white/polic.html",
      title: "洛圣都警察"
    },
    aid: {
      link: "/wiki/friendship/white/aid.html",
      title: "洛圣都急救队"
    },
    // people
    bigsuzuki: {
      link: "#",
      title: "BIG SUZUKI 改装店B.A.D社长"
    },
    ruu: {
      link: "#",
      title: "ルウ ギャラクティカ（Ruu Gyarakutika）一般车销售员兼车行PYC的店长"
    },
    agemono: {
      link: "#",
      title: "揚物 ころも（Agemono Koromo）饮食店奇肉屋店员兼车行BMC的机械师"
    },
    nanba: {
      link: "#",
      title: "難波 ハル（Nanba Haru）原PY（已拆除）机械师"
    },
    kawaue: {
      link: "#",
      title: "川上（Kawaue）经典车销售员兼车行A2的机械师"
    },
    chenmayo: {
      link: "#",
      title: "チェン マヨ（Chen Mayo）车行A2的机械师"
    },
    yabushita: {
      link: "#",
      title: "ヤブ下 安理（Yabushita Anri）武器店FEMME FETALE经营者兼车行A2的机械师"
    },
    sauta: {
      link: "#",
      title: "星唄 サウ汰（Hoshiuda Sauta）车行BMC的机械师"
    },
    pakichi: {
      link: "#",
      title: "パキ ち（Paki Chi）一般车销售员兼车行PYC的机械师"
    },
    saitou: {
      link: "#",
      title: "斎藤 まさのり（Saitou Masanori）高级车销售员兼车行JTS的机械师"
    },
    tette: {
      link: "#",
      title: "なんば てって（Nanba Tette）原PY（已拆除）机械师"
    },
    tenouji: {
      link: "#",
      title: "天王寺 京司郎（Tenouji Kyoshirou）高级车销售员兼车行JTS的机械师"
    },
    oniwano: {
      link: "#",
      title: "御庭野 えんちょう（Oniwano Enchou）车行PYC的机械师"
    },
    torino: {
      link: "#",
      title: "鳥野 ぎん（Torino Gin）飞机销售员兼急救队队员"
    },
    naruse: {
      link: "#",
      title: "成瀬 力二（Naruse Rikiji）飞机销售员兼警察"
    },
    inochida: {
      link: "#",
      title: "命田 守（Inochida Mamoru）船舶销售员兼急救队队长"
    },
    fudeko: {
      link: "#",
      title: "くまの ふでこ（Kumano Fudeko）飞机销售员兼BMC机械师"
    },
    neke: {
      link: "#",
      title: "ネケ ニマス（Neke Nimasu）原车行PY的店员，帮派GBC成员"
    },
    monapi: {
      link: "#",
      title: "小豆 最中（Azuki Monaka）车行JTS的店员"
    },
    ozawa: {
      link: "#",
      title: "オザワ ハヤマサ（Ozawa Hayamasa）原帮派IRiS成员，解散后加入Anbrella"
    },
    marii: {
      link: "#",
      title: "まりー あんとあー（Marii Antoaa）"
    },
    naofi: {
      link: "#",
      title: "半沢 直ふぃ（Hanzawa Naofi）原帮派IRiS UB，解散后加入No Limit"
    },
    bushi: {
      link: "#",
      title: "ジャーク 武士（Jyaaku Bushi）原车行PY的社长"
    },
    usagisan: {
      link: "#",
      title: "山田 パルコ（Yamada Paruko）车行BMC的店员，正在以Usagisan的艺名活动中"
    },
    roozu: {
      link: "#",
      title: "猪原 ローズ（Ibara Roozu）警察"
    },
    arisaka: {
      link: "#",
      title: "有坂 誉（Arisaka Homare）帮派Anbrella成员"
    },
    hesutiya: {
      link: "#",
      title: "ヘスティア ゴデス（Hesutiya Godesu）急救队队员"
    },
    mera: {
      link: "#",
      title: "雪菱 メラ（Yukihishi Mera）原Academy学生，Academy解散后加入TOPGEAR"
    },
    amachika: {
      link: "#",
      title: "天近 くるみ（Amachika Kurumi）魔女咖啡店主，很擅长装修"
    },
    horon: {
      link: "#",
      title: "高橋 滅論（Takahashi Horon）原DEP成员，曾私自调查nashima周边情报，在屡次违反DEP规矩并背叛加藤さん后，最终被加藤さん开除"
    },
    // external links
    chunk_5: {
      link: "https://www.bilibili.com/video/BV1we48ejEZ1/?share_source=copy_web&vd_source=873a132450be0298a3ee2f43e24dd93e",
      title: "",
    },
    ring_1: {
      link: "https://www.bilibili.com/video/BV1bK421y7tc/?share_source=copy_web&vd_source=873a132450be0298a3ee2f43e24dd93e",
      title: "",
    },
    ring_2: {
      link: "https://www.bilibili.com/video/BV1fZ421B7Fm/?share_source=copy_web&vd_source=873a132450be0298a3ee2f43e24dd93e",
      title: "",
    },
    twitter: {
      link: "https://x.com/Kanae_2434/",
      title: "",
    },
    twitch: {
      link: "https://www.twitch.tv/kanae_2434",
      title: "",
    },
    guideline: {
      link: "https://www.anycolor.co.jp/guidelines/",
      title: "",
    },
  };
  
  export default linkMap;
  