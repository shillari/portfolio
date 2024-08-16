import React from "react";

const techs = {
  'React': { 'color': '#FF5733' },
  'Angular': { 'color': '#33FF57' },
  'CSS': { 'color': '#3357FF' },
  'HTML': { 'color': '#FF33A8' },
  'Node': { 'color': '#33FFF3' },
  'Javascript': { 'color': '#FFBD33' },
  'Express': { 'color': '#8E44AD' },
  'MongoDB': { 'color': '#1ABC9C' },
  'AWS Lambda': { 'color': '#E74C3C' },
  'Google Firebase': { 'color': '#2980B9' },
  'Redux': { 'color': '#27AE60' },
  'JQuery': { 'color': '#F39C12' },
  'React Native': { 'color': '#cc6600' },
  'Typescript': { 'color': '#ff99ff' }
};

const FootnoteProject = ({ tech }) => {
  return (
    <div className="footnote-container">
      <div className="footnote-color"
        style={{
          background: techs[tech] && techs[tech].color ? techs[tech].color : '#808080',
          width: 10, height: 10, borderRadius: 50
        }}></div>
      <div className="footnote-name">{tech}</div>
    </div>
  )
}

export default FootnoteProject;