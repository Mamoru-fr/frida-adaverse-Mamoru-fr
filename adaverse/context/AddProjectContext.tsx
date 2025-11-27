'use client'
import React, {createContext, ReactNode, useState} from 'react';

type AddProjectContextType = {
    isModalOpen: boolean;
    toggleModal: () => void;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProjectContext = createContext<AddProjectContextType | undefined>(undefined);

type AddProjectProviderProps = {
    children: ReactNode;
}

export function AddProjectProvider({children}: AddProjectProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <AddProjectContext.Provider value={{isModalOpen, toggleModal, setIsModalOpen}}>
            {children}
        </AddProjectContext.Provider>
    )
}

export function useAddProject() {
    const context = React.useContext(AddProjectContext);
    if (context === undefined) {
        throw new Error('useAddProject must be used within an AddProjectProvider');
    }
    return context;
}