import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Introduce iMS',
    Svg: require('../../static/img/hiw1.svg').default,
    description: (
      <>
        Centralise your business operations, legal and regulatory requirements all in one system
      </>
    ),
  },
  {
    title: 'Business Operations Tool',
    Svg: require('../../static/img/hiw2.svg').default,
    description: (
      <>
        Use the system on a day to day basis. Manage your assets, risks, incidents, suppliers and documentation to improve your business operations and reduce costs preparing for audits
      </>
    ),
  },
  {
    title: 'Manage Compliance',
    Svg: require('../../static/img/hiw3.svg').default,
    description: (
      <>
        Introduce new ISO standards to your organisation using our Toolkit Modules.
      </>
    ),
  },
  {
    title: 'Internal Audits',
    Svg: require('../../static/img/hiw4.svg').default,
    description: (
      <>
        Conduct Internal Audits to ensure controls and processes are working. Identify Risks and Opportunities For Improvement.
      </>
    ),
  },
  {
    title: 'External Audits',
    Svg: require('../../static/img/hiw5.svg').default,
    description: (
      <>
        Grant access to Certification Bodies, allow them to conduct and coordinate your Certification Audits.
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
