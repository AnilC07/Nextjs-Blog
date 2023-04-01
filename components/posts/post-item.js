import React from "react";
import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
const {title, image, excerpt, date, slug} = props.post   
console.log({slug,image})

const formattedDate = new Date(date).toLocaleDateString('fr-FR', {
  day:"numeric",
  month:"long",
  year:"numeric",
})

const imagePath = `/images/posts/${slug}/${image}`
const linkPath=`/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} layou="responsive" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
