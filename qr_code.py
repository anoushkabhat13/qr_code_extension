import segno

def generate_qr_code(url):
    qrcode = segno.make_qr(url)
    qrcode.save("qrcode.png")

