export interface ILobby {
  match_id: string;
  lobby_id: string;
  match_uuid: string;
  version: number;
  name: string;
  num_players: number;
  num_slots: number;
  server: string;
  players: any;
  average_rating: number;
  victory: number;
  pop: number;
  map_size: number;
  map_type: number;
}
