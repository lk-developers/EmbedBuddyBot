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

#### Basic usage
- Everything except `<title>` is optional.
- You need to provide the arguments in the same order as above, separated by the `|` character.  *(You can change this character)*.
- You can skip providing arguments using a `space`. ***(Check out the examples below)***

### Rich Command Syntax
`[PREFIX] ti~<value> | de~<value> | ch~<value>  | co~<value> | th~<value> | an~<value> | ai~<value> | al~<value>`

#### Keys explained
| Key|      Meaning     |
| :--| :----------------|
| ti | title            |
| de | description      |
| ch | channel name     |
| co | embed color      |
| th | thumbnail url    |
| an | author name      |
| ai | author image url |
| al | author link      |
| im | image url        |
| ft | footer text      |
| fi | footer img       |

#### Rich Command usage
- Rich commands allow you to send arguments in any order.
- It uses `key~value` pairs.
- Everything except `ti` is optional.
- You need to provide the arguments using `key~value` pairs, separated by the `|` character.  *(You can change this character)*.

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

5. Send an embed to a channel named example using rich commands.  
  `?embed ti~test | ch~example`

6. Send an embed to a channel named example with the color red using rich commands.  
  `?embed ti~test | ch~example | co~#ff0000`
  
  <a href="https://www.patreon.com/ipmanlk">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png">
  </a>
