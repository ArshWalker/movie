import "./Header.css";
const Header = () => {
  return (
    <div>
    <div onClick={() => window.scroll(0,0)} className="sign">
      {/* <span  onClick={() => window.scroll(0,0)} className="header">🎥 Movie World 🎬</span> */}
      <span  className="header" class="fast-flicker">Mov</span>ie <span class="flicker">Wor</span>ld
    </div>
    </div>
  );
};

export default Header;
