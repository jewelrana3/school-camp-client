


import { FaFacebook, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <div>
          <img style={{ borderRadius: '50px' }} className="w-12" src="https://i.ibb.co/chxbvxW/Untitled2.png" alt="photo" />

          <div className="text-lg md:text-xl lg:text-2xl font-semibold">
            <span className="text-orange-600"> Sports Foregin </span>
            <span className="text-blue-600 ml-3">Team</span>
            <div className='text-xs md:text-lg'>
              Online Sports Player Studio Institute
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Quice Links</span>
          <Link to='/' className="link link-hover">Home</Link>
          <Link to='/instructor' className="link link-hover">Instructors</Link>
          <Link to='/classes' className="link link-hover">Classes</Link>
          {/* TODO : conditional  */}
          <Link to='/dashboard' className="link link-hover">Dashboard</Link>
        </div>
        <div>
          <span className="footer-title">Info</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="flex justify-center items-center gap-6">
            <a href=""><FaFacebook className='w-8 h-8' /></a>
            <a href=""><FaGithub className='w-8 h-8' /></a>
            <a href=""><FaTwitter className='w-8 h-8' /></a>
            <a href=""><FaInstagram className='w-8 h-8' /></a>
          </div>
        </div>
      </footer>
      <div className='text-center p-10 bg-base-300 text-base-content'>
        <p>Copyright © 2023 - All right reserved by Sports Easy</p>
      </div>
    </>
  );
};

export default Footer;