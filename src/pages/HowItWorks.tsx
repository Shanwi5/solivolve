
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
              <p className="text-lg text-gray-600 mb-8">
                Our solar estimator tool makes it easy to calculate your rooftop's solar energy potential in just a few simple steps.
              </p>
            </div>
          </div>
        </section>
        
        {/* Step by Step Guide */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-16">
                {/* Step 1 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="p-1 bg-solar-blue/10 rounded-full inline-block mb-4">
                      <span className="w-10 h-10 flex items-center justify-center bg-solar-blue rounded-full text-white font-semibold">1</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Upload Your Rooftop Image</h2>
                    <p className="text-gray-600 mb-4">
                      Start by uploading a screenshot or photo of your rooftop. You can use Google Maps, satellite imagery, or any other aerial view of your property.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>No GPS or location services required</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Supports JPG, PNG, and other common image formats</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Simple drag-and-drop interface</span>
                      </li>
                    </ul>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=500"
                        alt="Upload rooftop image" 
                        className="rounded-md w-full object-cover h-64"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1621619856624-92fdace1a732?auto=format&fit=crop&q=80&w=500"
                        alt="Draw usable solar area" 
                        className="rounded-md w-full object-cover h-64"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="p-1 bg-solar-yellow/10 rounded-full inline-block mb-4">
                      <span className="w-10 h-10 flex items-center justify-center bg-solar-yellow rounded-full text-white font-semibold">2</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Draw Usable Solar Area</h2>
                    <p className="text-gray-600 mb-4">
                      Use our interactive drawing tool to outline the areas of your roof where solar panels could be installed. You can also manually input the size if you already know it.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-yellow mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Intuitive polygon drawing tools</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-yellow mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Manual area input option available</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-yellow mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Automatic area calculation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="p-1 bg-solar-green/10 rounded-full inline-block mb-4">
                      <span className="w-10 h-10 flex items-center justify-center bg-solar-green rounded-full text-white font-semibold">3</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">View Dashboard Insights</h2>
                    <p className="text-gray-600 mb-4">
                      After outlining your roof area, our system instantly calculates and displays detailed information about your solar energy potential in an interactive dashboard.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Monthly energy generation estimates</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Financial savings projections</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-green mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Environmental impact metrics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1617469767053-8f35aaa9c6a5?auto=format&fit=crop&q=80&w=500"
                        alt="Dashboard insights" 
                        className="rounded-md w-full object-cover h-64"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1586892478025-2b5472316501?auto=format&fit=crop&q=80&w=500"
                        alt="Download PDF report" 
                        className="rounded-md w-full object-cover h-64"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="p-1 bg-solar-blue/10 rounded-full inline-block mb-4">
                      <span className="w-10 h-10 flex items-center justify-center bg-solar-blue rounded-full text-white font-semibold">4</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Download PDF Report</h2>
                    <p className="text-gray-600 mb-4">
                      Save and share a comprehensive report of your solar potential with all the details and visualizations from your analysis.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Professional PDF report format</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Includes all charts and calculations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-solar-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Perfect for sharing with solar installers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto bg-solar-blue bg-opacity-10 p-8 rounded-xl text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-6">
                Try our solar estimator tool now and discover your rooftop's solar energy potential in minutes.
              </p>
              <Button className="bg-solar-blue hover:bg-solar-darkBlue">
                <a href="/">Calculate My Solar Potential</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
