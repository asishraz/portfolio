import React from "react";
import SmallHeading from "../UI/SmallHeading";
import MediumHeading from "../UI/MediumHeading";
import Card from "../UI/Card/";
import Skill from "../UI/Skill";
import { colors } from "../../style";

const Specializing = (props) => {
  const skills = [
    {
      skillName: "HTML/CSS",
      desc: "Hands on experience in HTML/CSS",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#ff8303",
    },

    {
      skillName: "Javascript",
      desc: "Hands on experience in Javascript",
      value: 75,
      textColor: colors.primaryColor,
      pathColor: "#f9f871",
    },

    {
      skillName: "ReactJS",
      desc: "Hands on experience in ReactJS",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#00af91",
    },

    {
      skillName: "Python",
      desc: "Hands on experience in Python",
      value: 70,
      textColor: colors.primaryColor,
      pathColor: "#845ec2",
    },

    {
      skillName: "Django",
      desc: "Hands on experience in Django",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },

    {
      skillName: "Git",
      desc: "Hands on experience in Git",
      value: 80,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },

    {
      skillName: "Linux",
      desc: "Hands on experience in Linux",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },

    {
      skillName: "MySQL",
      desc: "Hands on experience in MySQL",
      value: 50,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },

    {
      skillName: "API",
      desc: "Hands on experience in API",
      value: 60,
      textColor: colors.primaryColor,
      pathColor: "#f88f01",
    },
  ];
  return (
    <div className="container">
      <Card style={{ padding: "50px" }}>
        <SmallHeading text="What I know" />
        <MediumHeading text="Expert at" />
        <div className="flexRow">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              skillName={skill.skillName}
              desc={skill.desc}
              value={skill.value}
              textColor={colors.primaryColor}
              pathColor={skill.pathColor}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Specializing;
