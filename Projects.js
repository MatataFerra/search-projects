export const Projects = () => {
  const refTags = useRef([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const tags = document.querySelectorAll("div[data-tags]");
    const tagsArray = Object.values(tags);

    tagsArray.map((tag) => {
      const oneTag = tag.dataset.tags.split(",");
      refTags.current = [...refTags.current, ...oneTag];
      return refTags.current;
    });
    const uniqueTags = [...new Set(refTags.current)].map((tag) => tag.trim().toLowerCase());
    dispatch(tagsSearchProject(uniqueTags));
  }, [dispatch]);

  return (
    <StyledProjectGrid className='project-card-grid'>
      <ProjectCard
        onGridProjName={"Teslo Shop - e-Commerce"}
        onGridProjDescr={"NextJS, TypeScript, MaterialUI, MongoDB"}
        onModalProjectDescr={`It's an e-commerce site with admin page and many features: Maps, Cart, Payment, stock management, etc.`}
        onModalProjectLink={"https://teslo-matata.herokuapp.com/"}
        onModalGifToShow={"https://media.giphy.com/media/juZhYgkBIrHNe19kn3/giphy.gif"}
        responsive={responsive}
        tagsElements='NextJS, TypeScript, MaterialUI, MongoDB, Docker Compose'
        displayProject={false}
      />
      <ProjectCard
        onGridProjName={"Tic-Tac-Toe - Multiplayer (Only Local)"}
        onGridProjDescr={"ReactJS, TypeScript, Vite"}
        onModalProjectDescr={`It's a multiplayer game with a local server. Made for understand how to work with matrixes.`}
        onModalProjectLink={"https://tateti-nine.vercel.app/"}
        onModalGifToShow={"https://media.giphy.com/media/ETC3yxtJOxioF0QWxO/giphy.gif"}
        responsive={responsive}
        tagsElements='ReactJS, TypeScript, Vite'
        displayProject={false}
      />
    </StyledProjectGrid>
  );
};
