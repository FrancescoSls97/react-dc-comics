export default function footer (){
    return (
        <footer className="footer p-5 bg-dark d-flex justify-content-between">
            <div className="sign-button">
              <button type="button" class="btn btn-outline-primary text-white ">SING-UP NOW</button>
            </div>
            <div className="socials d-flex justify-content-between align-items-center gap-3">
                <h3 className="text-primary">FOLLOW US</h3>
                <ul className="list-unstyled  d-flex justify-content-between align-items-center gap-3">
                    <li><a href="#"><img src="../../public/img/footer-facebook.png" alt="facebook"/></a></li>
                    <li><a href="#"><img src="../../public/img/footer-twitter.png" alt="twitter"/></a></li>
                    <li><a href="#"><img src="../../public/img/footer-youtube.png" alt="youtube"/></a></li>
                    <li><a href="#"><img src="../../public/img/footer-pinterest.png" alt="pinterest"/></a></li>
                    <li><a href="#"><img src="../../public/img/footer-periscope.png" alt="periscope"/></a></li>
                </ul>
            </div>
        </footer>
    )
}