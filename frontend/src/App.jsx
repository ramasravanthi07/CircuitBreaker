import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <header className="header">
        <div>
          <h1>CircuitBreaker</h1>
          <p>Cloud-Native E-Commerce Resilience Dashboard</p>
        </div>
        <div className="status-badge">? System Healthy</div>
      </header>

      <section className="summary">
        <div className="card">
          <h3>Services</h3>
          <p className="number">3</p>
          <span>Microservices monitored</span>
        </div>

        <div className="card">
          <h3>Circuit Breakers</h3>
          <p className="number">3</p>
          <span>Currently protected</span>
        </div>

        <div className="card">
          <h3>Open Circuits</h3>
          <p className="number">1</p>
          <span>Service experiencing failures</span>
        </div>

        <div className="card">
          <h3>Fallback</h3>
          <p className="number">Active</p>
          <span>Cached response available</span>
        </div>
      </section>

      <section className="services">
        <h2>Microservice Health</h2>

        <div className="service-list">
          <div className="service">
            <div>
              <h3>Product Service</h3>
              <p>Product information and catalog</p>
            </div>
            <span className="closed">CLOSED</span>
          </div>

          <div className="service">
            <div>
              <h3>Inventory Service</h3>
              <p>Stock availability and inventory</p>
            </div>
            <span className="closed">CLOSED</span>
          </div>

          <div className="service">
            <div>
              <h3>Recommendation Service</h3>
              <p>Personalized product recommendations</p>
            </div>
            <span className="open">OPEN</span>
          </div>
        </div>
      </section>

      <section className="circuit-section">
        <h2>Circuit Breaker State</h2>

        <div className="circuit-card">
          <div>
            <h3>Recommendation Service</h3>
            <p>Requests are currently being redirected to the fallback response.</p>
          </div>

          <div className="state">
            <span className="state-dot"></span>
            OPEN
          </div>
        </div>
      </section>

      <section className="fallback">
        <h2>Fallback Response</h2>
        <p>Recommendation Service is temporarily unavailable.</p>
        <button>View Top Sellers</button>
      </section>
    </div>
  );
}

export default App;
