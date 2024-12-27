// Mock Users Data
export const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", password: "password123" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "User",  password: "password123" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "User",  password: "password123" },
  ];
  
  // Mock Customers Data
  export const customers = [
    { id: 1, name: "Acme Corp", email: "contact@acme.com", phone: "123-456-7890", image_url: "https://via.placeholder.com/150" },
    { id: 2, name: "Globex Inc", email: "support@globex.com", phone: "987-654-3210", image_url: "https://via.placeholder.com/150" },
  ];
  
  
  // Mock Revenue Data
  export const revenue = [
    { month: "Jan", revenue: 5000 },
    { month: "Feb", revenue: 4500 },
  ];
  
  
  // Mock Invoices Data
  export const invoices = [
    { id: 101, customer_id: 1, amount: 1500, status: "Paid", date: "2024-01-15" },
    { id: 102, customer_id: 2, amount: 2000, status: "Pending", date: "2024-02-10" },
  ];
  
  
  // Export All Data
  export default { users, customers, revenue, invoices };
  