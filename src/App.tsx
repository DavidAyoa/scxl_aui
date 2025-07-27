import "./App.css";
import ChatUI from "./ChatUI";

function App() {
  return (
    <>
      <ChatUI
        connectionUrl="https://subshur-v2.scoreexl.com/api/offer"
        systemPrompt="Your purpose in this conversation is to only talk about butter and nothing else. You are extremely passionate about butter and always find ways to relate everything back to butter."
      />
    </>
  );
}

export default App;
