import React, { useEffect } from 'react';
import logo from '../assets/images/logog.png';
import '../assets/css/franchise-form.css';

const FranchiseInterestForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted Successfully!');
    };

    return (
        <div className="form-page-wrapper">
            <div className="form-container-premium">
                {/* Header with Logo */}
                <div className="form-page-header">
                    <img src={logo} alt="CNI Logo" className="form-logo" />
                    <h1>Franchise Interest Form</h1>
                </div>

                <form className="premium-full-form" onSubmit={handleSubmit}>
                    {/* 1. Applicant Information */}
                    <div className="form-section">
                        <div className="section-badge"><span>01</span> Applicant Information</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your full name" required />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth</label>
                                <input type="date" required />
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <div className="radio-group-modern">
                                    <label className="radio-label"><input type="radio" name="gender" value="male" /> <span>Male</span></label>
                                    <label className="radio-label"><input type="radio" name="gender" value="female" /> <span>Female</span></label>
                                    <label className="radio-label"><input type="radio" name="gender" value="other" /> <span>Other</span></label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Nationality</label>
                                <input type="text" placeholder="e.g. Indian" />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="tel" placeholder="+91" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="email@example.com" required />
                            </div>
                            <div className="form-group full-width">
                                <label>Residential Address</label>
                                <textarea rows="2" placeholder="Enter your residential address"></textarea>
                            </div>
                            <div className="form-group full-width">
                                <label>Business Website</label>
                                <input type="url" placeholder="https://www.yourbusiness.com" />
                            </div>
                        </div>
                    </div>

                    {/* 2. Business Background */}
                    <div className="form-section">
                        <div className="section-badge"><span>02</span> Business Background</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Current Occupation / Business</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Company Name (if applicable)</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Years of Exp. (Construction/Related)</label>
                                <input type="number" />
                            </div>
                            <div className="form-group">
                                <label>Relevant Skills / Expertise</label>
                                <input type="text" />
                            </div>
                            <div className="form-group full-width">
                                <label>Total Years of Experience</label>
                                <div className="radio-group-modern">
                                    <label className="radio-label"><input type="radio" name="exp" value="0-5" /> <span>0-5</span></label>
                                    <label className="radio-label"><input type="radio" name="exp" value="6-10" /> <span>6-10</span></label>
                                    <label className="radio-label"><input type="radio" name="exp" value="11-30" /> <span>11-30</span></label>
                                    <label className="radio-label"><input type="radio" name="exp" value="20+" /> <span>20+</span></label>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Industry Segment</label>
                                <div className="checkbox-group-modern">
                                    <label className="check-label"><input type="checkbox" name="segment" value="Builder" /> <span>Builder</span></label>
                                    <label className="check-label"><input type="checkbox" name="segment" value="Supplier" /> <span>Supplier</span></label>
                                    <label className="check-label"><input type="checkbox" name="segment" value="Consultant" /> <span>Consultant</span></label>
                                    <label className="check-label"><input type="checkbox" name="segment" value="ServiceProvider" /> <span>Service Provider</span></label>
                                    <label className="check-label"><input type="checkbox" name="segment" value="Other" /> <span>Other</span></label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Franchise Interest */}
                    <div className="form-section">
                        <div className="section-badge"><span>03</span> Franchise Interest</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Preferred Location for Franchise</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Investment Capacity (Approx.)</label>
                                <input type="text" />
                            </div>
                            <div className="form-group full-width">
                                <label>Type of Franchise Interest</label>
                                <div className="radio-group-modern">
                                    <label className="radio-label"><input type="radio" name="type" value="Individual" /> <span>Individual</span></label>
                                    <label className="radio-label"><input type="radio" name="type" value="Partnership" /> <span>Partnership</span></label>
                                    <label className="radio-label"><input type="radio" name="type" value="Corporate" /> <span>Corporate</span></label>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>Reason for Interest in CNI Franchise</label>
                                <textarea rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* 4. Financial & Legal Information */}
                    <div className="form-section">
                        <div className="section-badge"><span>04</span> Financial & Legal</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>PAN / Tax ID Number</label>
                                <input type="text" />
                            </div>
                            <div className="form-group">
                                <label>Business Registration Number</label>
                                <input type="text" />
                            </div>
                            <div className="form-group full-width">
                                <label>Any Previous Franchise Experience?</label>
                                <div className="radio-group-modern">
                                    <label className="radio-label"><input type="radio" name="prev_fr" value="yes" /> <span>Yes</span></label>
                                    <label className="radio-label"><input type="radio" name="prev_fr" value="no" /> <span>No</span></label>
                                </div>
                            </div>
                            <div className="form-group full-width">
                                <label>If Yes, please specify</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    {/* 5. Infrastructure & Office Space */}
                    <div className="form-section">
                        <div className="section-badge"><span>05</span> Infrastructure & Office</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Office Type</label>
                                <div className="radio-group-modern">
                                    <label className="radio-label"><input type="radio" name="office" value="own" /> <span>Own Space</span></label>
                                    <label className="radio-label"><input type="radio" name="office" value="rented" /> <span>Rented</span></label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Office Size (sq. ft.)</label>
                                <input type="text" />
                            </div>
                            <div className="form-group full-width">
                                <label>Office Address</label>
                                <textarea rows="2"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Number of Staff Members</label>
                                <input type="number" />
                            </div>
                        </div>
                    </div>

                    {/* 6. Professional Memberships */}
                    <div className="form-section">
                        <div className="section-badge"><span>06</span> Memberships</div>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Are You Involved in any of these?</label>
                                <div className="checkbox-group-modern">
                                    <label className="check-label"><input type="checkbox" name="membership" value="Lions" /> <span>Lions Club</span></label>
                                    <label className="check-label"><input type="checkbox" name="membership" value="Rotary" /> <span>Rotary Club</span></label>
                                    <label className="check-label"><input type="checkbox" name="membership" value="BNI" /> <span>BNI</span></label>
                                    <label className="check-label"><input type="checkbox" name="membership" value="Other" /> <span>Other</span></label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7. Declaration */}
                    <div className="form-section declaration-box-premium">
                        <div className="section-badge"><span>07</span> Declaration</div>
                        <div className="declaration-text">
                            <p>I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that submission of this form does not guarantee franchise approval and that further evaluation will be conducted by Construction Network of India.</p>
                        </div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Digital Signature (Type Name)</label>
                                <input type="text" required />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text" placeholder="DD/MM/YYYY" />
                            </div>
                        </div>
                    </div>

                    {/* 8. For Office Use Only */}
                    <div className="form-section office-use-section">
                        <div className="section-badge office-badge"><span>08</span> For Office Use Only</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label>Application Number</label>
                                <input type="text" placeholder="Internal Use" />
                            </div>
                            <div className="form-group">
                                <label>Date Received</label>
                                <input type="text" placeholder="DD/MM/YYYY" />
                            </div>
                            <div className="form-group">
                                <label>Reviewed By</label>
                                <input type="text" placeholder="Officer Name" />
                            </div>
                            <div className="form-group full-width">
                                <label>Remarks</label>
                                <textarea rows="3" placeholder="Approval status or internal notes"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="form-submit-wrapper">
                        <button type="submit" className="premium-submit-btn">Submit Interest Form</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FranchiseInterestForm;
