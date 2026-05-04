import React from 'react';

export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex justify-between items-center mb-8 px-2">
            <div id="pageheader-left">
                <span id="page-title" className="text-3xl font-bold block text-gray-800">
                    {title}
                </span>
                <div id="breadcrumb-links" className="flex items-center gap-2 text-sm text-gray-400 mt-1 font-medium">
                    <span>Home</span>
                    <span id="breadcrumb-separator">/</span>
                    <span id="breadcrumb-current" className="text-hijau font-semibold">
                        {Array.isArray(breadcrumb) ? breadcrumb.join(" / ") : breadcrumb}
                    </span>
                </div>
            </div>

            {/* Kita paksa tampil dengan !flex agar menimpa CSS yang hidden */}
            <div id="action-button" className="!flex items-center justify-end">
                {children}
            </div>
        </div>
    );
}