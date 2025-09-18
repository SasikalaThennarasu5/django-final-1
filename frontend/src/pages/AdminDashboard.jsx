import React from 'react'

/*
  Lightweight admin demo as a front-end page.
  In real apps, admin is handled by backend admin or a dedicated admin UI.
*/

export default function AdminDashboard(){
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Admin Dashboard (Demo)</h2>
      <p className="mb-4">Use Django admin (http://127.0.0.1:8000/admin/) to add categories and products.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Manage Products</h3>
          <p className="text-sm text-gray-600">Go to Django admin to create/edit/delete products.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Orders</h3>
          <p className="text-sm text-gray-600">Orders created from frontend will appear in Django admin and database.</p>
        </div>
      </div>
    </div>
  )
}
