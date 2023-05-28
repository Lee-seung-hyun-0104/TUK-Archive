import React from "react";
import Button from "./component/Button";
import FloatButton from "./component/floatButton";
import Linkicon from "./icon/Link";
import Editsomeicon from "./icon/Editsome";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      {/* 나중에 페이지 만들면 버튼만 넣으면 됨 */}
      <Button
        onClick={handleClick} // 페이지마다 기능 추가 예정
        title="버튼 "
        type="blueFill" //blueFill, blueStroke, greyStroke 있음
        size="buttonIconMedium" //buttonMedium, buttonSmall, buttonIconMedium, buttonIconSmall
        icon={<Editsomeicon />} // 매번 import해서 바꿔넣으면 됨
      />

      <FloatButton
        onClick={handleClick}
        type="greyFill" //blueFill, blueStroke, greyStroke 있음
        size="floatLarge" // floatLarge, floatMedium, floatbuttonSmall
        icon={<Editsomeicon />} // 매번 import해서 바꿔넣으면 됨
      />
    </div>
  );
}

export default App;
