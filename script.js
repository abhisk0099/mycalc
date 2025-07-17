:root {
  --bg: #ffffff;
  --text: #000000;
  --button: #f0f0f0;
  --accent: #4caf50;
}

.dark {
  --bg: #121212;
  --text: #ffffff;
  --button: #2c2c2c;
  --accent: #81c784;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  text-align: center;
}

.calculator {
  background: var(--button);
  padding: 10px;
  border-radius: 10px;
}

#display {
  width: 100%;
  height: 60px;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: right;
  padding: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 15px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background: var(--accent);
  color: white;
  cursor: pointer;
  transition: background 0.2s;
}

button:hover {
  background: #388e3c;
}

#theme-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
}

#history {
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 10px;
  max-height: 100px;
  overflow-y: auto;
}
