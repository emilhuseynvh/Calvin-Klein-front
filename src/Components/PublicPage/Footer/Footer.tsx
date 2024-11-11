import React from 'react'
import Lists from './Lists'

const sen: string[] = [
    '40% Off Sitewide. Promotion ends 10.16.24 at 11:59 PM PT. Prices are as marked.<br />Excludes Calvin Klein Studio and select styles. Only valid at calvinklein.us.<br />Not valid on gift cards or previous purchases.',
    '30% Off Underwear. Promotion ends 10.16.24 at 11:59 PM PT. Prices are as marked.<br />Exclusions apply. Only valid at calvinklein.us. Not valid on gift cards or previous purchases.',
    'Extra 20% off Sale. Promotion ends 10.16.24 at 11:59 PM PT. Discount taken at checkout.<br />Exclusions apply. Cannot be combined with any other offer. Only valid at calvinklein.us.<br />Not valid on gift cards or previous purchases.'
]

const Footer: React.FC = () => {
    return (
        <div className='bg-black text-white py-8 md:px-12 px-4'>
            {sen.map((item, i) => (
                <p className='md:text-center text-xs md:text-sm py-2.5 text-dark-white' key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
            <Lists />
        </div>
    )
}

export default Footer
