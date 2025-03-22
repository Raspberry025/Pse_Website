from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from extensions import db
import os
import cv2
import numpy as np
import pytesseract
from PIL import Image
from io import BytesIO
import requests
import logging

app = Flask(__name__, template_folder='templates')
CORS(app)  # Enable CORS for all routes
app.secret_key = 'your_secret_key'

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'  # Use SQLite for simplicity
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

from routes.auth import auth_bp
from routes.home import home_bp
from routes.admin import admin_bp
from routes.product import product_bp

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(home_bp)
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(product_bp, url_prefix='/products')

@app.route('/')
def home():
    print("index.html")
    return render_template('index.html')

@app.route('/admin')
def admin():
    print("admin.html")
    return render_template('admin.html')

@app.route('/login')
def login_page():
    print("login.html")
    return render_template('login.html')

@app.route('/products')
def products():
    print("products.html")
    return render_template('products.html')

@app.route('/cart')
def cart():
    print("cart.html")
    return render_template('cart.html')

@app.route('/account')
def account():
    print("account.html")
    return render_template('account.html')

@app.route('/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data or 'email' not in data or 'password' not in data:
        return jsonify({"message": "Missing email or password"}), 400

    # Simulating user authentication
    is_admin = data.get("isAdmin", False)  # Default to False if missing
    print("isAdmin received:", is_admin)

    redirect_url = "/admin" if is_admin else "/"
    
    return jsonify({"message": "Login successful", "redirect": redirect_url}), 200

# Path to Tesseract executable
pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"

# Directory for temporary image storage
TEMP_FOLDER = "D:\\PSE-website-main\\PSE WEBSITE\\Temp"
os.makedirs(TEMP_FOLDER, exist_ok=True)

def is_blurry(image):
    gray_image = cv2.cvtColor(np.array(image), cv2.COLOR_BGR2GRAY)
    variance = cv2.Laplacian(gray_image, cv2.CV_64F).var()
    return variance < 100

def detect_watermark(image):
    gray_image = cv2.cvtColor(np.array(image), cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray_image, 50, 150)
    edge_percentage = np.count_nonzero(edges) / edges.size
    return edge_percentage > 0.05

def process_image(image):
    blurry = is_blurry(image)
    watermark = detect_watermark(image)
    status = "rejected" if blurry or watermark else "approved"
    return {"status": status, "blurry": str(blurry), "watermark": str(watermark)}

VALID_CERTIFICATIONS = ["ISO", "GMP", "USDA Organic", "FDA Approved", "Non-GMO", "Kosher", "Certified"]

def check_description(description):
    if len(description.split()) < 50:
        return "Description is too short. Provide more details."
    if any(word in description.lower() for word in ["great", "best", "amazing", "nice"]):
        return "Very generic description. Be more specific."
    return "Valid Description"

def check_certifications(image):
    gray_image = cv2.cvtColor(np.array(image), cv2.COLOR_BGR2GRAY)
    text = pytesseract.image_to_string(gray_image)
    for cert in VALID_CERTIFICATIONS:
        if cert.lower() in text.lower():
            return f"Certification {cert} found in image"
    return "No valid certifications found"

@app.route('/upload', methods=['POST'])
def upload_image():
    image_url = request.form.get('image_url')
    description = request.form.get('description')
    
    if not image_url:
        return jsonify({"error": "No image URL provided"}), 400
    
    try:
        response = requests.get(image_url)
        response.raise_for_status()
        image = Image.open(BytesIO(response.content))
    except Exception as e:
        return jsonify({"error": f"Could not download image from URL: {e}"}), 500

    image_result = process_image(image)
    certification_result = check_certifications(image)
    description_result = check_description(description)

    return jsonify({
        "image": image_result, 
        "certification": certification_result, 
        "description": description_result
    })

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/add_product', methods=['POST'])
def add_product():
    from models import Product  # Import here to avoid circular import
    try:
        data = request.get_json()
        logging.debug(f"Received data: {data}")

        # Validate description
        if len(data['description'].split()) < 5:
            return jsonify({"message": "Description is too short"}), 400

        # Validate image URL
        if not data['image_url'].startswith('http'):
            return jsonify({"message": "Invalid image URL"}), 400

        new_product = Product(
            name=data['name'],
            category=data['category'],
            price=data['price'],
            image_url=data['image_url'],
            description=data['description']
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify({"message": "Product added successfully"}), 201
    except Exception as e:
        logging.error(f"Error adding product: {e}", exc_info=True)
        return jsonify({"message": "Failed to add product"}), 500

@app.route('/products', methods=['GET'])
def get_products():
    from models import Product  # Import here to avoid circular import
    products = Product.query.all()
    products_list = [{
        'id': product.id,
        'name': product.name,
        'category': product.category,
        'price': product.price,
        'image_url': product.image_url,
        'description': product.description
    } for product in products]
    return jsonify(products_list)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)