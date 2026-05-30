import { Home, Search, Bell, Grid, Plus, Sidebar as SidebarIcon } from 'react-feather';

export default function TopNav({ variant, onVariantChange }) {
  return (
    <header style={{
      height: 56, background: '#f5f6f8', borderBottom: '1px solid #e8e9eb',
      display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px',
      flexShrink: 0,
    }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Home size={16} color="#6b7280" />
        <span style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>
          Store Level Dashboard
        </span>
      </div>

      {/* Search */}
      <div style={{
        flex: 1, maxWidth: 480, position: 'relative',
        display: 'flex', alignItems: 'center',
      }}>
        <Search size={14} color="#9ca3af" style={{ position: 'absolute', left: 10 }} />
        <input
          placeholder="Search..."
          style={{
            width: '100%', height: 34, paddingLeft: 32, paddingRight: 12,
            border: '1px solid #e5e7eb', borderRadius: 6,
            fontSize: 13, color: '#374151', background: '#fff',
            outline: 'none',
          }}
        />
      </div>

      {/* Right icons */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
        {/* Variant toggle */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 2,
          padding: 2, borderRadius: 8, background: '#e8e9eb',
        }}>
          {[
            { id: 'push', label: 'Push' },
            { id: 'floating', label: 'Overlay' },
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onVariantChange(id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 5,
                padding: '5px 12px', borderRadius: 6, border: 'none',
                cursor: 'pointer', fontSize: 12, fontWeight: 600,
                background: variant === id ? '#fff' : 'transparent',
                color: variant === id ? '#111827' : '#6b7280',
                boxShadow: variant === id ? '0 1px 2px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <SidebarIcon size={13} />
              {label}
            </button>
          ))}
        </div>

        {/* Add Device button */}
        <button style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 14px', borderRadius: 6,
          background: '#4f46e5', color: '#fff',
          border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500,
        }}>
          <Plus size={14} />
          Add Device
        </button>
      </div>
    </header>
  );
}
