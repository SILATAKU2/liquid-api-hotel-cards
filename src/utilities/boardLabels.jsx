export const friendlyLabels = {
    roomonly: "Room Only",
    breakfast: "Breakfast",
    halfboard: "Half Board",
    fullboard: "Full Board",
    allinclusive: "All Inclusive",
};
        
export const formatBoardName = (board) => {
     if (!board) return ""; 
     return friendlyLabels[board.toLowerCase()] || board;
    };