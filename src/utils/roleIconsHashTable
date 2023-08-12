import {
    programmingIcon,
    marketingIcon,
    architectureIcon,
    financialIcon,
    handshakeIcon,
    healthIcon,
    carIcon,
    houseIcon,
    gearsIcon
} from "../assets/images/Icons";

export default function iconsHashTable() {
    
    const icons =  [
        {role: 'informatica', icon: programmingIcon },
        {role: 'marketing', icon: marketingIcon },
        {role: 'arquitetura', icon: architectureIcon },
        {role: 'financeiro', icon: financialIcon },
        {role: 'consultoria', icon: handshakeIcon },
        {role: 'saude', icon: healthIcon },
        {role: 'veiculo', icon: carIcon },
        {role: 'domestico', icon: houseIcon },
        {role: 'outros', icon: gearsIcon }
    ];
    
    const hashTable = {};
    for (let i = 0; i < icons.length; i++) {
        const item = icons[i];
        hashTable[item.role] = item.icon;
    }
    
    return hashTable;
}