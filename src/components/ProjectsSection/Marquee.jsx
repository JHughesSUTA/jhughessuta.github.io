import "./Marquee.scss"
import htmlIcon from "../../assets/images/icons/html.png";
import javascriptIcon from "../../assets/images/icons/javascript.png";
import cssIcon from "../../assets/images/icons/css.png";
import reactIcon from "../../assets/images/icons/react.png";
import angularIcon from "../../assets/images/icons/angular.png";
import typescriptIcon from "../../assets/images/icons/typescript.png";
import sassIcon from "../../assets/images/icons/sass.png";
import tailwindIcon from "../../assets/images/icons/tailwind.png";
import jestIcon from "../../assets/images/icons/jest.png";
import gitIcon from "../../assets/images/icons/git.png";
import nodeIcon from "../../assets/images/icons/node.png";
import expressIcon from "../../assets/images/icons/express.png";
import mysqlIcon from "../../assets/images/icons/mysql.png";
import postgresIcon from "../../assets/images/icons/postgres.png";
import rubyIcon from "../../assets/images/icons/ruby.png";
import figmaIcon from "../../assets/images/icons/figma.png";
import xdIcon from "../../assets/images/icons/xd.png";

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="wrapper">
        <div className="itemLeft item1">
          <img src={htmlIcon} alt="HTML" width="40" height="40" />
        </div>
        <div className="itemLeft item2">
          <img src={javascriptIcon} alt="JavaScript" width="40" height="40" />
        </div>
        <div className="itemLeft item3">
          <img src={cssIcon} alt="CSS" width="40" height="40" />
        </div>
        <div className="itemLeft item4">
          <img src={reactIcon} alt="React.js" width="40" height="40" />
        </div>
        <div className="itemLeft item5">
          <img src={angularIcon} alt="Angular.js" width="40" height="40" />
        </div>
        <div className="itemLeft item6">
          <img src={typescriptIcon} alt="TypeScript" width="40" height="40" />
        </div>
        <div className="itemLeft item7">
          <img src={sassIcon} alt="SASS" width="40" height="40" />
        </div>
        <div className="itemLeft item8">
          <img src={tailwindIcon} alt="Tailwind" width="40" height="40" />
        </div>
        <div className="itemLeft item9">
          <img src={jestIcon} alt="Jest" width="40" height="40" />
        </div>
        <div className="itemLeft item10">
          <img src={gitIcon} alt="Git" width="40" height="40" />
        </div>
        <div className="itemLeft item11">
          <img src={nodeIcon} alt="Node.js" width="40" height="40" />
        </div>
        <div className="itemLeft item12">
          <img src={expressIcon} alt="Express" width="40" height="40" />
        </div>
        <div className="itemLeft item13">
          <img src={mysqlIcon} alt="Adobe" width="40" height="40" />
        </div>
        <div className="itemLeft item14">
          <img src={postgresIcon} alt="PostgreSQL" width="40" height="40" />
        </div>
        <div className="itemLeft item15">
          <img src={rubyIcon} alt="Ruby" width="40" height="40" />
        </div>
        <div className="itemLeft item16">
          <img src={figmaIcon} alt="Figma" width="40" height="40" />
        </div>
        <div className="itemLeft item17">
          <img src={xdIcon} alt="Adobe XD" width="40" height="40" />
        </div>
      </div>
    </div>
  );
};

export default Marquee;
