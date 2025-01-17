// dateUtils.js
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    
    const isSameYear = now.getFullYear() === date.getFullYear();
    const isSameDay = now.toDateString() === date.toDateString();  // 같은 날 체크
    
    if (isSameDay) {
      // 같은 날이면 시간:분 형식
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    } else if (now.getTime() - date.getTime() < 1000 * 60 * 60 * 24 * 2) {
      // 어제이면 "어제"로 표시
      return "어제";
    } else if (isSameYear) {
      // 같은 년도일 때 "월 일" 형식
      const month = date.getMonth() + 1; // 월은 0부터 시작
      const day = date.getDate();
      return `${month}월 ${day}일`;
    } else {
      // 년도가 다르면 "년 월 일" 형식
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 월은 0부터 시작
      const day = date.getDate();
      return `${year}년 ${month}월 ${day}일`;
    }
  };

  export const formatDay = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 월은 0부터 시작
      const day = date.getDate();
      return `${year}년 ${month}월 ${day}일`;
  };
  
  export const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`; // 시간:분만 표시
  };
  
  // 날짜가 다르면 true 반환
  export const isNewDate = (prevDate, currentDate) => {
    const prev = new Date(prevDate).toDateString();
    const current = new Date(currentDate).toDateString();
    return prev !== current;
  };
  