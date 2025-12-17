import React, { useState } from 'react';

const PromptCard = ({ prompt }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(prompt.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="glass-panel" style={{ padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color)' }}>{prompt.title}</h3>
                <button
                    onClick={handleCopy}
                    style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.1)',
                        color: copied ? '#34d399' : 'var(--text-secondary)',
                        fontSize: '0.875rem',
                        transition: 'all 0.2s',
                        border: '1px solid ' + (copied ? '#34d399' : 'transparent')
                    }}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>

            <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: 'var(--spacing-sm)',
                borderRadius: '8px',
                fontFamily: 'monospace',
                fontSize: '0.9rem',
                overflowX: 'auto',
                color: '#e2e8f0'
            }}>
                <pre style={{ whiteSpace: 'pre-wrap' }}>{prompt.content}</pre>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                {prompt.tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: '0.75rem',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        color: 'var(--accent-color)'
                    }}>
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PromptCard;
