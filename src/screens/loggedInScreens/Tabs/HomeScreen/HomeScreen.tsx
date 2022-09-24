import React from 'react';
import { SafeAreaView } from 'react-native';

import { useDateSuggestions, useProfileFromDateSuggestions } from './hooks';

import { Box } from '@/components/common';
import { InfoIcon } from '@/components/icons';
import Swiper from 'react-native-deck-swiper';
import HomeSkeleton from './components/HomeSkeleton';
import { Carousel, CardButton } from '@/components/ui';
import DateWizard from './components/DateWizard/DateWizard';

import { IHomeScreenProps } from './HomeScreen.types';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@/theme';
// import useFakeDateSuggestions from './hooks/useFakeDateSuggestions';

const Home: React.FC<IHomeScreenProps> = ({ route }) => {
  const routeId = route?.params.id;
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { suggestions, error, loading } = useDateSuggestions({ limit: 20 });
  const [defaultOpenProposal, setDefaultOpenProposal] = React.useState(false);
  console.log('sugg', suggestions);

  const { swiperRef } = useProfileFromDateSuggestions({ routeId, suggestions });

  if (loading || error || !suggestions.length) {
    return <HomeSkeleton />;
  }

  return (
    <SafeAreaView>
      <Box justifyContent="center" backgroundColor="black_70">
        <Swiper
          ref={swiperRef}
          swipeBackCard
          onSwipedLeft={() => console.log('swiped left')}
          onSwipedRight={() => console.log('swiped right')}
          backgroundColor="transparent"
          cards={suggestions}
          disableBottomSwipe
          disableTopSwipe
          cardHorizontalMargin={0}
          cardVerticalMargin={0}
          stackSize={2}
          renderCard={(card) => <Carousel card={card} isDateProposalOpened={defaultOpenProposal} />}
        />
        <CardButton
          variant="topRight"
          backgroundColor="transparent"
          onPress={() => navigate('Info' as keyof typeof navigate)}
        >
          <InfoIcon width={40} height={40} color={colors.white_30} />
        </CardButton>
        <DateWizard
          swipeCard={swiperRef}
          defaultOpenProposal={defaultOpenProposal}
          setDefaultOpenProposal={setDefaultOpenProposal}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Home;
