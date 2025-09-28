import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

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

    const steps = [
        { id: 1, title: "Personal Info", description: "Tell us about yourself", completed: false },
        { id: 2, title: "Risk Assessment", description: "Understand your risk tolerance", completed: false },
        { id: 3, title: "Investment Goals", description: "Set your financial objectives", completed: false },
        { id: 4, title: "Account Setup", description: "Complete your account", completed: false },
    ];

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

    const isStep2Valid = () => {
        return riskAssessment.riskTolerance.trim() !== '' &&
            riskAssessment.riskProfile.trim() !== '' &&
            riskAssessment.riskPreferences.trim() !== '' &&
            riskAssessment.riskCapacity.trim() !== '' &&
            riskAssessment.riskHorizon.trim() !== '' &&
            riskAssessment.riskGoals.trim() !== '';
    };

    const isStep3Valid = () => {
        return investmentGoals.investmentGoals.trim() !== '' &&
            investmentGoals.investmentTimeframe.trim() !== '' &&
            investmentGoals.investmentRiskLevel.trim() !== '' &&
            investmentGoals.investmentReturnExpectations.trim() !== '' &&
            investmentGoals.investmentLiquidityNeeds.trim() !== '';
    };

    const isStep4Valid = () => {
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

    return (
        <div className="bg-white rounded-xl shadow-lg p-5 max-w-100px">
            {/* Welcome Section */}
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to InvestPro</h2>
                <p className="text-gray-600">Let's get your investment account set up in just a few steps</p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center mb-8">
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        <div className="flex flex-col items-center flex-1">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${step.id < currentStep
                                ? 'bg-green-500 text-white'
                                : step.id === currentStep
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-200 text-gray-600'
                                }`}>
                                {step.id < currentStep ? <Check size={18} /> : step.id}
                            </div>

                            {/* Step labels */}
                            <div className="text-center mt-3">
                                <div className={`text-sm font-medium ${step.id <= currentStep ? 'text-gray-900' : 'text-gray-600'
                                    }`}>
                                    {step.title}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{step.description}</div>
                            </div>
                        </div>

                        {/* Connection lines */}
                        {index < steps.length - 1 && (
                            <div className={`flex-1 h-0.5 mx-2 ${step.id < currentStep ? 'bg-green-500' : 'bg-gray-200'
                                }`} />
                        )}
                    </React.Fragment>
                ))}
            </div>
            {/* Current Step Content */}
            <div className="bg-gray-50 rounded-lg p-6 min-h-[600px]">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {steps[currentStep - 1]?.title}
                </h4>
                <p className="text-gray-600 mb-6">
                    {steps[currentStep - 1]?.description}
                </p>

                {/* Step 1: Personal Info Form */}
                {currentStep === 1 && (
                    <div className="space-y-6">
                        {/* Required Fields */}
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Residential Address *
                            </label>
                            <textarea
                                value={personalInfo.residentialAddress}
                                onChange={(e) => handleInputChange('residentialAddress', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={3}
                                placeholder="Enter your residential address"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Social Security Number or equivalent national ID *
                            </label>
                            <input
                                type="text"
                                value={personalInfo.socialSecurityNumber}
                                onChange={(e) => handleInputChange('socialSecurityNumber', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your SSN or national ID"
                            />
                        </div>

                        {/* Optional Fields */}
                        <div className="border-t pt-6">
                            <h5 className="text-lg font-medium text-gray-900 mb-4">Optional Information</h5>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Name (if different from Legal Name)
                                    </label>
                                    <input
                                        type="text"
                                        value={personalInfo.preferredName}
                                        onChange={(e) => handleInputChange('preferredName', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your preferred name"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={personalInfo.useDifferentMailingAddress}
                                            onChange={(e) => handleInputChange('useDifferentMailingAddress', e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm font-medium text-gray-700">
                                            Mailing Address is different from residential address
                                        </span>
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
                                            rows={3}
                                            placeholder="Enter your mailing address"
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
                        </div>
                    </div>
                )}

                {/* Step 2: Risk Assessment Form */}
                {currentStep === 2 && (
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    <option value="long-term">Long-term (7-15 years)</option>
                                    <option value="very-long-term">Very long-term (15+ years)</option>
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
                                    <option value="retirement">Retirement Planning</option>
                                    <option value="education">Education Funding</option>
                                    <option value="home-purchase">Home Purchase</option>
                                    <option value="wealth-building">Wealth Building</option>
                                    <option value="income-replacement">Income Replacement</option>
                                </select>
                            </div>
                        </div>

                        {/* Risk Assessment Summary */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                            <h5 className="text-lg font-medium text-blue-900 mb-2">Risk Assessment Summary</h5>
                            <div className="text-sm text-blue-800">
                                <p>Based on your selections, we'll recommend investment strategies that align with your risk profile and financial goals.</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Investment Goals Form */}
                {currentStep === 3 && (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Investment Goals *
                            </label>
                            <textarea
                                value={investmentGoals.investmentGoals}
                                onChange={(e) => handleInvestmentGoalsChange('investmentGoals', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows={3}
                                placeholder="Describe your investment goals (e.g., retirement, education, home purchase)"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Investment Timeframe *
                                </label>
                                <select
                                    value={investmentGoals.investmentTimeframe}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentTimeframe', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select timeframe</option>
                                    <option value="short-term">Short-term (1-3 years)</option>
                                    <option value="medium-term">Medium-term (3-7 years)</option>
                                    <option value="long-term">Long-term (7-15 years)</option>
                                    <option value="very-long-term">Very long-term (15+ years)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Risk Level *
                                </label>
                                <select
                                    value={investmentGoals.investmentRiskLevel}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentRiskLevel', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select risk level</option>
                                    <option value="conservative">Conservative</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="aggressive">Aggressive</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Return Expectations *
                                </label>
                                <select
                                    value={investmentGoals.investmentReturnExpectations}
                                    onChange={(e) => handleInvestmentGoalsChange('investmentReturnExpectations', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select return expectations</option>
                                    <option value="low">Low (2-4% annually)</option>
                                    <option value="moderate">Moderate (4-7% annually)</option>
                                    <option value="high">High (7-12% annually)</option>
                                    <option value="very-high">Very High (12%+ annually)</option>
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
                                    <option value="">Select liquidity needs</option>
                                    <option value="high">High (need quick access to funds)</option>
                                    <option value="medium">Medium (some flexibility needed)</option>
                                    <option value="low">Low (can lock funds for long periods)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 4: Account Setup Form */}
                {currentStep === 4 && (
                    <div className="space-y-6">
                        {/* Account Information */}
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
                                    <option value="individual">Individual</option>
                                    <option value="joint">Joint</option>
                                    <option value="retirement">Retirement (IRA/401k)</option>
                                    <option value="trust">Trust</option>
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

                        {/* Security Questions */}
                        <div className="border-t pt-6">
                            <h5 className="text-lg font-medium text-gray-900 mb-4">Security Questions *</h5>
                            <div className="space-y-6">
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
                                        <option value="mother-maiden">What is your mother's maiden name?</option>
                                        <option value="first-pet">What was the name of your first pet?</option>
                                        <option value="birth-city">What city were you born in?</option>
                                        <option value="first-school">What was the name of your first school?</option>
                                        <option value="favorite-teacher">Who was your favorite teacher?</option>
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
                                        <option value="">Select a different security question</option>
                                        <option value="father-middle">What is your father's middle name?</option>
                                        <option value="childhood-friend">What was your childhood best friend's name?</option>
                                        <option value="first-car">What was the make and model of your first car?</option>
                                        <option value="street-grew-up">What street did you grow up on?</option>
                                        <option value="favorite-movie">What is your favorite movie?</option>
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

                        {/* Two-Factor Authentication */}
                        <div className="border-t pt-6">
                            <h5 className="text-lg font-medium text-gray-900 mb-4">Two-Factor Authentication</h5>
                            <div className="space-y-6">
                                <div>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={accountSetup.twoFactorEnabled}
                                            onChange={(e) => handleAccountSetupChange('twoFactorEnabled', e.target.checked)}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <span className="text-sm font-medium text-gray-700">
                                            Enable Two-Factor Authentication (Recommended)
                                        </span>
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
                                            <option value="authenticator">Authenticator App (Google Authenticator, Authy)</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Trusted Contacts */}
                        <div className="border-t pt-6">
                            <h5 className="text-lg font-medium text-gray-900 mb-4">Trusted Contact (for account recovery) *</h5>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Contact Name *
                                        </label>
                                        <input
                                            type="text"
                                            value={accountSetup.trustedContactName}
                                            onChange={(e) => handleAccountSetupChange('trustedContactName', e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="Enter trusted contact's name"
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
                                            <option value="sibling">Sibling</option>
                                            <option value="child">Child</option>
                                            <option value="friend">Friend</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        </div>
                    </div>
                )}

                <div className="flex justify-between items-center mt-8">
                    <button
                        className="text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentStep === 1}
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    >
                        Previous
                    </button>
                    <button
                        className={`px-6 py-2 rounded-lg transition-colors flex items-center gap-2 ${(currentStep === 1 && !isStep1Valid()) || (currentStep === 2 && !isStep2Valid()) || (currentStep === 3 && !isStep3Valid()) || (currentStep === 4 && !isStep4Valid())
                            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        disabled={(currentStep === 1 && !isStep1Valid()) || (currentStep === 2 && !isStep2Valid()) || (currentStep === 3 && !isStep3Valid()) || (currentStep === 4 && !isStep4Valid())}
                        onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                    >
                        Continue
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OnboardingStepper;