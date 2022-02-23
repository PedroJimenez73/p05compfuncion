import React, {useState} from 'react'
import Table from './components/Table';

function App() {
    const vendorsData = [
        { id: 1, nombre: 'Gas Natural', cif: 'A12345678' },
        { id: 2, nombre: 'Iberdrola', cif: 'A87654321' },
        { id: 3, nombre: 'Jazztel', cif: 'B12345678' },
        { id: 4, nombre: 'BBVA', cif: 'C12345678' },
    ]

    const [vendors, setVendor] = useState(vendorsData);

    const handleDeleteVendor = (id) => {
        const updateVendors = vendors.filter(elem => elem.id !== id);
        setVendor(updateVendors);
    }

    return (
        <div className="container">
            <Table vendors={vendors} handleDeleteVendor={handleDeleteVendor}/>
        </div>
    );
}

export default App;
