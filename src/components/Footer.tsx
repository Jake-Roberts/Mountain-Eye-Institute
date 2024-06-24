import ThreeColumnInfo from "./ThreeColumnInfo";

const Footer = ({ contact, tall }: { contact: boolean; tall: boolean }) => {
  return (
    <footer>
      {contact && <ThreeColumnInfo tall={tall} />}
      <div className='attribution'>
        <p className='copyright'>Copyright ©2024 Mountain Eye Institute</p>
        <p>|</p>
        <a href='www.nextleveltech.com'>Created by Next Level Technologies</a>
      </div>
    </footer>
  );
};

export default Footer;
