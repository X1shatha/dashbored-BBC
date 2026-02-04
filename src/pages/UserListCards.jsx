import React, { useState } from "react";

const UserListCards = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "  وليد بن طلال ",
      email: "amal.hussain@email.com",
      region: "الرياض",
    },
    { id: 2, name: " امل تميم", email: "sara.ali@email.com", region: "جدة" },
    {
      id: 3,
      name: " سعد ابراهيم",
      email: "mohammed.saleh@email.com",
      region: "الباحة",
    },
    {
      id: 4,
      name: " محمد مبارك  ",
      email: "noura.ahmed@email.com",
      region: "الخرج",
    },
  ]);

  // حالة التعديل
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", region: "" });

  // وظيفة الحذف
  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  // وظيفة بدء التعديل (تعبئة الفورم بالبيانات القديمة)
  const startEdit = (user) => {
    setEditId(user.id);
    setFormData({ name: user.name, email: user.email, region: user.region });
  };

  // وظيفة حفظ التعديل
  const handleSave = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, ...formData } : item,
    );
    setData(updatedData);
    setEditId(null);
  };

  // وظيفة إضافة عميل جديد
const handleAdd = () => {
  if (formData.name && formData.email) {  
    const newUser = {
      id: data.length > 0 ? data[data.length - 1].id + 1 : 1, 
      ...formData
    };
    setData([...data, newUser]);
    setFormData({ name: "", email: "", region: "" }); // تفريغ الحقول بعد الإضافة
  } else {
    alert("الرجاء إدخال الاسم والإيميل على الأقل");
  }
};

  return (

    <div>
      <div className="add-usear-row">
      <div className="add-user-form" >
  <h3>إضافة عميل جديد</h3>
  <input 
    placeholder="الاسم" 
    value={formData.name} 
    className="usear-input"   onChange={(e) => setFormData({...formData, name: e.target.value})} 
  />
  <input 
    placeholder="الإيميل" 
    value={formData.email} 
     className="usear-input"  onChange={(e) => setFormData({...formData, email: e.target.value})} 
  />
  <input 
    placeholder="المنطقة" 
    value={formData.region} 
    className="usear-input"   onChange={(e) => setFormData({...formData, region: e.target.value})} 
  />
  <button  className="btn-add" onClick={handleAdd} >إضافة</button>
</div></div>

      <div className="cards-wrapper">
        {data.map((user) => (
          <div key={user.id} className="card-container">
            {editId === user.id ? (
              <div className="cardvalue">
                <input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  value={formData.region}
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                />

                <div className="card-buttons">
                  <button
                    className="savcard"
                    onClick={() => handleSave(user.id)}
                  >
                    حفظ
                  </button>
                  <button
                    className="cancelcard "
                    onClick={() => setEditId(null)}
                  >
                    إلغاء
                  </button>
                </div>
              </div>
            ) : (
              // واجهة العرض العادية
              <div>
                <span>ID: {user.id}</span>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.region}</p>
                <div className="card-buttons">
                  <button className="editcard" onClick={() => startEdit(user)}>
                    تعديل
                  </button>
                  <button
                    className="deletcard"
                    onClick={() => handleDelete(user.id)}
                  >
                    حذف
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default UserListCards;
