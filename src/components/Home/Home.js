/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from 'react';
import { Grid, Message } from 'semantic-ui-react';
import _ from 'lodash';
// import * as Diff from 'diff';
import { FirebaseContext } from '../../utils/auth/FirebaseContext';
import { db } from '../../utils/auth/firebase';
import RightLinkCollectionModal from '../RightLinkCollectionModal/RightLinkCollectionModal';
import Header from '../Header/Header';
import RightLinkManagementOpt from '../RightLinkManagementOpt/RightLinkManagementOpt';
import Main from '../Main/Main';
import './Home.css';
import PublishRightLinkModal from '../PublishRightLinkModal/PublishRightLinkModal';

const Home = () => {
    const MAX_VERSIONS = 5;

    const { currentUser } = useContext(FirebaseContext);
    // edit save and publish states control if the button is disabled or not
    const [editRightLink, setEditRightLink] = useState(false);
    const [saveRightLink, setSaveRightLink] = useState(true);
    const [publishRightLink, setPublishRightLink] = useState(true);
    // holds users db doc after signin
    const [userDbDoc, setUserDbDoc] = useState('');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
    const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);
    const [userRightLinkData, setUserRightLinkData] = useState([]);
    const [selectedOriginalRightLinkData, setSelectedOriginalRightLinkData] =
        useState({});
    const [data, setData] = useState({});
    const [disableToggledBanner, setDisableToggledBanner] = useState(false);

    const doesTitleExist = () => {
        if (data.profile.title.trim() === '') {
            return false;
        }
        return true;
    };

    const formatDataToSave = (action) => {
        let dataToSave = [];
        let dataToFormat = {
            ...data,
            publish: false,
        };

        if (action === 'publish') {
            dataToFormat = {
                ...dataToFormat,
                publish: true,
            };
        }

        if (userRightLinkData.data && userRightLinkData.data.length > 0) {
            const rightLinkExists = _.find(
                userRightLinkData.data,
                (x) => x.uuid === dataToFormat.uuid
            );
            if (rightLinkExists) {
                const fullUserRightLinkDataCopy = userRightLinkData.data;
                for (let i = 0; i < fullUserRightLinkDataCopy.length; i += 1) {
                    if (
                        fullUserRightLinkDataCopy[i].uuid ===
                        rightLinkExists.uuid
                    ) {
                        fullUserRightLinkDataCopy[i] = dataToFormat;
                    }
                }
                dataToSave = {
                    ...userRightLinkData,
                    data: fullUserRightLinkDataCopy,
                };
            } else {
                const userRightLinkDataCopy = userRightLinkData.data;
                userRightLinkDataCopy.push({ ...dataToFormat });
                dataToSave = {
                    ...userRightLinkData,
                    data: userRightLinkDataCopy,
                };
            }
        } else {
            dataToSave = [{ ...dataToFormat }];
        }

        return dataToSave;
    };

    const saveData = async () => {
        const currentDate = new Date().toLocaleString();
        const userRef = db.collection('users').doc(userDbDoc);

        if (doesTitleExist()) {
            const dataToSave = formatDataToSave('save');

            try {
                db.runTransaction(async (transaction) => {
                    const doc = await transaction.get(userRef);

                    // doc doesn't exist; can't update
                    if (!doc.exists) return;
                    // update the users array after getting it from Firestore.
                    const newUserDataArray = doc.data();
                    const newVersion = {
                        version: dataToSave.version
                            ? dataToSave.version + 1
                            : 1,
                        date: currentDate,
                        data: dataToSave.data ? dataToSave.data : dataToSave,
                    };
                    if (newUserDataArray.data.length >= MAX_VERSIONS) {
                        newUserDataArray.data.shift();
                    }
                    newUserDataArray.data.push(newVersion);

                    transaction.update(userRef, { ...newUserDataArray });
                });
            } catch (e) {
                console.log('Transaction failed: ', e);
            }
        } else {
            alert(
                'Data has not been saved due to missing title. Please add a title (Profile -> Title)'
            );
        }
    };

    const handleSaveClick = () => {
        console.log(selectedOriginalRightLinkData, data);
        if (_.isEqual(selectedOriginalRightLinkData, data)) {
            alert('No changes detected, everything is up to date!');
        } else if (doesTitleExist()) {
            setEditRightLink((previous) => !previous);
            setSaveRightLink((previous) => !previous);
            saveData();
            setIsPublishModalOpen((previous) => !previous);
            setPublishRightLink((previous) => !previous);
        } else {
            alert(
                'Data has not been saved due to missing title. Please add a title (Profile -> Title)'
            );
        }
    };

    const handleEditClick = () => {
        setEditRightLink((previous) => !previous);
        setSaveRightLink((previous) => !previous);
    };

    const handleCancelClick = () => {
        setEditRightLink((previous) => !previous);
        setSaveRightLink((previous) => !previous);
    };

    const handlePublishClick = () => {
        setPublishRightLink(true);

        const currentDate = new Date().toLocaleString();
        const userRef = db.collection('users').doc(userDbDoc);

        if (doesTitleExist()) {
            const dataToSave = formatDataToSave('publish');

            try {
                db.runTransaction(async (transaction) => {
                    const doc = await transaction.get(userRef);

                    // doc doesn't exist; can't update
                    if (!doc.exists) return;
                    // update the users array after getting it from Firestore.
                    const newUserDataArray = doc.data();
                    const newVersion = {
                        version: dataToSave.version
                            ? dataToSave.version + 1
                            : 1,
                        date: currentDate,
                        data: dataToSave.data ? dataToSave.data : dataToSave,
                    };
                    if (newUserDataArray.data.length >= MAX_VERSIONS) {
                        newUserDataArray.data.shift();
                    }
                    newUserDataArray.data.push(newVersion);

                    transaction.update(userRef, { ...newUserDataArray });
                });
            } catch (e) {
                console.log('Transaction failed: ', e);
            }
            alert('Your Right-Link has been published!');
        } else {
            alert(
                'Data has not been Published due to missing title. Please add a title (Profile -> Title)'
            );
        }
    };

    const disableToggle = () => {
        setDisableToggledBanner((previous) => !previous);
    };

    useEffect(() => {
        const fetch = () => {
            db.collection('users')
                .where('uid', '==', currentUser.uid)
                .onSnapshot((snapshot) => {
                    let currentData = 0;
                    const items = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                    }));
                    if (items[0] && items[0].data) {
                        currentData = _.maxBy(items[0].data, 'version');
                        setUserDbDoc(items[0].id);
                    }

                    setUserRightLinkData(
                        currentData && currentData !== 0 ? currentData : []
                    );
                });
        };
        fetch();
    }, []);

    return (
        <Grid columns={2}>
            {isLoginModalOpen ? (
                <RightLinkCollectionModal
                    isModalOpen={isLoginModalOpen}
                    setIsModalOpen={setIsLoginModalOpen}
                    collection={userRightLinkData}
                    setSelectedOriginalRightLinkData={
                        setSelectedOriginalRightLinkData
                    }
                    setData={setData}
                    setPublishRightLink={setPublishRightLink}
                />
            ) : (
                <>
                    <Grid.Row centered>
                        <Header />
                    </Grid.Row>
                    {disableToggledBanner ? (
                        <Grid.Row centered className="p-0">
                            <Message info size="small">
                                <Message.Header>
                                    This Right-Link is currently Disabled
                                </Message.Header>
                            </Message>
                        </Grid.Row>
                    ) : (
                        ''
                    )}
                    <Grid.Row className="RLContentRight">
                        <RightLinkManagementOpt
                            handleEditClick={handleEditClick}
                            editRightLink={editRightLink}
                            handleSaveClick={handleSaveClick}
                            saveRightLink={saveRightLink}
                            handlePublishClick={handlePublishClick}
                            publishRightLink={publishRightLink}
                            handleCancelClick={handleCancelClick}
                            disableToggledBanner={disableToggledBanner}
                            disableToggle={disableToggle}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <Main
                            editRightLink={editRightLink}
                            data={data}
                            setData={setData}
                        />
                    </Grid.Row>
                </>
            )}
            {isPublishModalOpen ? (
                <PublishRightLinkModal
                    isModalOpen={isPublishModalOpen}
                    setIsModalOpen={setIsPublishModalOpen}
                    handlePublishClick={handlePublishClick}
                />
            ) : (
                ''
            )}
        </Grid>
    );
};

export default Home;
