import * as React from 'react';

import '../css/features.section.css';

export default function FeaturesSection() {
    return (
        <div id='features' className='features-section'>
            <div className='features-title'>
                <h1 className='gold-text'>Product Features</h1>
            </div>
            <div className='features-grid'>

                <div className='card-grid'>
                    <div className='card-icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            fill="currentColor"
                            className="bi bi-1-circle"
                            viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
                        </svg>
                    </div>
                    <div className='card-container'>
                        <h4 className='card-title'>
                            Bug Review Board (BRB)
                        </h4>
                        <p className='card-content'>
                            Implement a centeralized bug and
                            change process so everyone has a 
                            single source of truth across a
                            complicated landscape
                        </p>
                    </div>
                </div>

                <div className='card-grid'>
                    <div className='card-icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            fill="currentColor"
                            className="bi bi-2-circle"
                            viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>  
                        </svg>
                    </div>
                    <div className='card-container'>
                        <h4 className='card-title'>
                            Status Reports
                        </h4>
                        <p className='card-content'>
                            Visual Reporting that ties change and
                            testing status together so you always
                            know where you are
                        </p>
                    </div>
                </div>

                <div className='card-grid'>
                    <div className='card-icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            fill="currentColor"
                            className="bi bi-3-circle"
                            viewBox="0 0 16 16">
                            <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318"/>
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
                        </svg>
                    </div>
                    <div className='card-container'>
                        <h4 className='card-title'>
                            Business value
                        </h4>
                        <p className='card-content'>
                            Prioritize change quicker and provide value faster
                        </p>
                    </div>
                </div>

                <div className='card-grid'>
                    <div className='card-icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="30"
                            fill="currentColor"
                            className="bi bi-check2-circle"
                            viewBox="0 0 16 16">
                            <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                            <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                        </svg>  
                    </div>
                    <div className='card-container'>
                        <h4 className='card-title'>duis tristique</h4>
                        <p className='card-content'>tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
