//Router:
import {createFileRoute} from '@tanstack/react-router';
export const Route = createFileRoute('/about')({component: AboutPage});


//Page:
function AboutPage()
{
    return (
        <main className='p-10'>
            <h1>About Page</h1>
        </main>
    );
}