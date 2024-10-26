// context/FamilyContext.js
import React, { createContext, useState } from 'react';

export const FamilyContext = createContext();

export const FamilyProvider = ({ children }) => {
    const [families, setFamilies] = useState([]);

    const addFamily = (family) => {
        setFamilies([...families, family]);
    };

    const addMember = (familyId, member) => {
        setFamilies(families.map(family =>
            family.id === familyId
                ? { ...family, members: [...family.members, { ...member, children: [] }] }
                : family
        ));
    };

    const updateFamily = (familyId, updatedFamily) => {
        setFamilies(families.map(family =>
            family.id === familyId ? updatedFamily : family
        ));
    };

    return (
        <FamilyContext.Provider value={{ families, addFamily, addMember, updateFamily }}>
            {children}
        </FamilyContext.Provider>
    );
};
