import puppeteer from 'puppeteer';
import path from 'path';
import express from "express"
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import data from "../src/data.js"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname,"..", 'dist')));

app.get('/og-image/:id', async (req, res) => {
  const postId = req.params.id;
  const imagePath = path.join(__dirname, `og-image-${postId}.png`);

  // Mock post data based on the ID
 
try{
  const post = data[postId];

  if (!post) {
    return res.status(404).send('Post not found');
  }
  if (fs.existsSync(imagePath)) {
    // If it exists, send the saved image
    return res.sendFile(imagePath);
  }

  // Render the React component to a string
 

  // Wrap the component HTML in a full HTML document
  const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    .container {
      width: 1200px;
      height: 630px;
      background-color: #f3f4f6;
      display: flex;
      flex-direction: column;
      padding: 48px;
      position: relative;
      overflow: hidden;
    }
    .logo {
      position: absolute;
      top: 32px;
      left: 48px;
      display: flex;
      align-items: center;
    }
    .logo-circle {
      width: 48px;
      height: 48px;
      background-color: #ff4500;
      border-radius: 24px;
      margin-right: 16px;
    }
    .logo-text {
      font-size: 40px;
      font-weight: bold;
      color: #ff4500;
    }
    .content {
      margin-top: 96px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .title {
      font-size: 60px;
      font-weight: bold;
      color: #1f2937;
      margin-bottom: 32px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .description {
      font-size: 30px;
      color: #4b5563;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 96px;
    }
    .footer {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .author {
      font-size: 24px;
      color: #374151;
    }
    .date {
      font-size: 24px;
      color: #6b7280;
    }
    .decorative-circle-1 {
      position: absolute;
      top: 0;
      right: 0;
      width: 256px;
      height: 256px;
      background-color: #fecdd3;
      border-radius: 100%;
      margin-right: -128px;
      margin-top: -128px;
    }
    .decorative-circle-2 {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 384px;
      height: 384px;
      background-color: #fed7aa;
      border-radius: 100%;
      margin-left: -192px;
      margin-bottom: -192px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">
      <div class="logo-circle"></div>
      <span class="logo-text">reddit</span>
    </div>
    <div class="content">
      <h1 class="title">Title Placeholder</h1>
      <div class="description">Content Placeholder</div>
    </div>
    <div class="footer">
      <span class="author">Posted by u/Author</span>
      <span class="date">Date Placeholder</span>
    </div>
    <div class="decorative-circle-1"></div>
    <div class="decorative-circle-2"></div>
  </div>
</body>
</html>
`;


  // Replace placeholders in the HTML template
  const htmlContent = htmlTemplate
    .replace('Title Placeholder', post.title)
    .replace('Posted by u/Author', `Posted by u/${post.author}`)
    .replace('Date Placeholder', post.date)
    .replace('Content Placeholder', post.content);

  const browser = await puppeteer.launch({headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  // Set the viewport to the size of the OG image
  await page.setViewport({ width: 1200, height: 630 });

  // Set the content of the page to the HTML string
  await page.setContent(htmlContent);
console.log("runn")
  const screenshotBuffer = await page.screenshot({path:imagePath});
  await browser.close();
  // res.setHeader('Content-Type', 'image/png');
  // res.setHeader('Content-Disposition', 'inline; filename="og-image.png"');
  // res.send(screenshotBuffer);
  res.sendFile(imagePath)
}
catch(e){
console.log(e)
}
});

app.get('*', async(req, res) => {
  const filePath = path.resolve(__dirname, "..",'dist', 'index.html');
  fs.readFile(filePath, 'utf-8', (err, html) => {
    if (err) {
      return res.status(500).send('An error occurred');
    }

    const postId = req.path.split('/').pop();
    const ogImageUrl = `https://ogimagedemo.onrender.com/og-image/${postId}`;

    let dynamicHtml = html.replace(
      '<meta property="og:image" content="https://www.wikihow.com/images/thumb/4/41/Get-the-URL-for-Pictures-Draft-Step-1.jpg/v4-728px-Get-the-URL-for-Pictures-Draft-Step-1.jpg" />',
      `<meta property="og:image" content="${ogImageUrl}">`
    );

    res.send(dynamicHtml);
  
 });
 
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
