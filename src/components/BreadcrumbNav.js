import React from 'react'

const BreadcrumbNav = ({ currentPage }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-muted">
                <li className="breadcrumb-item">
                    <a href="/website/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{currentPage}</li>
            </ol>
        </nav>
    )
}

export default BreadcrumbNav
