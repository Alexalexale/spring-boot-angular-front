const express = require('express'),
    path = require('path');

const app = express();


app.use(express.static('./dist/spring-boot-angular-front'));

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, '/dist/spring-boot-angular-front/index.html'));

});

app.listen(process.env.PORT || 8080, () => {
    console.log('Server started');
})