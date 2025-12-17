import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <h2>Message Cards</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to the React assignment."
      />

      <MessageCard
        title="Reminder"
        message="Submit your project before the deadline."
      />

      <MessageCard
        title="Success"
        message="You have successfully learned props in React."
      />

      <MessageCard
        title="Motivation"
        message="Practice daily to master React."
      />
    </div>
  );
}

export default App;
