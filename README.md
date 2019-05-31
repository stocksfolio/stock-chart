# TradeDesk Stock Chart Microservice

TradeDesk's Stock Chart Microservice is the frontend component that shows users the stock prices of a specific company based on the day, month or year. [Click here to interact with a deployed version of this component.](https://stockfolio-chart.herokuapp.com "TradeDesk Stock Chart")

The component was built using React.js, Odometer.js, Express/Node, MongoDB (static data for development and demo purposes), and the microservice makes API queries to the /stock-chart API.

The stock chart component is optimized for page load time performance, taking the load time from 21.0s down to 0.4s:

Minification and compression (brotli & gzip) of static files reduced payload sizes and script parse time.
Fonts files are prioritized to serve WOFF2 format to browsers that support it with fallback for the majority of browsers. This resulted in 33%+ file-size reduction over other formats.
Text data is predisplayed with the font-display property prior to receiving the font payload to improve the perception of speed.
Achieved the score of 99 on Google's PageSpeed Insight Tool.
This component is hosted on an EC2 t2.micro instance. If the project timeline was extended with additional budget, I would've explored enabling https to take advantage of brotli compression, CDN/Redis caching, upgrading the instance, and a few other performant options I'll be happy to discuss more in detail.


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Related Microservices
[Buy Sell Module](https://github.com/FiveFinance/buysell_module "Buy Sell Module")
[Earnings](https://github.com/stocksfolio/earnings "Earnings")
[Analyst Ratings](https://github.com/stocksfolio/analyst-ratings "Analyst Ratings")
[All Modules Together](https://stockfolio-chart.herokuapp.com "All Modules Together")

## About TradeDesk
> TradeDesk is an stock trading platform. It is a project started in April 2019 meant to mimic the frontend behavior of other stock trading platforms. Upon completion of the frontend development, the team moved on to other individual projects.
