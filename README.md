# Random Quote Generator

Random Quote Generator is web app using JS, HTML5, and CSS3. It creates randomly generated quotes using a fetch API request, and displays them to the user. The user can also share the quote to twitter. 

## Installation 

Clone this Project:

```bash
git clone 
```

## Usage

The quote generator currently filters only quotes with the "motivational" tag. To remove this tag, feel free to comment out the following line of code under script.js:

```javascript
apiQuotes = apiQuotes.filter(quote => quote.tag = "motivational");

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
