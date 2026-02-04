import StatCard from "./StatCard";
import ProductPage from "../pages/ProductPage";
import OrderPage from "../pages/OrderPage";
import OrderStatus from "./OrderStatus";
import UserListCards from "../pages/UserListCards";

function MainContent({
  activePage,
  products,
  setProducts,
  orders,
  setOrders,
  data,
  setData,
}) {
  const totalProduct =
    products && Array.isArray(products) ? products.length : 0;
  const totalOrder = orders && Array.isArray(orders) ? orders.length : 0;

  //حساب مجموع دخل الطلبات  الاجمالي
  const totalOrdersRevenue =
    orders && Array.isArray(orders)
      ? orders.reduce((sum, order) => {
          const total = order.total
            ? Number(order.total.replace(/\s*ر\.س\s*$/, ""))
            : 0;
          return sum + total;
        }, 0)
      : 0;

  if (activePage.trim() === "المنتجات") {
    return (
      <main className="main">
        <ProductPage products={products} setProducts={setProducts} />
      </main>
    );
  }

  if (activePage.trim() === "الطلبات") {
    return (
      <main className="main">
        <OrderPage orders={orders} setOrders={setOrders} />
      </main>
    );
  }

  if (activePage.trim() === "العملاء") {
    return (
      <main className="main">
        <UserListCards products={data} setProducts={setData} />
      </main>
    );
  }

  return (
    <main className="maincontent">
      <div className="cardgrid">
        <StatCard title="   إجمالي المنتجات🛒" value={totalProduct} />
        <StatCard title="  إجمالي الطلبات📦" value={totalOrder} />

        <StatCard
          title="إجمالي 💰 الطلبات"
          value={`${totalOrdersRevenue.toFixed(2)}ر.س  `}
        />
      </div>

      <OrderStatus Orders={orders} />
    </main>
  );
}
export default MainContent;
