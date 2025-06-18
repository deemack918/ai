import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Marketing & Growth for Small Businesses | ai.hysky.org</title>
        <meta
          name="description"
          content="AI-powered marketing and growth solutions designed to help your small business thrive. Discover services and products tailored for your success."
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 flex flex-col items-center py-16 px-4">
        <header className="w-full max-w-3xl flex flex-col items-center mb-12">
          <img src="/logo.png" alt="ai.hysky.org Logo" className="mb-4 w-24 h-24" />
          <h1 className="text-4xl font-bold text-blue-700 text-center mb-4">
            AI Marketing & Growth for Small Businesses
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Empower your business with affordable, powerful AI services and products designed to boost your marketing, reach, and growth.
          </p>
        </header>
        <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🤖</span>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">AI Chatbots & Automation</h2>
            <p className="text-gray-600 text-center">
              Engage customers 24/7 with smart chatbots and automated responses, freeing up your time for what matters most.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">📈</span>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Smart Marketing Tools</h2>
            <p className="text-gray-600 text-center">
              AI-driven content creation, social media planning, email campaigns and more—tailored to your brand and audience.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
            <span className="text-3xl mb-2">🚀</span>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">Growth Analytics</h2>
            <p className="text-gray-600 text-center">
              Track your progress and uncover insights with easy-to-use dashboards, reports, and actionable recommendations.
            </p>
          </div>
        </section>
        <section className="w-full max-w-2xl text-center mb-10">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Why Choose ai.hysky.org?</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Affordable, no-surprise pricing</li>
            <li>✅ Fast setup and friendly support</li>
            <li>✅ Made for small businesses—no tech jargon</li>
            <li>✅ Scalable products as your business grows</li>
          </ul>
        </section>
        <section className="w-full max-w-md flex flex-col items-center">
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Get Started Today!</h4>
          <p className="text-gray-700 mb-4">
            Ready to see how AI can grow your business? Book a free consultation or try our tools now.
          </p>
          <a
            href="mailto:info@hysky.org?subject=AI%20for%20Small%20Business%20-%20Contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </section>
      </main>
      <footer className="w-full flex justify-center py-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ai.hysky.org – AI Solutions for Small Business
      </footer>
    </>
  );
}
