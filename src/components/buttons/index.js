export const ButtonDefault = ({ title, bgColor, width }) => {

    return (
        <button
            style={{
                border: 'none',
                outline: 'none',
                borderRadius: '3px',
                padding: '0.8rem 0.75rem',
                backgroundColor: bgColor,
                width: width ? width : '14rem',
                color: '#FFFFFF',
                cursor: 'pointer'
            }}
            className='flex-center'
        >
            {title}
        </button>
    )
};

export const ButtonLoginSocial = ({ title, bgColor, icon, width }) => {
    return (
        <button
            style={{
                border: 'none',
                outline: 'none',
                borderRadius: '3px',
                padding: '0.8rem 0.75rem',
                backgroundColor: bgColor,
                margin: '.5rem 0',
                width: width ? width : '16rem',
                color: '#FFFFFF',
                cursor: 'pointer'
            }}
            className='flex-center'
        >
            {icon}
            {title}
        </button>
    )
};