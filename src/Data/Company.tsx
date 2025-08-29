const companyData={
    Name: "Google",
    Overview: "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world’s information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",
    Industry: "Internet, Software & Technology Services",
    Website: "https://www.google.com",
    Size: "100,000+ Employees",
    Headquarters: "Mountain View, California, United States",
    Specialties: [
      "Search Engine",
      "Online Advertising",
      "Cloud Computing",
      "Software",
      "Hardware",
      "AI & Machine Learning",
      "Mobile Operating Systems",
      "Consumer Electronics"
    ]
  }
const similar=[
{
  name: "Meta",
 employees: 58604
},
{
  name: "Netflix",
 employees: 12800
},
{
  name: "Microsoft",
 employees: 221000
},
{
  name: "Adobe",
 employees: 29439
},
{
  name: "Google",
 employees: 181798
},
{
  name: "Spotify",
 employees: 8200
},
{
  name: "Amazon",
 employees: 1561000
},
{
  name: "Apple",
 employees: 164000
}
]

// ../Data/CompanyRatings.ts

const companyRatings = {
  average: 4.2,
  total: 3,
  reviews: [
    {
      id: "r1",
      user: "Ayesha K.",
      rating: 4.5,
      text: "Interview process structured chhilo, feedback tao quick peyechi.",
      date: "2025-08-01T12:00:00.000Z",
    },
    {
      id: "r2",
      user: "Rahim U.",
      rating: 4,
      text: "Team supportive, onboarding smooth. Work-life balance bhalo.",
      date: "2025-08-10T09:30:00.000Z",
    },
    {
      id: "r3",
      user: "Nadia S.",
      rating: 3.5,
      text: "Benefits bhalo, kintu interview slots pete kichu delay hoyeche.",
      date: "2025-08-18T15:15:00.000Z",
    },
  ],
};

export {companyData, similar, companyRatings};  