import React from 'react';

export const VolumeMeter = () => {

    const volumePoints = [...new Array(32).keys()];

    return (
        <div className="sound-and-devices__volume-meter d-flex justify-content-between">
            {
                volumePoints.map(point => {
                    let initialOpacity = 1;

                    if (point === 3 || point === 4 || point === 5) {
                        initialOpacity = .8;
                    } if (point === 6 || point === 7 || point === 8) {
                        initialOpacity = .6;
                    } if (point === 9 || point === 10 || point === 11) {
                        initialOpacity = .4;
                    } if (point > 11) {
                        initialOpacity = .08
                    }

                    const initialBgColor = `rgba(44, 143, 242, ${initialOpacity})`;

                    return (
                        <span
                            key={point}
                            className="sound-and-devices__volume-meter__point"
                            style={{ backgroundColor: initialBgColor }}
                        />
                    )
                })
            }
        </div>
    );
};