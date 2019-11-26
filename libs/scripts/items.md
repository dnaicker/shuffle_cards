# --------
# blueprint generic overview task list of composing assets with core game logic

# -------- 
# import sprites: cards
# import sprites: ui buttons
# import sprites: background playing card board 
# import sprites: background main menu 

# -------- 
# interactactive buttons:
# main menu
# 		button: start game
# 		button: options: turn sound on/off
# 		button: high score
#		button: help: how to play
# 		button: exit
# slider: place bet
# button: confirm bet 
# button: confirm order of cards
# button: continue game
# button: quit game
# button: options
# toggle: sound on/off
# button: options exit
# button: save score
# button: help
# button: help exit
# button: exit

# -------- 
# animation
# rotate cards to flip around 
# ease cards to new position for shuffling - speed
# menu buttons pressed

# -------- 
# ui
# text: amount earned 
# text: amount lost
# text: current amount
# text: betting amount set 

# -------- 
# pages:
# page: main menu
# page: help
# page: options
# page highscores: - display list of high scores
# page: initiate betting
# page game: 	- display random order of 4 cards
# 				- flip cards and reorientate them

# -------- 
# core logic:
# transition: transition to pages
# transition: reposition cards transition arc
# interaction: drag and drop cards to positions
# data: store order of positions
# logic: match new positions
# data: track users earnings for winnings
# data: track users earnings for loses
# data: track users current bet

# -------- 
# sequence
# page 1 - main menu
# page 2 - game
# page 2 - continue game
# page 2 - game over
# prototype - shuffling cards
# prototype - drag and drop cards
# prototype - slider for setting bet
