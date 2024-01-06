export const menuData = [
    { id: 1, item: 'Cat', isSelected: false },
    { id: 2, item: 'Dog', isSelected: false },
    { id: 3, item: 'Cow', isSelected: false },
    { id: 4, item: 'Got', isSelected: false },
    { id: 5, item: 'Bus', isSelected: false },
    { id: 6, item: 'Car', isSelected: false },
];

export const contextMenu = {
    isToggle: false,
    position: {
        x: 0,
        y: 0,
    }
};

export const contextMenuButtons = [
    {
        text: "Cut",
        icon: "✂️",
        onClick: (data) => handleCut(data),
        isSpacer: false,
    },
    {
        text: "Copy",
        icon: "💼",
        onClick: (data) => handleCopy(data),
        isSpacer: false,
    },
    {
        text: "Paste",
        icon: "📋",
        onClick: (data) => handlePaste(data),
        isSpacer: false,
    },
    {
        text: "",
        icon: "",
        onClick: () => null,
        isSpacer: true,
    },
    {
        text: "Delete",
        icon: "❌",
        onClick: (data) => handleDelete(data),
        isSpacer: false,
    },
]

const handleCut = (data) => { alert(`Cut --> ${data.item}`) }
const handleCopy = (data) => { alert(`Copy --> ${data.item}`) }
const handlePaste = (data) => { alert(`Paste --> ${data.item}`) }
const handleDelete = (data) => { alert(`Delete --> ${data.item}`) }