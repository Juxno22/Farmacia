import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { testConnection } from './src/api/backend';

export default function App() {
    useEffect(() => {
        testConnection(); // Prueba la conexión al iniciar la app
    }, []);

    return (
        <View>
            <Text>¡Aplicación de farmacia funcionando!</Text>
        </View>
    );
}
