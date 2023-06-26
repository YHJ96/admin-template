// const DATA = [];

// const GENDER = ["남", "여"];
// const FIRST = ["김", "이", "박", "양", "장", "손"];
// const LAST = {
//   남: [
//     "민준",
//     "서준",
//     "도윤",
//     "예준",
//     "시우",
//     "하준",
//     "주원",
//     "지호",
//     "지후",
//     "준우",
//     "준서",
//     "도현",
//     "건우",
//     "현우",
//     "우진",
//     "지훈",
//     "선우",
//     "서진",
//     "연우",
//     "유준",
//     "은우",
//     "민재",
//     "현준",
//     "정우",
//     "시윤",
//     "이준",
//     "승우",
//     "윤우",
//     "승현",
//     "지환",
//     "지우",
//     "준혁",
//     "유찬",
//     "승민",
//     "시후",
//     "수호",
//     "진우",
//     "민성",
//     "준영",
//     "수현",
//     "지원",
//     "이안",
//     "재윤",
//     "시현",
//     "태윤",
//     "한결",
//     "동현",
//     "지안",
//     "윤호",
//     "은찬",
//     "시원",
//     "재원",
//     "민규",
//     "민우",
//     "시온",
//     "재민",
//     "민찬",
//     "지한",
//     "서우",
//     "은호",
//     "우빈",
//     "하율",
//     "준호",
//     "성민",
//     "우주",
//     "승준",
//     "지율",
//     "성현",
//     "현서",
//     "율",
//     "재현",
//     "민호",
//     "태민",
//     "하진",
//     "준",
//     "태현",
//     "예성",
//     "지민",
//     "지성",
//     "윤재",
//     "민혁",
//     "성준",
//     "규민",
//     "하람",
//     "정민",
//     "윤성",
//     "하민",
//     "태양",
//     "예찬",
//     "은성",
//     "준수",
//     "도훈",
//     "준희",
//     "로운",
//     "민석",
//     "건",
//     "이현",
//     "주안",
//     "다온",
//     "주호",
//     "지완",
//     "태준",
//     "강민",
//     "준성",
//     "승원",
//     "지오",
//     "이든",
//     "현수",
//     "정현",
//     "승호",
//     "하랑",
//     "도영",
//     "도하",
//     "시율",
//     "성빈",
//     "도율",
//     "우현",
//     "민서",
//     "시훈",
//     "건희",
//     "주환",
//     "서율",
//     "시완",
//     "민수",
//     "정훈",
//     "원준",
//     "라온",
//     "현민",
//     "승윤",
//     "동하",
//     "민기",
//     "주영",
//     "경민",
//     "도경",
//     "현성",
//     "서후",
//     "재하",
//     "시환",
//     "윤",
//     "민건",
//     "도원",
//     "가온",
//     "태훈",
//     "정후",
//     "단우",
//     "온유",
//     "승빈",
//     "호준",
//     "정원",
//     "재훈",
//     "현",
//     "태영",
//     "재준",
//     "동건",
//     "시안",
//     "태오",
//     "세현",
//     "태경",
//     "연준",
//     "찬영",
//     "범준",
//     "현진",
//     "태율",
//     "재영",
//     "영준",
//     "유건",
//     "하윤",
//     "성윤",
//     "현승",
//     "상현",
//     "찬우",
//     "주혁",
//     "승훈",
//     "하온",
//     "동윤",
//     "세준",
//     "승재",
//     "우성",
//     "건호",
//     "태호",
//     "도준",
//     "지혁",
//     "찬희",
//     "하늘",
//     "산",
//     "윤찬",
//     "성훈",
//     "찬",
//     "윤후",
//     "동욱",
//     "수민",
//     "연호",
//     "승찬",
//     "태우",
//     "현호",
//     "규빈",
//     "지운",
//     "도겸",
//     "재우",
//     "현빈",
//   ],
//   여: [
//     "서윤",
//     "서연",
//     "지우",
//     "서현",
//     "하윤",
//     "하은",
//     "민서",
//     "지유",
//     "윤서",
//     "채원",
//     "지민",
//     "수아",
//     "지아",
//     "지윤",
//     "은서",
//     "다은",
//     "예은",
//     "지안",
//     "소율",
//     "예린",
//     "수빈",
//     "서아",
//     "하린",
//     "소윤",
//     "예원",
//     "지원",
//     "시은",
//     "유나",
//     "유진",
//     "채은",
//     "윤아",
//     "가은",
//     "예나",
//     "서영",
//     "시아",
//     "예진",
//     "민지",
//     "예서",
//     "연우",
//     "아린",
//     "주아",
//     "수민",
//     "하율",
//     "수연",
//     "다인",
//     "유주",
//     "아인",
//     "연서",
//     "서우",
//     "아윤",
//     "시연",
//     "서은",
//     "다연",
//     "채윤",
//     "하연",
//     "서율",
//     "나윤",
//     "현서",
//     "지율",
//     "나은",
//     "서진",
//     "서하",
//     "유빈",
//     "다현",
//     "수현",
//     "예지",
//     "소은",
//     "채아",
//     "사랑",
//     "나연",
//     "지은",
//     "시현",
//     "예빈",
//     "민주",
//     "윤지",
//     "지현",
//     "소연",
//     "은채",
//     "주하",
//     "세아",
//     "다윤",
//     "지수",
//     "승아",
//     "혜원",
//     "소민",
//     "하영",
//     "다온",
//     "채린",
//     "민아",
//     "서희",
//     "나현",
//     "세은",
//     "아영",
//     "도연",
//     "규리",
//     "가윤",
//     "민채",
//     "아현",
//     "지연",
//     "시윤",
//     "연아",
//     "예림",
//     "태희",
//     "주은",
//     "유정",
//     "유하",
//     "이서",
//     "소현",
//     "소이",
//     "보민",
//     "정원",
//     "민정",
//     "수진",
//     "윤하",
//     "리아",
//     "나경",
//     "라희",
//     "현지",
//     "세연",
//     "민경",
//     "가현",
//     "지효",
//     "재이",
//     "가온",
//     "은지",
//     "봄",
//     "가연",
//     "윤슬",
//     "하늘",
//     "예슬",
//     "한별",
//     "채연",
//     "소희",
//     "설아",
//     "현아",
//     "유림",
//     "효주",
//     "하나",
//     "하랑",
//     "채민",
//     "하진",
//     "은솔",
//     "유리",
//     "예주",
//     "다희",
//     "다솜",
//     "채이",
//     "가영",
//     "태린",
//     "주연",
//     "혜린",
//     "태연",
//     "은우",
//     "다빈",
//     "하람",
//     "단아",
//     "은유",
//     "시온",
//     "유민",
//     "다혜",
//     "혜인",
//     "로아",
//     "재인",
//     "지혜",
//     "수인",
//     "태은",
//     "승연",
//     "고은",
//     "지영",
//     "수정",
//     "채영",
//     "아라",
//     "지온",
//     "주원",
//     "민하",
//     "지후",
//     "수지",
//     "가빈",
//     "라온",
//     "은별",
//     "서인",
//     "나영",
//     "소영",
//     "태리",
//     "아진",
//     "예솔",
//     "나율",
//     "다영",
//     "채현",
//     "율",
//     "보경",
//     "루아",
//     "슬아",
//     "주희",
//     "이현",
//     "서빈",
//     "도희",
//     "시우",
//     "정민",
//     "다율",
//   ],
// };

// const STATE = [
//   "정상",
//   "3일정지",
//   "7일정지",
//   "영구정지",
//   "정상",
//   "정상",
//   "정상",
//   "정상",
// ];

// const randomRange = (start: number, end: number) =>
//   Math.floor(Math.random() * (end - start) + start);

// for (let i = 0; i < 100; i++) {
//   const gender = GENDER[randomRange(0, GENDER.length)] as "남" | "여";
//   const last = LAST[gender][randomRange(0, 200)];

//   const mock = {
//     key: i + 1,
//     id: `US${(i + 1).toString().padStart(5, "0")}`,
//     email: `${last}${randomRange(1, 100)}@naver.com`,
//     name: `${FIRST[randomRange(0, FIRST.length)]}${last}`,
//     stauts: STATE[randomRange(0, STATE.length)],
//   };
//   DATA.push(mock);
// }

const DATA = [
  {
    key: 1,
    id: "US00001",
    email: "진우37@naver.com",
    name: "양진우",
    stauts: "정상",
  },
  {
    key: 2,
    id: "US00002",
    email: "민서71@naver.com",
    name: "이민서",
    stauts: "3일정지",
  },
  {
    key: 3,
    id: "US00003",
    email: "우진57@naver.com",
    name: "손우진",
    stauts: "정상",
  },
  {
    key: 4,
    id: "US00004",
    email: "시환34@naver.com",
    name: "장시환",
    stauts: "정상",
  },
  {
    key: 5,
    id: "US00005",
    email: "예슬4@naver.com",
    name: "장예슬",
    stauts: "정상",
  },
  {
    key: 6,
    id: "US00006",
    email: "태리90@naver.com",
    name: "장태리",
    stauts: "정상",
  },
  {
    key: 7,
    id: "US00007",
    email: "율86@naver.com",
    name: "김율",
    stauts: "정상",
  },
  {
    key: 8,
    id: "US00008",
    email: "시완19@naver.com",
    name: "김시완",
    stauts: "정상",
  },
  {
    key: 9,
    id: "US00009",
    email: "시은45@naver.com",
    name: "이시은",
    stauts: "영구정지",
  },
  {
    key: 10,
    id: "US00010",
    email: "시원43@naver.com",
    name: "박시원",
    stauts: "정상",
  },
  {
    key: 11,
    id: "US00011",
    email: "다빈9@naver.com",
    name: "장다빈",
    stauts: "정상",
  },
  {
    key: 12,
    id: "US00012",
    email: "다윤69@naver.com",
    name: "박다윤",
    stauts: "정상",
  },
  {
    key: 13,
    id: "US00013",
    email: "민수24@naver.com",
    name: "박민수",
    stauts: "영구정지",
  },
  {
    key: 14,
    id: "US00014",
    email: "태양73@naver.com",
    name: "김태양",
    stauts: "영구정지",
  },
  {
    key: 15,
    id: "US00015",
    email: "시안61@naver.com",
    name: "김시안",
    stauts: "영구정지",
  },
  {
    key: 16,
    id: "US00016",
    email: "도하64@naver.com",
    name: "이도하",
    stauts: "정상",
  },
  {
    key: 17,
    id: "US00017",
    email: "민기91@naver.com",
    name: "손민기",
    stauts: "정상",
  },
  {
    key: 18,
    id: "US00018",
    email: "예진13@naver.com",
    name: "박예진",
    stauts: "영구정지",
  },
  {
    key: 19,
    id: "US00019",
    email: "하람40@naver.com",
    name: "박하람",
    stauts: "정상",
  },
  {
    key: 20,
    id: "US00020",
    email: "단우32@naver.com",
    name: "손단우",
    stauts: "7일정지",
  },
  {
    key: 21,
    id: "US00021",
    email: "지운3@naver.com",
    name: "손지운",
    stauts: "영구정지",
  },
  {
    key: 22,
    id: "US00022",
    email: "은서21@naver.com",
    name: "박은서",
    stauts: "정상",
  },
  {
    key: 23,
    id: "US00023",
    email: "소윤7@naver.com",
    name: "손소윤",
    stauts: "정상",
  },
  {
    key: 24,
    id: "US00024",
    email: "시완98@naver.com",
    name: "장시완",
    stauts: "7일정지",
  },
  {
    key: 25,
    id: "US00025",
    email: "시윤9@naver.com",
    name: "이시윤",
    stauts: "정상",
  },
  {
    key: 26,
    id: "US00026",
    email: "서빈46@naver.com",
    name: "박서빈",
    stauts: "정상",
  },
  {
    key: 27,
    id: "US00027",
    email: "하진19@naver.com",
    name: "김하진",
    stauts: "영구정지",
  },
  {
    key: 28,
    id: "US00028",
    email: "하은53@naver.com",
    name: "양하은",
    stauts: "정상",
  },
  {
    key: 29,
    id: "US00029",
    email: "은우52@naver.com",
    name: "이은우",
    stauts: "3일정지",
  },
  {
    key: 30,
    id: "US00030",
    email: "우진31@naver.com",
    name: "박우진",
    stauts: "영구정지",
  },
  {
    key: 31,
    id: "US00031",
    email: "지연93@naver.com",
    name: "장지연",
    stauts: "영구정지",
  },
  {
    key: 32,
    id: "US00032",
    email: "준서20@naver.com",
    name: "양준서",
    stauts: "정상",
  },
  {
    key: 33,
    id: "US00033",
    email: "재인98@naver.com",
    name: "박재인",
    stauts: "정상",
  },
  {
    key: 34,
    id: "US00034",
    email: "연우84@naver.com",
    name: "김연우",
    stauts: "3일정지",
  },
  {
    key: 35,
    id: "US00035",
    email: "지민18@naver.com",
    name: "손지민",
    stauts: "정상",
  },
  {
    key: 36,
    id: "US00036",
    email: "찬우81@naver.com",
    name: "이찬우",
    stauts: "정상",
  },
  {
    key: 37,
    id: "US00037",
    email: "세현29@naver.com",
    name: "이세현",
    stauts: "영구정지",
  },
  {
    key: 38,
    id: "US00038",
    email: "다온30@naver.com",
    name: "김다온",
    stauts: "정상",
  },
  {
    key: 39,
    id: "US00039",
    email: "주은80@naver.com",
    name: "이주은",
    stauts: "3일정지",
  },
  {
    key: 40,
    id: "US00040",
    email: "민서56@naver.com",
    name: "이민서",
    stauts: "영구정지",
  },
  {
    key: 41,
    id: "US00041",
    email: "정후93@naver.com",
    name: "양정후",
    stauts: "정상",
  },
  {
    key: 42,
    id: "US00042",
    email: "주원89@naver.com",
    name: "장주원",
    stauts: "정상",
  },
  {
    key: 43,
    id: "US00043",
    email: "준성17@naver.com",
    name: "손준성",
    stauts: "7일정지",
  },
  {
    key: 44,
    id: "US00044",
    email: "승원70@naver.com",
    name: "김승원",
    stauts: "3일정지",
  },
  {
    key: 45,
    id: "US00045",
    email: "준영73@naver.com",
    name: "양준영",
    stauts: "영구정지",
  },
  {
    key: 46,
    id: "US00046",
    email: "선우60@naver.com",
    name: "손선우",
    stauts: "영구정지",
  },
  {
    key: 47,
    id: "US00047",
    email: "하은1@naver.com",
    name: "김하은",
    stauts: "정상",
  },
  {
    key: 48,
    id: "US00048",
    email: "지윤55@naver.com",
    name: "박지윤",
    stauts: "정상",
  },
  {
    key: 49,
    id: "US00049",
    email: "아윤15@naver.com",
    name: "장아윤",
    stauts: "정상",
  },
  {
    key: 50,
    id: "US00050",
    email: "서은45@naver.com",
    name: "손서은",
    stauts: "영구정지",
  },
  {
    key: 51,
    id: "US00051",
    email: "태양13@naver.com",
    name: "이태양",
    stauts: "3일정지",
  },
  {
    key: 52,
    id: "US00052",
    email: "서연45@naver.com",
    name: "손서연",
    stauts: "영구정지",
  },
  {
    key: 53,
    id: "US00053",
    email: "나영42@naver.com",
    name: "박나영",
    stauts: "영구정지",
  },
  {
    key: 54,
    id: "US00054",
    email: "서후35@naver.com",
    name: "박서후",
    stauts: "정상",
  },
  {
    key: 55,
    id: "US00055",
    email: "가현93@naver.com",
    name: "이가현",
    stauts: "영구정지",
  },
  {
    key: 56,
    id: "US00056",
    email: "은우27@naver.com",
    name: "손은우",
    stauts: "정상",
  },
  {
    key: 57,
    id: "US00057",
    email: "하율49@naver.com",
    name: "박하율",
    stauts: "정상",
  },
  {
    key: 58,
    id: "US00058",
    email: "이현13@naver.com",
    name: "양이현",
    stauts: "정상",
  },
  {
    key: 59,
    id: "US00059",
    email: "성현38@naver.com",
    name: "양성현",
    stauts: "3일정지",
  },
  {
    key: 60,
    id: "US00060",
    email: "수현6@naver.com",
    name: "김수현",
    stauts: "3일정지",
  },
  {
    key: 61,
    id: "US00061",
    email: "예림88@naver.com",
    name: "김예림",
    stauts: "정상",
  },
  {
    key: 62,
    id: "US00062",
    email: "나현15@naver.com",
    name: "박나현",
    stauts: "7일정지",
  },
  {
    key: 63,
    id: "US00063",
    email: "수인57@naver.com",
    name: "이수인",
    stauts: "3일정지",
  },
  {
    key: 64,
    id: "US00064",
    email: "승훈80@naver.com",
    name: "박승훈",
    stauts: "정상",
  },
  {
    key: 65,
    id: "US00065",
    email: "태훈7@naver.com",
    name: "이태훈",
    stauts: "7일정지",
  },
  {
    key: 66,
    id: "US00066",
    email: "준호37@naver.com",
    name: "김준호",
    stauts: "영구정지",
  },
  {
    key: 67,
    id: "US00067",
    email: "승원19@naver.com",
    name: "박승원",
    stauts: "정상",
  },
  {
    key: 68,
    id: "US00068",
    email: "예솔88@naver.com",
    name: "양예솔",
    stauts: "3일정지",
  },
  {
    key: 69,
    id: "US00069",
    email: "민주78@naver.com",
    name: "장민주",
    stauts: "정상",
  },
  {
    key: 70,
    id: "US00070",
    email: "서준21@naver.com",
    name: "이서준",
    stauts: "정상",
  },
  {
    key: 71,
    id: "US00071",
    email: "수정59@naver.com",
    name: "이수정",
    stauts: "영구정지",
  },
  {
    key: 72,
    id: "US00072",
    email: "다현5@naver.com",
    name: "박다현",
    stauts: "정상",
  },
  {
    key: 73,
    id: "US00073",
    email: "유민80@naver.com",
    name: "양유민",
    stauts: "정상",
  },
  {
    key: 74,
    id: "US00074",
    email: "지후20@naver.com",
    name: "손지후",
    stauts: "영구정지",
  },
  {
    key: 75,
    id: "US00075",
    email: "지완96@naver.com",
    name: "이지완",
    stauts: "정상",
  },
  {
    key: 76,
    id: "US00076",
    email: "채원59@naver.com",
    name: "손채원",
    stauts: "정상",
  },
  {
    key: 77,
    id: "US00077",
    email: "예림20@naver.com",
    name: "장예림",
    stauts: "정상",
  },
  {
    key: 78,
    id: "US00078",
    email: "은솔52@naver.com",
    name: "손은솔",
    stauts: "정상",
  },
  {
    key: 79,
    id: "US00079",
    email: "지운10@naver.com",
    name: "양지운",
    stauts: "정상",
  },
  {
    key: 80,
    id: "US00080",
    email: "연호54@naver.com",
    name: "김연호",
    stauts: "정상",
  },
  {
    key: 81,
    id: "US00081",
    email: "도연36@naver.com",
    name: "손도연",
    stauts: "영구정지",
  },
  {
    key: 82,
    id: "US00082",
    email: "주원71@naver.com",
    name: "김주원",
    stauts: "정상",
  },
  {
    key: 83,
    id: "US00083",
    email: "서아98@naver.com",
    name: "김서아",
    stauts: "정상",
  },
  {
    key: 84,
    id: "US00084",
    email: "재윤80@naver.com",
    name: "양재윤",
    stauts: "정상",
  },
  {
    key: 85,
    id: "US00085",
    email: "수연67@naver.com",
    name: "김수연",
    stauts: "정상",
  },
  {
    key: 86,
    id: "US00086",
    email: "유리62@naver.com",
    name: "장유리",
    stauts: "정상",
  },
  {
    key: 87,
    id: "US00087",
    email: "주하56@naver.com",
    name: "이주하",
    stauts: "정상",
  },
  {
    key: 88,
    id: "US00088",
    email: "재하39@naver.com",
    name: "손재하",
    stauts: "정상",
  },
  {
    key: 89,
    id: "US00089",
    email: "예빈50@naver.com",
    name: "박예빈",
    stauts: "영구정지",
  },
  {
    key: 90,
    id: "US00090",
    email: "지후84@naver.com",
    name: "김지후",
    stauts: "정상",
  },
  {
    key: 91,
    id: "US00091",
    email: "재영8@naver.com",
    name: "이재영",
    stauts: "정상",
  },
  {
    key: 92,
    id: "US00092",
    email: "지환47@naver.com",
    name: "이지환",
    stauts: "7일정지",
  },
  {
    key: 93,
    id: "US00093",
    email: "다온66@naver.com",
    name: "박다온",
    stauts: "정상",
  },
  {
    key: 94,
    id: "US00094",
    email: "수진88@naver.com",
    name: "손수진",
    stauts: "3일정지",
  },
  {
    key: 95,
    id: "US00095",
    email: "유하26@naver.com",
    name: "손유하",
    stauts: "정상",
  },
  {
    key: 96,
    id: "US00096",
    email: "가현19@naver.com",
    name: "장가현",
    stauts: "3일정지",
  },
  {
    key: 97,
    id: "US00097",
    email: "은우43@naver.com",
    name: "박은우",
    stauts: "정상",
  },
  {
    key: 98,
    id: "US00098",
    email: "가영70@naver.com",
    name: "손가영",
    stauts: "영구정지",
  },
  {
    key: 99,
    id: "US00099",
    email: "도윤64@naver.com",
    name: "손도윤",
    stauts: "영구정지",
  },
  {
    key: 100,
    id: "US00100",
    email: "다윤22@naver.com",
    name: "장다윤",
    stauts: "영구정지",
  },
];

export { DATA };