import './about_style.css';
import profilepic from '../static/me.jpg';

export default function AboutPage() {
    return (
        <div className='page' id="about-me">
            <title>Just Me</title>
            <div id="about-profile-pic">
                <img src={profilepic} id="profile-pic" alt="Profile Pic" />
            </div>
            <div className='about-block' id="about-leet">
                <div id="about-leet-display">
                    I am a display
                </div>
            </div>

            <div className='about-block' id="about-story">
                <p>
                    I am a self taught back-end developer. The majority of my experience is in Golang building CLI applications and HTTP servers, but have experience in web development with Javascript. I built small apps and websites in my youth and was always interested in becoming a developer. My passion never quite faded, but life lead me down other paths. With various life experiences and a new perspective, I found myself developing again.
                </p>
                <p>
                    As I have progressed my skills, I have found that I enjoy the less abstracted side of development. I enjoy working with databases, building APIs, and creating tools that help others. I am always looking to learn more and improve my skills. I am currently working on a few projects that I hope to share soon.
                </p>
            </div>
        </div>
    );
}

