import React from "react";
import { OrderData } from "../data/data";

function OrderStatus({ Orders }) {
  const total = Orders.length;
  const badgeactiv = Orders.filter((Order) => Order.status === "مكتمل").length;
  const badgepending = Orders.filter(
    (Order) => Order.status === "قيد التنفيذ",
  ).length;
  const badgeinactive = Orders.filter(
    (Order) => Order.status === "تم توصيل",
  ).length;

  return (
    <div className="order-status">
      <h3> حالة الطلب 📝</h3>
      <div className="status-item">
        <span> مكتمل</span>
        <span>{badgeactiv}</span>
        <div className="progress-par">
          <div
            className="progress-fall-green"
            style={{ width: `${(badgeactiv / total) * 100}%` }}
          ></div>
        </div>
        <div className="status-item">
          <span> قيد التنفيذ</span>
          <span>{badgepending}</span>
          <div className="progress-par">
            <div
              className="progress-fall-yellow"
              style={{ width: `${(badgepending / total) * 100}%` }}
            ></div>
          </div>
          <div className="status-item">
            <span> تم توصيل</span>
            <span>{badgeinactive}</span>
            <div className="progress-par">
              <div
                className="progress-fall-red"
                style={{ width: `${(badgeinactive / total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderStatus;
