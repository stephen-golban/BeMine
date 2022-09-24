import * as Icons from '@/components/icons';

export const MAIN_SCENARIOS = [
  { selected: false, name: 'Walk', icon: Icons.IceCreamIcon },
  { selected: false, name: 'Dinner', icon: Icons.DinnerIcon },
  { selected: false, name: 'Movie', icon: Icons.MovieIcon },
];

export const SCENARIOS = {
  Walk: {
    further: [
      { selected: false, name: 'Museum', icon: Icons.MuseumIcon },
      { selected: false, name: 'Park', icon: Icons.ParkIcon },
      { selected: false, name: 'Sunset', icon: Icons.SunsetIcon },
      { selected: false, name: 'Expo', icon: Icons.ExpoIcon },
      { selected: false, name: 'Driving', icon: Icons.DrivingIcon },
      { selected: false, name: 'Zoo', icon: Icons.ZooIcon },
      { selected: false, name: 'Theatre', icon: Icons.TheatreIcon },
    ],
    last: [
      { selected: false, name: 'Ice-cream', icon: Icons.IceCreamIcon },
      { selected: false, name: 'Coffee Time', icon: Icons.CoffeeIcon },
      { selected: false, name: 'Take a Drink', icon: Icons.DrinkIcon },
    ],
  },
  Dinner: {
    further: [
      { selected: false, name: 'Italian', icon: Icons.PizzaIcon },
      { selected: false, name: 'French', icon: Icons.FrenchFoodIcon },
      { selected: false, name: 'Japanese', icon: Icons.SushiIcon },
      { selected: false, name: 'American', icon: Icons.BurgerIcon },
      { selected: false, name: 'Chinese', icon: Icons.ChinesseFoodIcon },
      { selected: false, name: 'Arab', icon: Icons.ArabFoodIcon },
      { selected: false, name: 'Thai', icon: Icons.ThaiFoodIcon },
    ],
    last: [
      { selected: false, name: 'Restaurant', icon: Icons.RestaurantIcon },
      { selected: false, name: 'Delivery', icon: Icons.DeliveryIcon },
      { selected: false, name: 'Cook Together', icon: Icons.CockTogetherIcon },
    ],
  },
  Movie: {
    further: [
      { selected: false, name: 'Detective', icon: Icons.DetectiveIcon },
      { selected: false, name: 'Drama', icon: Icons.DramaIcon },
      { selected: false, name: 'Romance', icon: Icons.HeartIcon },
      { selected: false, name: 'Fantasy', icon: Icons.FantasyIcon },
      { selected: false, name: 'Action', icon: Icons.ActionIcon },
      { selected: false, name: 'Horror', icon: Icons.HorrorIcon },
      { selected: false, name: 'Space', icon: Icons.SpaceIcon },
    ],
    last: [
      { selected: false, name: 'Cinema', icon: Icons.CinemaFoodIcon },
      { selected: false, name: 'Home', icon: Icons.HomeOptionIcon },
      { selected: false, name: 'Netflix Party', icon: Icons.NetflixIcon },
    ],
  },
};

export const selectScenario = (key: string) => SCENARIOS[key as keyof typeof SCENARIOS];

export const allScenarios = () => {
  const data: typeof MAIN_SCENARIOS[0][] = [];
  MAIN_SCENARIOS.forEach((scenario) => {
    data.push(scenario);
    selectScenario(scenario.name)?.further.map((item) => {
      data.push(item);
    });
    selectScenario(scenario.name)?.last.map((item) => {
      data.push(item);
    });
  });
  return data;
};
