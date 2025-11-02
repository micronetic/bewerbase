import ApplicationCard from "../components/ui/ApplicationCard";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-y-5 pb-4">
      <SortBar />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
      <ApplicationCard />
    </div>
  );
}
