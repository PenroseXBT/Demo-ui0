require('./gradient.scss');

export const GradientBorderBox: React.FC<any> = ({ borderWidth, children }) => {
    return (
        <div className="gradient-container">
            <div className="gradient-outer"></div>

            <div className="gradient-inner">{children}</div>
        </div>
    );
};
