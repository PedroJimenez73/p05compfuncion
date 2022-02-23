import React, {useState} from 'react'
import Modal from './Modal'

export default function Table(props) {

    const [showModal, setShowModal] = useState(false);
    const [idVendor, setIdVendor] = useState(null);

    const handleToggleModal = () => {
        setShowModal(prevShowModal => !prevShowModal); // Usa una función
        // callback que recibe el estado previo y devuelve el modificado.
    }

    const handleSelectDeleteVendor = (id) => {
        setIdVendor(id)
        handleToggleModal();
    }

    const handleConfirmDeleteVendor = () => {
        props.handleDeleteVendor(idVendor);
        handleToggleModal();
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>CIF</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.vendors.map((el) => {
                        return <tr key={el.id}>
                            <td>{el.nombre}</td>
                            <td>{el.cif}</td>
                            <td onClick={() => handleSelectDeleteVendor(el.id)}>Eliminar</td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
            {showModal && <Modal handleCancel={handleToggleModal} 
                                 handleConfirm={handleConfirmDeleteVendor}
                                 text={'¿Está seguro de eliminar el cliente?'} />}
        </>
    )
}
