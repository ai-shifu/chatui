import React from 'react';
export interface BubbleProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
    type?: string;
    content: React.ReactNode;
}
export declare const Bubble: (props: BubbleProps) => React.JSX.Element;
