import React from 'react';
import {View, Text} from 'react-native';
import CollapsibleList from './components/Collapsible/CollapsibleList';
import CollapsibleItem from './components/Collapsible/CollapsibleItem';

const App = () => {
  return (
    <CollapsibleList>
      <CollapsibleItem title="Collapsible Title 1">
        <View>
          <Text>
            Collapsible Text 1 ||| Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur a iusto, minus impedit distinctio
            voluptatum error velit reprehenderit odit delectus dolorem enim
            temporibus sapiente ad, aperiam repudiandae recusandae animi ipsam!
          </Text>
        </View>
      </CollapsibleItem>
      <CollapsibleItem title="Collapsible Title 2" isOpened>
        <View>
          <Text>
            Collapsible Text 2 ||| Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur a iusto, minus impedit distinctio
            voluptatum error.
          </Text>
        </View>
      </CollapsibleItem>
      <CollapsibleItem title="Collapsible Title 3">
        <View>
          <Text>
            Collapsible Text 3 ||| Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Pariatur a iusto, minus impedit distinctio
            voluptatum error velit reprehenderit odit delectus dolorem enim
            temporibus sapiente ad, aperiam repudiandae recusandae animi ipsam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a
            iusto, minus impedit distinctio voluptatum error velit reprehenderit
            odit delectus dolorem enim temporibus sapiente ad, aperiam
            repudiandae recusandae animi ipsam!
          </Text>
        </View>
      </CollapsibleItem>
    </CollapsibleList>
  );
};

export default App;