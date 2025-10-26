import JobCard from "../components/ui/JobCard";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-y-5">
      <SortBar />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}
