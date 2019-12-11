from flask import request , g ,flash, url_for, session , redirect ,current_app , Blueprint , render_template , get_flashed_messages
from datetime import datetime , date
from werkzeug.security import check_password_hash, generate_password_hash
import json
from bson import json_util
bp = Blueprint('auth',__name__,url_prefix ='/auth')

def p(element):
    print("==============\n")
    print(element)
    print("\n==============")

@bp.route('/register/', methods = ['GET','POST'])
def register():
    credentials = {}
    if request.method == 'POST':
        first_name =request.form['first_name']
        last_name = request.form['last_name'] 
        password = request.form['password'] 
        phone = request.form['phone']
        email = request.form['email'] 
        birth_date = request.form['birth_date']
        credentials = request.form.to_dict()
        # есть ли проверка на правильность заполнения полей?
        error = None
        if not first_name:
           error = "Не указано имя"
           flash(error)
        if not last_name:
            error = "Не указана фамилия"
            flash(error)
        if not phone:
            error = "Не указан телефон"
            flash(error)
        if not email:
            error = "Не указан e-mail"
            flash(error)
        if not birth_date:
            error = "Не указана дата рождения"
            flash(error)  
        if not password:
           error = "Не указан пароль"
           flash(error)

        if error is None:
            from . import database
            from . import user  
            user = user.User(first_name,last_name,birth_date,phone,email,password)
            col = database.get_db_connection()[database.COLLECTION_NAME]
            if col.find_one({"email": email}) is None:
                col.insert(user.get_user_data())
                flash("Вы успешно зарегистрировались!")
                return redirect(url_for('main_page')) # что возвращать?
            else:
                flash("Пользователь с данным e-mail уже существует")
    return render_template('auth/register.html', credentials = credentials , messages = get_flashed_messages) # что возвращать?

@bp.route('/login/',methods = ['GET','POST'])
def login():
    credentials = {}
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        credentials = request.form.to_dict()
        error = None
        if not email:
            error = "Не указан e-mail"
            flash(error)
        if not password:
           error = "Не указан пароль"
           flash(error)
        if error is None:
            from . import database
            from . import user 
            col = database.get_db_connection()[database.COLLECTION_NAME]
            doc = col.find_one({"email":email})
            if doc is None:
                error = "Неверный логин/почта"
                flash(error)
            elif check_password_hash(doc['password'],password):
                user = user.User.convert_from_doc(doc)
                session.clear()
                session['user'] = user.get_user_data()
                #session['user_first_name'] = user.first_name
                #session['user_last_name'] = user.last_name
                session['user_id'] = str(doc['_id'])
                print("\n=========")
                print(session['user_id'])
                flash("Вы успешно вошли!")
                return (redirect(url_for('main_page'))) #что возвращать
            else:
                error = "Неверный пароль"
                flash(error)
    return render_template('auth/login.html',credentials = credentials , messages = get_flashed_messages())   # что возвращать? 

@bp.route('/logout/', methods=['POST', 'GET'])
def logout():
    session.clear()
    return redirect(url_for('main_page')) # что вернуть? 


@bp.before_app_request
def initalize_user():
    user = session.get('user')
    if user is None:
        g.user = None
    else:
        g.user = user
        g.user_id = session.get('user_id')
    



