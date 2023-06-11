import PropTypes from 'prop-types';

export const Section = ({ title = '', children }) => {
  return (
    <section>
      {title && <h1 title="Please leave feedback">{title}</h1>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
