const api = (() => {
  const BASE_URL =
    "https://rest-api-cukuranaja-production.up.railway.app/api/v1";

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  function putAccessToken(token) {
    return localStorage.setItem("accessToken", token);
  }

  async function _fetchWithAuth(url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
  }

  async function register({ name, role, email, password }) {
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        role,
        email,
        password,
      }),
    });

    const responseJson = await response.json();
    const { status, message } = responseJson;
    if (status === "success") {
      alert("Register Success");
    } else {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { token },
    } = responseJson;

    return token;
  }

  async function getAllUsers() {
    const response = await fetch(`${BASE_URL}/users`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { users },
    } = responseJson;

    return users;
  }

  async function getOwnProfile() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function updateUser() {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { user },
    } = responseJson;

    return user;
  }

  async function createCustomer({
    customerName,
    gender,
    address,
    city,
    province,
    phone,
  }) {
    const response = await _fetchWithAuth(`${BASE_URL}/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName,
        gender,
        address,
        city,
        province,
        phone,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { customer },
    } = responseJson;

    return customer;
  }

  async function getAllCustomers() {
    const response = await _fetchWithAuth(`${BASE_URL}/customers`);

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { customers },
    } = responseJson;

    return customers;
  }

  async function getCustomerById(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/customers/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { detailCustomer },
    } = responseJson;

    return detailCustomer;
  }

  async function updateCustomer(customerId) {
    const response = await _fetchWithAuth(
      `${BASE_URL}/customers/${customerId}`
    );

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { customer },
    } = responseJson;

    return customer;
  }

  async function deleteCustomer(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/customers/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { customer },
    } = responseJson;

    return customer;
  }

  async function createBarber({
    barberName,
    gender,
    address,
    city,
    province,
    phone,
    experience,
    skills,
  }) {
    const response = await _fetchWithAuth(`${BASE_URL}/barbers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        barberName,
        gender,
        address,
        city,
        province,
        phone,
        experience,
        skills,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { barber },
    } = responseJson;

    return barber;
  }

  async function getAllBarbers() {
    const response = await _fetchWithAuth(`${BASE_URL}/barbers`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { barbers },
    } = responseJson;

    return barbers;
  }

  async function getBarberById(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/barbers/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { detailBarber },
    } = responseJson;

    return detailBarber;
  }

  async function updateBarber(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/barbers/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { barber },
    } = responseJson;

    return barber;
  }

  async function deleteBarber(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/barbers/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { barber },
    } = responseJson;

    return barber;
  }

  async function createService({ serviceName, description, price }) {
    const response = await _fetchWithAuth(`${BASE_URL}/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        serviceName,
        description,
        price,
      }),
    });

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { service },
    } = responseJson;

    return service;
  }

  async function getAllServices() {
    const response = await fetch(`${BASE_URL}/services`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { services },
    } = responseJson;

    return services;
  }

  async function getServiceById(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/services/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { detailService },
    } = responseJson;

    return detailService;
  }

  async function updateService(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/services/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { service },
    } = responseJson;

    return service;
  }

  async function deleteService(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/services/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { service },
    } = responseJson;

    return service;
  }

  async function createBooking({
    customer,
    barber,
    service,
    date,
    time,
    place,
    status,
  }) {
    const response = await _fetchWithAuth(`${BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer,
        barber,
        service,
        date,
        time,
        place,
        status,
      }),
    });

    const responseJson = await response.json();
    // Log response dari server
    console.log("Response dari server:", responseJson);

    const { success, message } = responseJson;

    if (success !== true) {
      throw new Error(message);
    }

    const {
      data: { newBooking },
    } = responseJson;

    return newBooking;
  }

  async function getAllBookings() {
    const response = await _fetchWithAuth(`${BASE_URL}/bookings`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { bookings },
    } = responseJson;

    return bookings;
  }

  async function getBookingById(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/bookings/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { booking },
    } = responseJson;

    return booking;
  }

  async function updateBooking(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/bookings/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { booking },
    } = responseJson;

    return booking;
  }

  async function deleteBooking(id) {
    const response = await _fetchWithAuth(`${BASE_URL}/bookings/${id}`);

    const responseJson = await response.json();

    const { status, message } = responseJson;

    if (status !== "success") {
      throw new Error(message);
    }

    const {
      data: { booking },
    } = responseJson;

    return booking;
  }

  return {
    getAccessToken,
    putAccessToken,
    register,
    login,
    getAllUsers,
    getOwnProfile,
    updateUser,
    getAllCustomers,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    createBarber,
    getAllBarbers,
    getBarberById,
    updateBarber,
    deleteBarber,
    createService,
    getAllServices,
    getServiceById,
    updateService,
    deleteService,
    createBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    deleteBooking,
  };
})();

export default api;
