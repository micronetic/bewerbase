import ApplicationCard from "../components/ui/ApplicationCard";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-y-5">
      <SortBar />
      <ApplicationCard labelTitle="Offer" labelColor="bg-green" />
      <ApplicationCard labelTitle="Pending" labelColor="bg-amber" />
      <ApplicationCard labelTitle="Rejected" labelColor="bg-red" />
    </div>
  );
}
