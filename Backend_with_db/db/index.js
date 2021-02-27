const mongoose = require("mongoose");

const db_url = process.env.DB_URL || `mongodb://localhost:27017/sample_db`;

// connection code
mongoose.connect(
  db_url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err, link) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`DB Connect Success...`);
      // console.log(link);
    }
  }
);
