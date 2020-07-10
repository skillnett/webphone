import React, { useState } from 'react';
import { Range, Direction, getTrackBackground } from 'react-range';
import { HeaderImageSources } from './ImageSources';

const STEP = 1;
const MIN = 0;
const MAX = 100;

export const VolumePicker = () => {

    const [rangeValues, setRangeValues] = useState([70]);

    return (
        <>
            <div className="app__header__vol-picker d-flex flex-column align-items-center">
                <Range
                    direction={Direction.Up}
                    values={rangeValues}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={setRangeValues}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            className="app__header__vol-picker__track d-flex"
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    width: '3px',
                                    height: '100%',
                                    borderRadius: '4px',
                                    background: getTrackBackground({
                                        values: rangeValues,
                                        colors: ['rgb(60 150 240)', 'rgba(235 249 245)'],
                                        min: MIN,
                                        max: MAX,
                                        direction: Direction.Up
                                    }),
                                    alignSelf: 'center'
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div {...props} className="app__header__vol-picker__thumb d-flex justify-content-center align-items-center" />
                    )}
                />
            </div>
            <button
                type="button"
                onClick={() => setRangeValues([0])}
            >
                <img
                    src={rangeValues[0] === 0 ? HeaderImageSources.musicNoteMuteSrc : HeaderImageSources.musicNoteSrc}
                    alt="music"
                    className="app__header__img-music"
                />
            </button>
        </>
    );
};