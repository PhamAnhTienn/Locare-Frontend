interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label
}) => {
    return (
        <div 
            className={`w-full py-4 bg-locare hover:bg-locare-dark text-white text-center rounded-xl transition cursor-pointer`}
        >
            {label}
        </div>
    )
}

export default CustomButton;