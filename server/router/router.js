const express = require('express');
const router = express.Router();
const connectDB = require('../db/config');
const musicModel = require('../model/file');
const multer = require('multer');
const mm = require('music-metadata');

connectDB();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

router.post('/uploadsong', upload.single('mp3file'), async (req, res) => {
  console.log('[UPLOAD] Route hit');

  if (!req.file) {
    console.warn('[UPLOAD] No file uploaded');
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const { path, originalname, filename } = req.file;
    console.log('[UPLOAD] Saved file to disk:', { path, originalname, filename });

    // Parse metadata
    let meta = {};
    try {
      const metadata = await mm.parseFile(path);
      const { title, artist, album, picture } = metadata.common || {};
      meta.title = title || null;
      meta.artist = artist || null;
      meta.album = album || null;
      meta.picture = picture && picture[0] ? picture[0].data.toString('base64') : null;
      console.log('[UPLOAD] Metadata parsed:', {
        title: meta.title,
        artist: meta.artist,
        album: meta.album,
        hasPicture: !!meta.picture
      });
    } catch (metaErr) {
      console.warn(`[UPLOAD] Warning: failed to parse metadata for ${filename}`, metaErr.message);
      meta = { title: null, artist: null, album: null, picture: null };
    }

    // Save to DB
    const musicDoc = new musicModel({
      audioName: filename,
      audioFileName: originalname,
      audioPath: path,
    });
    const saved = await musicDoc.save();
    console.log('[UPLOAD] Saved to DB, id:', saved._id);

    // Success response
    console.log('[UPLOAD] Responding with success');
    return res.status(201).json({
      message: 'Upload successful',
      id: saved._id,
      title: meta.title || filename.replace(/\.[^.]+$/, ''),
      artist: meta.artist || 'Unknown Artist',
      album: meta.album || 'Unknown Album',
      picture: meta.picture || null,
    });

  } catch (error) {
    console.error('[UPLOAD] Error uploading audio file:', error);
    return res.status(500).json({ message: 'Failed to upload audio file', error: error.message });
  }
});


module.exports = router;