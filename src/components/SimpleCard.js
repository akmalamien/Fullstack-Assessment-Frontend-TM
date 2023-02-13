import React from "react";
import { Card } from '@rneui/themed';
import { Text } from '@rneui/themed';

const SimpleCard = ({id,description,completed}) => {
  
  return (
    <Card>
      <Text>id : {id}</Text>
      <Text >Description : {description}</Text>
      <Text>Completed : {completed}</Text>       
    </Card>     
  );
};

export default SimpleCard;
