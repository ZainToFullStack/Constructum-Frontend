import React from 'react';
import "../../../style/toolssection.css";
// Importing specific professional icons
import inspector from "../../../assets/inspector.png"
import {
    LuDroplets,
    LuZap,
    LuCamera,
    LuWaves,
    LuGauge,
    LuHammer,
    LuScanFace,
    LuScan
} from "react-icons/lu";

const InspectionTools = () => {
    const toolsLeft = [
        {
            icon: <LuDroplets />,
            title: 'Water Quality Tester',
            desc: "Our advanced testers analyze water samples for chemical imbalances, lead, and bacterial contaminants. This ensures your home's water supply meets safety standards and protects your plumbing from corrosive mineral buildup."
        },
        {
            icon: <LuZap />,
            title: 'Multimeter',
            desc: "This versatile tool allows our inspectors to verify voltage levels, circuit continuity, and proper grounding. It is essential for identifying faulty wiring, overloaded circuits, and potential fire hazards that are invisible to the naked eye."
        },
        {
            icon: <LuCamera />,
            title: 'Professional Thermal Camera',
            desc: "Using infrared technology, we visualize temperature anomalies. This allows us to find missing insulation, electrical hot spots, and hidden water leaks behind finished surfaces without needing to open up your walls."
        },
        {
            icon: <LuWaves />,
            title: 'Moisture Meter',
            desc: "By measuring the electrical resistance of materials, this tool pinpoints moisture intrusion in drywall, wood, and concrete. It is our primary defense against hidden rot and toxic mold growth before they become structural issues."
        }
    ];

    const toolsRight = [
        {
            icon: <LuGauge />,
            title: 'Water Pressure Meter',
            desc: "We calibrate plumbing safety by testing static water pressure. High pressure can burst pipes and damage appliances, while low pressure indicates obstructions or leaks; we ensure your system operates in the 'Goldilocks' zone."
        },
        {
            icon: <LuHammer />,
            title: 'Rebound Hammer',
            desc: "This non-destructive testing tool measures the surface hardness and compressive strength of concrete. It allows us to assess the structural integrity of foundations and pillars without damaging the building material."
        },
        {
            icon: <LuScanFace />,
            title: 'Faro Scanner',
            desc: "Utilizing high-speed laser technology, the Faro scanner creates a precise 3D 'digital twin' of the property. This provides millimeter-accurate measurements and captures complex structural geometries for detailed renovation planning."
        },
        {
            icon: <LuScan />,
            title: 'Ultrasonic Pulse Velocity Tester',
            desc: "This sophisticated acoustic tool sends sound waves through structural elements to detect internal voids, cracks, or honeycomb defects in concrete, ensuring the core of your building is as solid as it looks."
        }
    ];

    return (
        <div className="toolssec_container">
            <header className="toolssec_header">
                <h1>Tools and Equipment We Use for<br />Thorough Inspections</h1>
            </header>

            <div className="toolssec_content-grid">
                {/* Left Column */}
                <div className="toolssec_column toolssec_left-column">
                    {toolsLeft.map((tool, index) => (
                        <div key={index} className="toolssec_tool-card">
                            <div className="toolssec_icon-box">{tool.icon}</div>
                            <div className="toolssec_tool-text">
                                <h3>{tool.title}</h3>
                                <p>{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Center Graphic */}
                <div className="toolssec_center-column">
                    <div className="toolssec_circle-wrap">
                        <div className="toolssec_dashed-circle">
                            <img
                                src={inspector}
                                alt="Inspector"
                                className="toolssec_inspector-img"
                            />
                            {/* Optional floating tools */}
                            {/* <div className="toolssec_float-tool toolssec_top"><LuCamera /></div>
                            <div className="toolssec_float-tool toolssec_right"><LuScanFace /></div>
                            <div className="toolssec_float-tool toolssec_bottom"><LuHammer /></div>
                            <div className="toolssec_float-tool toolssec_left"><LuZap /></div> */}
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="toolssec_column toolssec_right-column">
                    {toolsRight.map((tool, index) => (
                        <div key={index} className="toolssec_tool-card toolssec_reverse">
                            <div className="toolssec_icon-box">{tool.icon}</div>
                            <div className="toolssec_tool-text">
                                <h3>{tool.title}</h3>
                                <p>{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InspectionTools;
