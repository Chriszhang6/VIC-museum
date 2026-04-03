const museums = [
  // ===== Loddon Mallee =====
  {
    name: "Kyneton Museum",
    lat: -37.2443,
    lng: 144.4472,
    address: "67 Piper Street, Kyneton VIC 3444",
    description: "博物馆收藏于1856年建造的前新南威尔士银行分行的建筑中。包括银行经理住宅、青石马厩、马车和历史农业设备收藏。",
    link: "https://www.mrsc.vic.gov.au/See-Do/Arts-Culture/Kyneton-Museum",
    region: "Loddon Mallee"
  },
  {
    name: "Bendigo Tramways",
    lat: -36.7620,
    lng: 144.2786,
    address: "1 Tramways Way, Bendigo VIC 3550",
    description: "澳大利亚最古老的运营有轨电车系统之一。包括历史电车之旅、电车博物馆和工作坊参观。",
    link: "https://bendigotramways.com/",
    region: "Loddon Mallee"
  },
  {
    name: "Golden Dragon Museum",
    lat: -36.7588,
    lng: 144.2801,
    address: "1-11 Bridge Street, Bendigo VIC 3550",
    description: "展示Bendigo华人社区历史，包括世界最古老的帝国龙Loong。",
    link: "https://goldendragonmuseum.org/",
    region: "Loddon Mallee"
  },
  {
    name: "Castlemaine Art Museum",
    lat: -37.1411,
    lng: 144.2468,
    address: "14 Lyttleton Street, Castlemaine VIC 3450",
    description: "展示当地艺术和历史收藏，包括淘金热时期文物和澳大利亚早期艺术品。",
    link: "https://www.castlemaineartmuseum.org.au/",
    region: "Loddon Mallee"
  },
  {
    name: "Swan Hill Pioneer Settlement",
    lat: -35.3478,
    lng: 143.5583,
    address: "Monash Drive, Swan Hill VIC 3585",
    description: "澳大利亚最重要的户外博物馆之一，展示墨累河地区的历史。包括PS Pyap明轮船游览和夜间声光秀。",
    link: "https://pioneersettlement.com.au/",
    region: "Loddon Mallee"
  },
  {
    name: "Mildura Arts Centre",
    lat: -34.1884,
    lng: 142.1532,
    address: "199 Cureton Avenue, Mildura VIC 3500",
    description: "包括艺术画廊和当地历史收藏，包括Rio Vista Historic House。",
    link: "https://www.mildura.vic.gov.au/",
    region: "Loddon Mallee"
  },
  {
    name: "Port of Echuca Discovery Centre",
    lat: -36.1284,
    lng: 144.7482,
    address: "Murray Esplanade, Echuca VIC 3564",
    description: "活历史博物馆，位于历史悠久的码头区域。包括明轮蒸汽船游览和河流贸易时代展览。",
    link: "https://www.portofechuca.org.au/",
    region: "Loddon Mallee"
  },
  {
    name: "Echuca Historical Society Museum",
    lat: -36.1267,
    lng: 144.7442,
    address: "Heygarth Street, Echuca VIC 3564",
    description: "位于旧警察局建筑内，展示墨累河港口城镇的历史，包括河船历史和明轮蒸汽船文物。",
    link: "https://www.campaspe.vic.gov.au/",
    region: "Loddon Mallee"
  },

  // ===== Grampians =====
  {
    name: "Eureka Centre",
    lat: -37.5634,
    lng: 143.8621,
    address: "102 Stawell Street South, Ballarat East VIC 3350",
    description: "位于Eureka Stockade原址，纪念1854年Eureka起义，展示澳大利亚民主发展史。",
    link: "https://www.ballarat.vic.gov.au/city/facilities-and-venues/eureka-centre",
    region: "Grampians"
  },
  {
    name: "Sovereign Hill",
    lat: -37.5736,
    lng: 143.8563,
    address: "Bradshaw Street, Ballarat VIC 3350",
    description: "澳大利亚最著名的户外博物馆，重现1850年代淘金热时期的Ballarat。可体验淘金、观看红衣士兵游行。",
    link: "https://sovereignhill.com.au/",
    region: "Grampians"
  },
  {
    name: "Daylesford Historical Society Museum",
    lat: -37.8119,
    lng: 144.1458,
    address: "78 Vincent Street, Daylesford VIC 3460",
    description: "展示当地淘金热和温泉地区的历史，包括瑞士-意大利移民历史。",
    link: "https://www.hepburn.vic.gov.au/",
    region: "Grampians"
  },
  {
    name: "Gum San Chinese Heritage Centre",
    lat: -37.2840,
    lng: 142.9870,
    address: "31-33 Lambert Street, Ararat VIC 3377",
    description: "展示Ararat华人社区历史（澳大利亚唯一由华人建立的城镇）。",
    link: "https://www.ararat.vic.gov.au/",
    region: "Grampians"
  },
  {
    name: "J Ward Museum",
    lat: -37.2869,
    lng: 142.9902,
    address: "Loch Street, Ararat VIC 3377",
    description: "前精神病院，现为博物馆展示历史。",
    link: "https://www.ararat.vic.gov.au/",
    region: "Grampians"
  },
  {
    name: "Ararat Regional Art Gallery",
    lat: -37.2832,
    lng: 142.9855,
    address: "82-88 Vincent Street, Ararat VIC 3377",
    description: "展示Ararat地区的历史和艺术。",
    link: "https://www.ararat.vic.gov.au/",
    region: "Grampians"
  },

  // ===== Barwon South West =====
  {
    name: "National Wool Museum",
    lat: -38.1450,
    lng: 144.3568,
    address: "105 Brougham Street, Geelong VIC 3220",
    description: "澳大利亚唯一的羊毛博物馆，展示Geelong作为羊毛产业中心的历史。包括历史纺织机械和互动展览。",
    link: "https://www.geelongaustralia.com.au/nwm/",
    region: "Barwon South West"
  },
  {
    name: "Geelong Maritime Museum",
    lat: -38.1394,
    lng: 144.3611,
    address: "1 Swinburne Street, Geelong VIC 3220",
    description: "展示Geelong港口和海事历史。",
    link: "https://www.geelongaustralia.com.au/",
    region: "Barwon South West"
  },
  {
    name: "Flagstaff Hill Maritime Village",
    lat: -38.3833,
    lng: 142.4868,
    address: "89 Merri Street, Warrnambool VIC 3280",
    description: "户外海事博物馆，展示沉船历史和早期港口生活。包括夜间声光秀。",
    link: "https://www.warrnambool.vic.gov.au/",
    region: "Barwon South West"
  },
  {
    name: "Colac History Centre",
    lat: -38.3387,
    lng: 143.5847,
    address: "177 Murray Street, Colac VIC 3250",
    description: "展示Colac和Otway地区的历史，包括早期定居者历史、Otway森林工业和土著文化展示。",
    link: "https://www.colacotway.vic.gov.au/",
    region: "Barwon South West"
  },
  {
    name: "Hamilton Gallery",
    lat: -37.7398,
    lng: 142.0230,
    address: "107 Brown Street, Hamilton VIC 3300",
    description: "包括艺术和历史收藏，展示Western District定居历史。",
    link: "https://www.sthgrampians.vic.gov.au/",
    region: "Barwon South West"
  },
  {
    name: "Fort Queenscliff Museum",
    lat: -38.2700,
    lng: 144.6650,
    address: "1 King Street, Queenscliff VIC 3225",
    description: "展示军事历史和堡垒建筑。",
    link: "https://www.queenscliffe.vic.gov.au/",
    region: "Barwon South West"
  },
  {
    name: "History House Portland",
    lat: -38.3490,
    lng: 141.6050,
    address: "91 Cliff Street, Portland VIC 3305",
    description: "展示Portland早期定居历史（维多利亚第一个欧洲定居点）。",
    link: "https://www.glenelg.vic.gov.au/",
    region: "Barwon South West"
  },

  // ===== Gippsland =====
  {
    name: "East Gippsland Historical Society Museum",
    lat: -37.8252,
    lng: 147.6285,
    address: "110 Main Street, Bairnsdale VIC 3875",
    description: "展示East Gippsland地区的历史，包括早期定居者历史、航运商业和当地土著文化。",
    link: "https://www.eastgippsland.vic.gov.au/",
    region: "Gippsland"
  },
  {
    name: "Phillip Island Museum",
    lat: -38.4500,
    lng: 145.2333,
    address: "67-69 Thompson Avenue, Cowes VIC 3922",
    description: "展示Phillip Island的历史和发展，包括企鹅保护区历史和赛车运动历史。",
    link: "https://www.basscoast.vic.gov.au/",
    region: "Gippsland"
  },
  {
    name: "State Coal Mine",
    lat: -38.6100,
    lng: 145.5930,
    address: "19-37 Garden Street, Wonthaggi VIC 3995",
    description: "由Parks Victoria管理的煤矿遗址博物馆，可参观地下矿洞。",
    link: "https://www.parks.vic.gov.au/",
    region: "Gippsland"
  },
  {
    name: "Coal Creek Community Park and Museum",
    lat: -38.5550,
    lng: 145.8930,
    address: "12 Silkstone Road West, Korumburra VIC 3950",
    description: "户外博物馆，展示South Gippsland的煤炭开采历史和乡村生活。包括蒸汽机械展示。",
    link: "https://www.southgippsland.vic.gov.au/",
    region: "Gippsland"
  },
  {
    name: "Gippsland Art Gallery",
    lat: -38.1030,
    lng: 147.0660,
    address: "70 Foster Street, Sale VIC 3850",
    description: "包括艺术和历史展览，展示Gippsland地区文化。",
    link: "https://www.wellington.vic.gov.au/",
    region: "Gippsland"
  },

  // ===== Hume =====
  {
    name: "Beechworth Historic Precinct",
    lat: -36.3589,
    lng: 146.6859,
    address: "Beechworth VIC 3747",
    description: "维多利亚州保存最完好的淘金热城镇之一，包括Ned Kelly受审的法院、1858年电报站等国家级历史建筑。",
    link: "https://www.beechworthonline.com.au/",
    region: "Hume"
  },
  {
    name: "Burke Museum",
    lat: -36.3595,
    lng: 146.6865,
    address: "Beechworth VIC 3747",
    description: "以探险家Robert O'Hara Burke命名，收藏淘金热时期文物和当地自然历史。",
    link: "https://www.beechworthonline.com.au/",
    region: "Hume"
  },
  {
    name: "Mansfield Historical Society Museum",
    lat: -37.0517,
    lng: 146.0886,
    address: "Mansfield VIC 3722",
    description: "展示Mansfield和高地地区的历史，包括Ned Kelly传奇、高原牧场文化和早期定居者生活。",
    link: "https://www.mansfield.vic.gov.au/",
    region: "Hume"
  },
  {
    name: "Benalla Costume and Pioneer Museum",
    lat: -36.5513,
    lng: 145.9831,
    address: "Benalla VIC 3672",
    description: "展示早期定居者服装和当地历史，包括Ned Kelly相关展品。",
    link: "https://www.benalla.vic.gov.au/",
    region: "Hume"
  },

  // ===== Melbourne =====
  {
    name: "Melbourne Museum",
    lat: -37.8033,
    lng: 144.9710,
    address: "11 Nicholson Street, Carlton VIC 3053",
    description: "南半球最大的博物馆，展示维多利亚州的自然历史、文化和发展。包括Bunjilaka Aboriginal Cultural Centre和Phar Lap展览。",
    link: "https://museumsvictoria.com.au/melbournemuseum/",
    region: "Melbourne"
  },
  {
    name: "Immigration Museum",
    lat: -37.8224,
    lng: 144.9558,
    address: "400 Flinders Street, Melbourne VIC 3000",
    description: "展示澳大利亚移民历史和多元文化故事。",
    link: "https://museumsvictoria.com.au/immigrationmuseum/",
    region: "Melbourne"
  },
  {
    name: "Old Treasury Building",
    lat: -37.8129,
    lng: 144.9722,
    address: "20 Spring Street, East Melbourne VIC 3002",
    description: "展示墨尔本淘金热时期历史，包括建筑本身的地下金库。",
    link: "https://www.oldtreasurybuilding.org.au/",
    region: "Melbourne"
  },
  {
    name: "Scienceworks",
    lat: -37.8261,
    lng: 144.8915,
    address: "2 Booker Street, Spotswood VIC 3015",
    description: "互动科学博物馆，包括墨尔本天文馆。",
    link: "https://museumsvictoria.com.au/scienceworks/",
    region: "Melbourne"
  },
  {
    name: "Williamstown Historical Museum",
    lat: -37.8636,
    lng: 144.8960,
    address: "5 Electra Street, Williamstown VIC 3016",
    description: "展示墨尔本最古老港口的历史，包括早期航海历史和Williamstown港口发展。",
    link: "https://www.hobsonsbay.vic.gov.au/",
    region: "Melbourne"
  },
  {
    name: "Sorrento Museum",
    lat: -38.3391,
    lng: 144.7394,
    address: "827 Melbourne Road, Sorrento VIC 3943",
    description: "展示Mornington Peninsula早期定居历史，包括Collins Settlement Site（维多利亚第一个欧洲定居点）。",
    link: "https://www.mornpen.vic.gov.au/",
    region: "Melbourne"
  },
  {
    name: "Werribee Mansion & Gardens",
    lat: -37.9055,
    lng: 144.6838,
    address: "K Road, Werribee VIC 3030",
    description: "维多利亚时代豪宅，展示19世纪乡村生活。",
    link: "https://www.wyndham.vic.gov.au/",
    region: "Melbourne"
  },
  {
    name: "Royal Exhibition Building",
    lat: -37.8047,
    lng: 144.9693,
    address: "9 Nicholson Street, Carlton VIC 3053",
    description: "世界遗产建筑，举办展览和活动。",
    link: "https://museumsvictoria.com.au/royalexhibitionbuilding/",
    region: "Melbourne"
  }
];

const regions = [
  { name: "Loddon Mallee", color: "#e74c3c" },
  { name: "Grampians", color: "#e67e22" },
  { name: "Barwon South West", color: "#27ae60" },
  { name: "Gippsland", color: "#2980b9" },
  { name: "Hume", color: "#8e44ad" },
  { name: "Melbourne", color: "#16a085" }
];
