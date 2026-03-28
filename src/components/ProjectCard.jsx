const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <div>
      <div className="proj-imgbx group relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="proj-txtx flex flex-col items-center justify-center">
          <h4>{title}</h4>
          <span>{description}</span>
          <a
            className="proj-link"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            view site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;