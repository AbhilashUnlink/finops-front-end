/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import ProtectedLayout from '@/ui/layout/ProtectedLayout';

const PipelinesTable = dynamic(() => import('./(components)/PipelinesTable'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});


const PipelinesPage = () => {

    return (
        <ProtectedLayout>
            <PipelinesTable />
        </ProtectedLayout>
    )
}

export default PipelinesPage