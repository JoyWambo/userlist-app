import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/api";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setListOfUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Table Header */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-lg font-semibold text-gray-800">User List</h2>
      </div>

      {/* Scrollable Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 font-medium text-gray-600">Username</th>
              <th className="px-6 py-3 font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 font-medium text-gray-600">Company</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {listOfUser.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-indigo-50 transition-colors"
              >
                <td className="px-6 py-4 text-gray-900 font-medium">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-gray-600">@{user.username}</td>
                <td className="px-6 py-4 text-indigo-600 hover:underline">
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className="px-6 py-4 text-gray-600">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer (Optional: Row Count) */}
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500">
        Showing {listOfUser.length} users
      </div>
    </div>
  );
};

export default UserList;
