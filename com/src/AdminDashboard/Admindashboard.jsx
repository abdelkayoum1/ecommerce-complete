
import React, { useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaArrowUp,
} from "react-icons/fa";
import "../AdminDashboard/admindashboar.css";
export default function AdminDashboard({Getuserlength,user,dataproducts,getdataproducts,getorderlength,Getorderlength}) {
console.log(getorderlength)

const totalorder=getorderlength.filter(val=>val.isPaid ===true).reduce((total,order)=>total+order.totalOrderPrice,0)
console.log(totalorder)
  useEffect(()=>{
    getdataproducts();
    Getorderlength()
    Getuserlength();
  },[])


  const topproduct= Object.values(getorderlength.filter((val)=>val.isPaid).reduce((acc,order)=>
  {
    order.cartItems.map((item)=>{

      const id=item.product._id;

      if(!id)return;
      if(!acc[id]){
        acc[id]={
          id,name:item.product.title,
          image:item.product.imageCover,
          sold:0
        }
      }
      acc[id].sold+=item.count
    });
    return acc;
  },{} )).sort((a,b)=>b.sold-a.sold).slice(0,5)
// 1. بدّل هذه المعلومات حسب متجرك
const stats = [
  { title: "إجمالي المنتجات", value: dataproducts.length, icon: <FaBox />, color: "blue" },
  { title: "إجمالي الطلبات", value: getorderlength.length, icon: <FaShoppingCart />, color: "green" },
  { title: "عدد المستخدمين", value: user.length, icon: <FaUsers />, color: "orange" },
  { title: "إجمالي المبيعات", value: `${totalorder} دج `, icon: <FaMoneyBillWave />, color: "purple" },
];

// 2. بيانات الرسم البياني التجريبية
const salesData = [
  { day: "السبت", sales: 12000 },
  { day: "الأحد", sales: 18000 },
  { day: "الإثنين", sales: 9000 },
  { day: "الثلاثاء", sales: 25000 },
  { day: "الأربعاء", sales: 20000 },
  { day: "الخميس", sales: 32000 },
  { day: "الجمعة", sales: 27000 },
];

// 3. آخر الطلبات
const recentOrders = [
  { id: 1, customer: "أحمد علي", total: "4,500 دج", status: "قيد المعالجة" },
  { id: 2, customer: "محمد أمين", total: "9,500 دج", status: "تم الشحن" },
  { id: 3, customer: "سارة خالد", total: "2,500 دج", status: "تم التوصيل" },
  { id: 4, customer: "فاطمة كريم", total: "7,300 دج", status: "قيد المعالجة" },
];

// 4. أكثر المنتجات مبيعًا
const topProducts = [
  { name: "iPhone 15", sold: 25, price: "180,000 دج", image: "https://placehold.co/60x60?text=Phone" },
  { name: "Dell Inspiron", sold: 18, price: "95,000 دج", image: "https://placehold.co/60x60?text=Dell" },
  { name: "Nike Air", sold: 12, price: "12,000 دج", image: "https://placehold.co/60x60?text=Nike" },
];

// 5. تنبيهات المخزون
const stockAlerts = [
  { name: "شامبو 400 مل", stock: 2 },
  { name: "زيت الشعر", stock: 3 },
  { name: "أرز 5 كغ", stock: 1 },
];


function StatCard({ item }) {
  return (
    <div className="ad-stat-card">
      <div className={`ad-stat-icon ${item.color}`}>
        {item.icon}
      </div>

      <div>
        <p>{item.title}</p>
        <h3>{item.value}</h3>
        <span><FaArrowUp /> إحصائية المتجر</span>
      </div>
    </div>
  );
}


  return (
    <div className="admin-dashboard" dir="rtl">
      <div className="ad-page-heading">
        <div>
          <h2>لوحة التحكم</h2>
          <p>مرحبًا بك في لوحة إدارة المتجر</p>
        </div>

        <span className="ad-date">
          نظرة عامة على المتجر
        </span>
      </div>

      {/* Statistics */}
      <section className="ad-stats-grid">
        {stats.map((item) => (
          <StatCard key={item.title} item={item} />
        ))}
      </section>

      {/* Sales chart */}
      <section className="ad-panel ad-chart-panel">
        <div className="ad-panel-heading">
          <h3>المبيعات خلال آخر 7 أيام</h3>
          <span>المبيعات بالدينار الجزائري</span>
        </div>

        <div className="ad-chart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity={0.02} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip
                formatter={(value) => [
                  `${Number(value).toLocaleString("fr-DZ")} دج`,
                  "المبيعات",
                ]}
              />

              <Area
                type="monotone"
                dataKey="sales"
                stroke="#2563eb"
                strokeWidth={3}
                fill="url(#salesGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <div className="ad-bottom-grid">
        {/* Recent orders */}
        <section className="ad-panel">
          <div className="ad-panel-heading">
            <h3>آخر الطلبات</h3>
            <span>{getorderlength.length} طلبات</span>
          </div>

          <div className="ad-table-wrapper">
            <table className="ad-table">
              <thead>
                <tr>
                  <th>رقم الطلب</th>
                  <th>العميل</th>
                  <th>المبلغ</th>
                  <th>حالة التوصيل</th>
                                    <th>حالة الدفع</th>

                </tr>
              </thead>

              <tbody>
                {getorderlength.map((order,index) => (
                  <tr key={order.id}>
                    <td>#{index+1}</td>
                    <td>{order.user.name}</td>
                    <td>{order.totalOrderPrice?.toLocaleString("fr-DZ")   }دج   </td>
                    <td>
                      <span
                        className={`ad-status ${
                          order.isDelivered?"تم":'لم يتم'
               }
                        }`}
                      >
                                {order.isDelivered ? "تم التوصيل" : "لم يتم التوصيل"}

                      </span>
                    </td>


                     <td>
                      <span
                        className={`ad-status ${
                          order.isPaid?"تم":'لم يتم'
               }
                        }`}
                      >
                                {order.isPaid ? "تم " : "لم يتم "}

                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Best selling products */}
        <section className="ad-panel">
          <div className="ad-panel-heading">
            <h3>أكثر المنتجات مبيعًا</h3>
          </div>

          <div className="ad-product-list">
            {topproduct.map((product) => (
              <div className="ad-product-row" key={product.name}>
                <img src={`http://localhost:5000/images/${product.image}`}  />

                <div className="ad-product-info">
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>

                <span className="ad-sold">
                  {product.sold} مبيعات
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Stock alerts */}
        <section className="ad-panel">
          <div className="ad-panel-heading">
            <h3>تنبيهات المخزون</h3>
            <FaExclamationTriangle color="#ea580c" />
          </div>

          <div className="ad-alert-list">
            {stockAlerts.map((product) => (
              <div className="ad-alert-row" key={product.name}>
                <div className="ad-alert-icon">
                  <FaExclamationTriangle />
                </div>

                <div>
                  <strong>{product.name}</strong>
                  <p>الكمية المتبقية: {product.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
