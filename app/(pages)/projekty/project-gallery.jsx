"use client";
import ProjectPreview from "@/app/_components/project-preview";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ProjectGallery({ projects }) {
  return (
    <div className="w-full">
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="16px">
          {projects.map((project) => {
            return (
              <ProjectPreview
                key={project.sys.id}
                data={project}
              ></ProjectPreview>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
