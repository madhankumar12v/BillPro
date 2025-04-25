export function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded shadow">Total Sales: ₹0.00</div>
        <div className="p-4 bg-white rounded shadow">Invoices Created: 0</div>
        <div className="p-4 bg-white rounded shadow">Customers: 0</div>
        <div className="p-4 bg-white rounded shadow">Low Stock Alerts: 0</div>
      </div>
    </div>
  );
}
export function Invoices() { return <div><h1 className="text-xl font-bold">Invoices</h1></div>; }
export function Products() { return <div><h1 className="text-xl font-bold">Products</h1></div>; }
export function Customers() { return <div><h1 className="text-xl font-bold">Customers</h1></div>; }
export function Reports() { return <div><h1 className="text-xl font-bold">Reports</h1></div>; }
export function Settings() { return <div><h1 className="text-xl font-bold">Settings</h1></div>; }
