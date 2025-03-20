from flask import Flask, render_template, jsonify, request
import sqlite3
 import os
app = Flask(__name__)

db_path = "documents.db"

def search_documents(query):
    # Open a connection to the SQLite database.
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # If the query is empty, return no results.
    if not query:
        return []
    
    # Search for documents where content contains the query string.
    cursor.execute("SELECT filename, content FROM documents WHERE content LIKE ?", ('%' + query + '%',))
    results = cursor.fetchall()
    conn.close()
    return results

@app.route("/")
def index():
    # Render the HTML page (templates/index.html).
    return render_template("index.html")

@app.route("/login")
def login():
    # Render the login page
    return render_template("login.html")

@app.route("/search")
def search():
    # Get the query parameter from the URL.
    query = request.args.get("q", "")
    
    # Retrieve matching documents from the database.
    results_raw = search_documents(query)
    
    # Transform the raw database tuples into a list of dictionaries.
    results = []
    for filename, content in results_raw:
        excerpt = content[:300] + ("..." if len(content) > 300 else "")
        # Here we assign a dummy category. Modify as needed.
        results.append({
            "title": filename,
            "description": excerpt,
            "category": "Legal Document"
        })
    
    # Return the results as JSON.
    return jsonify(results)

# Stub endpoint for chatbot functionality.
@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.get_json()
    message = data.get("message", "")
    # For now, the chatbot simply echoes the message.
    return jsonify({"response": f"You said: {message}"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))  # Use Render's PORT
    app.run(host="0.0.0.0", port=port, debug=True)

