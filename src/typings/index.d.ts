type Points = number;
type Username = string;
type UserID = string;
type ServerID = string;
type Color = "White" | "Red" | "Purple" | "Yellow";


declare class User {
  id: UserID;
  username: Username;
}

declare class Player {
  id: UserID;
  points: Points;
  username: Username;
  color: Color;
}

declare class Lobby {
  players: Player;
}