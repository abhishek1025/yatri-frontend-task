import Link from 'next/link';

export default function Logo() {
    return (
        <div>
            <Link href="/">
                <p className='font-bold text-2xl'>
                    Yatri <span className='text-primary-600'>Blogs</span>
                </p>
            </Link>
        </div>
    );

}