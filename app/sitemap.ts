export default async function sitemap() {
  try {
    const currentDate = new Date().toISOString()

    return [
      {
        url: "https://www.fn03.xyz/",
        lastModified: currentDate,
        changeFrequency: "yearly",
        priority: 1,
      },
    ]
  } catch (error) {
    console.error("Error generating sitemap:", error)
  }
}
