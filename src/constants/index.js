import { SiCodementor, SiMui } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { CgPerformance } from 'react-icons/cg';
import { TiWavesOutline } from 'react-icons/ti';
import { FcCollaboration } from 'react-icons/fc';

const navLinkArray = [
  { id: 101, title: 'Home', link: 'home' },
  { id: 102, title: 'Features', link: 'feature' },
  { id: 103, title: 'Projects', link: 'projects' },
  { id: 104, title: 'Resume', link: 'resume' },
  { id: 106, title: 'Contact', link: 'contact' },
];

export const introduction =
  'As a full-stack developer, I build responsive web apps using React, Vue 3, and Tailwind CSS, integrating Redux Toolkit and third-party APIs. I ensure efficient backend performance with TypeScript, focusing on accessibility and seamless user experiences.';
export default navLinkArray;

export const nextStreamDesc =
  'a cutting-edge streaming platform optimized for lightning-fast video loading, utilizing debouncing and caching for efficiency, offering exceptional user experience with real-time search suggestions and a robust live chat feature.';

export const linkedIn_Profile_link =
  'https://www.linkedin.com/in/shivam-tiwari-iitg';

export const github_Profile_link = 'https://github.com/OptimizationGuru';
export const leetcode_Profile_link = 'https://leetcode.com/u/tiwaribhaiya/';

export const workDescription = [
  {
    id: 1,
    title: 'UI/UX Design',
    description:
      'Focuses on translating design concepts into functional and visually appealing user interfaces while ensuring a smooth user experience.',
    icon: <SiMui />,
  },

  {
    id: 2,
    title: 'Performance Optimization',
    description:
      'Specializes in enhancing application performance through techniques like code optimization, caching, and efficient data handling to ensure fast and responsive apps.',
    icon: <CgPerformance />,
  },

  {
    id: 3,
    title: 'Scalable API Development',
    description:
      'Built performant, reliable APIs handling millions of requests daily, ensuring high availability, low latency, and efficient data exchange across distributed systems.',
    icon: <TiWavesOutline />,
  },
  {
    id: 4,
    title: 'Collaborations',
    description:
      'Led development and cross-functional collaborations for end-to-end project delivery, aligning efforts with business goals and user needs for seamless execution.',
    icon: <FcCollaboration />,
  },
  {
    id: 5,
    title: 'Mentoring & Training',
    description:
      'Provides guidance and support to interns and junior developers, sharing knowledge and best practices to foster skill development and team growth',
    icon: <SiCodementor />,
  },
  {
    id: 5,
    title: 'Code Review & QA',
    description:
      'Reviews code contributions to ensure quality, adherence to standards, and identify improvements.',
    icon: <FaCode />,
  },
];

export const fieldTypes = [
  {
    id: 1,
    type: 'name',
    test_func: 'field in not empty',
    errMsg: 'Minimum 3 characters',
    initialError: 'Name field is Empty',
  },
  {
    id: 2,
    type: 'phone',
    test_func: /^[6-9]\d{9}$/,
    errMsg: 'Please enter valid phone number',
    initialError: 'Phone field is Empty',
  },
  {
    id: 3,
    type: 'email',
    test_func: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errMsg: 'Please enter valid email',
    initialError: 'Email field is Empty',
  },
  {
    id: 4,
    type: 'subject',
    test_func: /[^.!?]*[.!?]/,
    errMsg: 'Minimum 50 characters..',
    initialError: 'Subject field is Empty',
  },
  {
    id: 5,
    type: 'message',
    test_func: /[^.!?]*[.!?]/,
    errMsg: 'Minimum one complete sentence.',
    initialError: 'Message field is Empty',
  },
];
