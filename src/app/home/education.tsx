const data = [
  {
    degree: "B.Tech (Computer Science and Engineering)",
    from: "GLA University",
    duration: "2016 - 2020",
    location: "Mathura",
    marks: "CGPA 7.23",
  },
  {
    degree: "Intermediate",
    from: "Glenhill School",
    duration: "2013 - 2015",
    location: "Varanasi",
    marks: "78%",
  },
  {
    degree: "Matriculation",
    from: "Fatima School",
    duration: "2011 - 2013",
    location: "Mau",
    marks: "78%",
  },
];

export default function Education() {
  return (
    <section className="">
      <h1 className="text-lg font-semibold text-gray-700">Education</h1>
      {data.map((item, index) => (
        <div key={item.degree} className="mt-4">
          <h3 className="text-sm font-semibold text-gray-600">{item.degree}</h3>
          <div className="flex justify-between text-sm text-muted-foreground">
            <p>{item.from}</p>
            <p className="text-xs text-slate-600">{item.duration}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
