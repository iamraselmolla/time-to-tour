import React, { useContext, useEffect, useState } from 'react';
import Packages from '../../Shared/Packages/Packages';
import { AuthContext } from '../../UserContext/AuthProvicer';

const Myservices = () => {
    const [allPackages, setPackages] = useState([]);
    const {user, logOut} = useContext(AuthContext)

    useEffect(() => {
        fetch(`https://service-server-beryl.vercel.app/added-services?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('tour-token')}`
            }
        })
        .then(res=>{
            if (res.status === 401 || res.status === 403) {
                return logOut();
            }
            return res.json()
        })
        .then(data => {
            
            return setPackages(data)
        })
        .catch(err => console.log(err.message))
    },[user?.email])
    return (
      <div className="section container py-5">
        <div className="row">
            <div className="h2 fw-bolder text-center text-white bg-black rounded py-3 mb-0">
                {allPackages.length === 0 && "You didn't add any service"}
                {allPackages.length === 1 && "You have added 1 service"}
                {allPackages?.length > 1 && `You added ${allPackages.length} services`}
            </div>
        </div>
        <div className="row">
            {allPackages?.map(pack => <Packages key={pack._id} data={pack}></Packages>)}
        </div>
      </div>
    );
};

export default Myservices;