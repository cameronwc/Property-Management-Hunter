export function selectCompany(company) {
    // selectCompany is an action creator. Has to return an action
    return {
        type: 'COMPANY_SELECTED',
        payload: company
    }
}