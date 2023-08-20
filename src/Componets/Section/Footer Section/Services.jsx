import "./Linksstyle.css";

// Data
const LinkItem = [
  "About Us",
  "Blog & Articles",
  "Term and Condition",
  "Privacy Policy",
  "Contact Us",
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
      <p className="Title">Sercives</p>
      <ul>{Items}</ul>
    </div>
  );
};

export default Links;
