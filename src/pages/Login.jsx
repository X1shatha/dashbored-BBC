import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  //وظيفة تعمل عند ضغط على  زر دخول
  const handelLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      setIsLoggedIn(true);
      //اذا تطابقت البيانات يوجهه الى لوحة التحكم
      navigate("/dashboard");
    } else {
      setError("الرقم السري خطأ");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>تـسـجـيـل دخـول </h2>

        <form onSubmit={handelLogin}>
          {error && <p className="error-massage">{error}</p>}

          <div className="form-group">
            <label>البريد الاكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@gmail.com"
            />
          </div>
          <div className="form-group">
            <label>كلمة المرور </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="1234"
            />
          </div>
          <button type="submit" className="login-btn">
            {" "}
            دخول{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
