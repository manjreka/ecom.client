import './index.css'

const Footer = () => (
    <div>
        <div className="footer-bg-container desktop-footer">
            <div className="footer-container">
                <div>
                    <h1>Be the first to know</h1>
                    <p>Sign up for updates from mettā muse.</p>
                    <div>
                        <input type="text" />
                        <button type="button">SUBSCRIBE</button>
                    </div>
                </div>
                <div>
                    <h1>CONTACT US</h1>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h1>Currency</h1>
                    <div className="footer-text-container">
                        <img
                            src="https://res.cloudinary.com/dtzajnril/image/upload/v1715480026/GroupUsaLogo_lcmup1.png"
                            alt="usa"
                            className="footer-text-image"
                        />
                        <p> USA</p>
                    </div>
                    <p>
                        Transactions will be completed in Euros and a currency reference is
                        available on hover.
                    </p>
                </div>
            </div>
            <hr />
            <div className="footer-sub-container">
                <div>
                    <h1>mettā muse</h1>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <p>Orders & Shipping</p>
                    <p>Join/Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h1>Follow Us</h1>
                    <img
                        src="https://res.cloudinary.com/dtzajnril/image/upload/v1715480811/Frame_28social_iynthw.png"
                        alt="social"
                    />
                    <h1>mettā muse Accepts</h1>
                    <img
                        src="https://res.cloudinary.com/dtzajnril/image/upload/v1715480903/Frame_136278digital_ejy5lr.png"
                        alt="digital"
                    />
                </div>
            </div>
        </div>
        <div className="footer-bg-container mobile-tablet-footer">
            <h1>Be the first to know</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. this is simply dummy text.
            </p>
            <div>
                <input type="text" />
                <button style = {{margin: '5px'}} className="button add-to-cart-btn" type="button">SUBSCRIBE</button>
            </div>
            <hr />
            <h1>Call Us</h1>
            <div>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
            </div>
            <hr />
            <h1>Currency</h1>
            <div className="footer-text-container">
                <img
                    src="https://res.cloudinary.com/dtzajnril/image/upload/v1715480026/GroupUsaLogo_lcmup1.png"
                    alt="usa"
                    className="footer-text-image"
                />
                <p> USA</p>
            </div>
        </div>
    </div>
)

export default Footer