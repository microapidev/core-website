from flask import request
from user_registration import app, db, bcrypt
from user_registration.models import User, UserSchema


@app.route("/register", methods=['GET', 'POST'])
def register():
    email = request.json['email']
    password = request.json['password']
    confirm_password = request.json['confirm_password']

    if password == confirm_password:
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        user = User(email, hashed_password)
        db.session.add(user)
        db.session.commit()
        return f"Account created for {email} !"

    return ""

