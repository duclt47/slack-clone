import React, { useEffect, useState } from "react";
//icon
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

import db from "./firebase";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{ user}] = useStateValue();

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        })
    })
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Opswat</h2>

                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </div>
                <EditIcon />
            </div>
            <SidebarOption title="general" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />
            <hr />
            {
                channels.map(channel => (
                    <SidebarOption title={channel.name} id={channel.id}/>
                ))
            }
        </div>
    );
}

export default Sidebar;
