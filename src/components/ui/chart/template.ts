import Area from './Area/template';
import Bar from './Bar/template';
import Line from './Line/template';
import Pie from './Pie/template';

const chartTemplate = [
  Area,
  Bar,
  Line,
  Pie,
].map(ele => {
  return {
    ...ele,
    category: 'chart'
  }
})

export default chartTemplate;