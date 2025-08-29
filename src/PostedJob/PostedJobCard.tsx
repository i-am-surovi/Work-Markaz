const PostedJobCard = (props: any) => {
  return (
    <div className="bg-white-100 rounded-xl p-2 border-l-4 border-azure-radiance-600">
      <div className="m-3 items-center" >
        <div className="text-sm font-semibold">{props.jobTitle}</div>
        <div className="text-xs  text-white-500 font-medium">
          {props.location}
        </div>
        <div className="text-xs  text-white-400">{props.posted}</div>
      </div>
    </div>
  );
};

export default PostedJobCard;
