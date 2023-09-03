import PropTypes from 'prop-types';

const quote = {
  quote: 'Appear weak when you are strong, and strong when you are weak.',
  author: 'Sun Tzu',
}

export const Component = ({ title, subtitle }) => {
  return (
    <>
      <h1>Component</h1>
      <p>Title: { title }</p>
      <p>Subtitle: { subtitle }</p>
      <blockquote> { quote.quote } </blockquote>
      <blockquote>- { quote.author }</blockquote>
      <p> { JSON.stringify( quote ) } </p>
    </>
  );  
}

Component.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Component.defaultProps = {
  title: 'Default title',
  subtitle: 'Default subtitle',
};