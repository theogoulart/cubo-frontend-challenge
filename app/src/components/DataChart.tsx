'use client';

export default function DataChart() {
  const data = [
    { nome: 'Carlos', sobrenome: 'Moura', participacao: 5, color: '#00BB9B' },
    { nome: 'Fernanda', sobrenome: 'Oliveira', participacao: 15, color: '#B2B4B4' },
    { nome: 'Hugo', sobrenome: 'Silva', participacao: 20, color: '#2C97DD' },
    { nome: 'Eliza', sobrenome: 'Souza', participacao: 20, color: '#9C56B8' },
    { nome: 'Anderson', sobrenome: 'Santos', participacao: 40, color: '#EA4B35' },
  ];

  // For donut chart
  const total = data.reduce((sum, d) => sum + d.participacao, 0);
  let acc = 0;
  const donutData = data.map((d) => {
    const start = acc;
    const value = (d.participacao / total) * 100;
    acc += value;
    return {
      ...d,
      startAngle: (start / 100) * 360,
      endAngle: ((start + value) / 100) * 360,
    };
  });

  // Helper to get SVG arc
  function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    return [
      'M', start.x, start.y,
      'A', r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
  }
  function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
    const rad = (angle - 90) * Math.PI / 180.0;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad)
    };
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2 uppercase">DADOS</h2>
        <p className="text-gray-600 text-center mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-32">
          {/* Table */}
          <div className="overflow-x-auto w-full md:w-auto flex-1">
            <table className="text-gray-400 min-w-[340px] border border-gray-400 text-sm mx-auto w-full">
              <thead>
                <tr>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left"></th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">Nome</th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">Sobrenome</th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">Participação</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td className="border border-gray-400 px-4 py-2">{i + 1}</td>
                    <td className="border border-gray-400 px-4 py-2">{d.nome}</td>
                    <td className="border border-gray-400 px-4 py-2">{d.sobrenome}</td>
                    <td className="border border-gray-400 px-4 py-2">{d.participacao}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Donut Chart + Legend */}
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-col items-center">
              <svg width={280} height={280} viewBox="0 0 280 280">
                <circle cx={140} cy={140} r={90} fill="none" stroke="#eee" strokeWidth={80} />
                {donutData.map((d, i) => (
                  <path
                    key={i}
                    d={describeArc(140, 140, 90, d.startAngle, d.endAngle)}
                    stroke={d.color}
                    strokeWidth={80}
                    fill="none"
                    strokeLinecap="butt"
                  />
                ))}
              </svg>
            </div>
            <div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded bg-[#2C97DD] inline-block" />
                  <span className="text-sm text-[#2C97DD] font-semibold">Hugo Silva</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded bg-[#00BB9B] inline-block" />
                  <span className="text-sm text-[#00BB9B] font-semibold">Carlos Moura</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded bg-[#9C56B8] inline-block" />
                  <span className="text-sm text-[#9C56B8] font-semibold">Eliza Souza</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded bg-[#B2B4B4] inline-block" />
                  <span className="text-sm text-[#B2B4B4] font-semibold">Fernanda Oliveira</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-6 h-6 rounded bg-[#EA4B35] inline-block" />
                  <span className="text-sm text-[#EA4B35] font-semibold">Anderson Santos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 