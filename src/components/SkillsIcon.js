const SkillsIcon = ({ IconName, text }) => {
    return (
        <div className="col-auto py-2 text-center skills-icon">
            <span className="circle-icon fs-5">
                <IconName />
            </span> <br />
            <small>{text}</small>
        </div>
    );
};

export default SkillsIcon;