import React from 'react';
import PropTypes from 'prop-types';

import FormFields from '../layout/FormFields.component';
import userProfileActions from './profile.actions';
import userProfileStore from './profile.store';


function EditProfile(props, context) {
    const fieldKeys = [
        'username',
        'firstName',
        'surname',
        'email',
        'phoneNumber',
    ];

    const pageLabel = context.d2.i18n.getTranslation('edit_user_profile');

    return (
        <FormFields
            pageLabel={pageLabel}
            fieldKeys={fieldKeys}
            valueStore={userProfileStore}
            onUpdateField={userProfileActions.save}
        />
    );
}

EditProfile.contextTypes = { d2: PropTypes.object.isRequired };

export default EditProfile;
