import React from 'react'

const VideoDetail = (props) => {
    if (!props.video){
        return <div>Loading....</div>
    } else {
        const video = props.video;
        //console.log(video)
        const id = video.id.videoId;
        const url = `http://www.youtube.com/embed/${id}`;

        const videoTitle = video.snippet.title;
        const videoDescription = video.snippet.description

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>

                <div className="details">
                    <div>{videoTitle}</div>
                    <div>{videoDescription}</div>
                </div>

            </div>
        );
    }

};

export default VideoDetail;