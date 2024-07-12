import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

const columns = [
    {
        width: 200,
        label: 'Movie Name',
        dataKey: 'name',
    },
    {
        width: 120,
        label: 'Movie Director',
        dataKey: 'director',
    },
    {
        width: 120,
        label: 'Movie Category',
        dataKey: 'category',
    },
    {
        width: 120,
        label: 'Movie Release Year',
        dataKey: 'releaseYear',
        numeric: true,
    },
    {
        width: 120,
        label: 'Movie Poster',
        dataKey: 'poster',
        image: true,
    },
];

const rows = [
    {
        name: "Inception",
        director: "Christopher Nolan",
        category: "Sci-Fi",
        releaseYear: 2010,
        poster: 'https://m.media-amazon.com/images/I/71thFiIUSpL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: "The Dark Knight",
        director: "Christopher Nolan",
        category: "Action",
        releaseYear: 2008,
        poster: 'https://m.media-amazon.com/images/I/81CLFQwU-WL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: "Interstellar",
        director: "Christopher Nolan",
        category: "Sci-Fi",
        releaseYear: 2014,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaO6QdftMuMhbjTeNadf69fOpXqtRC5Uulwg&s'
    },
    {
        name: "Parasite",
        director: "Bong Joon Ho",
        category: "Thriller",
        releaseYear: 2019,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIM8KLkUPM6EjOxcy0a93P_4Wq0jZ0mRTkw&s'
    },
    {
        name: "The Godfather",
        director: "Francis Ford Coppola",
        category: "Crime",
        releaseYear: 1972,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLI9rGJ1IMLSPOAURFWzrA9kAnnRF8-i9oBw&s'
    },
    {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        category: "Crime",
        releaseYear: 1994,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEzIee3yNksWWDkmoPeAokwKgp3x1ifJNfA&s'
    },
    {
        name: "The Shawshank Redemption",
        director: "Frank Darabont",
        category: "Drama",
        releaseYear: 1994,
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM7SJr8q8Ki7Ova3Tt1DDlLikrVS5KR6o0eA&s'
    },
    {
        name: "Fight Club",
        director: "David Fincher",
        category: "Drama",
        releaseYear: 1999,
        poster: 'https://m.media-amazon.com/images/I/71o1aRN1FJL.jpg'
    },
    {
        name: "The Matrix",
        director: "The Wachowskis",
        category: "Sci-Fi",
        releaseYear: 1999,
        poster: 'https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: "Forrest Gump",
        director: "Robert Zemeckis",
        category: "Drama",
        releaseYear: 1994,
        poster: 'https://i.etsystatic.com/23402008/r/il/95ec24/5607149375/il_570xN.5607149375_flx6.jpg',
    }
];

const VirtuosoTableComponents = {
    Scroller: React.forwardRef((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
    TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{ width: column.width }}
                    sx={{
                        backgroundColor: 'grey',
                    }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index, row) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align={column.numeric || false ? 'right' : 'left'}
                >
                    {column.image ? <img src={row[column.dataKey]} alt={row.name} style={{ width: 100, height: 150 }} /> : row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

const View = () => {
    return (
        <div>
            <Paper style={{ height: 900, width: '100%' }}>
                <TableVirtuoso
                    data={rows}
                    components={VirtuosoTableComponents}
                    fixedHeaderContent={fixedHeaderContent}
                    itemContent={rowContent}
                />
            </Paper>
        </div>
    );
};

export default View;
