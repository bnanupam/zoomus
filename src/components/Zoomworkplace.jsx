import React from 'react'
import iosimg from '../images/iosimg.png'
import '../scss/custom.scss'

export default function Zoomworkplace() {
    return (
        <div className="zoomworkplace">
            <div className="container-fluid bg-primary-subtle p-5">
                <div className="row">
                    <div className="col-6">
                        <h3>Zoom Workplace for mobile</h3>
                        <p>Stay connected on your mobile device and never miss a beat, no matter where you are.</p>
                        <ul className='d-flex list-unstyled gap-3'>
                            <li>
                                <button type="button" className="btn btn-dark">
                                    <img src="https://st1.zoom.us/fe-static/meeting-base/ca03572c31eba359c505e87c5b83d8fa.svg" alt="" />
                                </button>
                            </li>
                            <li>
                                <button type="button" className="btn btn-dark">
                                    <img src="https://st1.zoom.us/fe-static/meeting-base/1233949c5fa034b6caae9fbda67f35ad.svg" alt="" />
                                </button>
                            </li>
                        </ul>
                        <p>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAABEpJREFUeF7tnVFuGzEMRB2gp8gNev/D5AY5RYAWrrOJuhHNNysK8hrT35UpaoYzpDZx+vL2/vHn4n/LEHgxAcuw/7exCViLvwlYjL8JMAGrEVi8v3uACViMwOLtrQATsBiBxdtbASZgMQKLt5cV8Pv1V2nKb+8fX/Gi2O0asjnJkexL9uqtUfI1AZfLhRCmkGECgEqfQgEK0/sK2qouilFlR+2+bcweARXnue6nxBmyIGUjE9A3MRPQ9ICKglqmANLIFNlHdkGaofrZnh0ePY8J2E01pKpNQKes1SomzTZSjwn4RCabUu7Zz8g0ZQJMAGlttzVVVZpVnXpRsgIO3j4joEcIODrBVO1JGv9W8mX3gOpDV4ERaTsbiY+e59RjaLW90aad2aFC4jICeBf5v5eQSif+TmSfEUxiZKOsCbhTCSagAUeRvRXQAU61nBEfzSp3L/uR9RXnUqxsaAqqTnYEOHWcJb3n6PmmEnA0KfI58v5HHQ/JvivXyAqYmawJmIkuiG0CikBqwxBf722rTj5knwrfV/PKIJUtiFSpCfj+XScT0LwkfAoFZIxenyt2QKaadk9iAeTOkZ0jyouMu1ns9rlsQSS4CSAo3daYgACr0ylAtZKsRojUyUCgrFF7hHLjjc5bpgATkJVU/7kJCH4zjhTUQykg4j/zUsUi9nuQiUixMmUtzSXTRZkCTAC/fE0fQ6ObcG+etwLEP1ejApbZBJF9JuP95S+6uGW+nuVK8riuUXqDbEEmIKfBBDQYKbP9qRVAXj9k73Qyi9jLW1Vjtn/UuwgxStUPNWECNKm6XsImILc36U0nbY7btiYAEDCyhAC8xSeyV3OpjnnUdoYsSD00uRP0YlaDdW88VApD6SMEK3kMJUHVW7EJGEH187OkihTJqvHU4UBR5tGhgsBapgAVsCw5NZ4JEL8hYwJuCMgKUCtzptSzV917kknuWWEsb8LkEEcnGNVrTUBQLiaA60i2IB5aXzlTXftssomMvGfST/jzEyYgQNEEFNvb0yiA2IQiTfITsapqzO4KJBflbGStbEEmgMDK1wwRkDWye2lsRKoTE6nSrNKveWW5jxRaFrvFxQSAJszr+bbSBIDvBGQgnU4BJOGefaiWEr0KILdikqNS7ST3LF6ZBZHDmYCCixhpcBHrJuDBCYiII6Rnnn6NTVS65aBOZ5E1nsqCTEBGF/wC3lELMgEPRACxHZBuOJP37IjYTsXkM+UiRvw1a8JtYiYA3BDJT7CyuX2k6qyA5r8fIWD0KnyEAGIH5E0qUW92PjKF9WKUXcSyBPfPlZdxI0CbgMTKrICBryipVd9bT/oIIUm9CClTUDQckHE7w2jIgrLg5LkJsAK+6oQ0UtKwSZxtU1kBpKq9hiNgAjhWU1aagCmw8qAmgGM1ZaUJmAIrD2oCOFZTVpqAKbDyoCaAYzVlpQmYAisPagI4VlNWmoApsPKgfwESat67MDPY7QAAAABJRU5ErkJggg==" alt="" />
                        </p>
                        <p>
                            Scan the QR code or go to<span>
                                <a href="#">Zoom.us/go</a>
                            </span>.
                        </p>


                    </div>
                    <div className="col-3">
                        <img src={iosimg} alt="" width={550} height={344} className=' rounded' />
                    </div>

                </div>
            </div>
        </div >
    )
}
