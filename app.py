from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.config.from_object('config.Config')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        name = request.form.get("username")
        message = request.form.get("textarea")
        return render_template('pages/thankyou.html', user=name, message=message)
    return render_template('pages/feedback.html')

@app.route('/thankyou')
def thankyou():
    return render_template('pages/thankyou.html')

if __name__ == '__main__':
    app.run(debug=True)