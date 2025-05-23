import TransactionTable from './TransactionTable/index';
import { Transaction } from '../../../../../types/wallet.ts';
import {SidePanel} from './SidePanel/index.tsx';
interface WalletMainProps {
  transactions: Transaction[];
}
const WalletMain = ({ transactions }: WalletMainProps) => {
  return (
    <main className='main flex-1 pb-10'>
      <div className="container mx-auto flex justify-center w-full">
          <div className="wallet-activity w-2/3 rounded-lg p-5 border-gray-300 border-2">
            <h2 className="text-2xl pb-2">Wallet Activity</h2>
            <p className="text-gray-400 pb-3">Your recent transactions across all wallets</p>
            <TransactionTable transactions={transactions} />
          </div>
          <SidePanel />
      </div>
    </main>
   
  );
};

export default WalletMain;