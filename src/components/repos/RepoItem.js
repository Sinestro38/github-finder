import React from 'react';

export const repoItem = ({ repo }) => {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url} target="_blank">{repo.name}</a>
            </h3>
        </div>
    )
}

export default repoItem;