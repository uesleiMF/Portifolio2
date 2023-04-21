import "./members.css";

const Members = () => {
  return (
    <div id="members" className="container members-container">
      <h1 className="member-txt">Members</h1>
      <div className="member member-1">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">S</h1>
          <h3 className="position">L</h3>
          <h4 className="about">
           Sim!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contato</span>
          </a>
        </div>
      </div>

      <div className="member member-2">
        <div className="member-img"></div>
        <div className="member-info">
          <h1 className="name">C</h1>
          <h3 className="position">Anot</h3>
          <h4 className="about">
            Nao!
          </h4>
          <a href="#contact" className="contact-member">
            <span>contact</span>
          </a>
        </div>
      </div>

     
        </div>
  
  );
};

export default Members;
