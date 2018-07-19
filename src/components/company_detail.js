import React from 'react';
import { Grid, Loader, Dimmer, Image } from 'semantic-ui-react';

const CompanyDetail = ({company}) => {
    if (!company) {
        return <div>Loading...</div>;
        // return (<Dimmer active><Loader>Loading...</Loader></Dimmer>);
    }

    return (
        <Grid.Column width={10}>
            <Image size='large' src='https://picsum.photos/300/200?random' />
            {company.companyName}
        </Grid.Column>
    )
}

export default CompanyDetail;