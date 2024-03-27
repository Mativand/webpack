import pngImage from '@/assets/png.png'
import Icon from '@/assets/svg.svg'

const About = () => {
    return (
        <div>
            About
            <img src={pngImage} height={100} width={100}/>
            <Icon style={{color: 'green'}} height={100} width={100}/>
        </div>
    );
};

export default About;