import React from 'react';
import { PageHeaderWithButtons } from '../../shared/components/PageHeaderWithButtons';
import { AppUrls } from '../../common/AppUrls';
import { Switch } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { onCallPreferencesChange } from '../../store/appReducers/profile';
import './CallPreferences.scss';

export const CallPreferences = () => {

    const dispatch = useDispatch();
    const callPreferences = useSelector(state => state.profile.callPreferences);

    return (
        <>
            <PageHeaderWithButtons
                backUrl={AppUrls.settings}
                pageName='Call Preferences'
            />
            {
                callPreferences.map(({ id, name, isChecked }) => (
                    <div key={id} className="call-preferences__item d-flex justify-content-between">
                        <span>{name}</span>
                        <Switch
                            checked={isChecked}
                            className='app__switcher'
                            size='small'
                            onChange={() => dispatch(onCallPreferencesChange(id))}
                        />
                    </div>
                ))
            }
        </>
    );
};