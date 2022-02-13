/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { Modal, List, Icon } from 'semantic-ui-react';
import Delete from '../Delete/Delete';
import './collectionStyle.css';

const RightLinkCollectionModal = ({
    isModalOpen,
    setIsModalOpen,
    collection,
    setSelectedOriginalRightLinkData,
    setData,
    setPublishRightLink,
    deleteData,
}) => {
    const initialRightLink = {
        profile: {
            title: '',
            titleColor: '',
            profilePicture: '',
            logo: 'colored',
            bgImage: false,
            bgImageLink: '',
            bgColor: '',
            bgCustomColor: '',
        },
        socialLinks: {
            group: [],
        },
        rightLinks: {
            groups: [],
            links: [],
        },
    };

    const handleClick = async (selection, action) => {
        // alert(`${action}`);
        if (action === 'delete click') {
            // eslint-disable-next-line no-restricted-globals
            if (confirm('Are you sure you want to delete?')) {
                const userData = { ...collection };
                const rightLinkDataCopy = userData.data;
                const dataWithoutSelected = rightLinkDataCopy.filter(
                    (dataCopy) => dataCopy.uuid !== selection.uuid
                );
                userData.data = dataWithoutSelected;
                setData(userData);
                await deleteData({
                    item: {
                        type: 'rightLink',
                        element: selection.profile.title,
                    },
                });
            }
        } else {
            const selectionClone = _.cloneDeep(selection);

            if (selection.uuid) {
                setData(selection);
                setSelectedOriginalRightLinkData(selectionClone);
                setPublishRightLink(selection.publish);
            } else {
                const uniqueId = uuidv4();
                setData({ uuid: uniqueId, ...selection });
                const selectionCopy = { uuid: uniqueId, ...selectionClone };
                setSelectedOriginalRightLinkData(selectionCopy);
            }
            setIsModalOpen((prev) => !prev);
        }
    };

    return (
        <Modal
            centered
            size="small"
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            closeOnDimmerClick={false}
        >
            <Modal.Header>Choose a Right Link or Create a new one</Modal.Header>
            <Modal.Content>
                <List divided selection verticalAlign="middle">
                    {collection && collection.length !== 0
                        ? collection.data.map((rightLink, i) => (
                              <>
                                  {rightLink.profile ? (
                                      <List.Item
                                          key={`list-item${i + 1}`}
                                          className="centeredListItem"
                                      >
                                          <List.Content
                                              verticalAlign="bottom"
                                              onClick={() =>
                                                  handleClick(
                                                      rightLink,
                                                      'reg click'
                                                  )
                                              }
                                          >
                                              {rightLink.profile.title}
                                          </List.Content>
                                          <List.Content floated="right">
                                              <Delete
                                                  collection="link"
                                                  data={collection}
                                                  selected={rightLink}
                                                  setData={setData}
                                                  handleClick={handleClick}
                                              />
                                          </List.Content>
                                      </List.Item>
                                  ) : (
                                      ''
                                  )}
                              </>
                          ))
                        : ''}
                </List>
                <div className="centeredListItem">
                    <Icon
                        color="green"
                        name="add square"
                        size="big"
                        className="custom"
                        link
                        onClick={() => handleClick(initialRightLink)}
                    />
                </div>
            </Modal.Content>
        </Modal>
    );
};

export default RightLinkCollectionModal;
