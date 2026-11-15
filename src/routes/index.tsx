//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/')({component: Home});
//Components:
import {LinkThatLooksLikeButton} from '#/components/custom/link-looking-like-button';


//Page:
function Home()
  {
    return (
        <main className='p-10'>
            <LinkThatLooksLikeButton link='/about' text='About'/>
        </main>
    )
  }