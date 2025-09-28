import React, { useState } from 'react';
import { IdCard, Camera, Phone, Upload, Check, AlertCircle } from 'lucide-react';

interface VerificationStep {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    required: boolean;
}

const IdentityVerification: React.FC = () => {
    const [verificationSteps, setVerificationSteps] = useState<VerificationStep[]>([
        {
            id: 'id-upload',
            title: 'Government ID',
            description: 'Upload driver\'s license or passport',
            completed: false,
            required: true
        },
        {
            id: 'selfie',
            title: 'Photo Verification',
            description: 'Take a selfie to verify your identity',
            completed: false,
            required: true
        },
        {
            id: 'phone',
            title: 'Phone Verification',
            description: 'Verify your phone number with SMS code',
            completed: false,
            required: true
        }
    ]);

    const handleStepComplete = (stepId: string) => {
        setVerificationSteps(steps =>
            steps.map(step =>
                step.id === stepId ? { ...step, completed: true } : step
            )
        );
    };

    const allRequiredCompleted = verificationSteps
        .filter(step => step.required)
        .every(step => step.completed);

    return (
        <div className="space-y-6">
            <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IdCard className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Verify Your Identity</h3>
                <p className="text-gray-600">
                    Help us keep your account secure by verifying your identity
                </p>
            </div>

            {/* This is the Verification Steps */}
            <div className="space-y-4">
                {verificationSteps.map((step) => (
                    <div
                        key={step.id}
                        className={`border rounded-lg p-4 transition-all ${step.completed
                            ? 'border-green-200 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                            }`}
                    >
                        <div className="flex items-start space-x-4">
                            {/* This is the Step Icon */}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.completed
                                ? 'bg-green-500'
                                : 'bg-blue-100'
                                }`}>
                                {step.completed ? (
                                    <Check className="w-5 h-5 text-white" />
                                ) : step.id === 'id-upload' ? (
                                    <IdCard className="w-5 h-5 text-blue-600" />
                                ) : step.id === 'selfie' ? (
                                    <Camera className="w-5 h-5 text-blue-600" />
                                ) : (
                                    <Phone className="w-5 h-5 text-blue-600" />
                                )}
                            </div>

                            {/* This is the Step Content */}
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                    <h4 className="font-medium text-gray-900">{step.title}</h4>
                                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                                        Required
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm mb-3">{step.description}</p>

                                {/* This is the Step Actions */}
                                {!step.completed && (
                                    <div>
                                        {step.id === 'id-upload' && (
                                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center">
                                                <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                                                <button
                                                    onClick={() => handleStepComplete('id-upload')}
                                                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                                                >
                                                    Upload ID
                                                </button>
                                            </div>
                                        )}

                                        {step.id === 'selfie' && (
                                            <div className="text-center">
                                                <button
                                                    onClick={() => handleStepComplete('selfie')}
                                                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                                                >
                                                    Take Selfie
                                                </button>
                                            </div>
                                        )}

                                        {step.id === 'phone' && (
                                            <div className="flex gap-2">
                                                <input
                                                    type="text"
                                                    placeholder="Enter SMS code"
                                                    className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500"
                                                />
                                                <button
                                                    onClick={() => handleStepComplete('phone')}
                                                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                                                >
                                                    Verify
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* This is the Completed State */}
                                {step.completed && (
                                    <div className="flex items-center text-green-600">
                                        <Check className="w-4 h-4 mr-1" />
                                        <span className="text-sm font-medium">Verified</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* This is the Progress Indicator */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                        {verificationSteps.filter(s => s.completed).length} of {verificationSteps.length} completed
                    </span>
                    {allRequiredCompleted && (
                        <div className="flex items-center text-green-600">
                            <Check className="w-4 h-4 mr-1" />
                            <span className="text-sm font-medium">Ready to continue</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default IdentityVerification;