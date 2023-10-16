import { Box, Typography } from "@mui/material";
import styles from './styles.module.css';
import defaultImage from '../../assets/brokenimg.png';

export interface IMovie {
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
}

interface IProps {
    movie: IMovie;
}

const CardMovie: React.FC<IProps> = ({ movie }) => {
    const generateStarRating = (average:number) => {
        const roundedValue = Math.round(average);
        return '⭐'.repeat(roundedValue);
    }
    const backgroundImage = movie.backdrop_path 
        ? `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` 
        : `url(${defaultImage})`;

    return (
        <Box
            className={styles.cardContainer}
            style={{ backgroundImage: backgroundImage }}
        >
            <Box
                component="span"
                className={styles.movieDetails}
            >
                <Typography variant="h6" color="white">
                    {movie.title}
                </Typography>
                <Box sx={{ maxHeight: "230px", overflow: "auto" }}>
                    <Typography variant="body2" color="white">
                        {(movie.overview)}
                    </Typography>
                </Box>
                <Typography variant="body2" color="white">
                    Release Date: {movie.release_date}
                </Typography>
                <Typography variant="body2" color="white">
                    Rating: {movie.vote_average} {generateStarRating(movie.vote_average)}
                </Typography>
            </Box>
        </Box>
    );
}

export default CardMovie;
