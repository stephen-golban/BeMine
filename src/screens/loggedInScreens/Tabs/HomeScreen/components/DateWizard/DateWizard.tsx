import React from 'react';

import useDateWizard from './hooks/useDateWizard';
import { useIsFocused } from '@react-navigation/native';
import useUpdateEffect from 'react-use/lib/useUpdateEffect';

import { Popover } from '@/components/common';
import { DateWizardActions, DateWizardSteps } from './components';

import { SwiperRefType } from '@/interfaces/swiper';
import { Suggestion } from '@/types/suggestions';

interface IDateWizardProps {
  defaultOpenProposal?: boolean;
  swipeCard: SwiperRefType<Suggestion>;
  setDefaultOpenProposal: (arg: boolean) => void;
}

const DateWizard: React.FC<IDateWizardProps> = ({ setDefaultOpenProposal, swipeCard }) => {
  const isHomeScreenTabFocused = useIsFocused();

  const { popoverTriggerRef, stepUtilitiesRef, activeLikeBtn, isPopoverOpen, ...wizardUtilities } =
    useDateWizard(swipeCard);

  const handleClosePopover = () =>
    wizardUtilities.closePopover(() => {
      return setDefaultOpenProposal(false);
    });

  useUpdateEffect(() => {
    if (!isHomeScreenTabFocused) {
      return handleClosePopover();
    }
  }, [isHomeScreenTabFocused]);

  // useUpdateEffect(() => {
  //   if (!isDateProposalSent) {
  //     if (defaultOpenProposal && !isProposalTriggeredOnClick) {
  //       wizardUtilities.showPopover();
  //       swipeCard.current?.swipeBack();
  //     }
  //   }
  // }, [defaultOpenProposal, isDateProposalSent, isProposalTriggeredOnClick]);

  return (
    <React.Fragment>
      <Popover.Backdrop isBackdropOpen={isPopoverOpen} onTouchBackdrop={handleClosePopover} />
      <Popover isOpen={isPopoverOpen} onClose={handleClosePopover} trigger={popoverTriggerRef}>
        <Popover.Content marginHorizontal={10}>
          <DateWizardSteps
            swipeCard={swipeCard}
            ref={stepUtilitiesRef}
            closePopover={handleClosePopover}
            setActiveLikeBtn={wizardUtilities.setActiveLikeBtn}
          />
        </Popover.Content>
      </Popover>

      <DateWizardActions
        activeLikeBtn={activeLikeBtn}
        popoverTriggerRef={popoverTriggerRef}
        onPressLike={wizardUtilities.onPressLike}
        onPressDislike={wizardUtilities.onPressDislike}
      />
    </React.Fragment>
  );
};

export default DateWizard;
