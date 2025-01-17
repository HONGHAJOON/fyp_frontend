import React, { useState } from "react";
import "../css/Alert.css";

const Alert = ({notifications, onClose}) => {

    return(
        <div className="alert-modal">
        <div className="alert-header">
            <h2>알림</h2>
            <button onClick={onClose} className="close-button">×</button>
        </div>
        <div className="alert-content">
            {notifications.length > 0 ? (
            notifications.map((notification, index) => (
                <div key={index} className="alert-item">
                <p className="alert-message">
                    {notification.message.length > 50
                    ? `${notification.message.slice(0, 50)}...`
                    : notification.message}
                </p>
                <p className="alert-info">
                    {notification.sender} - {notification.type}
                </p>
                </div>
            ))
            ) : (
            <p className="no-notifications">새 알림이 없습니다.</p>
            )}
        </div>
        </div>
    );
};
export default Alert;