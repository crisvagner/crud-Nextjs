import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className={styles.teste} style={{ color: "white" }}>
        Olá Cris! Melhor do Mundo kkk
      </h1>
    </>
  )
}
