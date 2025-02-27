import './about.css';
import profilepic from '../static/best2.jpg';

export default function AboutPage() {
    return (
        <div id="about-page">
            <title>Just Me</title>
            <div id="about-filler-top">
                <div id="about-filler-left">
                    <div id="about-image">
                        <img src={profilepic} id="profile-pic" alt="Profile Pic" />
                    </div>
                </div>
                <div id="about-filler-right">


                </div>
            </div>


            <div id="about-content">
                <div id="about-title">
                    <h1>About Me</h1>
                </div>
                <div id="about-text">
                    <p>
                        I am a self taught back-end developer. The majority of my experience is in Golang building CLI applications and HTTP servers, but have experience in web development with Javascript. I built small apps and websites in my youth and was always interested in becoming a developer. My passion never quite faded, but life lead me down other paths. With various life experiences and a new perspective, I found myself developing again.
                    </p>
                    <p>
                        As I have progressed my skills, I have found that I enjoy the less abstracted side of development. I enjoy working with databases, building APIs, and creating tools that help others. I am always looking to learn more and improve my skills. I am currently working on a few projects that I hope to share soon.
                    </p>
                </div>
            </div>
        </div>
    );
}

