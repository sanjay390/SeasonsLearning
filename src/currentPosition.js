import React from 'react';

const Current = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

    return <div>Hi there!</div>
}
export default Current;