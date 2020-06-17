from user_registration import db, ma


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)

    def __init__(self, email, password):
        self.email = email
        self.password = password


class UserSchema(ma.Schema):
    class Meta:
        fields = ('email', 'hashed_password')


user_schema = UserSchema()
