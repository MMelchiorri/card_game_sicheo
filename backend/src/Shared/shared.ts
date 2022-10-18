
["♠", "♣", "♥", "♦"];

export const function_red_black = (
  card: string,
  card_on_board: string[]
): boolean => {
  var index = card_on_board.length - 1;
  if (
    (card[card.length-1]=== "♦" || card[card.length-1] === "♥") &&
    (card_on_board[index][card_on_board[index].length-1] === "♠" ||
    card_on_board[index][card_on_board[index].length-1] === "♣")
  ) {
    return true;
  } else if (
    (card[card.length-1] === "♠" || card[card.length-1] === "♣") &&
    (card_on_board[index][card_on_board[index].length-1] == "♥" ||
    card_on_board[index][card_on_board[index].length-1] == "♦")
  ) {
    return true;
  } else return false;
};


