import React, { useState, useEffect } from 'react';
import { Upload, Palette, Layers, Package } from 'lucide-react';
import Button from '../components/ui/Button';
import Heading from '../components/ui/Heading';

const CustomDesignPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [designType, setDesignType] = useState('');
  const [colorScheme, setColorScheme] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  
  useEffect(() => {
    document.title = 'Custom Design | ResinPalette';
    window.scrollTo(0, 0);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
    }
  };

  const designTypes = [
    { id: 'coaster', name: 'Coaster Set', description: 'Set of 4 custom designed coasters' },
    { id: 'tray', name: 'Serving Tray', description: 'Custom serving tray with your design' },
    { id: 'wallart', name: 'Wall Art', description: 'Statement piece for your wall' },
    { id: 'table', name: 'Table Top', description: 'Custom resin table top design' }
  ];

  const colorSchemes = [
    { id: 'ocean', name: 'Ocean Breeze', colors: ['#1B4965', '#62B6CB', '#CAE9F5'] },
    { id: 'sunset', name: 'Sunset Glow', colors: ['#FF7B00', '#FFB627', '#FFF1D0'] },
    { id: 'forest', name: 'Forest Dream', colors: ['#2D5A27', '#A4C3B2', '#EAF4F4'] },
    { id: 'galaxy', name: 'Galaxy Night', colors: ['#2C1B47', '#6B4E71', '#E6E6FA'] }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Heading
          title="Create Your Custom Design"
          subtitle="Bring your vision to life with our custom resin art design service"
          centered
        />

        <div className="max-w-4xl mx-auto mt-12">
          {/* Progress Steps */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  step <= activeStep ? 'bg-amber-500 text-white' : 'bg-neutral-200'
                }`}>
                  {step}
                </div>
                <span className="text-sm text-neutral-600">
                  {step === 1 && 'Choose Type'}
                  {step === 2 && 'Colors'}
                  {step === 3 && 'Inspiration'}
                  {step === 4 && 'Review'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Choose Design Type */}
          {activeStep === 1 && (
            <div className="space-y-8">
              <h2 className="text-xl font-medium">Select Your Design Type</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {designTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setDesignType(type.id)}
                    className={`p-6 rounded-lg border-2 text-left transition-all ${
                      designType === type.id
                        ? 'border-amber-500 bg-amber-50'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <h3 className="font-medium text-lg">{type.name}</h3>
                    <p className="text-neutral-600 mt-2">{type.description}</p>
                  </button>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <Button
                  variant="primary"
                  onClick={() => setActiveStep(2)}
                  disabled={!designType}
                >
                  Continue to Colors
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Color Scheme */}
          {activeStep === 2 && (
            <div className="space-y-8">
              <h2 className="text-xl font-medium">Choose Your Color Scheme</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {colorSchemes.map((scheme) => (
                  <button
                    key={scheme.id}
                    onClick={() => setColorScheme(scheme.colors)}
                    className={`p-6 rounded-lg border-2 transition-all ${
                      colorScheme === scheme.colors
                        ? 'border-amber-500'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <h3 className="font-medium mb-3">{scheme.name}</h3>
                    <div className="flex gap-2">
                      {scheme.colors.map((color) => (
                        <div
                          key={color}
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setActiveStep(1)}>
                  Back
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setActiveStep(3)}
                  disabled={colorScheme.length === 0}
                >
                  Continue to Inspiration
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Upload Inspiration */}
          {activeStep === 3 && (
            <div className="space-y-8">
              <h2 className="text-xl font-medium">Share Your Inspiration</h2>
              <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 text-center">
                <input
                  type="file"
                  id="inspiration"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                <label
                  htmlFor="inspiration"
                  className="cursor-pointer block"
                >
                  <Upload size={48} className="mx-auto text-neutral-400 mb-4" />
                  <p className="text-neutral-600">
                    Drop your inspiration image here or click to upload
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">
                    Accepted formats: JPG, PNG (max 5MB)
                  </p>
                </label>
                {uploadedImage && (
                  <p className="mt-4 text-green-600">
                    Uploaded: {uploadedImage.name}
                  </p>
                )}
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setActiveStep(2)}>
                  Back
                </Button>
                <Button
                  variant="primary"
                  onClick={() => setActiveStep(4)}
                >
                  Review Design
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {activeStep === 4 && (
            <div className="space-y-8">
              <h2 className="text-xl font-medium">Review Your Custom Design</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Package className="text-amber-500 shrink-0" />
                    <div>
                      <h3 className="font-medium">Design Type</h3>
                      <p className="text-neutral-600">
                        {designTypes.find(t => t.id === designType)?.name}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Palette className="text-amber-500 shrink-0" />
                    <div>
                      <h3 className="font-medium">Color Scheme</h3>
                      <div className="flex gap-2 mt-2">
                        {colorScheme.map((color) => (
                          <div
                            key={color}
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {uploadedImage && (
                    <div className="flex items-start gap-4">
                      <Layers className="text-amber-500 shrink-0" />
                      <div>
                        <h3 className="font-medium">Inspiration Image</h3>
                        <p className="text-neutral-600">{uploadedImage.name}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 p-4 bg-neutral-50 rounded-md">
                  <h3 className="font-medium mb-2">Next Steps</h3>
                  <p className="text-neutral-600">
                    Our artisans will review your design preferences and contact you within 24-48 hours with a custom quote and timeline for your piece.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <Button variant="outline" onClick={() => setActiveStep(3)}>
                  Back
                </Button>
                <Button variant="primary">
                  Submit Design Request
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomDesignPage;