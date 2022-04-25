import Carousel from './Carousel/template';
import Footer from './Footer/template';
import Form from './Form/template';
import Header from './Header/template';
import Icon from './Icon/template';
import Image from './Image/template';
import List from './List/template';
import LongText from './LongText/template';
import Notice from './Notice/template';
import QrCode from './QrCode/template';
import RichText from './RichText/template';
import Text from './Text/template';

const baseTemplate = [
  Carousel,
  Footer,
  Form,
  Header,
  Icon,
  Image,
  List,
  LongText,
  Notice,
  QrCode,
  RichText,
  Text,
].map(ele => {
  return {
    ...ele,
    category: 'base'
  }
})

export default baseTemplate;