import React from 'react'
import { connect } from 'react-redux'
import withAuthorization from 'components/hoc/withAuthorization'

class CollaborationDetail extends React.Component {

    render() {
        return (
            <div className="content-wrapper">
                <div className="root">
                    {/* Body */}
                    <div className="body">
                        <div className="viewListUser">
                            <div
                                className="viewWrapItem">
                                <img
                                    className="viewAvatarItem"
                                    src="https://freesvg.org/img/FaceWoman.png"
                                    alt="icon avatar"
                                />
                                <div className="viewWrapContentItem">
                  <span className="textItem">Nickname: Inna Soldier
                  </span>
                                    <span className="textItem">online
                  </span>
                                </div>
                            </div>
                        </div>
                        <div className="viewBoard">
                            <div className="viewChatBoard">
                                <div className="headerChatBoard">
                                    <img className="viewAvatarItem" src="https://freesvg.org/img/FaceWoman.png" alt="icon avatar" />
                                    <span className="textHeaderChatBoard">Inna Soldier</span>
                                </div>
                                <div className="viewListContentChat">
                                    <div className="viewWrapItemLeft">
                                        <div className="viewWrapItemLeft3">
                                            <img src="https://freesvg.org/img/FaceWoman.png" alt="avatar" className="peerAvatarLeft" />
                                            <div className="viewItemLeft">
                                                <span className="textContentItem">hey</span>
                                            </div>
                                        </div>
                                        <span className="textTimeLeft">Oct 31, 2019</span>
                                    </div>
                                    <div className="viewItemRight">
                                        <span className="textContentItem">hey</span>
                                    </div>
                                    <div style={{float: "left", clear: "both"}}></div>
                                </div>
                                <div className="viewBottom">
                                    <input
                                        onChange={() => {}}
                                        className="viewInput"
                                        placeholder="Type your message..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withAuthorization(CollaborationDetail)
