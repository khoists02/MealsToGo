import React from "react";
import { IRestaurantInfo } from "../../../types/restaurants.type";
import { SvgXml } from "react-native-svg";
import Star from "../../../../assets/star";
import Open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Section,
  Address,
  Info,
  Ratting,
  SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant }: IRestaurantInfo) => {
  const {
    name,
    icon,
    photos,
    isClosedTemporarily = true,
    isOpeningNow = true,
    rating = 0,
    address,
  } = restaurant;
  const ratingArr = Array.from(new Array(Math.ceil(rating || 0)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Ratting>
            {ratingArr.map(() => (
              <SvgXml xml={Star} width={20} height={20} />
            ))}
          </Ratting>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY </Text>
            )}
            <Spacer position="left" size="medium" />
            <Spacer position="left" size="medium">
              {isOpeningNow && <SvgXml xml={Open} width={20} height={20} />}
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
