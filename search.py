import sqlite3

db_path = "documents.db"

def search_documents(query):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    cursor.execute("SELECT content FROM documents WHERE content LIKE ?", ('%' + query + '%',))
    results = cursor.fetchall()
    
    conn.close()
    return results

# Get search query from user
query = input("Enter search term: ")
results = search_documents(query)

# Display results without filenames
if results:
    for content in results:
        print(f"🔍 Match Found:\n{content[0][:300]}...\n{'-'*50}")
else:
    print("❌ No matching documents found.")
