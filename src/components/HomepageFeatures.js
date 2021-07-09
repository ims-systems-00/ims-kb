import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Introduce iMS systems',
    Svg: require('../../static/img/hiw1.svg').default,
    description: (
      <>
        Centalise your business operations, legal and regulatory requirements in one system.
      </>
    ),
  },
  {
    title: 'Use as a business operations tool',
    Svg: require('../../static/img/hiw2.svg').default,
    description: (
      <>
        Use system on a day to day basis managing your assets, risks, incidents, 
        suppliers and documentations to improve your business operations and reduce
        time and effort preparing for audits
      </>
    ),
  },
  {
    title: 'Introduce or manage compliance',
    Svg: require('../../static/img/hiw3.svg').default,
    description: (
      <>
        Introduce new ISO standards using our tool kits which are embedded in our system
      </>
    ),
  },
  {
    title: 'Internal audits',
    Svg: require('../../static/img/hiw4.svg').default,
    description: (
      <>
        Conduct internal audits to ensure controls and processes are working. 
        Indentifying internal risks and opportunities for improvement.
      </>
    ),
  },
  {
    title: 'External audits',
    Svg: require('../../static/img/hiw5.svg').default,
    description: (
      <>
        Grant secure access to certification bodies to conduct and co-ordinate your certification audits.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
