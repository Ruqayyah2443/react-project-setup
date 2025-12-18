import './Button.css'
import clsx from "clsx";


export const Button = ({
    children,
    variant = "primary",
    size = "sm",
    radius = null,    
    rounded = false, 
    prefix,
    suffix,
    ...props
}) => {
    return (
        <button
            className={clsx(
                "btn",
                `btn-${variant}`,
                `btn-${size}`,
                radius && `btn-${radius}` 
            )}
            {...props}
        >
            {prefix && (
                <span className={clsx("icon", rounded && `rounded-${variant}`)}>
                    {prefix}
                </span>
            )}

            <span>{children}</span>
            {suffix && (
                rounded ? (
                    <span className={clsx(`rounded-${variant}`)}>
                        <span className="icon">
                            {suffix}
                        </span>
                    </span>
                ) : (
                    <span className="icon">
                        {suffix}
                    </span>
                )
            )}

            {/* {suffix && (
                <span className={clsx("icon", rounded && `rounded-${variant}`)}>
                    {suffix}
                </span>
            )} */}
        </button>
    );
};

