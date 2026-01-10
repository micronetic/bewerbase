export async function getJobsApi() {
  try {
    const response = await fetch(
      "https://bewerbase.netlify.app/.netlify/functions/getJobsApi",
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result.stellenangebote);
    return result || [];
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
    return [];
  }
}
