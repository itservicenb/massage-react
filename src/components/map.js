import React from 'react';

const Fanpages = () => {
    const fanpages = [
        { url: 'https://www.facebook.com/hoaiphuongmassage', name: 'Fanpage 1' },
        { url: 'https://www.facebook.com/hoaiphuongmassage', name: 'Fanpage 2' },
        { url: 'https://www.facebook.com/hoaiphuongmassage', name: 'Fanpage 3' },
    ];

    return (
        <div>
            <h2>Danh sách Fanpage Facebook:</h2>
            <ul>
                {fanpages.map((fanpage, index) => (
                    <li key={index}>
                        <a href={fanpage.url} target="_blank" rel="noopener noreferrer">
                            {fanpage.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Fanpages;
