import Card from "../UI/Card";

const GalleryView = (props) => {
  var listItems = props.listItems;

  return (
    <div className="px-11 flex flex-row flex-wrap gap-x-16 gap-y-16 place-items-start">
      {listItems.map((item) => {
        return (
          <div
            className="hover:scale-105 transition-transform"
            onClick={() => props.itemProfileHandler(item)}
            key={item.name}
          >
            <Card styleCard={"mb-5 w-[20rem] h-[12rem]"} key={item.name}>
              <h3 className="mb-3">{item.name}</h3>
              <div className="mb-3 flex flex-col justify-between">
                <span className="mr-">RAM : {item.details.ram}</span>
                <span className="mr-">
                  Internal Storage : {item.details.internalStorage}
                </span>
                <span className="mr-">Brand : {item.details.brand}</span>
              </div>
              <div>{item.price}</div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default GalleryView;
