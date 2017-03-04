/* Hot reload of these styles are a bit flaky */

const styles = `
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: #F8F9FA;
  font-size: 16px;
}
`

const Head = () => (
  <head>
    <title>npm janitor</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
  </head>
)

module.exports = {styles, Head}
