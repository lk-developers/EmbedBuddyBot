# EmbedBuddy
Simple discord bot for sending custom embeds to channels 


## Setting up
- Clone this repo using,
`git clone https://github.com/ipmanlk/EmbedBuddyBot.git`
- Run `npm install` to install all dependencies.
- Edit `config.json` file inside the config directory.
- Run `npm start` or `node server.js` to start the bot.

## Customization
- `config` directory contains all configuration files.

### Config files
- `config.json` - Basic options such as bot token & allowed roles.
- `commands.json` - Custom commands with their responses.
- `responses.json` - Responses used inside the code.  
  ***ex,*** *Response to send when user doesn't have the permission.*

## How to use
### Command Syntax
`[PREFIX] <title> | <description> | <channel name> | <color> | <thumbnail image url> | <author name> | <author image url> | <author link>`

### Basic usage
- Everything except `<title>` and `<description>` are optional.
- You need to provide the arguments in the same order as above, separated by the `|` character.  *(You can change this character)*.
- You can skip providing arguments using a `space`. ***(Check out the examples below)***

### Examples
***`?embed` is used as the prefix for examples.***

1. Send an embed to the current channel.  
`?embed Test | This is a test`
  
2. Send an embed to a channel named example.  
  `?embed Test | This is a test | example`
  
3. Send an embed to a channel named example with the color red.  
 `?embed Test | This is a test | example | #ff0000`  
  ***`(Use hex color values)`***

4. Send an embed to the current channel with the color red.  
  `?embed Test | This is a test | | #ff0000`  
  ***`(Space is used to skip the <channel name> argument)`***
