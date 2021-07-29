import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { fetchTrendingGifs } from '../../../services/giphy';
import { api } from '../../../tools/axios';
import { Box } from '../../../components/Box';

interface HomeSearchFormValues {
  search: string;
}

const HomeContainer = () => {
  const history = useHistory();
  const { data, isLoading } = useQuery('gifs/trending', fetchTrendingGifs);
  const { control, watch } = useForm<HomeSearchFormValues>({
    defaultValues: {
      search: ''
    },
  });
  const watchSearch = watch('search');

  
  

  return (
    <Box
      maxWidth={{ default: 'auto', lg: 1040 }}
    >
      <Box display='flex'>
        Search: 
        <Controller
          name="search"
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <input
              onChange={(e) => {
                console.log(`e.target.value`, e.target.value);
                onChange(e.target.value)
              }}
              value={value}
            />
          )}
          rules={{ required: 'Nome é obrigatório' }}
        />
      </Box>
      <Box>
        TRENDING
      </Box>
      { data?.data && (
        <Box
          display='flex'
          flexDirection={{ default: 'column', lg: 'row' }}
          flexWrap={{ default: 'nowrap', lg: 'wrap' }}
        >
          { data.data.map(gif => (
            <Box
              key={gif.id}
              maxHeight={{ default: 100, lg: 140 }}
              margin={{ default: 1 }}
              display={{ default: 'flex' }}
              flex={{ default: '1 0 1' }}
            >
              <img
                style={{ maxHeight: '100%' }}
                src={gif.images.original.url}
              />
            </Box>
          )) }
        </Box>
      ) }
    </Box>
  );
};

export default HomeContainer;
