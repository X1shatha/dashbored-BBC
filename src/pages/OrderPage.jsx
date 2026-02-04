import { useState } from "react";

function OrderPage({ orders, setOrders }) {
  const [Orders, setorders] = useState(orders);

  if (!Array.isArray(Orders)) {
    console.warn("ProductPage: `products` prop is not an array:", Orders);
  }
  //وظيفة يتاكد من ان البيانات القادمة من طلبات هي المصفوفة فعلا
  const OrderList = Array.isArray(Orders) ? Orders : [];

  //حساب اجمالي الطلبات
  const calculateTotal = (items) => {
    return items.reduce((sum, item) => {
      const qty = item.stock ?? item.stok ?? item.stoke ?? 0;
      const price = Number(item.price) || 0;
      return sum + price * qty;
    }, 0);
  };

  const [showForm, setShowForm] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [formData, setFormData] = useState({
    product_id: "",
    name: "",
    date: "",
    total: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // وظيفة يحدث بيانات الطلب المختار  او يضيف طلب جديد برقم تسلسلي جديد

    const totalWithCurrency = `${formData.total} ر.س`;

    if (editingOrder) {
      const updatedOrders = OrderList.map((item) =>
        item.id === editingOrder.id
          ? {
              ...item,
              product_id: formData.product_id,
              name: formData.name,
              date: formData.date,
              total: totalWithCurrency,
              status: formData.status,
            }
          : item,
      );
      setOrders(updatedOrders);
    } else {
      const newOrder = {
        id:
          OrderList.length > 0
            ? Math.max(...OrderList.map((o) => o.id)) + 1
            : 1,
        product_id: formData.product_id,
        name: formData.name,
        date: formData.date,
        total: totalWithCurrency,
        status: formData.status,
      };
      setOrders([...OrderList, newOrder]);
    }

    CloseForm();
  };

  //وظيفة حذف المنتج

  const deleteOrders = (id) => {
    const updatedOrders = OrderList.filter((itm) => itm.id !== id);
    setOrders(updatedOrders);
  };
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //وظيفة فتح النموذج اضافة منتج

  const openAddForm = () => {
    setEditingOrder(null);
    setFormData({ product_id: "", name: "", date: "", total: "", status: "" });
    setShowForm(true);
  };

  //وظيفة فتح نموذج التعديل لمنتج موجود

  const openEditForm = (Orders) => {
    // Extract numeric value from total (remove " ر.س")
    const totalValue = Orders.total
      ? Orders.total.replace(/\s*ر\.س\s*$/, "")
      : "";

    setEditingOrder(Orders);
    setFormData({
      product_id: Orders.product_id,
      name: Orders.name,
      date: Orders.date,
      total: totalValue,
      status: Orders.status,
    });

    setShowForm(true);
  };

  //وظيفة لاغلاق النموذج

  const CloseForm = () => {
    setEditingOrder(null);
    setFormData({ product_id: "", name: "", date: "", total: "", status: "" });
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <div className="model-overlay">
          <div className="model">
            <h3>{editingOrder ? "  تعديل طلب " : " اضافة طلب جديد"}</h3>

            <form onSubmit={handleSubmit}>
              <div className="from-group">
                <label>رقم الطلب </label>
                <input
                  type="text"
                  name="product_id"
                  value={formData.product_id}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="from-group">
                <label>الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="from-group">
                <label>التاريخ</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="from-group">
                <label>الاجمالي</label>
                <input
                  type="number"
                  name="total"
                  value={formData.total}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="from-group">
                <label>الحالة</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  required
                >
                  <option value=""> حدد الحالة</option>
                  <option value="تم توصيل">تم توصيل</option>
                  <option value="قيد التنفيذ"> قيد التنفيذ</option>
                  <option value="مكتمل"> مكتمل</option>
                </select>
              </div>

              <div className="button-group">
                <button type="submit" className="btn-add">
                  {editingOrder ? "تحديث" : "إضافة"}
                </button>

                <button
                  type="button"
                  className="btn-cancel"
                  onClick={CloseForm}
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div>
        <div className="pageheader">
          <h2
            style={{
              fontSize: "4.2rem",
              fontWeight: "550",
              color: "#a855f7",
              marginBottom: "40px",
            }}
          >
            الطلبات
          </h2>
          <button onClick={openAddForm} className="btnadd">
            إضافة طلب +
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>الرقم</th>
              <th>رقم الطلب</th>
              <th>الإسم </th>

              <th>الإجمالي </th>
              <th>التاريخ</th>
              <th> الحالة</th>
              <th> الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {/*وظيفة عرض البيانات  من المصفوفة طلبات وانشاء سطر في الجدول لكل طلب */}
            {Orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product_id}</td>
                <td>{order.name}</td>

                <td>{order.total}</td>
                <td>{order.date}</td>

                <td>
                  {/*ي  يغير لون الحالة بتاء على القيمة*/}
                  <span
                    className={
                      order.status === "مكتمل"
                        ? "badge-activ"
                        : order.status === "قيد التنفيذ"
                          ? "badge-pending"
                          : order.status === "تم توصيل"
                            ? "badge-inactive"
                            : ""
                    }
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditForm(order)}
                  >
                    تـعـديـل
                  </button>
                  <button
                    className="delet-btn"
                    onClick={() => deleteOrders(order.id)}
                  >
                    حـذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrderPage;
