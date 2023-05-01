import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "pages/top";
import { BattleHistory } from "pages/battlehistory";
import { NotFound } from "pages/NotFound";
import { Account } from "pages/account";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/account" element={<Account />} />
        <Route path="/battlehistory" element={<BattleHistory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
