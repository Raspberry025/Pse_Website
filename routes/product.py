from flask import Blueprint, render_template

product_bp = Blueprint('product', __name__)

@product_bp.route('/')
def product_home():
    return render_template('products.html')

# Add more routes as needed