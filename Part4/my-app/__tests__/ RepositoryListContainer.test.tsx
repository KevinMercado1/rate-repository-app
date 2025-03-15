import { render, screen } from '@testing-library/react-native';
import RepositoryListContainer from '../components/RepositoryList';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
          },
        ],
      };

      // Renderizamos el componente
      render(<RepositoryListContainer repositories={repositories} />);

      // Obtenemos los elementos de repositorio
      const repositoryItems = screen.getAllByTestId('repositoryItem');

      // Comprobamos que la información de cada repositorio esté renderizada
      const firstRepositoryItem = repositoryItems[0];
      expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik');
      expect(firstRepositoryItem).toHaveTextContent(
        'Build forms in React, without the tears'
      );
      expect(firstRepositoryItem).toHaveTextContent('TypeScript');
      expect(firstRepositoryItem).toHaveTextContent('1619');
      expect(firstRepositoryItem).toHaveTextContent('21856');
      expect(firstRepositoryItem).toHaveTextContent('88');
      expect(firstRepositoryItem).toHaveTextContent('3');

      // Lo mismo para el segundo repositorio
      const secondRepositoryItem = repositoryItems[1];
      expect(secondRepositoryItem).toHaveTextContent(
        'async-library/react-async'
      );
      expect(secondRepositoryItem).toHaveTextContent(
        'Flexible promise-based React data loader'
      );
      expect(secondRepositoryItem).toHaveTextContent('JavaScript');
      expect(secondRepositoryItem).toHaveTextContent('69');
      expect(secondRepositoryItem).toHaveTextContent('1760');
      expect(secondRepositoryItem).toHaveTextContent('72');
      expect(secondRepositoryItem).toHaveTextContent('3');
    });
  });
});
