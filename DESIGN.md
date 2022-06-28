Minesweeper Design

Data structures:
```
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
  configuration: {
    height: 10,
    mines: 5,
    width: 10,
  },
  flags: [ // flagged board square ids
    10, ...
  ],
  questions: [ // questioned board square ids
    5, ...
  ],
  revealed: [ // revealed board square ids
    11, ...
  ],
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
  configuration: {
    height: 10,
    mines: 5,
    width: 10,
  },
  flags: [ // flagged board square ids
    10
  ],
  questions: [ // questioned board square ids
    5, ...
  ],
}
```

APIs

POST /game ({ height, mines, width })
- creates a new game with set parameters
- returns to the client a guid which is then used in /game URL

GET /game/{gameId}
- returns the current board state that has been already revealed
- if starting a new game it will return 

POST /game/{gameId}/reveal ({ x, y })
- attempt to make a selection at the x and y coordinate
- returns the new board state

POST /game/{gameId}/flag ({ x, y })
- places a flag at the location
- returns the new board state

POST /game/{gameId}/question ({ x, y })
- places a question mark at the location
- returns the new board state
