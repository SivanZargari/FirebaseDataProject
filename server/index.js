// הוספת נתונים מ-Firebase
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// הגדרת חיבור עם Firebase
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// לאפשר גישה מ-CORS
app.use(cors());

// שליפת נתונים מ-Firebase
app.get('/users', (req, res) => {
  const db = admin.firestore();
  const usersRef = db.collection('users');
  
  usersRef.get()
    .then(snapshot => {
      const users = snapshot.docs.map(doc => doc.data());
      res.json(users);
    })
    .catch(error => {
      res.status(500).send('שגיאה בשליפת הנתונים');
    });
});

app.listen(port, () => {
  console.log(`שרת רץ על פורט ${port}`);
});
