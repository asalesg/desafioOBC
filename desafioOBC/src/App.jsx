import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="app">
      <Profile
        avatar="https://github.com/asalesg.png"
        name="André Sales"
        bio="Full-stack javascript and C# developer at Softtek."
        email="asalesg@gmail.com"
        phone="+5511198576432"
        githubUrl="https://github.com/asalesg"
        linkedinUrl="https://www.linkedin.com/in/asalesg/"
        twitterUrl="https://x.com/asalesg"
      />
    </div>
  )
}