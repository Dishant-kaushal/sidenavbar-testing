import { useState } from 'react';
import { CheckCircle, TrendingUp, ArrowUp, ChevronUp, ChevronDown, MoreVertical, Eye, Package, ChevronLeft, ChevronRight, Plus, Maximize2, ArrowRight, Layers, Trash2 } from 'react-feather';

const KPI_CARDS = [
  { title: 'Total Payment Volume', subtitle: 'Total Payment Volume for the current month', count: 12, value: '$ 1000', delta: 12 },
  { title: 'Total Payment Volume', subtitle: 'Total Payment Volume for the current month', count: 12, value: '$ 1000', delta: 12 },
  { title: 'Total Payment Volume', subtitle: 'Total Payment Volume for the current month', count: 12, value: '$ 1000', delta: 12 },
];

const TABLE_DATA = [
  { location: 'Mumbai',    temp: '22°C', humidity: 20, doorOpen: false, manager: 'Vivek Singh' },
  { location: 'Delhi',     temp: '18°C', humidity: 40, doorOpen: true,  manager: 'Ritvik Kumar' },
  { location: 'Bangalore', temp: '25°C', humidity: 34, doorOpen: true,  manager: 'Vivek Singh' },
  { location: 'Chennai',   temp: '20°C', humidity: 85, doorOpen: false, manager: 'Siddharth' },
  { location: 'Kolkata',   temp: '23°C', humidity: 34, doorOpen: false, manager: 'Rahul Pongde' },
];

function KpiCard({ title, subtitle, count, value, delta }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 10, padding: '16px 20px',
      border: '1px solid #e8e9eb', flex: 1, minWidth: 0,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <CheckCircle size={16} color="#6b7280" />
          <div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>{title}</span>
            <span style={{
              marginLeft: 8, fontSize: 11, fontWeight: 600, color: '#374151',
              background: '#f3f4f6', borderRadius: 4, padding: '1px 6px',
            }}>{count}</span>
          </div>
        </div>
        <span style={{
          fontSize: 11, fontWeight: 600, color: '#059669',
          background: '#ecfdf5', borderRadius: 4, padding: '2px 8px',
        }}>New</span>
      </div>
      <p style={{ fontSize: 11, color: '#9ca3af', marginBottom: 10 }}>{subtitle}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 26, fontWeight: 700, color: '#111827' }}>{value}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: 12, fontWeight: 600, color: '#059669' }}>
          <ArrowUp size={12} />
          {delta}
        </span>
      </div>
    </div>
  );
}

function StatusBadge({ open }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 12,
      background: open ? '#fef2f2' : '#ecfdf5',
      color: open ? '#dc2626' : '#059669',
      border: `1px solid ${open ? '#fecaca' : '#a7f3d0'}`,
    }}>
      {open ? 'Open' : 'Closed'}
    </span>
  );
}

function RowActions() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
      <button style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 6px', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <Package size={14} color="#6b7280" />
      </button>
      <button style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 6px', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <Eye size={14} color="#6b7280" />
      </button>
      <button style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 6px', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <MoreVertical size={14} color="#6b7280" />
      </button>
    </div>
  );
}

// ── Layout stress-test blocks ──────────────────────────────────────────────
// Each block is designed to stress a different overflow axis so the team can
// verify content stays contained in <main> and never bleeds into the sidebar.
function TestBlock({ block, onRemove }) {
  const base = {
    background: '#fff', borderRadius: 10, border: '1px solid #e8e9eb',
    padding: 16, position: 'relative',
  };

  const RemoveBtn = () => (
    <button
      onClick={onRemove}
      style={{
        position: 'absolute', top: 8, right: 8, border: 'none', background: '#fef2f2',
        color: '#dc2626', borderRadius: 6, padding: 4, cursor: 'pointer',
        display: 'flex', alignItems: 'center',
      }}
      title="Remove block"
    >
      <Trash2 size={14} />
    </button>
  );

  if (block.type === 'card') {
    return (
      <div style={base}>
        <RemoveBtn />
        <div style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>Standard Card #{block.n}</div>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>
          A normal-sized content card. Should sit cleanly inside the main area.
        </p>
      </div>
    );
  }

  if (block.type === 'wide') {
    // Intentionally very wide inner content — verifies main clips/scrolls it
    // horizontally instead of pushing the sidebar.
    return (
      <div style={{ ...base, overflowX: 'auto' }}>
        <RemoveBtn />
        <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 10 }}>
          Wide Overflow Test #{block.n}
        </div>
        <div style={{ display: 'flex', gap: 8, width: 2400 }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} style={{
              flexShrink: 0, width: 92, height: 60, borderRadius: 6,
              background: '#eef2ff', border: '1px solid #c7d2fe',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, color: '#4f46e5', fontWeight: 600,
            }}>
              col {i + 1}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 8 }}>
          2400px-wide row — should scroll inside this card, not widen the page.
        </p>
      </div>
    );
  }

  if (block.type === 'tall') {
    return (
      <div style={{ ...base, height: 360 }}>
        <RemoveBtn />
        <div style={{ fontSize: 13, fontWeight: 600, color: '#374151' }}>Tall Block #{block.n}</div>
        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 6 }}>
          360px tall — verifies vertical scroll stays inside main.
        </p>
      </div>
    );
  }

  if (block.type === 'nowrap') {
    // Long unbreakable string — classic layout-buster.
    return (
      <div style={{ ...base, overflowX: 'auto' }}>
        <RemoveBtn />
        <div style={{ fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>
          Long-String Test #{block.n}
        </div>
        <div style={{ fontSize: 12, color: '#374151', whiteSpace: 'nowrap', fontFamily: 'monospace' }}>
          {'unbreakable_token_'.repeat(20)}
        </div>
      </div>
    );
  }

  return null;
}

const BLOCK_BUTTONS = [
  { type: 'card',   label: 'Card',         icon: Plus },
  { type: 'wide',   label: 'Wide block',   icon: ArrowRight },
  { type: 'tall',   label: 'Tall block',   icon: Maximize2 },
  { type: 'nowrap', label: 'Long string',  icon: Layers },
];

export default function Dashboard() {
  const [sortDir, setSortDir] = useState('asc');
  const [testBlocks, setTestBlocks] = useState([]);

  const addBlock = (type) =>
    setTestBlocks((b) => [...b, { id: Date.now() + Math.random(), type, n: b.length + 1 }]);
  const removeBlock = (id) =>
    setTestBlocks((b) => b.filter((x) => x.id !== id));
  const clearBlocks = () => setTestBlocks([]);

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0, minHeight: 0 }}>
      {/* Layout stress-test toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
        background: '#fff', border: '1px dashed #c7d2fe', borderRadius: 10, padding: '10px 14px',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#4f46e5', marginRight: 4 }}>
          Layout test:
        </span>
        {BLOCK_BUTTONS.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            onClick={() => addBlock(type)}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '5px 12px', borderRadius: 6, border: '1px solid #e5e7eb',
              background: '#fff', cursor: 'pointer', fontSize: 12, fontWeight: 500, color: '#374151',
            }}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
        {testBlocks.length > 0 && (
          <button
            onClick={clearBlocks}
            style={{
              display: 'flex', alignItems: 'center', gap: 5, marginLeft: 'auto',
              padding: '5px 12px', borderRadius: 6, border: '1px solid #fecaca',
              background: '#fef2f2', cursor: 'pointer', fontSize: 12, fontWeight: 500, color: '#dc2626',
            }}
          >
            <Trash2 size={13} />
            Clear ({testBlocks.length})
          </button>
        )}
        <span style={{ fontSize: 11, color: '#9ca3af', flexBasis: '100%' }}>
          Add elements to confirm they stay inside the main area and never push into or overlap the sidebar.
        </span>
      </div>

      {/* Injected test blocks */}
      {testBlocks.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14, alignItems: 'start' }}>
          {testBlocks.map((block) => (
            <TestBlock key={block.id} block={block} onRemove={() => removeBlock(block.id)} />
          ))}
        </div>
      )}

      {/* KPI cards row */}
      <div style={{ display: 'flex', gap: 14 }}>
        {KPI_CARDS.map((card, i) => <KpiCard key={i} {...card} />)}
      </div>

      {/* Table card */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #e8e9eb' }}>
        {/* Table header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '16px 20px 12px' }}>
          <div>
            <h2 style={{ fontSize: 15, fontWeight: 600, color: '#111827' }}>Temperature Trend</h2>
            <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>String value</p>
          </div>
          <button style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 4, borderRadius: 6, color: '#6b7280' }}>
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderTop: '1px solid #f3f4f6' }}>
              {[
                { label: 'Location', sortable: true },
                { label: 'Temperature (°C)' },
                { label: 'Humidity (%)' },
                { label: 'Door Open' },
                { label: 'Store Manager' },
                { label: 'Header' },
              ].map(({ label, sortable }) => (
                <th key={label} style={{
                  padding: '10px 20px', textAlign: 'left',
                  fontSize: 12, fontWeight: 600, color: '#6b7280',
                  background: '#fafafa', borderBottom: '1px solid #f3f4f6',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {label}
                    {sortable && (
                      <span
                        style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', gap: 0 }}
                        onClick={() => setSortDir(d => d === 'asc' ? 'desc' : 'asc')}
                      >
                        <ChevronUp size={10} color={sortDir === 'asc' ? '#4f46e5' : '#d1d5db'} />
                        <ChevronDown size={10} color={sortDir === 'desc' ? '#4f46e5' : '#d1d5db'} style={{ marginTop: -3 }} />
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA.map((row, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}
                onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                onMouseLeave={e => e.currentTarget.style.background = ''}
              >
                <td style={{ padding: '12px 20px', fontSize: 13, color: '#374151', fontWeight: 500 }}>{row.location}</td>
                <td style={{ padding: '12px 20px', fontSize: 13, color: '#374151' }}>{row.temp}</td>
                <td style={{ padding: '12px 20px', fontSize: 13, color: '#374151' }}>{row.humidity}</td>
                <td style={{ padding: '12px 20px' }}><StatusBadge open={row.doorOpen} /></td>
                <td style={{ padding: '12px 20px', fontSize: 13, color: '#374151' }}>{row.manager}</td>
                <td style={{ padding: '12px 20px' }}><RowActions /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination footer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 20px', borderTop: '1px solid #f3f4f6',
        }}>
          <span style={{ fontSize: 12, color: '#6b7280' }}>Showing 10 of 240 [Items]</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <select style={{
              border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 24px 4px 8px',
              fontSize: 12, color: '#374151', background: '#fff', cursor: 'pointer',
              appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat', backgroundPosition: 'right 6px center',
            }}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span style={{ fontSize: 12, color: '#6b7280' }}>rows / page</span>
            <button style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 8px', background: '#fff', cursor: 'pointer', display: 'flex' }}>
              <ChevronLeft size={14} color="#6b7280" />
            </button>
            <button style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 8px', background: '#fff', cursor: 'pointer', display: 'flex' }}>
              <ChevronRight size={14} color="#6b7280" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
