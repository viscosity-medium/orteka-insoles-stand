import './globals.css';
import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {FrameBorder} from "@/components/frameBorder";
import Head from 'next/head';
import { InnerWrapper } from '@/components/innerWrapper';

const defaultFont = localFont({src: "../fonts/TTNorms-Bold.otf"});

export const metadata: Metadata = {
  title: 'Orteka',
  description: 'Orteka client',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
        <html 
            lang="en"
        >
             <Head>
                <title>{"Orteka"}</title>
                <meta name="description" content={"Orteka client"} />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            </Head>
            <body
                className={`${
                    defaultFont.className
                }`}
                >
            <>
                <InnerWrapper>
                    <main
                        className="w-screen h-screen p-9"
                    >

                        <FrameBorder
                            borderType={"outer"}
                            setStore={true}
                        >
                            <FrameBorder
                                borderType={"inner"}
                            >
                                {
                                    children
                                }
                            </FrameBorder>
                        </FrameBorder>
                    </main>
                </InnerWrapper>
            </>
            </body>
        </html>
    )
}
