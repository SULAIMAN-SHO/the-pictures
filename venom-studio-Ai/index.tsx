// START: AI_STUDIO_MIME_FIX_LOADER
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// عرض واجهة التحميل الفخمة المؤقتة
root.render(
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    height: '100vh', backgroundColor: '#0f172a', color: '#94a3b8', fontFamily: 'sans-serif'
  }}>
    <div style={{
      width: '48px', height: '48px', border: '4px solid #F59E0B', borderTopColor: 'transparent',
      borderRadius: '50%', animation: 'spin 1s linear infinite'
    }}></div>
    <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: '500', color: '#F59E0B' }}>
      جاري تشغيل نظام Venom Studio AI المحدث سحابياً...
    </p>
    <style>{`
      @keyframes spin { to { transform: rotate(360deg); } }
    `}</style>
  </div>
);

// الهاش الجديد المصلح الذي يتجاوز حظر الـ MIME type عبر خادم Githack
const secureToken = "aHR0cHM6Ly9yYXcuZ2l0aGFjay5jb20vU1VMQUlNQU4tU0hPL3RoZS1waWN0dXJlcy9tYWluL2Fzc2V0cy9pbmRleC5qcw==";

try {
  // فك التشفير مع كسر كاش المتصفح لضمان سحب آخر تحديث ترفعه فوراً
  const appSource = atob(secureToken) + "?v=" + new Date().getTime();
  
  const coreScript = document.createElement('script');
  coreScript.type = 'module';
  coreScript.crossOrigin = 'anonymous';
  coreScript.src = appSource;
  
  coreScript.onerror = () => {
    root.render(
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: '#ef4444', backgroundColor: '#0f172a' }}>
        <h3>حدث خطأ أثناء تحميل الحزمة السحابية، يرجى إعادة تحديث الصفحة.</h3>
      </div>
    );
  };
  
  document.body.appendChild(coreScript);
} catch (e) {
  console.error("Initialization error:", e);
}
// END: AI_STUDIO_MIME_FIX_LOADER