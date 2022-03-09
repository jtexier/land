import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import PlayerList from './PlayerList';
import { PLAYERS } from '../lib/ApolloClient'

import data from "../data/headtohead"

const mocks = [
  {
    request: {
      query: PLAYERS
    },
    result: {
      data
    }
  },
];

it('renders loading', () => {
    const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PlayerList />
      </MockedProvider>,
    );  
    const tree = component.toJSON();
    expect(tree.children).toContain('Loading...');
});
