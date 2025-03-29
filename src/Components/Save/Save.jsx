import './Save.css';

const Save = () => {
    return (
        <button className="action_has has_saved" aria-label="save" type="button">
            <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
            >
                <path
                    d="M19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                    data-path="box"
                />
                <path
                    d="M7 3L7 8L15 8"
                    data-path="line-top"
                />
                <path
                    d="M17 20L17 13L7 13L7 20"
                    data-path="line-bottom"
                />
            </svg>
        </button>
    );
};

export default Save;
