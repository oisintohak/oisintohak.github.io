const SkillsIcon = ({ IconName, text }) => {
    return (
        <div className="col-auto text-center skills-icon">
            <span className="circle-icon fs-5">
                <IconName />
            </span> <br />
            <small>{text}</small>
        </div>
    );
};

export default SkillsIcon;