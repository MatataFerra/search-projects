export const ProjectCard = () => {
  const { search } = useSelector((state) => state.searchProject);

  const searchProject = useMemo(() => {
    const searchProject = !!search
      ? tagsElements
          .split(",")
          .map((e) => e.trim().toLowerCase().includes(search))
          .some((e) => e)
      : true;
    return searchProject;
  }, [tagsElements, search]);

  const ContentModal = () => {
    return (
      <StyledProjectCard responsive={responsive}>
        <img src={onModalGifToShow} alt={onGridProjName} className='project-card-gif' />
        <div className='project-content-style'>
          {onModalProjectDescr}
          <Link href={onModalProjectLink} target='_blank' rel='noreferrer' className='project-link'>
            Link to Project
          </Link>
        </div>
      </StyledProjectCard>
    );
  };

  return (
    <>
      {searchProject && (
        <StyledProjetFolder
          displayProject={displayProject}
          className='project-card-container'
          data-tags={tagsElements}>
          {responsive ? (
            <SimpleMobileModal
              contentToOpen={<BodyProjectCard idProject={onGridProjName} />}
              contentBody={<ContentModal />}
            />
          ) : (
            <SimpleModal
              contentToOpen={<BodyProjectCard idProject={onGridProjName} />}
              contentBody={<ContentModal />}
              projectHeaderName={onGridProjName}
            />
          )}
          <div className='project-card-text'>
            <p className='project-card-name'>{onGridProjName}</p>
            <p className='project-card-description'>{onGridProjDescr}</p>
            <img
              style={{ width: "0.8rem" }}
              src='https://img.icons8.com/ios-glyphs/30/666666/pin3--v2.png'
              alt='Pin'
            />
          </div>
        </StyledProjetFolder>
      )}
    </>
  );
};
