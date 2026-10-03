const stats = [
  { label: 'التهديدات اليوم', value: '184', delta: '+12.4%', tone: 'danger' },
  { label: 'الحوادث الموقوفة', value: '29', delta: '+8.1%', tone: 'warning' },
  { label: 'معدل اكتشاف التسلل', value: '97.8%', delta: '+2.3%', tone: 'success' },
  { label: 'التحليل الآلي', value: '14.2k', delta: '+28.0%', tone: 'info' },
];

const incidents = [
  { id: 'IDS-2841', type: 'حملة Brute Force', severity: 'High', source: '172.16.0.44', status: 'Blocked', time: '12:14', score: 92 },
  { id: 'IDS-2842', type: 'اكتشاف بيانات داخلية', severity: 'Critical', source: '10.11.8.10', status: 'Investigating', time: '12:09', score: 97 },
  { id: 'IDS-2843', type: 'نطاقات غير موثقة', severity: 'Medium', source: '198.51.100.31', status: 'Monitoring', time: '11:57', score: 76 },
  { id: 'IDS-2844', type: 'تجاوز صلاحيات', severity: 'High', source: '203.0.113.9', status: 'Blocked', time: '11:43', score: 91 },
  { id: 'IDS-2845', type: 'تحليل حركة مشبوهة', severity: 'Low', source: '192.168.2.82', status: 'Resolved', time: '11:18', score: 64 },
];

const alerts = [
  { title: 'اكتشاف انتهال متكرر', detail: 'محاولة تسجيل دخول متعددة من مواقع مختلفة خلال 3 دقائق.', channel: 'SOC', time: 'منذ 8 دقائق' },
  { title: 'تدفق بيانات غير معتاد', detail: 'ارتفاع بنسبة 210% في حركة الخروج من خوادم الإنتاج.', channel: 'AI Engine', time: 'منذ 17 دقيقة' },
  { title: 'حالة خادم حرجة', detail: 'تم اكتشاف وصلات خارجية غير مصرح بها على عقدة API.', channel: 'Network', time: 'منذ 24 دقيقة' },
];

const threatMap = [
  { region: 'الشرق الأوسط', attacks: 34, risk: 'High' },
  { region: 'أوروبا', attacks: 21, risk: 'Medium' },
  { region: 'آسيا', attacks: 46, risk: 'Critical' },
  { region: 'أمريكا الشمالية', attacks: 18, risk: 'Low' },
];

const statusColors = {
  Critical: 'critical',
  High: 'high',
  Medium: 'medium',
  Low: 'low',
  Blocked: 'blocked',
  Investigating: 'investigating',
  Monitoring: 'monitoring',
  Resolved: 'resolved',
};

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">AI</div>
          <div>
            <h1>AI-IDS</h1>
            <span>6.0</span>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">لوحة التحكم</button>
          <button className="nav-item">الحوادث</button>
          <button className="nav-item">التدقيق</button>
          <button className="nav-item">التحليلات</button>
          <button className="nav-item">التكوين</button>
        </nav>

        <div className="mini-card">
          <div className="mini-label">نظام المراقبة</div>
          <div className="mini-status">
            <span className="dot dot-live" /> التشغيل الطبيعي
          </div>
          <small>آخر فحص: قبل 42 ثانية</small>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">لوحة كشف التسلل</p>
            <h2>منصة المراقبة الذكية</h2>
          </div>
          <div className="top-actions">
            <button className="secondary-btn">تصدير</button>
            <button className="primary-btn">بدء المسح</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((item) => (
            <article key={item.label} className={`stat-card ${item.tone}`}>
              <div className="stat-head">
                <span>{item.label}</span>
                <span className="delta">{item.delta}</span>
              </div>
              <strong>{item.value}</strong>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel incidents-panel">
            <div className="panel-header">
              <h3>الحوادث الأخيرة</h3>
              <button className="text-btn">عرض الكل</button>
            </div>

            <div className="incident-table">
              <div className="table-head">
                <span>الحادث</span>
                <span>المصدر</span>
                <span>الحالة</span>
                <span>الوزن</span>
              </div>

              {incidents.map((incident) => (
                <div className="table-row" key={incident.id}>
                  <div className="incident-main">
                    <strong>{incident.id}</strong>
                    <small>{incident.type}</small>
                  </div>
                  <span>{incident.source}</span>
                  <span className={`badge ${statusColors[incident.status]}`}>{incident.status}</span>
                  <div className="score-box">
                    <span className={`score ${statusColors[incident.severity]}`}>{incident.score}</span>
                    <small>{incident.severity}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel alerts-panel">
            <div className="panel-header">
              <h3>تنبيهات الذكاء الاصطناعي</h3>
              <span className="chip chip-live">Live</span>
            </div>

            <div className="alert-list">
              {alerts.map((alert) => (
                <div className="alert-item" key={alert.title}>
                  <div className="alert-icon">!</div>
                  <div>
                    <h4>{alert.title}</h4>
                    <p>{alert.detail}</p>
                    <div className="meta-row">
                      <span>{alert.channel}</span>
                      <span>{alert.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel map-panel">
            <div className="panel-header">
              <h3>خريطة التهديدات</h3>
            </div>

            <div className="threat-map">
              {threatMap.map((item) => (
                <div className="region-card" key={item.region}>
                  <div className="region-head">
                    <strong>{item.region}</strong>
                    <span className={`risk ${item.risk.toLowerCase()}`}>{item.risk}</span>
                  </div>
                  <p>{item.attacks} هجوم</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel summary-panel">
            <div className="panel-header">
              <h3>ملخص النظم</h3>
            </div>
            <div className="summary-list">
              <div>
                <span>خوادم حماية</span>
                <strong>94 / 98</strong>
              </div>
              <div>
                <span>اعتمادية الأنظمة</span>
                <strong>99.21%</strong>
              </div>
              <div>
                <span>حجم تدفق الشبكة</span>
                <strong>1.4 Tbps</strong>
              </div>
              <div>
                <span>تحديثات الذكاء</span>
                <strong>مفعل</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
