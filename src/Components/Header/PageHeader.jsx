import './PageHeader.css'
import { PageBanner } from "./Banner";
import { PageNavigation } from "./Navigation";

export function PageHeader() {
   return (
      <header className="page-header">
         <PageBanner />
         <PageNavigation />
      </header>
   );
}