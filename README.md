# 👥 User Management System - API Consumption

## 🎯 Project Overview

This project fetches and displays a list of users from the JSONPlaceholder API using React Hooks and Axios.

## ✅ Checkpoint Requirements Met

- [x] Created project using create-react-app
- [x] Created UserList.js file in src folder
- [x] Installed axios
- [x] Used JSONPlaceholder API
- [x] Used axios inside useEffect to fetch data
- [x] Used useState to save data in listOfUser
- [x] Mapped listOfUser to display users
- [x] Styled the app beautifully

## 🚀 Installation & Setup

```bash
# Step 1: Create React app
npx create-react-app api-users-checkpoint

# Step 2: Navigate to folder
cd api-users-checkpoint

# Step 3: Install axios
npm install axios

# Step 4: Copy all files

# Step 5: Start the app
npm start
```

## 📚 Technologies Used

- **React 18** - JavaScript library
- **Axios** - HTTP client
- **useState Hook** - State management
- **useEffect Hook** - Side effects
- **JSONPlaceholder API** - Fake API for testing

## 🔑 Key Concepts

### useState Hook

```javascript
const [listOfUser, setListOfUser] = useState([]);
```

Stores the fetched user data

### useEffect Hook

```javascript
useEffect(() => {
  // Fetch data on component mount
}, []);
```

Fetches data when component loads

### Axios GET Request

```javascript
const response = await axios.get("API_URL");
setListOfUser(response.data);
```

### Map Function

```javascript
listOfUser.map((user) => <UserCard key={user.id} user={user} />);
```

## 📸 Features

- ✅ Fetches 10 users from API
- ✅ Loading state with spinner
- ✅ Error handling with retry
- ✅ Beautiful animated UI
- ✅ Responsive design
- ✅ User cards with details
- ✅ Hover effects

## 🎓 Learning Outcomes

- HTTP requests with Axios
- React Hooks (useState, useEffect)
- API consumption
- Async/await
- Error handling
- Loading states
- Array mapping
- Responsive design

Perfect for learning API consumption in React! 🚀
