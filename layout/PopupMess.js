import React from "react";
 
const PopupMess = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
      <style jsx>{`
      .popup-box {
        position: fixed;
        background: #00000050;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
      }
       
      .box {
        position: relative;
        width: 70%;
        margin: 0 auto;
        height: auto;
        max-height: 70vh;
        margin-top: calc(100vh - 85vh - 20px);
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        border: 1px solid #999;
        overflow: auto;
      }
       
      .close-icon {
        content: 'x';
        cursor: pointer;
        position: fixed;
        right: calc(15% - 30px);
        top: calc(100vh - 85vh - 33px);
        background: #ededed;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        line-height: 15px;
        text-align: center;
        border: 1px solid #999;
        font-size: 20px;
      }
      `}</style>
    </div>
  );
};
 
export default PopupMess;