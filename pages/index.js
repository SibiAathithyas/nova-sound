// In pages/index.js

import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/styles.module.css"; // Ensure the correct path for your CSS
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.body.classList.add(styles.body);
    return () => {
      document.body.classList.remove(styles.body);
    };
  }, []);

  // Define the categories and artists
  const categories = ["Pop", "Rock", "Hip-Hop", "Jazz", "Classical", "EDM"];

  const artists = [
    { name: "Alan Silvestri", image: "/images/artists/alan.jpg", genre: "Composers" },
    { name: "Charlie Puth", image: "/images/artists/charlie.jpg", genre: "Pop" },
    { name: "Dua Lipa", image: "/images/artists/dua.jpg", genre: "Pop" },
    { name: "Ed Sheeran", image: "/images/artists/ed.jpg", genre: "Pop" },
    { name: "Eminem", image: "/images/artists/eminem.jpg", genre: "Hip-Hop" },
    { name: "Hans Zimmer", image: "/images/artists/hans.jpg", genre: "Composers" },
    { name: "Kendrick Lamar", image: "/images/artists/kendrick.jpg", genre: "Hip-Hop" },
    { name: "Lana Del Rey", image: "/images/artists/lana.jpg", genre: "Pop" },
    { name: "Michael Giacchino", image: "/images/artists/michael.jpg", genre: "Composers" },
    { name: "Michael Jackson", image: "/images/artists/michael-jackson.jpg", genre: "Pop" },
    { name: "Ruth.B", image: "/images/artists/ruth.jpg", genre: "Pop" },
    { name: "Sia", image: "/images/artists/sia.jpg", genre: "Pop" },
    { name: "Taylor Swift", image: "/images/artists/taylor.jpg", genre: "Pop" },
    { name: "Thomas Newman", image: "/images/artists/thomas.jpg", genre: "Composers" },
    { name: "The Weeknd", image: "/images/artists/weeknd.jpg", genre: "Pop" },
  ];

  return (
    <>
      <Head>
        <title>Nova Sound</title>
        <meta name="description" content="Premium music experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <div className={styles.navContent}>
            <motion.div className={styles.logo} whileHover={{ scale: 1.05 }}>
              Nova Sound
            </motion.div>
            <div className={styles.navLinks}>
              {["Music", "Browse", "Radio", "Library"].map((item) => (
                <motion.a key={item} whileHover={{ opacity: 0.8 }} className={styles.navLink}>
                  {item}
                </motion.a>
              ))}
            </div>
            <div className={styles.searchBar}>
              <input type="text" placeholder="Search artists, songs, albums" />
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={styles.heroTitle}
            >
              Immerse yourself in <span>sound</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={styles.heroSubtitle}
            >
              Lossless audio. Curated playlists. Exceptional quality.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={styles.heroButtons}
            >
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={styles.primaryButton}>
                Try it free
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className={styles.secondaryButton}>
                Learn more →
              </motion.button>
            </motion.div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/hero.jpg" // Update this to the full-sized hero image
              alt="Music experience"
              fill
              priority
              className={styles.image}
            />
          </div>
        </section>

        {/* Categories Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Genres</h2>
          <div className={styles.categoryGrid}>
            {categories.map((category, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className={styles.categoryCard}>
                <div className={styles.categoryContent}>
                  <h3>{category}</h3>
                  <p>Explore {category} artists</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Artists Section */}
        <section className={styles.sectionDark}>
          <h2 className={styles.sectionTitle}>Featured Artists</h2>
          <div className={styles.artistScroller}>
            <div className={styles.artistTrack}>
              {artists.map((artist, index) => (
                <motion.div key={index} whileHover={{ scale: 1.03 }} className={styles.artistCard}>
                  <div className={styles.artistImage}>
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className={styles.image}
                    />
                  </div>
                  <h3 className={styles.artistName}>{artist.name}</h3>
                  <button className={styles.playButton}>
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>Nova Sound</div>
            <div className={styles.footerLinks}>
              {["Music", "Devices", "Playlists", "Support"].map((item) => (
                <a key={item} className={styles.footerLink}>
                  {item}
                </a>
              ))}
            </div>
            <div className={styles.footerLegal}>
              <p>© {new Date().getFullYear()} Nova Sound. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
