import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from 'react';
import { Vortex } from 'react-loader-spinner';
import { getMoviesMoviesByCategory } from '../../services/getMoviesByCateogory';
import CardMovie from "../CardMovie/CardMovie";
import styles from './styles.module.css';
import { translateValue } from '../../utils/translateCategories';

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}


export const MovieGrid:React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalMovies, setTotalMovies] = useState(0);
  const [currentPage, setcurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState('now_playing');
  
  const fetchMovies = useCallback(
    async (category: string, page: number) => {
      setIsLoading(true);
      try {
        const data = await getMoviesMoviesByCategory(category, page);
        setTotalMovies(data.total_pages);
        setcurrentPage(data.page);
        setMovies(data.results.map((movie: Movie) => movie));
      } catch (error) {
        console.error(`Error fetching ${category} movies:`, error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading, setTotalMovies, setcurrentPage, setMovies]
  );
  
  useEffect(() => {
    fetchMovies(currentCategory, currentPage);
  }, [currentCategory, currentPage, fetchMovies]);
  

  const handleCategoryChange = (category:string) => {
    setCurrentCategory(category);
  };

  const handleNextPage = () => {
    if (currentPage < totalMovies) {
      setcurrentPage(prev => prev + 1);
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(prev => prev - 1);
    }
  }

  const loader = <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "147px", overflow: "auto" }}>
        <Button
          onClick={() => handleCategoryChange('latest')}
          sx={{ background: currentCategory === 'latest' ? "rgba(81, 65, 234, 0.80)" : '' }}
        >
          Latest
        </Button>

        <Button
          onClick={() => handleCategoryChange('now_playing')}
          sx={{ background: currentCategory === 'now_playing' ? "rgba(81, 65, 234, 0.80)" : '' }}
        >
          Now playing
        </Button>

        <Button
          onClick={() => handleCategoryChange('popular')}
          sx={{ background: currentCategory === 'popular' ? "rgba(81, 65, 234, 0.80)" : '' }}
        >
          Popular
        </Button>

        <Button
          onClick={() => handleCategoryChange('top_rated')}
          sx={{ background: currentCategory === 'top_rated' ? "rgba(81, 65, 234, 0.80)" : '' }}
        >
          Top rated
        </Button>

        <Button
          onClick={() => handleCategoryChange('upcoming')}
          sx={{ background: currentCategory === 'upcoming' ? "rgba(81, 65, 234, 0.80)" : '' }}
        >
          Upcoming
        </Button>
      </Box>
      <Box sx={{ marginBottom: "120px" }}>
        <Typography color={"#ffff"} variant='h4'>{translateValue(currentCategory)}</Typography>
        <Typography color={"#ffff"} variant='h6'>Texto introductorio</Typography>
      </Box>
      <Box className={styles.gridContainer}>

        {
          isLoading ? loader : 
          movies && movies.map((movie:Movie) => <CardMovie key={movie.id} movie={movie} />)
        }

      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "145px", gap: "20px" }}>
        <span onClick={handlePreviousPage} style={{
          display: "flex", width: "30px", height: "30px", borderRadius: "30px",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "#5141EA",
          color: "white",
          cursor: "pointer"
        }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <Typography color={"white"}>{currentPage} / {totalMovies}</Typography>
        <span
          onClick={handleNextPage}
          style={{
            display: "flex", width: "30px", height: "30px", borderRadius: "30px",
            justifyContent: "space-evenly",
            alignItems: "center",
            background: "#5141EA",
            color: "white",
            cursor: "pointer"

          }}>
          <ArrowForwardIosIcon fontSize="small" />
        </span>
      </Box>
    </Box>
  )
}



