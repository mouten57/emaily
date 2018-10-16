const express = require('express');
//not returning anything, so I don't need to assign it to anything
//just requiring that it gets executed
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
