import React, { useState } from 'react';
import { Hand, Type, FileVideo } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import SignToText from './SignToText';
import TextToSign from './TextToSign';
import React, { useState } from 'react';
import { Hand, Type, FileVideo } from 'lucide-react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import SignToText from './SignToText';
import TextToSign from './TextToSign';

@@ -90,6 +91,7 @@ const App: React.FC = () => {
<span>SECURE CONNECTION</span>
</div>
</footer>
      <SpeedInsights />
</div>
);
};

type Tab = 'sign-to-text' | 'text-to-sign';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('sign-to-text');

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg shadow-lg shadow-blue-500/20">
              <Hand className="w-6 h-6 text-white" />
            </div>
            <div>
                <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-100 to-slate-300 bg-clip-text text-transparent">
                SignBridge AI
                </h1>
                <p className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Bi-Directional Translation System</p>
            </div>
          </div>
          
          <nav className="flex gap-1 bg-slate-900/50 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('sign-to-text')}
              className={`px-5 py-2 rounded-md text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'sign-to-text'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Hand className="w-4 h-4" />
              Sign to Text
            </button>
            <button
              onClick={() => setActiveTab('text-to-sign')}
              className={`px-5 py-2 rounded-md text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'text-to-sign'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Type className="w-4 h-4" />
              Text to Sign
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-1 min-h-[600px] shadow-2xl backdrop-blur-sm overflow-hidden relative ring-1 ring-white/5">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="p-6 h-full">
            {activeTab === 'sign-to-text' && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <SignToText />
              </div>
            )}

            {activeTab === 'text-to-sign' && (
              <div className="animate-in fade-in zoom-in-95 duration-500">
                <TextToSign />
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 py-4 text-center text-slate-500 text-xs bg-slate-950/80 backdrop-blur-sm font-mono">
        <div className="flex items-center justify-center gap-4">
            <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                SYSTEM_READY
            </span>
            <span className="text-slate-700">|</span>
            <span>V 2.4.0-RC</span>
            <span className="text-slate-700">|</span>
            <span>SECURE CONNECTION</span>
        </div>
      </footer>
      <SpeedInsights />
    </div>
  );
};

export default App;
