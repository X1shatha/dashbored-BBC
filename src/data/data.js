import { data } from "react-router-dom";


export const productData= [
  {
    id: 1,
    name: "كيبورد ميكانيكي",
    price: 240,
    stock: 30,
    category: "أجهزة",
    active: true,
  },
  {
    id: 2,

    name: "ماوس جيمنج لاسلكي",
    price: 180,
    stock: 45,
    category: "أجهزة",
    active: true,
  },
  {
    id: 3,

    name: "سماعة محيطية",
    price: 350,
    stock: 15,
    category: "أجهزة",
    active: false,
  },
  {
    id: 4,

    name: "شاشة 24 بوصة 144 هرتز",
    price: 850,
    stock: 10,
    category: "شاشات",
    active:true,
  },
  {
    id: 5,

    name: "طاولة قيمنق احترافية",
    price: 1200,
    stock: 5,
    category: "أثاث",
    active:false,
  },
  {
    id: 6,

    name: "كرسي مريح للظهر",
    price: 750,
    stock: 12,
    category: "أثاث",
    active:true,
  },
  {
    id: 7,

    name: "لوحة ماوس (Mousepad) كبير",
    price: 60,
    stock: 100,
    category: "إكسسوارات",
    active:true,
  },
  {
    id: 8,

    name: "ميكروفون تسجيل احترافي",
    price: 420,
    stock: 8,
    category: "أجهزة",
    active:false,
  },
  {
    id: 9,

    name: "إضاءة ليد (RGB) ذكية",
    price: 130,
    stock: 50,
    category: "إكسسوارات",
    active:true,
  },
  {
    id: 10,

    name: "كاميرا ويب بدقة 4K",
    price: 550,
    stock: 20,
    category: "أجهزة",
    active: false,
  },
  {
    id: 11,

    name: "هاردسك خارجي 1 تيرابايت",
    price: 290,
    stock: 25,
    category: "تخزين",
    active: true,
  }
];

export const OrderData = [
  {
    id: 1,
    product_id: "101",
    name: "شذى ابراهيم",
    date: "2026-05-10",
    total: "1360 ر.س",
    status: "مكتمل",
    items: [
      { name: "كيبورد ميكانيكي", stock: 1, price: 460 },
      { name: "ماوس جيمنج لاسلكي", stock: 1, price: 900 }
    ]
  },
  {
    id: 2,
    product_id: "105",
    name: "أحمد العتيبي",
    date: "2026-05-12",
    total: "1500 ر.س",
    status: "قيد التنفيذ",
    items: [
      { name: "سماعة محيطية P5", stock: 1, price: 1200 },
     
    ]
  },
  {
    id: 3,
    product_id: "110",
    name: "سارة محمد",
    date: "2026-05-15",
    total: "2650 ر.س",
    status: "قيد التنفيذ",
    items: [
      { name: "شاشة 2K 144Hz", stock: 1, price: 2500 },
     
    ]
  },
  {
    id: 4,
    product_id: "112",
    name: "خالد بن وليد",
    date: "2026-05-18",
    total: "450 ر.س",
    status:"تم توصيل",
    items: [
      { name: "ماوس باد كبير", stock: 1, price: 150 },
      { name: "منظف شاشة برو", stock: 2, price: 150 }
    ]
  },
  {
    id: 5,
    product_id: "120",
    name: "ليلى القحطاني",
    date: "2026-05-20",
    total: "1150 ر.س",
    status: "تم توصيل",
    items: [
      { name: "كرسي قيمنق مريح", stock: 1, price: 850 },
      
    ]
  },
  {
    id: 6,
    product_id: "125",
    name: "فهد الشمري",
    date: "2026-05-22",
    total: "400 ر.س",
    status: "قيد التنفيذ",
    items: [
      { name: "ميكروفون مكتبي", stoke: 1, price: 300 },
      { name: "فلتر صوت (Pop Filter)", stock: 1, price: 100 }
    ]
  },
  {
    id: 7,
    product_id: "130",
    name: "نورة السبيعي",
    date: "2026-05-25",
    total: "1250 ر.س",
    status:"تم توصيل",
    items: [
      { name: "طاولة قيمنق L-shape", stock: 1, price: 1100 },
      { name: "حامل أكواب", stoke: 1, price: 150 }
    ]
  },
  {
    id: 8,
    product_id: "135",
    name: "ياسر الدوسري",
    date: "2026-05-28",
    total: "420 ر.س",
    status: "مكتمل",
    items: [
      { name: "إضاءة LED ذكية", stock: 2, price: 110 },
     
    ]
  },
  {
    id: 9,
    product_id: "140",
    name: "هند علي",
    date: "2026-06-01",
    total: "470 ر.س",
    status: "قيد التنفيذ",
    items: [
      { name: "هاردسك خارجي 1TB", stock: 1, price: 400 },
      { name: "محفظة هاردسك", stock: 1, price: 70 }
    ]
  },
  {
    id: 10,
    product_id: "145",
    name: "سلطان الراشد",
    date: "2026-06-05",
    total: "1950 ر.س",
    status: "تم توصيل",
    items: [
      { name: "بطاقة رسوميات GTX", stock: 1, price: 1800 },
     
    ]
  }
];
export default data;