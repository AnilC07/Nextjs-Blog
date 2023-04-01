import Image from "next/image"
import classes from './hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/anil.webp" alt="An image of me" width={300} height={300} />
        </div>
        <h1>Bonjour, je me prénomme Anil.</h1>
        <p>Ce blog est dédié au développement web - plus particulièrement en ce qui concerne le développement Front-End avec les Frameworks tel que Next.js et les librairies comme React ou Angular</p>
    </section>
  )
}

export default Hero