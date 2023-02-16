import React from 'react';

import PageWrapper from '@components/PageWrapper';

import { PrivateSSP } from '@interfaces/screen';

import { Text } from './styles';
import FooterBar from '@components/FooterBar';

const VoidScreen: React.FC<PrivateSSP<'Trade' | 'Portfolio'>> = ({ navigation, route }) => {
  return (
    <>
      <PageWrapper hasBack hasNav title={route.name}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ipsam laboriosam aut dolorem, esse nulla libero ea aliquid neque laborum velit ab, alias obcaecati praesentium illo non ut ratione ipsum.
          Voluptate laudantium maiores similique sint esse soluta illum temporibus reprehenderit quo numquam magni voluptatem voluptates sed minus maxime, ipsam, amet molestiae cumque tempora incidunt. Soluta at iure dolorem excepturi porro.
          Consequatur aspernatur quas eum rerum. Magni vitae tempore assumenda quam nemo reiciendis consequuntur repudiandae, excepturi dolorum reprehenderit praesentium voluptate nihil natus. Laborum natus ipsum impedit ad, saepe nesciunt commodi vel.
          Possimus, repudiandae sed fugit et doloremque consequatur excepturi alias nihil repellat sequi eligendi eum, dicta expedita accusamus quisquam veritatis labore officiis. Et voluptas perspiciatis dolores totam deserunt praesentium, itaque harum!
          Laudantium ipsam necessitatibus ex perferendis neque est explicabo eius odio, voluptatem, odit quasi magnam unde. Suscipit, esse illo sint soluta delectus perspiciatis hic rem eligendi aperiam architecto corporis quo porro?
        </Text>
      </PageWrapper>
      <FooterBar
        {...{navigation, route}}
      />
    </>
  );
}

export default VoidScreen;