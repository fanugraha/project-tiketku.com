import "./Linksstyle.css";

// Data
const LinkItem = [
  "Address: Jl.Codelaras No.205A",
  "Kediri, Pare AG17",
  "Phone: 123 456 7890",
  "Email: myagungperdana@gmail.com",
  "Maps: Kediri, East java",
];

// Loop
const Items = LinkItem.map((li, index) => (
  <li key={index}>
    <a href="#">{li}</a>
  </li>
));

const Links = () => {
  return (
    <div className="Links">
      <p className="Title">Contact</p>
      <ul>{Items}</ul>
    </div>
  );
};

export default Links;
