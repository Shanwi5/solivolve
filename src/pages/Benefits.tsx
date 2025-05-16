
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Sun, Trees, Download, Euro } from "lucide-react";

const Benefits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Benefits of Solar Estimation</h1>
              <p className="text-lg text-gray-600">
                Our solar estimator tool offers numerous advantages over traditional solar assessment methods, making it faster and easier to evaluate your solar potential.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Why Use Our Solar Estimator?</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-1 bg-solar-blue/10 rounded-full mr-4 mt-1">
                        <span className="w-8 h-8 flex items-center justify-center bg-solar-blue rounded-full text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">No GPS or Location Needed</h3>
                        <p className="text-gray-600">
                          Unlike other tools that require access to your location or address, our estimator works with just an image, protecting your privacy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-1 bg-solar-blue/10 rounded-full mr-4 mt-1">
                        <span className="w-8 h-8 flex items-center justify-center bg-solar-blue rounded-full text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Fast and Intuitive</h3>
                        <p className="text-gray-600">
                          Get immediate results without waiting for site visits or consultations. Our image-based interface is user-friendly and efficient.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-1 bg-solar-blue/10 rounded-full mr-4 mt-1">
                        <span className="w-8 h-8 flex items-center justify-center bg-solar-blue rounded-full text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Comprehensive Insights</h3>
                        <p className="text-gray-600">
                          Beyond basic production estimates, we provide detailed analysis on savings, environmental impact, and regional incentives.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-1 bg-solar-blue/10 rounded-full mr-4 mt-1">
                        <span className="w-8 h-8 flex items-center justify-center bg-solar-blue rounded-full text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Free to Use</h3>
                        <p className="text-gray-600">
                          Our solar estimation tool is completely free, helping you make informed decisions before investing in professional services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-solar-yellow/20 rounded-full"></div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-solar-blue/20 rounded-full"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=600"
                    alt="Solar panels on a roof" 
                    className="rounded-xl shadow-lg relative z-10 w-full"
                  />
                </div>
              </div>
              
              {/* Feature Icons Section */}
              <div className="pt-8 pb-16">
                <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-solar-yellow/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Sun className="h-8 w-8 text-solar-yellow" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
                    <p className="text-gray-600">
                      Detailed analytics on energy production, cost savings, and payback period based on your specific roof.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-solar-blue/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Download className="h-8 w-8 text-solar-blue" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">PDF Reports</h3>
                    <p className="text-gray-600">
                      Generate professional reports to share with installers or keep for your records, including all calculations.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-solar-green/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Trees className="h-8 w-8 text-solar-green" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
                    <p className="text-gray-600">
                      Visualize your positive environmental contribution with metrics like CO₂ offset and equivalent trees planted.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-solar-yellow/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Euro className="h-8 w-8 text-solar-yellow" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Incentive Integration</h3>
                    <p className="text-gray-600">
                      Stay updated on government subsidies and tax credits applicable to your region to maximize savings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Environmental Impact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Environmental Benefits</h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                By harnessing solar energy, you're making a significant positive impact on our environment. Here's how our tool helps visualize that impact:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-solar-green/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-solar-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Reduced CO₂ Emissions</h3>
                  <p className="text-gray-600 text-center">
                    Our calculator shows the exact amount of carbon dioxide emissions you'll prevent by using solar energy instead of grid electricity.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-solar-blue/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-solar-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Clean Energy Generation</h3>
                  <p className="text-gray-600 text-center">
                    Visualize how many kilowatt-hours of clean, renewable energy your rooftop can produce annually without any pollution.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-solar-yellow/20 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-solar-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Tree Equivalency</h3>
                  <p className="text-gray-600 text-center">
                    See how many trees you'd need to plant to achieve the same carbon offset as your solar installation provides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Users Are Saying</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold mr-4">
                      JD
                    </div>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-gray-500">Homeowner</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "This tool helped me understand my solar potential without sharing my address or personal information. The visual dashboard made it easy to explain to my family why going solar makes sense for us."
                  </p>
                  <div className="flex mt-4">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500 font-bold mr-4">
                      JS
                    </div>
                    <div>
                      <h4 className="font-semibold">Jane Smith</h4>
                      <p className="text-sm text-gray-500">Environmental Advocate</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "I love how this tool quantifies environmental benefits. Seeing that my potential solar installation equals planting dozens of trees annually makes the impact tangible and motivating."
                  </p>
                  <div className="flex mt-4">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-solar-blue to-solar-darkBlue p-10 rounded-xl text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Try Our Solar Estimator Now</h2>
              <p className="text-xl mb-8 opacity-90">
                Start calculating your solar potential today and take the first step towards sustainable energy independence.
              </p>
              <Button 
                size="lg"
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-solar-blue"
              >
                <a href="/">Get Started</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Benefits;
