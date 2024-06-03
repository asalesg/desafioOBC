import styles from "./styles.module.css"

export default function Profile({ avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl }) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <div>{bio}</div>
      <div>{phone}</div>
      <div>{email}</div>
      <div className={styles.links}>
        <a href={githubUrl} target="_blank">GitHub</a>
        <a href={linkedinUrl} target="_blank">LinkedIn</a>
        <a href={twitterUrl} target="_blank">Twitter / X</a>
      </div>
    </div>
  )
}

// export default function Profile(props) {
//   return (
//     <div className={styles.container}>
//       <img className={styles.avatar} src={props.avatar} alt={props.name} />
//       <h2 className={styles.name}>{props.name}</h2>
//       <div>{props.bio}</div>
//       <div>{props.phone}</div>
//       <div>{props.email}</div>
//       <div className={styles.links}>
//         <a href={props.githubUrl} target="_blank">GitHub</a>
//         <a href={props.linkedinUrl} target="_blank">LinkedIn</a>
//         <a href={props.twitterUrl} target="_blank">Twitter / X</a>
//       </div>
//     </div>
//   )
// }
