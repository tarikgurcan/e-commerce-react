const express = require("express")
const compression = require("compression")

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
 
if (process.env.NODE_ENV === 'production') {
  app.use(compression);
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, 'client/build')));
 
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
 
app.listen(port, error => {
  if (error) throw error;
  console.log('Server is running on port ' + port);
});