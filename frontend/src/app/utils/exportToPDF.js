import { jsPDF } from "jspdf";
import { formatDate, sortByDate } from "./helpers";

export function exportToPDF(applications) {
  const deDate = formatDate(new Date());
  const pdf = new jsPDF("p", "mm", "a4");

  pdf.setFontSize(18);
  pdf.text("Bewerbungen", 10, 15);
  pdf.setFontSize(12);
  pdf.text(`Stand: ${deDate}`, 55, 15);

  pdf.setFontSize(10);
  let currentY = 30;

  applications.toSorted(sortByDate).forEach((app) => {
    if (currentY > 280) {
      pdf.addPage();
      currentY = 30;
      pdf.setFontSize(18);
      pdf.text("Bewerbungen", 10, 15);
      pdf.setFontSize(12);
      pdf.text(`Stand: ${deDate}`, 55, 15);
      pdf.setFontSize(10);
    }

    if (app.status === "Pending") {
      pdf.setTextColor(217, 119, 6);
    } else if (app.status === "Rejected") {
      pdf.setTextColor(220, 38, 38);
    } else {
      pdf.setTextColor(0, 0, 0);
    }

    pdf.text(
      `${formatDate(app.date)} - ${app.company} (${app.job}) - ${app.location} - ${app.status}`,
      10,
      currentY,
    );
    currentY += 10;
  });

  pdf.save(`Bewerbungen_${deDate}.pdf`);
}
