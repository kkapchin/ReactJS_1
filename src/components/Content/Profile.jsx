import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.profile}>
            <img
                src="https://p16-va.tiktokcdn.com/musically-maliva-obj/ea976458563620fbbc11833ed87b6896~c5_720x720.jpeg?x-expires=1607304700&x-signature=LyXir8sY3vuoVb11xZ7VxeflG2D%3D"
                alt=""/>
            <div className={s.name}>
                <h3>Ellen Ripley</h3>
            </div>
            <div className={s.item}>
                Date of birth: January 7, 2092<br/>
                Serial number: 5156170<br/>
                Location: Nostromo mission<br/>
            </div >
        </div>
    );
}

export default Profile;