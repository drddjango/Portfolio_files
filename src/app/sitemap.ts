import { doctorsData } from '@/utils/DoctorsData'
import {  MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const doctor = doctorsData
    const doctors: MetadataRoute.Sitemap = doctor.map((doctor) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/team/${doctor.url}`,
    }))

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
        },
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}/about`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/team`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/treatments`
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`
        },
        ...doctors,
    ]
}
