from flask import Flask, request, jsonify
from twilio.rest import Client
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app) 

# --- CONFIGURACIÓN DE TWILIO (¡PON TUS DATOS REALES!) ---
TWILIO_SID = 'AQUÍ_TU_ACCOUNT_SID'          # Ej: AC12345...
TWILIO_TOKEN = 'AQUÍ_TU_AUTH_TOKEN'         # Ej: 8a7b9c...
TWILIO_SENDER = 'whatsapp:+14155238886'     # El número del Sandbox de Twilio
MY_PHONE_NUMBER = 'whatsapp:+5215500000000' # TU número real con lada (ej: +521...)

client = Client(TWILIO_SID, TWILIO_TOKEN)

@app.route('/enviar-mensaje', methods=['POST'])
def enviar_mensaje():
    data = request.json
    nombre = data.get('nombre', 'Cliente')
    correo = data.get('correo', 'No especificado')
    telefono_cliente = data.get('telefono', 'No especificado')
    auto_interes = data.get('auto', 'General')
    mensaje_cliente = data.get('mensaje', '')

    if not mensaje_cliente:
        return jsonify({"error": "Faltan datos obligatorios"}), 400

    cuerpo_mensaje = (
        f"🏎️ *NUEVA SOLICITUD WEB*\n\n"
        f"👤 *Cliente:* {nombre}\n"
        f"🚗 *Interés:* {auto_interes}\n"
        f"📱 *Tel:* {telefono_cliente}\n"
        f"📧 *Email:* {correo}\n"
        f"💬 *Mensaje:* {mensaje_cliente}"
    )

    try:
        message = client.messages.create(
            body=cuerpo_mensaje,
            from_=TWILIO_SENDER,
            to=MY_PHONE_NUMBER  
        )
        print(f"Mensaje enviado con SID: {message.sid}")
        return jsonify({"status": "exito", "sid": message.sid}), 200
        
    except Exception as e:
        print(f"Error enviando mensaje: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Iniciando servidor Flask...")
    app.run(debug=True, port=5000)