import "./Linksstyle.css";

// Data
const LinkItem = [
  "Discover",
  "Special Deals",
  "Services",
  "Community",
  "About Us",
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
      <p className="Title">Links</p>
      <ul>{Items}</ul>
    </div>
  );
};

export default Links;
