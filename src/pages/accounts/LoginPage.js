import { ButtonDefault, ButtonLoginSocial } from "../../components/buttons";
import bgValidate from '../../assets/gifs/bg-validate.svg';
import snail from '../../assets/gifs/snail.svg';
import AnimatedImage from "../../components/AnimatedImage";

const LoginPage = () => {

    const SocialSide = () => {
        return (
            <div className='social-side flex-center flex-col'>
                <div className='flex align-center'>
                    <img alt='img' src='https://home-decor-store.netlify.app/static/media/logo1.ad299dc45e494c08cbd7.png' />
                    <p style={{ fontSize: '2.2rem' }}>TalkSpace</p>
                </div>
                {/* <span className="size-xl">Login using social media to get quick access</span> */}
                <ButtonLoginSocial
                    title='Google'
                    bgColor='#c32f10'
                    icon={<i className="fa-brands fa-google"></i>}
                />
                <ButtonLoginSocial
                    title='Twitter'
                    bgColor='#00aced'
                    icon={<i className="fa-brands fa-twitter"></i>}
                />
                <ButtonLoginSocial
                    title='Facebook'
                    bgColor='#3b5998'
                    icon={<i className="fa-brands fa-facebook"></i>}
                />
            </div>
        )
    };

    const AccountSide = () => {
        return (
            <div className='flex-col account-side'>
                <h3>Login to your account</h3>
                <div className='flex-center size-xl'>
                    <p>Don't have account?</p>
                    <a style={{ marginLeft: '5px' }} href="/">Sign Up Free</a>
                </div>
                <form className="flex-col form-validate">
                    <input
                        type='email'
                        placeholder="Email address"
                    />
                    <input
                        type='password'
                        placeholder="Password"
                    />
                    <div className="flex flex-between align-center size-xl" style={{ padding: '5px 0' }}>
                        <div className='flex-center checkbox-input'>
                            <input
                                type='checkbox'
                            />
                            <label>Remember me</label>
                        </div>
                        <a href=''>Forgot password</a>
                    </div>
                    <ButtonDefault
                        title='Login with email'
                        bgColor='#4f77ff'
                        width='100%'
                    />
                </form>
            </div>
        )
    };

    return (
        <>
            <div className='relative flex login-container'>
                <SocialSide />
                <AccountSide />
                {/* <img src={snail} alt='img' className='absolute bg-snail' /> */}
            </div>
            {/* <img src={bgValidate} alt='img' className='bg-validate' /> */}
        </>
    )
}

export default LoginPage;