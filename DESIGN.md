Minesweeper Design

Data structures:
```
GameConfig
{
  height: 10,
  mines: 5,
  width: 10,
}

InternalGameState
{
  board: [
    {
      id: 0,
      x: 0,
      y: 0,
      value: -1 (mine), 0 (no mines nearby), # of surrounding mines
    }
    ...
    {
      id: 11,
      x: 1,
      y: 1,
      value: -1 (mine), 0 (no mines nearby), # of surrounding mines
    },
    ...
  ],
  flagged: [ // flagged board square ids
    10, ...
  ],
  questioned: [ // questioned board square ids
    5, ...
  ],
  revealed: [ // revealed board square ids
    11, ...
  ],
  version: 1,
}

ExternalGameState
{
  board: [ // this returns a partial board state of board squares that have already been revealed
    {
      id: 11,
      x: 1,
      y: 1,
      value: -1 (mine), 0 (no mines nearby), # of surrounding mines
    }
  ],
  flagged: [ // flagged board square ids
    10
  ],
  questioned: [ // questioned board square ids
    5, ...
  ],
  version: 1,
}
```

APIs

POST /game ({ height, mines, width })
- creates a new game with set parameters
- returns to the client a guid which is then used in /game/{gameId} URL
{
  gameId: 'aaaa-aaaa-aaaa-aaaa',
}

GET /game/{gameId}
- returns the game configuration and current board state that has been already revealed
- if starting a new game it will return 
{
  gameConfig: GameConfig,
  gameState: ExternalGameState,
}

POST /game/{gameId}/reveal ({ version, x, y })
- version is passed to ensure client and server are in sync
- attempt to make a selection at the x and y coordinate
- returns the new board state
{
  gameState: ExternalGameState,
}

POST /game/{gameId}/flag ({ version, x, y })
- version is passed to ensure client and server are in sync
- places a flag at the location
- returns the new board state
{
  gameState: ExternalGameState,
}

POST /game/{gameId}/question ({ version, x, y })
- version is passed to ensure client and server are in sync
- places a question mark at the location
- returns the new board state
{
  gameState: ExternalGameState,
}
