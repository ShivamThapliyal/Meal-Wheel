import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Context } from "../../context/Context";
import "./verify.css";
import axios from "axios";

function Verify() {
  const [searchparams, setsearchparams] = useSearchParams();
  const success = searchparams.get("success");
  const orderId = searchparams.get("orderId");
  const { url } = useContext(Context);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    verifyPayment();
  }, []);
  console.log(success, orderId);
  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
}

export default Verify;
