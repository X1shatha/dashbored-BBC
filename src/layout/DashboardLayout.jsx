import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"; 
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { productData, OrderData } from "../data/data";
import { useNavigate } from "react-router-dom";

function DashboardLayout() {
  const [activePage, setActivePage] = useState("dashboard"); 
  const [showSidebar, setShowSidebar] = useState(true);

const navigate =useNavigate();
  const [products, setProducts] = useState(() => {
    
try {
// حفظ بيانات في المتصفح واستعادة المنتجات و الطلبات من خلال لوكل ستورج
      const savedproducts = localStorage.getItem("products");
      if (!savedproducts) return productData;

      //تحويل من نص الى كود string
      const parsed = JSON.parse(savedproducts);
      //وظيفة معالجة الاخطاء التحقق اذا البيانات الموجودة ليست مصفوفة
      if (!Array.isArray(parsed)) {
        console.warn("DashboardLayout: localStorage 'products' is not an array — resetting to default");
        localStorage.removeItem("products");
        return productData;
      }
      return parsed;
      //معالجة اخطاء البيانات 
    } catch (err) {
      console.error("DashboardLayout: error parsing localStorage 'products' — clearing key", err);
      localStorage.removeItem("products");
      return productData;
    }
  });

  const [orders, setOrders] = useState(() => {
    try {
      const savedorders = localStorage.getItem("orders");
      if (!savedorders) return OrderData;
      const parsed = JSON.parse(savedorders);
      if (!Array.isArray(parsed)) {
        console.warn("DashboardLayout: localStorage 'orders' is not an array — resetting to default");
        localStorage.removeItem("orders");
        return OrderData;
      }
      return parsed;
    } catch (err) {
      console.error("DashboardLayout: error parsing localStorage 'orders' — clearing key", err);
      localStorage.removeItem("orders");
      return OrderData;
    }
  });


//الحفظ التلقائي عند تعديل او حذف او اضافة 
  useEffect(() => {
    if (Array.isArray(products)) {
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      console.warn("DashboardLayout: products state is invalid (not an array). Resetting to default productData.");
      setProducts(productData);
    }
  }, [products]);

  useEffect(() => {
    if (Array.isArray(orders)) {
      localStorage.setItem("orders", JSON.stringify(orders));
    } else {
      console.warn("DashboardLayout: orders state is invalid (not an array). Resetting to default OrderData.");
      setOrders(OrderData);
    }
  }, [orders]);


//وظيفة تعكس حالة القائمة 
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }; 

  //وظيفة نقل المستخدم الى صفحة تسجيل دخول 

  const handleLogout=()=>{
    navigate("/Login")
  }

  return (

    <div className="layout">

 <Header className="toggle-btn" onToggleSidebar={toggleSidebar}>
        
          {showSidebar ?"hide sidebar" : "show sidebar"}
        </Header>


<div className="main-container">

      {showSidebar && (
        <Sidebar activePage={activePage} onPageChange={setActivePage} onLogout={handleLogout} />
        
      )}
      

      <main className="main-content">
        <MainContent activePage={activePage} products={products} setProducts={setProducts} orders={orders} setOrders={setOrders} />
      </main>
      
    </div>
    </div>
  );
} 

export default DashboardLayout;