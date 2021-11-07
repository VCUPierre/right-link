import React, { useState, useEffect, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import _ from 'lodash';
// import * as Diff from 'diff';
import { FirebaseContext } from '../../utils/auth/FirebaseContext';
import { db } from '../../utils/auth/firebase';
import RightLinkCollectionModal from '../RightLinkCollectionModal/RightLinkCollectionModal';
import Header from '../Header/Header';
import RightLinkManagementOpt from '../RightLinkManagementOpt/RightLinkManagementOpt';
import Main from '../Main/Main';
import './Home.css';

const Home = () => {
    const MAX_VERSIONS = 5;

    const { currentUser } = useContext(FirebaseContext);
    const [editRightLink, setEditRightLink] = useState(false);
    const [saveRightLink, setSaveRightLink] = useState(true);
    const [userDbDoc, setUserDbDoc] = useState('');
    const [trackedChanges, setTrackedChanges] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [userRightLinkData, setUserRightLinkData] = useState([]);
    const [selectedRightLink, setSelectedRightLink] = useState({});
    const [data, setData] = useState({});

    const handleEditClick = () => {
        setEditRightLink((previous) => !previous);
        setSaveRightLink((previous) => !previous);
    };

    const saveData = async () => {
        const currentDate = new Date().toLocaleString();
        const userRef = db.collection('users').doc(userDbDoc);

        let dataToSave = [];
        if (userRightLinkData.data && userRightLinkData.data.length > 0) {
            const rightLinkExists = _.find(
                userRightLinkData.data,
                (x) => x.uuid === data.uuid
            );
            if (rightLinkExists) {
                const fullUserRightLinkDataCopy = userRightLinkData.data;
                for (let i = 0; i < fullUserRightLinkDataCopy.length; i += 1) {
                    if (
                        fullUserRightLinkDataCopy[i].uuid ===
                        rightLinkExists.uuid
                    ) {
                        fullUserRightLinkDataCopy[i] = data;
                    }
                }
                dataToSave = {
                    ...userRightLinkData,
                    data: fullUserRightLinkDataCopy,
                };
            } else {
                const userRightLinkDataCopy = userRightLinkData.data;
                userRightLinkDataCopy.push({ ...data });
                dataToSave = {
                    ...userRightLinkData,
                    data: userRightLinkDataCopy,
                };
            }
        } else {
            dataToSave = [{ ...data }];
        }

        try {
            db.runTransaction(async (transaction) => {
                const doc = await transaction.get(userRef);

                // doc doesn't exist; can't update
                if (!doc.exists) return;
                // update the users array after getting it from Firestore.
                const newUserDataArray = doc.data();
                const newVersion = {
                    version: dataToSave.version ? dataToSave.version + 1 : 1,
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

        setTrackedChanges(trackedChanges + 1);
    };
    const handleSaveClick = () => {
        setEditRightLink((previous) => !previous);
        setSaveRightLink((previous) => !previous);
        saveData();
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
    // const compareJSON = () => {
    // const ret = {};
    // const arr = [];

    // const diff = Diff.diffJson(originalData, data);
    // console.log('diff', diff);
    // Object.keys(originalData).forEach((key) => {
    //     if (
    //         !Object.prototype.hasOwnProperty.call(data, key) ||
    //         originalData[key] !== data[key]
    //     ) {
    //         if (
    //             !Array.isArray(data[key]) ||
    //             !(
    //                 JSON.stringify(data[key]) ===
    //                 JSON.stringify(originalData[key])
    //             )
    //         ) {
    //             ret[key] = data[key];
    //             arr.push(data[key]);
    //         }
    //     }
    // });
    // console.log('arr', arr.length);
    // console.log('obj', ret);

    // return ret;
    // };

    // useEffect(() => {
    //     compareJSON();
    // }, [data]);

    return (
        <Grid columns={2}>
            {isModalOpen ? (
                <RightLinkCollectionModal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    collection={userRightLinkData}
                    setSelectedRightLink={setSelectedRightLink}
                    setData={setData}
                />
            ) : (
                <>
                    <Grid.Row centered>
                        <Header />
                    </Grid.Row>
                    <Grid.Row className="RLContentRight">
                        <RightLinkManagementOpt
                            handleEditClick={handleEditClick}
                            editRightLink={editRightLink}
                            handleSaveClick={handleSaveClick}
                            saveRightLink={saveRightLink}
                        />
                    </Grid.Row>
                    <Grid.Row centered>
                        <Main
                            editRightLink={editRightLink}
                            data={data}
                            setData={setData}
                            trackedChanges={trackedChanges}
                            originalData={selectedRightLink}
                        />
                    </Grid.Row>
                </>
            )}
        </Grid>
    );
};

export default Home;
