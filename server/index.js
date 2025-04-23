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
app.use(express.json()); 


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


// הוספת משתמש עם גיל
app.post('/addUser', (req, res) => {
  const db = admin.firestore();
  const usersRef = db.collection('users');
  const { age } = req.body;

  // בדיקת תקינות הגיל
  if (typeof age !== 'number' || age <= 0) {
    return res.status(400).send("הגיל חייב להיות מספר חיובי");
  }

  usersRef.add({ age })
    .then(() => {
      res.status(200).send("הגיל נוסף בהצלחה");
    })
    .catch(error => {
      console.error("שגיאה בהוספת גיל:", error);
      res.status(500).send("שגיאה בהוספת גיל");
    });
});


app.listen(port, () => {
  console.log(`שרת רץ על פורט ${port}`);
});