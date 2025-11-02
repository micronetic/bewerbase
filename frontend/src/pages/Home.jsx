import { useOutletContext } from "react-router";
import ApplicationCard from "../components/ui/ApplicationCard";
import SortBar from "../components/ui/SortBar";

export default function Home() {
  const { applications } = useOutletContext();
  return (
    <div className="w-full flex flex-col items-center gap-y-5 pb-4">
      <SortBar />
      {applications.length === 0 && (
        <p className="text-light-grey">no applications yet</p>
      )}
      {applications.map((app, index) => (
        <ApplicationCard key={index} data={app} />
      ))}
    </div>
  );
}
