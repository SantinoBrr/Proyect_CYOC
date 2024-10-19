import React from 'react';
import '../../assets/styles/styles.css';

function TermsOfService() {
    return (
        <div className="terms-page"> 
            <header className="terms-header">
                <div className="terms-content">
                    <h1 className="terms-title">Terms of Service</h1>
                    <p className="terms-paragraph">These terms govern your use of our car creation platform.</p>

                    <h2 className="section-title">Acceptance of Terms</h2>
                    <p className="terms-paragraph">
                        By accessing or using our platform, you agree to comply with these terms. If you do not agree, please do not use our services.
                    </p>

                    <h2 className="section-title">Modification of Terms</h2>
                    <p className="terms-paragraph">
                        We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this page. Your continued use of the platform constitutes acceptance of the modified terms.
                    </p>

                    <h2 className="section-title">Service Availability</h2>
                    <p className="terms-paragraph">
                        We strive to provide uninterrupted access to our services. However, we do not guarantee that our services will be available at all times or that they will be free from errors.
                    </p>

                    <h2 className="section-title">User Accounts</h2>
                    <p className="terms-paragraph">
                        Users must create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
                    </p>

                    <h2 className="section-title">Limitation of Liability</h2>
                    <p className="terms-paragraph">
                        Our liability for any damages arising from the use of our services is limited to the maximum extent permitted by law. We are not liable for any indirect, incidental, or consequential damages.
                    </p>

                    <h2 className="section-title">Governing Law</h2>
                    <p className="terms-paragraph">
                        These terms are governed by the laws of the jurisdiction in which our company operates, without regard to its conflict of law principles.
                    </p>

                    <h2 className="section-title">Contact Us</h2>
                    <p className="terms-paragraph">
                        If you have any questions regarding these terms, please contact us at <a href="mailto:supportCYOC@gmail.com" target="_blank" rel="noopener noreferrer" className="link">supportCYOC@gmail.com</a>.
                    </p>
                </div>
            </header>
        </div>
    );
}

export default TermsOfService;
