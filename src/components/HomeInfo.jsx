import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Xin chào, tôi là  
        <span className='font-semibold mx-2 text-white'>Dương Hoàng Long</span>
        👋
        <br />
       
      </h1> // Ghi sau
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Học hỏi được nhiều kỹ năng <br /> trong thời gian học đại học
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn More
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Tôi đã làm được một số dự án trong lúc học. <br /> Bạn có muốn xem nó ?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Xem các dự án
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Hãy liên lạc với tôi nếu bạn muốn nói chuyện.<br/> 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;