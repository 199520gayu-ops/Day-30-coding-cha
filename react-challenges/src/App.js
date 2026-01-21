import { useState } from "react";

function App() {
  /* Counter */
  const [count, setCount] = useState(0);

  /* BMI */
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  /* Quiz */
  const [quizResult, setQuizResult] = useState("");

  /* Blog */
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  /* Ecommerce */
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 }
  ];
  const [cart, setCart] = useState([]);

  /* Functions */
  const calculateBMI = () => {
    const result = weight / (height * height);
    setBmi(result.toFixed(2));
  };

  const addComment = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React JS Single Page Challenges</h1>

      {/* Counter */}
      <hr />
      <h2>1️⃣ Counter App</h2>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>

      {/* BMI */}
      <hr />
      <h2>2️⃣ BMI Calculator</h2>
      <input
        placeholder="Weight (kg)"
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        placeholder="Height (m)"
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <p>Your BMI: {bmi}</p>}

      {/* Quiz */}
      <hr />
      <h2>3️⃣ Quiz</h2>
      <p>React is developed by?</p>
      <button onClick={() => setQuizResult("✅ Correct!")}>Facebook</button>
      <button onClick={() => setQuizResult("❌ Wrong!")}>Google</button>
      {quizResult && <h3>{quizResult}</h3>}

      {/* Blog */}
      <hr />
      <h2>4️⃣ Blog with Comments</h2>
      <p>This is a blog post.</p>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment"
      />
      <button onClick={addComment}>Add</button>
      <ul>
        {comments.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      {/* Ecommerce */}
      <hr />
      <h2>5️⃣ Ecommerce Page</h2>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - ₹{p.price}
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}

      <h3>🛒 Cart</h3>
      {cart.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
