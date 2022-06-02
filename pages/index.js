import CelebrityList from "../components/celebrities/CelebrityList";

const DUMMY_DATA = [
    {
        id: 'c1',
        title: 'title1',
        image: 'https://ichef.bbci.co.uk/images/ic/400xn/p0b0hht5.jpg',
        address: 'address 1',
        description: 'description 1'
    },
    {
        id: 'c2',
        title: 'title2',
        image: 'https://ichef.bbci.co.uk/images/ic/400xn/p0b0hht5.jpg',
        address: 'address 2',
        description: 'description 2'
    },
    {
        id: 'c3',
        title: 'title1',
        image: 'https://ichef.bbci.co.uk/images/ic/400xn/p0b0hht5.jpg',
        address: 'address 3',
        description: 'description 3'
    },
    {
        id: 'c4',
        title: 'title4',
        image: 'https://ichef.bbci.co.uk/images/ic/400xn/p0b0hht5.jpg',
        address: 'address 4',
        description: 'description 4'
    }
]

const HomePage = () => {
    return  <CelebrityList celebrities={DUMMY_DATA} />
}

export default HomePage;