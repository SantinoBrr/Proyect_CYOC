import React from 'react';
import '../../assets/styles/styles.css';

function LegalPage() {
    return (
        <div className="App"> 
            <header className="App-header">
                <div className="content">
                    <h1>Legal Information</h1>
                    <p>This page outlines the legal terms and conditions associated with using our car creation platform.</p>

                    <h2>Copyright Notice</h2>
                    <p>
                        All content, including designs, images, and text created by users, is owned by the respective user who created it.
                    </p>
                    <p>
                        Users retain all rights to their creations. However, by uploading your designs to our platform, you grant us a
                        non-exclusive, worldwide, royalty-free license to use, display, and promote your designs on our website.
                    </p>

                    <h2>User Responsibilities</h2>
                    <p>
                        Users are responsible for ensuring that their creations do not infringe on any third-party copyrights,
                        trademarks, or other intellectual property rights. 
                    </p>
                    <p>
                        By uploading a design, users confirm that they own all
                        rights to the design and that it does not violate any laws.
                    </p>

                    <h2>Comments and Feedback</h2>
                    <p>
                        Users are encouraged to provide feedback on designs created by others. However, all comments must be respectful
                        and adhere to our community guidelines. 
                    <p>
                    </p>
                        We reserve the right to remove any comments that are deemed inappropriate
                        or harmful.
                    </p>

                    <h2>Data Usage</h2>
                    <p>
                        We may collect personal data from users for the purpose of improving our services. This data will be used in
                        accordance with our <a href="/privacy-policy">Privacy Policy</a>.
                    </p>

                    <h2>Terms of Service</h2>
                    <p>
                        By using our platform, you agree to our <a href="/terms-of-service">Terms of Service</a>.
                        Please read these terms carefully before using our services.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions regarding these terms or your rights, please contact us at <a href="mailto:supportCYOC@gmail.com" target="_blank" rel="noopener noreferrer">supportCYOC@gmail.com</a>.
                    </p>
                </div>
            </header>
        </div>
    );
}

export default LegalPage;
