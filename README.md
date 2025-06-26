# PSE Website – Image Quality Detection Tool (Flask Web App)

An academic team project designed to assist in **quality assurance (QA)** of images before uploading them to a web store. Built using **Flask (Python)**, this tool detects issues such as **watermarks**, **blurriness**, or poor-quality images to prevent low-quality content from being published.

## 🔍 Project Overview

This web application allows users to upload an image. The backend then analyzes the image for quality issues using basic computer vision techniques. Although the final integration with the web store display is incomplete, the image detection module and analysis pipeline are fully functional.

## ⚙️ Technologies Used

- **Backend:** Python, Flask  
- **Frontend:** HTML, CSS, JavaScript  
- **Image Analysis:** OpenCV (or specify your library)

## 📁 Project Structure
'''
Pse_Website/
├── static/        # Static files (CSS, JS, Images)
├── templates/     # HTML templates
│ └── index.html   # Main user interface
├── app.py         # Flask backend with detection logic
└── README.md      # Project documentation
'''


## 🚀 Features

- Upload an image through a web interface  
- Detects:
  - Presence of **watermarks**
  - **Blurry** or low-resolution content
- Displays detection result in browser

## ❗ Known Limitations

- The image is **not yet uploaded to the actual store page**  
- Display of processed images on the storefront is **incomplete**  
- Meant to serve as a **proof of concept** for image QA before upload

## 🧠 My Role in the Project

- Implemented the **image quality detection logic** in Python using Flask  
- Modified and connected existing **HTML, JavaScript, and CSS** to integrate with the backend  
- Ensured detection output was properly shown to the user  
- Worked collaboratively with teammates who focused on UI layout

## 📷 Screenshots (Optional)

*Add before/after images or detection results here if available.*

## 🔧 Future Improvements

- Complete the upload pipeline to the store page  
- Improve watermark and blur detection accuracy  
- Add feedback on how to improve image quality  
- Enhance UI responsiveness and UX flow

## 📜 License

This project was developed for educational purposes. Contributions or forks are welcome for learning and experimentation.

---

> **Author:** Sambid Shrestha  
> GitHub: [github.com/Raspberry025](https://github.com/Raspberry025)

