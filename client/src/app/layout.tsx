import './globals.css'
import type {Metadata} from 'next'
import localFont from 'next/font/local'
import {FrameBorder} from "@/components/frameBorder";

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
        <html lang="en">
            <body
                className={`${
                    defaultFont.className
                }`}
                >
            <>
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
            </>
            </body>
        </html>
    )
}
