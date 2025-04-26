import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <aside className="w-60 bg-blue-900 text-white flex flex-col justify-between">
          <div>
            <div className="p-4 text-2xl font-bold">BillWise</div>
            <nav className="flex flex-col p-2 space-y-4">
              <Link to="/" className="hover:bg-blue-700 p-2 rounded">Dashboard</Link>
              <Link to="/invoices" className="hover:bg-blue-700 p-2 rounded">Invoices</Link>
              <Link to="/products" className="hover:bg-blue-700 p-2 rounded">Products</Link>
              <Link to="/customers" className="hover:bg-blue-700 p-2 rounded">Customers</Link>
              <Link to="/reports" className="hover:bg-blue-700 p-2 rounded">Reports</Link>
              <Link to="/settings" className="hover:bg-blue-700 p-2 rounded">Settings</Link>
            </nav>
          </div>
          <div className="p-4 text-sm text-center border-t border-blue-700">Plan: Trial</div>
        </aside>
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-bold">Dashboard Page</h1>} />
            <Route path="/invoices" element={<h1 className="text-2xl font-bold">Invoices Page</h1>} />
            <Route path="/products" element={<h1 className="text-2xl font-bold">Products Page</h1>} />
            <Route path="/customers" element={<h1 className="text-2xl font-bold">Customers Page</h1>} />
            <Route path="/reports" element={<h1 className="text-2xl font-bold">Reports Page</h1>} />
            <Route path="/settings" element={<h1 className="text-2xl font-bold">Settings Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}