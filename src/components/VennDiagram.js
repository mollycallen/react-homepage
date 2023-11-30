import React from 'react';

const VennDiagram = () => {
    const circleRadius = 100;
    const diagramRadius = 2 * circleRadius;


    return (
        <svg width={diagramRadius * 4} height={diagramRadius * 2}>
            <circle cx={diagramRadius} cy={diagramRadius} r={circleRadius} fill="red" />
            <circle cx={diagramRadius * 2} cy={diagramRadius} r={circleRadius} fill="blue" />
            <circle cx={diagramRadius * 3} cy={diagramRadius} r={circleRadius} fill="green" />
            <circle cx={diagramRadius * 1.5} cy={diagramRadius * 1.5} r={circleRadius} fill="yellow" />
            <circle cx={diagramRadius * 2.5} cy={diagramRadius * 1.5} r={circleRadius} fill="orange" />
            <circle cx={diagramRadius * 2} cy={diagramRadius * 0.5} r={circleRadius} fill="purple" />
        </svg>
    );
};

export default VennDiagram;