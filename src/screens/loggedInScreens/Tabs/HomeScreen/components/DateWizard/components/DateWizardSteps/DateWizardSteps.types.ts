import { SwiperRefType } from '@/interfaces/swiper';
import { Suggestion } from '@/types/suggestions';

export interface IDateWizardStepsProps {
  closePopover: () => void;
  swipeCard: SwiperRefType<Suggestion>;
  setActiveLikeBtn: (arg0: boolean) => void;
}
