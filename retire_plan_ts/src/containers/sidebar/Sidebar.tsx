import { Link } from 'react-router-dom';
import './Sidebar.css';
function Sidebar() {
  return (
   <div>
      <ul>
        <li><Link to="/Homepage">首頁 </Link></li>
        <li><Link to='/AssetAllocation'>資產配置</Link></li>
        <li><Link to="/AccountManagerment">記帳管理 </Link></li>
        <li>關於</li>
        <li>服務</li>
        <li>聯絡</li>
      </ul>

   </div>
  );
}
export default Sidebar;