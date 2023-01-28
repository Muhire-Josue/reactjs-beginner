import { Comment } from "./Comment";
const { faker } = require("@faker-js/faker");
function App() {
  return (
    <>
      <Comment avatar={faker.image.avatar()} />
    </>
  );
}

export default App;
