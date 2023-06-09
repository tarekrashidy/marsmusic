import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
    const genraTitle = 'Pop';

    return (
        <div className='flex flex-col'>
            <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10 ">
                <h2 className='font-bold text-white text-3xl text-left'>Discover {genraTitle} </h2>

                <select onChange={()=>{}} className='bg-black text-white p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 ' name="" id="">
                    {
                        genres.map((genre) => (<option key={genre.value} value={genre.value}>{genre.title}</option>))}
                </select>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center gap-8">
{
    [...Array(10)].map((song,i) => <SongCard key={song} value={song} i={i} >{song}</SongCard>)}



            </div>
        </div>
    );
};

export default Discover;

