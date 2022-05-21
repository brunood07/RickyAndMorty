import Slider from "react-slick";

import { CharacterData } from "../../hooks/useCharacters";
import { EpisodesList } from "../EpisodesList";
import { Container } from "./styles";

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: CharacterData[];
  created: string;
}

interface SeasonEpisodes {
  episodes: EpisodeData[];
}

export function CustomSlider(props: SeasonEpisodes) {
  const { episodes } = props;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {episodes.map((item) => (
          <EpisodesList
            key={item.id}
            id={item.id}
            name={item.name}
            air_date={item.air_date}
            episode={item.episode}
            characters={item.characters}
            created={item.created}
          />
        ))}
      </Slider>
    </Container>
  );
}