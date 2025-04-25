import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard, Invoices, Products, Customers, Reports, Settings } from "./pages";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-blue-900 text-white flex flex-col">
          <div className="p-4 text-2xl font-bold">BillWise</div>
          <nav className="flex-1 px-4 space-y-2">
            <Link className="block py-2 hover:bg-blue-700 rounded px-2" to="/">Dashboard</Link>
            <Link className="block py-2 hover:bg-blue-700 rounded px-2" to="/invoices">Invoices</Link>
            <Link className="block py-2 hover:bg-blue-700 rounded px-2" to="/products">Products</Link>
            <Link className="block py-2 hover:bg-blue-700 rounded px-2" to="/customers">Customers</Link>
            <Link className="block py-2 hover:bg-blue-700 rounded px-2" to="/reports">Reports</Link>
            <Link className="block py-2 hover:bg-blue-700 rounded px-2" to="/settings">Settings</Link>
          </nav>
          <div className="p-4 border-t border-blue-800 text-sm text-center">Plan: Trial</div>
        </aside>

        <main className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
