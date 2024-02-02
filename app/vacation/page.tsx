import BestPriceGuarantee from "@/components/vacation/best-price-guarantee";
import { VacationForm } from "@/components/vacation/forms/vacation-form";
import { fetchGateways, fetchResortsByCountry } from "@/utils/fetch";

export default async function Home() {
  const resorts = await fetchResortsByCountry("S");
  const gateways = await fetchGateways();

  return (
    <main className="max-w-[116.4rem] relative m-auto flex min-h-screen flex-col items-center px-6 sm:px-14 text-onyx">
      <VacationForm resorts={resorts} gateways={gateways} />
      <BestPriceGuarantee
        iconName="paragraph"
        label="Best Price Guarantee"
        popup={{
          brand: "sandals",
          tel: "tel:18887263257",
          url: "www.sandals.com",
          image: {
            alt: "Sandals Best Price Guarantee",
            path: "/logos/best-price/best-price-sandals.png",
          },
        }}
      />
    </main>
  );
}
