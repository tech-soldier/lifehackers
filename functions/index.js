const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();


exports.onUserStatusChanged = functions.database.ref('/status/{uid}').onUpdate(
    async (change, context) => {
        const eventStatus = change.after.val()

        const userFirestoreRef = firestore.doc(`/profiles/${context.params.uid}`)

        const statusSnapshot = await change.after.ref.once('value')
        const status = statusSnapshot.val()

        if (status.last_changed > eventStatus.last_changed) {
            return null
        }

        eventStatus.last_changed = new Date(eventStatus.last_changed)
        return userFirestoreRef.update(eventStatus)
    }
)

// Take the text parameter passed to this HTTP endpoint and insert it into
// Cloud Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into Cloud Firestore using the Firebase Admin SDK.
    const writeResult = await admin.firestore().collection('messages').add({original: original});
    // Send back a message that we've succesfully written the message
    res.json({result: `Message with ID: ${writeResult.id} added.`});
});