import React from 'react';
import '../../assets/styles/styles.css';

function PrivacyPolicy() {
    return (
        <div className="privacy-page"> 
            <header className="privacy-header">
                <div className="privacy-content">
                    <h1 className="privacy-title">Privacy Policy</h1>
                    <p className="privacy-paragraph">This policy explains how we collect, use, and protect your personal information.</p>

                    <h2 className="section-title">Information We Collect</h2>
                    <p className="privacy-paragraph">
                        We may collect personal information such as your name, email address, and usage data when you use our services.
                    </p>

                    <h2 className="section-title">How We Use Your Information</h2>
                    <p className="privacy-paragraph">
                        We use your information to improve our services, communicate with you, and personalize your experience.
                    </p>

                    <h2 className="section-title">Data Protection</h2>
                    <p className="privacy-paragraph">
                        We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                    </p>

                    <h2 className="section-title">Sharing Your Information</h2>
                    <p className="privacy-paragraph">
                        We do not sell or rent your personal information to third parties. We may share your information with trusted partners who assist us in providing our services.
                    </p>

                    <h2 className="section-title">Your Rights</h2>
                    <p className="privacy-paragraph">
                        You have the right to access, correct, or delete your personal information. You can exercise these rights by contacting us.
                    </p>

                    <h2 className="section-title">Changes to This Policy</h2>
                    <p className="privacy-paragraph">
                        We may update this policy from time to time. Any changes will be posted on this page with an updated effective date.
                    </p>

                    <h2 className="section-title">Contact Us</h2>
                    <p className="privacy-paragraph">
                        If you have any questions about this policy, please contact us at: <a href="mailto:supportCYOC@gmail.com" target="_blank" rel="noopener noreferrer" className="link">supportCYOC@gmail.com</a>.
                    </p>
                </div>
            </header>
        </div>
    );
}

export default PrivacyPolicy;
