import './footer.styles.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className='footer'>
      {year} &copy; MY-MAGALU
    </div>
  )
}

export default Footer;