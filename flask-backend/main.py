import flask

app = flask.Flask("__main__")


@app.route("/")
def my_index():
    return flask.render_template("index.html", token="Hello World")


# SAMPLE ROUTES
# @app.route('/newaccount', methods=['GET', 'POST'])
# def createAccount():
#     if request.method == 'POST':
#         return create_the_account()
#     else:
#         return show_the_createAccount_form()


# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         return do_the_login()
#     else:
#         return show_the_login_form()


app.run(debug=True)
