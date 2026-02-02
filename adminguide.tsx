
import React from 'react';
import { Rocket, Globe, Zap, CheckCircle2, Award, ExternalLink, ShieldCheck, BarChart3, ChevronRight, Share2, AlertTriangle, RefreshCw } from 'lucide-react';

const AdminGuide: React.FC = () => {
  return (
    <div className="py-16 bg-white min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Celebration Header */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[3rem] p-12 text-white mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10">
            <Award size={300} />
          </div>
          <div className="relative z-10 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} className="text-green-400" />
              <span>Deployment Active</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              MIT Website <span className="text-blue-300">Manager</span>
            </h1>
            <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mb-8">
              यहाँ से आप अपनी वेबसाइट की सेटिंग्स और समस्याओं को ठीक कर सकते हैं।
            </p>
          </div>
        </div>

        {/* TROUBLESHOOTING SECTION */}
        <div className="bg-amber-50 border border-amber-200 rounded-[2.5rem] p-8 mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <AlertTriangle className="text-amber-600" size={28} />
            <h2 className="text-2xl font-black text-amber-900">White Screen आ रही है?</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl flex items-start space-x-4 shadow-sm">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600 font-bold">1</div>
              <p className="text-gray-700 text-sm">
                <b>Environment Variables चेक करें:</b> Vercel डैशबोर्ड पर जाएँ, Settings > Environment Variables में देखें कि <code>API_KEY</code> सही से डली है या नहीं।
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl flex items-start space-x-4 shadow-sm">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600 font-bold">2</div>
              <p className="text-gray-700 text-sm">
                <b>Redeploy करें:</b> अगर आपने API_KEY बाद में डाली है, तो Vercel में <b>"Deployments"</b> टैब पर जाकर सबसे ऊपर वाले वर्जन के बगल में 3 डॉट्स पर क्लिक करें और <b>"Redeploy"</b> चुनें।
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl flex items-start space-x-4 shadow-sm">
              <div className="bg-amber-100 p-2 rounded-lg text-amber-600 font-bold">3</div>
              <p className="text-gray-700 text-sm">
                <b>Browser Cache साफ़ करें:</b> कभी-कभी पुराना कोड ब्राउज़र में फंसा रहता है। <code>Ctrl + F5</code> दबाकर रिफ्रेश करें।
              </p>
            </div>
          </div>
        </div>

        {/* Standard Dashboard Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-black mb-4 text-gray-900">Add Custom Domain</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              अगर आप <code>.com</code> डोमेन जोड़ना चाहते हैं, तो Vercel पर <b>"Add Domain"</b> बटन का उपयोग करें।
            </p>
            <a href="https://vercel.com/docs/concepts/projects/domains" target="_blank" className="text-purple-600 font-bold text-sm flex items-center hover:underline">
              Tutorial <ChevronRight size={16} />
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-black mb-4 text-gray-900">Redeploy Site</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              किसी भी बदलाव के बाद वेबसाइट को रिफ्रेश करने के लिए Redeploy बटन का उपयोग करें।
            </p>
            <button onClick={() => window.location.reload()} className="text-blue-600 font-bold text-sm flex items-center hover:underline">
              <RefreshCw size={14} className="mr-1" /> Refresh Now
            </button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs font-medium uppercase tracking-[0.2em]">Website Managed by Neeraj Kumar @ MIT</p>
        </div>
      </div>
    </div>
  );
};

export default AdminGuide;
