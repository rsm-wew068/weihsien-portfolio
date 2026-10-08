type IconName = 'star' | 'arrow' | 'down' | 'flow';
export default function Icon({ name }: { name: IconName }) {
  return <svg className="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {name === 'star' ? <path d="M12 2v20M2 12h20M5 5l14 14M5 19L19 5"/> : name === 'down' ? <path d="M12 3v18m-7-7 7 7 7-7"/> : name === 'flow' ? <path d="M3 12c4-10 8 10 12 0l6-6m-6 0h6v6"/> : <path d="M4 20 20 4M7 4h13v13"/>}
  </svg>;
}
