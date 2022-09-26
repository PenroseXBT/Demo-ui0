require('./gradient.scss');

export const GradientBorderBox: React.FC<any> = ({
    borderWidth,
    children,
    extraClasses,
    extraClassesOuter,
    extraClassesInner,
}) => {
    return (
        <div className={`gradient-container ${extraClasses}`}>
            <div className={`gradient-outer ${extraClassesOuter}`}></div>

            <div className={`gradient-inner ${extraClassesInner}`}>{children}</div>
        </div>
    );
};
