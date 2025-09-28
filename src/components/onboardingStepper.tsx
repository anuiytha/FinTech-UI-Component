import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import IdentityVerification from './identityVerification';

interface PersonalInfo {
    fullLegalName: string;
    dateOfBirth: string;
    emailAddress: string;
    phoneNumber: string;
    residentialAddress: string;
    socialSecurityNumber: string;
    preferredName: string;
    mailingAddress: string;
    emergencyContact: string;
    useDifferentMailingAddress: boolean;
}

interface RiskAssessment {
    riskTolerance: string;
    riskProfile: string;
    riskPreferences: string;
    riskCapacity: string;
    riskHorizon: string;
    riskGoals: string;
}

interface InvestmentGoals {
    investmentGoals: string;
    investmentTimeframe: string;
    investmentRiskLevel: string;
    investmentReturnExpectations: string;
    investmentLiquidityNeeds: string;
}

interface AccountSetup {
    accountType: string;
    accountName: string;
    accountNumber: string;
    accountBalance: string;
    accountStatus: string;
    securityQuestion1: string;
    securityAnswer1: string;
    securityQuestion2: string;
    securityAnswer2: string;
    twoFactorEnabled: boolean;
    twoFactorMethod: string;
    trustedContactName: string;
    trustedContactPhone: string;
    trustedContactEmail: string;
    trustedContactRelationship: string;
}

const OnboardingStepper: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
        fullLegalName: '',
        dateOfBirth: '',
        emailAddress: '',
        phoneNumber: '',
        residentialAddress: '',
        socialSecurityNumber: '',
        preferredName: '',
        mailingAddress: '',
        emergencyContact: '',
        useDifferentMailingAddress: false,
    });

    const [riskAssessment, setRiskAssessment] = useState<RiskAssessment>({
        riskTolerance: '',
        riskProfile: '',
        riskPreferences: '',
        riskCapacity: '',
        riskHorizon: '',
        riskGoals: '',
    });

    const [investmentGoals, setInvestmentGoals] = useState<InvestmentGoals>({
        investmentGoals: '',
        investmentTimeframe: '',
        investmentRiskLevel: '',
        investmentReturnExpectations: '',
        investmentLiquidityNeeds: '',
    });

    const [accountSetup, setAccountSetup] = useState<AccountSetup>({
        accountType: '',
        accountName: '',
        accountNumber: '',
        accountBalance: '',
        accountStatus: '',
        securityQuestion1: '',
        securityAnswer1: '',
        securityQuestion2: '',
        securityAnswer2: '',
        twoFactorEnabled: false,
        twoFactorMethod: '',
        trustedContactName: '',
        trustedContactPhone: '',
        trustedContactEmail: '',
        trustedContactRelationship: '',
    });


    const steps = [
        { id: 1, title: "Personal Info", description: "Tell us about yourself", completed: false },
        { id: 2, title: "Identity Verification", description: "Verify your identity", completed: false },
        { id: 3, title: "Risk Assessment", description: "Understand your risk tolerance", completed: false },
        { id: 4, title: "Investment Goals", description: "Set your financial objectives", completed: false },
        { id: 5, title: "Account Setup", description: "Complete your account", completed: false },
        { id: 6, title: "Account Created", description: "Welcome to Relentless Returns", completed: false },
    ];

    const handleRiskAssessmentChange = (field: keyof RiskAssessment, value: string) => {
        setRiskAssessment(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleInvestmentGoalsChange = (field: keyof InvestmentGoals, value: string) => {
        setInvestmentGoals(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleAccountSetupChange = (field: keyof AccountSetup, value: string | boolean) => {
        setAccountSetup(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleInputChange = (field: keyof PersonalInfo, value: string | boolean) => {
        setPersonalInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const isStep1Valid = () => {
        return personalInfo.fullLegalName.trim() !== '' &&
            personalInfo.dateOfBirth !== '' &&
            personalInfo.emailAddress.trim() !== '' &&
            personalInfo.phoneNumber.trim() !== '' &&
            personalInfo.residentialAddress.trim() !== '' &&
            personalInfo.socialSecurityNumber.trim() !== '';
    };

    // SThis is the STEP 2 Identity Verification
    const isStep2Valid = () => {
        return true;
    };

    const isStep3Valid = () => {
        return riskAssessment.riskTolerance.trim() !== '' &&
            riskAssessment.riskProfile.trim() !== '' &&
            riskAssessment.riskPreferences.trim() !== '' &&
            riskAssessment.riskCapacity.trim() !== '' &&
            riskAssessment.riskHorizon.trim() !== '' &&
            riskAssessment.riskGoals.trim() !== '';
    };

    const isStep4Valid = () => {
        return investmentGoals.investmentGoals.trim() !== '' &&
            investmentGoals.investmentTimeframe.trim() !== '' &&
            investmentGoals.investmentRiskLevel.trim() !== '' &&
            investmentGoals.investmentReturnExpectations.trim() !== '' &&
            investmentGoals.investmentLiquidityNeeds.trim() !== '';
    };

    const isStep5Valid = () => {
        return accountSetup.accountType.trim() !== '' &&
            accountSetup.accountName.trim() !== '' &&
            accountSetup.securityQuestion1.trim() !== '' &&
            accountSetup.securityAnswer1.trim() !== '' &&
            accountSetup.securityQuestion2.trim() !== '' &&
            accountSetup.securityAnswer2.trim() !== '' &&
            accountSetup.trustedContactName.trim() !== '' &&
            accountSetup.trustedContactPhone.trim() !== '' &&
            accountSetup.trustedContactEmail.trim() !== '' &&
            accountSetup.trustedContactRelationship.trim() !== '';
    };

    const isCurrentStepValid = () => {
        switch (currentStep) {
            case 1: return isStep1Valid();
            case 2: return isStep2Valid();
            case 3: return isStep3Valid();
            case 4: return isStep4Valid();
            case 5: return isStep5Valid();
            case 6: return true;
            default: return false;
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-5 max-w-4xl mx-auto">
            {/* This is the Welcome Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Relentless Returns</h2>
                <p className="text-gray-600">Let's get your investment account set up in just a few steps</p>
            </div>

            {/* This shows the Progress Steps */}
            <div className="flex items-center mb-8">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center flex-1">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${step.id < currentStep || (step.id === 6 && currentStep === 6)
                                ? 'bg-green-500 text-white'
                                : step.id === currentStep
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-600'
                                }`}>
                                {step.id < currentStep || (step.id === 6 && currentStep === 6) ? <Check size={18} /> : step.id}
                            </div>

                            {/* This is the Step labels */}
                            <div className="text-center mt-3">
                                <div className={`text-sm font-medium ${step.id <= currentStep ? 'text-gray-900' : 'text-gray-600'
                                    }`}>
                                    {step.title}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{step.description}</div>
                            </div>
                        </div>

                        {/* This is the Connection lines */}
                        {index < steps.length - 1 && (
                            <div className={`flex-1 h-0.5 mx-2 ${step.id < currentStep || (step.id === 5 && currentStep === 6) ? 'bg-green-500' : 'bg-gray-200'
                                }`} />
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* This is the Current Step Content */}
            <div className="bg-gray-50 rounded-lg p-6 min-h-[600px]">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {steps[currentStep - 1]?.title}
                </h4>
                <p className="text-gray-600 mb-6">
                    {steps[currentStep - 1]?.description}
                </p>

                {/* This is the Step 1: Personal Info Form */}
                {currentStep === 1 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Legal Name (as it appears on government ID) *
                                </label>
                                <input
                                    type="text"
                                    value={personalInfo.fullLegalName}
                                    onChange={(e) => handleInputChange('fullLegalName', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your full legal name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Date of Birth *
                                </label>
                                <input
                                    type="date"
                                    value={personalInfo.dateOfBirth}
                                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    value={personalInfo.emailAddress}
                                    onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    value={personalInfo.phoneNumber}
                                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Social Security Number *
                                </label>
                                <input
                                    type="text"
                                    value={personalInfo.socialSecurityNumber}
                                    onChange={(e) => handleInputChange('socialSecurityNumber', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="XXX-XX-XXXX"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preferred Name
                                </label>
                                <input
                                    type="text"
                                    value={personalInfo.preferredName}
                                    onChange={(e) => handleInputChange('preferredName', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your preferred name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Residential Address *
                            </label>
                            <textarea
                                value={personalInfo.residentialAddress}
                                onChange={(e) => handleInputChange('residentialAddress', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your full residential address"
                                rows={3}
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="useDifferentMailingAddress"
                                checked={personalInfo.useDifferentMailingAddress}
                                onChange={(e) => handleInputChange('useDifferentMailingAddress', e.target.checked)}
                                className="mr-2"
                            />
                            <label htmlFor="useDifferentMailingAddress" className="text-sm font-medium text-gray-700">
                                Use a different mailing address
                            </label>
                        </div>

                        {personalInfo.useDifferentMailingAddress && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Mailing Address
                                </label>
                                <textarea
                                    value={personalInfo.mailingAddress}
                                    onChange={(e) => handleInputChange('mailingAddress', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your mailing address"
                                    rows={3}
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Emergency Contact
                            </label>
                            <input
                                type="text"
                                value={personalInfo.emergencyContact}
                                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter emergency contact information"
                            />
                        </div>
                    </div>
                )}

                {/* This is the Step 2: Identity Verification */}
                {currentStep === 2 && (
                    <IdentityVerification />
                )}

                {/* This is the Step 3: Risk Assessment Form */}
                {currentStep === 3 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Risk Tolerance *
                                </label>
                                <select
                                    value={riskAssessment.riskTolerance}
                                    onChange={(e) => handleRiskAssessmentChange('riskTolerance', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your risk tolerance</option>
                                    <option value="conservative">Conservative</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="aggressive">Aggressive</option>
                                    <option value="very-aggressive">Very Aggressive</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Risk Profile *
                                </label>
                                <select
                                    value={riskAssessment.riskProfile}
                                    onChange={(e) => handleRiskAssessmentChange('riskProfile', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your risk profile</option>
                                    <option value="defensive">Defensive</option>
                                    <option value="cautious">Cautious</option>
                                    <option value="balanced">Balanced</option>
                                    <option value="growth">Growth</option>
                                    <option value="aggressive-growth">Aggressive Growth</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Risk Preferences *
                                </label>
                                <select
                                    value={riskAssessment.riskPreferences}
                                    onChange={(e) => handleRiskAssessmentChange('riskPreferences', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your risk preferences</option>
                                    <option value="capital-preservation">Capital Preservation</option>
                                    <option value="income-generation">Income Generation</option>
                                    <option value="balanced-growth">Balanced Growth</option>
                                    <option value="capital-appreciation">Capital Appreciation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Risk Capacity *
                                </label>
                                <select
                                    value={riskAssessment.riskCapacity}
                                    onChange={(e) => handleRiskAssessmentChange('riskCapacity', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your risk capacity</option>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    <option value="very-high">Very High</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Risk Horizon *
                                </label>
                                <select
                                    value={riskAssessment.riskHorizon}
                                    onChange={(e) => handleRiskAssessmentChange('riskHorizon', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your investment horizon</option>
                                    <option value="short-term">Short-term (1-3 years)</option>
                                    <option value="medium-term">Medium-term (3-7 years)</option>
                                    <option value="long-term">Long-term (7+ years)</option>
                                    <option value="retirement">Retirement (15+ years)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Risk Goals *
                                </label>
                                <select
                                    value={riskAssessment.riskGoals}
                                    onChange={(e) => handleRiskAssessmentChange('riskGoals', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your primary goal</option>
                                    <option value="retirement-planning">Retirement Planning</option>
                                    <option value="wealth-building">Wealth Building</option>
                                    <option value="education-funding">Education Funding</option>
                                    <option value="home-purchase">Home Purchase</option>
                                    <option value="emergency-fund">Emergency Fund</option>
                                    <option value="income-replacement">Income Replacement</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* This is the Step 4: Investment Goals Form */}
                {currentStep === 4 && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Investment Goals *
                                </label>
                                <select
                                    value={investmentGoals.investmentGoals}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentGoals', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your primary investment goal</option>
                                    <option value="retirement">Retirement Planning</option>
                                    <option value="wealth-building">Wealth Building</option>
                                    <option value="education">Education Funding</option>
                                    <option value="home-purchase">Home Purchase</option>
                                    <option value="emergency-fund">Emergency Fund</option>
                                    <option value="income-generation">Income Generation</option>
                                    <option value="tax-optimization">Tax Optimization</option>
                                    <option value="legacy-planning">Legacy Planning</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Investment Timeframe *
                                </label>
                                <select
                                    value={investmentGoals.investmentTimeframe}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentTimeframe', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your investment timeframe</option>
                                    <option value="1-3-years">1-3 years</option>
                                    <option value="3-5-years">3-5 years</option>
                                    <option value="5-10-years">5-10 years</option>
                                    <option value="10-15-years">10-15 years</option>
                                    <option value="15-20-years">15-20 years</option>
                                    <option value="20-plus-years">20+ years</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Investment Risk Level *
                                </label>
                                <select
                                    value={investmentGoals.investmentRiskLevel}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentRiskLevel', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your preferred risk level</option>
                                    <option value="very-low">Very Low (Capital Preservation)</option>
                                    <option value="low">Low (Conservative)</option>
                                    <option value="moderate">Moderate (Balanced)</option>
                                    <option value="high">High (Growth)</option>
                                    <option value="very-high">Very High (Aggressive)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Return Expectations *
                                </label>
                                <select
                                    value={investmentGoals.investmentReturnExpectations}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentReturnExpectations', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your return expectations</option>
                                    <option value="2-4-percent">2-4% annually</option>
                                    <option value="4-6-percent">4-6% annually</option>
                                    <option value="6-8-percent">6-8% annually</option>
                                    <option value="8-10-percent">8-10% annually</option>
                                    <option value="10-plus-percent">10%+ annually</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Liquidity Needs *
                                </label>
                                <select
                                    value={investmentGoals.investmentLiquidityNeeds}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentLiquidityNeeds', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your liquidity needs</option>
                                    <option value="high">High (Need quick access to funds)</option>
                                    <option value="medium">Medium (Some flexibility needed)</option>
                                    <option value="low">Low (Can lock funds for longer periods)</option>
                                    <option value="minimal">Minimal (Long-term investment focus)</option>
                                </select>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h5 className="font-medium text-blue-900 mb-2">Investment Goal Summary</h5>
                            <p className="text-sm text-blue-800">
                                Based on your selections, we'll recommend investment strategies that align with your
                                {investmentGoals.investmentGoals && ` ${investmentGoals.investmentGoals}`} goals,
                                {investmentGoals.investmentTimeframe && ` ${investmentGoals.investmentTimeframe}`} timeframe, and
                                {investmentGoals.investmentRiskLevel && ` ${investmentGoals.investmentRiskLevel}`} risk tolerance.
                            </p>
                        </div>
                    </div>
                )}

                {/* This is the Step 5: Account Setup Form */}
                {currentStep === 5 && (
                    <div className="space-y-6">
                        {/* This is the Account Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Account Type *
                                </label>
                                <select
                                    value={accountSetup.accountType}
                                    onChange={(e) => handleAccountSetupChange('accountType', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select account type</option>
                                    <option value="individual">Individual Account</option>
                                    <option value="joint">Joint Account</option>
                                    <option value="ira">IRA (Individual Retirement Account)</option>
                                    <option value="roth-ira">Roth IRA</option>
                                    <option value="401k">401(k)</option>
                                    <option value="trust">Trust Account</option>
                                    <option value="custodial">Custodial Account</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Account Name *
                                </label>
                                <input
                                    type="text"
                                    value={accountSetup.accountName}
                                    onChange={(e) => handleAccountSetupChange('accountName', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter account name"
                                />
                            </div>
                        </div>

                        {/* This is the Security Questions */}
                        <div className="border-t pt-6">
                            <h5 className="font-medium text-gray-900 mb-4">Security Questions</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Security Question 1 *
                                    </label>
                                    <select
                                        value={accountSetup.securityQuestion1}
                                        onChange={(e) => handleAccountSetupChange('securityQuestion1', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select a security question</option>
                                        <option value="mother-maiden-name">What is your mother's maiden name?</option>
                                        <option value="first-pet">What was the name of your first pet?</option>
                                        <option value="birth-city">In what city were you born?</option>
                                        <option value="high-school">What high school did you attend?</option>
                                        <option value="first-car">What was the make of your first car?</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Answer 1 *
                                    </label>
                                    <input
                                        type="text"
                                        value={accountSetup.securityAnswer1}
                                        onChange={(e) => handleAccountSetupChange('securityAnswer1', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your answer"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Security Question 2 *
                                    </label>
                                    <select
                                        value={accountSetup.securityQuestion2}
                                        onChange={(e) => handleAccountSetupChange('securityQuestion2', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select a security question</option>
                                        <option value="favorite-teacher">Who was your favorite teacher?</option>
                                        <option value="childhood-friend">What was your childhood best friend's name?</option>
                                        <option value="first-job">What was your first job?</option>
                                        <option value="favorite-book">What is your favorite book?</option>
                                        <option value="dream-vacation">Where would you like to go on your dream vacation?</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Answer 2 *
                                    </label>
                                    <input
                                        type="text"
                                        value={accountSetup.securityAnswer2}
                                        onChange={(e) => handleAccountSetupChange('securityAnswer2', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your answer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* This is the Two-Factor Authentication */}
                        <div className="border-t pt-6">
                            <h5 className="font-medium text-gray-900 mb-4">Two-Factor Authentication</h5>
                            <div className="flex items-center mb-4">
                                <input
                                    type="checkbox"
                                    id="twoFactorEnabled"
                                    checked={accountSetup.twoFactorEnabled}
                                    onChange={(e) => handleAccountSetupChange('twoFactorEnabled', e.target.checked)}
                                    className="mr-2"
                                />
                                <label htmlFor="twoFactorEnabled" className="text-sm font-medium text-gray-700">
                                    Enable two-factor authentication for enhanced security
                                </label>
                            </div>
                            {accountSetup.twoFactorEnabled && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Two-Factor Method
                                    </label>
                                    <select
                                        value={accountSetup.twoFactorMethod}
                                        onChange={(e) => handleAccountSetupChange('twoFactorMethod', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select 2FA method</option>
                                        <option value="sms">SMS Text Message</option>
                                        <option value="email">Email</option>
                                        <option value="authenticator-app">Authenticator App (Google Authenticator, Authy)</option>
                                        <option value="hardware-token">Hardware Token</option>
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* This is the Trusted Contact */}
                        <div className="border-t pt-6">
                            <h5 className="font-medium text-gray-900 mb-4">Trusted Contact Information</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Trusted Contact Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={accountSetup.trustedContactName}
                                        onChange={(e) => handleAccountSetupChange('trustedContactName', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter trusted contact name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Relationship *
                                    </label>
                                    <select
                                        value={accountSetup.trustedContactRelationship}
                                        onChange={(e) => handleAccountSetupChange('trustedContactRelationship', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Select relationship</option>
                                        <option value="spouse">Spouse</option>
                                        <option value="parent">Parent</option>
                                        <option value="child">Child</option>
                                        <option value="sibling">Sibling</option>
                                        <option value="friend">Friend</option>
                                        <option value="attorney">Attorney</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        value={accountSetup.trustedContactPhone}
                                        onChange={(e) => handleAccountSetupChange('trustedContactPhone', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={accountSetup.trustedContactEmail}
                                        onChange={(e) => handleAccountSetupChange('trustedContactEmail', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter email address"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <h5 className="font-medium text-green-900 mb-2">Account Setup Complete</h5>
                            <p className="text-sm text-green-800">
                                Your account will be created with the selected settings. You'll receive a confirmation email
                                once your account is activated and ready for use.
                            </p>
                        </div>
                    </div>
                )}

                {/* Step 6: Account Creation Completed */}
                {currentStep === 6 && (
                    <div className="text-center space-y-8">
                        <div className="flex justify-center">
                            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                                <Check size={48} className="text-green-600" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                🎉 Account Created Successfully!
                            </h3>
                            <p className="text-lg text-gray-600 mb-6">
                                Welcome to Relentless Returns! Your investment account has been set up and is ready to use.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
                            <h4 className="font-semibold text-gray-900 mb-4">What's Next?</h4>
                            <div className="space-y-3 text-left">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <span className="text-xs font-bold text-blue-600">1</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Verify Your Email</p>
                                        <p className="text-sm text-gray-600">Check your inbox for a verification email and click the link to activate your account.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <span className="text-xs font-bold text-blue-600">2</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Fund Your Account</p>
                                        <p className="text-sm text-gray-600">Add funds to your account to start investing. You can link your bank account or transfer existing investments.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <span className="text-xs font-bold text-blue-600">3</span>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Start Investing</p>
                                        <p className="text-sm text-gray-600">Explore our investment options and create your first portfolio based on your risk profile and goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
                            <h4 className="font-semibold text-blue-900 mb-2">Account Summary</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-blue-700 font-medium">Account Type:</span>
                                    <p className="text-blue-800 capitalize">{accountSetup.accountType.replace('-', ' ')}</p>
                                </div>
                                <div>
                                    <span className="text-blue-700 font-medium">Risk Profile:</span>
                                    <p className="text-blue-800 capitalize">{riskAssessment.riskProfile}</p>
                                </div>
                                <div>
                                    <span className="text-blue-700 font-medium">Investment Goal:</span>
                                    <p className="text-blue-800 capitalize">{investmentGoals.investmentGoals.replace('-', ' ')}</p>
                                </div>
                                <div>
                                    <span className="text-blue-700 font-medium">Timeframe:</span>
                                    <p className="text-blue-800 capitalize">{investmentGoals.investmentTimeframe.replace('-', ' ')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                                onClick={() => {

                                    alert('Redirecting to dashboard...');
                                }}
                            >
                                Go to Dashboard
                            </button>
                            <p className="text-sm text-gray-500">
                                Need help? Contact our support team at support@relentlessreturns.com
                            </p>
                        </div>
                    </div>
                )}


                {currentStep !== 6 && (
                    <div className="flex justify-between items-center mt-8">
                        <button
                            className="text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={currentStep === 1}
                            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        >
                            Previous
                        </button>
                        <button
                            className={`px-6 py-2 rounded-lg transition-colors flex items-center gap-2 ${!isCurrentStepValid()
                                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                            disabled={!isCurrentStepValid()}
                            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                        >
                            {currentStep === steps.length - 1 ? 'Complete' : 'Continue'}
                            <ArrowRight size={16} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default OnboardingStepper;