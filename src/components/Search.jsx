import { useState } from "react";
import "../components/Search";

function Search({ products, onSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  //وظيفته تعمل عند كل حرف يكتبه المستخدم في مربع البحث
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); //

    if (query.trim() === "") {
      //تقوم بعرض جميع المنتجات اذا المستحدم مسح النص كله

      onSearchResults(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
      onSearchResults(filtered);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="ابحث عن اسم المنتج..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      {/*شرط أن الزر لا يظهر الا اذا المستخدم كتب داحل الحقل شيء اذا كان فارغ مايظهر له الزر*/}
      {searchQuery && (
        <button
          className="search-clear"
          onClick={() => {
            setSearchQuery("");
            onSearchResults(products);
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default Search;
