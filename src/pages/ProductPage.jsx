import { useState, useEffect } from "react";
import Search from "../components/Search";

function ProductPage({ products, setProducts }) {
  if (!Array.isArray(products)) {
    console.warn("ProductPage: `products` prop is not an array:", products);
  }
  const productList = Array.isArray(products) ? products : [];
  const [displayedProducts, setDisplayedProducts] = useState(productList);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    active: "true",
  });

  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    setDisplayedProducts(productList);
  }, [productList]);

  //تمنع التحديث التلقائي

  const handleSubmit = (e) => {
    e.preventDefault();
    //يحفظ التعديلات و الاضافة المدخله
    if (editingProduct) {
      setProducts(
        productList.map((item) =>
          item.id === editingProduct.id
            ? {
                ...item,
                name: formData.name,
                category: formData.category,
                price: Number(formData.price),
                stock: Number(formData.stock),
                active: Number(formData.stock) > 0,
              }
            : item,
        ),
      );
    } else {
      const newProduct = {
        id:
          productList.length > 0
            ? Math.max(...productList.map((p) => p.id)) + 1
            : 1,

        name: formData.name,
        category: formData.category,
        price: Number(formData.price),
        stock: Number(formData.stock),
        active: Number(formData.stock) > 0,
      };
      const updatedProducts = [...productList, newProduct];
      setProducts(updatedProducts);
    }

    CloseForm();
  };

  //وظيفة حذف المنتج
  const deleteproduct = (id) => {
    const updatedProducts = productList.filter((itm) => itm.id !== id);
    setProducts(updatedProducts);
    setDisplayedProducts(updatedProducts);
  };
  //وظيفة تغير المدخل
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //وظيفة فتح النموذج اضافة منتج
  const openAddForm = () => {
    setEditingProduct(null);
    setFormData({ name: "", category: "", price: "", stock: "", active: "" });
    setShowForm(true);
  };
  //وظيفة تتحكم في نتائج البحث
  const handleSearchResults = (filtered) => {
    setDisplayedProducts(filtered);
  };

  //وظيفة فتح نموذج التعديل لمنتج موجود
  const openEditForm = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      active: product.active,
    });

    setShowForm(true);
  };

  //وظيفة لاغلاق النموذج

  const CloseForm = () => {
    setEditingProduct(null);
    setFormData({ name: "", category: "", price: "", stock: "", active: "" });
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <div className="model-overlay">
          <div className="model">
            <h3>{editingProduct ? "  تعديل منتج " : " اضافة منتج جديد"}</h3>

            <form onSubmit={handleSubmit}>
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
                <label>الفئة</label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="from-group">
                <label>السعر</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="from-group">
                <label>الكمية</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="from-group">
                <label>الحالة</label>

                <select
                  name="active"
                  value={formData.active}
                  onChange={handleInputChange}
                  required
                >
                  <option value=""> حدد الحالة</option>
                  <option value="true">نشط</option>
                  <option value="false">غير نشط</option>
                </select>
              </div>

              <div className="button-group">
                <button type="submit" className="btn-add">
                  {editingProduct ? "تحديث" : "إضافة"}
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

      <div className="page-hearder">
        <h2>المنتجات</h2>
        <button onClick={openAddForm} className="btn-add">
          إضافة المنتج +
        </button>
      </div>
      {/*   استدعاء ملف البحث */}
      <Search products={productList} onSearchResults={handleSearchResults} />

      <table className="table">
        <thead>
          <tr>
            <th> المنتج</th>
            <th>السعر</th>
            <th>الكمية</th>
            <th>الفئة</th>
            <th>الحالة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {/*عرض قائمة المنتجات */}
          {displayedProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>{item.category}</td>
              <td>
                <span className={item.active ? "badgeactive" : "badgeinactive"}>
                  {item.active ? "متاح" : "نفذ"}
                </span>
              </td>
              <td>
                <button className="edit-btn" onClick={() => openEditForm(item)}>
                  تـعـديـل
                </button>
                <button
                  className="delet-btn"
                  onClick={() => deleteproduct(item.id)}
                >
                  حـذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductPage;
