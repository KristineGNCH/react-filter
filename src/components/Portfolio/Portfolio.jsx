import React from "react";
import ProjectList from "../ProjectList/ProjectList";
import Toolbar from "../Toolbar/Toolbar";
import { projectData } from "../../Projectdata";

export class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.projectData = projectData;
    this.state = {
      projects: projectData,
      selected: "All",
    };

    this.onSelectFilter = this.onSelectFilter.bind(this);
  }

  onSelectFilter(filter) {
    let projectData = this.projectData;

    if (filter !== "All") {
      projectData = this.projectData.filter(
        (project) => project.category === filter
      );
    }

    this.setState({
      projects: projectData,
      selected: filter,
    });
  }

  render() {
    const { selected, projects } = this.state;

    return (
      <>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList project={projects} />
      </>
    );
  }
}

export default Portfolio;
