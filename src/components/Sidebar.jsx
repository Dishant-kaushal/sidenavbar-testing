import {
  Home, Cpu, Mic, Tool, HardDrive, Link2, Database, Settings, LogOut,
} from 'react-feather';
import {
  SideNavBarProvider, SideNavBar,
  SideNavBarHeader, SideNavBarContent, SideNavBarFooter,
  SideNavBarGroup, SideNavBarGroupLabel,
  SideNavBarMenu, SideNavBarMenuItem, SideNavBarMenuButton,
} from '@faclon-labs/design-sdk/SideNavBar';

const BRAND = (
  <div style={{
    width: 28, height: 28, borderRadius: 6,
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 700, color: '#fff', fontSize: 13,
  }}>
    IO
  </div>
);

export default function Sidebar({ active, setActive, variant }) {
  return (
    <SideNavBarProvider
      variant={variant}
      defaultOpen={false}
      persistInCookie={false}
      style={{
        height: '100%',
        flexShrink: 0,
        '--fds-sidenav-width': '264px',
      }}
    >
      <SideNavBar collapsible="icon" style={{ height: '100%' }}>
        <SideNavBarHeader brand={BRAND} title="I/O Sense" subtitle="Faclon Labs" />

        <SideNavBarContent>
          <SideNavBarGroup>
            <SideNavBarMenu>
              {[
                { id: 'home',   icon: Home,      label: 'Home' },
                { id: 'agents', icon: Cpu,       label: 'Agents Lab' },
                { id: 'voice',  icon: Mic,       label: 'Voice' },
              ].map(({ id, icon: Icon, label }) => (
                <SideNavBarMenuItem key={id}>
                  <SideNavBarMenuButton icon={<Icon size={16} />} label={label}
                    isActive={active === id} onClick={() => setActive(id)} />
                </SideNavBarMenuItem>
              ))}
            </SideNavBarMenu>
          </SideNavBarGroup>

          <SideNavBarGroup>
            <SideNavBarGroupLabel>Connect</SideNavBarGroupLabel>
            <SideNavBarMenu>
              {[
                { id: 'tools',    icon: Tool,      label: 'Tools' },
                { id: 'memory',   icon: HardDrive, label: 'Memory' },
                { id: 'connect',  icon: Link2,     label: 'Connect' },
                { id: 'database', icon: Database,  label: 'Database' },
              ].map(({ id, icon: Icon, label }) => (
                <SideNavBarMenuItem key={id}>
                  <SideNavBarMenuButton icon={<Icon size={16} />} label={label}
                    isActive={active === id} onClick={() => setActive(id)} />
                </SideNavBarMenuItem>
              ))}
            </SideNavBarMenu>
          </SideNavBarGroup>

          <SideNavBarGroup>
            <SideNavBarMenu>
              {[
                { id: 'home2',   icon: Home, label: 'Home' },
                { id: 'agents2', icon: Cpu,  label: 'Agents Lab' },
              ].map(({ id, icon: Icon, label }) => (
                <SideNavBarMenuItem key={id}>
                  <SideNavBarMenuButton icon={<Icon size={16} />} label={label}
                    isActive={active === id} onClick={() => setActive(id)} />
                </SideNavBarMenuItem>
              ))}
            </SideNavBarMenu>
          </SideNavBarGroup>
        </SideNavBarContent>

        <SideNavBarFooter>
          <SideNavBarMenu>
            <SideNavBarMenuItem>
              <SideNavBarMenuButton icon={<Settings size={16} />} label="Settings"
                isActive={active === 'settings'} onClick={() => setActive('settings')} />
            </SideNavBarMenuItem>
            <SideNavBarMenuItem>
              <SideNavBarMenuButton icon={<LogOut size={16} />} label="Logout" onClick={() => {}} />
            </SideNavBarMenuItem>
          </SideNavBarMenu>
        </SideNavBarFooter>
      </SideNavBar>
    </SideNavBarProvider>
  );
}
