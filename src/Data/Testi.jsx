
import {AiOutlineTwitter} from "react-icons/ai";
import {AiOutlineYoutube} from "react-icons/ai";
import {FiLinkedin} from "react-icons/fi";

import Usr1 from "../Assets/user1.png";
import Usr2 from "../Assets/user2.jpg";
import Usr3 from "../Assets/user3.jpg";

const Icon={fontSize:"4rem"}

const User=[
    {
      icon: <AiOutlineTwitter style={Icon} />,
      img: Usr1,
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
      author: "Abigale Mash",
      role: "CEO of django.Ltd"
    },
    {
        icon: <AiOutlineYoutube style={Icon} />,
        img: Usr2,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        author: "Britney Lagonda",
        role: "CEO of Legolas.Ltd"
      },
      {
        icon: <FiLinkedin style={Icon} />,
        img: Usr3,
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
        author: "Twitty Zonda",
        role: "CEO of Dxtrpro.Ltd"
      },
      
]

export default User;