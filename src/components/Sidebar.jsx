function Sidebar({ activePage, onPageChange, onLogout }) {
  const navItem = [
    { id: "لوحة التحكم ", label: " لوحة التحكم📊" },
    { id: "الطلبات", label: "الطلبات📥" },
    { id: "المنتجات ", label: "المنتجات🧾" },

    { id: "العملاء", label: "العملاء👥" },
  ];

  return (
    <div className="sidebar">
      <ul className="nav-list">
        {navItem.map((item) => (
          <li
            key={item.id}
            className={activePage === item.id ? "nav-item active" : "nav-item"}
            onClick={() => onPageChange(item.id)}
          >
            {item.label}
          </li>
        ))}
        <button className="menu-btn" onClick={onLogout}>
          {" "}
          خروج 🚪
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
