const BASE_URL = 'http://192.168.1.67:4000';

export const testConnection = async () => {
    try {
        const response = await fetch(`${BASE_URL}/`);
        const data = await response.text();
        console.log('Respuesta del servidor:', data);
    } catch (error) {
        console.error('Error de conexión:', error);
    }
};


//conexion con login
/**
export const login = async (nombre, contraseña) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, contraseña })
    });
    return response.json();
};
 */