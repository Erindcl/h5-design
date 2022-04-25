import Audio from './Audio/template';
import Calendar from './Calendar/template';
import Map from './Map/template';
import Video from './Video/template';

const mediaTemplate = [
  Audio,
  Calendar,
  Map,
  Video,
].map(ele => {
  return {
    ...ele,
    category: 'media'
  }
})

export default mediaTemplate;